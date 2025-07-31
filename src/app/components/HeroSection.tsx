'use client'

import Image from 'next/image'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { FaSquareXTwitter } from "react-icons/fa6";
export default function HeroSection() {
  return (
    <section className="relative min-h-screen bg-black text-white px-6 py-12 flex justify-center overflow-hidden">
      {/* 🔦 Radial Gradient Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.08),_transparent_70%)] z-0"></div>

      <div className="relative z-10 w-full max-w-5xl flex flex-col md:flex-row gap-10 items-center md:items-start">

        {/* Profile Image */}
        <Image
          src="/image.png"
          alt="Profile"
          width={120}
          height={120}
          className="rounded-full border border-gray-700"
        />

        {/* Main Content */}
        <div className="flex-1">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2">
            <h1 className="text-3xl font-bold">Hello, This is Akshat Jain</h1>
            <span className="mt-2 sm:mt-0 inline-flex items-center gap-2 px-3 bg-pink-200 py-1 text-sm rounded-full cursor-pointer hover:bg-pink-300 transition">
              {/* Add any tag or icon here if needed */}
            </span>
          </div>

          <p className="text-gray-400 mb-4">Full-Stack Developer</p>

          {/* Social Links */}
          <div className="flex gap-4 text-xl mb-6">
            <a href="https://github.com/Jain-Akshat02" target="_blank" rel="noopener noreferrer">
              <FaGithub className="hover:text-gray-300" />
            </a>
            <a href="https://linkedin.com/in/your-link" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="hover:text-gray-300" />
            </a>
            <a href="https://x.com/Jain_Akshat01" target="_blank" rel="noopener noreferrer">
              <FaSquareXTwitter className="hover:text-gray-300" />
            </a>
          </div>

          {/* About Me */}
          <div className="mb-6">
            <h2 className="font-semibold text-lg mb-1">About Me.</h2>
            <p className="text-gray-300 leading-relaxed">
              Hey! I'm Akshat, a Computer Science undergrad passionate about building full-stack applications that are clean, practical, and solve real-world problems. I love shipping fast, learning faster, and turning concepts into usable, working products.
            </p>
          </div>

          {/* Hire Me */}
          <div>
            <h2 className="font-semibold text-lg mb-1">Let's Work Together</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              I'm open to internships and freelance opportunities.If you have any exciting projects or opportunities, don't hesitate to reach out!
            </p>
            <a
              href="mailto:jainakshat_02@protonmail.com"
              className="inline-block bg-white text-black font-semibold px-4 py-2 rounded hover:bg-gray-200 transition"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
