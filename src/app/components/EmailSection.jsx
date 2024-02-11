'use client'
import React, { useState } from "react";
import emailjs from "emailjs-com";
import GithubIcon from "../../../public/github-icon.svg";
import LinkedinIcon from "../../../public/linkedin-icon.svg";
import Link from "next/link";
import Image from "next/image";
import { animate, easeIn, motion } from "framer-motion"

const EmailSection = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        e.target,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
      );

      console.log("Message sent successfully.");
      setEmailSubmitted(true);
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };

  return (
    <section
      id="contact"
      className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-20 relative"
    >
      <div className="animate-pulse rounded-full h-60 w-60 z-0 blur-3xl absolute transform translate-x-1/5">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path fill="#8A3FFC" d="M63.7,-23.7C69.4,-3.3,51.7,21.7,29.7,36.6C7.8,51.6,-18.4,56.4,-32.7,45.8C-47,35.2,-49.5,9.2,-42,-13.6C-34.6,-36.4,-17.3,-56,5.9,-57.9C29,-59.8,58.1,-44.1,63.7,-23.7Z" transform="translate(100 100)" />
        </svg>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, x: [-500, 0] }}
        viewport={{ once: true, amount: 'all' }}
        transition={{ ease: "anticipate", delay: 0.2, duration: 2, type: 'spring' }}
      >
        <div className="z-10">
          <h5 className="text-xl font-bold text-white my-2">
            Let&apos;s Connect
          </h5>
          <p className="text-[#ADB7BE] mb-4 max-w-md">
            {" "}
            I am actively seeking new professional opportunities and welcome inquiries.
            Whether you have inquiries or wish to connect, please feel free to reach out.
            I endeavor to respond promptly to all correspondence.
          </p>
          <div className="socials flex flex-row gap-2 z-10">
            <Link href="https://github.com/arnab7070">
              <Image src={GithubIcon} alt="Github Icon" />
            </Link>
            <Link href="https://www.linkedin.com/in/arnab7070/">
              <Image src={LinkedinIcon} alt="Linkedin Icon" />
            </Link>
          </div>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, y: [500, 0] }}
        viewport={{ once: true, amount: 'all' }}
        transition={{ delay: 0.2, ease: "anticipate", duration: 1 }}
      >
        {emailSubmitted ? (
          <p className="text-green-500 text-xl mt-2">
            Email sent successfully!
          </p>
        ) : (
          <form className="flex flex-col" onSubmit={handleSubmit}>
            <div className="mb-6">
              <label
                htmlFor="email"
                className="text-white block mb-2 text-sm font-medium"
              >
                Your email
              </label>
              <input
                name="email"
                type="email"
                id="email"
                required
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="yourname@gmail.com"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="subject"
                className="text-white block text-sm mb-2 font-medium"
              >
                Subject
              </label>
              <input
                name="subject"
                type="text"
                id="subject"
                required
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="Enter your subject"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="message"
                className="text-white block text-sm mb-2 font-medium"
              >
                Message
              </label>
              <textarea
                name="message"
                id="message"
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="Let's talk about..."
              />
            </div>
            <button
              type="submit"
              className="bg-primary-500 hover:bg-primary-600 text-white font-medium py-2.5 px-5 rounded-lg w-full"
            >
              Send Message
            </button>
          </form>
        )}
      </motion.div>
    </section>
  );
};

export default EmailSection;
