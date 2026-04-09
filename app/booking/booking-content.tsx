"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Wrench,
  Droplets,
  MessageSquare,
  AlertTriangle,
  ChevronRight,
  ChevronLeft,
  Check,
  Calendar,
  Clock,
  User,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { heroTextReveal } from "@/lib/animations";

const services = [
  {
    id: "repair",
    icon: Wrench,
    title: "Standard Repair",
    desc: "Fix leaks, faucets, toilets, and standard household plumbing fixtures.",
    price: "From $149",
  },
  {
    id: "water",
    icon: Droplets,
    title: "Water Systems",
    desc: "Heater maintenance, filtration installs, and complex piping diagnostics.",
    price: "From $299",
  },
  {
    id: "consult",
    icon: MessageSquare,
    title: "Consultation",
    desc: "Technical project planning for renovations or new installations.",
    price: "Free",
  },
  {
    id: "emergency",
    icon: AlertTriangle,
    title: "Emergency Call",
    desc: "Burst pipes or major water damage. Technician dispatched within 1 hour.",
    price: "Priority",
  },
];

const timeSlots = [
  "8:00 AM",
  "9:00 AM",
  "10:00 AM",
  "11:00 AM",
  "1:00 PM",
  "2:00 PM",
  "3:00 PM",
  "4:00 PM",
];

// Generate next 7 business days (skipping weekends)
const generateAvailableDates = () => {
  const dates = [];
  const today = new Date();
  const currentDate = new Date(today);
  currentDate.setDate(currentDate.getDate() + 1); // Start from tomorrow

  while (dates.length < 7) {
    const dayOfWeek = currentDate.getDay();

    // Skip weekends
    if (dayOfWeek !== 0 && dayOfWeek !== 6) {
      dates.push({
        day: currentDate.toLocaleDateString("en-US", { weekday: "short" }),
        date: currentDate.getDate().toString(),
        month: currentDate.toLocaleDateString("en-US", { month: "short" }),
        fullDate: currentDate.toISOString().split("T")[0], // YYYY-MM-DD
        displayDate: currentDate.toLocaleDateString("en-US", {
          weekday: "short",
          month: "short",
          day: "numeric",
        }),
      });
    }

    currentDate.setDate(currentDate.getDate() + 1);
  }

  return dates;
};

export function BookingContent() {
  const [step, setStep] = useState(1);
  const [selectedService, setSelectedService] = useState("");
  const [selectedDate, setSelectedDate] = useState(""); // e.g. "10"
  const [selectedFullDate, setSelectedFullDate] = useState(""); // YYYY-MM-DD
  const [selectedTime, setSelectedTime] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    notes: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const availableDates = useMemo(() => generateAvailableDates(), []);

  const canAdvance = () => {
    if (step === 1) return selectedService !== "";
    if (step === 2) return selectedDate !== "" && selectedTime !== "";
    if (step === 3)
      return (
        formData.name !== "" &&
        formData.email !== "" &&
        formData.phone !== ""
      );
    return false;
  };

  const handleSubmit = () => {
    console.log("Booking Submitted:", {
      service: selectedService,
      date: selectedFullDate,
      time: selectedTime,
      customer: formData,
    });

    setIsSubmitted(true);
  };

  const selectedServiceData = services.find((s) => s.id === selectedService);
  const selectedDateInfo = availableDates.find(
    (d) => d.date === selectedDate
  );

  return (
    <>
      {/* HERO SECTION */}
      <section className="relative pt-32 pb-12 md:pt-40 md:pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-br from-secondary via-secondary/95 to-primary/20" />
        <div className="absolute inset-0 grid-overlay opacity-[0.05]" />
        <div className="container-wide relative z-10">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={heroTextReveal}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-secondary-foreground tracking-tight leading-[1.05]">
              Online <span className="text-primary">Booking</span>
            </h1>
            <p className="mt-3 text-base text-secondary-foreground/70 max-w-xl">
              Schedule your service in minutes. Select your needs, pick a time,
              and we&apos;ll dispatch a certified master technician.
            </p>
          </motion.div>
        </div>
      </section>

      {/* BOOKING FLOW */}
      <section className="section-padding bg-background">
        <div className="container-wide max-w-4xl">
          {/* Step Indicator */}
          <div className="flex items-center justify-center mb-12">
            {[
              { num: 1, label: "Service" },
              { num: 2, label: "Schedule" },
              { num: 3, label: "Details" },
            ].map((s, i) => (
              <div key={s.num} className="flex items-center">
                <div className="flex flex-col items-center">
                  <div
                    className={`flex h-10 w-10 items-center justify-center rounded-full text-sm font-bold transition-all ${
                      step > s.num
                        ? "bg-primary text-primary-foreground"
                        : step === s.num
                        ? "bg-primary text-primary-foreground ring-4 ring-primary/20"
                        : "bg-muted text-muted-foreground"
                    }`}
                  >
                    {step > s.num ? (
                      <Check className="h-4 w-4" />
                    ) : (
                      s.num
                    )}
                  </div>
                  <span
                    className={`text-xs mt-2 font-medium ${
                      step >= s.num
                        ? "text-foreground"
                        : "text-muted-foreground"
                    }`}
                  >
                    {s.label}
                  </span>
                </div>
                {i < 2 && (
                  <div
                    className={`w-16 md:w-24 h-0.5 mx-3 mb-5 transition-colors ${
                      step > s.num ? "bg-primary" : "bg-muted"
                    }`}
                  />
                )}
              </div>
            ))}
          </div>

          <AnimatePresence mode="wait">
            {isSubmitted ? (
              <motion.div
                key="confirmed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center py-16"
              >
                <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Check className="h-10 w-10" />
                </div>
                <h2 className="text-3xl font-bold text-foreground mb-3">
                  Booking Confirmed!
                </h2>
                <p className="text-muted-foreground max-w-md mx-auto mb-8">
                  Your {selectedServiceData?.title} appointment has been
                  scheduled. A confirmation email has been sent to{" "}
                  {formData.email}.
                </p>

                <div className="rounded-2xl bg-surface p-6 max-w-sm mx-auto text-left space-y-3">
                  <div className="flex items-center gap-3 text-sm">
                    <Calendar className="h-4 w-4 text-primary" />
                    <span>
                      {selectedDateInfo?.day}, {selectedDateInfo?.month}{" "}
                      {selectedDateInfo?.date}
                    </span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <Clock className="h-4 w-4 text-primary" />
                    <span>{selectedTime}</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <User className="h-4 w-4 text-primary" />
                    <span>Assigned: Arthur P. — Master Technician</span>
                  </div>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key={step}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                {/* Step 1: Service Selection */}
                {step === 1 && (
                  <div>
                    <h2 className="text-2xl font-bold text-foreground mb-2">
                      Choose Your Service
                    </h2>
                    <p className="text-muted-foreground mb-8">
                      Select the type of service you need. Not sure? Choose
                      &ldquo;Consultation&rdquo; and we&apos;ll help you figure
                      it out.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {services.map((service) => (
                        <button
                          key={service.id}
                          onClick={() => setSelectedService(service.id)}
                          className={`text-left rounded-2xl p-5 transition-all ghost-border ${
                            selectedService === service.id
                              ? "ring-2 ring-primary bg-primary/5"
                              : "bg-card hover:bg-muted/50"
                          }`}
                        >
                          <div className="flex items-start justify-between mb-3">
                            <div
                              className={`flex h-10 w-10 items-center justify-center rounded-xl ${
                                selectedService === service.id
                                  ? "bg-primary text-primary-foreground"
                                  : "bg-primary/10 text-primary"
                              }`}
                            >
                              <service.icon className="h-5 w-5" />
                            </div>
                            <Badge
                              variant={
                                service.id === "emergency"
                                  ? "destructive"
                                  : "secondary"
                              }
                              className="text-xs rounded-full"
                            >
                              {service.price}
                            </Badge>
                          </div>
                          <h3 className="font-bold text-foreground mb-1">
                            {service.title}
                          </h3>
                          <p className="text-sm text-muted-foreground leading-relaxed">
                            {service.desc}
                          </p>
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Step 2: Schedule */}
                {step === 2 && (
                  <div>
                    <h2 className="text-2xl font-bold text-foreground mb-2">
                      Pick Your Schedule
                    </h2>
                    <p className="text-muted-foreground mb-8">
                      Choose a date and time that works best for you.
                    </p>

                    {/* Date Selection */}
                    <div className="mb-8">
                      <h3 className="text-sm font-semibold text-foreground mb-4 flex items-center gap-2">
                        <Calendar className="h-4 w-4 text-primary" />
                        Available Dates
                      </h3>
                      <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
                        {availableDates.map((d) => (
                          <button
                            key={d.fullDate}
                            onClick={() => {
                              setSelectedDate(d.date);
                              setSelectedFullDate(d.fullDate);
                            }}
                            className={`flex flex-col items-center rounded-2xl px-5 py-4 min-w-20 transition-all ${
                              selectedDate === d.date
                                ? "bg-primary text-primary-foreground"
                                : "bg-card ghost-border hover:bg-muted/50"
                            }`}
                          >
                            <span className="text-xs font-medium opacity-70">
                              {d.day}
                            </span>
                            <span className="text-xl font-bold mt-1">
                              {d.date}
                            </span>
                            <span className="text-xs opacity-70">
                              {d.month}
                            </span>
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Time Selection */}
                    <div>
                      <h3 className="text-sm font-semibold text-foreground mb-4 flex items-center gap-2">
                        <Clock className="h-4 w-4 text-primary" />
                        Available Slots
                      </h3>
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                        {timeSlots.map((t) => (
                          <button
                            key={t}
                            onClick={() => setSelectedTime(t)}
                            className={`rounded-xl px-4 py-3 text-sm font-medium transition-all ${
                              selectedTime === t
                                ? "bg-primary text-primary-foreground"
                                : "bg-card ghost-border hover:bg-muted/50 text-foreground"
                            }`}
                          >
                            {t}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {/* Step 3: Details */}
                {step === 3 && (
                  <div>
                    <h2 className="text-2xl font-bold text-foreground mb-2">
                      Your Details
                    </h2>
                    <p className="text-muted-foreground mb-8">
                      Tell us about yourself and your property so we can send
                      the right technician.
                    </p>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                      <div className="lg:col-span-2 space-y-5">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="name">Full Name *</Label>
                            <Input
                              id="name"
                              placeholder="John Smith"
                              value={formData.name}
                              onChange={(e) =>
                                setFormData({ ...formData, name: e.target.value })
                              }
                              className="h-11 rounded-xl"
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="email">Email *</Label>
                            <Input
                              id="email"
                              type="email"
                              placeholder="john@example.com"
                              value={formData.email}
                              onChange={(e) =>
                                setFormData({ ...formData, email: e.target.value })
                              }
                              className="h-11 rounded-xl"
                            />
                          </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="phone">Phone *</Label>
                            <Input
                              id="phone"
                              placeholder="(555) 000-0000"
                              value={formData.phone}
                              onChange={(e) =>
                                setFormData({ ...formData, phone: e.target.value })
                              }
                              className="h-11 rounded-xl"
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="address">Property Address</Label>
                            <Input
                              id="address"
                              placeholder="123 Main St"
                              value={formData.address}
                              onChange={(e) =>
                                setFormData({ ...formData, address: e.target.value })
                              }
                              className="h-11 rounded-xl"
                            />
                          </div>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="notes">Additional Notes</Label>
                          <Textarea
                            id="notes"
                            placeholder="Describe the issue or any special requirements..."
                            rows={4}
                            value={formData.notes}
                            onChange={(e) =>
                              setFormData({ ...formData, notes: e.target.value })
                            }
                            className="rounded-xl"
                          />
                        </div>
                      </div>

                      {/* Booking Summary Sidebar */}
                      <div className="rounded-2xl bg-surface p-6 h-fit ghost-border">
                        <h3 className="text-sm font-bold text-foreground mb-4">
                          Booking Summary
                        </h3>
                        <div className="space-y-4 text-sm">
                          <div className="flex items-center justify-between">
                            <span className="text-muted-foreground">Service</span>
                            <span className="font-medium text-foreground">
                              {selectedServiceData?.title}
                            </span>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-muted-foreground">Date</span>
                            <span className="font-medium text-foreground">
                              {selectedDateInfo?.day}, {selectedDateInfo?.month}{" "}
                              {selectedDateInfo?.date}
                            </span>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-muted-foreground">Time</span>
                            <span className="font-medium text-foreground">
                              {selectedTime}
                            </span>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-muted-foreground">Estimate</span>
                            <span className="font-semibold text-primary">
                              {selectedServiceData?.price}
                            </span>
                          </div>
                          <div className="pt-4 border-t border-border">
                            <div className="flex items-center gap-3">
                              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary text-sm font-bold">
                                AP
                              </div>
                              <div>
                                <p className="text-sm font-semibold">Arthur P.</p>
                                <p className="text-xs text-muted-foreground">
                                  Master Technician • 12yrs
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </motion.div>
            )}
          </AnimatePresence>

          {/* Navigation Buttons */}
          {!isSubmitted && (
            <div className="flex items-center justify-between mt-10 pt-8 border-t border-border">
              <Button
                variant="outline"
                onClick={() => setStep((s) => Math.max(1, s - 1))}
                disabled={step === 1}
                className="rounded-full px-6 h-10 gap-2"
              >
                <ChevronLeft className="h-4 w-4" />
                Back
              </Button>

              {step < 3 ? (
                <Button
                  onClick={() => setStep((s) => Math.min(3, s + 1))}
                  disabled={!canAdvance()}
                  className="gradient-cta rounded-full px-6 h-10 gap-2 border-0"
                >
                  Continue
                  <ChevronRight className="h-4 w-4" />
                </Button>
              ) : (
                <Button
                  onClick={handleSubmit}
                  disabled={!canAdvance()}
                  className="gradient-cta rounded-full px-8 h-10 gap-2 border-0"
                >
                  Confirm Booking
                  <Check className="h-4 w-4" />
                </Button>
              )}
            </div>
          )}
        </div>
      </section>
    </>
  );
}