"use client";

import Image from "next/image";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import GitHubCalendar from "react-github-calendar";
import { motion, useInView } from "framer-motion";
import { Link } from "lucide-react";
import { Github } from "lucide-react";
import { useRef } from "react";
import {
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiJavascript,
  SiTypescript,
  SiHtml5,
  SiCss3,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiGit,
  SiGithub,
  SiDocker,
  SiPostman,
  SiLinux,
  SiPrisma,
  SiPostgresql,
  SiFirebase,
  SiPython,
  SiNumpy,
  SiPandas,
  SiFastapi,
} from "react-icons/si";

const skills = [
  { name: "React", icon: SiReact, color: "#61DAFB" },
  { name: "Next.js", icon: SiNextdotjs, color: "#ffffff" },
  { name: "Tailwind", icon: SiTailwindcss, color: "#38BDF8" },
  { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
  { name: "HTML5", icon: SiHtml5, color: "#E34F26" },
  { name: "CSS3", icon: SiCss3, color: "#1572B6" },
  { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
  { name: "Express", icon: SiExpress, color: "#d1d5db" },
  { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
  { name: "PostgreSQL", icon: SiPostgresql, color: "#336791" },
  { name: "Prisma", icon: SiPrisma, color: "#5a67d8" },
  { name: "Firebase", icon: SiFirebase, color: "#FFCA28" },
  { name: "Docker", icon: SiDocker, color: "#2496ED" },
  { name: "Git", icon: SiGit, color: "#F05032" },
  { name: "GitHub", icon: SiGithub, color: "#ffffff" },
  { name: "Postman", icon: SiPostman, color: "#FF6C37" },
  { name: "Linux", icon: SiLinux, color: "#FCC624" },
  { name: "Python", icon: SiPython, color: "#3776AB" },
  { name: "NumPy", icon: SiNumpy, color: "#013243" },
  { name: "Pandas", icon: SiPandas, color: "#150458" },
  { name: "FastAPI", icon: SiFastapi, color: "#009688" },
];

function OrbitalSkills() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });

  // Two rings: inner (8 skills) and outer (10 skills)
  const inner = skills.slice(0, 8);
  const outer = skills.slice(8);

  const innerRadius = 110;
  const outerRadius = 195;
  const size = 460; // viewBox size
  const cx = size / 2;
  const cy = size / 2;

  return (
    <div className="mt-8 sm:mt-10" ref={ref}>
      <h3 className="text-sm font-semibold text-neutral-400 mb-4">Skills</h3>
      <div className="flex justify-center">
        <div
          className="relative"
          style={{ width: "min(460px, 92vw)", height: "min(460px, 92vw)" }}
        >
          <svg
            viewBox={`0 0 ${size} ${size}`}
            className="absolute inset-0 w-full h-full"
          >
            {/* Orbit rings */}
            <circle
              cx={cx}
              cy={cy}
              r={innerRadius}
              fill="none"
              stroke="rgba(255,255,255,0.07)"
              strokeWidth="1"
            />
            <circle
              cx={cx}
              cy={cy}
              r={outerRadius}
              fill="none"
              stroke="rgba(255,255,255,0.07)"
              strokeWidth="1"
            />
          </svg>

          {/* Center label */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <div className="flex flex-col items-center gap-1">
              <span className="text-xs font-semibold uppercase tracking-widest text-neutral-500">
                Tech
              </span>
              <span className="text-lg font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Stack
              </span>
            </div>
          </motion.div>

          {/* Inner ring icons */}
          {inner.map((skill, i) => {
            const angle = (i / inner.length) * 2 * Math.PI - Math.PI / 2;
            const x = cx + innerRadius * Math.cos(angle);
            const y = cy + innerRadius * Math.sin(angle);
            const Icon = skill.icon;
            return (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0 }}
                animate={
                  isInView
                    ? { opacity: 1, scale: 1 }
                    : { opacity: 0, scale: 0 }
                }
                transition={{ duration: 0.4, delay: i * 0.07 }}
                className="absolute flex flex-col items-center gap-1 -translate-x-1/2 -translate-y-1/2 cursor-default group"
                style={{
                  left: `${(x / size) * 100}%`,
                  top: `${(y / size) * 100}%`,
                }}
              >
                <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-full border border-white/10 bg-neutral-900/80 flex items-center justify-center shadow-md group-hover:border-white/30 transition-all duration-200">
                  <Icon style={{ color: skill.color }} className="text-lg sm:text-xl" />
                </div>
                <span className="text-[11px] sm:text-xs font-medium text-neutral-300 group-hover:text-white transition-colors whitespace-nowrap">
                  {skill.name}
                </span>
              </motion.div>
            );
          })}

          {/* Outer ring icons */}
          {outer.map((skill, i) => {
            const angle = (i / outer.length) * 2 * Math.PI - Math.PI / 2;
            const x = cx + outerRadius * Math.cos(angle);
            const y = cy + outerRadius * Math.sin(angle);
            const Icon = skill.icon;
            return (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0 }}
                animate={
                  isInView
                    ? { opacity: 1, scale: 1 }
                    : { opacity: 0, scale: 0 }
                }
                transition={{ duration: 0.4, delay: 0.3 + i * 0.07 }}
                className="absolute flex flex-col items-center gap-1 -translate-x-1/2 -translate-y-1/2 cursor-default group"
                style={{
                  left: `${(x / size) * 100}%`,
                  top: `${(y / size) * 100}%`,
                }}
              >
                <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-full border border-white/10 bg-neutral-900/80 flex items-center justify-center shadow-md group-hover:border-white/30 transition-all duration-200">
                  <Icon style={{ color: skill.color }} className="text-lg sm:text-xl" />
                </div>
                <span className="text-[11px] sm:text-xs font-medium text-neutral-300 group-hover:text-white transition-colors whitespace-nowrap">
                  {skill.name}
                </span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default function HeroSection() {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-neutral-950 via-neutral-900 to-neutral-950 text-neutral-100 px-4 sm:px-6 py-16 sm:py-20 md:py-28 overflow-hidden">
      <div className="relative z-10 mx-auto w-full max-w-6xl grid grid-cols-1 items-start gap-8 sm:gap-10 md:grid-cols-[auto,1fr]">
        {/* Profile Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="flex md:block justify-center"
        >
          <Image
            src="/image.png"
            alt="Profile"
            width={150}
            height={150}
            className="rounded-full ring-2 ring-purple-500/40 shadow-lg w-28 h-28 sm:w-36 sm:h-36 md:w-[150px] md:h-[150px]"
            priority
          />
        </motion.div>

        {/* Main Content */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex-1"
        >
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold tracking-tight bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
            Akshat Jain
          </h1>
          <p className="mt-3 text-sm sm:text-base md:text-lg text-neutral-300">
            Full-Stack Developer | Problem Solver
          </p>

          {/* Social Links */}
          <div className="mt-6 flex gap-5 text-xl sm:text-2xl text-neutral-400">
            <a
              aria-label="GitHub"
              href="https://github.com/Jain-Akshat02"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              <FaGithub />
            </a>
            <a
              aria-label="LinkedIn"
              href="https://linkedin.com/in/your-link"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition-colors"
            >
              <FaLinkedin />
            </a>
            <a
              aria-label="X (Twitter)"
              href="https://x.com/Jain_Akshat01"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-200 transition-colors"
            >
              <FaSquareXTwitter />
            </a>
          </div>

          {/* About Me */}
          <div className="mt-8 sm:mt-10">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-neutral-400">
              About Me
            </h2>
            <p className="mt-3 text-neutral-300 leading-relaxed max-w-2xl text-sm sm:text-base">
              Hey! I'm Akshat, a Computer Science undergrad passionate about
              building full-stack applications that are clean, practical, and
              solve real-world problems. I love working with{" "}
              TECHNOLOGY,
              shipping fast, learning faster, and turning ideas into usable
              products.
              <span className="block font-bold">I will get the things done.</span>
            </p>
          </div>

          {/* Skills — Orbital */}
          <OrbitalSkills />

          {/* GitHub Activity */}
          <div className="mt-10 sm:mt-12 rounded-lg border border-white/10 bg-black/30 p-4 sm:p-5 shadow-inner">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-neutral-400 mb-4">
              GitHub Activity
            </h2>
            <div className="-mx-4 sm:mx-0 overflow-x-auto">
              <div className="min-w-[560px] sm:min-w-0">
                <GitHubCalendar
                  username="Jain-Akshat02"
                  blockSize={12}
                  blockMargin={4}
                  colorScheme="dark"
                />
              </div>
            </div>
          </div>
          {/* Experience */}

          <section
  id="experience"
  className="mt-10 sm:mt-12 rounded-2xl border border-white/10 bg-black/30 p-6 sm:p-8 shadow-inner"
>
  <h2 className="text-sm font-semibold uppercase tracking-wider text-neutral-400 mb-2">
    Experience
  </h2>
  <h3 className="text-xl font-bold text-white mb-8">Internship</h3>
  <div className="mb-8">
      <h4 className="text-lg font-semibold text-white mb-1 flex items-center gap-2">
          <Image src="/robofly.png" alt="Robofly" width={24} height={24} className="rounded-sm" />
          Backend Dev at Robofly
      </h4>
      <p className="text-neutral-300 leading-relaxed text-sm">
          Built the backend bridge between a Python-based wildfire prediction model and the frontend using FastAPI. 
          The core challenge — and honestly the interesting part — was taking a user-defined polygon, splitting it into 
          a precise grid, computing the centroid of each cell, and running FWI calculations per grid point. 
          Rather than handing back a blunt aggregated score, I returned granular high-risk coordinates so the 
          frontend could render exactly where fire probability spiked. Spatial decomposition, ML integration, 
          structured output — handled it.
      </p>
  </div>
  <hr className="border-white/10 my-6" />
  <h3 className="text-xl font-bold text-white mb-8">Freelance Projects</h3>

  {/* Project 1 */}
  <div className="mb-8">
    <h4 className="text-lg font-semibold text-white mb-1">
      🩱 Inventory Management System — Lingerie Business (Jan-2025)
    </h4>
    <p className="text-neutral-300 leading-relaxed text-sm">
      Developed a <span className="text-white font-medium">custom inventory management web app</span> using{" "}
      <span className="text-white">Next.js</span>, <span className="text-white">Express</span>, and{" "}
      <span className="text-white">MongoDB</span> to streamline product tracking and stock updates.
      Designed intuitive dashboards for real-time monitoring and implemented role-based access for secure management.
      Improved operational efficiency by reducing manual tracking effort.
    </p>
  </div>

  {/* Project 2 */}
  <div>
    <h4 className="text-lg font-semibold text-white mb-1">
      🌐 Landing Page — Trade Association       (May-2025)
    </h4>
    <p className="text-neutral-300 leading-relaxed text-sm">
      Built a <span className="text-white font-medium">modern, responsive landing page</span> using{" "}
      <span className="text-white">Next.js</span> and <span className="text-white">Tailwind CSS</span>, aligned with the
      association’s branding. Integrated smooth scroll animations and interactive sections for improved engagement.
      Delivered a lightweight, SEO-friendly site with excellent performance and accessibility scores.
    </p>
  </div>
</section>

          {/* Projects */}
          <section
            id="projects"
            className="mt-10 sm:mt-12 rounded-lg border border-white/10 bg-black/30 p-4 sm:p-5 shadow-inner"
          >
            <h2 className="text-sm font-semibold uppercase tracking-wider text-neutral-400 mb-6">
              Projects
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
              <div className="rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 transition-colors p-3 sm:p-4">
                <Image
                  src="/chat-app.png"
                  alt="Portfolio Website"
                  width={640}
                  height={360}
                  className="w-full h-auto rounded-md ring-1 ring-white/10 cursor-pointer"
                  onClick={() =>
                    window.open("https://chat-app-uf4o.onrender.com/", "_blank")
                  }
                />
                <div className="mt-3 flex flex-wrap items-center justify-between gap-2">
                  <h3 className="text-sm sm:text-base font-semibold text-neutral-100">
                    Chat App
                  </h3>
                  <a href="">
                    <Github
                      className="h-5 w-5 text-neutral-300 ml-45 sm:ml-10 cursor-pointer"
                      onClick={() => {
                        window.open(
                          "https://github.com/Jain-Akshat02/Chat-App"
                        );
                      }}
                    />
                  </a>
                  <a
                    href="https://chat-app-uf4o.onrender.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Link
                      className="h-5 w-5 text-neutral-300 cursor-pointer"
                      onClick={() =>
                        window.open(
                          "https://chat-app-uf4o.onrender.com/",
                          "_blank"
                        )
                      }
                    />
                  </a>
                </div>
                <p className="mt-1 text-xs sm:text-sm text-neutral-400">
                  A modern personal chat app built with MERN Stack and
                  TailwindCSS.
                </p>
              </div>
              <div className="rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 transition-colors p-3 sm:p-4">
                <Image
                  src="/stockapp.png"
                  alt="Portfolio Website"
                  width={640}
                  height={420}
                  className="w-full h-48 rounded-md ring-1 ring-white/10 cursor-pointer"
                  onClick={() =>
                    window.open(
                      "https://stock-app-alpha-blond.vercel.app/",
                      "_blank"
                    )
                  }
                />
                <div className="mt-3 flex flex-wrap items-center justify-between gap-2">
                  <h3 className="text-sm sm:text-base font-semibold text-neutral-100">
                    Stock App
                  </h3>
                  <Github
                    className="h-5 w-5 text-neutral-300 ml-45 sm:ml-10 cursor-pointer"
                    onClick={() => {
                      window.open("https://github.com/Jain-Akshat02/stock-app");
                    }}
                  />
                  <Link
                    className="h-5 w-5 text-neutral-300 cursor-pointer"
                    onClick={() =>
                      window.open(
                        "https://stock-app-alpha-blond.vercel.app/",
                        "_blank"
                      )
                    }
                  />
                </div>
                <p className="mt-1 text-xs sm:text-sm text-neutral-400">
                  An inventory maintainer app built with Next.js and
                  TailwindCSS.
                </p>
              </div>
            </div>
            

          </section>

          {/* Writings */}
          <section
            id="writings"
            className="mt-10 sm:mt-12 rounded-lg border border-white/10 bg-black/30 p-4 sm:p-5 shadow-inner"
          >
            <h2 className="text-sm font-semibold uppercase tracking-wider text-neutral-400 mb-6">
              Writings
            </h2>
            <p className="text-neutral-500 text-sm mb-6">
              I write about things I build, learn, and find interesting — mostly around web dev and software.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Placeholder article card — replace with real ones */}
              <a
                href="https://medium.com/@your-username"
                target="_blank"
                rel="noopener noreferrer"
                className="group rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 p-4 transition-all duration-200"
              >
                <span className="text-xs text-purple-400 font-medium">Coming soon</span>
                <h3 className="mt-2 text-sm font-semibold text-neutral-100 group-hover:text-white">
                  First article dropping soon
                </h3>
                <p className="mt-1 text-xs text-neutral-500">
                  Stay tuned — articles on building with MERN, lessons learned, and more.
                </p>
                <span className="mt-3 inline-block text-xs text-neutral-400 group-hover:text-purple-400 transition-colors">
                  Read on Medium →
                </span>
              </a>
            </div>
          </section>

          {/* Contact */}
          <section className="mt-10 sm:mt-12" id="contact">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-neutral-400">
              Let's Work Together
            </h2>
            <p className="mt-3 text-neutral-300 leading-relaxed max-w-2xl text-sm sm:text-base">
              I'm open to{" "}
              <span className="text-green-400 font-medium">internships</span>{" "}
              and{" "}
              <span className="text-green-400 font-medium">
                freelance opportunities
              </span>
              . If you’ve got something interesting, feel free to reach out.
            </p>
            <a
              href="mailto:jainakshat_02@protonmail.com"
              className="mt-5 inline-flex items-center rounded-xl border border-purple-500/30 bg-purple-600/20 px-5 sm:px-6 py-2 text-sm font-semibold text-purple-300 hover:bg-purple-600/30 hover:text-white transition-all"
            >
              ✉️ Get in Touch
            </a>
          </section>
        </motion.div>
      </div>
    </div>
  );
}
