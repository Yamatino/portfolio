"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Star } from "lucide-react";

interface ProjectCardProps {
  name: string;
  description: string;
  language: string;
  stars: number;
  homepage?: string;
  html_url: string;
  topics?: string[];
  index: number;
}

const languageColors: Record<string, string> = {
  JavaScript: "bg-yellow-500/20 text-yellow-400 border-yellow-500/30",
  TypeScript: "bg-blue-500/20 text-blue-400 border-blue-500/30",
  Python: "bg-green-500/20 text-green-400 border-green-500/30",
  Java: "bg-orange-500/20 text-orange-400 border-orange-500/30",
  HTML: "bg-red-500/20 text-red-400 border-red-500/30",
  CSS: "bg-purple-500/20 text-purple-400 border-purple-500/30",
};

export function ProjectCard({
  name,
  description,
  language,
  stars,
  homepage,
  html_url,
  topics = [],
  index,
}: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card className="bg-glass border-white/10 hover:border-purple-500/30 transition-all duration-300 hover-glow group h-full">
        <CardHeader className="pb-4">
          <div className="flex items-start justify-between gap-4">
            <div className="flex-1">
              <CardTitle className="text-xl font-bold text-white mb-2 group-hover:text-gradient transition-all">
                {name}
              </CardTitle>
              <div className="flex items-center gap-3 flex-wrap">
                {language && (
                  <Badge
                    variant="outline"
                    className={languageColors[language] || "bg-gray-500/20 text-gray-400 border-gray-500/30"}
                  >
                    {language}
                  </Badge>
                )}
                <div className="flex items-center gap-1 text-muted-foreground text-sm">
                  <Star className="w-4 h-4" />
                  <span>{stars}</span>
                </div>
              </div>
            </div>
          </div>
        </CardHeader>
        
        <CardContent className="flex-1 flex flex-col">
          <CardDescription className="text-muted-foreground mb-4 line-clamp-3">
            {description || "No description available"}
          </CardDescription>
          
          {topics.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-4">
              {topics.slice(0, 3).map((topic) => (
                <Badge
                  key={topic}
                  variant="secondary"
                  className="bg-white/5 text-muted-foreground text-xs"
                >
                  {topic}
                </Badge>
              ))}
            </div>
          )}
          
          <div className="flex gap-3 mt-auto pt-4">
            {homepage && (
              <Button
                size="sm"
                className="bg-gradient-purple-blue hover:opacity-90 text-white"
                onClick={() => window.open(homepage, "_blank")}
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                Go to Site
              </Button>
            )}
            <Button
              size="sm"
              variant="outline"
              className="border-white/20 hover:bg-white/10"
              onClick={() => window.open(html_url, "_blank")}
            >
              <Github className="w-4 h-4 mr-2" />
              View Code
            </Button>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
