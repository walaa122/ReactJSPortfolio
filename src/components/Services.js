import React from "react";
//icon
import { BsArrowUpRight } from "react-icons/bs";
//motion
import { motion } from "framer-motion";
//variant
import { fadeIn } from "../variants";

//services data
const services = [
  {
    name: "MERN/MEAN developer",
    description:
      "Full-stack web developer using MEARN stack, I created dynamic and responsive web applications with seamless user experiences.",
    link: "Learn more",
  },
  {
    name: "React.js/Next.js developer",
    description:
      "Front-end developer specialized in React/Next.js, created visually stunning, performant, and user-friendly interfaces.",
    link: "Learn more",
  },
  {
    name: "Arabic/English Translator",
    description:
      "possess exceptional language proficiency and cultural understanding, specializing in accurate and fluent translation.",
    link: "Learn more",
  },
  // {
  //   name: "Photoshop/Graphic designer",
  //   description:
  //     "passionate about creating visuals that effectively convey messages, evoke emotions, and ultimately contribute to the success of brands and businesses.",
  //   link: "Learn more",
  // },
  {
    name: "Career Branding Specialist",
    description:
      "Leverage my expertise as a CV, Cover Letter, and LinkedIn Profile Creator for a competitive edge and career growth journey",
    link: "Learn more",
  },
];

const Services = () => {
  return (
    <section id="services" className="section">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row">
          {/* text & image */}
          <motion.div
            className="flex-1 lg:bg-services lg:bg-bottom bg-no-repeat
          mix-blend-lighten mb-12 lg:mb-0"
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
          >
            <h2 className="h2 text-pink-300 mb-6 font-bold shadow-box">
              What I Do.
            </h2>
            <h4 className="h4 max-w-[455px] mb-16 font-semibold">
              My proficiency in both front-end and back-end technologies
              allows me to work on all aspects of application development,
              from database design and server-side logic to user interface and
              client-side interactivity. My expertise in the MERN/MEAN stack
              makes me sought-after professionals in the web development
              industry.
            </h4>
            <button className="btn btn-sm"><a href='https://mostaql.com/u/Walaa_Gamal122/portfolio'>See my work</a></button>
          </motion.div>
          {/* services */}
          <motion.div
            variants={fadeIn("left", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1"
          >
            {/* service list */}
            <div>
              {services.map((service, index) => {
                //descruture service
                const { name, description, link } = service;
                return (
                  <div
                    className="border-b border-pink-400 h-[146px] mb-[38px]
                  flex"
                    key={index}
                  >
                    <div className="max-w-[476px]">
                      <h4
                        className="text-[20px] tracking-wider
                    font-semibold mb-6"
                      >
                        {name}
                      </h4>
                      <p className="font-secondary leading-tight">
                        {description}
                      </p>
                    </div>
                    <div className="flex flex-col flex-1 items-end">
                      <a
                        href="https://khamsat.com/user/walaa_gamal1/services"
                        className="btn w-9 h-9 mb-[42px] flex justify-center
                      items-center"
                      >
                        <BsArrowUpRight />
                      </a>
                      <a href="home" className="text-gradient text-sm">
                        {link}
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;
