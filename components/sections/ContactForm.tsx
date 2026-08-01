"use client";

import { useState, type FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, Mail, MapPin, Clock } from "lucide-react";
import Section from "@/components/Section";

const BUDGETS = ["Under ₹7k", "₹10k – ₹30k", "₹50k – ₹2L", "₹2L – ₹10L", "₹10L – ₹25L", "₹25L+"];

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);
    // TODO: Sign up at https://web3forms.com/ with your email and replace the key below
    formData.append("access_key", "ec2663eb-085d-4464-8862-baedbcce2a62");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setSubmitted(true);
      } else {
        console.error("Form submission error", data);
        alert(data.message || "Something went wrong.");
      }
    } catch (error) {
      console.error("Fetch error", error);
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <Section tone="ink">
      <div className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-5">
        {/* Form — plain surface, ~40% width */}
        <div className="px-6 py-16 lg:col-span-2 lg:px-8 lg:py-24">
          <AnimatePresence mode="wait">
            {submitted ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex min-h-[360px] flex-col items-start justify-center rounded-2xl border border-line bg-surface p-8"
              >
                <CheckCircle2 className="h-8 w-8 text-wire-cyan" strokeWidth={1.5} />
                <h3 className="mt-4 font-display text-2xl font-medium text-ink-fg">
                  Message sent.
                </h3>
                <p className="mt-2 text-sm text-ink-muted">
                  Thanks for reaching out — we&rsquo;ll reply within one
                  business day.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-6 text-sm text-wire-cyan hover:text-ink-fg"
                >
                  Send another message
                </button>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                onSubmit={handleSubmit}
                className="space-y-5"
              >
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <Field label="Name" name="name" placeholder="Jordan Lee" required />
                  <Field
                    label="Work email"
                    name="email"
                    type="email"
                    placeholder="jordan@company.com"
                    required
                  />
                </div>
                <Field label="Company" name="company" placeholder="Company name" />

                <div>
                  <label className="font-mono-label text-xs uppercase text-ink-faint">
                    Budget range
                  </label>
                  <div className="mt-2.5 flex flex-wrap gap-2">
                    {BUDGETS.map((b) => (
                      <label key={b} className="cursor-pointer">
                        <input type="radio" name="budget" value={b} className="peer sr-only" />
                        <span className="inline-block rounded-full border border-line-strong px-3.5 py-1.5 text-xs text-ink-muted transition-colors peer-checked:border-wire-cyan/60 peer-checked:bg-surface-2 peer-checked:text-ink-fg">
                          {b}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="font-mono-label text-xs uppercase text-ink-faint"
                  >
                    Project details
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    placeholder="What are you building, and what does success look like in 90 days?"
                    className="mt-2.5 w-full resize-none rounded-xl border border-line-strong bg-surface px-4 py-3 text-sm text-ink-fg placeholder:text-ink-faint focus:border-wire-cyan/50"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-signal-amber px-6 py-3.5 text-sm font-medium text-ink transition-opacity disabled:opacity-60 sm:w-auto"
                >
                  {loading ? "Sending…" : "Send message"}
                </button>
              </motion.form>
            )}
          </AnimatePresence>
        </div>

        {/* Immersive info panel — ~60% width on desktop */}
        <div className="relative min-h-[420px] lg:col-span-3 overflow-hidden">
          <motion.div
            animate={{
              scale: [1, 1.15, 1],
              x: [0, -30, 0],
              y: [0, -20, 0],
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -inset-[10%] bg-cover bg-center"
            style={{ backgroundImage: "url('/images/contact-beacon.svg')" }}
          />
          <div className="absolute inset-0 bg-gradient-to-l from-ink via-ink/75 to-ink/30" />
          <div className="relative flex h-full flex-col justify-center gap-8 p-10 lg:p-16">
            <InfoRow icon={Mail} label="Email" value="nexivratechnologies@gmail.com" />
            <InfoRow icon={Clock} label="Response time" value="Within 1 business day" />
            <InfoRow icon={MapPin} label="Team" value="Remote-first · 4 time zones" />
          </div>
        </div>
      </div>
    </Section>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
  required,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label htmlFor={name} className="font-mono-label text-xs uppercase text-ink-faint">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="mt-2.5 w-full rounded-xl border border-line-strong bg-surface px-4 py-3 text-sm text-ink-fg placeholder:text-ink-faint focus:border-wire-cyan/50"
      />
    </div>
  );
}

function InfoRow({
  icon: Icon,
  label,
  value,
}: {
  icon: typeof Mail;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-center gap-4 border-b border-line-strong pb-6 last:border-0 last:pb-0">
      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-line-strong bg-ink/60">
        <Icon className="h-4 w-4 text-wire-cyan" strokeWidth={1.5} />
      </span>
      <div>
        <p className="font-mono-label text-[11px] uppercase text-ink-faint">{label}</p>
        <p className="mt-0.5 font-display text-lg text-ink-fg">{value}</p>
      </div>
    </div>
  );
}
