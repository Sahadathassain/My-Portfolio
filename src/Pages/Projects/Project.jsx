import { FaGithub, FaArrowUpRightFromSquare } from "react-icons/fa6";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import PropTypes from "prop-types";
import PuntoFrameImg1 from "../../assets/punto-frame-studio.png";
import img1 from "../../assets/Bangladeshi-chef-09-17-2026_03_28_PM.png";
import img2 from "../../assets/Educational-and-Learning.png";
import img3 from "../../assets/Vite-React.png";
const featuredProject = {
  title: "Punto Frame Studio",
  category: "Digital Agency · Creative & Digital",
  role: "Digital & Creative Project Coordinator",
  description:
    "A creative digital agency project focused on social media, content, creative development, design improvements, and digital experiences.",
  image: PuntoFrameImg1,
  website: "https://puntoframe.studio/en",
  tags: [
    "Creative Direction",
    "Social Media",
    "Content",
    "Digital Experience",
  ],
};

const projects = [
  {
    title: "Bangladeshi Chef",
    category: "Web Development",
    description:
      "A recipe-focused web application designed to explore Bangladeshi cuisine and culinary content.",
    image: img1,
    client: "https://github.com/Sahadathassain/assignment-recipe-chef-client",
    server:
      "https://github.com/Sahadathassain/assignment-recipe-chef-server",
    live: "https://assignment-recipe-chef-client.vercel.app/",
  },
  {
    title: "Educational & Learning",
    category: "Web Development",
    description:
      "An educational platform focused on presenting learning resources through a clean and accessible interface.",
    image: img2,
    client:
      "https://github.com/Sahadathassain/educational-and-Learning-clint",
    server:
      "https://github.com/Sahadathassain/Educational-and-Learning-server",
    live: "https://educational-and-learning.web.app/",
  },
  {
    title: "Sports Academy",
    category: "Web Development",
    description:
      "A sports academy website with a structured interface for presenting academy information and activities.",
    image: img3,
    client: "https://github.com/Sahadathassain/Sports-academy-client",
    server: "https://github.com/Sahadathassain/Sports-academy-server",
    live: "https://sports-academy-fc9b3.web.app/",
  },
];

/* ----------------------------------------------------
   Small Project Image
---------------------------------------------------- */

const ProjectImage = ({ src, alt }) => {
    return (
        <div className="h-[220px] overflow-hidden bg-[#111] rounded-xl">
            <LazyLoadImage
                src={src}
                alt={alt}
                effect="blur"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
            />
        </div>
    );
};

ProjectImage.propTypes = {
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
};

/* ----------------------------------------------------
   Punto Frame Website Preview
---------------------------------------------------- */

const WebsitePreview = () => {
  return (
    <div className="relative bg-[#090909] p-3 md:p-4 rounded-2xl border border-white/10">
      {/* Browser Top Bar */}
      <div className="flex items-center gap-2 bg-[#1b1b1b] px-4 py-3 rounded-t-xl border-b border-white/5">
        {/* Browser Dots */}
        <span className="w-2.5 h-2.5 rounded-full bg-red-400/70"></span>
        <span className="w-2.5 h-2.5 rounded-full bg-yellow-400/70"></span>
        <span className="w-2.5 h-2.5 rounded-full bg-green-400/70"></span>

        {/* Address Bar */}
        <div className="ml-3 flex-1 bg-[#111] rounded-md px-3 py-1.5">
          <p className="text-[11px] md:text-xs text-gray-500 truncate">
            puntoframe.studio/en
          </p>
        </div>
      </div>

      {/* Website Screenshot */}
      <div
        className="
          h-[240px]
          sm:h-[270px]
          md:h-[300px]
          lg:h-[320px]
          overflow-y-auto
          overflow-x-hidden
          bg-white
          rounded-b-xl
          scroll-smooth
        "
        style={{
          scrollbarWidth: "thin",
        }}
      >
        <LazyLoadImage
          src={featuredProject.image}
          alt="Punto Frame Studio website"
          effect="blur"
          className="w-full h-auto block"
        />
      </div>
    </div>
  );
};

/* ----------------------------------------------------
   Main Component
---------------------------------------------------- */

const Projects = () => {
  return (
    <section
      id="projects"
      className="px-5 md:px-10 lg:px-20 xl:px-28 bg-[#141414] text-white py-20"
    >
      {/* ------------------------------------------------
          Section Heading
      ------------------------------------------------ */}

      <div className="max-w-7xl mx-auto mb-14">
        <p className="text-primary text-sm tracking-[0.25em] uppercase mb-4">
          Selected Work
        </p>

        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight">
            Projects<span className="text-primary">.</span>
          </h2>

          <p className="max-w-md text-gray-400 text-sm md:text-base leading-relaxed">
            A selection of digital experiences, creative projects, and web
            development work.
          </p>
        </div>
      </div>

      {/* ------------------------------------------------
          Featured Punto Frame Project
      ------------------------------------------------ */}

      <div className="max-w-7xl mx-auto mb-20">
        <div className="grid lg:grid-cols-[1.35fr_0.65fr] gap-8 lg:gap-12 items-center">
          {/* Website Preview */}

          <div className="group">
            <WebsitePreview />
          </div>

          {/* Project Information */}

          <div className="lg:pl-4">
            <p className="text-primary text-xs uppercase tracking-[0.2em] mb-4">
              Featured Project
            </p>

            <h3 className="text-3xl md:text-4xl font-semibold mb-3">
              {featuredProject.title}
            </h3>

            <p className="text-sm text-gray-500 mb-6">
              {featuredProject.category}
            </p>

            <div className="border-l border-primary/40 pl-4 mb-6">
              <p className="text-xs uppercase tracking-wider text-gray-500 mb-1">
                My Role
              </p>

              <p className="text-sm text-gray-200">
                {featuredProject.role}
              </p>
            </div>

            <p className="text-gray-400 leading-7 text-sm md:text-base mb-7">
              {featuredProject.description}
            </p>

            {/* Tags */}

            <div className="flex flex-wrap gap-2 mb-8">
              {featuredProject.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1.5 text-xs border border-white/10 rounded-full text-gray-400 bg-white/[0.02]"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Website Button */}

            <a
              href={featuredProject.website}
              target="_blank"
              rel="noreferrer"
              className="
                inline-flex
                items-center
                gap-3
                px-5
                py-3
                rounded-full
                bg-lime-500
                text-black
                text-sm
                font-medium
                hover:bg-white
                transition-all
                duration-300
              "
            >
              Visit Website
              <FaArrowUpRightFromSquare className="text-xs" />
            </a>
          </div>
        </div>
      </div>

      {/* ------------------------------------------------
          Other Projects
      ------------------------------------------------ */}

      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-gray-500 mb-2">
              More Work
            </p>

            <h3 className="text-2xl md:text-3xl font-semibold">
              Development Projects
            </h3>
          </div>

          <span className="hidden sm:block text-xs text-gray-600">
            03 Projects
          </span>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="
                group
                bg-[#191919]
                border
                border-white/5
                rounded-2xl
                overflow-hidden
                hover:border-primary/20
                transition-all
                duration-500
              "
            >
              {/* Image */}

              <div className="p-3">
                <ProjectImage
                  src={project.image}
                  alt={project.title}
                />
              </div>

              {/* Content */}

              <div className="px-5 pb-5 pt-2">
                <div className="flex items-center justify-between gap-3 mb-3">
                  <p className="text-xs text-primary uppercase tracking-wider">
                    {project.category}
                  </p>

                  <span className="text-xs text-gray-600">
                    0{index + 1}
                  </span>
                </div>

                <h4 className="text-xl font-semibold mb-3">
                  {project.title}
                </h4>

                <p className="text-sm text-gray-500 leading-6 mb-5">
                  {project.description}
                </p>

                {/* Links */}

                <div className="flex flex-wrap gap-2">
                  <a
                    href={project.client}
                    target="_blank"
                    rel="noreferrer"
                    className="
                      inline-flex
                      items-center
                      gap-2
                      px-3
                      py-2
                      rounded-lg
                      bg-white/5
                      text-xs
                      text-gray-400
                      hover:bg-primary
                      hover:text-black
                      transition-all
                    "
                  >
                    <FaGithub />
                    Client
                  </a>

                  <a
                    href={project.server}
                    target="_blank"
                    rel="noreferrer"
                    className="
                      inline-flex
                      items-center
                      gap-2
                      px-3
                      py-2
                      rounded-lg
                      bg-white/5
                      text-xs
                      text-gray-400
                      hover:bg-primary
                      hover:text-black
                      transition-all
                    "
                  >
                    <FaGithub />
                    Server
                  </a>

                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="
                      inline-flex
                      items-center
                      gap-2
                      px-3
                      py-2
                      rounded-lg
                      bg-white/5
                      text-xs
                      text-gray-400
                      hover:bg-primary
                      hover:text-black
                      transition-all
                    "
                  >
                    <FaArrowUpRightFromSquare />
                    Live
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ------------------------------------------------
          Bottom CTA
      ------------------------------------------------ */}

      <div className="max-w-7xl mx-auto mt-20 pt-10 border-t border-white/5">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <p className="text-gray-500 text-sm mb-2">
              Have an idea in mind?
            </p>

            <h3 className="text-2xl md:text-3xl font-semibold">
              Let&apos;s create something meaningful
              <span className="text-primary">.</span>
            </h3>
          </div>

          <a
            href="/contact"
            className="
              inline-flex
              items-center
              justify-center
              gap-2
              px-6
              py-3
              rounded-full
              border
              border-white/10
              text-sm
              text-gray-300
              hover:bg-primary
              hover:text-black
              hover:border-primary
              transition-all
            "
          >
            Start a Conversation
            <FaArrowUpRightFromSquare className="text-xs" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;