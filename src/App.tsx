import { useMemo, useState } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { DraggableFlower } from "./components/DraggableFlower";
import { DropZone } from "./components/DropZone";
import { CompletionModal } from "./components/CompletionModal";
import { RoseFlower } from "./components/flowers/RoseFlower";
import { SunflowerFlower } from "./components/flowers/SunflowerFlower";
import { TulipFlower } from "./components/flowers/TulipFlower";
import { BabysBreathFlower } from "./components/flowers/BabysBreath";
import { LavenderFlower } from "./components/flowers/LavenderFlower";
import "./styles/globals.css";
import "./index.css";

type FlowerType = "rose" | "sunflower" | "tulip" | "daisy" | "lavender";

type Flower = {
  id: string;
  type: FlowerType;
  component: JSX.Element;
  start: { x: number; y: number };
};

const CANVAS_WIDTH = 960;
const CANVAS_HEIGHT = 540;

export default function App() {
  // Load pixel font
  const pixelFont = {
    fontFamily: '"Press Start 2P", cursive',
  };

  const flowers: Flower[] = useMemo(
    () => [
      { id: "f1", type: "rose", component: <SunflowerFlower />, start: { x: 160, y: 230 } },
      { id: "f2", type: "sunflower", component: <SunflowerFlower />, start: { x: CANVAS_WIDTH - 160, y: 230 } },
      { id: "f3", type: "tulip", component: <RoseFlower />, start: { x: 260, y: CANVAS_HEIGHT - 90 } },
      { id: "f4", type: "lavender", component: <BabysBreathFlower />, start: { x: CANVAS_WIDTH / 2, y: CANVAS_HEIGHT - 70 } },
      { id: "f5", type: "daisy", component: <BabysBreathFlower />, start: { x: CANVAS_WIDTH - 260, y: CANVAS_HEIGHT - 90 } },
    ],
    []
  );

  const center = { x: CANVAS_WIDTH / 2, y: CANVAS_HEIGHT / 2 + 10 };
  const [placedIds, setPlacedIds] = useState<string[]>([]);

  const handleDrop = (flowerId: string) => {
    setPlacedIds((prev) => (prev.includes(flowerId) ? prev : [...prev, flowerId]));
  };

  const allPlaced = placedIds.length === flowers.length;

  return (
    <DndProvider backend={HTML5Backend}>
      {/* Full screen, centered canvas, light-pink background */}
      <div
        className="min-h-screen w-full flex items-center justify-center"
        style={{ backgroundColor: "#ffe6f2" }}
      >
        {/* Main canvas */}
        <div
          className="relative"
          style={{ width: CANVAS_WIDTH, height: CANVAS_HEIGHT }}
        >
          {/* Header */}
          <div
            className="absolute top-4 left-1/2 -translate-x-1/2 text-center"
            style={pixelFont}
          >
            <h1
              className="text-xl md:text-2xl font-bold"
              style={{ color: "#e91e63", ...pixelFont }}
            >
              🌸 ASSEMBLE THE BOUQUET 🌸
            </h1>

            <p
              className="mt-2 text-xs md:text-sm"
              style={{ color: "#d81b60", ...pixelFont }}
            >
            </p>
          </div>

          {/* Drop zone */}
          <DropZone
            id="center"
            position={center}
            onDrop={handleDrop}
            placedFlowers={
              placedIds
                .map((id) => flowers.find((f) => f.id === id)?.component ?? null)
                .filter(Boolean) as JSX.Element[]
            }
          />

          {/* Draggable flowers */}
          {flowers.map((f) => (
            <DraggableFlower
              key={f.id}
              id={f.id}
              type={f.type}
              flowerComponent={f.component}
              position={f.start}
              isPlaced={placedIds.includes(f.id)}
            />
          ))}
        </div>
      </div>

      {/* Modal when complete */}
      <CompletionModal isOpen={allPlaced} />
    </DndProvider>
  );
}
