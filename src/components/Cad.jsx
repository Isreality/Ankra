import {
    Card,
    CardAction,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
  import Image from "next/image";
  import { Icon } from '@iconify/react';

export default function Cad({title, price, image}) {
  return (
    <Card className="py-2 border-1 border-[#f1f1f1] gap-3 cursor-pointer">
        <CardContent className="px-2">
            <Image
              src={image}
              alt=""
              width={800}
              height={800}
              className="w-full h-100 object-cover rounded-md mb-2 hover:scale-105 overflow-hidden"
            />
        </CardContent>
        <CardHeader className="px-6 py-4">
            <CardDescription className="text-black font-semibold text-sm md:text-base">{title}</CardDescription>
            <CardTitle className="text-primary font-bold text-base md:text-xl">{price}</CardTitle>
            <CardAction><Icon icon="mdi:cart-variant" width="45" height="45" className="bg-primary text-white p-2 rounded-full font-medium"/></CardAction>
        </CardHeader>
        
        {/* <CardFooter>
            <p>Card Footer</p>
        </CardFooter> */}
    </Card>
  )
}
