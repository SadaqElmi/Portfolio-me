import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Award } from "lucide-react";
import Image from "next/image";

export function AboutSection() {
  return (
    <section
      id="about"
      className="py-20"
      style={{
        background: "linear-gradient(180deg, #0a1a1a 0%, #1a2f2f 100%)",
      }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2
              className="text-3xl sm:text-4xl font-bold mb-4"
              style={{ color: "#ffffff" }}
            >
              About Me
            </h2>
            <p
              className="text-lg max-w-2xl mx-auto"
              style={{ color: "#d1d5db" }}
            >
              Get to know more about my background, experience, and what drives
              my passion for development.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div
                className="aspect-square rounded-2xl flex items-center justify-center mb-8 border"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(45, 212, 191, 0.1) 0%, rgba(52, 211, 153, 0.1) 100%)",
                  borderColor: "rgba(45, 212, 191, 0.3)",
                }}
              >
                <div
                  className="w-64 h-64 rounded-full flex items-center justify-center shadow-2xl"
                  style={{
                    background:
                      "linear-gradient(135deg, #2dd4bf 0%, #34d399 100%)",
                  }}
                >
                  <span className="text-6xl font-bold text-white">
                    <Image
                      src="/Sadaq.jpg"
                      alt="Sadaq Elmi"
                      width={256}
                      height={256}
                      className="rounded-full object-cover"
                      priority
                    />
                  </span>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h3
                  className="text-2xl font-semibold mb-4"
                  style={{ color: "#ffffff" }}
                >
                  My Journey
                </h3>
                <p
                  className="leading-relaxed mb-6"
                  style={{ color: "#d1d5db" }}
                >
                  With over 4+ years of experience in web development, I've had
                  the privilege of working with startups and established
                  companies to bring their digital visions to life. My journey
                  began with a curiosity for how things work on the web, which
                  evolved into a passion for creating seamless user experiences.
                </p>
                <p className="leading-relaxed" style={{ color: "#d1d5db" }}>
                  I believe in the power of clean, maintainable code and
                  user-centered design. When I'm not coding, you can find me
                  exploring new technologies, contributing to open-source
                  projects, or sharing knowledge with the developer community.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <Card
                  className="border"
                  style={{
                    backgroundColor: "rgba(26, 47, 47, 0.5)",
                    borderColor: "rgba(45, 212, 191, 0.3)",
                  }}
                >
                  <CardContent className="p-4 flex items-center space-x-3">
                    <Calendar
                      className="h-5 w-5"
                      style={{ color: "#2dd4bf" }}
                    />
                    <div>
                      <p className="font-medium" style={{ color: "#ffffff" }}>
                        Experience
                      </p>
                      <p className="text-sm" style={{ color: "#d1d5db" }}>
                        4+ Years
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card
                  className="border"
                  style={{
                    backgroundColor: "rgba(26, 47, 47, 0.5)",
                    borderColor: "rgba(45, 212, 191, 0.3)",
                  }}
                >
                  <CardContent className="p-4 flex items-center space-x-3">
                    <MapPin className="h-5 w-5" style={{ color: "#2dd4bf" }} />
                    <div>
                      <p className="font-medium" style={{ color: "#ffffff" }}>
                        Location
                      </p>
                      <p className="text-sm" style={{ color: "#d1d5db" }}>
                        Somalia, Mogadishu
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card
                  className="border"
                  style={{
                    backgroundColor: "rgba(26, 47, 47, 0.5)",
                    borderColor: "rgba(45, 212, 191, 0.3)",
                  }}
                >
                  <CardContent className="p-4 flex items-center space-x-3">
                    <Award className="h-5 w-5" style={{ color: "#2dd4bf" }} />
                    <div>
                      <p className="font-medium" style={{ color: "#ffffff" }}>
                        Projects
                      </p>
                      <p className="text-sm" style={{ color: "#d1d5db" }}>
                        10+ Completed
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card
                  className="border"
                  style={{
                    backgroundColor: "rgba(26, 47, 47, 0.5)",
                    borderColor: "rgba(45, 212, 191, 0.3)",
                  }}
                >
                  <CardContent className="p-4 flex items-center space-x-3">
                    <Award className="h-5 w-5" style={{ color: "#2dd4bf" }} />
                    <div>
                      <p className="font-medium" style={{ color: "#ffffff" }}>
                        Clients
                      </p>
                      <p className="text-sm" style={{ color: "#d1d5db" }}>
                        10+ Happy
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div>
                <h4 className="font-semibold mb-3" style={{ color: "#ffffff" }}>
                  Interests & Hobbies
                </h4>
                <div className="flex flex-wrap gap-2">
                  <Badge
                    variant="secondary"
                    className="border"
                    style={{
                      backgroundColor: "rgba(45, 212, 191, 0.1)",
                      color: "#2dd4bf",
                      borderColor: "rgba(45, 212, 191, 0.3)",
                    }}
                  >
                    Swimming
                  </Badge>
                  <Badge
                    variant="secondary"
                    className="border"
                    style={{
                      backgroundColor: "rgba(45, 212, 191, 0.1)",
                      color: "#2dd4bf",
                      borderColor: "rgba(45, 212, 191, 0.3)",
                    }}
                  >
                    Traveling
                  </Badge>
                  <Badge
                    variant="secondary"
                    className="border"
                    style={{
                      backgroundColor: "rgba(45, 212, 191, 0.1)",
                      color: "#2dd4bf",
                      borderColor: "rgba(45, 212, 191, 0.3)",
                    }}
                  >
                    Reading
                  </Badge>
                  <Badge
                    variant="secondary"
                    className="border"
                    style={{
                      backgroundColor: "rgba(45, 212, 191, 0.1)",
                      color: "#2dd4bf",
                      borderColor: "rgba(45, 212, 191, 0.3)",
                    }}
                  >
                    Gaming
                  </Badge>
                  <Badge
                    variant="secondary"
                    className="border"
                    style={{
                      backgroundColor: "rgba(45, 212, 191, 0.1)",
                      color: "#2dd4bf",
                      borderColor: "rgba(45, 212, 191, 0.3)",
                    }}
                  >
                    Tea
                  </Badge>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
