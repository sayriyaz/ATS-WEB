"use client";

import { motion } from "framer-motion";
import {
  Waves,
  Droplets,
  Layers,
  Infinity as InfinityIcon,
  Ruler,
  Sparkles,
  Building2,
  Shell,
  SquareStack,
  Package,
} from "lucide-react";

type Pool = {
  name: string;
  category: "Core" | "Lifestyle" | "Material";
  description: string;
  Icon: React.ComponentType<{ className?: string }>;
};

const POOLS: Pool[] = [
  {
    name: "Concrete Swimming Pool",
    category: "Core",
    description:
      "Fully custom, structurally robust pools built to last decades in Dubai's climate.",
    Icon: Waves,
  },
  {
    name: "Skimmer Pool",
    category: "Core",
    description:
      "Traditional design with surface skimmers for efficient circulation and cleaning.",
    Icon: Droplets,
  },
  {
    name: "Overflow Pool",
    category: "Core",
    description:
      "Mirror-like finish with water flowing over all edges into a hidden gutter system.",
    Icon: Layers,
  },
  {
    name: "Infinity Pool",
    category: "Core",
    description:
      "Vanishing edge that blends seamlessly into the horizon for stunning views.",
    Icon: InfinityIcon,
  },
  {
    name: "Lap Pool",
    category: "Lifestyle",
    description: "Long and narrow, designed for daily swim routines and fitness.",
    Icon: Ruler,
  },
  {
    name: "Plunge Pool",
    category: "Lifestyle",
    description: "Compact luxury pool perfect for relaxation and cooling off in style.",
    Icon: Sparkles,
  },
  {
    name: "Rooftop Pool",
    category: "Lifestyle",
    description:
      "Engineered for towers and penthouses with load-tested structural waterproofing.",
    Icon: Building2,
  },
  {
    name: "Above Ground Pool",
    category: "Lifestyle",
    description: "Flexible, quick-install solutions tailored for villas and compact plots.",
    Icon: SquareStack,
  },
  {
    name: "Vinyl Pool",
    category: "Material",
    description:
      "Smooth, soft-touch vinyl liner with customizable patterns and fast installation.",
    Icon: Package,
  },
  {
    name: "Fibreglass Pool",
    category: "Material",
    description:
      "Pre-molded fibreglass shells with rapid installation and low maintenance.",
    Icon: Shell,
  },
];

const categoryStyles: Record<Pool["category"], string> = {
  Core: "bg-brand-blue/10 text-brand-blue",
  Lifestyle: "bg-[#1a4f9a]/10 text-brand-navy",
  Material: "bg-emerald-500/10 text-emerald-700",
};

export default function PoolTypes() {
  return (
    <section
      id="pools"
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
            What We Build
          </span>
          <h2 className="headline mt-4 text-4xl text-ink md:text-6xl">
            Every Pool.{" "}
            <span className="text-gradient-blue">Every Vision.</span>
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-ink-soft">
            Designed for every space. Engineered for every lifestyle.
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
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
        >
          {POOLS.map(({ name, category, description, Icon }) => (
            <motion.article
              key={name}
              variants={{
                hidden: { opacity: 0, y: 24 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              whileHover={{ y: -4 }}
              className="group relative overflow-hidden rounded-3xl border border-black/5 bg-white p-7 transition-all duration-300 hover:border-brand-blue/40 hover:shadow-apple-lg"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-blue/10 text-brand-blue transition group-hover:bg-brand-blue group-hover:text-white">
                <Icon className="h-6 w-6" />
              </div>
              <span
                className={`mt-5 inline-flex rounded-full px-2.5 py-0.5 text-[0.65rem] font-semibold uppercase tracking-widest ${categoryStyles[category]}`}
              >
                {category}
              </span>
              <h3 className="headline mt-3 text-lg text-ink">{name}</h3>
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
