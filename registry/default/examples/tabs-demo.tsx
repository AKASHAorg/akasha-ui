import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/registry/default/ui/tabs";

export default function TabsDemo() {
  return (
    <Tabs defaultValue="followers" className="w-[400px]">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="followers">Followers</TabsTrigger>
        <TabsTrigger value="following">Following</TabsTrigger>
      </TabsList>
      <TabsContent value="followers">Followers list</TabsContent>
      <TabsContent value="following">Following list</TabsContent>
    </Tabs>
  );
}
