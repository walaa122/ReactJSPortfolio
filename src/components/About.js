import React from "react";
//count up
import CountUp from "react-countup";
//observer hook
import { useInView } from "react-intersection-observer";
//motion
import { motion } from "framer-motion";
//variant
import { fadeIn } from "../variants";

const About = () => {
  const { ref, inView } = useInView({
    threshold: 0.5,
  });
  return (
    <section id="about" className="section" ref={ref}>
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-10 lg:flex-row lg:items-center
        lg:gap-x-20 lg:gap-y-0 h-screen">
          {/* img */}
          <motion.div
          variants={fadeIn('right', 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{once: false, amount: 0.3}}
            className="flex-1 bg-about bg-contain bg-no-repeat h-[640px]
        mix-blend-lighten bg-top"
          ></motion.div>
          {/* text */}
          <motion.div
          variants={fadeIn('left', 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{once: false, amount: 0.3}}
           className="flex-1">
            <h2 className="h2 text-pink-300 shadow-box font-bold">About me.</h2>
            <h4 className="h4 mb-4 font-semibold">
              I graduated from Information Technology Institute ITI (Intensive
              Training Program) in Egypt as a full-stack web developer using
              MEARN. I'm a freelance full-stack developer with a specialized
              focus on front-end technologies, Possessing over four years of
              extensive experience in the field, Additionally, I am a skilled
              translator (English - Arabic).
            </h4> 

            {/* stats */}
            <div className="flex gap-x-6 lg:gap-x-10 mb-12">
              <div>
                <div className="text-[40px] font-tertiary text-gradient mb-2">
                  {inView ? <CountUp start={0} end={5} duration={3} /> : null}+
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  Years of <br />
                  Experience
                </div>
              </div>
              <div>
                <div className="text-[40px] font-tertiary text-gradient mb-2">
                  {inView ? <CountUp start={0} end={10} duration={3} /> : null}+
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  Projects <br />
                  Completed
                </div>
              </div>
              {/* <div>
                <div className="text-[40px] font-tertiary text-gradient mb-2">
                {inView ?  <CountUp start={0} end={5} duration={3}/> :null}
                +
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  Years of <br/> 
                Experience
                </div>
              </div> */}
            </div>
            <div className="flex gap-x-8 items-center shadow-box">
              <a href="https://www.upwork.com/freelancers/~01c6d7be00cf394479" className="text-gradient btn-link">
                Upwork Portfolio
              </a>
              <a href="https://mostaql.com/u/Walaa_Gamal122/portfolio" className="text-gradient btn-link">
                Mostaql Portfolio
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
