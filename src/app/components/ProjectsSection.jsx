"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Rapid Reader",
    description: "News & Books Summarizer website using Next JS, Redis, OpenAI API",
    image: "/images/projects/rapid_reader.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/arnab7070/rapidreader",
    previewUrl: "https://rapidreader.vercel.app/",
  },
  {
    id: 2,
    title: "Syntax Valley Blog Website",
    description: "A content management system using Next JS & MongoDB",
    image: "/images/projects/blog.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/arnab7070/blog",
    previewUrl: "https://blog-arnab7070.vercel.app/",
  },
  {
    id: 3,
    title: "Dream Tracker using Flutter & Firebase",
    description: "Application that can help you to manage your goals",
    image: "/images/projects/dream_tracker.png",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/arnab7070/Dream-Tracker",
    previewUrl: "https://github.com/EncryptoCyphers/Dream-Tracker/releases/tag/V1.0.0",
  },
  {
    id: 4,
    title: "Code World using HUGO framework",
    description: "Coding blog website having lots of DSA concepts and solution of DSA problems",
    image: "/images/projects/code_world.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/arnab7070/arnab7070.github.io",
    previewUrl: "https://arnab7070.github.io/",
  },
  {
    id: 5,
    title: "Rhythm using Flutter",
    description: "A beautiful android application for Ad-free Music Playing",
    image: "/images/projects/rhythm.png",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/arnab7070/Rhythm",
    previewUrl: "https://github.com/EncryptoCyphers/Rhythm/releases/tag/V1",
  },
  {
    id: 6,
    title: "Codeforces 2.0",
    description: "Better UI implementation for codeforces website using HTML, bootstrap css and Codeforces API",
    image: "/images/projects/codeforces.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/arnab7070/codeforces",
    previewUrl: "https://arnab7070.github.io/codeforces/",
  },
  {
    id: 7,
    title: "URL Shortener",
    description: "Short URL generator website using Next JS and MongoDB",
    image: "/images/projects/ulink.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/arnab7070/ulink-URL-Shortener",
    previewUrl: "https://ulink-self.vercel.app/",
  },
  {
    id: 8,
    title: "Contest Calendar",
    description: "Mobile appliaction using Flutter that can track all upcoming Contests using Kontests API",
    image: "/images/projects/contest_calendar.png",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/arnab7070/Contest_Calendar",
    previewUrl: "https://github.com/arnab7070/Contest_Calendar/releases/tag/appV3",
  },
  {
    id: 9,
    title: "Portfolio Website: 1",
    description: "Portfolio website using bootstrap css",
    image: "/images/projects/bootstrap.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/arnab7070/arnab7070",
    previewUrl: "https://arnab7070.github.io/arnab7070/",
  },
  {
    id: 10,
    title: "Portfolio Website: 2",
    description: "Portfolio website using tailwind css",
    image: "/images/projects/tailwind.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/arnab7070/portfolio",
    previewUrl: "https://arnab7070.github.io/portfolio/",
  },
  {
    id: 11,
    title: "Portfolio Website: 3",
    description: "Portfolio website using nextjs",
    image: "/images/projects/nextjs.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/arnab7070/me",
    previewUrl: "/",
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
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-6">
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
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
