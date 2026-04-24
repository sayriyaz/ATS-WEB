"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  Phone,
  MessageCircle,
  Mail,
  MapPin,
  Instagram,
  Facebook,
  Linkedin,
} from "lucide-react";

const WHATSAPP = "971525652771";
const PHONE = "+97142552895";
const EMAIL_INFO = "info@alwahaatechnical.com";
const EMAIL_GMAIL = "alwahaatechnical@gmail.com";
const MAPS = "https://maps.app.goo.gl/V3Ekqs9VeJK3ENjz7";

const CONTACTS = [
  {
    Icon: MessageCircle,
    label: "WhatsApp",
    value: "+971 52 565 2771",
    href: `https://wa.me/${WHATSAPP}`,
    target: "_blank",
    accent: "text-[#25D366]",
  },
  {
    Icon: Phone,
    label: "Call",
    value: "+971 4 255 2895",
    href: `tel:${PHONE}`,
    accent: "text-brand-blue",
  },
  {
    Icon: Mail,
    label: "Email",
    value: EMAIL_INFO,
    href: `mailto:${EMAIL_INFO}`,
    accent: "text-brand-blue",
  },
  {
    Icon: Mail,
    label: "Also Email",
    value: EMAIL_GMAIL,
    href: `mailto:${EMAIL_GMAIL}`,
    accent: "text-brand-blue",
  },
];

export default function ComingSoon() {
  return (
    <main className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-white px-6 py-12">
      {/* Ambient background */}
      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 50% 30%, rgba(0,170,255,0.12) 0%, rgba(255,255,255,0) 60%), radial-gradient(ellipse 60% 50% at 20% 80%, rgba(26,79,154,0.10) 0%, rgba(255,255,255,0) 60%)",
          }}
        />
        {/* Animated ripples */}
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

      <div className="relative z-10 mx-auto flex max-w-3xl flex-col items-center text-center">
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
            className="h-16 w-auto md:h-20"
          />
        </motion.div>

        {/* Eyebrow */}
        <motion.span
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mt-12 inline-flex items-center gap-2 rounded-full border border-black/5 bg-surface-2 px-4 py-1.5 text-[0.7rem] font-semibold uppercase tracking-[0.28em] text-brand-blue"
        >
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-blue opacity-75" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-brand-blue" />
          </span>
          Website Under Construction
        </motion.span>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="headline mt-6 text-4xl leading-[1.05] text-ink md:text-6xl lg:text-7xl"
        >
          We're Building{" "}
          <span className="text-gradient-blue">Something Beautiful.</span>
        </motion.h1>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mt-6 max-w-xl text-lg font-medium text-ink-soft md:text-xl"
        >
          Our new website is launching soon. In the meantime, we're open for
          business — reach out anytime.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="mt-4 text-sm font-medium tracking-[0.18em] text-mute"
        >
          For Your Expectations, We Build With Passion.
        </motion.p>

        {/* Contact cards */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: { transition: { delayChildren: 0.9, staggerChildren: 0.08 } },
          }}
          className="mt-12 grid w-full max-w-2xl grid-cols-1 gap-3 sm:grid-cols-2"
        >
          {CONTACTS.map(({ Icon, label, value, href, target, accent }) => (
            <motion.a
              key={label}
              href={href}
              target={target}
              rel={target ? "noopener noreferrer" : undefined}
              variants={{
                hidden: { opacity: 0, y: 16 },
                visible: { opacity: 1, y: 0 },
              }}
              whileHover={{ y: -3 }}
              className="group flex items-center gap-4 rounded-2xl border border-black/5 bg-white px-5 py-4 text-left transition hover:border-brand-blue/40 hover:shadow-apple"
            >
              <div
                className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-surface-2 ${accent} transition group-hover:scale-110`}
              >
                <Icon className="h-5 w-5" />
              </div>
              <div className="min-w-0">
                <div className="text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-mute">
                  {label}
                </div>
                <div className="truncate text-sm font-semibold text-ink">
                  {value}
                </div>
              </div>
            </motion.a>
          ))}
        </motion.div>

        {/* WhatsApp CTA */}
        <motion.a
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3, duration: 0.7 }}
          href={`https://wa.me/${WHATSAPP}?text=Hi%20ATS%2C%20I%27d%20like%20a%20quote%20for%20a%20pool.`}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-10 inline-flex items-center gap-3 rounded-full bg-[#25D366] px-8 py-4 text-base font-semibold text-white transition hover:bg-[#1ebe5a]"
        >
          <MessageCircle className="h-5 w-5" />
          Chat With Us on WhatsApp
        </motion.a>

        {/* Socials */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.7 }}
          className="mt-12 flex items-center gap-3"
        >
          {[
            {
              Icon: Instagram,
              href: "https://www.instagram.com/alwahaa_pools/",
              label: "Instagram",
            },
            {
              Icon: Facebook,
              href: "https://www.facebook.com/alwahaapools",
              label: "Facebook",
            },
            {
              Icon: Linkedin,
              href: "https://www.linkedin.com/in/alwahaa-technical-services-llc-7183b080/",
              label: "LinkedIn",
            },
          ].map(({ Icon, href, label }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-black/10 bg-white text-ink-soft transition hover:border-brand-blue hover:text-brand-blue"
            >
              <Icon className="h-4 w-4" />
            </a>
          ))}
        </motion.div>

        {/* Footer */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.7, duration: 0.7 }}
          className="mt-10 text-xs text-mute"
        >
          © {new Date().getFullYear()} Alwahaa Technical Services LLC — Dubai,
          UAE
        </motion.p>
      </div>
    </main>
  );
}
