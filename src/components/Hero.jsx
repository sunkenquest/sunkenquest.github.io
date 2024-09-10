import { motion } from "framer-motion";
import { styles } from "../styles";
import { bwmap } from "../assets";
import HyperText from "./ui/HyperText";

const Hero = () => {
  return (
    <>
      <div className="absolute top-0 left-0 z-0 h-[100vh] w-screen">
        <img
          src={bwmap}
          alt="world map"
          className="w-full h-full sm:block hidden object-cover"
        />
      </div>
      <div className="absolute top-0 left-0 z-0 h-[100vh] w-screen">
        <img
          src={bwmap}
          alt="world map"
          className="w-full h-full sm:block hidden object-cover"
        />
      </div>
      <section
        className="relative flex sm:flex-row flex-col w-full h-screen mx-auto 
        sm:bg-hero bg-hero-mobile overflow-hidden"
      >
        <div
          className={`absolute inset-0 sm:top-[250px] top-[150px] 
          lg:top-[150px] xl:top-[250px] ${styles.paddingX} 
          max-w-7xl mx-auto flex flex-row items-start
          justify-between gap-3`}
        >
          <div className="flex flex-col justify-center items-center mt-5 ml-3">
            <div className="w-5 h-5 rounded-full bg-[#0a0a0a] sm:hidden" />
            <div className="w-1 sm:h-80 h-40 bw-gradient sm:hidden" />
          </div>

          <div>
            <HyperText
              text="Hi, I'm Mikco"
              duration={1000}
              className={`${styles.heroHeadText} text-eerieBlack font-poppins`}
              animateOnLoad={true}
              framerProps={{
                initial: { opacity: 0, y: -10 },
                animate: { opacity: 1, y: 0 },
                exit: { opacity: 0, y: 3 },
              }}
            />
            <p className={`${styles.heroSubText} mt-2 text-eerieBlack`}>
              Turning code into creativity. <br className="sm:block hidden" />I
              build seamless solutions across
              <br className="sm:block hidden" /> frontend, backend, and
              everything in <br className="sm:block hidden" />
              between.
              <br className="sm:block hidden" />
            </p>
            <button
              className="live-demo sm:text-[18px] text-[14px] text-timberWolf 
              font-bold font-beckman py-5 pl-3 pr-3 whitespace-nowrap 
              sm:w-[148px] sm:h-[58px] w-[125px] h-[46px] rounded-[10px] 
              bg-jetLight sm:mt-[22px] mt-[16px] hover:bg-battleGray 
              hover:text-eerieBlack transition duration-[0.2s] ease-in-out 
              flex items-center justify-center"
              onClick={() => window.open("", "_blank")}
            >
              MY RESUME
            </button>
          </div>
          <div
            className="w-screen flex flex-col items-start 
            justify-center sm:-ml-[3rem] xxs:mt-4"
          ></div>

          <div></div>
        </div>

        <div
          className="absolute xs:bottom-10 bottom-32 w-full 
          flex justify-center items-center"
        >
          <a href="#about">
            <div
              className="w-[35px] h-[64px] rounded-3xl border-4 
            border-french border-dim flex
            justify-center items-start p-2"
            >
              <motion.div
                animate={{
                  y: [0, 24, 0],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: "loop",
                }}
                className="w-3 h-3 rounded-full bg-taupe mb-1"
              />
            </div>
          </a>
        </div>
      </section>
    </>
  );
};

export default Hero;
