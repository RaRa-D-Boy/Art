"use client";
import {
  Excalidraw,
  convertToExcalidrawElements,
} from "@excalidraw/excalidraw";

import "@excalidraw/excalidraw/index.css";
import { useContext } from "react";
import { ThemeContext } from "../utils/theme/theme";

const ExcalidrawWrapper: React.FC = () => {
  const { theme } = useContext(ThemeContext);
  console.info(
    convertToExcalidrawElements([
      {
        type: "rectangle",
        id: "rect-1",
        width: 186.47265625,
        height: 141.9765625,
        x: 0,
        y: 0,
      },
    ])
  );
  return (
    <div className="h-screen w-full p-2">
      <Excalidraw
        theme={theme === "dark" ? "dark" : "light"}
        initialData={{
          appState: {
            viewBackgroundColor: theme === "dark" ? "#000000" : "#f3f3f3",
          },
        }}
      />
    </div>
  );
};
export default ExcalidrawWrapper;
