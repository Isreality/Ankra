import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function Tab() {
  return (
    <Tabs defaultValue="tailors" className="w-[800px]">
        <TabsList className="bg-white gap-3 px-2 py-6 border-[#e5e5e5] border-b-3 w-full">
            <TabsTrigger value="tailors" className="data-[state=active]:border-b-primary data-[state=active]:border-3 p-6">Tailors</TabsTrigger>
            <TabsTrigger value="appointment" className="data-[state=active]:border-b-primary data-[state=active]:border-3 p-6">Appointments</TabsTrigger>
        </TabsList>
        <TabsContent value="tailors">Make changes to your account here.</TabsContent>
        <TabsContent value="appointment">Change your password here.</TabsContent>
    </Tabs>
  )
}
