"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";

export function ProjectsSection() {
  const projects = [
    {
      title: "Social Media App",
      description:
        "A full-stack social media application with user authentication, real-time updates, and a modern UI for sharing content.",
      image: "/image1.png",
      technologies: [
        "Next.js",
        "TypeScript",
        "NextAuth",
        "MongoDB",
        "Tailwind CSS",
        "Shadcn UI",
        "Cloundinary",
        "Zustand",
        "nodemailer",
      ],
      liveUrl: "https://social-media-app-one-black.vercel.app/",
      githubUrl: "https://github.com/SadaqElmi/SocialMediaApp",
      featured: true,
    },
    {
      title: "Appointment Doctor",
      description:
        "A comprehensive appointment booking system for healthcare providers with user-friendly interfaces and secure data management.",
      image: "/image2.png",
      technologies: [
        "Next.js",
        "NextAuth",
        "MongoDB",
        "shadcn-UI",
        "Tailwind CSS",
      ],
      liveUrl: "https://appointment-doctor-six.vercel.app/",
      githubUrl: "https://github.com/SadaqElmi/appointment-doctor",
      featured: true,
    },
    {
      title: "E-commerce Shop",
      description:
        "A fully functional e-commerce platform with product listings, shopping cart, and secure payment integration.",
      image: "/image3.png",
      technologies: ["JavaScript", "HTML", "Tailwind CSS"],
      liveUrl: "https://somonline.netlify.app/",
      githubUrl: "https://github.com/SadaqElmi/E-commerce-SomOnline",
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
                <div className="aspect-video overflow-hidden relative">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="object-fill group-hover:scale-105 transition-transform duration-300"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority
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
                  <div className="aspect-video overflow-hidden relative">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      priority
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
