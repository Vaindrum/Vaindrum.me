import Image from "next/image";
import Hero from "@/components/Hero";
import { Spotlight } from "@/components/ui/Spotlight";
import { cn } from "@/lib/utils";
import { TextGenerateEffect } from "@/components/ui/TextGenerateEffect";
import MagicButton from "@/components/ui/MagicButton";
import { FaHome, FaLocationArrow } from "react-icons/fa";
import {FloatingNav} from "@/components/ui/FloatingNavbar";
import Grid from "@/components/Grid";
export default function Home() {
  return (
    <main className="relative bg-black-100 text-white flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        {/* <h1>Hi, its me!</h1> */}
        <FloatingNav navItems={[{name: 'Home', link: '/', icon: <FaHome/>}]} />
        <Hero />
      </div>
      <Grid />
    </main>
  );
}
