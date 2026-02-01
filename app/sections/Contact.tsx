"use client";

import { SectionWrapper } from "../components/SectionWrapper";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Github, Mail, Copy, Check } from "lucide-react";
import { useState } from "react";

export function Contact() {
  const [copied, setCopied] = useState(false);
  const email = "lucasezequielamato@gmail.com";

  const copyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <SectionWrapper id="contact">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center max-w-3xl mx-auto"
      >
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
          <span className="text-gradient">Get In Touch</span>
        </h2>
        <p className="text-muted-foreground text-lg mb-12">
          Have a project in mind or just want to chat? Feel free to reach out!
        </p>

        {/* Email Display */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-glass rounded-2xl p-8 border border-white/10 mb-8"
        >
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <div className="flex items-center gap-3">
              <Mail className="w-6 h-6 text-purple-400" />
              <span className="text-xl md:text-2xl font-semibold text-white">{email}</span>
            </div>
            <Button
              size="sm"
              variant="outline"
              className="border-white/20 hover:bg-white/10"
              onClick={copyEmail}
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 mr-2" />
                  Copied!
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4 mr-2" />
                  Copy
                </>
              )}
            </Button>
          </div>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Button
            size="lg"
            className="bg-gradient-purple-blue hover:opacity-90 text-white px-8"
            onClick={() => window.open("https://github.com/Yamatino", "_blank")}
          >
            <Github className="w-5 h-5 mr-2" />
            GitHub
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-white/20 hover:bg-white/10 px-8"
            onClick={() => window.location.href = `mailto:${email}`}
          >
            <Mail className="w-5 h-5 mr-2" />
            Send Email
          </Button>
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-20 pt-8 border-t border-white/10"
        >
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Lucas Mato. Built with Next.js & Tailwind CSS.
          </p>
        </motion.div>
      </motion.div>
    </SectionWrapper>
  );
}
