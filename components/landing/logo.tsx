type LogoProps = {
  className?: string;
};

export default function Logo({ className }: LogoProps) {
  return (
    <svg
      viewBox="0 0 36 28"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <defs>
        <linearGradient id="nt-gradient" x1="3" y1="14" x2="33" y2="14" gradientUnits="userSpaceOnUse">
          <stop offset="30%" stopColor="var(--color-volt)" />
          <stop offset="57%" stopColor="#e8ca7b" />
          <stop offset="76%" stopColor="var(--color-white)" />
        </linearGradient>
      </defs>
      <path d="M3 25V3l14 22V3" stroke="url(#nt-gradient)" strokeWidth="4" strokeLinecap="square" strokeLinejoin="miter" />
      <path d="M20 3h13M26.5 3v22" stroke="url(#nt-gradient)" strokeWidth="4" strokeLinecap="square" />
    </svg>
  );
}
