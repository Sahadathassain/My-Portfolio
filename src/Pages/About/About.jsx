import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

import aboutImg from "../../assets/about.png";

const About = () => {
  return (
    <section
      id="about"
      className="py-24 px-6 md:px-20 bg-[#141414] text-slate-300"
    >
      <div className="max-w-6xl mx-auto">

        {/* SECTION TITLE */}
        <motion.div
          className="mb-16"
          initial={{ y: -50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-lime-500 text-sm uppercase tracking-[0.3em] text-center mb-3">
            Get to know me
          </p>

          <h1 className="text-4xl md:text-5xl font-semibold text-center text-white">
            About <span className="text-lime-500">Me</span>
          </h1>
        </motion.div>

        {/* CONTENT */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-14 items-center">

          {/* IMAGE */}
          <motion.div
            className="flex justify-center"
            initial={{ x: -80, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative">

              {/* Decorative border */}
              <div className="absolute -inset-3 border border-lime-500/30 rounded-full" />

              <img
                src={aboutImg}
                alt="Sahadat Hossain"
                className="relative h-72 w-72 md:h-96 md:w-96 rounded-full object-cover"
              />

            </div>
          </motion.div>

          {/* TEXT */}
          <motion.div
            initial={{ x: 80, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >

            <p className="text-lime-500 text-sm uppercase tracking-widest mb-3">
              Digital Creative & Project Coordinator
            </p>

            <h2 className="text-3xl md:text-4xl font-semibold text-white mb-6">
              I connect creativity,
              <br />
              technology & ideas.
            </h2>

            <p className="text-gray-400 leading-7 mb-5">
              I work at the intersection of creativity and technology,
              developing digital experiences, creative projects, and ideas
              that turn concepts into meaningful visual experiences.
            </p>

            <p className="text-gray-400 leading-7 mb-8">
              Currently, I work as a Digital & Creative Project Coordinator
              at Punto Frame Studio, where I contribute to social media,
              content planning, creative project development, design
              improvements, and new initiatives for the studio.
            </p>

            {/* CAPABILITIES */}
            <div className="flex flex-wrap gap-3 mb-8">
              <span className="px-4 py-2 rounded-full border border-white/10 text-sm">
                Creative Direction
              </span>

              <span className="px-4 py-2 rounded-full border border-white/10 text-sm">
                Digital Design
              </span>

              <span className="px-4 py-2 rounded-full border border-white/10 text-sm">
                Social Media
              </span>

              <span className="px-4 py-2 rounded-full border border-white/10 text-sm">
                Web Development
              </span>
            </div>

            {/* PERSONAL INFO */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">

              <div>
                <p className="text-gray-500 text-sm">Based in</p>
                <p className="text-white">Bangladesh</p>
              </div>

              <div>
                <p className="text-gray-500 text-sm">Current Role</p>
                <p className="text-white">
                  Digital & Creative Coordinator
                </p>
              </div>

              <div>
                <p className="text-gray-500 text-sm">Focus</p>
                <p className="text-white">
                  Digital & Creative
                </p>
              </div>

              <div>
                <p className="text-gray-500 text-sm">Email</p>
                <p className="text-white break-all">
                  sahadathossain164109@gmail.com
                </p>
              </div>

            </div>

            {/* CTA */}
            <a
              href="https://drive.google.com/file/d/1VTSVFWpaiqeuJumUcMV1Wyx2HLl3za5b/view?usp=drive_link"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-3 bg-lime-500 hover:bg-lime-400 text-black font-semibold px-5 py-3 rounded transition-all duration-300"
            >
              View Resume
              <FaArrowRight />
            </a>

          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;