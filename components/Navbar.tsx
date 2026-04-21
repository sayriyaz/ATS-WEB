"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Image from "next/image";

const NAV_LINKS = [
  { href: "#about", label: "About" },
  { href: "#commercial", label: "Pools" },
  { href: "#services", label: "Services" },
  { href: "#gallery", label: "Gallery" },
  { href: "#cta", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 backdrop-blur-xl border-b border-black/5"
          : "bg-white/40 backdrop-blur-md"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3 lg:px-10">
        <a href="#" aria-label="Alwahaa Technical Services — Home">
          <Image
            src="/images/logo.png"
            alt="Alwahaa Technical Services"
            width={220}
            height={60}
            priority
            className="h-9 w-auto md:h-11"
          />
        </a>

        <ul className="hidden items-center gap-9 lg:flex">
          {NAV_LINKS.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-[0.85rem] font-medium text-ink-soft transition hover:text-brand-blue"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#cta"
          className="hidden rounded-full bg-ink px-5 py-2.5 text-sm font-medium text-white transition hover:bg-brand-blue lg:inline-block"
        >
          Get a Quote
        </a>

        <button
          aria-label="Toggle menu"
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-ink lg:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden border-t border-black/5 bg-white/95 backdrop-blur-xl lg:hidden"
          >
            <ul className="flex flex-col gap-1 px-6 py-4">
              {NAV_LINKS.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-lg px-3 py-3 text-base font-medium text-ink-soft transition hover:bg-black/[0.04] hover:text-brand-blue"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
              <li className="pt-2">
                <a
                  href="#cta"
                  onClick={() => setOpen(false)}
                  className="block rounded-full bg-ink px-5 py-3 text-center text-sm font-medium text-white"
                >
                  Get a Quote
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
