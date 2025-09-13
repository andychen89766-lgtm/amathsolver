import React, { useState } from "react";

export default function App() {
  const [problem, setProblem] = useState("");
  const [solution, setSolution] = useState("");
  const [usageCount, setUsageCount] = useState(0);
  const MAX_USAGE = 5;

  const handleSolve = async () => {
    if (usageCount >= MAX_USAGE) {
      setSolution("⚠️ You've reached the free usage limit for today.");
      return;
    }

    try {
      const res = await fetch("/api/solve", {
        method: "POST",
        body: JSON.stringify({ problem }),
      });

      const data = await res.json();

      if (data.solution) {
        setSolution(data.solution);
        setUsageCount(usageCount + 1);
      } else {
        setSolution("❌ Could not solve the problem. Try again.");
      }
    } catch {
      setSolution("⚠️ Error connecting to AI.");
    }
  };

  return (
    <div className="p-6 max-w-lg mx-auto">
      <h1 className="text-2xl font-bold mb-4">Amath Solver</h1>
      <textarea
        className="w-full p-2 border rounded"
        placeholder="Enter your word problem..."
        value={problem}
        onChange={(e) => setProblem(e.target.value)}
      />
      <button
        className="mt-3 px-4 py-2 bg-blue-500 text-white rounded"
        onClick={handleSolve}
      >
        Solve
      </button>

      <p className="mt-2 text-sm text-gray-600">
        Usage: {usageCount} / {MAX_USAGE}
      </p>

      {solution && (
        <div className="mt-4 p-3 bg-gray-100 rounded">
          <strong>Solution:</strong>
          <p>{solution}</p>
        </div>
      )}
    </div>
  );
}
