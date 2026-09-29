"use client";

import { useState } from "react";
import { Mail, MapPin, MessageSquare, Phone, Send, User } from "lucide-react";
import { profile } from "@/data/profile";
import { socials } from "@/data/social";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

const inputClasses =
  "w-full rounded-2xl border border-line bg-fill-weak px-4 py-3 text-sm text-fg placeholder:text-faint transition-colors focus:border-brand/70 focus:outline-none focus:ring-2 focus:ring-brand/25";

export function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [sent, setSent] = useState(false);

  const update = (field: keyof typeof form) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => setForm((f) => ({ ...f, [field]: e.target.value }));

  const compose = () => {
    const subject = encodeURIComponent(form.subject || "Hello from your portfolio");
    const body = encodeURIComponent(
      `${form.message && `Hi ${profile.firstName},\n\n${form.message}\n\n`}${
        form.name ? `— ${form.name}` : ""
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
      label: "Location",
      value: profile.location,
      href: undefined,
      icon: MapPin,
    },
  ];

  return (
    <section id="contact" className="relative scroll-mt-20 pb-16 pt-14 sm:pt-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Contact"
          title="Let's build something together"
          description="Have a role, project or idea in mind? My inbox is open — I usually reply within a day."
        />

        <div className="mx-auto mt-16 grid max-w-5xl gap-6 lg:grid-cols-[1fr_1.4fr]">
          {/* Channels */}
          <Reveal className="flex flex-col gap-4">
            {channels.map((channel) => (
              <div key={channel.label} className="card-surface rounded-2xl p-5">
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-brand/30 to-brand-2/20 text-brand">
                    <channel.icon className="h-4 w-4" />
                  </span>
                  <div className="min-w-0">
                    <p className="text-xs uppercase tracking-wide text-faint">{channel.label}</p>
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
                </div>
              </div>
            ))}

            {socials.length > 0 ? (
              <div className="card-surface rounded-2xl p-5">
                <p className="text-xs uppercase tracking-wide text-faint">Elsewhere</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {socials.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-full border border-line px-3 py-1.5 text-xs font-medium text-muted transition-colors hover:border-brand/50 hover:text-fg"
                    >
                      {social.label}
                    </a>
                  ))}
                </div>
              </div>
            ) : null}

            <div className="card-surface rounded-2xl border-brand/25 p-5">
              <p className="text-sm font-medium text-fg">Based in {profile.location}</p>
              <p className="mt-1.5 text-xs leading-relaxed text-muted">
                Hiring for a kitchen role, or need a chef for an event? Get in touch — my
                full resume is available to download via the{" "}
                <a href={profile.resumeUrl} target="_blank" rel="noopener noreferrer" className="text-brand hover:underline">
                  resume link
                </a>
                .
              </p>
            </div>
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
                      className={`${inputClasses} pl-10`}
                    />
                  </span>
                </label>
              </div>

              <label className="flex flex-col gap-1.5">
                <span className="text-xs font-medium text-muted">Subject</span>
                <span className="relative">
                  <MessageSquare className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-faint" />
                  <input
                    required
                    value={form.subject}
                    onChange={update("subject")}
                    placeholder="What's this about?"
                    className={`${inputClasses} pl-10`}
                  />
                </span>
              </label>

              <label className="flex flex-col gap-1.5">
                <span className="text-xs font-medium text-muted">Message</span>
                <textarea
                  required
                  rows={5}
                  value={form.message}
                  onChange={update("message")}
                  placeholder="Tell me about the opportunity or idea…"
                  className={`${inputClasses} resize-none`}
                />
              </label>

              <div className="mt-auto space-y-3 pt-1">
                <button
                  type="submit"
                  className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-full bg-brand text-sm font-semibold text-white shadow-[0_8px_32px_-12px_rgba(139,124,248,0.7)] transition-all duration-300 hover:bg-brand/90 active:scale-[0.98]"
                >
                  <Send className="h-4 w-4" />
                  {sent ? "Opening your email client…" : "Send message"}
                </button>
                <p className="text-center text-xs text-faint">
                  Sends via your email client — or reach me directly at{" "}
                  <a href={`mailto:${profile.email}`} className="text-brand hover:underline">
                    {profile.email}
                  </a>
                </p>
              </div>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}