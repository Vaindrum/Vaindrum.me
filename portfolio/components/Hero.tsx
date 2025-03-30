import React from 'react'
import { Spotlight } from "@/components/ui/Spotlight";
import MagicButton from './ui/MagicButton';
import { TextGenerateEffect } from './ui/TextGenerateEffect';
import { FaLocationArrow } from 'react-icons/fa';
import { cn } from '@/lib/utils';
const Hero = () => {
  return (
    <div className='pb-20'>
      <div>
        {/* <h1>Hi, its me!</h1> */}
        <Spotlight className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen" fill="pink" />
        <Spotlight className="top-10 left-full h-[80vh] w-[50vw]" fill="pink" />
        <Spotlight className="top-28 left-80 h-[80vh] w-[50vw]" fill="purple" />

        {/* <Hero /> */}
      </div>
      <div className="flex h-screen w-full items-center justify-center bg-white dark:bg-black-100">
      <div
        className={cn(
          "absolute inset-0",
          "[background-size:40px_40px]",
          "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
          "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]",
        )}
      />
      {/* Radial gradient for the container to give a faded look */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black-100"></div>
      {/* <p className="relative z-20 bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text py-8 text-4xl font-bold text-transparent sm:text-7xl">
      </p> */}
      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
        <h1 className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80">
          This is my first time using Next.js
        </h1>
        <TextGenerateEffect className="text-center text-[40px] md:text-5xl lg:text-6xl whitespace-pre-line" words={"Too Much Radio\nNot Enough Head"}/>
        <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
          Hi, I&apos;m Vaibhav, a Next.js Developer based in India.
        </p>
        <a href="#about">
        <MagicButton title="Show My Work" icon={<FaLocationArrow />} position="right" />
        </a>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Hero
