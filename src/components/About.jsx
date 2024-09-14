import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const ServiceCard = ({ index, title, icon }) => {
  return (
    <motion.div
      variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
      className="xs:w-full sm:w-[250px] w-full card-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div
        className="bg-jetLight rounded-[20px] py-5 px-8 min-h-[200px] sm:min-h-[280px] flex justify-evenly items-center flex-col"
      >
        <img src={icon} alt={title} className="w-12 sm:w-16 h-12 sm:h-16 object-contain" />
        <h3 className="text-taupe text-[16px] sm:text-[18px] font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  );
};

const About = () => {
  return (
    <div className="mt-10 sm:mt-20">
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-taupe text-[14px] sm:text-[18px] max-w-full sm:max-w-3xl leading-[24px] sm:leading-[30px]"
      >
        I bring a well-rounded approach to software development, focusing on
        creating efficient and reliable solutions that adapt to various
        platforms. My process emphasizes quality, scalability, and security,
        ensuring that every project is built to perform and evolve.
      </motion.p>

      <div className="mt-10 sm:mt-20 flex flex-wrap justify-center gap-4 sm:gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(About, "about");
