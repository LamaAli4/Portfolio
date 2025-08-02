"use client";
import React from "react";
import { motion, easeOut } from "framer-motion";


const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: easeOut },
  },
};

const Footer = () => {
  return (
    <motion.div
      className="bg-blue-900/50 p-5"
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <h1 className="text-lg text-white/70 text-center">
        LAMA - Personal Portfolio Website
      </h1>
    </motion.div>
  );
};

export default Footer;
