export function LavenderFlower({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 140"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Main stem */}
      <path
        d="M50 140 Q49 80, 50 30"
        stroke="#2D5016"
        strokeWidth="2.5"
        fill="none"
        strokeLinecap="round"
      />
      
      {/* Leaves at base */}
      <ellipse
        cx="42"
        cy="120"
        rx="4"
        ry="18"
        fill="#5A9279"
        transform="rotate(-20 42 120)"
      />
      <ellipse
        cx="58"
        cy="120"
        rx="4"
        ry="18"
        fill="#4A7C59"
        transform="rotate(20 58 120)"
      />
      
      {/* Lavender buds along stem */}
      {[20, 28, 36, 44, 52, 60, 68].map((y, i) => (
        <g key={i}>
          <ellipse
            cx="50"
            cy={y}
            rx="4"
            ry="6"
            fill="#9575CD"
            opacity={0.9}
          />
          <ellipse
            cx="46"
            cy={y + 2}
            rx="3.5"
            ry="5"
            fill="#B39DDB"
            opacity={0.8}
          />
          <ellipse
            cx="54"
            cy={y + 2}
            rx="3.5"
            ry="5"
            fill="#B39DDB"
            opacity={0.8}
          />
        </g>
      ))}
      
      {/* Top lavender cluster */}
      <ellipse cx="50" cy="15" rx="5" ry="8" fill="#7E57C2" />
      <ellipse cx="47" cy="18" rx="4" ry="6" fill="#9575CD" />
      <ellipse cx="53" cy="18" rx="4" ry="6" fill="#9575CD" />
      
      {/* Small accent buds */}
      <circle cx="50" cy="12" r="2.5" fill="#6A1B9A" />
    </svg>
  );
}
