"use client";

import { FaJs, FaReact, FaNodeJs, FaJava } from "react-icons/fa";

import { TbBrandCpp } from "react-icons/tb";

import { SiTailwindcss, SiNextdotjs, SiMysql } from "react-icons/si";

const about = {
  title: "About me",
  description:
    "I'm Shadipto Pranto, currently in my 5th semester at AIUB, pursuing a degree in Computer Science and Engineering (CSE). I'm passionate about software development and have experience working with languages like C++, Java, and SQL. I also specialize in web development, using tools such as React, Next.js, and Tailwind CSS. I'm an active participant in competitive programming, which helps me sharpen my problem-solving skills. I'm always eager to learn new technologies and stay up-to-date with the latest trends in the field.",
  info: [
    {
      fieldname: "Name",
      fieldvalue: "Shadipto Pranto",
    },
    {
      fieldname: "Phone",
      fieldvalue: "(+880) 163 270 8304",
    },
    {
      fieldname: "Experience",
      fieldvalue: "1+ Year",
    },
    {
      fieldname: "Email",
      fieldvalue: "shadipto.pranto@gmail.com",
    },
    {
      fieldname: "Nationality",
      fieldvalue: "Bangladeshi",
    },
    {
      fieldname: "Freelance",
      fieldvalue: "Available",
    },
    {
      fieldname: "Language",
      fieldvalue: "English, Bangla",
    },
  ],
};

// experience data
const experience = {
  icon: "/assets/resume/badge.svg",
  title: "My experience",
  description:
    "I'm a web and software developer with experience in C++, Java, UI/UX, and modern web technologies, building efficient and scalable solutions.",
  items: [
    {
      company: "Freelance",
      position: "Web Developer",
      duration: "From 2025",
    },
    {
      company: "Freelance",
      position: "UI/UX Designer",
      duration: "From 2025",
    },
    {
      company: "Freelance",
      position: "Full Stack Developer",
      duration: "From 2024",
    },
    {
      company: "Freelance",
      position: "Front-End Development",
      duration: "From 2024",
    },
    {
      company: "Academic Projects",
      position: "C++ Developer",
      duration: "From 2023",
    },
    {
      company: "Academic Projects",
      position: "Java Developer",
      duration: "From 2023",
    },
  ],
};

// education data
const education = {
  icon: "/assets/resume/cap.svg",
  title: "My education",
  description:
    "I'm currently in my 2nd year of a Computer Science and Engineering degree, building my skills in software development and problem-solving.",
  items: [
    {
      institution: "American International University-Bangladesh",
      degree: "Computer Science and Engineering",
      duration: "2023 - present",
    },
    {
      institution: "BIAM Laboratory School & College",
      degree: "Higher Secondary Certificate (12th)",
      duration: "2022",
    },
    {
      institution: "CyberTech",
      degree: "Microsoft Office Application Degree",
      duration: "2020",
    },
    {
      institution: "BIAM Laboratory School & College",
      degree: "Senior School Certificate (10th)",
      duration: "2020",
    },
  ],
};

// skills data
const skills = {
  title: "My skills",
  description:
    "I specialize in web development, UI/UX design, and software engineering. I have experience in C++, Java, and other programming languages, and I'm continuously learning new technologies to stay updated and deliver optimized, scalable solutions.",
  skilllist: [
    {
      icon: <TbBrandCpp />,
      name: "c++",
    },
    {
      icon: <FaJava />,
      name: "java",
    },
    {
      icon: <FaJs />,
      name: "javascript",
    },
    {
      icon: <FaReact />,
      name: "react.js",
    },
    {
      icon: <SiNextdotjs />,
      name: "next.js",
    },
    {
      icon: <SiTailwindcss />,
      name: "tailwind.css",
    },
    {
      icon: <FaNodeJs />,
      name: "node.js",
    },
    {
      icon: <SiMysql />,
      name: "MySql",
    },
  ],
};

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
  TooltipProvider,
} from "@/components/ui/tooltip";

import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0 zoom-container"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About me</TabsTrigger>
          </TabsList>
          {/* content */}

          <div className="min-h-[70vh] w-full">
            {/* experience */}

            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center text-justify xl:text-left xl:text-justify">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {experience.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.position}
                          </h3>
                          <div className="flex items-center gap-3">
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.company}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            {/* education */}

            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center text-justify xl:text-left xl:text-justify">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {education.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.degree}
                          </h3>
                          <div className="flex items-center gap-3">
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.institution}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            {/* skills */}

            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center text-justify xl:text-left xl:text-justify">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {skills.description}
                  </p>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                  {skills.skilllist.map((skill, index) => {
                    return (
                      <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                              <div className="text-6xl group-hover:text-accent transition-all duration-300">
                                {skill.icon}
                              </div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="capitalize">{skill.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
            {/* about */}

            <TabsContent
              value="about"
              className="w-full text-center text-justify xl:text-left xl:text-justify"
            >
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {about.description}
                </p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                  {about.info.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className="flex items-center justify-center xl:justify-start gap-4"
                      >
                        <span className="text-white/60">{item.fieldname}</span>
                        <span className="text-xl">{item.fieldvalue}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
