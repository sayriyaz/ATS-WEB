"use client";

import { motion } from "framer-motion";
import {
  Hammer,
  Wrench,
  Bath,
  Droplets,
  TreePine,
  Trees,
  Mountain,
  ShoppingBag,
} from "lucide-react";

const SERVICES = [
  {
    title: "Swimming Pool Installation",
    description:
      "Full turn-key construction — concrete, infinity, skimmer, overflow, and rooftop pools.",
    Icon: Hammer,
  },
  {
    title: "Pool Maintenance",
    description:
      "Routine servicing, water chemistry, filtration, and equipment care — keeping pools crystal clear year-round.",
    Icon: Wrench,
  },
  {
    title: "Jacuzzis",
    description:
      "Custom-built and pre-fab jacuzzi installations with premium jets, lighting, and heating.",
    Icon: Bath,
  },
  {
    title: "Water Features",
    description:
      "Fountains, cascades, rock features, and reflection pools — designed and engineered in-house.",
    Icon: Droplets,
  },
  {
    title: "Gazebos & Pergolas",
    description:
      "Bespoke outdoor structures that complement your pool and landscape architecture.",
    Icon: TreePine,
  },
  {
    title: "Landscaping",
    description:
      "Soft-scape design — lawns, planting, irrigation, and garden architecture across Dubai.",
    Icon: Trees,
  },
  {
    title: "Hardscaping",
    description:
      "Paving, decking, retaining walls, and outdoor tile work built to last in UAE climate.",
    Icon: Mountain,
  },
  {
    title: "Trading",
    description:
      "Supply of pool equipment, chemicals, tiles, fittings, and accessories to the trade.",
    Icon: ShoppingBag,
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="relative w-full overflow-hidden bg-white py-24 md:py-32"
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
            Our Services
          </span>
          <h2 className="headline mt-4 text-4xl text-ink md:text-6xl">
            Everything You Need.{" "}
            <span className="text-gradient-blue">Under One Roof.</span>
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-ink-soft">
            From first excavation to final polish — ATS handles every phase of
            your pool, landscape, and outdoor project.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.06 } },
          }}
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4"
        >
          {SERVICES.map(({ title, description, Icon }) => (
            <motion.article
              key={title}
              variants={{
                hidden: { opacity: 0, y: 24 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.5 }}
              whileHover={{ y: -4 }}
              className="group rounded-3xl border border-black/5 bg-surface-3 p-7 transition hover:border-brand-blue/40 hover:bg-white hover:shadow-apple-lg"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-blue/10 text-brand-blue transition group-hover:bg-brand-blue group-hover:text-white">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="headline mt-5 text-lg text-ink">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                {description}
              </p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
