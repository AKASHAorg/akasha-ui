import { Stack } from "@/registry/default/ui/stack";

export default function StackDemo() {
  return (
    <Stack
      spacing={4}
      alignItems="center"
      className="text-white text-center w-full"
    >
      <div className="p-4 rounded-lg shadow-lg bg-cyan-500">01</div>
      <div className="p-4 rounded-lg shadow-lg bg-cyan-500">02</div>
      <div className="p-4 rounded-lg shadow-lg bg-cyan-500">03</div>
      <div className="p-4 rounded-lg shadow-lg bg-cyan-500">04</div>
    </Stack>
  );
}
