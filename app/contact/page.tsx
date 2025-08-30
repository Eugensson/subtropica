import type { Metadata } from "next";
import * as motion from "motion/react-client";

export const metadata: Metadata = {
  title: "Контакти",
};

const ContactPage = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 0.6, duration: 0.4, ease: "easeIn" },
      }}
      className="h-full"
    >
      Contact Page
    </motion.section>
  );
};

export default ContactPage;
