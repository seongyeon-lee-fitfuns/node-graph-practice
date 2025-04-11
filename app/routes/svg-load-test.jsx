import { useState } from "react";

export default function SvgLoadTest() {
  const [count, setCount] = useState(100);
  const [svgs, setSvgs] = useState([]);

  const generateSvgs = () => {
    const newSvgs = Array.from({ length: count }, (_, i) => (
      <svg
        key={i}
        width="50"
        height="50"
        viewBox="0 0 50 50"
        className="border border-gray-300"
      >
        <circle
          cx="25"
          cy="25"
          r="20"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        />
        <text
          x="25"
          y="25"
          textAnchor="middle"
          dominantBaseline="middle"
          fontSize="12"
        >
          {i + 1}
        </text>
      </svg>
    ));
    setSvgs(newSvgs);
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">SVG 부하 테스트</h1>
      <div className="mb-4">
        <label className="mr-2">SVG 개수:</label>
        <input
          type="number"
          value={count}
          onChange={(e) => setCount(Number(e.target.value))}
          className="border p-1 mr-2"
          min="1"
        />
        <button
          onClick={generateSvgs}
          className="bg-blue-500 text-white px-4 py-1 rounded"
        >
          생성
        </button>
      </div>
      <div className="grid grid-cols-50 gap-4">{svgs}</div>
    </div>
  );
}
