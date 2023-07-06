import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Features from "../components/Features";
import CTA from "../components/CTA";
import Features2 from "../components/Features2";
import Stats from "../components/Stats";
import Footer from "../components/Footer";

export default function index() {
  const navigate = useNavigate();
  const goToPage = (path) => {
    navigate(path);
  };

  return (
    <main
      className="h-screen w-full font-montserrat"
      style={{ backgroundColor: "#FFFFFF" }}
    >
      <Navbar />
      <div className={section1}>
        <Hero />
      </div>
      <div className={section2}>
        <Features />
      </div>
      <div className={section3}>
        <CTA />
      </div>
      <div className={section4}>
        <Features2 />
      </div>
      <div className={section5}>
        <Stats />
      </div>
      <div className={section6}>
        <Footer />
      </div>
    </main>
  );
}

const section1 =
  "max-w-7xl flex flex-col justify-center mx-auto px-4 md:px-12 lg:px-28 py-12";
const section2 =
  " flex flex-col justify-center mx-auto px-4 md:px-12 lg:px-28 py-12 bg-[#F2F2F2]";
const section3 =
  " flex flex-col justify-center mx-auto px-4 md:px-28 py-12 bg-[#FFC43B]";
const section4 =
  "max-w-7xl flex flex-col justify-center mx-auto px-4 md:px-12 lg:px-28 py-12";
const section5 =
  "max-w-7xl flex flex-col justify-center mx-auto px-4 md:px-28 py-12";
const section6 =
  " flex flex-col justify-center mx-auto px-4 md:px-28 py-12 bg-[#3A5AFF]";
