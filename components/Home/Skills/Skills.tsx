"use client";

import { skillGroups } from "@/constant/constant";
import { motion, useInView, easeOut } from "framer-motion";
import { useRef } from "react";

interface Skill {
  name: string;
  icon: React.ElementType;
  percentage: number;
}

interface SkillItemProps {
  skill: Skill;
  index: number;
  isInView: boolean;
}

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const titleVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: easeOut,
      },
    },
  };

  const groupVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: easeOut,
      },
    },
  };

  return (
    <div className="text-white py-20 bg-[#0f172a]" id="skills" ref={ref}>
      <motion.h1
        className="text-center text-3xl md:text-4xl xl:text-5xl font-bold leading-tight"
        variants={titleVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        My <span className="text-cyan-300">Skills</span>
      </motion.h1>

      <motion.div
        className="mt-16 w-[90%] sm:w-[85%] lg:w-[75%] mx-auto space-y-12"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {skillGroups.map((group, idx) => (
          <motion.div key={idx} variants={groupVariants}>
            <motion.h2
              className="text-xl font-semibold text-cyan-300 mb-6 border-b border-gray-700 pb-2"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              {group.title}
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {group.skills.map((skill, i) => (
                <SkillItem
                  key={i}
                  skill={skill}
                  index={i}
                  isInView={isInView}
                />
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

const SkillItem = ({ skill, index }: SkillItemProps) => {
  const skillRef = useRef(null);
  const skillInView = useInView(skillRef, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={skillRef}
      initial={{ opacity: 0, x: -20 }}
      animate={skillInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{
        scale: 1.02,
        transition: { duration: 0.2 },
      }}
      className="cursor-pointer"
    >
      <div className="flex items-center justify-between mb-1">
        <div className="flex items-center gap-3 font-medium">
          <motion.span
            className="text-2xl text-cyan-400"
            whileHover={{
              scale: 1.2,
              rotate: 5,
              color: "#22d3ee",
            }}
            transition={{ duration: 0.2 }}
          >
            <skill.icon />
          </motion.span>
          <span>{skill.name}</span>
        </div>
        <motion.span
          className="text-sm text-gray-300"
          initial={{ opacity: 0 }}
          animate={skillInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {skill.percentage}%
        </motion.span>
      </div>
      <div className="w-full bg-gray-800 rounded-full h-2 overflow-hidden">
        <motion.div
          className="bg-gradient-to-r from-cyan-400 to-cyan-300 h-2 rounded-full"
          initial={{ width: 0 }}
          animate={
            skillInView ? { width: `${skill.percentage}%` } : { width: 0 }
          }
          transition={{
            duration: 1.2,
            delay: 0.2,
            ease: "easeOut",
          }}
          whileHover={{
            background: "linear-gradient(to right, #06b6d4, #67e8f9)",
          }}
        />
      </div>
    </motion.div>
  );
};

export default Skills;
