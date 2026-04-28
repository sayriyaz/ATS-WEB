import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getAllPosts, getPost } from "@/lib/blog";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowLeft, Phone, MessageCircle } from "lucide-react";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://alwahaatechnical.com";

export async function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const post = getPost(params.slug);
  if (!post) return {};
  return {
    title: `${post.title} | Alwahaa Technical Services`,
    description: post.description,
    alternates: { canonical: `${siteUrl}/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.description,
      url: `${siteUrl}/blog/${post.slug}`,
      type: "article",
      publishedTime: post.date,
    },
  };
}

const mdxComponents = {
  h2: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h2 className="headline mt-12 text-2xl text-ink" {...props} />
  ),
  h3: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h3 className="headline mt-8 text-xl text-ink" {...props} />
  ),
  p: (props: React.HTMLAttributes<HTMLParagraphElement>) => (
    <p className="mt-5 text-ink-soft leading-relaxed" {...props} />
  ),
  ul: (props: React.HTMLAttributes<HTMLUListElement>) => (
    <ul className="mt-5 space-y-2 pl-5 list-disc text-ink-soft" {...props} />
  ),
  ol: (props: React.HTMLAttributes<HTMLOListElement>) => (
    <ol className="mt-5 space-y-2 pl-5 list-decimal text-ink-soft" {...props} />
  ),
  li: (props: React.HTMLAttributes<HTMLLIElement>) => (
    <li className="leading-relaxed" {...props} />
  ),
  table: (props: React.HTMLAttributes<HTMLTableElement>) => (
    <div className="mt-6 overflow-x-auto rounded-2xl border border-black/5">
      <table className="w-full text-sm" {...props} />
    </div>
  ),
  thead: (props: React.HTMLAttributes<HTMLTableSectionElement>) => (
    <thead className="bg-surface-2 text-xs uppercase tracking-widest text-mute" {...props} />
  ),
  th: (props: React.HTMLAttributes<HTMLTableCellElement>) => (
    <th className="px-4 py-3 text-left font-semibold" {...props} />
  ),
  td: (props: React.HTMLAttributes<HTMLTableCellElement>) => (
    <td className="border-t border-black/5 px-4 py-3 text-ink-soft" {...props} />
  ),
  strong: (props: React.HTMLAttributes<HTMLElement>) => (
    <strong className="font-semibold text-ink" {...props} />
  ),
  blockquote: (props: React.HTMLAttributes<HTMLElement>) => (
    <blockquote
      className="mt-6 border-l-4 border-brand-blue pl-6 italic text-ink-soft"
      {...props}
    />
  ),
};

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getPost(params.slug);
  if (!post) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    dateModified: post.date,
    author: {
      "@type": "Organization",
      name: "Alwahaa Technical Services LLC",
      url: siteUrl,
    },
    publisher: {
      "@type": "Organization",
      name: "Alwahaa Technical Services LLC",
      logo: { "@type": "ImageObject", url: `${siteUrl}/images/logo.png` },
    },
    mainEntityOfPage: { "@type": "WebPage", "@id": `${siteUrl}/blog/${post.slug}` },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <main className="min-h-screen bg-white pt-24 pb-24">
        <div className="mx-auto max-w-3xl px-6">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm text-mute hover:text-brand-blue transition mb-10"
          >
            <ArrowLeft className="h-4 w-4" /> Back to Blog
          </Link>

          <div className="flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-mute">
            <span className="rounded-full bg-brand-blue/10 px-3 py-1 text-brand-blue">
              {post.category}
            </span>
            <span>{post.date}</span>
            <span>{post.readTime}</span>
          </div>

          <h1 className="headline mt-6 text-3xl text-ink md:text-4xl leading-tight">
            {post.title}
          </h1>
          <p className="mt-4 text-lg text-ink-soft">{post.description}</p>

          <div className="mt-4 text-xs text-mute">
            By <span className="font-semibold text-ink">Alwahaa Technical Services LLC</span> · Dubai, UAE
          </div>

          <hr className="mt-10 border-black/5" />

          <article className="mt-10">
            <MDXRemote source={post.content} components={mdxComponents} />
          </article>

          {/* CTA */}
          <div className="mt-16 rounded-3xl bg-surface-2 p-8 text-center">
            <h2 className="headline text-2xl text-ink">Ready to Build Your Pool?</h2>
            <p className="mt-3 text-ink-soft">
              Get a free quote from Dubai's most experienced pool contractor.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <a
                href="https://wa.me/971525652771?text=Hi%20ATS%2C%20I%27d%20like%20a%20quote%20for%20a%20pool."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-6 py-3 text-sm font-semibold text-white hover:bg-[#1ebe5a] transition"
              >
                <MessageCircle className="h-4 w-4" /> WhatsApp Us
              </a>
              <a
                href="tel:+97142552895"
                className="inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-semibold text-white hover:bg-brand-blue transition"
              >
                <Phone className="h-4 w-4" /> Call Now
              </a>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
