// import { motion } from "motion/react";
// import { useEffect, useState } from "react";

// interface CompletionModalProps {
//   isOpen: boolean;
// }

// interface Petal {
//   id: number;
//   x: number;
//   delay: number;
//   duration: number;
//   rotation: number;
// }

// export function CompletionModal({ isOpen }: CompletionModalProps) {
//   const [petals, setPetals] = useState<Petal[]>([]);

//   // Pink petal colors
//   const COLORS = ["#ff8fb7", "#ff6fa5", "#ff9bbf", "#ff76b3"];

//   useEffect(() => {
//     if (!isOpen) return;

//     const generated: Petal[] = Array.from({ length: 120 }).map((_, i) => ({
//       id: i,
//       x: Math.random() * 100,
//       delay: Math.random() * 0.8,
//       duration: 4 + Math.random() * 2,
//       rotation: Math.random() * 360,
//     }));

//     setPetals(generated);
//   }, [isOpen]);

//   if (!isOpen) return null;

//   return (
//     <motion.div
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       style={{
//         position: "fixed",
//         inset: 0,
//         zIndex: 50,
//         overflow: "hidden",
//         background: "rgba(255, 230, 242, 0.9)",
//       }}
//     >
//       {/* Container for petals + text */}
//       <div
//         style={{
//           position: "relative",
//           width: "100%",
//           height: "100%",
//         }}
//       >
//         {/* Flower petal rain */}
//         <div
//           style={{
//             position: "absolute",
//             inset: 0,
//             pointerEvents: "none",
//             zIndex: 1,
//           }}
//         >
//           {petals.map((p) => (
//             <motion.div
//               key={p.id}
//               style={{
//                 position: "absolute",
//                 width: "18px",
//                 height: "18px",
//                 left: `${p.x}vw`,
//                 top: "-3vh",
//                 backgroundColor: COLORS[p.id % COLORS.length],
//                 borderRadius: "50% 80% 50% 80%",
//                 zIndex: 1,
//               }}
//               initial={{ y: 0, rotate: p.rotation }}
//               animate={{
//                 y: "120vh",
//                 rotate: p.rotation + 360,
//               }}
//               transition={{
//                 duration: p.duration,
//                 repeat: Infinity,
//                 ease: "easeInOut",
//               }}
//             />
//           ))}
//         </div>

//         {/* Centered text */}
//         <motion.div
//           initial={{ scale: 0.85 }}
//           animate={{ scale: 1 }}
//           transition={{ type: "spring", stiffness: 120, damping: 12 }}
//           style={{
//             position: "absolute",
//             top: "40%",      // <-- back in the center
//             left: "15%",
//             transform: "translate(-50%, -50%)",
//             zIndex: 2,
//             textAlign: "center",
//             whiteSpace: "nowrap",
//           }}
//         >
//           <div
//             style={{
//               fontFamily: '"Press Start 2P", cursive',
//               fontSize: "clamp(1.6rem, 3vw, 3rem)",
//               color: "#c2185b",
//               textShadow: `
//                 4px 4px 0px #000,
//                 3px 3px 0px #000,
//                 2px 2px 0px #000
//               `,
//               lineHeight: 1.4,
//             }}
//           >
//             CAN I BE YOUR BOYFRIEND?
//           </div>
//         </motion.div>
//       </div>
//     </motion.div>
//   );
// }

import { motion } from "motion/react";
import { useEffect, useState } from "react";

interface CompletionModalProps {
  isOpen: boolean;
}

interface Petal {
  id: number;
  x: number;
  rotation: number;
  duration: number;
  color: string;
}

const COLORS = ["#ff8fb7", "#ff6fa5", "#ff9bbf", "#ff76b3"];

// how many ms between new petals
const SPAWN_INTERVAL_MS = 50; // smaller = more petals per second
const INITIAL_PETAL_COUNT = 60; // petals spawned immediately when modal opens

export function CompletionModal({ isOpen }: CompletionModalProps) {
  const [petals, setPetals] = useState<Petal[]>([]);

  // helper: spawn a single petal
  const spawnPetal = () => {
    setPetals((prev) => [
      ...prev,
      {
        id: Date.now() + Math.random(), // simple unique id
        x: Math.random() * 100, // vw
        rotation: Math.random() * 360,
        duration: 4 + Math.random() * 2, // 4–6s fall
        color: COLORS[Math.floor(Math.random() * COLORS.length)],
      },
    ]);
  };

  useEffect(() => {
    if (!isOpen) {
      setPetals([]);
      return;
    }

    // spawn an initial batch so it's not empty at the start
    for (let i = 0; i < INITIAL_PETAL_COUNT; i++) {
      spawnPetal();
    }

    // then spawn continuously
    const intervalId = setInterval(spawnPetal, SPAWN_INTERVAL_MS);

    return () => {
      clearInterval(intervalId);
      setPetals([]);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen]);

  if (!isOpen) return null;

  // remove a petal once its animation finishes
  const handlePetalDone = (id: number) => {
    setPetals((prev) => prev.filter((p) => p.id !== id));
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 50,
        overflow: "hidden",
        background: "rgba(255, 230, 242, 0.9)",
      }}
    >
      {/* Container for petals + text */}
      <div
        style={{
          position: "relative",
          width: "100%",
          height: "100%",
        }}
      >
        {/* Flower petal rain */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            pointerEvents: "none",
            zIndex: 1,
          }}
        >
          {petals.map((p) => (
            <motion.div
              key={p.id}
              style={{
                position: "absolute",
                width: "18px",
                height: "18px",
                left: `${p.x}vw`,
                top: "-4vh",
                backgroundColor: p.color,
                borderRadius: "50% 80% 50% 80%",
                zIndex: 1,
              }}
              initial={{ y: -40, rotate: p.rotation }}
              animate={{
                y: "130vh",
                rotate: p.rotation + 360,
              }}
              transition={{
                duration: p.duration,
                ease: "easeInOut",
              }}
              onAnimationComplete={() => handlePetalDone(p.id)}
            />
          ))}
        </div>

        {/* Text */}
        <motion.div
          initial={{ scale: 0.85 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 120, damping: 12 }}
          style={{
            position: "absolute",
            top: "40%",
            left: "15%",
            transform: "translate(-50%, -50%)",
            zIndex: 2,
            textAlign: "center",
            whiteSpace: "nowrap",
          }}
        >
          <div
            style={{
              fontFamily: '"Press Start 2P", cursive',
              fontSize: "clamp(1.6rem, 3vw, 3rem)",
              color: "#c2185b",
              textShadow: `
                4px 4px 0px #000,
                3px 3px 0px #000,
                2px 2px 0px #000
              `,
              lineHeight: 1.4,
            }}
          >
            CAN I BE YOUR BOYFRIEND?
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
