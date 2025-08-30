import type { Metadata } from "next";
import * as motion from "motion/react-client";

import { Selection } from "@/components/selection";

export const metadata: Metadata = {
  title: "Каталог",
};

const CatalogPage = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 0.6, duration: 0.4, ease: "easeIn" },
      }}
      className="h-full relative py-4 md:py-8 bg-catalog bg-cover bg-no-repeat bg-center"
    >
      <Selection />
    </motion.section>
  );
};

export default CatalogPage;
