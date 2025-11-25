export function RoseFlower({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 140"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Stem */}
      <path
        d="M50 140 Q48 100, 50 60"
        stroke="#2D5016"
        strokeWidth="3"
        fill="none"
        strokeLinecap="round"
      />

      {/* Leaves */}
      <ellipse
        cx="42"
        cy="95"
        rx="8"
        ry="15"
        fill="#4A7C59"
        transform="rotate(-30 42 95)"
      />
      <ellipse
        cx="58"
        cy="110"
        rx="7"
        ry="13"
        fill="#5A9279"
        transform="rotate(25 58 110)"
      />

      {/* ---- TOP PETALS (yellow → orange → red edges) ---- */}
      <circle cx="50" cy="32" r="18" fill="url(#petalGradient)" opacity="0.98" />
      <circle cx="35" cy="36" r="16" fill="url(#petalGradient)" opacity="0.95" />
      <circle cx="65" cy="36" r="16" fill="url(#petalGradient)" opacity="0.95" />

      {/* Bottom petal (cup) */}
      <ellipse
        cx="50"
        cy="50"
        rx="17"
        ry="13"
        fill="url(#petalGradient)"
        opacity="0.9"
      />

      {/* Center */}
      <circle cx="50" cy="40" r="10" fill="#F5C27A" />
      <circle cx="50" cy="40" r="6" fill="#E28A63" />
      <circle cx="50" cy="40" r="3" fill="#C75A42" />

      <defs>
        {/* Yellow → orange → red petal gradient */}
        <radialGradient id="petalGradient" cx="50%" cy="40%" r="70%">
          <stop offset="0%" stopColor="#FFF4A8" />     {/* soft yellow center */}
          <stop offset="45%" stopColor="#FFDF6E" />    {/* deeper yellow */}
          <stop offset="75%" stopColor="#FFB45C" />    {/* peach/orange */}
          <stop offset="100%" stopColor="#FF7B5C" />   {/* warm red edge */}
        </radialGradient>
      </defs>
    </svg>
  );
}
