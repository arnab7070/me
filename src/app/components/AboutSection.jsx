"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";
import Lottie from "lottie-react";
import AboutSectionAnimation from "../../../public/aboutme.json"
const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>C/C++, Python, Java</li>
        <li>HTML, CSS, JS</li>
        <li>React & Next Js</li>
        <li>Tailwind & Bootstrap</li>
        <li>MySQL, MongoDB, Redis</li>
        <li>Flutter</li>
        <li>Firebase</li>
        <li>HUGO</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>B.Tech in Computer Science Engineering</li>
        <li>Higher Secondary with 96% marks</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>Google IT Support</li>
        <li>Using Python access Web Data</li>
        <li>Responsive website basics using HTML, CSS and Javascript</li>
        <li>Introduction to AI</li>
        <li>Java Programming: Solving problems with software</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 xl:gap-16 sm:py-16 xl:px-16">
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full md:order-2 px-4">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            I am a full stack web developer with a passion for creating
            interactive and responsive web applications. I have experience
            working with JavaScript, React, Next, Flutter, Redux, Node.js, Express, MySQL,
            MongoDB, Firebase, HTML, CSS, and Git. I am a quick learner and I am always
            looking to expand my knowledge and skill set. I am a team player and
            I am excited to work with others to create amazing applications.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certifications{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
        <Lottie animationData={AboutSectionAnimation} loop={true} className="rounded-lg md:order-1 mt-10" />
        {/* <Image src="/images/about-image.png" width={500} height={500} className="rounded-lg md:order-1 mt-10" /> */}
      </div>
    </section>
  );
};

export default AboutSection;
