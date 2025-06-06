import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import TailorCard from "../components/TailorCard.jsx";
import Btn from "../components/Btn.jsx";

export default function Tab() {
  return (
    <Tabs defaultValue="tailors" className="w-full">
        <TabsList className="bg-white gap-0 px-2 py-6 border-[#e5e5e5] border-b-3 text-left">
            <TabsTrigger value="tailors" className="data-[state=active]:border-b-primary data-[state=active]:border-3 px-8 py-6 cursor-pointer">Tailors</TabsTrigger>
            <TabsTrigger value="appointment" className="data-[state=active]:border-b-primary data-[state=active]:border-3 px-8 py-6 cursor-pointer">Appointments</TabsTrigger>
        </TabsList>

        <TabsContent value="tailors">
          <div className="grid grid-cols-3 gap-3">
            <TailorCard title="Nike Ore" location="Lagos"/>
            <TailorCard title="Nike Ore" location="Lagos"/>
            <TailorCard title="Nike Ore" location="Lagos"/>
          </div>
        </TabsContent>

        <TabsContent value="appointment">Change your password here.</TabsContent>
    </Tabs>
  )
}
