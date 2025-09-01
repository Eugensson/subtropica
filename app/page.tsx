import * as motion from "motion/react-client";

const Home = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 0.6, duration: 0.4, ease: "easeIn" },
      }}
      className="h-full bg-bg bg-cover bg-no-repeat bg-center"
    >
      <div className="h-full">homepage</div>
    </motion.section>
  );
};

export default Home;
