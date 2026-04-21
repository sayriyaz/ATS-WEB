"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { COMMERCIAL_IMG, RESIDENTIAL_IMG } from "@/lib/images";

const CATEGORIES = [
  {
    tag: "Commercial Pools",
    title: "Hotels. Towers. Public Projects.",
    copy:
      "We are fully equipped to deliver swimming pool projects for hotels, resorts, private developers, general contractors, and municipalities across Dubai.",
    bullets: [
      "Hotels & Resorts",
      "Residential Towers",
      "Government Projects",
      "Master Developers",
    ],
    image: COMMERCIAL_IMG,
  },
  {
    tag: "Residential Pools",
    title: "Villas. Backyards. Private Homes.",
    copy:
      "We meet the needs of every residential pool owner — flexible, creative, and committed to quality across every home we work on.",
    bullets: [
      "Custom Concrete Pools",
      "Rooftop & Plunge Pools",
      "Renovation & Repair",
      "Ongoing Maintenance",
    ],
    image: RESIDENTIAL_IMG,
  },
];

export default function Commercial() {
  return (
    <section
      id="commercial"
      className="relative w-full overflow-hidden bg-surface-2 py-24 md:py-32"
    >
      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="mb-16 text-center"
        >
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-brand-blue">
            Our Projects
          </span>
          <h2 className="headline mt-4 text-4xl text-ink md:text-6xl">
            Commercial &{" "}
            <span className="text-gradient-blue">Residential Pools</span>
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-ink-soft">
            A reputation earned across Dubai — from 5-star resorts to private villas.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {CATEGORIES.map((c, i) => (
            <motion.article
              key={c.tag}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              className="group overflow-hidden rounded-3xl bg-white shadow-apple transition hover:shadow-apple-lg"
            >
              <div className="relative h-72 w-full overflow-hidden md:h-80">
                <Image
                  src={c.image}
                  alt={c.tag}
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover transition duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
                <span className="absolute left-5 top-5 inline-flex rounded-full bg-white/90 px-3 py-1 text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-brand-blue backdrop-blur">
                  {c.tag}
                </span>
              </div>
              <div className="p-8">
                <h3 className="headline text-2xl text-ink md:text-3xl">
                  {c.title}
                </h3>
                <p className="mt-3 text-base leading-relaxed text-ink-soft">
                  {c.copy}
                </p>
                <ul className="mt-5 grid grid-cols-2 gap-x-4 gap-y-2">
                  {c.bullets.map((b) => (
                    <li
                      key={b}
                      className="flex items-center gap-2 text-sm text-ink-soft"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-brand-blue" />
                      {b}
                    </li>
                  ))}
                </ul>
                <a
                  href="#cta"
                  className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-brand-blue transition hover:gap-3"
                >
                  View Full Details
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
