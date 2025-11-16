import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { Mail, Phone, MapPin, Send, CheckCircle, Loader2 } from "lucide-react";
import { personalInfo } from "@/data/personalInfo";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));

      // Correct Sonner toast usage
      toast.success("Message Sent! 🎉", {
        description: "Thank you for your message. I'll get back to you soon!",
        duration: 5000,
      });

      setIsSubmitted(true);
      setFormData({ name: "", email: "", subject: "", message: "" });

      // Reset success state after 5 seconds
      setTimeout(() => setIsSubmitted(false), 5000);
    } catch {
      // Correct Sonner toast usage for error
      toast.error("Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <Card className="w-full max-w-2xl mx-auto border-0 bg-linear-to-br from-green-50 to-emerald-100 dark:from-green-950/20 dark:to-emerald-950/20">
        <CardContent className="p-8 text-center">
          <div className="flex flex-col items-center space-y-4">
            <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center">
              <CheckCircle className="h-8 w-8 text-white" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-green-600 mb-2">
                Message Sent Successfully!
              </h3>
              <p className="text-muted-foreground">
                Thank you for reaching out. I'll get back to you within 24
                hours.
              </p>
            </div>
            <Button
              onClick={() => setIsSubmitted(false)}
              variant="outline"
              className="mt-4"
            >
              Send Another Message
            </Button>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 w-full max-w-6xl mx-auto">
      {/* Contact Information */}
      <Card className="lg:col-span-1 border-0 bg-linear-to-br from-primary/5 to-secondary/5">
        <CardHeader>
          <CardTitle className="text-2xl font-bold bg-linear-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
            Let's Connect
          </CardTitle>
          <CardDescription>
            Feel free to reach out for collaborations or just a friendly hello
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Email */}
          <div className="flex items-start space-x-4 p-3 rounded-lg bg-background/50 backdrop-blur-sm border border-border/50 hover:border-primary/30 transition-all duration-300">
            <div className="w-10 h-10 bg-blue-500/10 rounded-full flex items-center justify-center shrink-0">
              <Mail className="h-5 w-5 text-blue-500" />
            </div>
            <div>
              <h4 className="font-semibold text-sm">Email</h4>
              <p className="text-muted-foreground text-sm">
                {personalInfo.email}
              </p>
              <a
                href={`mailto:${personalInfo.email}`}
                className="text-blue-500 hover:text-blue-600 text-xs font-medium transition-colors duration-300"
              >
                Send Email
              </a>
            </div>
          </div>

          {/* Phone */}
          <div className="flex items-start space-x-4 p-3 rounded-lg bg-background/50 backdrop-blur-sm border border-border/50 hover:border-primary/30 transition-all duration-300">
            <div className="w-10 h-10 bg-green-500/10 rounded-full flex items-center justify-center shrink-0">
              <Phone className="h-5 w-5 text-green-500" />
            </div>
            <div>
              <h4 className="font-semibold text-sm">Phone</h4>
              <p className="text-muted-foreground text-sm">
                {personalInfo.phone}
              </p>
              <a
                href={`tel:${personalInfo.phone}`}
                className="text-green-500 hover:text-green-600 text-xs font-medium transition-colors duration-300"
              >
                Call Now
              </a>
            </div>
          </div>

          {/* Location */}
          <div className="flex items-start space-x-4 p-3 rounded-lg bg-background/50 backdrop-blur-sm border border-border/50 hover:border-primary/30 transition-all duration-300">
            <div className="w-10 h-10 bg-purple-500/10 rounded-full flex items-center justify-center shrink-0">
              <MapPin className="h-5 w-5 text-purple-500" />
            </div>
            <div>
              <h4 className="font-semibold text-sm">Location</h4>
              <p className="text-muted-foreground text-sm">
                {personalInfo.location}
              </p>
              <span className="text-purple-500 text-xs font-medium">
                Available Remotely
              </span>
            </div>
          </div>

          {/* Social Links */}
          <div className="pt-4 border-t border-border/50">
            <h4 className="font-semibold text-sm mb-3">Follow Me</h4>
            <div className="flex space-x-3">
              {[
                {
                  href: personalInfo.github,
                  icon: "GitHub",
                  color: "hover:text-gray-700",
                },
                {
                  href: personalInfo.linkedin,
                  icon: "LinkedIn",
                  color: "hover:text-blue-600",
                },
                {
                  href: personalInfo.twitter,
                  icon: "Twitter",
                  color: "hover:text-blue-400",
                },
              ].map((social) => (
                <a
                  key={social.icon}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-muted-foreground ${social.color} transition-all duration-300 transform hover:scale-110 p-2 rounded-lg bg-background/50 border border-border/50`}
                >
                  <span className="text-xs font-medium">{social.icon}</span>
                </a>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Contact Form */}
      <Card className="lg:col-span-2 border-0 bg-linear-to-br from-card to-card/80 shadow-xl">
        <CardHeader>
          <CardTitle className="text-2xl font-bold bg-linear-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
            Send Message
          </CardTitle>
          <CardDescription>
            Have a project in mind? Let's discuss and bring your ideas to life.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Name Field */}
              <div className="space-y-2">
                <Label htmlFor="name" className="text-sm font-medium">
                  Full Name *
                </Label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  className="transition-all duration-300 focus:ring-2 focus:ring-primary/20 border-border/50"
                  disabled={isSubmitting}
                />
              </div>

              {/* Email Field */}
              <div className="space-y-2">
                <Label htmlFor="email" className="text-sm font-medium">
                  Email Address *
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email address"
                  className="transition-all duration-300 focus:ring-2 focus:ring-primary/20 border-border/50"
                  disabled={isSubmitting}
                />
              </div>
            </div>

            {/* Subject Field */}
            <div className="space-y-2">
              <Label htmlFor="subject" className="text-sm font-medium">
                Subject *
              </Label>
              <Input
                id="subject"
                name="subject"
                type="text"
                required
                value={formData.subject}
                onChange={handleChange}
                placeholder="What's this about?"
                className="transition-all duration-300 focus:ring-2 focus:ring-primary/20 border-border/50"
                disabled={isSubmitting}
              />
            </div>

            {/* Message Field */}
            <div className="space-y-2">
              <Label htmlFor="message" className="text-sm font-medium">
                Message *
              </Label>
              <Textarea
                id="message"
                name="message"
                required
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell me about your project or just say hello..."
                rows={6}
                className="resize-none transition-all duration-300 focus:ring-2 focus:ring-primary/20 border-border/50"
                disabled={isSubmitting}
              />
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-linear-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 disabled:transform-none disabled:opacity-50 group"
              size="lg"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin mr-2" />
                  Sending Message...
                </>
              ) : (
                <>
                  <Send className="h-4 w-4 mr-2 group-hover:translate-x-1 transition-transform duration-300" />
                  Send Message
                </>
              )}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};
