import { Button } from "@/components/ui/button"

interface BtnProps {
  name: string;
  // link: any;
}

export default function Btn({ name }: BtnProps) {
  return (
    <Button className="bg-primary hover:bg-black lg:w-32 py-6 px-20 rounded-md border-fa  cursor-pointer text-white text-xs md:text-base font-medium">{name}</Button>
  )
}
