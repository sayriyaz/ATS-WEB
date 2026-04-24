"use client";

import React from "react";
import { motion } from "framer-motion";
import { Phone, MessageCircle, Mail, MapPin, ArrowRight } from "lucide-react";

const WHATSAPP = "971525652771";
const PHONE = "+97142552895";
const MOBILE = "+971525652771";
const EMAIL_INFO = "info@alwahaatechnical.com";
const EMAIL_GMAIL = "alwahaatechnical@gmail.com";

const CONTACTS: { Icon: React.ElementType; title: string; value: string; href: string; target?: string }[] = [
  {
    Icon: Phone,
    title: "Office",
    value: "+971 4 255 2895",
    href: `tel:${PHONE}`,
  },
  {
    Icon: Phone,
    title: "Mobile",
    value: "+971 52 565 2771",
    href: `tel:${MOBILE}`,
  },
  {
    Icon: Mail,
    title: "Email",
    value: EMAIL_INFO,
    href: `mailto:${EMAIL_INFO}`,
  },
  {
    Icon: Mail,
    title: "Also Reach Us",
    value: EMAIL_GMAIL,
    href: `mailto:${EMAIL_GMAIL}`,
  },
];

export default function CTA() {
  return (
    <section
      id="cta"
      className="relative w-full overflow-hidden bg-surface-2 py-24 md:py-32"
    >
      <div className="pointer-events-none absolute inset-x-0 bottom-0">
        <svg
          className="w-full"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
          aria-hidden
        >
          <motion.path
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 0.4 }}
            viewport={{ once: true }}
            transition={{ duration: 2 }}
            fill="none"
            stroke="#00aaff"
            strokeWidth="1.5"
            d="M0,192 C240,96 480,288 720,192 C960,96 1200,288 1440,192"
          />
          <motion.path
            initial={{ x: 0 }}
            animate={{ x: [-40, 0, -40] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            fill="url(#waveGrad)"
            fillOpacity="0.12"
            d="M0,224 C240,160 480,288 720,224 C960,160 1200,288 1440,224 L1440,320 L0,320 Z"
          />
          <defs>
            <linearGradient id="waveGrad" x1="0" x2="1" y1="0" y2="0">
              <stop offset="0%" stopColor="#00d4ff" />
              <stop offset="100%" stopColor="#1a4f9a" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-brand-blue">
            Get In Touch
          </span>
          <h2 className="headline mt-4 text-4xl text-ink md:text-6xl">
            Ready to Build Your{" "}
            <span className="text-gradient-blue">Dream Pool?</span>
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-ink-soft">
            Let's talk. Our team responds on WhatsApp within minutes during UAE
            business hours.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.08 } },
          }}
          className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4"
        >
          {CONTACTS.map(({ Icon, title, value, href, target }) => (
            <motion.a
              key={title}
              href={href}
              target={target}
              rel={target ? "noopener noreferrer" : undefined}
              variants={{
                hidden: { opacity: 0, y: 24 },
                visible: { opacity: 1, y: 0 },
              }}
              whileHover={{ y: -5 }}
              className="group relative overflow-hidden rounded-3xl border border-black/5 bg-white p-6 transition hover:shadow-apple-lg"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-blue/10 text-brand-blue transition group-hover:bg-brand-blue group-hover:text-white">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-mute">
                {title}
              </h3>
              <p className="headline mt-1 break-words text-base text-ink">
                {value}
              </p>
            </motion.a>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-12 flex justify-center"
        >
          <a
            href={`https://wa.me/${WHATSAPP}?text=Hi%20ATS%2C%20I%27d%20like%20a%20quote%20for%20a%20pool.`}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 rounded-full bg-[#25D366] px-8 py-4 text-base font-semibold text-white transition hover:bg-[#1ebe5a]"
          >
            <MessageCircle className="h-5 w-5" />
            Chat on WhatsApp
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mt-16 overflow-hidden rounded-3xl border border-black/5 bg-white shadow-apple"
        >
          <div className="flex flex-col items-start justify-between gap-4 border-b border-black/5 p-6 md:flex-row md:items-center">
            <div>
              <h3 className="headline text-xl text-ink">Visit Our Office</h3>
              <p className="mt-1 text-sm text-ink-soft">
                P.O. Box 91270, Dubai — United Arab Emirates
              </p>
            </div>
            <a
              href="https://maps.app.goo.gl/V3Ekqs9VeJK3ENjz7"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-ink px-5 py-2.5 text-xs font-semibold text-white transition hover:bg-brand-blue"
            >
              Open in Google Maps
              <ArrowRight className="h-3.5 w-3.5" />
            </a>
          </div>
          <div className="relative aspect-[16/10] w-full bg-surface-2 md:aspect-[21/9]">
            <iframe
              title="Alwahaa Technical Services LLC — Dubai location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3556.6122658847057!2d55.326535275220245!3d25.260708629125656!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5cdb0fab28ed%3A0xc8bb3524001dee73!2sAL%20WAHAA%20TECHNICAL%20SERVICES%20L.L.C!5e1!3m2!1sen!2sae!4v1776860126628!5m2!1sen!2sae"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 h-full w-full border-0"
              allowFullScreen
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
