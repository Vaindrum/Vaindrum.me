import Hero from "@/components/Hero";
import {FloatingNav} from "@/components/ui/FloatingNavbar";
import Grid from "@/components/Grid";
import RecentProjects from "@/components/RecentProjects";
import { navItems } from "@/data";
import Experience from "@/components/Experience";
import Approach from "@/components/Approach";
import Footer from "@/components/Footer";

// Disable SSR for this page
export const dynamic = 'force-dynamic';
export const fetchCache = 'force-no-store';
export const revalidate = 0;

export default function Home() {
  return (
    <main className="relative bg-black-100 text-white flex justify-center items-center flex-col overflow-clip mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        {/* <h1>Hi, its me!</h1> */}
        <FloatingNav navItems={navItems} />
        <Hero />
        <Grid />
        <RecentProjects />
        {/* <Clients /> */}
        <Experience />
        <Approach />
        <Footer />
      </div>
    </main>
  );
}
