import React from "react";
//images
import Image from "../assets/avatar.svg";
//icons
import { FaGithub, FaFacebook, FaLinkedinIn, FaTwitter } from "react-icons/fa";
//animation
import { TypeAnimation } from "react-type-animation";
//motion
import { motion } from "framer-motion";
// variants
import { fadeIn } from "../variants";

const Banner = () => {

  return (
    <section
      id="home"
      className="min-h-[85vh] lg:min-h-[78vh] flex items-center"
    >
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12">
          {/* text */}
          <div className="flex-1 text-center font-secondary lg:text-left">
            <motion.h1
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="text-[55px] font-bold leading-[0.8] lg:text-[110px] shadow-box"
            >
              WALAA <span>GAMAL</span>
            </motion.h1>
            <motion.div
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="mb-6 text-[36px] lg:text-[60px] font-secondary
          font-semibold uppercase leading-[1]"
            >
              <span className="text-white mr-4 shadow-box">I am a </span>
              <TypeAnimation
                sequence={[
                  "Developer",
                  2000,
                  "Designer",
                  2000,
                  "Translator",
                  2000,
                ]}
                speed={50}
                className="text-accent"
                wrapper="span"
                repeat={Infinity}
              />
            </motion.div>
            <motion.p
              className="mb-8 max-w-lg mx-auto lg:mx-0"
              variants={fadeIn("up", 0.5)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
            >
              Professional full-stack web developer in the MEARN stack with a
              specialized focus on front-end technologies. Possessing over four
              years of extensive experience in the field. Additionally, I am a
              skilled translator.
            </motion.p>
            <motion.div
              className="flex max-w-max gap-x-6 items-center mb-12
            mx-auto lg:mx-0"
              variants={fadeIn("up", 0.5)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
            >
              <button className="btn btn-lg"><a href="#contact" >Contact me</a></button>
              <a href="https://drive.google.com/file/d/1Ro7zi35sbAt94BKDMxzxU6nkOmIvRfCe/view?usp=sharing" className="text-gradient btn-link">
                Check My CV
              </a>
            </motion.div>
            {/* social */}
            <motion.div
              className="flex text-[20px] gap-x-6 max-w-max mx-auto
              lg:mx-0"
              variants={fadeIn("up", 0.7)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
            >
              <a href="https://github.com/walaa122">
                <FaGithub />
              </a>
              <a href="https://www.linkedin.com/in/walaa-gamal-bab114121/">
                <FaLinkedinIn />
              </a>
              <a href="https://www.facebook.com/ran.mory.560/">
                <FaFacebook />
              </a>
              <a href="https://twitter.com/walaa49725288">
                <FaTwitter />
              </a>
            </motion.div>
          </div>
          {/* image */}
          <motion.div
            className="hidden lg:flex flex-1 max-w-[320px] lg:max-w-[450px]"
            variants={fadeIn("down", 0.5)}
            initial="hidden"
            whileInView={"show"}
          >
            <img src={Image} alt="" className="walaa mix-blend-lighten rounded-3xl"/>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
