import * as React from "react";
import {
  Virtualizer,
  VirtualizerOptions,
  measureElement,
  useWindowVirtualizer,
} from "@tanstack/react-virtual";

import { cn } from "@/lib/utils";
import { Stack } from "@/registry/default/akasha-ui/stack";

const SCROLL_RESTORATION_CONFIG = "scroll-restoration-config";

const InfiniteScrollContext = React.createContext<{
  listOffset: number;
  itemSpacing?: number;
  estimatedHeight: number;
  loading?: boolean;
  hasNextPage?: boolean;
  virtualizer: Virtualizer<Window, Element>;
} | null>(null);

const useInfiniteScrollContext = () => {
  const context = React.useContext(InfiniteScrollContext);
  if (!context) {
    throw new Error(
      "`useInfiniteScrollContext` must be used within `InfiniteScroll`"
    );
  }
  return context;
};

interface InfiniteScrollProps extends React.HTMLAttributes<HTMLDivElement> {
  count: number;
  estimatedHeight: number;
  lanes?: number;
  overScan?: number;
  itemSpacing?: number;
  hasNextPage?: boolean;
  loading?: boolean;
  header?: React.ReactNode;
  enableScrollRestoration?: boolean;
  lastScrollRestorationKey?: string;
  scrollRestorationStorageKey?: string;
  onLoadMore?: () => void;
}

const InfiniteScroll: React.FC<InfiniteScrollProps> = ({
  count,
  estimatedHeight,
  lanes,
  overScan = 5,
  itemSpacing,
  hasNextPage,
  loading,
  header,
  className,
  enableScrollRestoration = false,
  lastScrollRestorationKey,
  scrollRestorationStorageKey = "storage-key",
  children,
  onLoadMore,
  ...props
}) => {
  const parentRef = React.useRef<HTMLDivElement>(null);
  const scrollRestorationStorageKeyRef = React.useRef(
    scrollRestorationStorageKey
  );
  const lastScrollRestorationKeyRef = React.useRef(lastScrollRestorationKey);
  const parentOffsetRef = React.useRef(0);
  const headerRef = React.useRef<HTMLDivElement>(null);
  const headerHeightStyle = React.useRef("");
  const isMobile = window.matchMedia("(max-width: 640px)").matches;

  const getHeaderHeight = React.useCallback(() => {
    const scrollConfig = restoreScrollConfig(
      scrollRestorationStorageKeyRef.current
    );
    if (!scrollConfig || typeof scrollConfig !== "object") return null;
    if (
      scrollConfig.lastScrollRestorationKey &&
      lastScrollRestorationKeyRef.current !==
        scrollConfig.lastScrollRestorationKey
    )
      return null;
    return typeof scrollConfig.headerHeight === "number"
      ? scrollConfig.headerHeight
      : null;
  }, []);

  const getInitialMeasurementsCache = React.useCallback(() => {
    const scrollConfig = restoreScrollConfig(
      scrollRestorationStorageKeyRef.current
    );
    if (
      !scrollConfig ||
      typeof scrollConfig !== "object" ||
      typeof scrollConfig.options !== "object"
    )
      return [];
    return scrollConfig.options.initialMeasurementsCache;
  }, []);

  React.useLayoutEffect(() => {
    parentOffsetRef.current = parentRef.current?.offsetTop ?? 0;
  }, [parentRef.current?.offsetTop]);

  React.useLayoutEffect(() => {
    const headerHeight = getHeaderHeight();
    if (headerHeight) headerHeightStyle.current = `min-h-[${headerHeight}px]`;
  }, [getHeaderHeight]);

  const virtualizer = useWindowVirtualizer({
    count,
    lanes,
    overscan: overScan,
    gap: itemSpacing,
    initialMeasurementsCache: getInitialMeasurementsCache(),
    scrollMargin: parentOffsetRef.current,
    measureElement: isMobile
      ? (element, entry, instance) => {
          const dataIndex = instance.indexFromElement(element);
          if (
            instance.scrollDirection === "backward" &&
            instance.measurementsCache?.[dataIndex]
          ) {
            return instance.measurementsCache[dataIndex].size;
          }
          return measureElement(element, entry, instance);
        }
      : measureElement,
    estimateSize: () => estimatedHeight,
  });

  const virtualItems = virtualizer.getVirtualItems();
  const totalSize = virtualizer.getTotalSize();

  const vListOffset = virtualItems?.[0]?.start
    ? virtualItems[0].start - virtualizer.options.scrollMargin
    : 0;

  const minHeight =
    virtualizer.isScrolling && loading && hasNextPage
      ? totalSize + overScan * estimatedHeight
      : totalSize;

  React.useEffect(() => {
    if (!hasNextPage || loading) return;

    const lastItem = virtualItems[virtualItems.length - 1];
    if (lastItem && lastItem.index >= count - 1) {
      const timeout = setTimeout(() => {
        onLoadMore?.();
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [hasNextPage, count, loading, virtualItems, onLoadMore]);

  const virtualListUi = (
    <>
      {header && (
        <div ref={headerRef} className={headerHeightStyle.current}>
          {header}
        </div>
      )}
      <div
        ref={parentRef}
        className={cn("relative w-full", className)}
        style={{
          ...{
            minHeight: `${minHeight}px`,
          },
        }}
        {...props}
      >
        <InfiniteScrollContext.Provider
          value={{
            listOffset: vListOffset,
            itemSpacing,
            estimatedHeight,
            loading,
            hasNextPage,
            virtualizer,
          }}
        >
          {children}
        </InfiniteScrollContext.Provider>
      </div>
    </>
  );

  return enableScrollRestoration ? (
    <WithScrollRestoration
      virtualizer={virtualizer}
      scrollRestorationStorageKey={scrollRestorationStorageKey}
      lastScrollRestorationKey={lastScrollRestorationKey || ""}
      count={count}
      overScan={overScan}
      headerRef={headerRef}
      offsetAttribute="data-offset"
    >
      {virtualListUi}
    </WithScrollRestoration>
  ) : (
    <>{virtualListUi}</>
  );
};

const getMinHeight = ({ cachedSize }: { cachedSize: number }) => {
  if (cachedSize) {
    return cachedSize;
  }
  return "";
};
interface InfiniteScrollListProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "children"> {
  loadingIndicator?: React.ReactNode;
  children: (index: number) => React.ReactElement;
}

const InfiniteScrollList = React.forwardRef<
  HTMLDivElement,
  InfiniteScrollListProps
>(({ loadingIndicator, className, children, ...props }, ref) => {
  const {
    listOffset,
    itemSpacing,
    estimatedHeight,
    loading,
    hasNextPage,
    virtualizer,
  } = useInfiniteScrollContext();

  const virtualItems = virtualizer.getVirtualItems();
  const { initialMeasurementsCache } = virtualizer.options;
  return (
    <Stack
      ref={ref}
      data-offset={listOffset}
      className={cn("absolute w-full top-0 left-0", className)}
      style={{
        transform: `translateY(${listOffset}px)`,
        gap: `${itemSpacing}px`,
      }}
      {...props}
    >
      {virtualItems.map((virtualItem) => {
        const cachedSize =
          initialMeasurementsCache?.[virtualItem.index]?.size || 0;
        const minHeight = loading ? estimatedHeight : cachedSize;

        return (
          <div
            key={virtualItem.key}
            data-index={virtualItem.index}
            ref={virtualizer.measureElement}
            style={{
              ...(minHeight && {
                minHeight: `${minHeight}px`,
              }),
            }}
          >
            {children(virtualItem.index)}
          </div>
        );
      })}
      {loading && hasNextPage && virtualItems.length > 0 && loadingIndicator}
    </Stack>
  );
});

type Config = {
  /*
   * The last scroll offset position
   **/
  scrollOffset: number;
  /*
   * The offset of the parent container holding the virtual list
   **/
  topOffset: number;
  /*
   * Index of the reference item used for scroll restoration
   **/
  referenceItemIndex: number;
  /*
   * Virtualizer's options
   **/
  options: VirtualizerOptions<Window, Element>;
  /*
   * Last scroll restoration session key used to either reset the scroll restoration config
   * if the current key and the one before do not match or to use the scroll config.
   **/
  lastScrollRestorationKey: string;
  /*
   * Height of a header element in a virtual list
   **/
  headerHeight?: number;
  /*
   * Flag to check if a scroll restoration is done
   **/
  done?: boolean;
} & { [key: string]: unknown };

interface IRestoreScrollPosition {
  virtualizer: Virtualizer<Window, Element>;
  overScan: number;
  offsetAttribute: string;
  scrollRestorationStorageKey: string;
}

/*
 * Restore scroll position
 **/
export async function restoreScrollPosition({
  virtualizer,
  overScan,
  offsetAttribute,
  scrollRestorationStorageKey,
}: IRestoreScrollPosition) {
  try {
    const scrollConfig = restoreScrollConfig(scrollRestorationStorageKey);
    if (!scrollConfig) return;
    const { referenceItemIndex, topOffset, scrollOffset, options, done } =
      scrollConfig;
    /*
     * Validate scroll restoration config fields
     **/
    if (
      typeof referenceItemIndex !== "number" ||
      !options ||
      typeof options !== "object" ||
      typeof scrollOffset !== "number"
    )
      return;

    const scrollIndex = options.initialMeasurementsCache?.findIndex(
      (measurementCache) => measurementCache.index === referenceItemIndex
    );

    if (scrollIndex && scrollIndex !== -1) {
      const currentTopOffset =
        virtualizer.getVirtualItems()?.[0]?.start -
        virtualizer.options.scrollMargin;
      /*
       * Check if the latest virtual items container offset matches with the current offset to determine
       * if the current offset can be used for scroll restoration.
       **/
      const offsetMatched =
        Number(
          document
            .querySelector(`[${offsetAttribute}]`)
            ?.getAttribute(offsetAttribute)
        ) === currentTopOffset && typeof currentTopOffset === "number";

      /*
       * Check if all conditions for scroll restoration are satisfied.
       **/
      if (
        requiredItemsLoaded({ virtualizer, scrollIndex, overScan, options }) &&
        offsetMatched &&
        !done
      ) {
        /*
         * Check the difference between the last offset of the virtual list container with the current one.
         * If there is a difference add or subtract from the last scroll offset to determine the normalized scroll restoration offset.
         **/
        const offsetDelta = topOffset - currentTopOffset;
        const scrollToOffset =
          typeof offsetDelta === "number"
            ? scrollOffset - offsetDelta
            : scrollOffset;
        virtualizer.scrollToOffset(scrollToOffset, {
          align: "start",
          behavior: "auto",
        });
        if (scrollToOffset !== virtualizer.scrollOffset) {
          setTimeout(() => {
            virtualizer.scrollToOffset(scrollToOffset, {
              align: "start",
              behavior: "auto",
            });
          }, 0);
        }
        storeScrollConfig(scrollRestorationStorageKey, {
          ...scrollConfig,
          done: true,
        });
        setTimeout(() => {
          removeItemFromScrollConfig(scrollRestorationStorageKey);
        }, 500);
      }
    }
  } catch (error) {
    console.error(error);
    removeItemFromScrollConfig(scrollRestorationStorageKey);
  }
}

/*
 * Restore scroll config
 **/
export function restoreScrollConfig(
  scrollRestorationStorageKey?: string
): Config | null {
  try {
    const config = JSON.parse(
      sessionStorage.getItem(SCROLL_RESTORATION_CONFIG) || ""
    );
    return scrollRestorationStorageKey
      ? config[scrollRestorationStorageKey]
      : config;
  } catch (e) {
    return null;
  }
}

/*
 * Store scroll restoration configuration
 **/
export function storeScrollConfig(
  scrollRestorationStorageKey: string,
  config: Config
) {
  const currentConfig = restoreScrollConfig();
  sessionStorage.setItem(
    SCROLL_RESTORATION_CONFIG,
    JSON.stringify({
      ...(currentConfig ? currentConfig : {}),
      [scrollRestorationStorageKey]: config,
    })
  );
}

/*
 * Remove item from scroll config by key
 **/
export function removeItemFromScrollConfig(key: string) {
  const config = restoreScrollConfig();

  if (config) {
    delete config[key];
    sessionStorage.setItem(SCROLL_RESTORATION_CONFIG, JSON.stringify(config));
  }
}

interface IItemsLoaded {
  virtualizer: Virtualizer<Window, Element>;
  scrollIndex: number;
  overScan: number;
  options: VirtualizerOptions<Window, Element>;
}

/*
 * Check if all required items for scroll restoration are loaded.
 **/
function requiredItemsLoaded({
  virtualizer,
  scrollIndex,
  overScan,
  options,
}: IItemsLoaded) {
  /*
   * Find the visible item used as a scroll restoration reference.
   **/
  const referenceItem = virtualizer
    .getVirtualItems()
    .find((virtualItem) => virtualItem.index === scrollIndex);

  /*
   * Create array of steps to take back from the reference item to check if
   * the virtual items before it are loaded according to the appropriate size.
   **/
  const stepBackArr = Array(overScan)
    .fill(0)
    .map((_, index) => index + 1);

  /*
   * Check if the reference item is loaded according to the appropriate size.
   **/
  const referenceItemLoaded =
    referenceItem &&
    referenceItem.size >=
      (options.initialMeasurementsCache?.[referenceItem.index]?.size || 0);

  /*
   * Check if items before the visible reference item are loaded according to the appropriate size.
   **/
  const itemsBeforeReferenceItemLoaded = stepBackArr
    .map((stepBack) => {
      const prevItem = virtualizer
        .getVirtualItems()
        .find((virtualItem) => virtualItem.index === scrollIndex - stepBack);
      return prevItem
        ? prevItem.size >=
            (options.initialMeasurementsCache?.[prevItem.index]?.size || 0)
        : true;
    })
    .every((item) => item);

  return referenceItemLoaded && itemsBeforeReferenceItemLoaded;
}

interface IScrollRestoration {
  /*
   * Virtualizer's instance
   **/
  virtualizer: Virtualizer<Window, Element>;
  /*
   * The total number of items virtualized
   **/
  count: number;
  /*
   * The number of items rendered above and below the visible area
   **/
  overScan: number;
  /*
   * Scroll restoration session storage key
   **/
  scrollRestorationStorageKey: string;
  /*
   * Last scroll restoration session key used to either reset the scroll restoration config
   * if the current key and the one before do not match or to use the scroll config.
   **/
  lastScrollRestorationKey: string;
  /*
   * The offset attribute for the virtual list container
   **/
  offsetAttribute: string;
  /*
   * Reference to a header element in a virtual list
   **/
  headerRef?: React.RefObject<HTMLDivElement>;
}

/*
 * Restores the last scroll position
 * @param virtualizer - instance of virtualizer
 **/
export function useScrollRestoration({
  virtualizer,
  count,
  overScan,
  scrollRestorationStorageKey,
  lastScrollRestorationKey,
  offsetAttribute,
  headerRef,
}: IScrollRestoration) {
  const virtualizerRef = React.useRef(virtualizer);
  const overScanRef = React.useRef(overScan);
  const offsetAttributeRef = React.useRef(offsetAttribute);
  const scrollRestorationStorageKeyRef = React.useRef(
    scrollRestorationStorageKey
  );
  const lastScrollRestorationKeyRef = React.useRef(lastScrollRestorationKey);
  const headerHeightRef = React.useRef<number | null>(null);

  React.useEffect(() => {
    const observer = new ResizeObserver(() => {
      headerHeightRef.current =
        headerRef?.current?.getBoundingClientRect()?.height || 0;
    });
    if (headerRef?.current) {
      observer.observe(headerRef.current);
    }
    return () => {
      observer.disconnect();
    };
  }, [headerRef]);

  React.useEffect(() => {
    virtualizerRef.current = virtualizer;
  }, [virtualizer]);

  React.useEffect(() => {
    const virtualizer = virtualizerRef.current;
    const scrollConfig = restoreScrollConfig(
      scrollRestorationStorageKeyRef.current
    );
    if (scrollConfig) {
      const { referenceItemIndex, options, done, lastScrollRestorationKey } =
        scrollConfig;

      /*
       * If the current lastScrollRestorationKey and the one before do not match then prevent initiating scroll restoration
       **/
      if (
        lastScrollRestorationKey &&
        lastScrollRestorationKey !== lastScrollRestorationKeyRef.current
      ) {
        removeItemFromScrollConfig(scrollRestorationStorageKeyRef.current);
        return;
      }

      if (
        !options ||
        typeof referenceItemIndex !== "number" ||
        typeof options !== "object" ||
        count < options.count ||
        done
      )
        return;

      /*
       * Find the index of an item which will be used as a scroll restoration reference.
       **/
      const scrollIndex = options.initialMeasurementsCache?.findIndex(
        (measurementCache) => measurementCache.index === referenceItemIndex
      );
      if (scrollIndex && scrollIndex !== -1) {
        /*
         * Make sure virtualizer's options from last scroll position are available in the current virtualizer instance
         * before scrolling to the index of the reference item.
         **/
        virtualizer.setOptions({
          ...virtualizer.options,
          ...options,
        });
        virtualizer.scrollToIndex(scrollIndex, {
          align: "start",
          behavior: "auto",
        });
      }
    }
  }, [count]);

  React.useEffect(() => {
    const overScan = overScanRef.current;
    const scrollRestorationStorageKey = scrollRestorationStorageKeyRef.current;
    const lastScrollRestorationKey = lastScrollRestorationKeyRef.current;
    const scrollOffset = virtualizerRef.current?.scrollOffset || 0;
    /*
     * Store scroll restoration configs after unmounting the component where the scroll restoration is used.
     **/
    return () => {
      /*
       * Store scroll restoration config only if a scroll occurred
       **/
      if (scrollOffset > 0) {
        const headerHeight = headerHeightRef.current;
        const virtualItems = virtualizerRef.current.getVirtualItems();
        const stepBackArr = Array(overScan)
          .fill(0)
          .map((_, index) => index);
        /*
         * Compute a visible item which will be used for scroll restoration reference.
         **/
        let visibleItem = null;
        for (const stepBack of stepBackArr) {
          if (virtualItems?.[overScan - stepBack]) {
            visibleItem = virtualItems[overScan - stepBack];
            break;
          }
        }
        /*
         * If the index of the visible item is less than or equal to overScan recompute the visible item for accuracy
         **/
        if (visibleItem && visibleItem.index <= overScan) {
          let visibleItemIndex = virtualItems.findIndex(
            (virtualItem) =>
              virtualItem.start >= (virtualizerRef.current.scrollOffset || 0)
          );
          visibleItemIndex = visibleItemIndex === 0 ? 0 : visibleItemIndex - 1;
          if (visibleItemIndex >= 0) {
            visibleItem = virtualItems[visibleItemIndex];
          }
        }

        storeScrollConfig(scrollRestorationStorageKey, {
          scrollOffset,
          topOffset:
            virtualItems?.[0]?.start -
            virtualizerRef.current.options.scrollMargin,
          referenceItemIndex: visibleItem?.index || 0,
          options: {
            ...virtualizerRef.current?.options,
            initialMeasurementsCache: virtualizerRef.current?.measurementsCache,
          },
          lastScrollRestorationKey,
          headerHeight: headerHeight || 0,
        });
      }
    };
  }, []);

  React.useEffect(() => {
    const scrollConfig = restoreScrollConfig(
      scrollRestorationStorageKeyRef.current
    );

    /*
     * Observe changes in the dimension of body element to check scroll position restoration requirements and if all check passes commit the restoration.
     **/
    const observer = new ResizeObserver(() => {
      restoreScrollPosition({
        virtualizer: virtualizerRef.current,
        overScan: overScanRef.current,
        offsetAttribute: offsetAttributeRef.current,
        scrollRestorationStorageKey: scrollRestorationStorageKeyRef.current,
      });
    });
    if (scrollConfig) observer.observe(document.body);
    return () => {
      observer.disconnect();
    };
  }, []);
}

type WithScrollRestorationProps = {
  virtualizer: Virtualizer<Window, Element>;
  scrollRestorationStorageKey: string;
  lastScrollRestorationKey: string;
  count: number;
  overScan: number;
  headerRef?: React.RefObject<HTMLDivElement>;
  offsetAttribute: string;
};

const WithScrollRestoration: React.FC<
  React.PropsWithChildren<WithScrollRestorationProps>
> = (props) => {
  const {
    virtualizer,
    scrollRestorationStorageKey,
    count,
    overScan,
    offsetAttribute,
    lastScrollRestorationKey,
    headerRef,
    children,
  } = props;
  const scrollRestorationStorageKeyRef = React.useRef(
    scrollRestorationStorageKey
  );
  useScrollRestoration({
    virtualizer,
    count,
    overScan,
    scrollRestorationStorageKey: scrollRestorationStorageKeyRef.current,
    offsetAttribute,
    lastScrollRestorationKey,
    headerRef,
  });
  return <>{children}</>;
};

export { InfiniteScroll, InfiniteScrollList };
