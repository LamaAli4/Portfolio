"use client";

import Image from "next/image";
import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Team Work Platform",
    description:
      "freelance Website for provider built with Next.js and React Components.",
    image: "/images/p1.jpg",
    url: "https://www.team-work.co/",
    tags: "Dashboard , Freelance, Next.js , React Components ",
  },
  
  {
    title: "Personal Portfolio",
    description: "Responsive portfolio built using Next.js and Tailwind CSS.",
    image: "/images/p6.jpg",
    url: "https://portfolio-khaki-psi-12.vercel.app/",
    tags: "Next.js , React Component , Tailwind , Portfolio",
  },

  {
    title: "Simple Blog Homepage",
    description:
      "A sleek and modern blog homepage built with Next.js 15, Tailwind CSS v4, Shadcn UI, and motion.dev for smooth animations.",
    image: "/images/blog.png",
    url: "https://blog-project-ten-theta.vercel.app/",
    tags: "Next.js , Tailwind CSS , Shadcn UI , Motion.dev , Dark/Light Theme",
  },

  {
    title: "Contracts Platform",
    description: "Contract web platform using React for frontend.",
    image: "/images/p5.jpg",
    url: "#",
    tags: "React",
  },
  {
    title: "Crop Management App",
    description: "Frontend dashboard for managing crop data.",
    image: "/images/p7.png",
    url: "#",
    tags: "React , Dashboard",
  },
  {
    title: "Book Library",
    description: "Simple HTML/CSS/JS library site.",
    image: "/images/p3.jpg",
    url: "https://book-library-nu-ebon.vercel.app/",
    tags: "HTML , CSS , JavaScript",
  },
  {
    title: "Job Portal",
    description: "Job listings UI built with React.",
    image: "/images/p4.jpg",
    url: "https://jobs-application-bay.vercel.app/",
    tags: "React , Jobs",
  },
];

const Projects = () => {
  return (
    <div className="pt-16 pb-16" id="projects">
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center text-2xl md:text-4xl xl:text-5xl font-bold text-white"
      >
        A small selection of recent <br />
        <span className="text-cyan-300">projects</span>
      </motion.h1>

      <div className="w-[70%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 mt-16">
        {projects.map((project, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.2 }}
          >
            <Image
              src={project.image}
              alt={project.title}
              width={800}
              height={600}
              className="rounded-lg"
            />
            <h1 className="mt-4 text-xl sm:text-2xl font-semibold text-white flex items-center justify-between">
              {project.title}
              {project.url !== "#" && (
                <a href={project.url} target="_blank" rel="noopener noreferrer">
                  <FaExternalLinkAlt className="ml-2 text-cyan-300 w-5 h-5" />
                </a>
              )}
            </h1>
            <p className="pt-2 font-medium text-white/80">{project.tags}</p>
            <p className="pt-1 text-white/60 text-sm">{project.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
