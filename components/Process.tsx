"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const STEPS = [
  {
    title: "Consultation & Design",
    description:
      "We listen to your vision, visit your site, and craft bespoke 3D designs tailored to your space and lifestyle.",
  },
  {
    title: "Site Preparation",
    description:
      "Excavation, structural engineering, and utility planning — executed with precision before a single pour.",
  },
  {
    title: "Construction & Installation",
    description:
      "Gunite, waterproofing, plumbing, tiling, and filtration installed by Dubai's most experienced pool teams.",
  },
  {
    title: "Finishing & Testing",
    description:
      "Premium finishes, LED lighting, water features, and rigorous multi-stage leak and system testing.",
  },
  {
    title: "Handover & Maintenance",
    description:
      "Commissioning, client training, and ongoing maintenance plans to keep your pool crystal clear year-round.",
  },
];

export default function Process() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 80%", "end 20%"],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section
      id="process"
      className="relative w-full overflow-hidden bg-white py-24 md:py-32"
    >
      <div className="relative z-10 mx-auto max-w-5xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="mb-20 text-center"
        >
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-brand-blue">
            Our Process
          </span>
          <h2 className="headline mt-4 text-4xl text-ink md:text-6xl">
            From Concept to{" "}
            <span className="text-gradient-blue">Crystal Clear Reality</span>
          </h2>
        </motion.div>

        <div ref={ref} className="relative">
          <div className="absolute left-5 top-0 h-full w-[2px] bg-black/10 md:left-1/2 md:-translate-x-1/2" />
          <motion.div
            style={{ height: lineHeight }}
            className="absolute left-5 top-0 w-[2px] bg-gradient-to-b from-[#00d4ff] via-brand-blue to-brand-navy md:left-1/2 md:-translate-x-1/2"
          />

          <div className="flex flex-col gap-12 md:gap-20">
            {STEPS.map((step, i) => {
              const isLeft = i % 2 === 0;
              return (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.6, delay: i * 0.05 }}
                  className={`relative flex items-start gap-6 md:items-center ${
                    isLeft ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  <div className="absolute left-5 z-10 -translate-x-1/2 md:left-1/2">
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.5,
                        delay: i * 0.1,
                        type: "spring",
                      }}
                      className="flex h-11 w-11 items-center justify-center rounded-full bg-white font-semibold text-brand-blue shadow-apple ring-2 ring-brand-blue"
                    >
                      {i + 1}
                    </motion.div>
                  </div>

                  <div className="hidden md:block md:w-1/2" />

                  <div
                    className={`ml-14 flex-1 md:ml-0 md:w-1/2 ${
                      isLeft ? "md:pl-12 md:text-left" : "md:pr-12 md:text-right"
                    }`}
                  >
                    <div className="rounded-3xl border border-black/5 bg-surface-3 p-6 transition hover:bg-white hover:shadow-apple">
                      <h3 className="headline text-xl text-ink md:text-2xl">
                        {step.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-ink-soft md:text-base">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
