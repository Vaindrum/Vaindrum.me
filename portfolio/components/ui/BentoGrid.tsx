'use client'
import { cn } from "@/lib/utils";
import { BackgroundGradientAnimation } from "./GradientBg";
import { GlobeDemo } from "./GridGlobe";
import Lottie from "react-lottie";
import { useState } from "react";
import animationData from "@/data/confetti.json";
import  MagicButton  from "./MagicButton";
import { IoCopyOutline } from "react-icons/io5";
export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "mx-auto grid max-w-7xl grid-cols-1 gap-4 md:auto-rows-[18rem] md:grid-cols-3",
        className,
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  id,
  className,
  title,
  description,
  img,
  spareImg,
  titleClassName,
  imgClassName,
}: {
  id: number; 
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  img?: string;
  spareImg?: string;
  titleClassName?: string;
  imgClassName?: string;
}) => {
  const [copied, setcopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText('vaibhavraj8587@gmail.com');
    setcopied(true);
  };


  return (
    <div
      className={cn(
        "row-span-1 relative overflow-hidden rounded-3xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none flex flex-col justify-between space-y-4 border border-white/[0.1]",
        className,
      )}
      style={{
        background: 'rgb(2,0,36)',
        backgroundColor: 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(114,57,138,1) 35%, rgba(82,207,213,1) 100%)'
      }}
    >
      {/* Main image container */}
      <div className={`${id === 6 && 'flex justify-center'} h-full'}`}>

      {img && (
        <div className="absolute w-full h-full">
          <img 
            src={img} 
            alt={title?.toString() || 'Project image'} 
            className={cn(
              "w-full h-full object-cover object-center",
              imgClassName
            )} 
            />
        </div>
      )}
      </div>

      {/* Spare image container */}
      {spareImg && (
        <div className={cn(
          "absolute right-0 bottom-0",
          id === 5 ? "w-full opacity-80" : "w-auto"
        )}>
          <img 
            src={spareImg} 
            alt="Additional image" 
            className="object-cover object-center w-full h-full" 
          />
        </div>
      )}

      {/* Gradient background for id 6 */}
      {id === 6 && (
        <BackgroundGradientAnimation>
          {/* <div className="absolute z-50 flex items-center justify-center text-white font-bold"/> */}
        </BackgroundGradientAnimation>
      )}

      {/* Content container */}
      <div className={cn(
        "relative z-10 flex flex-col h-full",
        titleClassName,
        "group-hover/bento:translate-x-2 transition duration-200 px-5 p-5 lg:p-10"
      )}>
        {id === 2 && (
          <div className="absolute inset-0 z-0">
            <GlobeDemo/>
          </div>
        )}
        <div className="flex font-sans font-bold text-lg lg:text-3xl max-w-96 relative z-10">
          {title}
        </div>
        <div className="font-sans font-extralight text-[#c1c2d3] text-sm md:text-xs lg:text-base relative z-10 mt-2">
          {description}
        </div>

      {id === 3 && (
        <div className="flex gap-1 lg:gap-5 w-fit absolute -right-3 lg:-right-2">
          <div className="flex flex-col gap-3 lg:gap-8">
            {['MongoDB','Express','Node.js']
            .map((item) => (
              <span key={item} className="py-2 lg:py-4 lg:px-3 px-3 text-xs lg:text-base opacity-50 lg:opacity-100 rounded-lg text-center bg-[#10132E]">
                {item}
              </span>
            ))}
            <span className="py-4 px-3 rounded-lg bg-[#10132E] text-center" />
          </div>
          <div className="flex flex-col gap-3 lg:gap-8">
            <span className="py-4 px-3 rounded-lg bg-[#10132E] text-center" />
            {['React.js','Next.js','Typescript']
            .map((item) => (
              <span key={item} className="py-2 lg:py-4 lg:px-3 px-3 text-xs lg:text-base opacity-50 lg:opacity-100 rounded-lg text-center bg-[#10132E]">
                {item}
              </span>
            ))}
          </div>

        </div>
      )}

      {id === 6 && (
        <div className="mt-5 relative ">
          <div className={`absolute -bottom-5 right-0`}>
            <Lottie options={{
              loop:copied, 
              autoplay:copied, 
              animationData:animationData,
              rendererSettings:{
                preserveAspectRatio:'xMidYMid slice'
              }
            }} />
          </div>

            <MagicButton 
              title={copied ? 'Email Copied!' : 'Copy My Email'} 
              icon={<IoCopyOutline/>} 
              position='left' 
              otherClasses="`bg-[#161a31]`" 
              handleClick={handleCopy}
            />
        </div>
      )}
      
      </div>

    </div>
  );
};
