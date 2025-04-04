"use client";
import { useEffect } from "react";
import { cn } from "@/lib/utils";

export const TextGenerateEffect = ({
  words,
  className,
  filter = true,
  duration = 0.5,
}: {
  words: string;
  className?: string;
  filter?: boolean;
  duration?: number;
}) => {
  useEffect(() => {
    const spans = document.querySelectorAll<HTMLSpanElement>('.animate-text');
    spans.forEach((span, index) => {
      setTimeout(() => {
        span.classList.remove('opacity-0');
        span.style.filter = filter ? 'blur(0px)' : 'none';
      }, index * 200);
    });
  }, [filter]);

  const renderWords = () => {
    return (
      <div suppressHydrationWarning>
        {words.split(/\s+/).map((word, idx) => (
          <span
            key={word + idx}
            className={cn(
              "animate-text opacity-0 transition-all duration-500",
              idx > 3 ? "text-purple-300" : "text-black dark:text-white"
            )}
            style={{
              filter: filter ? "blur(10px)" : "none",
            }}
            suppressHydrationWarning
          >
            {word === "" ? <br /> : word}{" "}
          </span>
        ))}
      </div>
    );
  };

  return (
    <div className={cn("font-bold", className)} suppressHydrationWarning>
      <div className="my-4">
        <div className="leading-snug tracking-wide" suppressHydrationWarning>
          {renderWords()}
        </div>
      </div>
    </div>
  );
};
