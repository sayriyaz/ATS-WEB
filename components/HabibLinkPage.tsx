"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import type { ComponentType } from "react";
import {
  BadgeCheck,
  Building2,
  Copy,
  Facebook,
  Globe,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  PhoneCall,
  Save,
  Volume2,
  VolumeX,
} from "lucide-react";

type IconType = ComponentType<{ className?: string }>;

const PROFILE = {
  name: "Habib Rahman",
  role: "Project Manager",
  company: "Alwahaa Technical Services LLC",
  mobile: "+971 52 565 2771",
  email: "habib@alwahaatechnical.com",
  officeEmail: "info@alwahaatechnical.com",
  officeTel: "+971 4 255 2896",
  website: "https://alwahaatechnical.com",
  address:
    "M-01, Mezzanine Floor, Ismail Anbar Building, Port Saeed, Dubai, UAE",
  mapsEmbed:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1804.1468275082866!2d55.32835455581534!3d25.260705221797856!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5cdb0fab28ed%3A0xc8bb3524001dee73!2sAL%20WAHAA%20TECHNICAL%20SERVICE%20L.L.C!5e0!3m2!1sen!2sae!4v1755782907117!5m2!1sen!2sae",
} as const;

const SOCIALS: Array<{ Icon: IconType; href: string; label: string }> = [
  {
    Icon: Instagram,
    href: "https://www.instagram.com/alwahaa_pools/",
    label: "Instagram",
  },
  {
    Icon: Facebook,
    href: "https://www.facebook.com/alwahaapools",
    label: "Facebook",
  },
  {
    Icon: Linkedin,
    href: "https://www.linkedin.com/in/alwahaa-technical-services-llc-7183b080/",
    label: "LinkedIn",
  },
];

const CONTACTS: Array<{
  Icon: IconType;
  label: string;
  value: string;
  href: string;
  copyValue: string;
}> = [
  {
    Icon: Phone,
    label: "Mobile",
    value: PROFILE.mobile,
    href: `tel:${PROFILE.mobile.replace(/[^\d+]/g, "")}`,
    copyValue: PROFILE.mobile,
  },
  {
    Icon: PhoneCall,
    label: "Office",
    value: PROFILE.officeTel,
    href: `tel:${PROFILE.officeTel.replace(/[^\d+]/g, "")}`,
    copyValue: PROFILE.officeTel,
  },
  {
    Icon: Mail,
    label: "Email",
    value: PROFILE.email,
    href: `mailto:${PROFILE.email}`,
    copyValue: PROFILE.email,
  },
  {
    Icon: Mail,
    label: "Office Email",
    value: PROFILE.officeEmail,
    href: `mailto:${PROFILE.officeEmail}`,
    copyValue: PROFILE.officeEmail,
  },
];

function ContactRow({
  Icon,
  label,
  value,
  href,
  copyValue,
  onCopy,
}: {
  Icon: IconType;
  label: string;
  value: string;
  href: string;
  copyValue: string;
  onCopy: (value: string, label: string) => void;
}) {
  return (
    <div className="group flex items-center gap-4 rounded-2xl border border-black/5 bg-white px-5 py-4 transition hover:border-brand-blue/40 hover:shadow-apple">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-surface-2 text-brand-blue transition group-hover:scale-110">
        <Icon className="h-5 w-5" />
      </div>
      <div className="min-w-0 flex-1 text-left">
        <div className="text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-mute">
          {label}
        </div>
        <a
          href={href}
          className="block truncate text-sm font-semibold text-ink transition hover:text-brand-blue"
        >
          {value}
        </a>
      </div>
      <button
        type="button"
        onClick={() => onCopy(copyValue, label)}
        className="rounded-lg border border-black/5 bg-surface-2 p-2 text-mute transition hover:text-brand-blue"
        aria-label={`Copy ${label}`}
      >
        <Copy className="h-4 w-4" />
      </button>
    </div>
  );
}

function LinkButton({
  href,
  icon: Icon,
  label,
  primary = false,
  download,
}: {
  href: string;
  icon: IconType;
  label: string;
  primary?: boolean;
  download?: string;
}) {
  return (
    <a
      href={href}
      target={download ? undefined : "_blank"}
      rel={download ? undefined : "noopener noreferrer"}
      download={download}
      className={
        primary
          ? "inline-flex w-full items-center justify-center gap-3 rounded-full bg-[#25D366] px-7 py-4 text-sm font-semibold text-white transition hover:bg-[#1ebe5a]"
          : "group flex w-full items-center justify-between gap-4 rounded-2xl border border-black/5 bg-white px-5 py-4 transition hover:border-brand-blue/40 hover:shadow-apple"
      }
    >
      <div className="flex items-center gap-3">
        <span
          className={
            primary
              ? ""
              : "flex h-10 w-10 items-center justify-center rounded-xl bg-surface-2 text-brand-blue transition group-hover:scale-110"
          }
        >
          <Icon className="h-5 w-5" />
        </span>
        <span className={primary ? "" : "text-sm font-semibold text-ink"}>
          {label}
        </span>
      </div>
      {!primary && (
        <span className="text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-mute">
          {download ? "Download" : "Open"}
        </span>
      )}
    </a>
  );
}

export default function HabibLinkPage() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [muted, setMuted] = useState(true);
  const [status, setStatus] = useState("");
  const [clientInfo, setClientInfo] = useState({
    ip: "Detecting...",
    ua: "Detecting device...",
  });

  useEffect(() => {
    setClientInfo((current) => ({
      ...current,
      ua: navigator.userAgent,
    }));

    fetch("https://api.ipify.org?format=json")
      .then((response) => response.json())
      .then((data: { ip?: string }) => {
        setClientInfo((current) => ({
          ...current,
          ip: data.ip || "Unavailable",
        }));
      })
      .catch(() => {
        setClientInfo((current) => ({
          ...current,
          ip: "Unavailable",
        }));
      });
  }, []);

  useEffect(() => {
    if (!status) {
      return;
    }

    const timer = window.setTimeout(() => setStatus(""), 2200);
    return () => window.clearTimeout(timer);
  }, [status]);

  const whatsappHref = useMemo(
    () =>
      `https://wa.me/${PROFILE.mobile.replace(/[^\d]/g, "")}?text=${encodeURIComponent(
        "Hi Habib, I'm reaching out about swimming pool services."
      )}`,
    []
  );

  const vcardData = useMemo(() => {
    const lines = [
      "BEGIN:VCARD",
      "VERSION:3.0",
      `N:Rahman;Habib;;;`,
      `FN:${PROFILE.name}`,
      `ORG:${PROFILE.company}`,
      `TITLE:${PROFILE.role}`,
      `TEL;TYPE=CELL:${PROFILE.mobile}`,
      `TEL;TYPE=WORK,VOICE:${PROFILE.officeTel}`,
      `EMAIL;TYPE=WORK:${PROFILE.email}`,
      `EMAIL;TYPE=WORK:${PROFILE.officeEmail}`,
      `ADR;TYPE=WORK:;;${PROFILE.address};;;;`,
      `URL:${PROFILE.website}`,
      "END:VCARD",
    ].join("\n");

    return `data:text/vcard;charset=utf-8,${encodeURIComponent(lines)}`;
  }, []);

  const copyToClipboard = async (value: string, label: string) => {
    try {
      await navigator.clipboard.writeText(value);
      setStatus(`${label} copied`);
    } catch {
      setStatus(`Could not copy ${label.toLowerCase()}`);
    }
  };

  const toggleSound = async () => {
    const audio = audioRef.current;

    if (!audio) {
      return;
    }

    if (muted) {
      try {
        audio.currentTime = 0;
        await audio.play();
        setMuted(false);
      } catch {
        setStatus("Browser blocked autoplay. Try again.");
      }
      return;
    }

    audio.pause();
    setMuted(true);
  };

  return (
    <main className="relative min-h-screen w-full overflow-hidden bg-white px-6 py-12">
      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 50% 30%, rgba(0,170,255,0.12) 0%, rgba(255,255,255,0) 60%), radial-gradient(ellipse 60% 50% at 20% 80%, rgba(26,79,154,0.10) 0%, rgba(255,255,255,0) 60%)",
          }}
        />
        <div className="absolute left-1/2 top-1/2 h-[900px] w-[900px] -translate-x-1/2 -translate-y-1/2">
          {[0, 1.8, 3.6, 5.4].map((delay, index) => (
            <span
              key={index}
              className="water-ripple left-1/2 top-1/2 h-72 w-72"
              style={{ animationDelay: `${delay}s` }}
            />
          ))}
        </div>
      </div>

      <div className="relative z-10 mx-auto flex max-w-2xl flex-col items-center text-center">
        <Link href="/" aria-label="Go to Alwahaa Technical Services home">
          <Image
            src="/images/logo.png"
            alt="Alwahaa Technical Services"
            width={240}
            height={76}
            priority
            className="h-16 w-auto md:h-20"
          />
        </Link>

        <span className="mt-10 inline-flex items-center gap-2 rounded-full border border-black/5 bg-surface-2 px-4 py-1.5 text-[0.7rem] font-semibold uppercase tracking-[0.28em] text-brand-blue">
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-blue opacity-75" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-brand-blue" />
          </span>
          {PROFILE.role} · ATS
        </span>

        <h1 className="headline mt-6 text-4xl leading-[1.05] text-ink md:text-6xl">
          <span className="text-gradient-blue">{PROFILE.name}</span>
          <span className="ml-2 inline-block align-middle">
            <BadgeCheck className="inline h-7 w-7 text-brand-blue md:h-9 md:w-9" />
          </span>
        </h1>

        <p className="mt-6 max-w-xl text-base font-medium text-ink-soft md:text-lg">
          <Building2 className="mr-2 inline h-4 w-4 text-brand-blue" />
          {PROFILE.company}
        </p>
        <p className="mt-2 text-sm font-medium tracking-[0.18em] text-mute">
          For Your Expectations, We Build With Passion.
        </p>

        <div className="mt-10 grid w-full max-w-xl grid-cols-1 gap-3 sm:grid-cols-2">
          {CONTACTS.map((contact) => (
            <ContactRow
              key={contact.label}
              {...contact}
              onCopy={copyToClipboard}
            />
          ))}
        </div>

        <div className="mt-3 flex w-full max-w-xl items-start gap-4 rounded-2xl border border-black/5 bg-white px-5 py-4 text-left">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-surface-2 text-brand-blue">
            <MapPin className="h-5 w-5" />
          </div>
          <div className="min-w-0">
            <div className="text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-mute">
              Address
            </div>
            <div className="text-sm font-medium text-ink">{PROFILE.address}</div>
          </div>
        </div>

        <div className="mt-8 w-full max-w-md">
          <LinkButton
            href={whatsappHref}
            icon={MessageCircle}
            label="Chat on WhatsApp"
            primary
          />
        </div>

        <div className="mt-4 grid w-full max-w-xl grid-cols-1 gap-3 sm:grid-cols-2">
          <LinkButton
            href={PROFILE.website}
            icon={Globe}
            label="Visit Website"
          />
          <LinkButton
            href={vcardData}
            icon={Save}
            label="Save Contact (vCard)"
            download="HabibRahman-ATS.vcf"
          />
        </div>

        <div className="mt-8 w-full overflow-hidden rounded-2xl border border-black/5 shadow-apple">
          <iframe
            title="Habib Rahman - Alwahaa Technical Services location"
            src={PROFILE.mapsEmbed}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="h-80 w-full border-0"
            allowFullScreen
          />
        </div>

        <div className="mt-10 flex items-center gap-3">
          {SOCIALS.map(({ Icon, href, label }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-black/10 bg-white text-ink-soft transition hover:border-brand-blue hover:text-brand-blue"
            >
              <Icon className="h-4 w-4" />
            </a>
          ))}
        </div>

        <div className="mt-8 w-full max-w-xl rounded-2xl border border-black/5 bg-surface-2 px-5 py-4 text-left text-xs text-mute">
          <p>
            <span className="font-semibold text-ink-soft">Your IP:</span>{" "}
            {clientInfo.ip}
          </p>
          <p className="mt-1 break-words">
            <span className="font-semibold text-ink-soft">User Agent:</span>{" "}
            {clientInfo.ua}
          </p>
        </div>

        {status ? (
          <div className="mt-6 rounded-full border border-brand-blue/20 bg-brand-blue/10 px-4 py-2 text-sm font-medium text-brand-blue">
            {status}
          </div>
        ) : null}

        <p className="mt-10 text-xs text-mute">
          © {new Date().getFullYear()} Alwahaa Technical Services LLC — Dubai,
          UAE
        </p>
      </div>

      <div className="fixed bottom-4 right-4 z-50">
        <button
          type="button"
          onClick={toggleSound}
          className="inline-flex items-center gap-2 rounded-full border border-black/5 bg-white px-4 py-2 text-sm font-semibold text-ink shadow-apple transition hover:border-brand-blue/40"
          title={muted ? "Enable waves" : "Mute waves"}
        >
          {muted ? (
            <VolumeX className="h-4 w-4 text-brand-blue" />
          ) : (
            <Volume2 className="h-4 w-4 text-brand-blue" />
          )}
          <span>{muted ? "Enable Waves" : "Waves On"}</span>
        </button>
      </div>

      <audio ref={audioRef} loop preload="metadata" playsInline>
        <source src="/habib/waves.mp3" type="audio/mpeg" />
      </audio>
    </main>
  );
}
