import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Briefcase, Calendar, MapPin } from "lucide-react";

export function Experience() {
  const experiences = [
    {
      title: "Junior Associate Technology L1",
      company: "Publicis Sapient",
      location: "Banglore, India",
      period: "2021 - 2023",
      description: "Built and optimized responsive web interfaces using React.js and JavaScript, improving user engagement by 25% and page performance by 30%. Collaborated with design and engineering teams to implement accessible, production-ready front-end components within an Agile delivery process.",
      technologies: ["React.js", "JavaScript", "HTML/CSS", "Agile", "Node.js", "TypeScript"]
    },
    {
      title: "SDE Intern",
      company: "Bluestock Fintech",
      location: "Remote",
      period: "2025 - 2025",
     description: "Built and improved internal product dashboards using React.js, Next.js, and TypeScript, including a responsive dashboard displaying real-time stock market data, watchlists, and portfolio summaries via REST APIs. Developed reusable UI components (data tables, charts, filters, search) to improve usability, and resolved a redundant data-refetching issue by optimizing API calls and state management, reducing unnecessary re-renders and improving load times. Collaborated with the backend team on API integration, participated in code reviews, and followed Agile/Git-based workflows.",
     technologies: ["React.js", "Next.js", "TypeScript", "Tailwind CSS", "Axios", "Git", "Agile"]
    },
    {
      title: "Data Annotation",
      company: "PixelIQ",
      location: "Lucknow, India",
      period: "2019 - 2020",
      description: "Annotated image datasets with bounding boxes and class labels per detailed guidelines, supporting training data for computer vision object detection models. Participated in quality assurance review cycles to ensure annotation accuracy before dataset acceptance.",
      technologies: ["Computer Vision", "Image Annotation", "Quality Assurance"]
    }
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl">Professional Experience</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Over 2+ years of experience building scalable web applications and 
            leading development teams in fast-paced environments.
          </p>
        </div>
        
        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <Card key={index}>
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <CardTitle className="flex items-center gap-2">
                      <Briefcase className="h-5 w-5 text-primary" />
                      {exp.title}
                    </CardTitle>
                    <p className="text-primary mt-1">{exp.company}</p>
                  </div>
                  <div className="flex flex-col md:items-end gap-1">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      {exp.period}
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <MapPin className="h-4 w-4" />
                      {exp.location}
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">{exp.description}</p>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="outline">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}