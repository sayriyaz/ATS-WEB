"use client";

import { useEffect, useState, FormEvent } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X, Send, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";

// Web3Forms access key — set NEXT_PUBLIC_WEB3FORMS_KEY in .env.local / Vercel
const ACCESS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_KEY || "";

type Props = {
  open: boolean;
  onClose: () => void;
};

type Status = "idle" | "sending" | "success" | "error";

export default function QuoteModal({ open, onClose }: Props) {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    location: "",
    message: "",
  });
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const reset = () => {
    setForm({ name: "", phone: "", email: "", location: "", message: "" });
    setStatus("idle");
    setErrorMsg("");
  };

  // Close on ESC
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (open) window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  // Lock body scroll when open
  useEffect(() => {
    if (open) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = prev;
      };
    }
  }, [open]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!ACCESS_KEY) {
      setStatus("error");
      setErrorMsg(
        "Form not configured. Please set NEXT_PUBLIC_WEB3FORMS_KEY."
      );
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
          from_name: "Alwahaa Website — Quote Form",
          name: form.name,
          phone: form.phone,
          email: form.email,
          location: form.location,
          message: form.message,
        }),
      });
      const data = await res.json();
      if (data.success) {
        setStatus("success");
      } else {
        setStatus("error");
        setErrorMsg(data.message || "Something went wrong. Please try again.");
      }
    } catch (err) {
      setStatus("error");
      setErrorMsg("Network error. Please check your connection and retry.");
    }
  };

  const closeAndReset = () => {
    onClose();
    // Reset after close animation
    setTimeout(reset, 300);
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6"
          aria-modal="true"
          role="dialog"
        >
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-ink/50 backdrop-blur-sm"
            onClick={closeAndReset}
          />

          {/* Panel */}
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.98 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="relative z-10 flex w-full max-w-md flex-col overflow-hidden rounded-3xl bg-white shadow-apple sm:max-w-lg"
            style={{ maxHeight: "calc(100dvh - 2rem)" }}
          >
            <div className="flex shrink-0 items-center justify-between gap-4 border-b border-black/5 px-5 py-3 sm:px-6">
              <div>
                <div className="text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-brand-blue">
                  Request a Quote
                </div>
                <h3 className="text-[0.95rem] font-semibold text-ink sm:text-base">
                  Tell us about your project
                </h3>
              </div>
              <button
                onClick={closeAndReset}
                aria-label="Close"
                className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-black/10 text-ink-soft transition hover:border-brand-blue hover:text-brand-blue"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            {status === "success" ? (
              <div className="flex flex-1 flex-col items-center justify-center gap-3 overflow-y-auto px-6 py-10 text-center sm:px-8">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-green-50 text-green-600">
                  <CheckCircle2 className="h-8 w-8" />
                </div>
                <h4 className="text-xl font-semibold text-ink">
                  Request sent!
                </h4>
                <p className="max-w-sm text-sm text-ink-soft">
                  Thank you, {form.name.split(" ")[0] || "there"}. Our team will
                  reach out within one business day.
                </p>
                <button
                  onClick={closeAndReset}
                  className="mt-1 rounded-full bg-ink px-6 py-2.5 text-sm font-medium text-white transition hover:bg-brand-blue"
                >
                  Close
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="flex-1 overflow-y-auto px-5 py-3.5 sm:px-6 sm:py-4"
              >
                <div className="grid grid-cols-2 gap-2.5">
                  <Field label="Full Name" required className="col-span-2">
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
                  <Field label="Locality" required className="col-span-2">
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
                  <Field
                    label="Project Details"
                    required
                    className="col-span-2"
                  >
                    <textarea
                      required
                      name="message"
                      rows={2}
                      value={form.message}
                      onChange={handleChange}
                      className="input resize-none"
                      placeholder="Pool type, size, style, timeline..."
                    />
                  </Field>
                </div>

                {status === "error" && (
                  <div className="mt-2.5 flex items-start gap-2 rounded-xl bg-red-50 px-3 py-2 text-xs text-red-700">
                    <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" />
                    <span>{errorMsg}</span>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="mt-3 inline-flex w-full items-center justify-center gap-2 rounded-full bg-ink px-6 py-2.5 text-sm font-medium text-white transition hover:bg-brand-blue disabled:cursor-not-allowed disabled:opacity-70"
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
              </form>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
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
      <span className="mb-1 block text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-mute">
        {label}
        {required && <span className="ml-1 text-brand-blue">*</span>}
      </span>
      {children}
    </label>
  );
}
