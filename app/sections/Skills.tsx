"use client";

import { SectionWrapper } from "../components/SectionWrapper";
import { motion } from "framer-motion";
import { 
  Code2, 
  Database, 
  Flame, 
  GitBranch, 
  Layout, 
  Server, 
  Terminal,
  Globe
} from "lucide-react";

const skillCategories = [
  {
    title: "Frontend",
    skills: [
      { name: "React", icon: Layout, level: "Advanced" },
      { name: "TypeScript", icon: Code2, level: "Intermediate" },
      { name: "JavaScript", icon: Code2, level: "Advanced" },
      { name: "Tailwind CSS", icon: Layout, level: "Intermediate" },
      { name: "HTML/CSS", icon: Layout, level: "Advanced" },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Java", icon: Server, level: "Intermediate" },
      { name: "Python", icon: Terminal, level: "Intermediate" },
      { name: "SQL", icon: Database, level: "Intermediate" },
      { name: "Firebase", icon: Flame, level: "Intermediate" },
    ],
  },
  {
    title: "Tools & Platforms",
    skills: [
      { name: "Git", icon: GitBranch, level: "Intermediate" },
      { name: "Vite", icon: Terminal, level: "Intermediate" },
      { name: "Cloudflare", icon: Globe, level: "Beginner" },
      { name: "NetBeans", icon: Code2, level: "Intermediate" },
    ],
  },
];

export function Skills() {
  return (
    <SectionWrapper id="skills">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
          <span className="text-gradient">Tech Stack</span>
        </h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Technologies and tools I use to bring ideas to life
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {skillCategories.map((category, categoryIndex) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
            className="bg-glass rounded-2xl p-6 border border-white/10"
          >
            <h3 className="text-xl font-semibold mb-6 text-white">{category.title}</h3>
            <div className="space-y-3">
              {category.skills.map((skill, skillIndex) => {
                const Icon = skill.icon;
                return (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                    className="flex items-center gap-3 p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors group"
                  >
                    <Icon className="w-5 h-5 text-purple-400 group-hover:text-purple-300 transition-colors" />
                    <span className="text-white flex-1">{skill.name}</span>
                    <span className="text-xs text-muted-foreground">{skill.level}</span>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
