/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';

// Inline SVGs for icons to avoid external dependencies
const Icons = {
  Github: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.28 1.15-.28 2.35 0 3.5-.73 1.02-1.08 2.25-1 3.5 0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
  ),
  Linkedin: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
  ),
  Play: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="5 3 19 12 5 21 5 3"/></svg>
  ),
  Youtube: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"/><path d="m10 15 5-3-5-3z"/></svg>
  ),
  Instagram: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
  ),
  ExternalLink: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" x2="21" y1="14" y2="3"/></svg>
  ),
  Gamepad: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="6" x2="10" y1="12" y2="12"/><line x1="8" x2="8" y1="10" y2="14"/><circle cx="15" cy="13" r="1"/><circle cx="18" cy="11" r="1"/><rect width="20" height="12" x="2" y="6" rx="2"/></svg>
  ),
  Code: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
  ),
  Layers: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>
  ),
  Cpu: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="16" height="16" x="4" y="4" rx="2"/><rect width="6" height="6" x="9" y="9" rx="1"/><path d="M15 2v2"/><path d="M15 20v2"/><path d="M2 15h2"/><path d="M2 9h2"/><path d="M20 15h2"/><path d="M20 9h2"/><path d="M9 2v2"/><path d="M9 20v2"/></svg>
  ),
  Mail: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
  )
};

const projects = [
  {
    id: 1,
    title: "Universe Saver",
    status: "Completed",
    video: "https://www.youtube.com/embed/Ml6FATSlujQ",
    description: "My first game on the Play Store! A fast-paced mobile action game focused on fluid combat mechanics and responsive touch controls. Developed with a custom combo system and enemy AI.",
    bullets: [
      "Built a state-machine based combat system allowing for seamless animation transitions.",
      "Optimized draw calls and texture memory for stable 60FPS on mid-range mobile devices."
    ],
    playStore: "https://play.google.com/store/apps/details?id=com.Saquib.Universe",
    github: "https://github.com/Saquib630/Universe-Saver-1st-game-on-PlayStore-"
  },
  {
    id: 2,
    title: "Maze Menia",
    status: "Completed",
    video: "https://www.youtube.com/embed/4oCOpitOmKw",
    description: "An endless arcade racer featuring procedural track generation and physics-based drifting mechanics. Integrated with Google Play Games Services for leaderboards.",
    bullets: [
      "Implemented a custom pooling system for procedural obstacles to minimize garbage collection.",
      "Developed a physics-based vehicle controller with adjustable drift sensitivity."
    ],
    playStore: "https://play.google.com/store/apps/details?id=com.saquib.MazeMenia",
    github: "https://github.com/Saquib630/MazeMenia-2nd-game-on-PlayStore"
  },
  {
    id: 3,
    title: "Project Titan: Multiplayer RPG",
    status: "In Progress",
    video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    description: "A large-scale mobile RPG focused on cooperative boss raids and deep character customization. Currently implementing the core networking layer.",
    bullets: [
      "Architecting a server-authoritative movement system using Netcode for GameObjects.",
      "Designing a modular equipment system with dynamic stat calculations."
    ],
    upcoming: [
      "Real-time 4-player cooperative dungeons",
      "Global auction house system",
      "Advanced skill tree with 50+ unique abilities"
    ],
    playStore: null,
    github: "https://github.com/Saquib630"
  }
];

const skills = [
  { name: "Unity (2D Game Development)", icon: <Icons.Gamepad /> },
  { name: "C#", icon: <Icons.Code /> },
  { name: "Game Mechanics (Shooting, UI)", icon: <Icons.Layers /> },
  { name: "JavaScript (Basics)", icon: <Icons.Cpu /> }
];

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-white selection:text-black">
      {/* Navigation - Minimal */}
      <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
          <span className="font-bold tracking-tighter text-xl">MS.</span>
          <div className="flex gap-8 text-sm font-medium text-white/60">
            <a href="#projects" className="hover:text-white transition-colors">Projects</a>
            <a href="#skills" className="hover:text-white transition-colors">Skills</a>
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </div>
        </div>
      </nav>

      <main className="max-w-5xl mx-auto px-6 pt-32 pb-20 space-y-32">
        {/* Hero Section */}
        <section className="flex flex-col md:flex-row items-center gap-8 animate-fade-in-up">
          <div className="w-32 h-32 md:w-48 md:h-48 rounded-full overflow-hidden border-2 border-white/10 shrink-0 bg-white/5">
            <img 
              src="./profile.jpg" 
              alt="Mohammad Saquib" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
              onError={(e) => {
                e.currentTarget.src = "https://picsum.photos/seed/saquib/400/400";
              }}
            />
          </div>
          <div className="space-y-6 text-center md:text-left">
            <div>
              <h1 className="text-5xl md:text-7xl font-bold tracking-tighter leading-tight">
                Mohammad <span className="underline decoration-white/30 underline-offset-8">Saquib</span>
              </h1>
              <p className="text-xl md:text-2xl text-white/60 mt-2 font-medium">
                Unity Game Developer
              </p>
            </div>
            
            <div className="max-w-2xl space-y-4">
              <p className="text-2xl md:text-3xl font-light leading-relaxed text-white/90">
                "I build mobile games focused on gameplay mechanics and combat systems."
              </p>
              <p className="text-lg text-white/50 leading-relaxed">
                Passionate about creating responsive, high-performance mobile experiences 
                with a deep focus on technical implementation and player feel.
              </p>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="space-y-16">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tight">Featured Projects</h2>
            <div className="h-px w-20 bg-white/20" />
          </div>

          <div className="grid gap-24">
            {projects.map((project, index) => (
              <div 
                key={project.id}
                className="grid md:grid-cols-2 gap-12 items-start animate-fade-in-up"
                style={{ animationDelay: `${(index + 1) * 150}ms` }}
              >
                <div className="space-y-6">
                  <div className="flex items-center gap-3">
                    <h3 className="text-2xl font-bold">{project.title}</h3>
                    {project.status === "In Progress" ? (
                      <span className="px-2 py-1 text-[10px] font-bold uppercase tracking-widest bg-white text-black rounded">
                        In Progress
                      </span>
                    ) : (
                      <span className="px-2 py-1 text-[10px] font-bold uppercase tracking-widest border border-white/20 text-white/40 rounded">
                        Completed
                      </span>
                    )}
                  </div>

                  <p className="text-white/70 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="space-y-4">
                    <h4 className="text-sm font-bold uppercase tracking-widest text-white/40">Technical Highlights</h4>
                    <ul className="space-y-3">
                      {project.bullets.map((bullet, i) => (
                        <li key={i} className="flex gap-3 text-sm text-white/60">
                          <span className="text-white/20 mt-1.5">•</span>
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {project.upcoming && (
                    <div className="space-y-4 pt-4">
                      <h4 className="text-sm font-bold uppercase tracking-widest text-white/40">Upcoming Features</h4>
                      <div className="grid grid-cols-1 gap-2">
                        {project.upcoming.map((feature, i) => (
                          <div key={i} className="flex items-center gap-2 text-xs text-white/50 bg-white/5 px-3 py-2 rounded-full border border-white/5">
                            <div className="w-1 h-1 bg-white/30 rounded-full" />
                            {feature}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  <div className="flex gap-4 pt-4">
                    {project.playStore && (
                      <a 
                        href={project.playStore}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-5 py-2.5 bg-white text-black text-sm font-bold rounded-full hover:bg-white/90 transition-colors"
                      >
                        <Icons.Play />
                        Play Store
                      </a>
                    )}
                    <a 
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-5 py-2.5 border border-white/10 text-white text-sm font-bold rounded-full hover:bg-white/5 transition-colors"
                    >
                      <Icons.Github />
                      GitHub
                    </a>
                  </div>
                </div>

                <div className="aspect-video w-full bg-white/5 rounded-2xl overflow-hidden border border-white/10 group relative">
                  <iframe
                    className="w-full h-full opacity-80 group-hover:opacity-100 transition-opacity"
                    src={project.video}
                    title={project.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="space-y-12">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tight">Technical Stack</h2>
            <div className="h-px w-20 bg-white/20" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {skills.map((skill, i) => (
              <div 
                key={i}
                className="p-6 border border-white/10 rounded-2xl bg-white/[0.02] hover:bg-white/[0.05] transition-colors flex flex-col gap-4"
              >
                <div className="text-white/40">{skill.icon}</div>
                <span className="font-medium text-white/80">{skill.name}</span>
              </div>
            ))}
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="space-y-8 max-w-2xl">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tight">About Me</h2>
            <div className="h-px w-20 bg-white/20" />
          </div>
          <div className="space-y-6 text-lg text-white/60 leading-relaxed">
            <p>
              I am a dedicated Unity developer focused on mastering the art of game development through 
              building real-world projects. My journey is driven by a curiosity for how complex systems 
              interact to create engaging gameplay.
            </p>
            <p>
              Currently, I am deepening my knowledge in multiplayer systems and server-side architecture, 
              aiming to build scalable online experiences that bring players together.
            </p>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="space-y-12">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tight">Get In Touch</h2>
            <div className="h-px w-20 bg-white/20" />
          </div>

          <div className="grid gap-8">
            <div className="p-8 border border-white/10 rounded-3xl bg-white/[0.02] flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="space-y-2 text-center md:text-left">
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-white/30">Primary Contact</span>
                <h3 className="text-3xl font-bold">Instagram</h3>
                <p className="text-white/50">The best way to reach me for quick inquiries.</p>
              </div>
              <a 
                href="https://www.instagram.com/saquib_630/" 
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 px-8 py-4 bg-white text-black font-bold rounded-full hover:scale-105 transition-transform"
              >
                <Icons.Instagram />
                Message Me
                <Icons.ExternalLink />
              </a>
            </div>

            <div className="flex flex-wrap justify-center md:justify-start gap-6 pt-4">
              {[
                { icon: <Icons.Github />, label: "GitHub", href: "https://github.com/Saquib630" },
                { icon: <Icons.Linkedin />, label: "LinkedIn", href: "https://www.linkedin.com/in/mohd-saquib-974b143ba/" },
                { icon: <Icons.Youtube />, label: "YouTube", href: "https://www.youtube.com/@Saquib_knows1" },
                { icon: <Icons.Play />, label: "Play Store", href: "https://play.google.com/store/apps/developer?id=Zentrot" },
                { icon: <Icons.Mail />, label: "Email", href: "mailto:allrounder20240@gmail.com" }
              ].map((link, i) => (
                <a 
                  key={i}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-white/40 hover:text-white transition-colors"
                >
                  {link.icon}
                  <span className="text-sm font-medium">{link.label}</span>
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 py-12">
        <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-white/30">
          <p>© {new Date().getFullYear()} Mohammad Saquib</p>
          <p className="font-medium tracking-widest uppercase text-[10px]">Built by Mohammad Saquib</p>
        </div>
      </footer>
    </div>
  );
}
