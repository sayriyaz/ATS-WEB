"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Home, MessageCircle } from "lucide-react";

const WHATSAPP = "971525652771";

export default function NotFound() {
  return (
    <main className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-white px-6 py-12">
      {/* Ambient background */}
      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 50% 30%, rgba(0,170,255,0.10) 0%, rgba(255,255,255,0) 60%), radial-gradient(ellipse 60% 50% at 20% 80%, rgba(26,79,154,0.08) 0%, rgba(255,255,255,0) 60%)",
          }}
        />
        <div className="absolute left-1/2 top-1/2 h-[900px] w-[900px] -translate-x-1/2 -translate-y-1/2">
          {[0, 1.8, 3.6, 5.4].map((delay, i) => (
            <span
              key={i}
              className="water-ripple left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2"
              style={{ animationDelay: `${delay}s` }}
            />
          ))}
        </div>
      </div>

      <div className="relative z-10 mx-auto flex max-w-2xl flex-col items-center text-center">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <Image
            src="/images/logo.png"
            alt="Alwahaa Technical Services"
            width={320}
            height={96}
            priority
            className="h-14 w-auto md:h-16"
          />
        </motion.div>

        {/* 404 */}
        <motion.span
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mt-10 inline-flex items-center gap-2 rounded-full border border-black/5 bg-surface-2 px-4 py-1.5 text-[0.7rem] font-semibold uppercase tracking-[0.28em] text-brand-blue"
        >
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-blue opacity-75" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-brand-blue" />
          </span>
          404 — Page Not Found
        </motion.span>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="headline mt-6 text-4xl leading-[1.05] text-ink md:text-6xl"
        >
          Looks Like This Page{" "}
          <span className="text-gradient-blue">Went Under.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mt-6 max-w-md text-lg font-medium text-ink-soft"
        >
          The page you're looking for doesn't exist. Let's get you back to dry
          land.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.7 }}
          className="mt-10 flex flex-col items-center gap-3 sm:flex-row"
        >
          <a
            href="/"
            className="inline-flex items-center gap-2 rounded-full bg-ink px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-brand-blue"
          >
            <Home className="h-4 w-4" />
            Go Home
          </a>
          <a
            href={`https://wa.me/${WHATSAPP}?text=Hi%20ATS%2C%20I%20need%20help.`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-[#1ebe5a]"
          >
            <MessageCircle className="h-4 w-4" />
            Chat With Us
          </a>
        </motion.div>

        {/* Footer */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.7 }}
          className="mt-14 text-xs text-mute"
        >
          © {new Date().getFullYear()} Alwahaa Technical Services LLC — Dubai,
          UAE
        </motion.p>
      </div>
    </main>
  );
}
