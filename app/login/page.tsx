import type { Metadata } from "next";
import * as motion from "motion/react-client";

import { LoginForm } from "@/components/login-form";

export const metadata: Metadata = {
  title: "Вхід",
};

const LoginPage = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 0.6, duration: 0.4, ease: "easeIn" },
      }}
      className="h-full relative py-4 md:py-8 flex items-center justify-center bg-bg bg-cover bg-no-repeat bg-center"
    >
      <LoginForm />
    </motion.section>
  );
};

export default LoginPage;
