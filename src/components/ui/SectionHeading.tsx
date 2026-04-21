interface SectionHeadingProps {
  children: React.ReactNode;
  highlight?: string;
  className?: string;
  as?: "h1" | "h2" | "h3";
  light?: boolean;
  id?: string;
}

export default function SectionHeading({
  children,
  highlight,
  className = "",
  as: Tag = "h2",
  light = false,
  id,
}: SectionHeadingProps) {
  return (
    <Tag
      id={id}
      className={[
        "font-display italic text-4xl md:text-5xl leading-tight",
        light ? "text-white" : "text-pure-outline",
        className,
      ].join(" ")}
    >
      {highlight ? (
        <>
          <span className="relative inline-block">
            <span className="relative z-10">{highlight}</span>
            <span
              className="absolute inset-0 -skew-x-3 bg-pure-yellow -z-0 -mx-1 px-1"
              aria-hidden="true"
            />
          </span>{" "}
          {children}
        </>
      ) : (
        children
      )}
    </Tag>
  );
}
