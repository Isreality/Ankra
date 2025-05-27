import { Button } from "@/components/ui/button"

export default function Btn({name}) {
  return (
    <Button className="bg-primary hover:bg-black lg:w-32 py-6 px-20 rounded-md border-fa  cursor-pointer text-white text-xs md:text-base font-medium">{name}</Button>
  )
}
