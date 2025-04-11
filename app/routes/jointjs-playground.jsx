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
      frozen: true,
      drawGrid: true,
      gridSize: 50,
      async: true,
      sorting: dia.Paper.sorting.APPROX,
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

    graph.addCell(rect);
    graph.addCell(rect2);
    paper.unfreeze();
    return () => {
      paper.remove();
    };
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">JointJS 플레이그라운드</h1>
      <div
        ref={paperRef}
        className="border border-gray-300 rounded-lg w-200 h-200"
      />
    </div>
  );
}
