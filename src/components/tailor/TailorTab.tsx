import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Tailors from "./Tailors";
import Btn from "../Btn";

export default function Tab() {
  return (
    <Tabs defaultValue="tailors" className="w-full">
        <TabsList className="bg-white gap-0 px-2 py-6 text-left">
            <TabsTrigger value="tailors" className="data-[state=active]:bg-primary data-[state=active]:text-white data-[state=active]:rounded-sm px-8 py-6 cursor-pointer">Tailors</TabsTrigger>
            <TabsTrigger value="appointment" className="data-[state=active]:bg-primary data-[state=active]:text-white data-[state=active]:rounded-sm px-8 py-6 cursor-pointer">Appointments</TabsTrigger>
        </TabsList>

        <TabsContent value="tailors">
          <div><Tailors/></div>
        </TabsContent>

        <TabsContent value="appointment">Change your password here.</TabsContent>
    </Tabs>
  )
}
