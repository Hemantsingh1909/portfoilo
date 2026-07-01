import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { ExternalLink, Github } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Projects() {
 const projects = [
  {
    title: "ATSPrime",
    description: "Free, no-paywall resume tailoring tool. Upload your resume, paste a job description, and get an ATS-optimized version with keyword analysis and a tailored summary in one click — built after hitting paywalls on every other resume optimizer while job hunting myself.",
    image: "/images/atsprime-screenshot.png",
    technologies: ["Next.js", "React", "TypeScript", "AI/NLP"],
    github: "https://github.com/Hemantsingh1909/atsprime",
    demo: "https://atsprime.in"
  },
  {
    title: "E-Commerce Cart Functionality",
    description: "Full-stack e-commerce product and cart page with user-facing product listing, cart state management, and a Node.js/Express backend connected to MongoDB.",
    image: "/images/ecommerce-screenshot.png",
    technologies: ["React", "Node.js", "Express", "MongoDB"],
    github: "https://github.com/Hemantsingh1909/CartFunctionality",
    demo: "https://cart-functionality-beta.vercel.app/"
  },
    {
    title: "Sentiment Analysis Research",
    description: "Primary author of a Scopus-indexed research paper on sentiment analysis, presented at ISSF 2026, as part of M.Tech coursework in Data Science.",
    image: "/images/sentiment-analysis-screenshot.png",
    technologies: ["Python", "NLP", "Machine Learning"],
    github: "#", // link to code repo if you have one, or remove this field
    demo: "#" // link to the published paper / Scopus listing
  },
];

  return (
    <section className="py-20 px-4 bg-secondary/5">
      <div className="max-w-6xl mx-auto">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl">Featured Projects</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A selection of projects that demonstrate my expertise in full-stack 
            development and research based AI/ML practices.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden">
              <div className="aspect-video overflow-hidden">
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
                />
              </div>
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-2 pt-2">
                  <Button variant="outline" size="sm" className="gap-2" onClick={() => window.open(project.github, "_blank")}>
                    <Github className="h-4 w-4" />
                    Code
                  </Button>
                  <Button size="sm" className="gap-2" onClick={() => window.open(project.demo, "_blank")}>
                    <ExternalLink className="h-4 w-4" />
                    Demo
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}