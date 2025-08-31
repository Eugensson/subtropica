"use client";

import { createRef, useEffect, useMemo, useRef, useState } from "react";

import { Button } from "@/components/ui/button";
import { Chapter1 } from "@/components/chapter-1";
import { Chapter2 } from "@/components/chapter-2";
import { Chapter3 } from "@/components/chapter-3";
import { Chapter4 } from "@/components/chapter-4";
import { Chapter5 } from "@/components/chapter-5";
import { Chapter6 } from "@/components/chapter-6";
import { Chapter7 } from "@/components/chapter-7";
import { ScrollArea } from "@/components/ui/scroll-area";

import { cn } from "@/lib/utils";
import { HANDBOOK_ITEMS } from "@/data";

export const Handbook = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeChapter, setActiveChapter] = useState<string | null>(null);

  const chapterRefs = useMemo(
    () => ({
      chapter1: createRef<HTMLDivElement>(),
      chapter2: createRef<HTMLDivElement>(),
      chapter3: createRef<HTMLDivElement>(),
      chapter4: createRef<HTMLDivElement>(),
      chapter5: createRef<HTMLDivElement>(),
      chapter6: createRef<HTMLDivElement>(),
      chapter7: createRef<HTMLDivElement>(),
    }),
    []
  );

  const scrollToChapter = (target: string) => {
    const chapterEl = chapterRefs[target as keyof typeof chapterRefs].current;
    const scrollEl = scrollRef.current;
    if (chapterEl && scrollEl) {
      scrollEl.scrollTo({
        top: chapterEl.offsetTop,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    const scrollEl = scrollRef.current;
    if (!scrollEl) return;

    const handleScroll = () => {
      const scrollTop = scrollEl.scrollTop;
      let currentChapter: string | null = null;

      HANDBOOK_ITEMS.forEach(({ target }) => {
        const el = chapterRefs[target as keyof typeof chapterRefs].current;
        if (el && el.offsetTop <= scrollTop + 10) {
          currentChapter = target;
        }
      });

      setActiveChapter(currentChapter);
    };

    scrollEl.addEventListener("scroll", handleScroll);
    return () => scrollEl.removeEventListener("scroll", handleScroll);
  }, [chapterRefs]);

  return (
    <div className="container mx-auto max-w-365 grid grid-cols-[400px_1fr_70px] gap-8">
      <div className="p-6 py-12 h-[90vh] rounded-xl bg-gray-600/60 backdrop-blur-md text-primary-foreground">
        <h2 className="mb-6 text-xl font-semibold uppercase text-center">
          Зміст:
        </h2>
        <ul className="flex flex-col gap-6">
          {HANDBOOK_ITEMS.map(({ chapter, target, title }) => (
            <li key={target}>
              <Button
                onClick={() => scrollToChapter(target)}
                variant="link"
                className={cn(
                  "block text-left text-balance whitespace-normal text-primary-foreground cursor-pointer",
                  activeChapter === target ? "font-bold text-accent" : ""
                )}
              >
                {chapter} {title}
              </Button>
            </li>
          ))}
        </ul>
      </div>
      <div className="p-6 rounded-xl bg-background">
        <ScrollArea>
          <div ref={scrollRef} className="h-144 space-y-6 pr-4 overflow-y-auto">
            <div ref={chapterRefs.chapter1}>
              <Chapter1 />
            </div>
            <div ref={chapterRefs.chapter2}>
              <Chapter2 />
            </div>
            <div ref={chapterRefs.chapter3}>
              <Chapter3 />
            </div>
            <div ref={chapterRefs.chapter4}>
              <Chapter4 />
            </div>
            <div ref={chapterRefs.chapter5}>
              <Chapter5 />
            </div>
            <div ref={chapterRefs.chapter6}>
              <Chapter6 />
            </div>
            <div ref={chapterRefs.chapter7}>
              <Chapter7 />
            </div>
          </div>
        </ScrollArea>
      </div>
      <div />
    </div>
  );
};
