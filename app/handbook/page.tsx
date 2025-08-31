import Link from "next/link";
import type { Metadata } from "next";
import * as motion from "motion/react-client";

import { Chapter1 } from "@/components/chapter-1";
import { Chapter2 } from "@/components/chapter-2";
import { Chapter3 } from "@/components/chapter-3";
import { Chapter4 } from "@/components/chapter-4";
import { Chapter5 } from "@/components/chapter-5";
import { Chapter6 } from "@/components/chapter-6";
import { Chapter7 } from "@/components/chapter-7";
import { ScrollArea } from "@/components/ui/scroll-area";

import { HANDBOOK_ITEMS } from "@/data";

export const metadata: Metadata = {
  title: "Довідник",
};

const HandbookPage = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 0.6, duration: 0.4, ease: "easeIn" },
      }}
      className="h-full relative py-4 md:py-8 bg-handbook bg-cover bg-no-repeat bg-center"
    >
      <div className="container mx-auto max-w-365 grid grid-cols-[400px_1fr_70px] gap-8">
        <div className="p-6 py-12 h-[90vh] rounded-xl bg-gray-600/60 backdrop-blur-md text-primary-foreground">
          <h2 className="mb-6 text-xl font-semibold uppercase text-center">
            Зміст:
          </h2>
          <ul className="space-y-1">
            {HANDBOOK_ITEMS.map(({ chapter, path, slug, title }) => (
              <li key={`/handbook/${slug}`}>
                <Link href={path} className="block py-2">
                  {chapter} {title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="p-6 rounded-xl bg-background">
          <ScrollArea className="h-144 pr-4">
            <Chapter1 />
            <Chapter2 />
            <Chapter3 />
            <Chapter4 />
            <Chapter5 />
            <Chapter6 />
            <Chapter7 />
          </ScrollArea>
        </div>
        <div />
      </div>
    </motion.section>
  );
};

export default HandbookPage;
