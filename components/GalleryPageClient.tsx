"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, ArrowLeft, Play } from "lucide-react";
import Link from "next/link";

type MediaItem =
  | { type: "image"; src: string; fit: "cover" | "contain"; span?: 1 | 2 }
  | { type: "video"; src: string; poster?: string; span?: 1 | 2 };

const MEDIA: MediaItem[] = [
  { type: "image", src: "/images/gallery/1.png", fit: "cover", span: 2 },
  { type: "image", src: "/images/gallery/2.png", fit: "cover" },
  { type: "image", src: "/images/gallery/3.png", fit: "cover" },
  { type: "video", src: "/images/gallery/1.mp4", span: 2 },
  { type: "image", src: "/images/gallery/4.png", fit: "contain" },
  { type: "image", src: "/images/gallery/5.png", fit: "cover" },
  { type: "image", src: "/images/gallery/11.png", fit: "cover", span: 2 },
  { type: "image", src: "/images/gallery/6.png", fit: "cover" },
  { type: "image", src: "/images/gallery/7.png", fit: "cover" },
  { type: "video", src: "/images/gallery/2.mp4" },
  { type: "image", src: "/images/gallery/12.png", fit: "cover" },
  { type: "image", src: "/images/gallery/13.png", fit: "cover", span: 2 },
  { type: "image", src: "/images/gallery/8.png", fit: "cover" },
  { type: "image", src: "/images/gallery/14.png", fit: "cover" },
  { type: "image", src: "/images/gallery/9.png", fit: "cover" },
  { type: "video", src: "/images/gallery/3.mp4", span: 2 },
  { type: "image", src: "/images/gallery/15.png", fit: "cover" },
  { type: "image", src: "/images/gallery/16.png", fit: "cover" },
  { type: "image", src: "/images/gallery/10.jpg", fit: "cover" },
];

export default function GalleryPageClient() {
  const [lightbox, setLightbox] = useState<number | null>(null);

  const close = () => setLightbox(null);
  const prev = useCallback(
    () => setLightbox((i) => (i === null ? null : (i - 1 + MEDIA.length) % MEDIA.length)),
    []
  );
  const next = useCallback(
    () => setLightbox((i) => (i === null ? null : (i + 1) % MEDIA.length)),
    []
  );

  useEffect(() => {
    if (lightbox === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [lightbox, prev, next]);

  const activeItem = lightbox !== null ? MEDIA[lightbox] : null;

  return (
    <main className="min-h-screen bg-ink">
      {/* Header */}
      <div className="sticky top-0 z-40 border-b border-white/10 bg-ink/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-white/60 transition hover:text-white"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to site
          </Link>
          <div className="text-center">
            <div className="text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-brand-blue">
              Portfolio
            </div>
            <h1 className="headline text-lg text-white">Our Work</h1>
          </div>
          <span className="text-sm text-white/40">{MEDIA.length} projects</span>
        </div>
      </div>

      {/* Heading */}
      <div className="mx-auto max-w-7xl px-6 pb-6 pt-14 text-center">
        <h2 className="headline text-4xl text-white md:text-5xl">
          Every Pool,{" "}
          <span className="text-gradient-blue">A Signature.</span>
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-sm text-white/50">
          Click any tile to view full-screen · Arrow keys to navigate
        </p>
      </div>

      {/* Auto-flow grid: 2 cols on mobile, 4 cols on desktop. Some items span 2 */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.05 } },
        }}
        className="mx-auto grid max-w-7xl grid-cols-2 gap-3 px-4 pb-20 sm:px-6 md:grid-cols-3 lg:grid-cols-4"
      >
        {MEDIA.map((item, i) => (
          <motion.div
            key={item.src}
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            transition={{ duration: 0.5 }}
            onClick={() => setLightbox(i)}
            className={`group relative h-56 cursor-pointer overflow-hidden rounded-2xl bg-ink-soft md:h-72 ${
              item.span === 2 ? "col-span-2" : ""
            }`}
          >
            {item.type === "image" ? (
              <Image
                src={item.src}
                alt={`Alwahaa project ${i + 1}`}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 33vw, 25vw"
                className={`transition duration-700 group-hover:scale-105 ${
                  item.fit === "contain" ? "object-contain p-4" : "object-cover"
                }`}
              />
            ) : (
              <>
                <video
                  src={`${item.src}#t=0.5`}
                  muted
                  loop
                  playsInline
                  preload="auto"
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  onMouseEnter={(e) => e.currentTarget.play().catch(() => {})}
                  onMouseLeave={(e) => {
                    e.currentTarget.pause();
                    e.currentTarget.currentTime = 0.5;
                  }}
                />
                <div className="pointer-events-none absolute inset-0 flex items-center justify-center transition group-hover:opacity-0">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white/20 backdrop-blur-md">
                    <Play className="h-6 w-6 fill-white text-white" />
                  </div>
                </div>
              </>
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 transition group-hover:opacity-100" />
            <div className="absolute bottom-4 left-4 translate-y-2 text-xs font-semibold uppercase tracking-[0.2em] text-white opacity-0 transition group-hover:translate-y-0 group-hover:opacity-100">
              {item.type === "video" ? "Video " : "Project "}
              {String(i + 1).padStart(2, "0")}
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox !== null && activeItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4"
            onClick={close}
          >
            <motion.div
              key={lightbox}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.97 }}
              transition={{ duration: 0.22 }}
              className="relative max-h-[85vh] w-full max-w-5xl"
              onClick={(e) => e.stopPropagation()}
            >
              {activeItem.type === "image" ? (
                <Image
                  src={activeItem.src}
                  alt={`Project ${lightbox + 1}`}
                  width={1600}
                  height={1000}
                  className="max-h-[85vh] w-full rounded-2xl object-contain"
                  priority
                />
              ) : (
                <video
                  src={activeItem.src}
                  controls
                  autoPlay
                  playsInline
                  className="max-h-[85vh] w-full rounded-2xl bg-black"
                />
              )}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-white backdrop-blur">
                {lightbox + 1} / {MEDIA.length}
              </div>
            </motion.div>

            <button onClick={close} aria-label="Close" className="absolute right-4 top-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur transition hover:bg-white/20">
              <X className="h-5 w-5" />
            </button>
            <button onClick={(e) => { e.stopPropagation(); prev(); }} aria-label="Previous" className="absolute left-4 top-1/2 -translate-y-1/2 inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur transition hover:bg-white/20">
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button onClick={(e) => { e.stopPropagation(); next(); }} aria-label="Next" className="absolute right-4 top-1/2 -translate-y-1/2 inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur transition hover:bg-white/20">
              <ChevronRight className="h-6 w-6" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
