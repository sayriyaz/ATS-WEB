import type { Metadata } from "next";
import Link from "next/link";
import { getAllPosts } from "@/lib/blog";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Blog | Alwahaa Technical Services LLC",
  description:
    "Swimming pool tips, cost guides, maintenance advice, and project insights from Dubai's leading pool contractor — Alwahaa Technical Services.",
  alternates: { canonical: "https://alwahaatechnical.com/blog" },
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white pt-24 pb-24">
        <div className="mx-auto max-w-4xl px-6">
          <div className="mb-14 text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-brand-blue">
              Insights & Guides
            </span>
            <h1 className="headline mt-4 text-4xl text-ink md:text-5xl">
              Pool Building &amp; Maintenance Blog
            </h1>
            <p className="mx-auto mt-4 max-w-xl text-lg text-ink-soft">
              Expert advice from Dubai's leading swimming pool contractor — cost
              guides, design inspiration, and maintenance tips.
            </p>
          </div>

          {posts.length === 0 ? (
            <p className="text-center text-ink-soft">No posts yet. Check back soon.</p>
          ) : (
            <div className="space-y-8">
              {posts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group block rounded-3xl border border-black/5 bg-white p-8 transition hover:border-brand-blue/30 hover:shadow-apple-lg"
                >
                  <div className="flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-mute">
                    <span className="rounded-full bg-brand-blue/10 px-3 py-1 text-brand-blue">
                      {post.category}
                    </span>
                    <span>{post.date}</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h2 className="headline mt-4 text-2xl text-ink group-hover:text-brand-blue transition">
                    {post.title}
                  </h2>
                  <p className="mt-3 text-ink-soft">{post.description}</p>
                  <span className="mt-4 inline-block text-sm font-semibold text-brand-blue">
                    Read more →
                  </span>
                </Link>
              ))}
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
