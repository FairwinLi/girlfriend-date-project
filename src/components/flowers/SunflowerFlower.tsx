export function SunflowerFlower({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 140"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Stem — extended upward so it reaches the flower */}
      <path
        d="M50 140 Q51 90, 50 40"   // ← shortened the curve end from 60 to 40
        stroke="#2D5016"
        strokeWidth="3"
        fill="none"
        strokeLinecap="round"
      />

      {/* Leaves */}
      <ellipse
        cx="58"
        cy="100"
        rx="9"
        ry="16"
        fill="#4A7C59"
        transform="rotate(35 58 100)"
      />
      <ellipse
        cx="44"
        cy="115"
        rx="8"
        ry="14"
        fill="#5A9279"
        transform="rotate(-25 44 115)"
      />

      {/* Petals */}
      {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => {
        const rad = (angle * Math.PI) / 180;
        const x = 50 + Math.cos(rad) * 14;
        const y = 30 + Math.sin(rad) * 14;
        return (
          <ellipse
            key={i}
            cx={x}
            cy={y}
            rx="6"
            ry="12"
            fill="#FFD54F"
            transform={`rotate(${angle} ${x} ${y})`}
          />
        );
      })}

      {/* Flower center — light green */}
      <circle cx="50" cy="30" r="12" fill="#A5D6A7" />

      {/* Center texture */}
      {[...Array(8)].map((_, i) => (
        <circle
          key={i}
          cx={50 + (Math.random() - 0.5) * 12}
          cy={30 + (Math.random() - 0.5) * 12}
          r="1.5"
          fill="#66BB6A"
          opacity="0.6"
        />
      ))}
    </svg>
  );
}
