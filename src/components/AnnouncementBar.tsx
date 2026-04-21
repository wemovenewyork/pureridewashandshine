"use client";

import { useState, useEffect } from "react";
import { X } from "@phosphor-icons/react";

const SESSION_KEY = "annbar-dismissed";

export default function AnnouncementBar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!sessionStorage.getItem(SESSION_KEY)) {
      setVisible(true);
    }
  }, []);

  if (!visible) return null;

  const dismiss = () => {
    sessionStorage.setItem(SESSION_KEY, "1");
    setVisible(false);
  };

  return (
    <div
      className="relative py-2 px-8 text-center"
      style={{ background: "#111827" }}
      role="banner"
      aria-label="Store announcement"
    >
      <p
        className="font-body text-[11px] text-white/80 uppercase tracking-[0.18em]"
        style={{ fontWeight: 700 }}
      >
        Free Shipping on Orders $50+
        <span className="mx-3 text-white/30" aria-hidden="true">·</span>
        30-Day Money-Back Guarantee
      </p>
      <button
        onClick={dismiss}
        aria-label="Dismiss announcement"
        className="absolute right-3 top-1/2 -translate-y-1/2 text-white/30 hover:text-white/70 transition-colors duration-150 p-1"
      >
        <X size={12} weight="bold" aria-hidden="true" />
      </button>
    </div>
  );
}
