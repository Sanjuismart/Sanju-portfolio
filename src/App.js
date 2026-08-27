import { useState } from "react";
import {
  Mail,
  Menu,
  X,
  ArrowUpRight,
  FolderCode,
} from "lucide-react";

const LinkedinIcon = (props) => (
  <svg
    viewBox="0 0 24 24"
    width="24"
    height="24"
    stroke="currentColor"
    strokeWidth="1.75"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const GithubIcon = (props) => (
  <svg
    viewBox="0 0 24 24"
    width="24"
    height="24"
    stroke="currentColor"
    strokeWidth="1.75"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

/**
 * Sanju — Portfolio
 * Single-file React conversion, personalized with Sanju's resume details.
 * Drop this into any React app (Vite/CRA/Next) with Tailwind CSS configured.
 *
 * Setup:
 * - `portrait.jpg` is included alongside this file in a `public/` folder —
 *   copy it into your project's `public` directory (or adjust the src path).
 * - Project images (`/p1.png`, `/p2.png`) are placeholders — add your own
 *   screenshots for the Emotion-Based Music Player and Full Stack Web App.
 * - Scroll-reveal animations are simplified to a CSS `animate-fade-up` on
 *   mount. Wire up `framer-motion`'s `whileInView` or an IntersectionObserver
 *   if you want true reveal-on-scroll behavior.
 * - Tailwind theme tokens (`bg-background`, `text-foreground`, `text-accent`,
 *   `text-beige-foreground`, etc.) assume a design-tokens setup like shadcn/ui.
 *   Swap them for plain Tailwind colors if you don't have that config.
 */

const skillsMarquee = [
  "React",
  "Angular",
  "JavaScript",
  "Node.js",
  "Express.js",
  "MongoDB",
  "MySQL",
  "REST APIs",
  "JWT",
  "Git",
];

const skillGroups = [
  {
    num: "01",
    title: "Frontend",
    desc: "Building responsive, component-driven user interfaces",
    tags: ["HTML5", "CSS3", "JavaScript", "React.js", "Angular"],
  },
  {
    num: "02",
    title: "Backend",
    desc: "Designing and integrating scalable REST APIs",
    tags: ["Node.js", "Express.js", "REST APIs", "JWT", "MVC", "OOP"],
  },
  {
    num: "03",
    title: "Database",
    desc: "Modeling and managing application data",
    tags: ["MongoDB", "MySQL"],
  },
  {
    num: "04",
    title: "Tools & Practice",
    desc: "Version control, testing, and team workflow",
    tags: ["Git", "GitHub", "Postman", "VS Code", "Agile Scrum"],
  },
];

const projects = [
  {
    num: "01",
    tag: "AI / Computer Vision",
    title: "Emotion-Based Music Player",
    desc: "An AI-based system using MediaPipe and DeepFace for real-time emotion detection, with a Tkinter and Streamlit GUI that automates playlist switching based on the detected emotion.",
    stack: ["Python", "MediaPipe", "DeepFace", "Tkinter", "Streamlit"],
    image: "/p1.png",
    github: "https://github.com/Sanjuismart",
    demo: "",
    imageSide: "left",
  },
  {
    num: "02",
    tag: "Full Stack Web App",
    title: "Full Stack Web Application",
    desc: "A full stack application built with React, Node.js and MongoDB, featuring authentication and complete CRUD functionality, deployed for real-world use.",
    stack: ["React", "Node.js", "MongoDB"],
    image: "/p2.png",
    github: "https://github.com/Sanjuismart",
    demo: "",
    imageSide: "right",
  },
];

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

function SidebarNav() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav
        aria-label="Primary"
        className="fixed left-0 top-0 z-50 flex h-svh w-14 flex-col items-center justify-between border-r border-border bg-background py-6 md:w-20 md:py-8"
      >
        <a
          href="#home"
          className="group flex flex-col items-center gap-1 font-heading text-xl font-bold tracking-tight text-foreground transition-colors hover:text-accent"
          aria-label="Sanju — home"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10 text-accent transition-colors group-hover:bg-accent group-hover:text-white">
            <FolderCode className="h-5 w-5" />
          </div>
          <span className="text-[10px] font-semibold tracking-widest text-muted-foreground group-hover:text-foreground">PORTFOLIO</span>
        </a>

        <button
          type="button"
          aria-label="Open menu"
          onClick={() => setOpen(true)}
          className="group flex h-10 w-10 items-center justify-center text-foreground transition-colors hover:text-accent"
        >
          <Menu className="h-5 w-5" aria-hidden="true" />
        </button>

        <ul className="flex flex-col items-center gap-5">
          <li>
            <a
              href="https://github.com/Sanjuismart"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub Profile"
              title="GitHub Profile"
              className="block text-muted-foreground transition-colors hover:text-accent"
            >
              <GithubIcon className="h-5 w-5" />
            </a>
          </li>
          <li>
            <a
              href="https://linkedin.com/in/sanju-kumbar-986709296"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn Profile"
              title="LinkedIn Profile"
              className="block text-muted-foreground transition-colors hover:text-accent"
            >
              <LinkedinIcon className="h-5 w-5" />
            </a>
          </li>
          <li>
            <a
              href="mailto:sanjukumbar408@gmail.com"
              aria-label="Email"
              title="Email Me"
              className="block text-muted-foreground transition-colors hover:text-accent"
            >
              <Mail className="h-5 w-5" strokeWidth={1.75} />
            </a>
          </li>
        </ul>
      </nav>

      {/* Slide-out menu overlay */}
      {open && (
        <div className="fixed inset-0 z-[60] flex flex-col bg-background">
          <div className="flex items-center justify-between px-6 py-6 md:px-10">
            <span className="font-heading text-xl font-bold text-foreground">
              S<span className="text-accent">.</span>
            </span>
            <button
              type="button"
              aria-label="Close menu"
              onClick={() => setOpen(false)}
              className="flex h-10 w-10 items-center justify-center text-foreground transition-colors hover:text-beige-foreground"
            >
              <X className="h-6 w-6" />
            </button>
          </div>
          <ul className="flex flex-1 flex-col items-start justify-center gap-4 px-8 md:px-16">
            {navLinks.map((link) => (
              <li key={link.href} className="overflow-hidden">
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="font-heading text-5xl font-bold tracking-tight text-foreground transition-colors hover:text-accent sm:text-7xl"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
}

function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-svh overflow-hidden bg-background"
    >
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -right-6 top-1/2 hidden -translate-y-1/2 select-none font-heading text-[28vw] font-bold leading-none tracking-tighter text-primary/[0.06] lg:block"
      >
        dev
      </span>

      <div className="relative mx-auto flex min-h-svh max-w-[1400px] flex-col md:flex-row md:items-stretch">
        <div className="relative z-0 w-full md:w-[42%]">
          <div className="relative h-[46svh] w-full overflow-hidden bg-primary sm:h-[56svh] md:h-full">
            <img
              alt="Portrait of Sanju, full stack developer"
              className="absolute inset-0 h-full w-full object-cover object-top"
              src="/portrait.jpg"
            />
            <span className="absolute left-5 top-5 font-heading text-sm font-medium tracking-[0.3em] text-primary-foreground/80">
              01 / DEV
            </span>
          </div>
        </div>

        <div className="relative z-20 flex w-full flex-1 items-center px-6 py-12 sm:px-10 md:px-12 lg:px-16">
          <div className="w-full max-w-2xl animate-fade-up">
            <div className="mb-7 inline-flex items-center gap-2.5 rounded-full border border-border bg-card px-4 py-1.5">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
              </span>
              <span className="text-xs font-medium uppercase tracking-[0.2em] text-foreground">
                Available for work
              </span>
            </div>

            <h1 className="font-heading relative z-20 text-6xl font-bold leading-[0.92] tracking-tight text-foreground sm:text-7xl md:-ml-[120px] lg:-ml-[180px] lg:text-8xl">
              <span className="block">Hello I&apos;m Sanju</span>
              <span className="block">Full Stack</span>
              <span className="block">
                <span className="text-primary">
                  Developer<span className="text-accent">.</span>
                </span>
              </span>
            </h1>

            <p className="mt-8 max-w-md text-pretty leading-relaxed text-muted-foreground">
              I design, build and deploy scalable web applications with
              React.js, Node.js, Express.js and MongoDB — turning ideas into
              working products, one clean commit at a time.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href="#projects"
                className="group inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-foreground"
              >
                View Projects
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
              <a
                href="#contact"
                className="group inline-flex items-center gap-2 rounded-full border border-foreground px-7 py-3.5 text-sm font-medium text-foreground transition-colors hover:border-accent hover:text-accent"
              >
                Contact Me
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section
      id="about"
      className="border-t border-border px-6 py-24 sm:px-10 md:px-16 md:py-36 lg:px-24"
    >
      <div className="mx-auto max-w-6xl">
        <p className="mb-8 text-xs font-medium uppercase tracking-[0.35em] text-beige-foreground">
          About
        </p>
        <h2 className="font-heading max-w-4xl text-3xl font-semibold leading-[1.15] tracking-tight text-foreground sm:text-4xl md:text-5xl lg:text-6xl">
          I build scalable web applications where solid engineering meets
          practical, real-world problem solving.
        </h2>
        <div className="mt-12 grid grid-cols-1 items-start gap-10 md:grid-cols-[280px_1fr]">
          <a
            href="/certificate.jpg"
            target="_blank"
            rel="noreferrer"
            className="group block w-full max-w-[280px] overflow-hidden rounded-xl border border-border bg-card shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-accent hover:shadow-md"
            aria-label="View Full Stack Development certificate"
          >
            <img
              src="/certificate.jpg"
              alt="KodNest Full Stack Development course certificate issued to Sanju"
              className="h-auto w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <span className="block px-3 py-2.5 text-center text-xs font-semibold uppercase tracking-[0.15em] text-muted-foreground transition-colors group-hover:text-accent">
              View Certificate ↗
            </span>
          </a>

          <p className="text-pretty leading-relaxed text-muted-foreground md:text-lg">
            I'm a Full Stack Developer with hands-on experience designing,
            developing and deploying web applications using React.js,
            Node.js, Express.js, MongoDB and MySQL. I'm skilled in RESTful
            API development, frontend optimization, debugging, and working
            within Agile teams — currently building experience as a Full
            Stack Web Developer Intern at KodNest, where I've improved API
            performance by 30% and shipped responsive UI components used in
            production.
          </p>
        </div>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section id="skills" className="border-t border-border bg-background">
      {/* Marquee */}
      <div className="group overflow-hidden border-b border-border bg-primary py-10">
        <div className="flex w-max animate-marquee items-center gap-8 whitespace-nowrap group-hover:[animation-play-state:paused]">
          {[...skillsMarquee, ...skillsMarquee].map((skill, i) => (
            <span key={`${skill}-${i}`} className="flex items-center gap-8">
              <span className="font-heading text-lg font-semibold tracking-tight text-primary-foreground">
                {skill}
              </span>
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            </span>
          ))}
        </div>
      </div>

      <div className="px-6 py-24 sm:px-10 md:px-16 md:py-32 lg:px-24">
        <div className="mx-auto max-w-6xl">
          <p className="mb-8 text-xs font-medium uppercase tracking-[0.35em] text-accent">
            Skills &amp; Stack
          </p>
          <h2 className="font-heading max-w-3xl text-3xl font-semibold leading-[1.12] tracking-tight text-foreground sm:text-4xl md:text-5xl">
            A full-stack toolkit for building end-to-end products.
          </h2>

          <div className="mt-16 border-t border-border">
            {skillGroups.map((group) => (
              <div
                key={group.num}
                className="group relative overflow-hidden border-b border-border"
              >
                <div className="absolute inset-0 origin-left scale-x-0 bg-primary transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-x-100" />
                <div className="relative flex flex-col gap-6 py-8 transition-colors duration-500 md:flex-row md:items-center md:gap-10 md:py-10">
                  <div className="flex items-baseline gap-5 md:w-1/3">
                    <span className="font-heading text-sm font-medium text-accent">
                      {group.num}
                    </span>
                    <div>
                      <h3 className="font-heading text-2xl font-bold tracking-tight text-foreground transition-colors duration-500 group-hover:text-primary-foreground md:text-3xl">
                        {group.title}
                      </h3>
                      <p className="mt-1 text-sm text-muted-foreground transition-colors duration-500 group-hover:text-primary-foreground/70">
                        {group.desc}
                      </p>
                    </div>
                  </div>
                  <ul className="flex flex-wrap gap-2 md:flex-1 md:justify-end">
                    {group.tags.map((tag) => (
                      <li
                        key={tag}
                        className="rounded-full border border-border bg-card px-3.5 py-1.5 text-sm text-foreground transition-colors duration-500 group-hover:border-primary-foreground/30 group-hover:bg-primary-foreground/10 group-hover:text-primary-foreground"
                      >
                        {tag}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section
      id="projects"
      className="border-t border-border px-6 py-24 sm:px-10 md:px-16 md:py-36 lg:px-24"
    >
      <div className="mx-auto max-w-6xl">
        <p className="mb-8 text-xs font-medium uppercase tracking-[0.35em] text-beige-foreground">
          Selected Work
        </p>
        <h2 className="font-heading max-w-3xl text-5xl font-bold leading-[0.95] tracking-tight text-foreground sm:text-6xl md:text-7xl">
          Projects
        </h2>

        <div className="mt-20 flex flex-col gap-24 md:mt-28 md:gap-36">
          {projects.map((project) => (
            <div
              key={project.num}
              className="grid grid-cols-1 items-center gap-8 md:grid-cols-2 md:gap-16"
            >
              <a
                href={project.demo || project.github}
                target="_blank"
                rel="noreferrer"
                aria-label={`${project.title} live demo`}
                className={`group relative block aspect-[4/3] overflow-hidden bg-card ${
                  project.imageSide === "right" ? "md:order-2" : ""
                }`}
              >
                <img
                  alt={`${project.title} — ${project.tag}`}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-105"
                  src={project.image}
                />
              </a>

              <div className={project.imageSide === "right" ? "md:order-1" : ""}>
                <div className="flex items-baseline gap-4">
                  <span className="font-heading text-sm font-medium text-beige-foreground">
                    {project.num}
                  </span>
                  <span className="text-xs uppercase tracking-[0.25em] text-muted-foreground">
                    {project.tag}
                  </span>
                </div>
                <h3 className="font-heading mt-4 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
                  {project.title}
                </h3>
                <p className="mt-5 max-w-md text-pretty leading-relaxed text-muted-foreground">
                  {project.desc}
                </p>
                <ul className="mt-6 flex flex-wrap gap-x-5 gap-y-2">
                  {project.stack.map((tech) => (
                    <li key={tech} className="text-sm text-foreground/70">
                      {tech}
                    </li>
                  ))}
                </ul>
                <div className="mt-8 flex flex-wrap items-center gap-6">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="group inline-flex items-center gap-2 text-sm font-medium text-foreground"
                  >
                    <ArrowUpRight className="h-4 w-4" strokeWidth={1.5} />
                    <span className="underline decoration-transparent underline-offset-4 transition-colors group-hover:decoration-current">
                      GitHub
                    </span>
                  </a>
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="group inline-flex items-center gap-1.5 text-sm font-medium text-foreground"
                    >
                      <span className="underline decoration-transparent underline-offset-4 transition-colors group-hover:decoration-current">
                        Live Demo
                      </span>
                      <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section
      id="contact"
      className="border-t border-border px-6 py-24 sm:px-10 md:px-16 md:py-36 lg:px-24"
    >
      <div className="mx-auto max-w-6xl">
        <p className="mb-8 text-xs font-medium uppercase tracking-[0.35em] text-beige-foreground">
          Contact
        </p>
        <h2 className="font-heading max-w-4xl text-4xl font-bold leading-[1] tracking-tight text-foreground sm:text-6xl md:text-7xl lg:text-8xl">
          Let&apos;s Build Something Together
        </h2>

        <div className="mt-16 grid grid-cols-1 gap-12 md:grid-cols-[1fr_auto] md:items-end">
          <dl className="grid grid-cols-1 gap-8 sm:grid-cols-3">
            <div>
              <dt className="flex items-center gap-1.5 text-xs uppercase tracking-[0.25em] text-muted-foreground">
                <Mail className="h-3.5 w-3.5 text-accent" />
                Email
              </dt>
              <dd className="mt-2">
                <a
                  href="mailto:sanjukumbar408@gmail.com"
                  className="group inline-flex text-base font-medium text-foreground hover:text-accent transition-colors"
                >
                  <span className="underline decoration-transparent underline-offset-4 transition-colors group-hover:decoration-current">
                    sanjukumbar408@gmail.com
                  </span>
                </a>
              </dd>
            </div>
            <div>
              <dt className="flex items-center gap-1.5 text-xs uppercase tracking-[0.25em] text-muted-foreground">
                <LinkedinIcon className="h-3.5 w-3.5 text-accent" />
                LinkedIn
              </dt>
              <dd className="mt-2">
                <a
                  href="https://linkedin.com/in/sanju-kumbar-986709296"
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex items-center gap-1 text-base font-medium text-foreground hover:text-accent transition-colors"
                >
                  <span className="underline decoration-transparent underline-offset-4 transition-colors group-hover:decoration-current">
                    in/sanju-kumbar
                  </span>
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </dd>
            </div>
            <div>
              <dt className="flex items-center gap-1.5 text-xs uppercase tracking-[0.25em] text-muted-foreground">
                <GithubIcon className="h-3.5 w-3.5 text-accent" />
                GitHub
              </dt>
              <dd className="mt-2">
                <a
                  href="https://github.com/Sanjuismart"
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex items-center gap-1 text-base font-medium text-foreground hover:text-accent transition-colors"
                >
                  <span className="underline decoration-transparent underline-offset-4 transition-colors group-hover:decoration-current">
                    @Sanjuismart
                  </span>
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </dd>
            </div>
          </dl>

          <a
            href="mailto:sanjukumbar408@gmail.com"
            className="group inline-flex items-center gap-2 bg-foreground px-8 py-4 text-sm font-medium text-background transition-colors hover:bg-beige-foreground"
          >
            Say Hello
            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>
      </div>
    </section>
  );
}

export default function Portfolio() {
  return (
    <div className="pl-14 md:pl-20">
      <SidebarNav />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <footer className="border-t border-border px-6 py-10 sm:px-10 md:px-16 lg:px-24" />

      {/* Marquee + fade-up keyframes (add to global CSS instead if preferred) */}
      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 24s linear infinite;
        }
        @keyframes fade-up {
          from { opacity: 0; transform: translateY(16px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-up {
          animation: fade-up 0.7s ease-out both;
        }
      `}</style>
    </div>
  );
}