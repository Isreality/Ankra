import {
    Card,
    CardAction,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
  import Btn from "../Btn.jsx";

export default function TailorCard({title, location}) {
  return (
    <Card className="py-2 border-1 border-[#f1f1f1] gap-0">
        <CardContent className="px-2">
            <div className="bg-[#f1f1f1] w-full h-64 rounded-md"></div>
        </CardContent>
        <CardHeader className="px-6 py-4">
            <CardDescription className="text-black font-medium text-sm md:text-base">{title}</CardDescription>
            <CardTitle className="text-primary font-bold text-base md:text-xl">{location}</CardTitle>
            {/* <CardAction>Buy</CardAction> */}
        </CardHeader>
        
        <CardFooter className="flex flex-row gap-2 py-2">
            <Btn name="View"/>
            <Btn name="Book" className="bg-black"/>
        </CardFooter>
    </Card>
  )
}
