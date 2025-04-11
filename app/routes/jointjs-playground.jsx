import { useEffect, useRef } from "react";
import * as joint from "@joint/core";

export default function JointJsPlayground() {
  const paperRef = useRef();
  const { dia, shapes } = joint;

  useEffect(() => {
    const graph = new dia.Graph();
    const paper = new dia.Paper({
      model: graph,
      el: paperRef.current,
      background: {
        color: "#f0f0f0",
      },
      drawGrid: true,
      gridSize: 50,
      async: true,
      sorting: dia.Paper.sorting.APPROX,
      width: window.innerWidth * 0.8,
      height: window.innerHeight * 0.8,
    });

    const rect = new shapes.standard.Rectangle({
      position: { x: 100, y: 100 },
      size: { width: 100, height: 100 },
      attrs: {
        body: { fill: "red" },
        label: { text: "Hello", fill: "white" },
      },
    });

    const rect2 = new shapes.standard.Rectangle({
      position: { x: 200, y: 200 },
      size: { width: 100, height: 100 },
      attrs: {
        body: { fill: "blue" },
        label: { text: "World", fill: "white" },
      },
    });

    const link = new shapes.standard.Link({
      source: { id: rect.id },
      target: { id: rect2.id },
    });

    graph.addCell(rect);
    graph.addCell(rect2);
    graph.addCell(link);

    return () => {
      paper.remove();
    };
  }, []);

  return (
    <div className="p-4 flex flex-col items-center justify-center">
      <h1 className="text-2xl font-bold mb-4">JointJS 플레이그라운드</h1>
      <div ref={paperRef} className="border border-gray-300 rounded-lg" />
    </div>
  );
}
