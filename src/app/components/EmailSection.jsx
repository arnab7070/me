'use client'
import React, { useState } from "react";
import emailjs from "emailjs-com";
import GithubIcon from "../../../public/github-icon.svg";
import LinkedinIcon from "../../../public/linkedin-icon.svg";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion"

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

      {/* <motion.div
        initial={{ opacity: 1 }}
        whileInView={{ opacity: 1, x: [0, 0] }}
        viewport={{ once: true, amount: 'all' }}
        transition={{ ease: "anticipate", duration: 0.5, type: 'spring' }}
      > */}
        <div className="rounded-full h-60 w-60 absolute top-20 right-0 md:right-1/2 md:bottom-1">
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="relative bottom-2" height={150} width={150}>
            <path fill="#FF0066" d="M51,-60.8C61.7,-51.9,62.7,-31.6,59,-15.8C55.4,-0.1,46.9,11.1,40.7,24.9C34.4,38.7,30.2,55.1,18.6,65.6C7,76,-11.9,80.5,-26.2,74.3C-40.5,68.1,-50.1,51.3,-61.3,34.3C-72.5,17.2,-85.4,-0.1,-83.8,-15.8C-82.3,-31.6,-66.3,-45.8,-50,-53.7C-33.6,-61.6,-16.8,-63.2,1.7,-65.2C20.2,-67.2,40.4,-69.7,51,-60.8Z" transform="translate(100 100)" />
          </svg>
        </div>
        <div className="-mt-10 rounded-xl backdrop-blur-md bg-opacity-10 bg-white-900 w-full">
          <h5 className="text-xl font-bold text-white my-2">
            Let&apos;s Connect
          </h5>
          <p className="text-[#e8ecee] mb-4 max-w-md">
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
      {/* </motion.div> */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, y: [500, 0] }}
        viewport={{ once: true, amount: 'all' }}
        transition={{ delay: 0.2, ease: "anticipate", duration: 1, type: 'spring' }}
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
