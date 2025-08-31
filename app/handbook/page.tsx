import type { Metadata } from "next";
import * as motion from "motion/react-client";

import { Handbook } from "@/components/handbook";

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
      <Handbook />
    </motion.section>
  );
};

export default HandbookPage;
