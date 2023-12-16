import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import mobileImage from "../assets/laptop.png";

const Hero = () => {
  const isMobileView = window.innerWidth <= 768;
  return (
    <section className="relative w-full h-screen bg-hero-pattern bg-cover mx-auto ">
      Hero
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} text-white-100`}>
            Hi, I'm <span className="text-[#915eff]">Salah</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I'm a passionate full stack developer
          </p>
        </div>
      </div>
      {isMobileView ? (
        <img
          src={mobileImage}
          className="absolute bottom-0  w-[100%] h-[100%] object-contain mb-[-15%]"
        />
      ) : (
        <>
          <ComputersCanvas />
          <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
            <a href="#about">
              <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
                <motion.div
                  animate={{ y: [0, 24, 0] }}
                  transition={{
                    repeat: Infinity,
                    duration: 1.5,
                    repeatType: "loop",
                  }}
                  className="w-3 h-3 rounded-full bg-secondary mb-1"
                />
              </div>
            </a>
          </div>
        </>
      )}
    </section>
  );
};

export default Hero;
