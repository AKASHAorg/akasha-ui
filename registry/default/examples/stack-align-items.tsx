import { Stack } from "@/registry/default/akasha-ui/stack"

export default function StackAlignItems() {
  return (
    <Stack
      spacing={4}
      alignItems="center"
      direction="row"
      className="text-white text-center w-full"
    >
      <div className="p-4 flex-1 rounded-lg shadow-lg bg-cyan-500">01</div>
      <div className="p-12 flex-1 rounded-lg shadow-lg bg-cyan-500">02</div>
      <div className="p-8 flex-1 rounded-lg shadow-lg bg-cyan-500">03</div>
    </Stack>
  )
}
