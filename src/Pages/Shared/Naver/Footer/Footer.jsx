
import { FaFacebook, FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

const Footer = () => {
  const year = new Date();

  return (
    <>
      <footer
        className="w-full text-center p-6"
        style={{ backgroundColor: "#313131" }}
      >
        <div className="flex items-center justify-center mb-6">
          <a
            className="inline-block mx-2"
            href="https://www.facebook.com/Sahadathossian02/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook className="text-2xl text-blue-600" />
          </a>
          <a
            className="inline-block mx-2"
            href="https://www.linkedin.com/in/sahadat-hossain-81a329279/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="text-2xl text-blue-400" />
          </a>
          <a
            className="inline-block mx-2"
            href="https://github.com/Sahadathassain?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="text-2xl text-black" />
          </a>
          <a
            className="inline-block mx-2"
            href="https://www.instagram.com/sahadathossain16/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram className="text-2xl text-pink-500" />
          </a>
        </div>
       

        <div className="w-full h-[2px] bg-gray-600"></div>
        <div className="flex flex-col md:flex-row items-center text-white justify-between mt-4">
          <p>&copy; Copyright All Rights Reserved {year.getFullYear()}</p>
          <p>
            Developed by{" "}
            <a 
              href="https://www.linkedin.com/in/sahadat-hossain-81a329279/"
              className="text-primary text-lime-500 hover:underline"
              target="blank"
            >
            Sahadat Hossain
            </a>
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
