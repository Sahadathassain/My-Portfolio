import { FaGithub, FaLink } from "react-icons/fa";
import img1 from "../../assets/Bangladeshi-chef.png";
import img2 from "../../assets/Educational-and-Learning.png";
import img3 from "../../assets/Vite-React.png";

import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const Projects = () => {
  return (
    <div className="px-5 lg:px-28 bg-[#141414] text-white py-10">
      <div className="my-10">
        <h1 className="text-4xl font-semibold drop-shadow-md text-center">
          My <span className="text-primary">Projects</span>
        </h1>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="card card-compact w-full pb-4 rounded-md bg-gray-700 shadow-xl">
          <figure>
            <div className="h-72 w-full overflow-scroll overflow-x-hidden">
              <LazyLoadImage src={img1} alt="Bangladeshi Chef" effect="blur" className="" />
            </div>
          </figure>
          <div className="card-body px-3 py-2">
            <h2 className="card-title text-xl font-bold my-3">Bangladeshi Chef</h2>
            <div className="flex space-x-3 items-center">
              <FaGithub className="w-8 h-7" />
              <a
                className="link"
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/Sahadathassain/assignment-recipe-chef-client"
              >
                Client
              </a>
              <FaGithub className="w-8 h-7" />
              <a
                className="link"
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/Sahadathassain/assignment-recipe-chef-server"
              >
                Server
              </a>
              <FaLink className="w-8 h-7" />
              <a
                className="link"
                target="_blank"
                rel="noopener noreferrer"
                href="https://assignment-recipe-chef.web.app/"
              >
                Live
              </a>
            </div>
          </div>
        </div>
        <div className="card card-compact w-full pb-4 rounded-md bg-gray-700 shadow-xl">
          <figure>
            <div className="h-72 w-full overflow-scroll overflow-x-hidden">
              <LazyLoadImage
                src={img2}
                alt="Educational and Learning"
                effect="blur"
                className=""
              />
            </div>
          </figure>
          <div className="card-body px-3 py-2">
            <h2 className="card-title text-xl font-bold my-3">Educational and Learning</h2>
            <div className="flex space-x-3 items-center">
              <FaGithub className="w-8 h-7" />
              <a
                className="link"
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/Sahadathassain/educational-and-Learning-clint"
              >
                Client
              </a>
              <FaGithub className="w-8 h-7" />
              <a
                className="link"
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/Sahadathassain/Educational-and-Learning-server"
              >
                Server
              </a>
              <FaLink className="w-8 h-7" />
              <a
                className="link"
                target="_blank"
                rel="noopener noreferrer"
                href="https://educational-and-learning.web.app/"
              >
                Live
              </a>
            </div>
          </div>
        </div>
        <div className="card card-compact w-full pb-4 rounded-md bg-gray-700 shadow-xl">
          <figure>
            <div className="h-72 w-full overflow-scroll overflow-x-hidden">
              <LazyLoadImage src={img3} alt="Vite React" effect="blur" className="" />
            </div>
          </figure>
          <div className="card-body px-3 py-2">
            <h2 className="card-title text-xl font-bold my-3">Sports Academy</h2>
            <div className="flex space-x-3 items-center">
              <FaGithub className="w-8 h-7" />
              <a
                className="link"
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/Sahadathassain/Sports-academy-client"
              >
                Client
              </a>
              <FaGithub className="w-8 h-7" />
              <a
                className="link"
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/Sahadathassain/Sports-academy-server"
              >
                Server
              </a>
              <FaLink className="w-8 h-7" />
              <a
                className="link font-bold"
                href="https://sports-academy-fc9b3.web.app/"
              >
                Live
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
