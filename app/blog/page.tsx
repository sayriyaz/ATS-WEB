import type { Metadata } from "next";
import { getAllPosts } from "@/lib/blog";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BlogGrid from "@/components/BlogGrid";

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
        {/* Header */}
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="border-b border-black/5 pb-8">
            <h1 className="headline text-4xl text-ink md:text-5xl">Newsroom</h1>
            <p className="mt-3 text-lg text-ink-soft">
              Insights, guides, and stories from Dubai's leading pool contractor.
            </p>
          </div>
        </div>

        <BlogGrid posts={posts} />
      </main>
      <Footer />
    </>
  );
}
