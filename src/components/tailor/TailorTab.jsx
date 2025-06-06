import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Tailors from "./Tailors.jsx";
import Btn from "../Btn.jsx";

export default function Tab() {
  return (
    <Tabs defaultValue="tailors" className="w-full">
        <TabsList className="bg-white gap-0 px-2 py-6 border-[#e5e5e5] border-b-3 text-left">
            <TabsTrigger value="tailors" className="data-[state=active]:border-b-primary data-[state=active]:border-3 px-8 py-6 cursor-pointer">Tailors</TabsTrigger>
            <TabsTrigger value="appointment" className="data-[state=active]:border-b-primary data-[state=active]:border-3 px-8 py-6 cursor-pointer">Appointments</TabsTrigger>
        </TabsList>

        <TabsContent value="tailors">
          <div><Tailors/></div>
        </TabsContent>

        <TabsContent value="appointment">Change your password here.</TabsContent>
    </Tabs>
  )
}
