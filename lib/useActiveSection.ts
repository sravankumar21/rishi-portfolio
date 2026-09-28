"use client";

import { useEffect, useState } from "react";

/**
 * Tracks which section is currently in view for scroll-spy navigation.
 * The last section in the list stays active near the bottom of the page.
 */
export function useActiveSection(ids: string[], offset = 0.6) {
  const [active, setActive] = useState(ids[0] ?? "");

  useEffect(() => {
    if (typeof IntersectionObserver === "undefined") return;

    const sections = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        // Pick the entry closest to the top of the viewport
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);

        if (visible[0]) {
          setActive(visible[0].target.id);
          return;
        }

        // Fall back to the section nearest the top of the viewport
        let nearest: { id: string; top: number } | null = null;
        for (const el of sections) {
          const top = el.getBoundingClientRect().top;
          if (top <= window.innerHeight * offset) {
            if (!nearest || top > nearest.top) {
              nearest = { id: el.id, top };
            }
          }
        }
        if (nearest) setActive(nearest.id);
      },
      { rootMargin: `-${(1 - offset) * 100}% 0px -${(1 - offset) * 100}% 0px`, threshold: 0 }
    );

    sections.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [ids, offset]);

  return active;
}