import React, { ReactNode } from "react";
import { useDrag } from "react-dnd";

export interface DraggableFlowerProps {
  id: string;
  type: string;
  flowerComponent: ReactNode;
  position: { x: number; y: number }; // canvas coordinates (baseline)
  isPlaced: boolean;
}

/**
 * Renders a single draggable flower.
 * - Starts at position.x, position.y (baseline)
 * - Hides once isPlaced === true
 * - Has no white card background – you drag just the flower.
 */
export function DraggableFlower({
  id,
  type,
  flowerComponent,
  position,
  isPlaced,
}: DraggableFlowerProps) {
  const [{ isDragging }, drag] = useDrag(
    () => ({
      type: "FLOWER",
      item: { id, flowerType: type },
      collect: (monitor) => ({
        isDragging: monitor.isDragging(),
      }),
    }),
    [id, type]
  );

  if (isPlaced) {
    // Once placed in bouquet, we no longer show the standalone draggable
    return null;
  }

  return (
    <div
      ref={drag}
      className="absolute cursor-move select-none"
      style={{
        left: position.x,
        top: position.y,
        transform: "translate(-50%, -100%)", // anchor by stem bottom
        opacity: isDragging ? 0.75 : 1,
        // No card / no visible box – only the flower SVG
      }}
    >
      <div
        style={{
          width: 96,
          height: 140,
          display: "grid",
          placeItems: "center",
        }}
      >
        {flowerComponent}
      </div>
    </div>
  );
}
