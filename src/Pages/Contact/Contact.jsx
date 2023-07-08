import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { FaUserAlt, FaPhoneAlt, FaLocationArrow, FaLinkedin, FaGithubSquare, FaFacebookSquare, FaInstagramSquare } from "react-icons/fa";
import { MdEmail, MdSend } from "react-icons/md";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { useInView } from "react-intersection-observer";
import emailjs from "emailjs-com";
import "./Contact.css";

const Contact = () => {
  const navigate = useNavigate();
  const form = useRef();
  const [ref, inView] = useInView({ threshold: 0.3, triggerOnce: true });
  const [viewDiv, setViewDiv] = useState(false);

  useEffect(() => {
    if (inView) {
      setViewDiv(true);
    } else {
      setViewDiv(false);
    }
  }, [inView]);

  const handleSend = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "itsproali_portfolio",
        "itsproali_portfolio",
        form.current,
        "H-ispiDvwdbG_76iq"
      )
      .then(
        (result) => {
          console.log(result.text);
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your Message has been sent",
            showConfirmButton: false,
            timer: 1500,
          });
          navigate("/");
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <div className="parent text-white py-20 px-20 bg-[#141414] ">
      <motion.div
        initial="hidden"
        animate={viewDiv ? "visible" : "hidden"}
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1 }
        }}
      >
        <h3 className="text-neutral text-center">Feel Free To Contact Me</h3>
        <h1 className="text-4xl font-semibold drop-shadow-md text-center">
          Get In <span className="text-lime-500">Touch</span>
        </h1>
      </motion.div>
      <div className="grid grid-cols-1  md:grid-cols-2 gap-10 mt-8">
        <motion.div
          className=""
          ref={ref}
          initial={{ y: 50, opacity: 0 }}
          animate={viewDiv ? "visible" : "hidden"}
          variants={{
            hidden: { y: 50, opacity: 0 },
            visible: { y: 0, opacity: 1 }
          }}
        >
          <h2 className="text-2xl font-medium">Contact Me</h2>
          <form ref={form} onSubmit={handleSend}>
            <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-6">
              <input
                className="input-field"
                type="text"
                name="name"
                id="name"
                placeholder="Name"
                required
              />
              <input
                className="input-field"
                type="email"
                name="email"
                id="email"
                placeholder="Email"
                required
              />
            </div>
            <input
              className="input-field"
              type="text"
              name="subject"
              id="subject"
              placeholder="Subject"
              required
            />
            <textarea
              className="input-field"
              name="message"
              id="message"
              cols="30"
              rows="5"
              placeholder="Message"
              required
            ></textarea>
            <button
              type="submit"
              value="Send Message"
              className="bg-lime-500 hover:bg-green-500 text-white font-bold py-2 px-4 rounded flex items-center"
            >
              <span>Send</span>
              <span><MdSend/></span>
            </button>
          </form>
        </motion.div>
        <motion.div
          className=""
          initial={{ y: 50, opacity: 0 }}
          animate={viewDiv ? "visible" : "hidden"}
          variants={{
            hidden: { y: 50, opacity: 0 },
            visible: { y: 0, opacity: 1 }
          }}
        >
          <h2 className="text-2xl font-medium">Contact Info</h2>
          <div className="flex items-center my-6">
            <FaUserAlt className="text-2xl mr-8 hover:text-lime-500 cursor-pointer duration-300"></FaUserAlt>
            <h3 className="font-medium text-lime-500">Sahadat Hossain</h3>
          </div>
          <div className="flex items-center my-6">
            <FaPhoneAlt className="text-2xl mr-8 hover:text-lime-500 cursor-pointer duration-300"></FaPhoneAlt>
            <h3 className="font-medium text-lime-500">+88 01859037929</h3>
          </div>
          <div className="flex items-center my-6">
            <MdEmail className="text-3xl mr-8 hover:text-lime-500 cursor-pointer duration-300"></MdEmail>
            <h3 className="font-medium text-lime-500">sahadathossain164109@gmail.com</h3>
          </div>
          <div className="flex items-center my-6">
            <FaLocationArrow className="text-2xl mr-8 hover:text-lime-500 cursor-pointer duration-300"></FaLocationArrow>
            <h3 className="font-medium text-lime-500">
               Comilla, Dhaka, Bangladesh - 3570
            </h3>
          </div>
          <div className="mt-8 flex items-center">
            <h3 className="text-xl text-neutral">Social</h3>
            <div className="bg-gray-400 w-10 h-[2px] mx-4"></div>
            <a
              href="https://www.linkedin.com/in/sahadat-hossain-81a329279/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-3xl text-neutral hover:text-lime-500 hover:-translate-y-1.5 shadow-lg mx-1 duration-300"
            >
              <FaLinkedin></FaLinkedin>
            </a>
            <a
              href="https://github.com/Sahadathassain?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="text-3xl text-neutral hover:text-lime-500 hover:-translate-y-1.5 shadow-lg mx-1 duration-300"
            >
              <FaGithubSquare></FaGithubSquare>
            </a>
            <a
              href="https://www.facebook.com/Sahadathossian02/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-3xl text-neutral hover:text-lime-500 hover:-translate-y-1.5 shadow-lg mx-1 duration-300"
            >
              <FaFacebookSquare></FaFacebookSquare>
            </a>
            <a
              href="https://www.instagram.com/sahadathossain16/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-3xl text-neutral hover:text-lime-500 hover:-translate-y-1.5 shadow-lg mx-1 duration-300"
            >
              <FaInstagramSquare></FaInstagramSquare>
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
