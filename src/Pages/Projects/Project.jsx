import { FaGithub, FaArrowUpRightFromSquare } from "react-icons/fa6";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import PropTypes from "prop-types";

import PuntoFrameImg1 from "../../assets/punto-frame-studio.png";
import img1 from "../../assets/Bangladeshi-chef-09-17-2026_03_28_PM.png";
import img2 from "../../assets/Educational-and-Learning-09-17-2026_10_54_PM.png";
import img3 from "../../assets/Sports-Academy-09-20-2026_04_32_PM.png";

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
    client:
      "https://github.com/Sahadathassain/assignment-recipe-chef-client",
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
    live: "https://educational-and-learning-clint.vercel.app/",
  },
  {
    title: "Sports Academy",
    category: "Web Development",
    description:
      "A sports academy website with a structured interface for presenting academy information and activities.",
    image: img3,
    client:
      "https://github.com/Sahadathassain/Sports-academy-client",
    server:
      "https://github.com/Sahadathassain/Sports-academy-server",
    live: "https://sports-academy-client-rosy.vercel.app/",
  },
];

/* ----------------------------------------------------
   Scrollable Project Image
---------------------------------------------------- */

const ProjectImage = ({ src, alt }) => {
  return (
    <div
      className="
        group/image
        relative
        h-[220px]
        overflow-y-auto
        overflow-x-hidden
        rounded-xl
        bg-white
        scroll-smooth
      "
      style={{
        scrollbarWidth: "thin",
        scrollbarColor: "#525252 transparent",
      }}
    >
      <LazyLoadImage
        src={src}
        alt={alt}
        effect="blur"
        className="
          block
          h-auto
          w-full
          transition-transform
          duration-500
        "
      />

      {/* Top Fade */}
      <div
        className="
          pointer-events-none
          absolute
          inset-x-0
          top-0
          h-10
          bg-gradient-to-b
          from-black/20
          to-transparent
        "
      />

      {/* Bottom Fade */}
      <div
        className="
          pointer-events-none
          absolute
          inset-x-0
          bottom-0
          h-14
          bg-gradient-to-t
          from-black/25
          to-transparent
        "
      />

      {/* Scroll Indicator */}
      <div
        className="
          pointer-events-none
          absolute
          bottom-3
          left-1/2
          -translate-x-1/2
          rounded-full
          border
          border-white/20
          bg-black/60
          px-3
          py-1
          text-[10px]
          font-medium
          uppercase
          tracking-wider
          text-white/80
          opacity-0
          transition-opacity
          duration-300
          group-hover/image:opacity-100
        "
      >
        Scroll
      </div>
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
    <div className="relative rounded-2xl border border-white/10 bg-[#090909] p-3 md:p-4">
      {/* Browser Top Bar */}
      <div className="flex items-center gap-2 rounded-t-xl border-b border-white/5 bg-[#1b1b1b] px-4 py-3">
        {/* Browser Dots */}
        <span className="h-2.5 w-2.5 rounded-full bg-red-400/70"></span>
        <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/70"></span>
        <span className="h-2.5 w-2.5 rounded-full bg-green-400/70"></span>

        {/* Address Bar */}
        <div className="ml-3 flex-1 rounded-md bg-[#111] px-3 py-1.5">
          <p className="truncate text-[11px] text-gray-500 md:text-xs">
            puntoframe.studio/en
          </p>
        </div>
      </div>

      {/* Website Screenshot */}
      <div
        className="
          h-[240px]
          overflow-y-auto
          overflow-x-hidden
          scroll-smooth
          rounded-b-xl
          bg-white
          sm:h-[270px]
          md:h-[300px]
          lg:h-[320px]
        "
        style={{
          scrollbarWidth: "thin",
          scrollbarColor: "#525252 transparent",
        }}
      >
        <LazyLoadImage
          src={featuredProject.image}
          alt="Punto Frame Studio website"
          effect="blur"
          className="block h-auto w-full"
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
      className="bg-[#141414] px-5 py-20 text-white md:px-10 lg:px-20 xl:px-28"
    >
      {/* ------------------------------------------------
          Section Heading
      ------------------------------------------------ */}

      <div className="mx-auto mb-14 max-w-7xl">
        <p className="mb-4 text-sm uppercase tracking-[0.25em] text-primary">
          Selected Work
        </p>

        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <h2 className="text-4xl font-semibold leading-tight md:text-5xl lg:text-6xl">
            Projects<span className="text-primary">.</span>
          </h2>

          <p className="max-w-md text-sm leading-relaxed text-gray-400 md:text-base">
            A selection of digital experiences, creative projects, and web
            development work.
          </p>
        </div>
      </div>

      {/* ------------------------------------------------
          Featured Punto Frame Project
      ------------------------------------------------ */}

      <div className="mx-auto mb-20 max-w-7xl">
        <div className="grid items-center gap-8 lg:grid-cols-[1.35fr_0.65fr] lg:gap-12">
          {/* Website Preview */}

          <div className="group">
            <WebsitePreview />
          </div>

          {/* Project Information */}

          <div className="lg:pl-4">
            <p className="mb-4 text-xs uppercase tracking-[0.2em] text-primary">
              Featured Project
            </p>

            <h3 className="mb-3 text-3xl font-semibold md:text-4xl">
              {featuredProject.title}
            </h3>

            <p className="mb-6 text-sm text-gray-500">
              {featuredProject.category}
            </p>

            <div className="mb-6 border-l border-primary/40 pl-4">
              <p className="mb-1 text-xs uppercase tracking-wider text-gray-500">
                My Role
              </p>

              <p className="text-sm text-gray-200">
                {featuredProject.role}
              </p>
            </div>

            <p className="mb-7 text-sm leading-7 text-gray-400 md:text-base">
              {featuredProject.description}
            </p>

            {/* Tags */}

            <div className="mb-8 flex flex-wrap gap-2">
              {featuredProject.tags.map((tag) => (
                <span
                  key={tag}
                  className="
                    rounded-full
                    border
                    border-white/10
                    bg-white/[0.02]
                    px-3
                    py-1.5
                    text-xs
                    text-gray-400
                  "
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
                rounded-full
                bg-lime-500
                px-5
                py-3
                text-sm
                font-medium
                text-black
                transition-all
                duration-300
                hover:bg-white
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

      <div className="mx-auto max-w-7xl">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <p className="mb-2 text-xs uppercase tracking-[0.2em] text-gray-500">
              More Work
            </p>

            <h3 className="text-2xl font-semibold md:text-3xl">
              Development Projects
            </h3>
          </div>

          <span className="hidden text-xs text-gray-600 sm:block">
            03 Projects
          </span>
        </div>

        {/* Project Cards */}

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="
                group
                overflow-hidden
                rounded-2xl
                border
                border-white/5
                bg-[#191919]
                transition-all
                duration-500
                hover:border-primary/20
              "
            >
              {/* Scrollable Image */}

              <div className="p-3">
                <ProjectImage
                  src={project.image}
                  alt={project.title}
                />
              </div>

              {/* Content */}

              <div className="px-5 pb-5 pt-2">
                <div className="mb-3 flex items-center justify-between gap-3">
                  <p className="text-xs uppercase tracking-wider text-primary">
                    {project.category}
                  </p>

                  <span className="text-xs text-gray-600">
                    0{index + 1}
                  </span>
                </div>

                <h4 className="mb-3 text-xl font-semibold">
                  {project.title}
                </h4>

                <p className="mb-5 text-sm leading-6 text-gray-500">
                  {project.description}
                </p>

                {/* Links */}

                <div className="flex flex-wrap gap-2">
                  {/* Client */}

                  <a
                    href={project.client}
                    target="_blank"
                    rel="noreferrer"
                    className="
                      inline-flex
                      items-center
                      gap-2
                      rounded-lg
                      bg-white/5
                      px-3
                      py-2
                      text-xs
                      text-gray-400
                      transition-all
                      hover:bg-primary
                      hover:text-black
                    "
                  >
                    <FaGithub />
                    Client
                  </a>

                  {/* Server */}

                  <a
                    href={project.server}
                    target="_blank"
                    rel="noreferrer"
                    className="
                      inline-flex
                      items-center
                      gap-2
                      rounded-lg
                      bg-white/5
                      px-3
                      py-2
                      text-xs
                      text-gray-400
                      transition-all
                      hover:bg-primary
                      hover:text-black
                    "
                  >
                    <FaGithub />
                    Server
                  </a>

                  {/* Live */}

                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="
                      inline-flex
                      items-center
                      gap-2
                      rounded-lg
                      bg-white/5
                      px-3
                      py-2
                      text-xs
                      text-gray-400
                      transition-all
                      hover:bg-primary
                      hover:text-black
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

      <div className="mx-auto mt-20 max-w-7xl border-t border-white/5 pt-10">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="mb-2 text-sm text-gray-500">
              Have an idea in mind?
            </p>

            <h3 className="text-2xl font-semibold md:text-3xl">
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
              rounded-full
              border
              border-white/10
              px-6
              py-3
              text-sm
              text-gray-300
              transition-all
              hover:border-primary
              hover:bg-primary
              hover:text-black
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