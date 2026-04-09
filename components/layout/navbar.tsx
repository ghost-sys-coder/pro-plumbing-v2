"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, Droplets } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/reviews", label: "Reviews" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "glass-nav shadow-sm"
            : "bg-transparent"
        }`}
      >
        <nav className="container-wide flex h-16 md:h-20 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary transition-transform duration-300 group-hover:scale-105">
              <Droplets className="h-5 w-5 text-primary-foreground" />
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-bold tracking-tight text-foreground leading-none">
                PlumbMaster
              </span>
              <span className="text-[10px] font-medium tracking-[0.15em] uppercase text-muted-foreground leading-none mt-0.5">
                Technical Atelier
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`relative px-3.5 py-2 text-sm font-medium transition-colors rounded-lg hover:bg-muted ${
                  pathname === link.href
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {link.label}
                {pathname === link.href && (
                  <motion.div
                    layoutId="activeNav"
                    className="absolute bottom-0 left-3 right-3 h-0.5 bg-primary rounded-full"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="tel:5551234567"
              className="flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              <Phone className="h-3.5 w-3.5" />
              (555) 123-4567
            </a>
            <Link href="/booking">
              <Button className="gradient-cta rounded-full px-5 h-9 text-sm font-semibold border-0">
                Book Now
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden flex h-10 w-10 items-center justify-center rounded-lg hover:bg-muted transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </nav>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm lg:hidden"
              onClick={() => setIsOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="fixed top-0 right-0 bottom-0 z-50 w-[300px] bg-card shadow-2xl lg:hidden"
            >
              <div className="flex flex-col h-full p-6">
                <div className="flex justify-end mb-8">
                  <button
                    onClick={() => setIsOpen(false)}
                    className="flex h-10 w-10 items-center justify-center rounded-lg hover:bg-muted transition-colors"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>
                <div className="flex flex-col gap-1">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={`px-4 py-3 text-base font-medium rounded-xl transition-all ${
                        pathname === link.href
                          ? "bg-primary/10 text-primary"
                          : "text-foreground hover:bg-muted"
                      }`}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
                <div className="mt-auto flex flex-col gap-3">
                  <a
                    href="tel:5551234567"
                    className="flex items-center gap-2 px-4 py-3 text-sm font-medium text-muted-foreground"
                  >
                    <Phone className="h-4 w-4" />
                    (555) 123-4567
                  </a>
                  <Link href="/booking">
                    <Button className="w-full gradient-cta rounded-full h-11 text-sm font-semibold border-0">
                      Book Now
                    </Button>
                  </Link>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
