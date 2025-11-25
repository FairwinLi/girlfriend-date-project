// import { useDrop } from "react-dnd";
// import { ReactNode } from "react";

// interface DropZoneProps {
//   id: string;
//   position: { x: number; y: number };
//   onDrop: (flowerId: string, flowerType: string) => void;
//   placedFlowers?: ReactNode[];
//   label?: string;
// }

// export function DropZone({
//   position,
//   onDrop,
//   placedFlowers = [],
//   label,
// }: DropZoneProps) {
//   const [{ isOver }, drop] = useDrop(
//     () => ({
//       accept: "FLOWER",
//       drop: (item: { id: string; flowerType: string }) =>
//         onDrop(item.id, item.flowerType),
//       collect: (monitor) => ({
//         isOver: monitor.isOver(),
//       }),
//     }),
//     [onDrop]
//   );

//   return (
//     <div
//       ref={drop}
//       className="absolute rounded-full transition-transform grid place-items-center"
//       style={{
//         left: position.x - 180,
//         top: position.y - 130,
//         width: 360,
//         height: 260,
//         background:
//           "radial-gradient(circle at center, rgba(255, 192, 203, 0.22), rgba(255, 192, 203, 0) 70%)",
//         boxShadow: isOver ? "0 8px 24px rgba(255, 105, 180, 0.25)" : "none",
//       }}
//     >
//       {/* Label when empty */}
//       {label && placedFlowers.length === 0 && (
//         <div
//           className="absolute -top-7 text-sm font-semibold"
//           style={{ color: "rgba(194, 24, 91, .85)" }}
//         >
//           {label}
//         </div>
//       )}

//       {/* Placed flowers, arranged like a bouquet fan (BEHIND the vase) */}
//       {placedFlowers.length > 0 && (
//         <div
//           className="pointer-events-none absolute inset-0"
//           style={{ zIndex: 1 }} // flowers layer
//         >
//           <div
//             style={{
//               position: "absolute",
//               left: "50%",
//               bottom: 80,
//               transform: "translateX(-50%)",
//               width: 260,
//               height: 180,
//             }}
//           >
//             {placedFlowers.map((node, index) => {
//               const count = Math.max(placedFlowers.length, 1);
//               const spread = Math.min(60, 18 * (count - 1)); // total degrees
//               const startAngle = -spread / 2;
//               const angle =
//                 startAngle + (spread / Math.max(count - 1, 1)) * index;
//               const radius = 65;

//               const radians = (angle * Math.PI) / 180;
//               const x = radius * Math.sin(radians);
//               const y = radius * Math.cos(radians);

//               return (
//                 <div
//                   key={index}
//                   style={{
//                     position: "absolute",
//                     left: "50%",
//                     top: "50%",
//                     transform: `
//                       translate(-50%, -50%)
//                       translate(${x * 0.35}px, ${-y * 0.65}px)
//                       rotate(${angle * 0.9}deg)
//                     `,
//                     transformOrigin: "50% 100%",
//                     width: 72,
//                     height: 120,
//                     display: "grid",
//                     placeItems: "center",
//                     pointerEvents: "none",
//                   }}
//                 >
//                   {node}
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       )}

//       {/* “Vase” at the bottom (IN FRONT of stems) */}
//       <div
//         className="absolute left-1/2"
//         style={{
//           bottom: 120,           // ⬅️ lower the vase
//           transform: "translateX(-50%)",
//           width: 120,
//           height: 100,
//           zIndex: 2,
//         }}
//       >
//         <svg width="120" height="80" viewBox="0 0 120 80" fill="none">
//           <defs>
//             <linearGradient id="vaseFill" x1="0" y1="0" x2="0" y2="1">
//               <stop offset="0" stopColor="#ff97c2" stopOpacity="0.95" />
//               <stop offset="1" stopColor="#ff6fa8" stopOpacity="0.95" />
//             </linearGradient>
//           </defs>
//           {/* vase body */}
//           <path
//             d="M20 10 C30 10 40 8 60 8 C80 8 90 10 100 10 L90 70 C80 75 40 75 30 70 L20 10 Z"
//             fill="url(#vaseFill)"
//             opacity={0.9}
//           />
//           {/* bow */}
//           <circle cx="60" cy="46" r="5" fill="#ff4b96" />
//           <path
//             d="M60 46 L45 40 C42 39 40 39 39 41 C38 43 39 45 41 46 L54 49"
//             stroke="#ff4b96"
//             strokeWidth="3"
//             strokeLinecap="round"
//           />
//           <path
//             d="M60 46 L75 40 C78 39 80 39 81 41 C82 43 81 45 79 46 L66 49"
//             stroke="#ff4b96"
//             strokeWidth="3"
//             strokeLinecap="round"
//           />
//         </svg>
//       </div>
//     </div>
//   );
// }

import { useDrop } from "react-dnd";
import { ReactNode } from "react";

interface DropZoneProps {
  id: string;
  position: { x: number; y: number };
  onDrop: (flowerId: string, flowerType: string) => void;
  placedFlowers?: ReactNode[];
  label?: string;
}

export function DropZone({
  position,
  onDrop,
  placedFlowers = [],
  label,
}: DropZoneProps) {
  const [{ isOver }, drop] = useDrop(
    () => ({
      accept: "FLOWER",
      drop: (item: { id: string; flowerType: string }) =>
        onDrop(item.id, item.flowerType),
      collect: (monitor) => ({
        isOver: monitor.isOver(),
      }),
    }),
    [onDrop]
  );

  return (
    <div
      ref={drop}
      className="absolute rounded-full transition-transform grid place-items-center"
      style={{
        left: position.x - 180,
        top: position.y - 130,
        width: 360,
        height: 260,
        background:
          "radial-gradient(circle at center, rgba(255, 192, 203, 0.22), rgba(255, 192, 203, 0) 70%)",
        boxShadow: isOver ? "0 8px 24px rgba(255, 105, 180, 0.25)" : "none",
      }}
    >
      {/* Label when empty */}
      {label && placedFlowers.length === 0 && (
        <div
          className="absolute -top-7 text-sm font-semibold"
          style={{ color: "rgba(194, 24, 91, .85)" }}
        >
          {label}
        </div>
      )}

      {/* Placed flowers, arranged like a bouquet fan (BEHIND the vase) */}
      {placedFlowers.length > 0 && (
        <div
          className="pointer-events-none absolute inset-0"
          style={{ zIndex: 1 }} // flowers layer
        >
          <div
            style={{
              position: "absolute",
              left: "50%",
              bottom: 80,
              transform: "translateX(-50%)",
              width: 260,
              height: 180,
            }}
          >
            {placedFlowers.map((node, index) => {
              const count = Math.max(placedFlowers.length, 1);
              const spread = Math.min(60, 18 * (count - 1)); // total degrees
              const startAngle = -spread / 2;
              const angle =
                startAngle + (spread / Math.max(count - 1, 1)) * index;
              const radius = 65;

              const radians = (angle * Math.PI) / 180;
              const x = radius * Math.sin(radians);
              const y = radius * Math.cos(radians);

              return (
                <div
                  key={index}
                  style={{
                    position: "absolute",
                    left: "50%",
                    top: "50%",
                    transform: `
                      translate(-50%, -50%)
                      translate(${x * 0.35}px, ${-y * 0.65}px)
                      rotate(${angle * 0.9}deg)
                    `,
                    transformOrigin: "50% 100%",
                    width: 72,
                    height: 120,
                    display: "grid",
                    placeItems: "center",
                    pointerEvents: "none",
                  }}
                >
                  {node}
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* “Vase” at the bottom (IN FRONT of stems) */}
      <div
        className="absolute left-1/2"
        style={{
          bottom: 120,                // vertical position
          transform: "translateX(-50%)",
          width: 140,                 // ⬅️ bigger wrapper
          height: 110,
          zIndex: 2,
        }}
      >
        <svg
          width="140"                 // ⬅️ bigger SVG → bigger vase
          height="100"
          viewBox="0 0 120 80"
          fill="none"
        >
          <defs>
            <linearGradient id="vaseFill" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0" stopColor="#ff97c2" stopOpacity="0.95" />
              <stop offset="1" stopColor="#ff6fa8" stopOpacity="0.95" />
            </linearGradient>
          </defs>
          {/* vase body */}
          <path
            d="M20 10 C30 10 40 8 60 8 C80 8 90 10 100 10 L90 70 C80 75 40 75 30 70 L20 10 Z"
            fill="url(#vaseFill)"
            opacity={0.9}
          />
          {/* bow */}
          <circle cx="60" cy="46" r="5" fill="#ff4b96" />
          <path
            d="M60 46 L45 40 C42 39 40 39 39 41 C38 43 39 45 41 46 L54 49"
            stroke="#ff4b96"
            strokeWidth="3"
            strokeLinecap="round"
          />
          <path
            d="M60 46 L75 40 C78 39 80 39 81 41 C82 43 81 45 79 46 L66 49"
            stroke="#ff4b96"
            strokeWidth="3"
            strokeLinecap="round"
          />
        </svg>
      </div>
    </div>
  );
}
