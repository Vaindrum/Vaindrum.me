"use client";
import React, { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

export const TextGenerateEffect = ({
  words,
  className,
  filter = true,
}: {
  words: string | React.ReactNode | (string | React.ReactNode)[];
  className?: string;
  filter?: boolean;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === 'undefined' || !containerRef.current) return;
    
    const spans = containerRef.current.querySelectorAll<HTMLSpanElement>('.animate-text');
    spans.forEach((span, index) => {
      setTimeout(() => {
        span.classList.remove('opacity-0');
        span.classList.add('opacity-100');
        if (filter) {
          span.style.transform = 'translateY(0)';
          span.style.filter = 'blur(0px)';
        }
      }, index * 150);
    });
  }, [filter]);

  const renderWords = () => {
    // Handle array of content
    if (Array.isArray(words)) {
      return (
        <div suppressHydrationWarning className="space-x-[0.3em]">
          {words.map((word, idx) => (
            <span
              key={idx}
              className={cn(
                "animate-text opacity-0 inline-block",
                "transition-all duration-700 ease-out",
                idx > 2 ? "text-purple-300" : "text-black dark:text-white"
              )}
              style={{
                filter: filter ? "blur(8px)" : "none",
                transform: 'translateY(10px)',
                transitionProperty: 'opacity, filter, transform'
              }}
              suppressHydrationWarning
            >
              {word}
            </span>
          ))}
        </div>
      );
    }
    
    // Handle single JSX element
    if (typeof words !== 'string') {
      return (
        <span
          className={cn(
            "animate-text opacity-0 inline-block",
            "transition-all duration-700 ease-out",
            "text-black dark:text-white"
          )}
          style={{
            filter: filter ? "blur(8px)" : "none",
            transform: 'translateY(10px)',
            transitionProperty: 'opacity, filter, transform'
          }}
          suppressHydrationWarning
        >
          {words}
        </span>
      );
    }

    // Handle string
    return (
      <div suppressHydrationWarning className="space-x-[0.3em]">
        {words.split(/\s+/).map((word, idx) => (
          <span
            key={word + idx}
            className={cn(
              "animate-text opacity-0 inline-block",
              "transition-all duration-700 ease-out",
              idx > 2 ? "text-purple-300" : "text-black dark:text-white"
            )}
            style={{
              filter: filter ? "blur(8px)" : "none",
              transform: 'translateY(10px)',
              transitionProperty: 'opacity, filter, transform'
            }}
            suppressHydrationWarning
          >
            {word === "" ? <br /> : word}
          </span>
        ))}
      </div>
    );
  };

  return (
    <div className={cn("font-bold", className)} suppressHydrationWarning ref={containerRef}>
      <div className="my-4">
        <div className="leading-snug tracking-wide" suppressHydrationWarning>
          {renderWords()}
        </div>
      </div>
    </div>
  );
};
