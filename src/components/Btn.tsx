import Link from "next/link";

interface BtnProps {
  name: string;
  // link: any;
}

export default function Btn({name}: BtnProps) {
  return (
    <div className="bg-white text-primary font-medium border-[1.5] border-primary px-6 py-3 md:px-6 md:py-4 rounded-lg">
        {name}
    </div>
  )
}
