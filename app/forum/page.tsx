import type { Metadata } from "next";
import * as motion from "motion/react-client";

import { Forum } from "@/components/forum";

export const metadata: Metadata = {
  title: "Форум",
};

const ForumPage = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 0.6, duration: 0.4, ease: "easeIn" },
      }}
      className="h-full relative py-4 md:py-8 bg-bg bg-cover bg-no-repeat bg-center"
    >
      <Forum />
    </motion.section>
  );
};

export default ForumPage;
