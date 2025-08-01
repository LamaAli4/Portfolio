"use client";
import React from "react";
import ServiceCard from "./ServiceCard";
import { motion } from "framer-motion";

const Services = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center text-3xl md:text-4xl xl:text-5xl font-bold text-white leading-tight mb-16"
        >
          Collaborate with teams <br />
          and clients to craft <br />
          modern digital products
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 xl:gap-12"
        >
          <ServiceCard
            icon="/images/s1.png"
            name="Frontend Development"
            description="Building responsive React/Next.js interfaces with performance and accessibility in mind."
          />
          <ServiceCard
            icon="/images/s2.png"
            name="API Integration"
            description="Connecting frontend apps to RESTful APIs with secure, token-based authentication."
          />
          <ServiceCard
            icon="/images/s3.png"
            name="Admin Dashboards"
            description="Developing dashboards with full CRUD features, modals, filters, and dynamic views."
          />
          <ServiceCard
            icon="/images/s4.png"
            name="UI/UX Design"
            description="Implementing pixel-perfect UIs from Figma with RTL/locale support using next-intl."
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
