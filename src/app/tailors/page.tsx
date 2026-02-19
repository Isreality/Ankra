import Navbar from "@/components/Navbar";
import TailorTab from "../../components/tailor/TailorTab";
import Footer from "@/components/Footer";


export default function Tailors() {
  return (
    <div>
      <Navbar/>
      <div className="w-full px-4 md:px-8 lg:px-24 py-8">
        <TailorTab/>
        {/* <TailorCard/> */}
      </div>
      
      <Footer/>
    </div>
  )
}
