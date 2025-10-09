"use client";

import Image from "next/image";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import GitHubCalendar from "react-github-calendar";
import { motion } from "framer-motion";
import { Link } from "lucide-react";
import { Github } from "lucide-react";
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
  SiMongoose,
  SiGit,
  SiGithub,
  SiDocker,
  SiPostman,
  SiLinux,
} from "react-icons/si";
const skills = {
  Frontend: [
    { name: "React", icon: SiReact, color: "text-cyan-400" },
    { name: "Next.js", icon: SiNextdotjs, color: "text-white" },
    { name: "TailwindCSS", icon: SiTailwindcss, color: "text-sky-400" },
    { name: "JavaScript", icon: SiJavascript, color: "text-yellow-400" },
    { name: "TypeScript", icon: SiTypescript, color: "text-blue-400" },
    { name: "HTML5", icon: SiHtml5, color: "text-orange-500" },
    { name: "CSS3", icon: SiCss3, color: "text-blue-500" },
  ],
  Backend: [
    { name: "Node.js", icon: SiNodedotjs, color: "text-green-500" },
    { name: "Express", icon: SiExpress, color: "text-gray-300" },
  ],
  Database: [
    { name: "MongoDB", icon: SiMongodb, color: "text-green-400" },
    { name: "Mongoose", icon: SiMongoose, color: "text-red-400" },
  ],
  Tools: [
    { name: "Git", icon: SiGit, color: "text-red-500" },
    { name: "GitHub", icon: SiGithub, color: "text-white" },
    { name: "Docker", icon: SiDocker, color: "text-blue-400" },
    { name: "Postman", icon: SiPostman, color: "text-orange-400" },
    { name: "Linux", icon: SiLinux, color: "text-yellow-400" },
  ],
};

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
            Full-Stack Developer | MERN | Problem Solver
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
              <span className="text-purple-400 font-medium">MERN stack</span>,
              shipping fast, learning faster, and turning ideas into usable
              products.
            </p>
          </div>

          {/* Skills (Unified) */}
          <div className="mt-8 sm:mt-10">
            <h3 className="text-sm font-semibold text-neutral-400 mb-4">
              Skills
            </h3>
            <div className="grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4">
              {Object.values(skills)
                .flat()
                .map(({ name, icon: Icon, color }) => (
                  <div
                    key={name}
                    className="flex flex-col items-center gap-2 p-2 sm:p-3 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 transition-all duration-300"
                  >
                    <Icon className={`text-2xl sm:text-3xl ${color}`} />
                    <span className="text-xs sm:text-sm text-neutral-300">
                      {name}
                    </span>
                  </div>
                ))}
            </div>
          </div>

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
