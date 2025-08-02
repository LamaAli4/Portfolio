"use client";
import emailjs from "emailjs-com";
import "react-toastify/dist/ReactToastify.css";
import React, { useState } from "react";
import { BiEnvelope, BiMap, BiPhone } from "react-icons/bi";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import { motion, easeOut } from "framer-motion";
import { ToastContainer, toast } from "react-toastify";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: easeOut },
  },
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.6, ease: easeOut, delay: 0.2 },
  },
};

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    title: "New Message from Portfolio",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    emailjs
      .send("service_r1jpi9h", "template_7oda0df", form, "JjOU5kLNvmFlOplbY")
      .then(() => {
        toast.success(" Message sent successfully!");
        setForm({
          name: "",
          email: "",
          phone: "",
          message: "",
          title: "New Message from Portfolio",
        });
      })
      .catch((error) => {
        console.error("Failed to send:", error);
        toast.error("Failed to send message");
      });
  };

  return (
    <>
      <ToastContainer
        position="bottom-left"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />

      <motion.div
        className="pt-16 pb-16"
        id="contact"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.div
          className="w-[90%] md:w-[80%] lg:w-[70%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center"
          variants={fadeIn}
        >
          {/* Text Content */}
          <motion.div variants={fadeInUp}>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-200">
              Schedule a call with me to see if I can help
            </h1>
            <p className="text-gray-400 mt-6 text-base sm:text-lg">
              Reach out to me today and let’s discuss how I can help you achieve
              your goals.
            </p>

            <div className="mt-7">
              <div className="flex items-center space-x-3 mb-4">
                <BiPhone className="w-9 h-9 text-cyan-300" />
                <p className="text-xl font-bold text-gray-400">
                  +970-597857788
                </p>
              </div>
              <div className="flex items-center space-x-3 mb-4">
                <BiEnvelope className="w-9 h-9 text-cyan-300" />
                <a
                  href="mailto:lama2015678@gmail.com"
                  className="text-xl font-bold text-gray-400 hover:underline"
                >
                  lama2015678@gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-3 mb-4">
                <BiMap className="w-9 h-9 text-cyan-300" />
                <p className="text-xl font-bold text-gray-400">
                  Gaza, Palestine
                </p>
              </div>
            </div>

            <div className="flex items-center mt-8 space-x-3">
              <a
                href="https://www.facebook.com/lamaemad.ali/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 bg-blue-950/60 rounded-full flex items-center justify-center cursor-pointer hover:bg-blue-800 transition-all duration-300"
              >
                <FaFacebook className="text-white w-6 h-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/lama-emad-ali-8a60942a5/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 bg-blue-950/60 rounded-full flex items-center justify-center cursor-pointer hover:bg-blue-800 transition-all duration-300"
              >
                <FaLinkedin className="text-white w-6 h-6" />
              </a>
              <a
                href="https://github.com/LamaAli4"
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 bg-blue-950/60 rounded-full flex items-center justify-center cursor-pointer hover:bg-blue-800 transition-all duration-300"
              >
                <FaGithub className="text-white w-6 h-6" />
              </a>
            </div>
          </motion.div>

          {/* Form */}
          <motion.form
            className="md:p-10 p-5 bg-[#131332] rounded-lg"
            variants={fadeInUp}
            onSubmit={sendEmail}
          >
            <input
              name="name"
              type="text"
              placeholder="Name"
              value={form.name}
              onChange={handleChange}
              required
              className="px-4 py-3.5 bg-[#363659] text-white outline-none rounded-md w-full placeholder:text-white/70"
            />
            <input
              name="email"
              type="email"
              placeholder="Email Address"
              value={form.email}
              onChange={handleChange}
              required
              className="px-4 py-3.5 mt-6 bg-[#363659] text-white outline-none rounded-md w-full placeholder:text-white/70"
            />
            <input
              name="phone"
              type="text"
              placeholder="Mobile Number"
              value={form.phone}
              onChange={handleChange}
              required
              className="px-4 py-3.5 mt-6 bg-[#363659] text-white outline-none rounded-md w-full placeholder:text-white/70"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              value={form.message}
              onChange={handleChange}
              required
              className="px-4 py-3.5 mt-6 bg-[#363659] text-white outline-none rounded-md w-full placeholder:text-white/70 h-[10rem]"
            />
            <button
              type="submit"
              className="px-12 py-4 mt-8 bg-blue-950 hover:bg-blue-900 transition-all duration-300 cursor-pointer text-white rounded-full"
            >
              Send Message
            </button>
          </motion.form>
        </motion.div>
      </motion.div>
    </>
  );
};

export default Contact;
