import { Button } from "@/components/ui/button"
import Link from "next/link";

export default function Btn({name}) {
  return (
    // <Button className="bg-primary hover:bg-black">{name}</Button>
    <Button asChild>
        <Link href="/" className="bg-primary hover:bg-black">{name}</Link>
    </Button>
  )
}
