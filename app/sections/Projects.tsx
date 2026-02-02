"use client";

import { SectionWrapper } from "../components/SectionWrapper";
import { ProjectCard } from "../components/ProjectCard";
import { motion } from "framer-motion";

// Featured projects
const projects = [
  {
    name: "TarkovTracker",
    description: "A modern, cloud-synchronized companion web application for Escape from Tarkov. Features real-time multiplayer squad sync, item tracking for quests and hideout upgrades, smart price checker with live data from tarkov.dev API, and interactive quest graph visualization.",
    language: "JavaScript",
    stars: 0,
    homepage: "https://tarkovtracker.pages.dev/",
    html_url: "https://github.com/Yamatino/TarkovTracker",
    topics: ["react", "firebase", "gaming", "real-time"],
  },
  {
    name: "Gastitos",
    description: "A personal expense tracking application to manage daily spending and budget.",
    language: "JavaScript",
    stars: 0,
    homepage: "https://gastitos.vercel.app/",
    html_url: "https://github.com/Yamatino/Gastitos",
    topics: ["expense-tracker", "finance"],
  },
  {
    name: "Tazita",
    description: "A coffee tracker app built for my girlfriend to track each coffee she takes throughout the day.",
    language: "JavaScript",
    stars: 0,
    homepage: "https://tazita.vercel.app/",
    html_url: "https://github.com/Yamatino/Tazita",
    topics: ["coffee", "tracker", "personal"],
  },
];

export function Projects() {
  return (
    <SectionWrapper id="projects">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
          <span className="text-gradient">Featured Projects</span>
        </h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          A selection of my recent work. Each project represents a unique challenge and learning experience.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
        {projects.map((project, index) => (
          <ProjectCard
            key={project.name}
            {...project}
            index={index}
          />
        ))}
      </div>
    </SectionWrapper>
  );
}
