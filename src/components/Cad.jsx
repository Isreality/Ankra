import {
    Card,
    CardAction,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"

export default function Cad() {
  return (
    <Card>
        <CardHeader>
            <CardTitle>Card Title</CardTitle>
            <CardDescription>Card Description</CardDescription>
            <CardAction>Card Action</CardAction>
        </CardHeader>
        <CardContent>
            <p>Card Content</p>
            <div className="bg-[#c4c4c4]"></div>
        </CardContent>
        <CardFooter>
            <p>Card Footer</p>
        </CardFooter>
    </Card>
  )
}
