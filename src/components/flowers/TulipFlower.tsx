export function TulipFlower({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 140"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Stem */}
      <path
        d="M50 140 Q48 90, 50 55"
        stroke="#2D5016"
        strokeWidth="3"
        fill="none"
        strokeLinecap="round"
      />
      
      {/* Leaves */}
      <path
        d="M48 100 Q35 95, 30 105 Q33 112, 45 108"
        fill="#4A7C59"
      />
      <path
        d="M52 115 Q68 112, 72 122 Q68 128, 54 122"
        fill="#5A9279"
      />
      
      {/* Tulip petals */}
      <ellipse
        cx="50"
        cy="32"
        rx="10"
        ry="22"
        fill="#FF6B9D"
      />
      <ellipse
        cx="40"
        cy="32"
        rx="9"
        ry="20"
        fill="#FF8FAB"
        transform="rotate(-15 40 32)"
      />
      <ellipse
        cx="60"
        cy="32"
        rx="9"
        ry="20"
        fill="#FF8FAB"
        transform="rotate(15 60 32)"
      />
      
      {/* Tulip highlights */}
      <ellipse
        cx="48"
        cy="28"
        rx="3"
        ry="10"
        fill="#FFB6C1"
        opacity="0.6"
      />
      
      {/* Petal details */}
      <path
        d="M50 45 Q50 30, 50 20"
        stroke="#E91E63"
        strokeWidth="1"
        opacity="0.3"
      />
    </svg>
  );
}
