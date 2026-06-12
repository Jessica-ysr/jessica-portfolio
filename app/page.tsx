'use client';

import { useEffect, useState, useRef } from 'react';

export default function Home() {
  const [isHovered, setIsHovered] = useState(false);
  
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let mouseX = 0;
    let mouseY = 0;
    let ringX = 0;
    let ringY = 0;

    const moveCursor = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) translate(-50%, -50%)`;
      }
    };

    const tick = () => {
      ringX += (mouseX - ringX) * 0.15;
      ringY += (mouseY - ringY) * 0.15;

      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringX}px, ${ringY}px, 0) translate(-50%, -50%)`;
      }
      requestAnimationFrame(tick);
    };

    window.addEventListener('mousemove', moveCursor);
    const animationFrameId = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <main 
      className="md:cursor-none relative overflow-x-hidden scroll-smooth pb-12"
      style={{ backgroundColor: '#0A0A0A', color: '#FDFAF6' }}
    >
      {/* Import specific fonts for the new section */}
      <style dangerouslySetInnerHTML={{__html: `
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap');
      `}} />

      {/* 60FPS HARDWARE-ACCELERATED LILAC DUAL CURSOR */}
      <div
        ref={dotRef}
        className="hidden md:block fixed top-0 left-0 w-3 h-3 rounded-full pointer-events-none z-50 will-change-transform mix-blend-screen"
        style={{ backgroundColor: '#E0B3FF', transform: 'translate3d(0,0,0) translate(-50%, -50%)' }}
      />
      <div
        ref={ringRef}
        className="hidden md:block fixed top-0 left-0 w-9 h-9 border rounded-full pointer-events-none z-50 will-change-transform transition-all duration-200 ease-out"
        style={{ 
          borderColor: isHovered ? '#E0B3FF' : '#6A2CFF',
          backgroundColor: isHovered ? 'rgba(106, 44, 255, 0.25)' : 'transparent',
          opacity: isHovered ? 1 : 0.5,
          width: isHovered ? '54px' : '36px',
          height: isHovered ? '54px' : '36px'
        }}
      />

      {/* BACKGROUND VIOLET INFUSED RADIANCE */}
      <div 
        className="absolute top-0 right-0 w-[800px] h-[800px] rounded-full opacity-20 blur-3xl pointer-events-none"
        style={{ background: 'radial-gradient(circle, #6A2CFF 0%, transparent 70%)' }}
      />

      {/* NAVIGATION BAR */}
      <nav 
        className="fixed top-0 inset-x-0 z-40 backdrop-blur-md border-b px-6 lg:px-16 xl:px-24 py-5 flex justify-between items-center gap-4"
        style={{ backgroundColor: 'rgba(10, 10, 10, 0.9)', borderColor: 'rgba(43, 15, 107, 0.4)' }}
      >
        <div className="text-2xl font-black tracking-wider" style={{ color: '#E0B3FF' }}>JSR</div>
        
        <div className="flex items-center gap-6 xl:gap-10">
          <div className="hidden lg:flex gap-6 xl:gap-8 text-sm xl:text-base font-medium">
            <a href="#about" className="hover:text-[#B36BFF] transition-colors">About</a>
            <a href="#skills" className="hover:text-[#B36BFF] transition-colors">Skills</a>
            <a href="#projects" className="hover:text-[#B36BFF] transition-colors">Projects</a>
            <a href="#experience" className="hover:text-[#B36BFF] transition-colors">Experience</a>
            <a href="#credentials" className="hover:text-[#B36BFF] transition-colors">Credentials</a>
            <a href="#contact" className="hover:text-[#B36BFF] transition-colors">Contact</a>
          </div>
          <a 
            href="/resume-jessica.pdf" 
            target="_blank"
            rel="noopener noreferrer"
            className="border px-6 py-2 rounded-full text-sm font-bold tracking-wider transition-all uppercase whitespace-nowrap"
            style={{ borderColor: '#B36BFF', color: '#B36BFF' }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            Resume ↓
          </a>
        </div>
      </nav>

      {/* 1. HERO BLOCK */}
      <section className="min-h-screen max-w-[90rem] mx-auto px-6 lg:px-16 xl:px-24 flex flex-col lg:flex-row items-center justify-center lg:justify-between gap-12 lg:gap-10 pt-32 pb-16 lg:py-0">
        
        {/* TEXT CONTAINER */}
        <div className="flex-1 space-y-6 lg:space-y-8 text-left order-2 lg:order-1 min-w-0">
          <div 
            className="inline-flex items-center gap-2 px-4 py-1.5 border rounded-full text-xs md:text-sm font-mono"
            style={{ backgroundColor: '#0D0B1F', borderColor: '#2B0F6B', color: '#E0B3FF' }}
          >
            <span className="w-2.5 h-2.5 bg-[#a855f7] rounded-full animate-pulse" />
            Open to internships · Full Stack dev + AI/ML
          </div>
          
          <div className="space-y-2 lg:space-y-4">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-4xl xl:text-5xl font-bold tracking-tight text-white block">
              HI, my name is
            </h2>
            <h1 
              style={{ color: '#B36BFF', fontFamily: "'Playfair Display', serif" }} 
              className="text-[2.2rem] sm:text-[3rem] md:text-[3.5rem] lg:text-[3rem] xl:text-[4rem] font-black tracking-tight leading-none block whitespace-nowrap"
            >
              Jessica Shiny Ruphina 
            </h1>
          </div>

          <p className="text-base md:text-lg lg:text-xl leading-relaxed opacity-90 text-left max-w-2xl">
            A Computer Science undergrad building at the intersection of full-stack development and AI/ML — turning ideas into products that actually ship. I've organized tech events, moderated an international conference, and contributed to the AWS Cloud Club design team. I enjoy solving real problems with clean, purposeful code, and I'm constantly learning, building, and leveling up toward roles that sit at the edge of web development and intelligent systems.
          </p>

          <div className="flex flex-wrap gap-4 pt-4 justify-start">
            <a
              href="/resume-jessica.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white px-8 py-4 lg:px-10 lg:py-5 rounded-full font-black shadow-lg transition-all duration-300 uppercase text-xs lg:text-sm tracking-wider text-center"
              style={{ backgroundColor: '#6A2CFF' }}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              Download Resume
            </a>
            <a
              href="#projects"
              className="border text-white px-8 py-4 lg:px-10 lg:py-5 rounded-full font-bold hover:bg-[#0D0B1F] transition-all text-xs lg:text-sm uppercase tracking-wider text-center"
              style={{ borderColor: '#2B0F6B' }}
            >
              View Work
            </a>
          </div>
        </div>

        {/* PROFILE SPHERE - CENTER ALIGNED */}
        <div className="flex-shrink-0 relative w-64 h-64 sm:w-80 sm:h-80 lg:w-[350px] lg:h-[350px] xl:w-[420px] xl:h-[420px] flex items-center justify-center order-1 lg:order-2">
          <div 
            className="absolute inset-0 rounded-full opacity-30 blur-[50px] animate-pulse" 
            style={{ background: 'linear-gradient(to top right, #6A2CFF, #E0B3FF)' }}
          />
          <div 
            className="relative w-full h-full rounded-full overflow-hidden border-4 lg:border-[6px] shadow-2xl z-10"
            style={{ borderColor: '#0D0B1F' }}
          >
            <img
              src="https://i.ibb.co/x8MWV7tk/Whats-App-Image-2026-05-27-at-6-04-29-PM.jpg"
              alt="Jessica Suit"
              className="w-full h-full object-cover object-center" 
            />
          </div>
        </div>

      </section>

      {/* 3. TECHNICAL EXPERTISE - REDUCED FONT SIZES */}
      <section id="skills" className="max-w-[90rem] mx-auto px-6 lg:px-16 xl:px-24 py-16 lg:py-20 border-t space-y-10 lg:space-y-12" style={{ borderColor: 'rgba(43, 15, 107, 0.2)' }}>
        <div className="text-left space-y-2 lg:space-y-3">
          <p className="font-mono uppercase tracking-widest text-xs md:text-sm" style={{ color: '#E0B3FF' }}>TECHNICAL INFRASTRUCTURE</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white">Skills & Technologies</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          <div className="border p-6 md:p-8 rounded-[2rem] space-y-4 lg:space-y-6 shadow-2xl" style={{ backgroundColor: '#0D0B1F', borderColor: '#2B0F6B' }}>
            <h3 className="text-xl lg:text-2xl font-bold tracking-tight" style={{ color: '#B36BFF' }}>Languages</h3>
            <div className="flex flex-wrap gap-2 lg:gap-3 pt-1">
              {['Python', 'Java', 'C', 'C++', 'SQL'].map((s) => (
                <span key={s} className="px-3 py-1.5 lg:px-4 lg:py-2 border rounded-xl text-xs md:text-sm lg:text-base font-mono text-white shadow-sm" style={{ backgroundColor: '#0A0A0A', borderColor: '#2B0F6B' }}>{s}</span>
              ))}
            </div>
          </div>

          <div className="border p-6 md:p-8 rounded-[2rem] space-y-4 lg:space-y-6 shadow-2xl" style={{ backgroundColor: '#0D0B1F', borderColor: '#2B0F6B' }}>
            <h3 className="text-xl lg:text-2xl font-bold tracking-tight" style={{ color: '#B36BFF' }}>Full Stack Toolsets</h3>
            <div className="flex flex-wrap gap-2 lg:gap-3 pt-1">
              {['HTML', 'CSS', 'JavaScript', 'React', 'FastAPI', 'REST APIs'].map((s) => (
                <span key={s} className="px-3 py-1.5 lg:px-4 lg:py-2 border rounded-xl text-xs md:text-sm lg:text-base font-mono text-white shadow-sm" style={{ backgroundColor: '#0A0A0A', borderColor: '#2B0F6B' }}>{s}</span>
              ))}
            </div>
          </div>

          <div className="border p-6 md:p-8 rounded-[2rem] space-y-4 lg:space-y-6 shadow-2xl" style={{ backgroundColor: '#0D0B1F', borderColor: '#2B0F6B' }}>
            <h3 className="text-xl lg:text-2xl font-bold tracking-tight" style={{ color: '#B36BFF' }}>Core Infrastructure</h3>
            <div className="flex flex-wrap gap-2 lg:gap-3 pt-1">
              {['OOP', 'DSA', 'DBMS', 'SDLC', 'ML Basics', 'Git', 'Vercel', 'Render'].map((s) => (
                <span key={s} className="px-3 py-1.5 lg:px-4 lg:py-2 border rounded-xl text-xs md:text-sm lg:text-base font-mono text-white shadow-sm" style={{ backgroundColor: '#0A0A0A', borderColor: '#2B0F6B' }}>{s}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. PROJECTS SHOWCASE */}
      <section id="projects" className="max-w-[90rem] mx-auto px-6 lg:px-16 xl:px-24 py-16 lg:py-20 border-t space-y-10 lg:space-y-12" style={{ borderColor: 'rgba(43, 15, 107, 0.2)' }}>
        <div className="text-left space-y-2 lg:space-y-3">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white">Projects & Applications</h2>
        </div>

        <div className="space-y-6 lg:space-y-8">
          <div className="border rounded-[2rem] lg:rounded-[2.5rem] p-6 md:p-10 lg:p-12 space-y-6 lg:space-y-8 relative overflow-hidden shadow-2xl" style={{ backgroundColor: '#0D0B1F', borderColor: 'rgba(43, 15, 107, 0.6)' }}>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white tracking-tight">SendSafe</h3>
              <span 
                className="w-fit px-4 py-1.5 font-mono text-xs lg:text-sm font-semibold rounded-full border uppercase tracking-wider"
                style={{ backgroundColor: 'rgba(106, 44, 255, 0.2)', color: '#E0B3FF', borderColor: 'rgba(106, 44, 255, 0.4)' }}
              >
                Live Ecosystem
              </span>
            </div>
            <p className="text-sm md:text-base lg:text-lg leading-relaxed max-w-4xl opacity-80 text-left">
              An AI-powered message analyzer that detects conflict in your words, scores emotional tone, highlights risky phrases, and rewrites them into calmer, clearer communication — built with React, FastAPI, and Groq LLaMA 3.3.
            </p>
            <div className="flex flex-wrap gap-2 lg:gap-3">
              {['React', 'Python', 'FastAPI', 'Groq LLaMA 3.3', 'Vercel', 'Render'].map((tech) => (
                <span key={tech} className="px-3 py-1.5 lg:px-4 lg:py-2 border rounded-xl text-xs md:text-sm font-mono shadow-sm" style={{ backgroundColor: '#0A0A0A', borderColor: '#2B0F6B', color: '#B36BFF' }}>{tech}</span>
              ))}
            </div>
            <div className="pt-2 flex flex-col sm:flex-row gap-4 justify-start">
              <a 
                href="https://sendsafe-neon.vercel.app" 
                target="_blank" 
                className="text-center py-3 px-8 rounded-full font-bold text-sm hover:opacity-90 transition-opacity w-full sm:w-auto shadow-lg" 
                style={{ backgroundColor: '#6A2CFF' }}
              >
                ↗ Live Link
              </a>
              <a 
                href="https://github.com/Jessica-ysr/sendsafe" 
                target="_blank" 
                className="text-center border py-3 px-8 rounded-full font-bold text-sm hover:bg-[#0A0A0A] transition-all w-full sm:w-auto shadow-lg"
                style={{ borderColor: '#2B0F6B' }}
              >
                ⌥ Source Code
              </a>
            </div>
          </div>

          <div className="border rounded-[2rem] lg:rounded-[2.5rem] p-6 md:p-10 lg:p-12 space-y-6 lg:space-y-8 opacity-95 shadow-2xl" style={{ backgroundColor: 'rgba(13, 11, 31, 0.4)', borderColor: 'rgba(43, 15, 107, 0.4)' }}>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white tracking-tight">Physiq</h3>
              <span className="w-fit px-4 py-1.5 font-mono text-xs lg:text-sm font-semibold rounded-full border uppercase tracking-wider" style={{ backgroundColor: 'rgba(43, 15, 107, 0.4)', color: 'rgba(253, 250, 246, 0.8)', borderColor: 'rgba(43, 15, 107, 0.6)' }}>Under Compilation</span>
            </div>
            <p className="text-sm md:text-base lg:text-lg leading-relaxed max-w-4xl opacity-80 text-left">
              A smart fitness intelligence web app that uses Vision AI to analyze your form, track your progress, and deliver personalized weekly insights — built with React, Python, FastAPI, and PostgreSQL.
            </p>
            <div className="flex flex-wrap gap-2 lg:gap-3">
              {['React', 'Python', 'Vision AI', 'PostgreSQL', 'FastAPI'].map((tech) => (
                <span key={tech} className="px-3 py-1.5 lg:px-4 lg:py-2 border rounded-xl text-xs md:text-sm font-mono shadow-sm" style={{ backgroundColor: 'rgba(10, 10, 10, 0.4)', color: 'rgba(253, 250, 246, 0.6)' }}>{tech}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. EXPERIENCE - NOW 3 COLUMNS */}
      <section id="experience" className="max-w-[90rem] mx-auto px-6 lg:px-16 xl:px-24 py-16 lg:py-20 border-t space-y-10 lg:space-y-12" style={{ borderColor: 'rgba(43, 15, 107, 0.2)' }}>
        <div className="text-left space-y-2 lg:space-y-3">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white">Work Experience</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full text-left">
          <div className="border p-6 md:p-8 rounded-[2rem] space-y-2 lg:space-y-3 shadow-2xl flex flex-col" style={{ backgroundColor: '#0D0B1F', borderColor: 'rgba(43, 15, 107, 0.6)' }}>
            <span className="text-xs font-mono uppercase tracking-widest block" style={{ color: '#E0B3FF' }}>Jun 2025 – Present</span>
            <h3 className="text-lg md:text-xl font-bold text-white">Design Team Member</h3>
            <h4 className="text-sm font-bold pb-2" style={{ color: '#B36BFF' }}>AWS Student Builder Group — SIST</h4>
            <p className="text-sm pt-2 opacity-80 leading-relaxed mt-auto border-t border-[rgba(43,15,107,0.4)]">
              Overseeing platform asset layout creation, graphic pipelines, and interface structures for campus-wide cloud initiatives.
            </p>
          </div>

          <div className="border p-6 md:p-8 rounded-[2rem] space-y-2 lg:space-y-3 shadow-2xl flex flex-col" style={{ backgroundColor: '#0D0B1F', borderColor: 'rgba(43, 15, 107, 0.6)' }}>
            <span className="text-xs font-mono uppercase tracking-widest block" style={{ color: '#E0B3FF' }}>Mar – Apr 2026</span>
            <h3 className="text-lg md:text-xl font-bold text-white">Conference Moderator</h3>
            <h4 className="text-sm font-bold pb-2" style={{ color: '#B36BFF' }}>IFERP ICRCET-2026 — Bengaluru</h4>
            <p className="text-sm pt-2 opacity-80 leading-relaxed mt-auto border-t border-[rgba(43,15,107,0.4)]">
              Moderated international engineering publication lines and public research presentations directly on-stage alongside technical panels.
            </p>
          </div>

          <div className="border p-6 md:p-8 rounded-[2rem] space-y-2 lg:space-y-3 shadow-2xl flex flex-col" style={{ backgroundColor: '#0D0B1F', borderColor: 'rgba(43, 15, 107, 0.6)' }}>
            <span className="text-xs font-mono uppercase tracking-widest block" style={{ color: '#E0B3FF' }}>Aug 2024 – Present</span>
            <h3 className="text-lg md:text-xl font-bold text-white">Event Coordinator</h3>
            <h4 className="text-sm font-bold pb-2" style={{ color: '#B36BFF' }}>SIST Operations</h4>
            <p className="text-sm pt-2 opacity-80 leading-relaxed mt-auto border-t border-[rgba(43,15,107,0.4)]">
              Coordinated logistical deployment loops for 4-5 core student events, integrating speaker tracks with direct operational control.
            </p>
          </div>
        </div>
      </section>

      {/* 6. CREDENTIALS & ACADEMICS - REORDERED */}
      <section id="credentials" className="max-w-[90rem] mx-auto px-6 lg:px-16 xl:px-24 py-16 lg:py-20 border-t space-y-12 lg:space-y-16" style={{ borderColor: 'rgba(43, 15, 107, 0.2)' }}>
        <div className="text-left space-y-2 lg:space-y-3">
          <p className="font-mono uppercase tracking-widest text-xs md:text-sm" style={{ color: '#E0B3FF' }}>ACADEMIC JOURNEY</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white">Education & Credentials</h2>
        </div>

        {/* SECTION A: CERTIFICATIONS (MOVED TO TOP) */}
        <div className="space-y-6 lg:space-y-8">
          <h3 className="text-2xl font-bold text-white border-b pb-3" style={{ borderColor: '#2B0F6B' }}>Certifications & Honors</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            <div className="p-6 rounded-[2rem] border shadow-2xl flex flex-col gap-3 hover:scale-[1.02] transition-transform" style={{ backgroundColor: '#0D0B1F', borderColor: 'rgba(43, 15, 107, 0.4)' }}>
              <div className="text-3xl">🏆</div>
              <h4 className="font-bold text-lg text-white">Query and Conquer DBMS Quiz</h4>
              <p className="text-sm opacity-70 leading-relaxed">3rd Place Winner at SIST technical event.</p>
              <div className="mt-auto pt-3">
                <span className="inline-block text-xs font-mono font-bold border px-3 py-1 rounded-xl" style={{ backgroundColor: '#0A0A0A', color: '#E0B3FF', borderColor: '#2B0F6B' }}>Jan 2026</span>
              </div>
            </div>

            <div className="p-6 rounded-[2rem] border shadow-2xl flex flex-col gap-3 hover:scale-[1.02] transition-transform" style={{ backgroundColor: '#0D0B1F', borderColor: 'rgba(43, 15, 107, 0.4)' }}>
              <div className="text-3xl">🏅</div>
              <h4 className="font-bold text-lg text-white">Data Mining NPTEL Elite</h4>
              <p className="text-sm opacity-70 leading-relaxed">IIT Kharagpur · Achieved a highly competitive 63% score.</p>
              <div className="mt-auto pt-3">
                <span className="inline-block text-xs font-mono font-bold border px-3 py-1 rounded-xl" style={{ backgroundColor: '#0A0A0A', color: '#E0B3FF', borderColor: '#2B0F6B' }}>Apr 2026</span>
              </div>
            </div>

            <div className="p-6 rounded-[2rem] border shadow-2xl flex flex-col gap-3 hover:scale-[1.02] transition-transform" style={{ backgroundColor: '#0D0B1F', borderColor: 'rgba(43, 15, 107, 0.4)' }}>
              <div className="text-3xl">🏅</div>
              <h4 className="font-bold text-lg text-white">Python for Data Science NPTEL Elite</h4>
              <p className="text-sm opacity-70 leading-relaxed">IIT Madras · Achieved an advanced 64% score.</p>
              <div className="mt-auto pt-3">
                <span className="inline-block text-xs font-mono font-bold border px-3 py-1 rounded-xl" style={{ backgroundColor: '#0A0A0A', color: '#E0B3FF', borderColor: '#2B0F6B' }}>Jan 2025</span>
              </div>
            </div>

            <div className="p-6 rounded-[2rem] border shadow-2xl flex flex-col gap-3 hover:scale-[1.02] transition-transform" style={{ backgroundColor: '#0D0B1F', borderColor: 'rgba(43, 15, 107, 0.4)' }}>
              <div className="text-3xl">⚡</div>
              <h4 className="font-bold text-lg text-white">Ignite Bootcamp Pipeline</h4>
              <p className="text-sm opacity-70 leading-relaxed">Wadhwani Foundation · 18 Hours of intensive structural planning and ideation.</p>
              <div className="mt-auto pt-3">
                <span className="inline-block text-xs font-mono font-bold border px-3 py-1 rounded-xl" style={{ backgroundColor: '#0A0A0A', color: '#E0B3FF', borderColor: '#2B0F6B' }}>Sep 2025</span>
              </div>
            </div>

            <div className="p-6 rounded-[2rem] border shadow-2xl flex flex-col gap-3 hover:scale-[1.02] transition-transform" style={{ backgroundColor: '#0D0B1F', borderColor: 'rgba(43, 15, 107, 0.4)' }}>
              <div className="text-3xl">📜</div>
              <h4 className="font-bold text-lg text-white">Student Coordinator Recognition</h4>
              <p className="text-sm opacity-70 leading-relaxed">NPTEL Java Programming leadership tracking.</p>
              <div className="mt-auto pt-3">
                <span className="inline-block text-xs font-mono font-bold border px-3 py-1 rounded-xl" style={{ backgroundColor: '#0A0A0A', color: '#E0B3FF', borderColor: '#2B0F6B' }}>Sep 2025</span>
              </div>
            </div>

            <div className="p-6 rounded-[2rem] border shadow-2xl flex flex-col gap-3 hover:scale-[1.02] transition-transform" style={{ backgroundColor: '#0D0B1F', borderColor: 'rgba(43, 15, 107, 0.4)' }}>
              <div className="text-3xl">🧩</div>
              <h4 className="font-bold text-lg text-white">Foundational Tokens</h4>
              <p className="text-sm opacity-70 leading-relaxed">Scaler Python, Simplilearn DSA, Simplilearn C Programming.</p>
              <div className="mt-auto pt-3 flex gap-2 flex-wrap">
                <span className="inline-block text-xs font-mono font-bold border px-3 py-1 rounded-xl" style={{ backgroundColor: '#0A0A0A', color: '#E0B3FF', borderColor: '#2B0F6B' }}>2024-25</span>
              </div>
            </div>

          </div>
        </div>

        {/* SECTION B: ACADEMIC HISTORY (MOVED TO BOTTOM) */}
        <div className="space-y-6 lg:space-y-8 pt-6">
          <h3 className="text-2xl font-bold text-white border-b pb-3" style={{ borderColor: '#2B0F6B' }}>Academic History</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
            <div className="p-6 lg:p-8 rounded-[2rem] border shadow-2xl" style={{ backgroundColor: '#0D0B1F', borderColor: 'rgba(43, 15, 107, 0.4)' }}>
              <h4 className="font-bold text-lg lg:text-xl" style={{ color: '#B36BFF' }}>B.E. Computer Science Engineering</h4>
              <p className="text-sm opacity-70 mt-1">Sathyabama Institute of Science and Technology (2024 - 2028)</p>
              <span className="inline-block mt-4 px-4 py-1.5 rounded-xl text-sm font-mono font-bold border" style={{ backgroundColor: '#0A0A0A', color: '#E0B3FF', borderColor: '#2B0F6B' }}>CGPA: 9.1</span>
            </div>
            <div className="p-6 lg:p-8 rounded-[2rem] border shadow-2xl" style={{ backgroundColor: '#0D0B1F', borderColor: 'rgba(43, 15, 107, 0.4)' }}>
              <h4 className="font-bold text-lg lg:text-xl" style={{ color: '#B36BFF' }}>12th Grade Matriculation</h4>
              <p className="text-sm opacity-70 mt-1">St. Joseph of Cluny School, Pondicherry (2022 - 2024)</p>
              <span className="inline-block mt-4 px-4 py-1.5 rounded-xl text-sm font-mono font-bold border" style={{ backgroundColor: '#0A0A0A', color: '#E0B3FF', borderColor: '#2B0F6B' }}>Score: 88.6%</span>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT ME - UPDATED CONTENT */}
      <section id="about" className="max-w-[90rem] mx-auto px-6 lg:px-16 py-16 border-t border-[#2B0F6B]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <img src="/doodle.png" alt="About Me" className="w-full rounded-[2rem] shadow-2xl" />
            <div className="space-y-6">
                <h2 className="text-5xl font-black" style={{ fontFamily: "'Playfair Display', serif" }}>Beyond the doodles.</h2>
                <div className="grid grid-cols-2 gap-4">
                    {[ 
                        {e: "🚀", t: "Builder by Nature", d: "I ship real projects that solve real problems — from AI-powered communication tools to fitness intelligence apps. If I can build it, I will."},
                        {e: "💻", t: "Full Stack · AI/ML", d: "I live where clean frontend meets smart backend. React, FastAPI, Python, Vision AI — always learning, always pushing the stack further."},
                        {e: "🎤", t: "Leader Off-Screen Too", d: "Organized multiple tech events, moderated an international conference in Bangalore, and contribute to the AWS Cloud Club design team."},
                        {e: "📚", t: "Third-Year CSE Undergrad", d: "Deep in the grind at Sathyabama Institute, chasing internships and leveling up — one project, one problem, one commit at a time."},
                        {e: "🎯", t: "Driven by Intention", d: "Every project I build, every event I run, every line I write has a purpose behind it. I don't just create; I create with direction."},
                        {e: "🌙", t: "And Yes", d: "I romanticize the process, binge movies for inspiration, and genuinely believe the best engineers are the ones who feel things deeply."}
                    ].map(c => <div key={c.t} className="p-6 rounded-2xl bg-[#0f0f1a] border border-[#2B0F6B]"><span className="text-2xl">{c.e}</span> <h4 className="font-bold text-sm mt-2">{c.t}</h4><p className="text-xs opacity-70 mt-1">{c.d}</p></div>)}
                </div>
                <div className="flex flex-wrap gap-2 pt-4">
                    {['Full Stack Developer', 'AI/ML Enthusiast', 'Cloud Club Designer', 'Event Organizer', 'Conference Moderator', 'Always Shipping'].map(tag => (
                        <span key={tag} className="px-3 py-1 border border-[#2B0F6B] rounded-full text-[10px] font-bold uppercase tracking-wider text-gray-400">{tag}</span>
                    ))}
                </div>
            </div>
        </div>
      </section>

      {/* 7. CONTACT INTERFACE */}
      <section id="contact" className="max-w-[90rem] mx-auto px-6 lg:px-16 xl:px-24 py-16 lg:py-24 border-t flex flex-col items-center justify-center text-center space-y-8 lg:space-y-10" style={{ borderColor: 'rgba(43, 15, 107, 0.2)' }}>
        <div className="space-y-4">
          <p className="font-mono uppercase tracking-widest text-xs lg:text-sm font-semibold" style={{ color: '#E0B3FF' }}>CONNECT</p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight" style={{ fontFamily: "'Playfair Display', serif" }}>Get in touch.</h2>
          <p className="max-w-2xl mx-auto text-sm md:text-base leading-relaxed opacity-80">
            <span className="font-bold text-[#B36BFF]">Let's build something.</span><br className="hidden sm:block" /> Actively looking for internship opportunities in Full Stack or AI/ML. If you're working on something interesting — reach out.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-6xl pt-4">
          <a href="mailto:jessicaruphina@gmail.com" className="p-6 border rounded-[2rem] transition-all flex flex-col items-center gap-2 overflow-hidden shadow-2xl hover:scale-105" style={{ backgroundColor: '#0D0B1F', borderColor: '#2B0F6B' }}>
            <span className="text-2xl">✉️</span>
            <span className="text-xs font-mono opacity-50">Email</span>
            <span className="text-xs md:text-sm font-bold text-white truncate w-full">jessicaruphina@gmail.com</span>
          </a>
          <a href="https://linkedin.com/in/jessica-shiny-ruphina" target="_blank" className="p-6 border rounded-[2rem] transition-all flex flex-col items-center gap-2 overflow-hidden shadow-2xl hover:scale-105" style={{ backgroundColor: '#0D0B1F', borderColor: '#2B0F6B' }}>
            <span className="text-2xl">💼</span>
            <span className="text-xs font-mono opacity-50">LinkedIn</span>
            <span className="text-xs md:text-sm font-bold text-white truncate w-full">jessica-shiny-ruphina</span>
          </a>
          <a href="https://github.com/Jessica-ysr" target="_blank" className="p-6 border rounded-[2rem] transition-all flex flex-col items-center gap-2 overflow-hidden shadow-2xl hover:scale-105" style={{ backgroundColor: '#0D0B1F', borderColor: '#2B0F6B' }}>
            <span className="text-2xl">⌥</span>
            <span className="text-xs font-mono opacity-50">GitHub</span>
            <span className="text-xs md:text-sm font-bold text-white truncate w-full">Jessica-ysr</span>
          </a>
          <a href="https://www.instagram.com/_jessica_shiny_/" target="_blank" className="p-6 border rounded-[2rem] transition-all flex flex-col items-center gap-2 overflow-hidden shadow-2xl hover:scale-105" style={{ backgroundColor: '#0D0B1F', borderColor: '#2B0F6B' }}>
            <span className="text-2xl">📸</span>
            <span className="text-xs font-mono opacity-50">Instagram</span>
            <span className="text-xs md:text-sm font-bold text-white truncate w-full">_jessica_shiny_</span>
          </a>
        </div>
      </section>

      <footer className="py-8 text-center text-xs font-mono border-t px-6" style={{ borderColor: 'rgba(43, 15, 107, 0.2)', color: 'rgba(253, 250, 246, 0.3)' }}>
        © 2026 D Jessica Shiny Ruphina · Sathyabama Institute of Science and Technology
      </footer>

    </main>
  );
}