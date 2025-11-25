export function BabysBreathFlower({ className = "" }: { className?: string }) {
  // Hand-placed bloom positions so they sit on the branches nicely
  const BLOOMS = [
    // center vertical
    { cx: 50, cy: 68 },
    { cx: 50, cy: 60 },
    { cx: 50, cy: 52 },

    // upper-right cluster
    { cx: 64, cy: 50 },
    { cx: 68, cy: 46 },
    { cx: 72, cy: 42 },
    { cx: 68, cy: 40 },

    // mid-right branch
    { cx: 62, cy: 60 },
    { cx: 58, cy: 64 },

    // upper-left branch
    { cx: 36, cy: 52 },
    { cx: 32, cy: 48 },

    // lower-right arc
    { cx: 64, cy: 78 },
    { cx: 58, cy: 82 },

    // lower-left arc
    { cx: 36, cy: 78 },
    { cx: 42, cy: 82 },

    // a couple of floating ones above
    { cx: 42, cy: 38 },
    { cx: 56, cy: 36 },
  ];

  return (
    <svg
      viewBox="0 0 100 140"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Main vertical stem */}
      <path
        d="M50 135 L50 75"
        stroke="#355827"
        strokeWidth="3"
        strokeLinecap="round"
        fill="none"
      />

      {/* Lower left curved branch */}
      <path
        d="M50 90 C40 90, 33 84, 30 78"
        stroke="#355827"
        strokeWidth="2.5"
        strokeLinecap="round"
        fill="none"
      />
      {/* Lower right curved branch */}
      <path
        d="M50 90 C60 90, 67 84, 70 78"
        stroke="#355827"
        strokeWidth="2.5"
        strokeLinecap="round"
        fill="none"
      />

      {/* Upper left branch */}
      <path
        d="M50 78 C44 72, 38 62, 34 52"
        stroke="#355827"
        strokeWidth="2.2"
        strokeLinecap="round"
        fill="none"
      />

      {/* Upper right branch */}
      <path
        d="M50 78 C56 72, 62 62, 68 52"
        stroke="#355827"
        strokeWidth="2.2"
        strokeLinecap="round"
        fill="none"
      />

      {/* Short top branch */}
      <path
        d="M50 75 L50 60"
        stroke="#355827"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      />

      {/* Baby's breath blooms */}
      {BLOOMS.map((b, i) => (
        <g key={i}>
          {/* soft outer glow */}
          <circle cx={b.cx} cy={b.cy} r="5.2" fill="rgba(255,255,255,0.45)" />
          {/* main white puff */}
          <circle cx={b.cx} cy={b.cy} r="3.7" fill="#FFFFFF" />
          {/* subtle inner dot */}
          <circle cx={b.cx} cy={b.cy} r="2" fill="#F5F5F5" />
        </g>
      ))}
    </svg>
  );
}
