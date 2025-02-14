import * as React from "react";
import {
  measureElement,
  useWindowVirtualizer,
  Virtualizer,
} from "@tanstack/react-virtual";

import { cn } from "@/lib/utils";
import { Stack } from "@/registry/default/akasha-ui/stack";
import { useIsMobile } from "@/registry/default/hooks/use-mobile";
import {
  getHeaderHeight,
  getInitialMeasurementsCache,
  useScrollRestoration,
} from "@/registry/default/hooks/use-scroll-restoration";

const InfiniteScrollContext = React.createContext<{
  listOffset: number;
  itemSpacing?: number;
  estimatedHeight: number;
  loading?: boolean;
  hasNextPage?: boolean;
  virtualizer: Virtualizer<Window, Element>;
  count: number;
  overScan: number;
  headerRef: React.RefObject<HTMLDivElement | null>;
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

const InfiniteScroll = ({
  count,
  estimatedHeight,
  lanes,
  overScan = 5,
  itemSpacing,
  hasNextPage,
  loading,
  header,
  className,
  children,
  onLoadMore,
  ...props
}: React.ComponentProps<"div"> & {
  count: number;
  estimatedHeight: number;
  lanes?: number;
  overScan?: number;
  itemSpacing?: number;
  hasNextPage?: boolean;
  loading?: boolean;
  header?: React.ReactNode;
  onLoadMore?: () => void;
}) => {
  const parentRef = React.useRef<HTMLDivElement>(null);
  const parentOffsetRef = React.useRef(0);
  const headerRef = React.useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();

  React.useLayoutEffect(() => {
    parentOffsetRef.current = parentRef.current?.offsetTop ?? 0;
  }, [parentRef.current?.offsetTop]);

  const virtualizer = useWindowVirtualizer({
    count,
    lanes,
    overscan: overScan,
    gap: itemSpacing,
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

  return (
    <>
      {header && <div ref={headerRef}>{header}</div>}
      <div
        data-slot="infinite-scroll"
        ref={parentRef}
        className={cn("relative w-full", className)}
        style={{
          minHeight: `${minHeight}px`,
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
            count,
            overScan,
            headerRef,
          }}
        >
          {children}
        </InfiniteScrollContext.Provider>
      </div>
    </>
  );
};

const InfiniteScrollList = ({
  loadingIndicator,
  className,
  children,
  ...props
}: Omit<React.ComponentProps<"div">, "children"> & {
  loadingIndicator?: React.ReactNode;
  children: (index: number) => React.ReactElement<any>;
}) => {
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
      data-slot="infinite-scroll-list"
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
};

const ScrollRestoration = (
  props: React.PropsWithChildren<{
    offsetAttribute: string;
    scrollRestorationStorageKey?: string;
    lastScrollRestorationKey?: string;
  }>
) => {
  const {
    scrollRestorationStorageKey = "storage-key",
    lastScrollRestorationKey,
    offsetAttribute,
    children,
  } = props;

  const { count, overScan, headerRef, virtualizer } =
    useInfiniteScrollContext();

  virtualizer.setOptions({
    ...virtualizer.options,
    initialMeasurementsCache: getInitialMeasurementsCache({
      scrollRestorationStorageKey,
    }),
  });

  React.useLayoutEffect(() => {
    const headerHeight = getHeaderHeight({
      scrollRestorationStorageKey,
      lastScrollRestorationKey: lastScrollRestorationKey ?? "",
    });
    if (headerHeight)
      headerRef.current?.setAttribute(
        "className",
        `${headerRef.current.className} min-h-[${headerHeight}px]`
      );
  }, [getHeaderHeight]);

  useScrollRestoration({
    virtualizer,
    count,
    overScan,
    scrollRestorationStorageKey,
    offsetAttribute,
    lastScrollRestorationKey: lastScrollRestorationKey ?? "",
    headerRef,
  });
  return <>{children}</>;
};

export { InfiniteScroll, InfiniteScrollList, ScrollRestoration };
