"use client";

import { motion, useReducedMotion, type HTMLMotionProps } from "framer-motion";
import { EASE } from "@/lib/animations";

type RevealProps = HTMLMotionProps<"div"> & {
  children: React.ReactNode;
  delay?: number;
  distance?: number;
};

export function Reveal({
  children,
  delay = 0,
  distance = 26,
  className,
  ...rest
}: RevealProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y: distance }}
      whileInView={reduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.65, ease: EASE, delay }}
      {...rest}
    >
      {children}
    </motion.div>
  );
}