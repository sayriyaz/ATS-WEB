"use client";

import { motion } from "framer-motion";

const STATS = [
  { value: "15+", label: "Years in UAE" },
  { value: "500+", label: "Pools Delivered" },
  { value: "100%", label: "Client Satisfaction" },
  { value: "24/7", label: "Support" },
];

export default function About() {
  return (
    <section
      id="about"
      className="relative w-full bg-white py-24 md:py-32"
    >
      <div className="mx-auto max-w-5xl px-6 text-center">
        <motion.span
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-xs font-semibold uppercase tracking-[0.25em] text-brand-blue"
        >
          About Us
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="headline mt-4 text-4xl text-ink md:text-5xl"
        >
          Welcome to{" "}
          <span className="text-gradient-blue">Alwahaa Technical Services</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mx-auto mt-8 max-w-3xl text-base leading-relaxed text-ink-soft md:text-lg"
        >
          We are one of the leading Swimming Pool Contractors in Dubai —
          creating, designing, and constructing pools and landscapes for clients
          across the UAE. Our portfolio spans concrete pools, commercial and
          residential swimming pools, spas, saunas and steam rooms, water
          features, rock features, fountains, landscaping, pool repair and
          renovation, and full maintenance services.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mx-auto mt-5 max-w-3xl text-base leading-relaxed text-ink-soft md:text-lg"
        >
          At ATS we take the business seriously — and we simply have a passion
          for building beautiful, customized pools and landscapes. If you'd like
          to transform your backyard, rooftop, or development — look no further.{" "}
          <span className="font-semibold text-ink">You Desire. We Fulfill.</span>
        </motion.p>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.1 } },
          }}
          className="mx-auto mt-16 grid max-w-4xl grid-cols-2 gap-6 md:grid-cols-4"
        >
          {STATS.map((s) => (
            <motion.div
              key={s.label}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.6 }}
              className="rounded-2xl border border-black/5 bg-surface-2 p-6"
            >
              <div className="headline text-4xl text-gradient-blue md:text-5xl">
                {s.value}
              </div>
              <div className="mt-2 text-xs font-semibold uppercase tracking-[0.18em] text-mute">
                {s.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
