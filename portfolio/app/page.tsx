import Hero from "@/components/Hero";
import {FloatingNav} from "@/components/ui/FloatingNavbar";
import Grid from "@/components/Grid";
import RecentProjects from "@/components/RecentProjects";
import { navItems } from "@/data";
export default function Home() {
  return (
    <main className="relative bg-black-100 text-white flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        {/* <h1>Hi, its me!</h1> */}
        <FloatingNav navItems={navItems} />
        <Hero />
      <Grid />
      <RecentProjects />
      </div>
    </main>
  );
}
