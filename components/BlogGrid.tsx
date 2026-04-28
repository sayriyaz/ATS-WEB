"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import type { PostMeta } from "@/lib/blog";

export default function BlogGrid({ posts }: { posts: PostMeta[] }) {
  const categories = useMemo(() => {
    const set = new Set(posts.map((p) => p.category));
    return ["All", ...Array.from(set)];
  }, [posts]);

  const [activeCat, setActiveCat] = useState("All");

  const filtered = activeCat === "All" ? posts : posts.filter((p) => p.category === activeCat);
  const featured = filtered[0];
  const rest = filtered.slice(1);

  return (
    <div className="mx-auto max-w-7xl px-6 lg:px-10">
      {/* Category filter */}
      <div className="sticky top-20 z-10 -mx-6 mt-6 mb-10 overflow-x-auto bg-white/80 px-6 py-4 backdrop-blur-xl lg:-mx-10 lg:px-10">
        <div className="flex gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCat(cat)}
              className={`whitespace-nowrap rounded-full px-4 py-2 text-sm font-semibold transition ${
                activeCat === cat
                  ? "bg-brand-blue text-white shadow-sm"
                  : "bg-surface-2 text-ink hover:bg-black/[0.08]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {filtered.length === 0 ? (
        <p className="py-20 text-center text-ink-soft">No posts in this category yet.</p>
      ) : (
        <>
          {/* Featured hero card */}
          {featured && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-10"
            >
              <Link
                href={`/blog/${featured.slug}`}
                className="group relative block overflow-hidden rounded-3xl bg-surface-2"
              >
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  <div className="relative aspect-[16/10] lg:aspect-auto lg:min-h-[440px]">
                    <Image
                      src={featured.coverImage}
                      alt={featured.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover transition duration-700 group-hover:scale-[1.03]"
                      priority
                    />
                  </div>
                  <div className="flex flex-col justify-center p-8 lg:p-14">
                    <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-brand-blue">
                      <span>Featured</span>
                      <span className="h-1 w-1 rounded-full bg-brand-blue" />
                      <span className="text-mute">{featured.category}</span>
                    </div>
                    <h2 className="headline mt-4 text-3xl text-ink md:text-4xl group-hover:text-brand-blue transition">
                      {featured.title}
                    </h2>
                    <p className="mt-4 text-base text-ink-soft md:text-lg">
                      {featured.description}
                    </p>
                    <div className="mt-6 flex items-center gap-4 text-xs text-mute">
                      <span>{formatDate(featured.date)}</span>
                      <span className="h-1 w-1 rounded-full bg-mute" />
                      <span>{featured.readTime}</span>
                    </div>
                    <span className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-brand-blue">
                      Read story →
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          )}

          {/* Grid */}
          {rest.length > 0 && (
            <motion.div
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.08 } },
              }}
              className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
            >
              {rest.map((post) => (
                <motion.div
                  key={post.slug}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 },
                  }}
                >
                  <Link
                    href={`/blog/${post.slug}`}
                    className="group block overflow-hidden rounded-3xl bg-surface-2 transition hover:shadow-apple-lg"
                  >
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <Image
                        src={post.coverImage}
                        alt={post.title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-cover transition duration-700 group-hover:scale-[1.05]"
                      />
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-brand-blue">
                        <span>{post.category}</span>
                      </div>
                      <h3 className="headline mt-3 text-xl text-ink group-hover:text-brand-blue transition leading-snug">
                        {post.title}
                      </h3>
                      <p className="mt-3 line-clamp-2 text-sm text-ink-soft">
                        {post.description}
                      </p>
                      <div className="mt-5 flex items-center gap-3 text-xs text-mute">
                        <span>{formatDate(post.date)}</span>
                        <span className="h-1 w-1 rounded-full bg-mute" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          )}
        </>
      )}
    </div>
  );
}

function formatDate(date: string) {
  return new Date(date).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}
