import React, { useEffect, useRef } from "react";
import { FaReact, FaNodeJs, FaCss3Alt, FaHtml5 } from "react-icons/fa"; // Example icons

const skills = [
  { name: "React", icon: <FaReact /> },
  { name: "Node.js", icon: <FaNodeJs /> },
  { name: "CSS3", icon: <FaCss3Alt /> },
  { name: "HTML5", icon: <FaHtml5 /> },
  // Add more skills and icons
];

export default function SkillsSphere() {
  const sphereRef = useRef(null);

  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      {/* Left: Skills List */}
      <ul style={{ marginRight: "2rem" }}>
        {skills.map((skill) => (
          <li key={skill.name} style={{ display: "flex", alignItems: "center", marginBottom: "1rem" }}>
            <span style={{ marginRight: "0.5rem" }}>{skill.icon}</span>
            {skill.name}
          </li>
        ))}
      </ul>
      {/* Right: Sphere */}
      <div ref={sphereRef} style={{ width: 300, height: 300 }} />
    </div>
  );
}
