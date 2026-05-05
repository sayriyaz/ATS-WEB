import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import QuoteForm from "@/components/QuoteForm";
import { Phone, MessageCircle, Mail, Clock, MapPin } from "lucide-react";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://alwahaatechnical.com";

export const metadata: Metadata = {
  title: "Get a Free Quote | Alwahaa Technical Services LLC",
  description:
    "Request a free, no-obligation quote for swimming pool construction, maintenance, jacuzzi installation, water features, or landscaping in Dubai and the UAE. Response within minutes during business hours.",
  alternates: { canonical: `${siteUrl}/quote` },
  openGraph: {
    title: "Get a Free Quote | Alwahaa Technical Services LLC",
    description:
      "Free quote for pool construction, maintenance, jacuzzi, water features, and landscaping across Dubai and the UAE.",
    url: `${siteUrl}/quote`,
  },
};

const CONTACTS = [
  {
    Icon: MessageCircle,
    label: "WhatsApp / Mobile",
    value: "+971 52 565 2771",
    href: "https://wa.me/971525652771?text=Hi%20ATS%2C%20I%27d%20like%20a%20quote%20for%20a%20pool.",
    target: "_blank",
    accent: "text-[#25D366]",
  },
  {
    Icon: Phone,
    label: "Office",
    value: "+971 4 255 2895",
    href: "tel:+97142552895",
    accent: "text-brand-blue",
  },
  {
    Icon: Mail,
    label: "Email",
    value: "info@alwahaatechnical.com",
    href: "mailto:info@alwahaatechnical.com",
    accent: "text-brand-blue",
  },
];

export default function QuotePage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white pt-24 pb-24">
        <div className="mx-auto max-w-6xl px-6 lg:px-10">
          {/* Header */}
          <div className="text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-brand-blue">
              Free Quote
            </span>
            <h1 className="headline mt-4 text-4xl text-ink md:text-5xl lg:text-6xl">
              Tell us about your{" "}
              <span className="text-gradient-blue">dream pool.</span>
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-lg text-ink-soft">
              Share a few details and our team will reach out with a no-obligation
              quote. Free site assessment included for projects in Dubai and the UAE.
            </p>
          </div>

          <div className="mt-14 grid grid-cols-1 gap-10 lg:grid-cols-5">
            {/* Form */}
            <div className="lg:col-span-3">
              <QuoteForm />
            </div>

            {/* Side panel */}
            <aside className="lg:col-span-2">
              <div className="rounded-3xl border border-black/5 bg-surface-2 p-6 sm:p-8">
                <h2 className="headline text-xl text-ink">
                  Prefer to talk now?
                </h2>
                <p className="mt-2 text-sm text-ink-soft">
                  Reach our team directly on any of these channels.
                </p>

                <div className="mt-6 space-y-3">
                  {CONTACTS.map(({ Icon, label, value, href, target, accent }) => (
                    <a
                      key={label}
                      href={href}
                      target={target}
                      rel={target ? "noopener noreferrer" : undefined}
                      className="group flex items-center gap-4 rounded-2xl border border-black/5 bg-white px-4 py-3 transition hover:border-brand-blue/40 hover:shadow-apple"
                    >
                      <div
                        className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-surface-2 ${accent} transition group-hover:scale-110`}
                      >
                        <Icon className="h-5 w-5" />
                      </div>
                      <div className="min-w-0">
                        <div className="text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-mute">
                          {label}
                        </div>
                        <div className="truncate text-sm font-semibold text-ink">
                          {value}
                        </div>
                      </div>
                    </a>
                  ))}
                </div>

                <div className="mt-8 space-y-3 text-sm text-ink-soft">
                  <div className="flex items-start gap-3">
                    <Clock className="mt-0.5 h-4 w-4 shrink-0 text-brand-blue" />
                    <span>
                      <span className="font-semibold text-ink">
                        Mon – Sat, 8:00 AM – 6:30 PM
                      </span>{" "}
                      (UAE time)
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand-blue" />
                    <span>
                      5 10A St, Port Saeed, Deira, Dubai, UAE
                      <br />
                      P.O. Box 91270
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-6 rounded-3xl bg-ink p-6 text-white sm:p-8">
                <h3 className="headline text-lg">Why choose ATS?</h3>
                <ul className="mt-4 space-y-2.5 text-sm text-white/80">
                  <li>• 15+ years building pools across the UAE</li>
                  <li>• 500+ projects completed since 2008</li>
                  <li>• Civil contractor licensed & insured</li>
                  <li>• Dubai Municipality permits handled</li>
                  <li>• Free site assessment included</li>
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
