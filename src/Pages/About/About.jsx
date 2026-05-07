
import { motion } from "framer-motion";
// import img from "../../assets/Untitled design.png"
import { FaDownload } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";



const About = () => {
  return (
    <div className="parent   py-20 px-20 bg-[#141414] text-slate-300">
      
        <motion.div
        
          className="mb-12"
          initial={{ y: -200, opacity: 0 }}
          animate={{
            y: 0,
            opacity: 1,
            transition: { duration: 1, type: "spring" },
          }}
        >
         
          <h1 className="text-4xl font-semibold drop-shadow-md text-center">
            About <span className="text-primary">Me</span>
          </h1>
         
        </motion.div>
        <div className="grid grid-cols-1  md:grid-cols-2 gap-8">
          <motion.div
            initial={{ x: -200, opacity: 0 }}
            animate={{
              x: 0,
              opacity: 1,
              transition: { duration: 1, delay: 1.25 },
            }}
          >
            <img src="/src/assets/file_00000000150871fa97278f9f3d8117cf_imgupscaler.ai_V1(Fast)_2K.png" alt="Sahadat hossain" className="mx-auto  h-96 w-96 md:rounded-full rounded-full my-auto" />
          </motion.div>
          <motion.div
            className=""
            initial={{ x: 200, opacity: 0 }}
            animate={{
              x: 0,
              opacity: 1,
              transition: { duration: 1, delay: 1.25 },
            }}
          >
            <h1 className="text-4xl font-semibold mb-0">Sahadat Hossain</h1>
            <div className="my-2">
              <TypeAnimation
                className="text-2xl text-lime-500 font-bold"
                cursor={true}
                sequence={[
                  " I Am Social Worker",
                  2000,
                  " React Developer",
                  2000,
                  " Front-end Developer",
                  2000,
                ]}
                wrapper="div"
                repeat={Infinity}
              />
            </div>
            <p className="text-neutral font-medium">
            I am a Computer Science Engineering student with a strong interest in web development, specializing in MERN stack technologies. I have a solid foundation in HTML, CSS, and JavaScript, and I build responsive, user-friendly web applications
              
            </p>
            <br />
            <p className="text-neutral font-medium">
            I have demonstrated leadership and community engagement as a Campus Hero Programming Hero, ICT Olympiad Bangladesh Campus Ambassador, and Bangladesh Scouts member. Currently, I serve as Deputy Finance Secretary at Tilpotro Foundation, contributing to financial management and organizational operations.
              
            </p>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-4 mt-4">
              <h2 className="font-medium">
                <span className="mr-4 text-lime-500">Name: </span>Sahadat Hossain
              </h2>
              <h2 className="font-medium">
                <span className="mr-4 text-lime-500">Phone: </span>+880
                1859037929
              </h2>
              <h2 className="font-medium">
                <span className="mr-4 text-lime-500">Email: </span>
                sahadathossain164109@gmail.com
              </h2>
              <h2 className="font-medium">
                <span className="mr-4 text-lime-500">Address: </span>Comilla , Bangladesh
              </h2>
              <a
                        href="https://drive.google.com/file/d/1waAYfgmh08082HhmbwX5SZEii2s4dcNm/view?usp=sharing"
                        target="blank"
                    >
                        <button className="bg-lime-500 hover:bg-green-500 text-white font-bold py-2 px-4 rounded flex items-center">
                            <span className="mr-2">
                                <FaDownload />
                            </span>
                            <span>See Resume</span>
                        </button>

                    </a>
            </div>
          </motion.div>
        
      </div>

     
    </div>
  );
};

export default About;
