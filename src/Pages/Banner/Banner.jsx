import { FaDownload } from "react-icons/fa";
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import coding from "../../assets/coding.json";
import { TypeAnimation } from "react-type-animation";

const Banner = () => {
    return (
        <section
            id="home"
            className="
                min-h-[90vh]
                flex
                items-center
                bg-[#141414]
                text-slate-300
                px-6
                md:px-12
                lg:px-20
                xl:px-28
                py-16
            "
        >
            <div className="max-w-6xl w-full mx-auto">

                <div className="grid lg:grid-cols-2 items-center gap-12 lg:gap-20">

                    {/* =================================
                        LEFT
                    ================================= */}

                    <motion.div
                        initial={{ opacity: 0, y: 25 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 0.8,
                            ease: "easeOut",
                        }}
                    >

                        {/* Small Intro */}

                        <p className="text-sm text-gray-500 mb-5">
                            Hello, I&apos;m
                        </p>

                        {/* NAME */}

                        <h1
                            className="
                                text-5xl
                                sm:text-6xl
                                md:text-6xl
                                lg:text-[64px]
                                font-medium
                                tracking-[-0.03em]
                                leading-none
                                text-white
                            "
                        >
                            Sahadat Hossain
                        </h1>

                        {/* Minimal Line */}

                        <div className="w-12 h-[2px] bg-lime-500 mt-6 mb-7"></div>

                        {/* ROLE */}

                        <div className="min-h-[32px]">
                            <TypeAnimation
                                className="
                                    text-lg
                                    md:text-xl
                                    text-gray-300
                                    font-normal
                                "
                                sequence={[
                                

                                    "Creative Project Coordinator",
                                    2400,

                                    "Front-end Developer",
                                    2400,
                                ]}
                                wrapper="div"
                                repeat={Infinity}
                                cursor
                            />
                        </div>

                        {/* DESCRIPTION */}

                        <p
                            className="
                                max-w-lg
                                mt-6
                                text-sm
                                md:text-base
                                leading-7
                                text-gray-500
                            "
                        >
                            I work across creative projects, digital design,
                            social media, and front-end development to turn
                            ideas into thoughtful digital experiences.
                        </p>

                        {/* CURRENT ROLE */}

                        <p className="mt-5 text-xs text-gray-600">
                            Currently with{" "}
                            <span className="text-gray-400">
                                Punto Frame Studio
                            </span>
                        </p>

                        {/* ACTIONS */}

                        <div className="flex items-center gap-6 mt-8">

                            <a
                                href="https://drive.google.com/file/d/1VTSVFWpaiqeuJumUcMV1Wyx2HLl3za5b/view?usp=sharing"
                                target="_blank"
                                rel="noreferrer"
                                className="
                                    inline-flex
                                    items-center
                                    gap-2
                                    bg-lime-500
                                    hover:bg-lime-400
                                    text-black
                                    text-sm
                                    font-medium
                                    px-5
                                    py-2.5
                                    rounded-full
                                    transition-all
                                    duration-300
                                "
                            >
                                <FaDownload className="text-xs" />
                                Resume
                            </a>

                            <a
                                href="#projects"
                                className="
                                    text-sm
                                    text-gray-500
                                    hover:text-lime-500
                                    transition-colors
                                "
                            >
                                View work →
                            </a>

                        </div>

                    </motion.div>


                    {/* =================================
                        RIGHT — LOTTIE
                    ================================= */}

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{
                            duration: 1,
                            delay: 0.15,
                            ease: "easeOut",
                        }}
                        className="
                            flex
                            justify-center
                            lg:justify-end
                        "
                    >

                        <div className="w-full max-w-[400px]">

                            <Lottie
                                animationData={coding}
                                loop={true}
                            />

                        </div>

                    </motion.div>

                </div>

                {/* =================================
                    BOTTOM
                ================================= */}

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{
                        duration: 1,
                        delay: 0.8,
                    }}
                    className="
                        mt-16
                        pt-5
                        border-t
                        border-white/5
                        flex
                        justify-between
                        items-center
                    "
                >

                    <span className="text-[10px] uppercase tracking-[0.2em] text-gray-700">
                        Digital · Creative · Web
                    </span>

                    <span className="text-[10px] text-gray-700">
                        01
                    </span>

                </motion.div>

            </div>
        </section>
    );
};

export default Banner;