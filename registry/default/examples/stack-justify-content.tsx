import { Stack } from "@/registry/default/akasha-ui/stack"

export default function StackJustifyContent() {
  return (
    <Stack
      spacing={4}
      justifyContent="center"
      direction="row"
      className="text-white text-center w-full"
    >
      <div className="w-14 rounded-lg shadow-lg bg-cyan-500">01</div>
      <div className="w-14 rounded-lg shadow-lg bg-cyan-500">02</div>
      <div className="w-14 rounded-lg shadow-lg bg-cyan-500">03</div>
    </Stack>
  )
}
