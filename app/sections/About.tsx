"use client";

import { SectionWrapper } from "../components/SectionWrapper";
import { motion } from "framer-motion";
import { GraduationCap, MapPin, Briefcase } from "lucide-react";

export function About() {
  return (
    <SectionWrapper id="about">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-gradient">About Me</span>
          </h2>
          
          {/* TODO: Customize this text - Replace with your personal story */}
          <div className="space-y-4 text-muted-foreground">
            <p className="text-lg">
              {/* TODO: Add your personal introduction here */}
              Hello! I'm a passionate developer currently studying Computer Science at 
              Universidad Tecnológica Nacional (UTN). I love building web applications 
              that solve real problems and create great user experiences.
            </p>
            <p>
              {/* TODO: Add more details about your journey */}
              My journey in programming started with Java and Python during my university 
              courses, but I quickly fell in love with web development. TarkovTracker, 
              my most ambitious project, taught me the ins and outs of React, Firebase, 
              and building real-time applications.
            </p>
            <p>
              {/* TODO: Add your interests and goals */}
              When I'm not coding, you can find me [TODO: add your hobbies/interests]. 
              I'm always eager to learn new technologies and take on challenging projects 
              that push my boundaries.
            </p>
          </div>

          <div className="flex flex-wrap gap-4 mt-8">
            <div className="flex items-center gap-2 px-4 py-2 bg-glass rounded-full">
              <GraduationCap className="w-4 h-4 text-purple-400" />
              <span className="text-sm text-muted-foreground">UTN - Computer Science</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-glass rounded-full">
              <MapPin className="w-4 h-4 text-purple-400" />
              <span className="text-sm text-muted-foreground">Argentina</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-glass rounded-full">
              <Briefcase className="w-4 h-4 text-purple-400" />
              <span className="text-sm text-muted-foreground">Open to Work</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative"
        >
          {/* TODO: Replace with your photo - Add an image to /public folder and update src */}
          <div className="aspect-square rounded-2xl bg-gradient-purple-blue p-1">
            <div className="w-full h-full rounded-2xl bg-[#0a0a0f] flex items-center justify-center">
              <div className="text-center p-8">
                <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-white/10 flex items-center justify-center">
                  <span className="text-4xl">👨‍💻</span>
                </div>
                <p className="text-muted-foreground">
                  {/* TODO: Add your profile picture to /public folder and reference it here */}
                  Add your photo to the public folder<br />
                  and update this section
                </p>
              </div>
            </div>
          </div>
          
          {/* Decorative elements */}
          <div className="absolute -top-4 -right-4 w-24 h-24 bg-purple-500/20 rounded-full blur-2xl" />
          <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-blue-500/20 rounded-full blur-2xl" />
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
