import clsx from "clsx";

interface GlowBadgeProps {
  label: string;
  color?: "blue" | "cyan" | "green";
}

export default function GlowBadge({
  label,
  color = "blue",
}: GlowBadgeProps) {
  const styles = {
    blue: `
      bg-blue-500/10
      text-blue-400
      border-blue-500/20
    `,
    cyan: `
      bg-cyan-500/10
      text-cyan-400
      border-cyan-500/20
    `,
    green: `
      bg-emerald-500/10
      text-emerald-400
      border-emerald-500/20
    `,
  };

  return (
    <span
      className={clsx(
        `
        px-3
        py-1
        rounded-full
        text-xs
        font-semibold
        border
      `,
        styles[color]
      )}
    >
      {label}
    </span>
  );
}