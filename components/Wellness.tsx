"use client";

import { motion } from "framer-motion";
import {
  Bath,
  Flame,
  Cloud,
  Droplets,
  Fish,
  Sparkles,
  Lightbulb,
  Wrench,
} from "lucide-react";

const ITEMS = [
  { label: "Jacuzzi", Icon: Bath },
  { label: "Sauna", Icon: Flame },
  { label: "Steam Room", Icon: Cloud },
  { label: "Water Features", Icon: Droplets },
  { label: "Fish Ponds", Icon: Fish },
  { label: "Fountains", Icon: Sparkles },
  { label: "LED Lighting", Icon: Lightbulb },
  { label: "Pool Maintenance", Icon: Wrench },
];

export default function Wellness() {
  return (
    <section
      id="wellness"
      className="relative w-full overflow-hidden bg-white py-24 md:py-32"
    >
      <div className="relative z-10 mx-auto max-w-6xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
        >
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-brand-blue">
            Wellness & Add-Ons
          </span>
          <h2 className="headline mt-4 text-4xl text-ink md:text-6xl">
            Complete Water &{" "}
            <span className="text-gradient-blue">Wellness Solutions</span>
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-ink-soft">
            Elevate your pool with bespoke wellness installations — designed,
            engineered, and maintained by ATS.
          </p>
        </motion.div>

        <motion.ul
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.05 } },
          }}
          className="mt-14 flex flex-wrap items-center justify-center gap-3 md:gap-4"
        >
          {ITEMS.map(({ label, Icon }) => (
            <motion.li
              key={label}
              variants={{
                hidden: { opacity: 0, scale: 0.9 },
                visible: { opacity: 1, scale: 1 },
              }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              whileHover={{ scale: 1.06, y: -3 }}
              className="group inline-flex cursor-default items-center gap-2.5 rounded-full border border-black/5 bg-surface-2 px-5 py-3 text-sm font-medium text-ink transition hover:border-brand-blue/40 hover:bg-white hover:shadow-apple"
            >
              <Icon className="h-4 w-4 text-brand-blue" />
              {label}
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
