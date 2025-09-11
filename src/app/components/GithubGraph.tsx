"use client";

import GitHubCalendar from "react-github-calendar";

export default function GitHubGraph() {
  return (
    <div className="max-w-4xl mx-auto my-12 bg-white p-6 rounded-xl shadow">
      <h2 className="text-2xl font-bold mb-4">GitHub Contributions</h2>
      <GitHubCalendar
        username="Jain-Akshat02"
        blockSize={15}
        blockMargin={5}
        colorScheme="light"
        fontSize={14}
      />
    </div>
  );
}
