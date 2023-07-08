
import { motion } from "framer-motion";
import img from "../../assets/Untitled design.png"
import { FaDownload } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";


const About = () => {
  return (
    <div className="parent   py-20 px-20 bg-[#141414] text-slate-300">
      <div className="">
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ x: -200, opacity: 0 }}
            animate={{
              x: 0,
              opacity: 1,
              transition: { duration: 1, delay: 1.25 },
            }}
          >
            <img src={img} alt="Sahadat hossain" className="mx-auto h-96 w-96 md:rounded-full rounded-full my-auto" />
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
            <h1 className="text-4xl font-semibold mb-0">Sahadat Hassain</h1>
            <div className="my-2">
              <TypeAnimation
                className="text-2xl text-lime-500 font-bold"
                cursor={true}
                sequence={[
                  " Mern-stack Developer",
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
              As a MERN stack developer, I am committed to building high-quality
              web applications that meet the needs of my clients. With years of
              experience in full-stack web development, I specialize in using
              React.js, Next js,  MongoDB, Express.js, and Node.js to
              create scalable and robust web applications.
              {/* Dedicated Front-end developer. Capable to solve working problems.
              Passionate about learning & development to reach the target. Eager
              to tackle more complex problems and continue to find ways to
              maximize user efficiency. */}
            </p>
            <br />
            <p className="text-neutral font-medium">
              My passion for solving complex problems and creating innovative
              solutions drives me to stay up-to-date with the latest
              technologies and trends in the industry.
              {/* My next mission is how to become a Mern stack Developer. I would
              love to build some Giant Website which will shine myself. */}
            </p>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-4 mt-4">
              <h2 className="font-medium">
                <span className="mr-4 text-lime-500">Name: </span>Sahadat Hassain
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
                <span className="mr-4 text-lime-500">Address: </span>comilla , Bangladesh
              </h2>
              <a
                        href="https://drive.google.com/file/d/16beLkptqplJU-CVVd67APOpmkCvDUIsX/view"
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

     
    </div>
  );
};

export default About;
