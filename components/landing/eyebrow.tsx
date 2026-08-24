type EyebrowProps = {
  index: string;
  children: React.ReactNode;
  tone?: "dark" | "light";
};

export default function Eyebrow({
  index,
  children,
  tone = "dark",
}: EyebrowProps) {
  const muted = tone === "light" ? "text-muted" : "text-white/65";
  const soft = tone === "light" ? "text-muted" : "text-white/45";

  return (
    <p className="flex items-center gap-3 font-mono text-[11px] font-medium uppercase tracking-[0.26em]">
      <span className="h-2 w-2 shrink-0 bg-volt" aria-hidden />
      <span className={soft}>{index}</span>
      <span className={soft}>/</span>
      <span className={muted}>{children}</span>
    </p>
  );
}
