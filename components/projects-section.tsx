"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

export function ProjectsSection() {
  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "A full-stack e-commerce solution built with Next.js, featuring user authentication, payment processing, and admin dashboard.",
      image: "/placeholder.svg?height=300&width=400",
      technologies: [
        "Next.js",
        "TypeScript",
        "Stripe",
        "PostgreSQL",
        "Tailwind CSS",
      ],
      liveUrl: "#",
      githubUrl: "#",
      featured: true,
    },
    {
      title: "Task Management App",
      description:
        "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
      image: "/placeholder.svg?height=300&width=400",
      technologies: ["React", "Node.js", "Socket.io", "MongoDB", "Material-UI"],
      liveUrl: "#",
      githubUrl: "#",
      featured: true,
    },
    {
      title: "Weather Dashboard",
      description:
        "A responsive weather dashboard that displays current conditions and forecasts with beautiful data visualizations.",
      image: "/placeholder.svg?height=300&width=400",
      technologies: ["Vue.js", "Chart.js", "OpenWeather API", "CSS3"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false,
    },
    {
      title: "Portfolio Website",
      description:
        "A modern, responsive portfolio website showcasing creative work with smooth animations and optimized performance.",
      image: "/placeholder.svg?height=300&width=400",
      technologies: ["React", "Framer Motion", "Styled Components", "Netlify"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false,
    },
    {
      title: "Social Media Analytics",
      description:
        "A comprehensive analytics dashboard for social media metrics with data visualization and reporting features.",
      image: "/placeholder.svg?height=300&width=400",
      technologies: ["Python", "Django", "D3.js", "PostgreSQL", "Redis"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false,
    },
    {
      title: "Mobile Fitness App",
      description:
        "A cross-platform mobile app for fitness tracking with workout plans, progress monitoring, and social features.",
      image: "/placeholder.svg?height=300&width=400",
      technologies: ["React Native", "Firebase", "Redux", "Expo"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false,
    },
  ];

  const featuredProjects = projects.filter((project) => project.featured);
  const otherProjects = projects.filter((project) => !project.featured);

  return (
    <section
      id="projects"
      className="py-20"
      style={{
        background: "linear-gradient(180deg, #1a2f2f 0%, #0a1a1a 100%)",
      }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2
              className="text-3xl sm:text-4xl font-bold mb-4"
              style={{ color: "#ffffff" }}
            >
              Featured Projects
            </h2>
            <p
              className="text-lg max-w-2xl mx-auto"
              style={{ color: "#d1d5db" }}
            >
              A selection of my recent work that showcases my skills and passion
              for creating exceptional digital experiences.
            </p>
          </div>

          {/* Featured Projects */}
          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {featuredProjects.map((project, index) => (
              <Card
                key={index}
                className="overflow-hidden group hover:shadow-2xl transition-all border"
                style={{
                  backgroundColor: "rgba(26, 47, 47, 0.5)",
                  borderColor: "rgba(45, 212, 191, 0.3)",
                  boxShadow: "0 0 0 0 rgba(45, 212, 191, 0)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow =
                    "0 25px 50px -12px rgba(45, 212, 191, 0.2)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow =
                    "0 0 0 0 rgba(45, 212, 191, 0)";
                }}
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <CardTitle
                    className="flex items-center justify-between"
                    style={{ color: "#ffffff" }}
                  >
                    {project.title}
                    <div className="flex space-x-2">
                      <Button
                        variant="ghost"
                        size="icon"
                        asChild
                        className="hover:bg-opacity-20"
                        style={{ color: "#2dd4bf" }}
                      >
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Github className="h-4 w-4" />
                        </a>
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        asChild
                        className="hover:bg-opacity-20"
                        style={{ color: "#2dd4bf" }}
                      >
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink className="h-4 w-4" />
                        </a>
                      </Button>
                    </div>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4" style={{ color: "#d1d5db" }}>
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge
                        key={techIndex}
                        variant="secondary"
                        className="text-xs border"
                        style={{
                          backgroundColor: "rgba(45, 212, 191, 0.1)",
                          color: "#2dd4bf",
                          borderColor: "rgba(45, 212, 191, 0.3)",
                        }}
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Other Projects */}
          <div>
            <h3
              className="text-2xl font-semibold mb-8 text-center"
              style={{ color: "#ffffff" }}
            >
              Other Projects
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {otherProjects.map((project, index) => (
                <Card
                  key={index}
                  className="overflow-hidden group hover:shadow-xl transition-all border"
                  style={{
                    backgroundColor: "rgba(26, 47, 47, 0.5)",
                    borderColor: "rgba(45, 212, 191, 0.3)",
                  }}
                >
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardHeader className="pb-2">
                    <CardTitle
                      className="text-lg flex items-center justify-between"
                      style={{ color: "#ffffff" }}
                    >
                      {project.title}
                      <div className="flex space-x-1">
                        <Button
                          variant="ghost"
                          size="sm"
                          asChild
                          style={{ color: "#2dd4bf" }}
                        >
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Github className="h-3 w-3" />
                          </a>
                        </Button>
                        <Button
                          variant="ghost"
                          size="sm"
                          asChild
                          style={{ color: "#2dd4bf" }}
                        >
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <ExternalLink className="h-3 w-3" />
                          </a>
                        </Button>
                      </div>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm mb-3" style={{ color: "#d1d5db" }}>
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-1">
                      {project.technologies
                        .slice(0, 3)
                        .map((tech, techIndex) => (
                          <Badge
                            key={techIndex}
                            variant="outline"
                            className="text-xs border"
                            style={{
                              borderColor: "rgba(45, 212, 191, 0.5)",
                              color: "#2dd4bf",
                            }}
                          >
                            {tech}
                          </Badge>
                        ))}
                      {project.technologies.length > 3 && (
                        <Badge
                          variant="outline"
                          className="text-xs border"
                          style={{
                            borderColor: "rgba(45, 212, 191, 0.5)",
                            color: "#2dd4bf",
                          }}
                        >
                          +{project.technologies.length - 3}
                        </Badge>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
