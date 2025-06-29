"use client";

import type React from "react";
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [messageSent, setMessageSent] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formDataObj = new FormData(form);

    try {
      const response = await fetch(
        "https://formsubmit.co/sadaqelmi.dev@gmail.com",
        {
          method: "POST",
          body: formDataObj,
          headers: {
            Accept: "application/json",
          },
        }
      );

      if (response.ok) {
        setMessageSent(true);
        setFormData({ name: "", email: "", subject: "", message: "" });
        setTimeout(() => setMessageSent(false), 5000);
      } else {
        alert("Failed to send message. Please try again.");
      }
    } catch {
      alert("Something went wrong.");
    }
  };

  return (
    <section
      id="contact"
      className="py-20"
      style={{ backgroundColor: "#0a1a1a" }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2
              className="text-3xl sm:text-4xl font-bold mb-4"
              style={{ color: "#ffffff" }}
            >
              Get In Touch
            </h2>
            <p
              className="text-lg max-w-2xl mx-auto"
              style={{ color: "#d1d5db" }}
            >
              Have a project in mind or want to collaborate? I&apos;d love to
              hear from you. Let&apos;s create something amazing together.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h3
                  className="text-2xl font-semibold mb-6"
                  style={{ color: "#ffffff" }}
                >
                  Let&apos;s Connect
                </h3>
                <p
                  className="mb-8 leading-relaxed"
                  style={{ color: "#d1d5db" }}
                >
                  I&apos;m always open to discussing new opportunities, creative
                  projects, or just having a friendly chat about technology and
                  design. Feel free to reach out through any of the channels
                  below.
                </p>
              </div>

              {[
                {
                  icon: (
                    <Mail className="h-6 w-6" style={{ color: "#2dd4bf" }} />
                  ),
                  label: "Email",
                  value: "sadaqelmi.dev@example.com",
                },
                {
                  icon: (
                    <Phone className="h-6 w-6" style={{ color: "#2dd4bf" }} />
                  ),
                  label: "Phone",
                  value: "(+252) 619316187",
                },
                {
                  icon: (
                    <MapPin className="h-6 w-6" style={{ color: "#2dd4bf" }} />
                  ),
                  label: "Location",
                  value: "Somalia, Mogadishu",
                },
              ].map((item, idx) => (
                <Card
                  key={idx}
                  className="border"
                  style={{
                    backgroundColor: "rgba(26, 47, 47, 0.5)",
                    borderColor: "rgba(45, 212, 191, 0.3)",
                  }}
                >
                  <CardContent className="p-6 flex items-center space-x-4">
                    <div
                      className="p-3 rounded-lg"
                      style={{ backgroundColor: "rgba(45, 212, 191, 0.2)" }}
                    >
                      {item.icon}
                    </div>
                    <div>
                      <h4
                        className="font-semibold"
                        style={{ color: "#ffffff" }}
                      >
                        {item.label}
                      </h4>
                      <p style={{ color: "#d1d5db" }}>{item.value}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}

              <div>
                <h4 className="font-semibold mb-4" style={{ color: "#ffffff" }}>
                  Response Time
                </h4>
                <p style={{ color: "#d1d5db" }}>
                  I typically respond to emails within 24 hours. For urgent
                  matters, feel free to give me a call.
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <Card
              className="border"
              style={{
                backgroundColor: "rgba(26, 47, 47, 0.5)",
                borderColor: "rgba(45, 212, 191, 0.3)",
              }}
            >
              <CardHeader>
                <CardTitle style={{ color: "#ffffff" }}>
                  Send Me a Message
                </CardTitle>
              </CardHeader>
              <CardContent>
                {messageSent && (
                  <p className="text-green-400 text-sm mb-4">
                    ✅ Message sent successfully!
                  </p>
                )}
                <form onSubmit={handleSubmit} className="space-y-6">
                  <input type="hidden" name="_captcha" value="false" />
                  <input
                    type="hidden"
                    name="_subject"
                    value="New message from portfolio"
                  />

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium mb-2"
                        style={{ color: "#ffffff" }}
                      >
                        Name *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="Your full name"
                        className="border focus:ring-2"
                        style={{
                          backgroundColor: "rgba(10, 26, 26, 0.5)",
                          borderColor: "rgba(45, 212, 191, 0.5)",
                          color: "#ffffff",
                        }}
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium mb-2"
                        style={{ color: "#ffffff" }}
                      >
                        Email *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="your.email@example.com"
                        className="border focus:ring-2"
                        style={{
                          backgroundColor: "rgba(10, 26, 26, 0.5)",
                          borderColor: "rgba(45, 212, 191, 0.5)",
                          color: "#ffffff",
                        }}
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm font-medium mb-2"
                      style={{ color: "#ffffff" }}
                    >
                      Subject *
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      placeholder="What's this about?"
                      className="border focus:ring-2"
                      style={{
                        backgroundColor: "rgba(10, 26, 26, 0.5)",
                        borderColor: "rgba(45, 212, 191, 0.5)",
                        color: "#ffffff",
                      }}
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium mb-2"
                      style={{ color: "#ffffff" }}
                    >
                      Message *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      placeholder="Tell me about your project or just say hello..."
                      className="border focus:ring-2"
                      style={{
                        backgroundColor: "rgba(10, 26, 26, 0.5)",
                        borderColor: "rgba(45, 212, 191, 0.5)",
                        color: "#ffffff",
                      }}
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full text-white border-0"
                    size="lg"
                    style={{
                      background:
                        "linear-gradient(135deg, #14b8a6 0%, #10b981 100%)",
                    }}
                  >
                    <Send className="h-4 w-4 mr-2" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
