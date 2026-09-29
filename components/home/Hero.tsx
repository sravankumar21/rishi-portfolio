"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { ArrowRight, ChefHat, Download, Mail, MapPin } from "lucide-react";
import { InstagramIcon } from "@/components/ui/brand-icons";
import { profile } from "@/data/profile";
import { socials } from "@/data/social";
import { fadeUp, staggerContainer } from "@/lib/animations";

const socialIcons: Record<string, React.ElementType> = {
  Instagram: InstagramIcon,
};

export function Hero() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="home" className="relative flex min-h-svh items-center overflow-hidden pb-16 pt-32">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          {/* Copy */}
          <motion.div
            variants={staggerContainer(0.1, 0.1)}
            initial="hidden"
            animate="visible"
            className="flex flex-col items-center text-center lg:items-start lg:text-left"
          >
            <motion.span
              variants={fadeUp}
              className="card-surface inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-medium text-muted"
            >
              <ChefHat className="h-3.5 w-3.5 text-brand" />
              Garde Manger · Plating · Carving · Banquets
            </motion.span>

            <motion.h1
              variants={fadeUp}
              className="mt-6 whitespace-nowrap font-display text-[clamp(2rem,4.5vw,4.5rem)] font-semibold leading-[1.05] tracking-tight text-fg"
            >
              {profile.firstName}{" "}
              <span className="text-brand">{profile.lastName}</span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="mt-5 font-display text-lg font-medium text-muted sm:text-2xl"
            >
              {profile.role}
            </motion.p>

            <motion.p
              variants={fadeUp}
              className="mt-5 max-w-2xl text-[15px] leading-relaxed text-muted sm:text-base"
            >
              {profile.heroIntro} Currently at{" "}
              <span className="text-fg">Al Badayer Retreat, Sharjah</span>, producing
              luxury resort cuisine to HACCP standards.
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="mt-9 flex w-full flex-col items-center gap-3 sm:w-auto sm:flex-row lg:items-start"
            >
              <a
                href="#projects"
                className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-full bg-brand px-7 text-[15px] font-medium text-white shadow-[0_8px_32px_-12px_rgba(139,124,248,0.7)] transition-all duration-300 hover:bg-brand/90 hover:shadow-[0_10px_40px_-10px_rgba(139,124,248,0.85)] active:scale-[0.98] sm:w-auto"
              >
                {profile.primaryCta}
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#contact"
                className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-full border border-line-strong px-7 text-[15px] font-medium text-fg transition-all duration-300 hover:border-brand/60 hover:bg-fill-soft active:scale-[0.98] sm:w-auto"
              >
                <Mail className="h-4 w-4 text-brand" />
                {profile.secondaryCta}
              </a>
              <a
                href={profile.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-full px-4 text-sm font-medium text-muted transition-colors hover:text-fg sm:w-auto"
              >
                <Download className="h-4 w-4" />
                Resume
              </a>
            </motion.div>

            {socials.length > 0 ? (
              <motion.div variants={fadeUp} className="mt-8 flex items-center gap-3">
                {socials.map((social) => {
                  const Icon = socialIcons[social.label];
                  if (!Icon) return null;
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      className="card-surface flex h-10 w-10 items-center justify-center rounded-full text-muted transition-all duration-300 hover:-translate-y-0.5 hover:text-fg"
                    >
                      <Icon className="h-[18px] w-[18px]" />
                    </a>
                  );
                })}
              </motion.div>
            ) : null}

            <motion.div variants={fadeUp} className="mt-10 hidden flex-col items-center gap-2 sm:flex lg:items-start">
              <span className="text-[10px] font-medium uppercase tracking-[0.3em] text-faint">
                scroll
              </span>
              <motion.span
                className="h-8 w-px bg-gradient-to-b from-brand to-transparent"
                animate={reduceMotion ? undefined : { scaleY: [0.4, 1], opacity: [0.4, 1] }}
                transition={{ duration: 1.4, repeat: Infinity, repeatType: "reverse" }}
              />
            </motion.div>
          </motion.div>

          {/* Portrait */}
          <motion.div
            initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 24, scale: 0.98 }}
            animate={reduceMotion ? { opacity: 1 } : { opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
            className="relative mx-auto hidden w-full max-w-lg md:block lg:max-w-none"
          >
            <div
              aria-hidden="true"
              className="absolute -inset-6 -z-10 rounded-[2rem] bg-brand/15 blur-3xl"
            />
            <div className="card-surface relative overflow-hidden rounded-3xl p-2">
              <div className="relative aspect-square overflow-hidden rounded-2xl">
                <Image
                  src={profile.photo}
                  alt={`Portrait of ${profile.name}`}
                  fill
                  priority
                  sizes="(max-width: 1024px) 32rem, 44rem"
                  className="object-cover"
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-t from-canvas/60 via-transparent to-transparent"
                />

                {/* Floating chip: location */}
                <div className="glass absolute bottom-4 left-4 animate-float rounded-full px-3.5 py-2">
                  <p className="flex items-center gap-1.5 text-xs text-fg">
                    <MapPin className="h-3.5 w-3.5 text-brand" />
                    {profile.location}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}