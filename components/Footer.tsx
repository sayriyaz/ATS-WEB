"use client";

import Image from "next/image";
import { Facebook, Instagram, Linkedin, Youtube } from "lucide-react";

const NAV_LINKS = [
  { href: "#about", label: "About" },
  { href: "#commercial", label: "Pools" },
  { href: "#services", label: "Services" },
  { href: "#gallery", label: "Gallery" },
  { href: "/blog", label: "Blog" },
  { href: "#cta", label: "Contact" },
];

const SOCIALS = [
  {
    Icon: Facebook,
    href: "https://www.facebook.com/alwahaapools",
    label: "Facebook",
  },
  {
    Icon: Instagram,
    href: "https://www.instagram.com/alwahaa_pools/",
    label: "Instagram",
  },
  {
    Icon: Linkedin,
    href: "https://www.linkedin.com/in/alwahaa-technical-services-llc-7183b080/",
    label: "LinkedIn",
  },
  { Icon: Youtube, href: "#", label: "YouTube" },
];

export default function Footer() {
  return (
    <footer className="relative w-full border-t border-black/5 bg-white py-14">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          <div>
            <Image
              src="/images/logo.png"
              alt="Alwahaa Technical Services"
              width={240}
              height={64}
              className="h-11 w-auto"
            />
            <p className="mt-4 max-w-xs text-sm italic text-brand-blue">
              "For Your Expectations, We Build With Passion."
            </p>
            <a
              href="https://maps.app.goo.gl/V3Ekqs9VeJK3ENjz7"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 block text-sm text-mute transition hover:text-brand-blue"
            >
              P.O. Box: 91270
              <br />
              Dubai, United Arab Emirates
            </a>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.22em] text-mute">
              Explore
            </h4>
            <ul className="mt-4 space-y-2">
              {NAV_LINKS.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-sm text-ink-soft transition hover:text-brand-blue"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.22em] text-mute">
              Connect
            </h4>
            <ul className="mt-4 flex gap-3">
              {SOCIALS.map(({ Icon, href, label }) => (
                <li key={label}>
                  <a
                    href={href}
                    aria-label={label}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-black/10 bg-white text-ink-soft transition hover:border-brand-blue hover:text-brand-blue"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm text-ink-soft">
              <a
                href="mailto:info@alwahaatechnical.com"
                className="hover:text-brand-blue"
              >
                info@alwahaatechnical.com
              </a>
            </p>
            <p className="mt-1 text-sm text-ink-soft">
              <a
                href="mailto:alwahaatechnical@gmail.com"
                className="hover:text-brand-blue"
              >
                alwahaatechnical@gmail.com
              </a>
            </p>
            <p className="mt-1 text-sm text-ink-soft">
              <a
                href="tel:+97142552895"
                className="hover:text-brand-blue"
              >
                +971 4 255 2895
              </a>
            </p>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-black/5 pt-6 md:flex-row">
          <p className="text-xs text-mute">
            © {new Date().getFullYear()} Alwahaa Technical Services LLC. All
            rights reserved.
          </p>
          <p className="text-xs text-mute">
            Crafted with passion in Dubai, UAE
          </p>
        </div>
      </div>
    </footer>
  );
}
