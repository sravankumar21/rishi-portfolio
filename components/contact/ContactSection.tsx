"use client";

import { useState } from "react";
import { Mail, MapPin, MessageSquare, Phone, Send, User } from "lucide-react";
import { profile } from "@/data/profile";
import { socials } from "@/data/social";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/utils";

const inputClasses =
  "w-full rounded-2xl border border-line bg-fill-weak px-4 py-3 text-sm text-fg placeholder:text-faint transition-colors focus:border-brand/70 focus:outline-none focus:ring-2 focus:ring-brand/25";

export function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const update = (field: keyof typeof form) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => setForm((f) => ({ ...f, [field]: e.target.value }));

  const compose = () => {
    const subject = encodeURIComponent("Enquiry");
    const body = encodeURIComponent(
      `${form.message ? `Hello,\n\n${form.message}\n\n` : ""}${
        form.name ? form.name : ""
      }${form.email ? ` · ${form.email}` : ""}`,
    );
    return `mailto:${profile.email}?subject=${subject}&body=${body}`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.location.href = compose();
    setSent(true);
  };

  const channels = [
    {
      label: "Email",
      value: profile.email,
      href: `mailto:${profile.email}`,
      icon: Mail,
    },
    {
      label: "Phone",
      value: profile.phone,
      href: `tel:${profile.phone.replace(/\s+/g, "")}`,
      icon: Phone,
    },
    {
      label: "Based in",
      value: profile.location,
      href: undefined,
      icon: MapPin,
    },
  ];

  return (
    <section id="contact" className="relative scroll-mt-20 pb-16 pt-14 sm:pt-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Enquiries"
          title="Work with me"
          description="Open to commis chef roles in UAE hotels and resorts, and to private event work across Sharjah and Dubai. Tell me about your kitchen or occasion and I usually reply within a day."
        />

        <div className="mx-auto mt-16 grid max-w-5xl gap-6 lg:grid-cols-[1fr_1.4fr]">
          {/* Details */}
          <Reveal>
            <ul className="card-surface flex flex-col rounded-2xl px-6 sm:px-7">
              {channels.map((channel, i) => (
                <li
                  key={channel.label}
                  className={cn(
                    "flex items-center gap-4 py-5",
                    i > 0 && "border-t border-line",
                  )}
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand/10 text-brand">
                    <channel.icon className="h-4 w-4" aria-hidden="true" />
                  </span>
                  <div className="min-w-0">
                    <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-faint">
                      {channel.label}
                    </p>
                    {channel.href ? (
                      <a
                        href={channel.href}
                        className="block truncate text-sm font-medium text-fg transition-colors hover:text-brand"
                      >
                        {channel.value}
                      </a>
                    ) : (
                      <p className="truncate text-sm font-medium text-fg">{channel.value}</p>
                    )}
                  </div>
                </li>
              ))}

              {socials.map((social, i) => (
                <li
                  key={social.label}
                  className={cn(
                    "flex items-center gap-4 py-5",
                    i > 0 && "border-t border-line",
                  )}
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand/10 text-brand">
                    <MessageSquare className="h-4 w-4" aria-hidden="true" />
                  </span>
                  <div className="min-w-0">
                    <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-faint">
                      {social.label}
                    </p>
                    <a
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block truncate text-sm font-medium text-fg transition-colors hover:text-brand"
                    >
                      @{social.handle.replace(/^@/, "")}
                    </a>
                  </div>
                </li>
              ))}
            </ul>
          </Reveal>

          {/* Form */}
          <Reveal delay={0.1}>
            <form
              onSubmit={handleSubmit}
              className="card-surface flex h-full flex-col gap-4 rounded-2xl p-6 sm:p-7"
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="flex flex-col gap-1.5">
                  <span className="text-xs font-medium text-muted">Name</span>
                  <span className="relative">
                    <User className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-faint" />
                    <input
                      required
                      value={form.name}
                      onChange={update("name")}
                      placeholder="Your name"
                      autoComplete="name"
                      className={`${inputClasses} pl-10`}
                    />
                  </span>
                </label>
                <label className="flex flex-col gap-1.5">
                  <span className="text-xs font-medium text-muted">Email</span>
                  <span className="relative">
                    <Mail className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-faint" />
                    <input
                      required
                      type="email"
                      value={form.email}
                      onChange={update("email")}
                      placeholder="you@example.com"
                      autoComplete="email"
                      className={`${inputClasses} pl-10`}
                    />
                  </span>
                </label>
              </div>

              <label className="flex flex-col gap-1.5">
                <span className="text-xs font-medium text-muted">Message</span>
                <textarea
                  required
                  rows={6}
                  value={form.message}
                  onChange={update("message")}
                  placeholder="The role, the event, or the kitchen you're running."
                  className={`${inputClasses} resize-none`}
                />
              </label>

              <div className="mt-auto space-y-3 pt-1">
                <button
                  type="submit"
                  className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-full bg-brand text-sm font-semibold text-on-brand shadow-brand transition-all duration-300 hover:bg-brand/90 active:scale-[0.98]"
                >
                  <Send className="h-4 w-4" aria-hidden="true" />
                  {sent ? "Opening your email…" : "Send email"}
                </button>
                <p className="text-center text-xs text-faint">
                  This opens your email app with the message ready. You can also write to{" "}
                  <a href={`mailto:${profile.email}`} className="text-brand hover:underline">
                    {profile.email}
                  </a>{" "}
                  directly.
                </p>
              </div>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
