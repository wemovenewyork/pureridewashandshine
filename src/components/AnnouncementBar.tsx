export default function AnnouncementBar() {
  return (
    <div
      className="py-2 px-4 text-center"
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
    </div>
  );
}
