import type { Metadata } from "next";
import * as motion from "motion/react-client";

import { ContactForm } from "@/components/contact-form";

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
      className="h-full relative py-4 md:py-8 flex items-center justify-center bg-bg bg-cover bg-no-repeat bg-center"
    >
      <ContactForm />
    </motion.section>
  );
};

export default ContactPage;
