import type { Metadata } from "next";
import * as motion from "motion/react-client";

import { HANDBOOK_ITEMS } from "@/data";
import Link from "next/link";

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
        <div className="p-6 py-12 h-[90vh] rounded-xl bg-gray-500/60 backdrop-blur-sm text-white">
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
        <div className="p-6 bg-background rounded-xl">2</div>
        <div />
      </div>
    </motion.section>
  );
};

export default HandbookPage;
