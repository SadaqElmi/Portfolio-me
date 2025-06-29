"use client";

import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import Image from "next/image";

export function HeroSection() {
  const scrollToAbout = () => {
    const element = document.getElementById("about");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
      style={{
        background:
          "linear-gradient(135deg, #0a1a1a 0%, #1a3d3d 50%, #2c5364 100%)",
      }}
    >
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-teal-900/20 via-transparent to-emerald-900/20"></div>
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <div
              className="w-32 h-32 mx-auto mb-6 rounded-full flex items-center justify-center shadow-2xl"
              style={{
                background: "linear-gradient(135deg, #2dd4bf 0%, #34d399 100%)",
              }}
            >
              <span className="text-4xl font-bold text-white">
                <Image
                  src="/Sadaq.jpg"
                  alt="Sadaq Elmi"
                  width={128}
                  height={128}
                  className="rounded-full object-cover"
                  priority
                />
              </span>
            </div>
          </div>

          <h1 className="text-4xl sm:text-6xl font-bold mb-6">
            <span className="text-white">Sadaq </span>
            <span
              className="bg-clip-text text-transparent"
              style={{
                background: "linear-gradient(135deg, #2dd4bf 0%, #34d399 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Elmi
            </span>
          </h1>

          <p
            className="text-xl sm:text-2xl mb-8 max-w-2xl mx-auto"
            style={{ color: "#2dd4bf" }}
          >
            Full Stack Developer & Mobile Developer
          </p>

          <p
            className="text-lg mb-12 max-w-3xl mx-auto leading-relaxed"
            style={{ color: "#d1d5db" }}
          >
            Passionate about creating exceptional digital experiences through
            clean code and thoughtful design. I specialize in modern web
            technologies and love turning complex problems into simple,
            beautiful solutions.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button
              size="lg"
              className="min-w-[160px] text-white border-0"
              style={{
                background: "linear-gradient(135deg, #14b8a6 0%, #10b981 100%)",
              }}
            >
              View My Work
            </Button>
            <a href="/cv.pdf" download>
              <Button
                variant="outline"
                size="lg"
                className="min-w-[160px] bg-transparent"
                style={{
                  borderColor: "#2dd4bf",
                  color: "#2dd4bf",
                }}
              >
                Download CV
              </Button>
            </a>
          </div>

          <div className="flex justify-center space-x-6 mb-12 ">
            <Button
              variant="ghost"
              size="icon"
              className="h-12 w-12 hover:bg-teal-500/20 "
              style={{ color: "#2dd4bf" }}
            >
              <a
                href="https://github.com/SadaqElmi"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="h-6 w-6" />
              </a>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="h-12 w-12 hover:bg-teal-500/20"
              style={{ color: "#2dd4bf" }}
            >
              <a
                href="https://www.linkedin.com/in/sadaq-elmi-abdulle-b638a2253/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="h-6 w-6" />
              </a>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="h-12 w-12 hover:bg-teal-500/20"
              style={{ color: "#2dd4bf" }}
            >
              <a href="mailto:sadaqelmi.dev@gmail.com">
                <Mail className="h-6 w-6" />
              </a>
            </Button>
          </div>

          <Button
            variant="ghost"
            size="icon"
            onClick={scrollToAbout}
            className="animate-bounce"
            style={{ color: "#2dd4bf" }}
          >
            <ArrowDown className="h-6 w-6" />
          </Button>
        </div>
      </div>
    </section>
  );
}
