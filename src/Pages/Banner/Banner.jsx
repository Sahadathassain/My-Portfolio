

import { FaDownload } from "react-icons/fa";


import { motion } from "framer-motion";
import Lottie from "react-lottie";
import coding from "../../assets/coding.json";
import { TypeAnimation } from "react-type-animation";


const Banner = () => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: coding,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice",
        },
    };
    return (
        <div className="parent min-h-[90vh] flex flex-col-reverse lg:flex-row items-center justify-between py-20 px-20 bg-[#141414] text-slate-300">
            <motion.div
                initial={{ x: "-100vw" }}
                animate={{ x: 0 }}
                transition={{ duration: 1 }}
            >
                <h2 className="text-neutral text-xl font-medium text-slate-300">Hello, I am</h2>
                <h1 className="text-4xl font-semibold mb-0 text-white" >Sahadat Hossain</h1>
                <div className="my-4">
                    <TypeAnimation
                        className="text-2xl text-lime-500 font-bold"
                        cursor={true}
                        sequence={[
                            "Mern-stack Developer",
                            2000,
                            " React Developer",
                            2000,
                            "Front-end Developer",
                            2000,
                        ]}
                        wrapper="div"
                        repeat={Infinity}
                    />
                </div>
                <p className="text-neutral max-w-xl mb-6 font-medium">
                I am a Computer Science Engineering student with a strong interest in web development, specializing in MERN stack technologies. I have a solid foundation in HTML, CSS, and JavaScript, and I build responsive, user-friendly web applications. I have demonstrated leadership and community engagement as a Campus Hero Programming Hero, ICT Olympiad Bangladesh Campus Ambassador, and Bangladesh Scouts member. Currently, I serve as Deputy Finance Secretary at Tilpotro Foundation, contributing to financial management and organizational operations.
                </p>

                <div className="flex items-center">
                    <a
                        href="https://drive.google.com/file/d/1waAYfgmh08082HhmbwX5SZEii2s4dcNm/view?usp=drive_link"
                        target="blank"
                    >
                        <button className="bg-lime-500 hover:bg-green-500 text-white font-bold py-2 px-4 rounded flex items-center">
                            <span className="mr-2">
                                <FaDownload />
                            </span>
                            <span>My Resume</span>
                        </button>

                    </a>

                </div>
               
            </motion.div>
            <motion.div
                className="w-full md:w-1/2"
                initial={{ x: "100vw" }}
                animate={{ x: 0 }}
                transition={{ duration: 1 }}
            >
                <Lottie options={defaultOptions}  height="90%" width="90%" />
            </motion.div>
        </div>
    );
};

export default Banner;
