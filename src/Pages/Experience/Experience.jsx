import { motion } from "framer-motion";

const experiences = [
  {
    year: "2026 - Present",
    role: "Digital & Creative Project Coordinator",
    org: "Punto Frame Studio",
    desc:"Working across social media, content, and creative project development. I manage social media activities, support content planning, and contribute to developing new project ideas. I work closely with the founder on creative planning, design improvements, and initiatives that support the studio’s growth.",
    color: "from-purple-500/30 to-transparent",
    border: "border-lime-500",
  },{
    year: "2026 - Present",
    role: "Deputy Finance Secretary",
    org: "Tilpotro Foundation",
    desc: "Managing financial operations and contributing to organizational growth through strategic planning.",
    color: "from-purple-500/30 to-transparent",
    border: "border-lime-500",
  },
   {
    year: "2024-2025",
    role: "Campus Hero",
    org: "Programming Hero",
    desc: "Programming Hero Campus Hero program helps students grow as leaders by promoting programming education. Participants gain exclusive training, certifications, and networking opportunities. It’s a platform to enhance technical and communication skills. Perfect for those passionate about tech and community impact!",
    color: "from-cyan-400/30 to-transparent",
    border: "border-lime-500",
  },
  {
    year: "2024",
    role: "Campus Ambassador",
    org: "ICT Olympiad Bangladesh",
    desc: "Proud ICT Olympiad Bangladesh Campus Ambassador. Eager to promote tech excellence, foster competitions, and inspire fellow students. Dedicated to nurturing a passion for ICT and guiding future tech leaders. Let's connect and amplify the digital future together",
    color: "from-orange-400/30 to-transparent",
    border: "border-lime-500",
  },
  {
  year: "2021 - 2023",
  role: "Executive Member",
  org: "Victory of Humanity Organization (Central Committee)",
  desc: "Serving as an Executive Member of the Central Committee, contributing to strategic planning, organizing large-scale humanitarian initiatives, and coordinating volunteer activities to maximize community impact.",
  color: "from-pink-400/30 to-transparent",
  border: "border-lime-500",
},
 

];

const Experience = () => {
      
  return (
    
    <div className="py-20 px-6 md:px-20 bg-[#0F0F0F] text-white">

      {/* Container */}
      <div className=" rounded-[40px] p-10">

        <motion.div
        className="mb-12"
        initial={{ y: -200, opacity: 0 }}
        animate={{
          y: 0,
          opacity: 1,
          transition: { duration: 1, type: "spring" },
        }}
      >
        <h1 className="text-4xl font-semibold text-center">
          MY JOURNEY
        </h1>
      </motion.div>

        
       

        {/* Cards */}
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className={`rounded-2xl border ${exp.border} bg-gradient-to-r ${exp.color} p-[1px]`}
              whileHover={{ scale: 1.02 }}
            >
              <div className="bg-[#111] rounded-2xl p-6 flex flex-col md:flex-row justify-between gap-6">

                {/* LEFT */}
                <div>
                  <p className="text-gray-400 text-sm">{exp.year}</p>
                  <h2 className="text-2xl font-semibold">{exp.role}</h2>
                  <p className="text-gray-500">{exp.org}</p>
                </div>

                {/* RIGHT */}
                <div className="max-w-xl text-gray-300">
                  {exp.desc}
                </div>

              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Experience;