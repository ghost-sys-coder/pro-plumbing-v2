"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Clock, Mail, Send, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { MotionWrapper } from "@/components/motion-wrapper";
import { fadeInLeft, fadeInRight, heroTextReveal } from "@/lib/animations";

const contactInfo = [
  { icon: MapPin, label: "Visit Us", value: "1200 Industrial Parkway, Suite 400\nMetropolis Central, MC 90210" },
  { icon: Phone, label: "Main Line", value: "(555) 123-4567" },
  { icon: Phone, label: "24/7 Dispatch", value: "(555) 012-3000" },
  { icon: Mail, label: "Email", value: "info@plumbmaster.com" },
];

const hours = [
  { days: "Monday – Friday", time: "7:00 AM – 7:00 PM" },
  { days: "Saturday", time: "8:00 AM – 4:00 PM" },
  { days: "Sunday", time: "Emergency Only" },
  { days: "Emergency Line", time: "24/7 Available" },
];

export function ContactContent() {
  const [formData, setFormData] = useState({
    name: "", email: "", phone: "", service: "", message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <>
      {/* ═══ HERO ═══ */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-br from-secondary via-secondary/95 to-primary/20" />
        <div className="absolute inset-0 grid-overlay opacity-[0.05]" />
        <div className="container-wide relative z-10">
          <motion.div initial="hidden" animate="visible" variants={heroTextReveal}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-secondary-foreground tracking-tight leading-[1.05] max-w-3xl">
              Get in <span className="text-primary">Touch.</span>
            </h1>
            <p className="mt-5 text-base md:text-lg text-secondary-foreground/70 max-w-xl">
              Submit your technical requirements. Our master plumbers respond
              within 60 minutes for high-priority infrastructure requests.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ═══ CONTACT GRID ═══ */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
            {/* Contact Form */}
            <MotionWrapper variants={fadeInLeft} className="lg:col-span-3">
              {isSubmitted ? (
                <div className="text-center py-16 rounded-2xl bg-surface">
                  <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Check className="h-8 w-8" />
                  </div>
                  <h2 className="text-2xl font-bold mb-2">Message Sent!</h2>
                  <p className="text-muted-foreground">
                    We&apos;ll get back to you within 60 minutes during business hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <h2 className="text-2xl font-bold text-foreground mb-6">
                    Send a Message
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="contact-name">Full Name</Label>
                      <Input
                        id="contact-name"
                        placeholder="Your name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="h-11 rounded-xl"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="contact-email">Email</Label>
                      <Input
                        id="contact-email"
                        type="email"
                        placeholder="you@email.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="h-11 rounded-xl"
                        required
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="contact-phone">Phone</Label>
                      <Input
                        id="contact-phone"
                        placeholder="(555) 000-0000"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="h-11 rounded-xl"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="contact-service">Service Needed</Label>
                      <Input
                        id="contact-service"
                        placeholder="e.g., Leak Repair"
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="h-11 rounded-xl"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="contact-message">Message</Label>
                    <Textarea
                      id="contact-message"
                      placeholder="Describe your plumbing needs or questions..."
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="rounded-xl"
                      required
                    />
                  </div>
                  <Button
                    type="submit"
                    className="gradient-cta rounded-full px-8 h-11 text-sm font-semibold border-0 gap-2"
                  >
                    <Send className="h-4 w-4" />
                    Send Message
                  </Button>
                </form>
              )}
            </MotionWrapper>

            {/* Contact Info Sidebar */}
            <MotionWrapper variants={fadeInRight} className="lg:col-span-2">
              <div className="space-y-8">
                {/* Contact Details */}
                <div className="rounded-2xl bg-surface p-6 ghost-border">
                  <h3 className="text-sm font-bold uppercase tracking-wider text-foreground mb-5">
                    Direct Access
                  </h3>
                  <div className="space-y-5">
                    {contactInfo.map((item) => (
                      <div key={item.label} className="flex items-start gap-3">
                        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 text-primary shrink-0">
                          <item.icon className="h-4 w-4" />
                        </div>
                        <div>
                          <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1">
                            {item.label}
                          </p>
                          <p className="text-sm text-foreground whitespace-pre-line">
                            {item.value}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Hours */}
                <div className="rounded-2xl bg-surface p-6 ghost-border">
                  <h3 className="text-sm font-bold uppercase tracking-wider text-foreground mb-5 flex items-center gap-2">
                    <Clock className="h-4 w-4 text-primary" />
                    Operational Hours
                  </h3>
                  <div className="space-y-3">
                    {hours.map((h) => (
                      <div key={h.days} className="flex items-center justify-between text-sm">
                        <span className="text-muted-foreground">{h.days}</span>
                        <span className="font-medium text-foreground">{h.time}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </MotionWrapper>
          </div>
        </div>
      </section>

      {/* ═══ MAP PLACEHOLDER ═══ */}
      <section className="h-64 md:h-80 bg-linear-to-br from-secondary/20 to-tertiary/10 relative">
        <div className="absolute inset-0 grid-overlay opacity-[0.04]" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <MapPin className="h-10 w-10 text-primary mx-auto mb-3" />
            <p className="text-sm font-semibold text-foreground">1200 Industrial Parkway</p>
            <p className="text-xs text-muted-foreground">Metropolis Central, MC 90210</p>
          </div>
        </div>
      </section>
    </>
  );
}
