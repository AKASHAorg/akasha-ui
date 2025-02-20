import { Stack } from "@/registry/default/ui/stack";

export default function StackDivider() {
  return (
    <Stack
      divider
      className="text-black dark:text-white text-center rounded-lg shadow-sm overflow-auto border w-full"
    >
      <div className="p-4 bg-white dark:bg-black">01</div>
      <div className="p-4 bg-white dark:bg-black">02</div>
      <div className="p-4 bg-white dark:bg-black">03</div>
    </Stack>
  );
}
