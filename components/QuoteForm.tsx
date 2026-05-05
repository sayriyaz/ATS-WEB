"use client";

import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";

const ACCESS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_KEY || "";

type Status = "idle" | "sending" | "success" | "error";

export default function QuoteForm() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    location: "",
    message: "",
  });
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!ACCESS_KEY) {
      setStatus("error");
      setErrorMsg("Form not configured. Please contact us via WhatsApp.");
      return;
    }
    setStatus("sending");
    setErrorMsg("");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: ACCESS_KEY,
          subject: `New Quote Request from ${form.name}`,
          from_name: "Alwahaa Website — /quote Page",
          name: form.name,
          phone: form.phone,
          email: form.email,
          location: form.location,
          message: form.message,
        }),
      });
      const data = await res.json();
      if (data.success) setStatus("success");
      else {
        setStatus("error");
        setErrorMsg(data.message || "Something went wrong. Please try again.");
      }
    } catch {
      setStatus("error");
      setErrorMsg("Network error. Please check your connection and retry.");
    }
  };

  if (status === "success") {
    return (
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        className="rounded-3xl border border-black/5 bg-white p-10 text-center shadow-apple"
      >
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-50 text-green-600">
          <CheckCircle2 className="h-9 w-9" />
        </div>
        <h2 className="headline mt-5 text-2xl text-ink">Request received!</h2>
        <p className="mx-auto mt-3 max-w-md text-ink-soft">
          Thank you, {form.name.split(" ")[0] || "there"}. Our team will reach
          out within one business day. For faster response, message us on
          WhatsApp.
        </p>
        <a
          href="https://wa.me/971525652771?text=Hi%20ATS%2C%20I%27ve%20just%20submitted%20a%20quote%20request."
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#25D366] px-6 py-3 text-sm font-semibold text-white hover:bg-[#1ebe5a] transition"
        >
          Message us on WhatsApp
        </a>
      </motion.div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-3xl border border-black/5 bg-white p-6 sm:p-8 shadow-apple"
    >
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <Field label="Full Name" required className="sm:col-span-2">
          <input
            required
            name="name"
            type="text"
            value={form.name}
            onChange={handleChange}
            className="input"
            placeholder="John Doe"
          />
        </Field>
        <Field label="Phone" required>
          <input
            required
            name="phone"
            type="tel"
            value={form.phone}
            onChange={handleChange}
            className="input"
            placeholder="+971 50 123 4567"
          />
        </Field>
        <Field label="Email" required>
          <input
            required
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            className="input"
            placeholder="you@example.com"
          />
        </Field>
        <Field label="Locality" required className="sm:col-span-2">
          <input
            required
            name="location"
            type="text"
            value={form.location}
            onChange={handleChange}
            className="input"
            placeholder="e.g. Mirdif, Dubai"
          />
        </Field>
        <Field label="Project Details" required className="sm:col-span-2">
          <textarea
            required
            name="message"
            rows={4}
            value={form.message}
            onChange={handleChange}
            className="input resize-none"
            placeholder="Pool type, approximate size, design preferences, timeline..."
          />
        </Field>
      </div>

      {status === "error" && (
        <div className="mt-4 flex items-start gap-2 rounded-xl bg-red-50 px-3 py-2.5 text-sm text-red-700">
          <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" />
          <span>{errorMsg}</span>
        </div>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-blue disabled:cursor-not-allowed disabled:opacity-70"
      >
        {status === "sending" ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" />
            Sending...
          </>
        ) : (
          <>
            <Send className="h-4 w-4" />
            Send Quote Request
          </>
        )}
      </button>

      <p className="mt-3 text-center text-xs text-mute">
        We typically respond within minutes during UAE business hours.
      </p>
    </form>
  );
}

function Field({
  label,
  children,
  required,
  className = "",
}: {
  label: string;
  children: React.ReactNode;
  required?: boolean;
  className?: string;
}) {
  return (
    <label className={`block ${className}`}>
      <span className="mb-1.5 block text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-mute">
        {label}
        {required && <span className="ml-1 text-brand-blue">*</span>}
      </span>
      {children}
    </label>
  );
}
