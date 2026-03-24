"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

export default function ScrollRestoration() {
  const pathname = usePathname();

  useEffect(() => {
    // Give the page a tick to render, then scroll to hash or top
    const hash = window.location.hash;
    if (hash) {
      const id = hash.slice(1);
      // Poll briefly for the element in case it hasn't mounted yet
      let attempts = 0;
      const interval = setInterval(() => {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
          clearInterval(interval);
        } else if (++attempts > 20) {
          clearInterval(interval);
        }
      }, 50);
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [pathname]);

  return null;
}
