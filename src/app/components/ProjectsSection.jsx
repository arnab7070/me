"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 0,
    title: "Skillverse - College Project",
    description: "Course Management Website having Spam Detection & auto Quiz Generator System using ML",
    image: "/images/projects/skillverse.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/arnab7070/skillverse",
    previewUrl: "https://skillverse-arnab7070.vercel.app/",
    features: ["NextJS", "MongoDB", "AWS", "ML", "OpenAI"],
  },
  {
    id: 1,
    title: "Rapid Reader",
    description: "News & Books Summarizer website using Next JS, Redis, OpenAI and Gemini API",
    image: "/images/projects/rapid_reader.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/arnab7070/rapidreader",
    previewUrl: "https://rapidreader.vercel.app/",
    features: ["NextJS", "MongoDB", "Redis", "ML", "GeminiAI"],
  },
  {
    id: 2,
    title: "Syntax Valley Blog Website",
    description: "A content management system using Next JS & MongoDB as backend",
    image: "/images/projects/blog.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/arnab7070/blog",
    previewUrl: "https://blog-arnab7070.vercel.app/",
    features: ["NextJS", "MongoDB", "Tailwind CSS", "AOS"],
  },
  {
    id: 3,
    title: "Dream Tracker using Flutter & Firebase",
    description: "Application that empowers you to achieve your goals, & make smart investments",
    image: "/images/projects/dream_tracker.png",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/arnab7070/Dream-Tracker",
    previewUrl: "https://github.com/EncryptoCyphers/Dream-Tracker/releases/tag/V1.0.0",
    features: ["Flutter", "Firebase Authentication", "Firestore"],
  },
  {
    id: 4,
    title: "Code World using HUGO framework",
    description: "Coding blog website having lots of DSA concepts and solution of DSA problems",
    image: "/images/projects/code_world.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/arnab7070/arnab7070.github.io",
    previewUrl: "https://arnab7070.github.io/",
    features: ["HUGO", "Markdown", "SEO Friendly"],
  },
  {
    id: 5,
    title: "Rhythm using Flutter",
    description: "Open-Source Music App and MP3 player for your entertainment",
    image: "/images/projects/rhythm.png",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/arnab7070/Rhythm",
    previewUrl: "https://github.com/EncryptoCyphers/Rhythm/releases/tag/V1",
    features: ["Flutter", "Firebase", "Scraping", "User Friendly UI"],
  },
  {
    id: 6,
    title: "Codeforces 2.0",
    description: "Better UI implementation for codeforces website using HTML, bootstrap css and Codeforces API",
    image: "/images/projects/codeforces.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/arnab7070/codeforces",
    previewUrl: "https://arnab7070.github.io/codeforces/",
    features: ["HTML, CSS, Javascript", "Codeforces API", "Bootstrap"],
  },
  {
    id: 7,
    title: "URL Shortener",
    description: "Short URL generator website using Next JS and MongoDB for storing URL stats",
    image: "/images/projects/ulink.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/arnab7070/ulink-URL-Shortener",
    previewUrl: "https://ulink-self.vercel.app/",
    features: ["NextJS", "TailwindCSS", "MongoDB", "Rest API"],
  },
  {
    id: 8,
    title: "Contest Calendar",
    description: "Mobile appliaction using Flutter that can track all upcoming Contests using API",
    image: "/images/projects/contest_calendar.png",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/arnab7070/Contest_Calendar",
    previewUrl: "https://github.com/arnab7070/Contest_Calendar/releases/tag/appV3",
    features: ["Flutter", "Kontests API", "Minimal UI Design"],
  },
  {
    id: 9,
    title: "Portfolio Website: 1",
    description: "Professional Portfolio Website Utilizing Bootstrap CSS",
    image: "/images/projects/bootstrap.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/arnab7070/arnab7070",
    previewUrl: "https://arnab7070.github.io/arnab7070/",
    features: ["Bootstrap", "HTML", "CSS", "Javascript"],
  },
  {
    id: 10,
    title: "Portfolio Website: 2",
    description: "Professional Portfolio Website Utilizing Tailwind CSS",
    image: "/images/projects/tailwind.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/arnab7070/portfolio",
    previewUrl: "https://arnab7070.github.io/portfolio/",
    features: ["Tailwind CSS", "HTML", "CSS", "Javascript"],
  },
  {
    id: 11,
    title: "Portfolio Website: 3",
    description: "Professional Portfolio Website Utilizing NextJS",
    image: "/images/projects/nextjs.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/arnab7070/me",
    previewUrl: "/",
    features: ["NextJS", "Framer Motion", "Email JS"],
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-x-3 gap-y-8 md:gap-8">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
              features={project.features}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
