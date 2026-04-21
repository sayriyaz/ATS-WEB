"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { GALLERY_IMAGES } from "@/lib/images";

export default function Gallery() {
  return (
    <section
      id="gallery"
      className="relative w-full overflow-hidden bg-surface-2 py-24 md:py-32"
    >
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="mb-14 text-center"
        >
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-brand-blue">
            Portfolio
          </span>
          <h2 className="headline mt-4 text-4xl text-ink md:text-6xl">
            Our Latest{" "}
            <span className="text-gradient-blue">Work.</span>
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-ink-soft">
            A selection of signature pools we've built across Dubai and the UAE.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.07 } },
          }}
          className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4"
        >
          {GALLERY_IMAGES.map((src, i) => (
            <motion.figure
              key={src}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.5 }}
              className={`group relative overflow-hidden rounded-2xl bg-black ${
                i === 0 || i === 5 ? "md:col-span-2 md:row-span-2" : ""
              }`}
            >
              <div className="relative aspect-square w-full md:aspect-auto md:h-full md:min-h-[220px]">
                <Image
                  src={src}
                  alt={`Pool project ${i + 1}`}
                  fill
                  sizes="(min-width: 768px) 25vw, 50vw"
                  className="object-cover transition duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition group-hover:opacity-100" />
                <div className="absolute bottom-3 left-3 translate-y-2 text-xs font-semibold uppercase tracking-[0.2em] text-white opacity-0 transition group-hover:translate-y-0 group-hover:opacity-100">
                  Project {String(i + 1).padStart(2, "0")}
                </div>
              </div>
            </motion.figure>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-12 flex justify-center"
        >
          <a
            href="#cta"
            className="group inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-7 py-3.5 text-sm font-semibold text-ink transition hover:border-brand-blue hover:text-brand-blue"
          >
            View Full Gallery
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
