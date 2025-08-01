"use client";

import React from "react";
import ResumeCard from "./ResumeCard";
import {
  FaGraduationCap,
  FaKeyboard,
  FaLanguage,
  FaReact,
} from "react-icons/fa";
import { BiBadge } from "react-icons/bi";
import { SiJavascript } from "react-icons/si";
import { motion } from "framer-motion";

const Resume = () => {
  return (
    <div className="pt-20 pb-16">
      <div className="w-[90%] sm:w-[70%] mx-auto grid grid-cols-1 xl:grid-cols-2 gap-10">
        {/* Work Part with Animation */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h1 className="text-3xl sm:text-4xl font-bold text-white">
            My Work <span className="text-cyan-200">Experience</span>
          </h1>
          <div className="mt-10">
            <ResumeCard
              Icon={FaReact}
              role="Frontend Developer (Freelance)"
              date="Mar 2025 – Present"
              description="Developing scalable, responsive web interfaces using React and Next.js. Collaborating via GitHub, integrating APIs, optimizing performance and SEO, and building real-time dashboards with authentication and messaging systems."
            />
            <ResumeCard
              Icon={FaKeyboard}
              role="Data Entry Specialist"
              date="Oct 2023 – Oct 2024"
              description="Maintained 100% accuracy while handling large volumes of sensitive data. Reduced data processing time by optimizing workflows and supported report generation for better decision-making."
            />
          </div>
        </motion.div>

        {/* Education Part with Animation */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
          viewport={{ once: true }}
        >
          <h1 className="text-3xl sm:text-4xl font-bold text-white">
            My <span className="text-cyan-200">Education</span>
          </h1>
          <div className="mt-10">
            <ResumeCard
              Icon={FaGraduationCap}
              role="B.Sc. in Computer Science - Al-Azhar University"
              date="Expected graduated on July 2026"
              description="Pursuing a Bachelor's degree with strong focus on frontend technologies and software development."
            />
            <ResumeCard
              Icon={SiJavascript}
              role="Web Development Prep – Gaza Sky Geeks"
              date="2024"
              description="60-hour program covering HTML, CSS, JavaScript fundamentals, version control, and soft skills."
            />
            <ResumeCard
              Icon={SiJavascript}
              role="React & Next.js Course – Gaza Sky Geeks"
              date="2025"
              description="90-hour advanced training covering real-world projects using React, Next.js, TypeScript, and Git."
            />
            <ResumeCard
              Icon={BiBadge}
              role="FrontEnd Training – Gaza Sky Geeks"
              date="2025"
              description="Completed advanced frontend training covering pure JavaScript, modern React development, Git version control, and hands-on projects simulating real-world workflows."
            />
            <ResumeCard
              Icon={FaLanguage}
              role="EF SET English Certificate – C2 Level"
              date="2025"
              description="Certified C2 Proficient by EF Standard English Test, demonstrating advanced English communication skills."
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Resume;
