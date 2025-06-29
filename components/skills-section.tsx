import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Palette, Server, Smartphone } from "lucide-react";

export function SkillsSection() {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: Code,
      skills: [
        { name: "React/Next.js", level: 95 },
        { name: "TypeScript", level: 90 },
        { name: "Tailwind CSS", level: 92 },
        { name: "Vue.js", level: 85 },
      ],
    },
    {
      title: "Backend Development",
      icon: Server,
      skills: [
        { name: "Node.js", level: 88 },
        { name: "Python", level: 82 },
        { name: "PostgreSQL", level: 85 },
        { name: "MongoDB", level: 80 },
      ],
    },
    {
      title: "UI/UX Design",
      icon: Palette,
      skills: [
        { name: "Figma", level: 90 },
        { name: "Adobe XD", level: 85 },
        { name: "Prototyping", level: 88 },
        { name: "User Research", level: 75 },
      ],
    },
    {
      title: "Mobile Development",
      icon: Smartphone,
      skills: [
        { name: "React Native", level: 85 },
        { name: "Flutter", level: 70 },
        { name: "iOS Development", level: 65 },
        { name: "Android Development", level: 68 },
      ],
    },
  ];

  const tools = [
    "VS Code",
    "Git",
    "Docker",
    "AWS",
    "Vercel",
    "Firebase",
    "Supabase",
    "Prisma",
    "GraphQL",
    "REST APIs",
    "Jest",
    "Cypress",
  ];

  return (
    <section
      id="skills"
      className="py-20"
      style={{
        backgroundColor: "#0a1a1a",
      }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2
              className="text-3xl sm:text-4xl font-bold mb-4"
              style={{ color: "#ffffff" }}
            >
              Skills & Expertise
            </h2>
            <p
              className="text-lg max-w-2xl mx-auto"
              style={{ color: "#d1d5db" }}
            >
              A comprehensive overview of my technical skills and the tools I
              use to bring ideas to life.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {skillCategories.map((category, index) => (
              <Card
                key={index}
                className="h-full border"
                style={{
                  backgroundColor: "rgba(26, 47, 47, 0.5)",
                  borderColor: "rgba(45, 212, 191, 0.3)",
                }}
              >
                <CardHeader>
                  <CardTitle
                    className="flex items-center space-x-3"
                    style={{ color: "#ffffff" }}
                  >
                    <div
                      className="p-2 rounded-lg"
                      style={{
                        backgroundColor: "rgba(45, 212, 191, 0.2)",
                      }}
                    >
                      <category.icon
                        className="h-6 w-6"
                        style={{ color: "#2dd4bf" }}
                      />
                    </div>
                    <span>{category.title}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span
                          className="font-medium"
                          style={{ color: "#ffffff" }}
                        >
                          {skill.name}
                        </span>
                        <span className="text-sm" style={{ color: "#d1d5db" }}>
                          {skill.level}%
                        </span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2">
                        <div
                          className="h-2 rounded-full transition-all duration-300"
                          style={{
                            width: `${skill.level}%`,
                            background:
                              "linear-gradient(90deg, #2dd4bf 0%, #34d399 100%)",
                          }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            ))}
          </div>

          <Card
            className="border"
            style={{
              backgroundColor: "rgba(26, 47, 47, 0.5)",
              borderColor: "rgba(45, 212, 191, 0.3)",
            }}
          >
            <CardHeader>
              <CardTitle style={{ color: "#ffffff" }}>
                Tools & Technologies
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {tools.map((tool, index) => (
                  <Badge
                    key={index}
                    variant="outline"
                    className="text-sm py-1 px-3 border hover:bg-opacity-20"
                    style={{
                      borderColor: "rgba(45, 212, 191, 0.5)",
                      color: "#2dd4bf",
                      backgroundColor: "transparent",
                    }}
                  >
                    {tool}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
