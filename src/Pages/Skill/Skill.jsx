import { motion } from "framer-motion";

import {
  FaPalette,
  FaLaptopCode,
  FaLightbulb,
  FaReact,
  FaGithub,
  FaFacebookF,
  FaInstagram,
} from "react-icons/fa";

import {
 
  SiJavascript,
  SiTailwindcss,
  SiMongodb,
  SiCanva,
  SiMeta,
} from "react-icons/si";

const capabilities = [
  {
    number: "01",
    title: "Creative Direction",
    description:
      "Developing creative concepts, visual direction, and ideas that give projects a clear and distinctive identity.",
    icon: <FaLightbulb />,
  },

  {
    number: "02",
    title: "Digital Design",
    description:
      "Creating clean and engaging digital experiences with a strong focus on visual hierarchy, usability, and brand consistency.",
    icon: <FaPalette />,
  },

  {
    number: "03",
    title: "Social Media Management",
    description:
      "Managing Facebook and Instagram presence, planning content, coordinating creative assets, and supporting social media growth through Meta's business tools.",
    icon: <FaInstagram />,
  },

  {
    number: "04",
    title: "Web Development",
    description:
      "Turning creative concepts into responsive and functional digital experiences using modern web technologies.",
    icon: <FaLaptopCode />,
  },
];

const creativeTools = [
  {
    title: "Canva",
    icon: <SiCanva className="text-cyan-400" />,
  },

  {
    title: "Meta Business Suite",
    icon: <SiMeta className="text-blue-500" />,
  },

];

const socialPlatforms = [
  {
    title: "Facebook",
    icon: <FaFacebookF className="text-blue-500" />,
  },

  {
    title: "Instagram",
    icon: <FaInstagram className="text-pink-500" />,
  },
];

const developmentTools = [
  {
    title: "React",
    icon: <FaReact className="text-cyan-400" />,
  },

  {
    title: "JavaScript",
    icon: <SiJavascript className="text-yellow-400" />,
  },

  {
    title: "Tailwind CSS",
    icon: <SiTailwindcss className="text-cyan-400" />,
  },

  {
    title: "MongoDB",
    icon: <SiMongodb className="text-green-500" />,
  },

  {
    title: "GitHub",
    icon: <FaGithub className="text-white" />,
  },
];

const ToolItem = ({ title, icon }) => {
  return (
    <div
      className="
        group
        flex
        items-center
        gap-3
        px-5
        py-3
        rounded-full
        border
        border-white/10
        bg-[#111]
        hover:border-lime-500/50
        hover:bg-[#181818]
        transition-all
        duration-300
      "
    >
      <span className="text-xl group-hover:scale-110 transition-transform duration-300">
        {icon}
      </span>

      <span className="text-sm text-gray-300 group-hover:text-white transition-colors">
        {title}
      </span>
    </div>
  );
};

const Skill = () => {
  return (
    <section
      id="capabilities"
      className="py-24 px-6 md:px-20 bg-[#141414] text-white"
    >
      <div className="max-w-6xl mx-auto">

        {/* =========================================
            SECTION HEADER
        ========================================== */}

        <motion.div
          className="mb-16"
          initial={{ y: -50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.8,
            type: "spring",
            stiffness: 100,
          }}
        >
          <p className="text-lime-500 text-sm uppercase tracking-[0.3em] text-center mb-3">
            What I do
          </p>

          <h1 className="text-4xl md:text-5xl font-semibold text-center">
            Creative{" "}
            <span className="text-lime-500">
              Capabilities
            </span>
          </h1>

          <p className="text-gray-500 text-center max-w-2xl mx-auto mt-5 leading-7">
            Combining creativity, digital design, social media, content,
            and technology to create meaningful digital experiences.
          </p>
        </motion.div>


        {/* =========================================
            CAPABILITIES
        ========================================== */}

        <div
          className="
            grid
            grid-cols-1
            md:grid-cols-2
            gap-px
            bg-white/10
            border
            border-white/10
            rounded-3xl
            overflow-hidden
          "
        >
          {capabilities.map((item, index) => (
            <motion.div
              key={item.number}
              className="
                group
                bg-[#141414]
                p-8
                md:p-10
                hover:bg-[#191919]
                transition-all
                duration-300
              "
              initial={{
                opacity: 0,
                y: 40,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
              }}
            >

              {/* TOP */}
              <div className="flex items-start justify-between mb-8">

                <span className="text-lime-500 text-sm font-medium">
                  {item.number}
                </span>

                <div
                  className="
                    text-2xl
                    text-gray-500
                    group-hover:text-lime-500
                    transition-colors
                    duration-300
                  "
                >
                  {item.icon}
                </div>

              </div>


              {/* TITLE */}
              <h2
                className="
                  text-2xl
                  md:text-3xl
                  font-semibold
                  mb-4
                  group-hover:text-lime-400
                  transition-colors
                  duration-300
                "
              >
                {item.title}
              </h2>


              {/* DESCRIPTION */}
              <p className="text-gray-500 leading-7 max-w-md">
                {item.description}
              </p>

            </motion.div>
          ))}
        </div>


        {/* =========================================
            TOOLS & TECHNOLOGY
        ========================================== */}

        <motion.div
          className="mt-24"
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.8,
          }}
        >

          {/* HEADER */}

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">

            <div>

              <p className="text-lime-500 text-sm uppercase tracking-[0.25em] mb-2">
                Technology & Tools
              </p>

              <h2 className="text-3xl md:text-4xl font-semibold">
                Tools I work with
              </h2>

            </div>

            <p className="text-gray-500 text-sm leading-6 max-w-md">
              A combination of creative, social media, design, and
              development tools that help me turn ideas into digital
              experiences.
            </p>

          </div>


          {/* =========================================
              CREATIVE TOOLS
          ========================================== */}

          <div className="mb-10">

            <h3 className="text-lg font-medium text-white mb-5">
              Creative & Design
            </h3>

            <div className="flex flex-wrap gap-3">

              {creativeTools.map((tool) => (
                <ToolItem
                  key={tool.title}
                  title={tool.title}
                  icon={tool.icon}
                />
              ))}

            </div>

          </div>


          {/* =========================================
              SOCIAL MEDIA
          ========================================== */}

          <div className="mb-10">

            <h3 className="text-lg font-medium text-white mb-5">
              Social Media Platforms
            </h3>

            <div className="flex flex-wrap gap-3">

              {socialPlatforms.map((platform) => (
                <ToolItem
                  key={platform.title}
                  title={platform.title}
                  icon={platform.icon}
                />
              ))}

            </div>

          </div>


          {/* =========================================
              DEVELOPMENT
          ========================================== */}

          <div>

            <h3 className="text-lg font-medium text-white mb-5">
              Development
            </h3>

            <div className="flex flex-wrap gap-3">

              {developmentTools.map((tool) => (
                <ToolItem
                  key={tool.title}
                  title={tool.title}
                  icon={tool.icon}
                />
              ))}

            </div>

          </div>

        </motion.div>


        {/* =========================================
            BOTTOM STATEMENT
        ========================================== */}

        <motion.div
          className="
            mt-24
            pt-10
            border-t
            border-white/10
            flex
            flex-col
            md:flex-row
            md:items-center
            md:justify-between
            gap-6
          "
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.8,
          }}
        >

          <div>
            <p className="text-gray-500 text-sm uppercase tracking-widest mb-2">
              My approach
            </p>

            <h3 className="text-2xl md:text-3xl font-semibold">
              Creativity meets technology.
            </h3>
          </div>

          <p className="text-gray-500 text-sm max-w-md leading-6">
            From creative ideas and social content to digital products
            and websites, I bring different disciplines together to
            create better experiences.
          </p>

        </motion.div>

      </div>
    </section>
  );
};

export default Skill;