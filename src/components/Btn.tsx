import Link from "next/link";

interface BtnLinkProps {
  name: string;
  link: any;
}

export default function Btn({name, link}: BtnLinkProps) {
  return (
    <Link href={link} className="bg-white text-primary font-medium border-[1.5] border-primary px-6 py-3 md:px-6 md:py-4 rounded-lg">
        {name}
    </Link>
  )
}
