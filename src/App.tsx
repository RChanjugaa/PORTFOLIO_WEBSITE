/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect, useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  ArrowUpRight,
  Award,
  BriefcaseBusiness,
  CheckCircle2,
  Code2,
  Database,
  Download,
  ExternalLink,
  Github,
  GraduationCap,
  Layers3,
  Linkedin,
  Mail,
  Menu,
  Moon,
  Palette,
  Phone,
  Server,
  Sparkles,
  Sun,
  UserRound,
  X,
} from 'lucide-react';

const assetPath = (fileName: string) => `${import.meta.env.BASE_URL}${fileName}`;

const PROJECTS = [
  {
    title: 'Expense Tracker',
    subtitle: 'Group Expense Management App',
    description: 'Full-stack Django app for tracking and splitting expenses across groups, with email OTP authentication, Google login, and PostgreSQL persistence.',
    tech: ['Python', 'Django', 'PostgreSQL', 'Bootstrap'],
    category: 'Personal',
    image: assetPath('project-expensetracker.png'),
    liveLink: 'https://expense-tracker-iyjt.onrender.com/',
    github: 'https://github.com/RChanjugaa/EXPENSE_TRACKER',
    highlight: 'Live on Render',
  },
  {
    title: 'READZY',
    subtitle: 'Book Lending Platform',
    description: 'Responsive book lending platform with user-focused screens, interactive components, and backend integration for managing loans and inventory.',
    tech: ['HTML', 'CSS', 'JavaScript', 'PHP', 'SQL'],
    category: 'University',
    image: assetPath('project-readzy.png'),
    liveLink: 'https://rchanjugaa.github.io/READZY/',
    github: 'https://github.com/RChanjugaa/READZY',
    highlight: 'Live Demo',
  },
  {
    title: 'Ambiance',
    subtitle: 'Photography Studio Management System',
    description: 'Studio booking and management system focused on service handling, admin workflows, and a smooth user journey for photography clients.',
    tech: ['TypeScript', 'JavaScript', 'Node.js', 'MySQL'],
    category: 'University',
    image: assetPath('project-ambiance.svg'),
    liveLink: '',
    github: 'https://github.com/RChanjugaa/Photography_studio_management_system',
    highlight: '76+ commits',
  },
  {
    title: 'MEDILIFE',
    subtitle: 'Patient Management System',
    description: 'Hospital management website for patient records and appointments, combining responsive UI with backend-driven data handling.',
    tech: ['Bootstrap', 'jQuery', 'MongoDB', 'Node.js', 'Express.js'],
    category: 'Personal',
    image: assetPath('project-medilife.svg'),
    liveLink: '',
    github: 'https://github.com/RChanjugaa/MEDILIFE',
    highlight: 'Full Stack',
  },
  {
    title: 'SaveLKR',
    subtitle: 'Smart Budgeting Web App',
    description: 'Budgeting app concept for tracking daily expenses, scanning bills with OCR, and generating voice summaries in English, Sinhala, and Tamil.',
    tech: ['HTML', 'CSS', 'JavaScript', 'Firebase', 'Tesseract.js'],
    category: 'Personal',
    image: assetPath('project-savelkr.svg'),
    liveLink: '',
    github: '',
    highlight: 'In Progress',
  },
  {
    title: 'Portfolio',
    subtitle: 'Personal Portfolio Website',
    description: 'React and TypeScript portfolio built to present projects, experience, skills, and contact details in a polished web experience.',
    tech: ['React', 'TypeScript', 'Vite', 'Tailwind CSS'],
    category: 'Personal',
    image: assetPath('project-ambiance.svg'),
    liveLink: 'https://rchanjugaa.github.io/R.Chanjugaa/',
    github: 'https://github.com/RChanjugaa/R.Chanjugaa',
    highlight: 'React + Vite',
  },
];

const EXPERIENCE = [
  {
    role: 'Front-End Developer Intern',
    company: 'Codveda Technologies',
    period: '1 Month',
    description: 'Built responsive interfaces with HTML, CSS, and JavaScript while improving user experience, consistency, and layout quality.',
    link: assetPath('CODEVEDA Completion letter.pdf'),
  },
  {
    role: 'Program Team Member',
    company: 'Lead Spring 2025 - IEEE IAS & PES SLIIT',
    period: '2025',
    description: 'Supported event coordination, Agile planning, and cross-functional collaboration between program, design, and technical needs.',
    link: 'https://drive.google.com/file/d/1oHPhTPLI7ioJpti4fZGpWSCtuo4gvEQw/view?usp=drive_link',
  },
];

const SKILL_GROUPS = [
  { title: 'Frontend', icon: Code2, skills: ['React', 'TypeScript', 'JavaScript', 'HTML', 'CSS', 'Bootstrap', 'Tailwind CSS'] },
  { title: 'Backend', icon: Server, skills: ['Python', 'Django', 'Node.js', 'Express.js', 'PHP'] },
  { title: 'Databases', icon: Database, skills: ['PostgreSQL', 'MongoDB', 'MySQL', 'MSSQL', 'Firebase'] },
  { title: 'Design & Tools', icon: Palette, skills: ['Figma', 'UI/UX Design', 'GitHub', 'Android Studio', 'R Studio'] },
];

const STATS = [
  { value: '6+', label: 'Featured projects' },
  { value: '20+', label: 'Tools and technologies' },
  { value: '2', label: 'Professional experiences' },
];

const NAV_ITEMS = ['About', 'Projects', 'Experience', 'Skills', 'Contact'];

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [theme, setTheme] = useState('light');
  const [filter, setFilter] = useState('All');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);
    document.documentElement.classList.toggle('dark', savedTheme === 'dark');

    const handleScroll = () => setScrolled(window.scrollY > 24);
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(nextTheme);
    localStorage.setItem('theme', nextTheme);
    document.documentElement.classList.toggle('dark', nextTheme === 'dark');
  };

  const filteredProjects = useMemo(() => {
    if (filter === 'All') return PROJECTS;
    return PROJECTS.filter((project) => project.category === filter);
  }, [filter]);

  return (
    <div className="watercolor-shell min-h-screen transition-colors duration-300">
      <header className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-300 ${scrolled ? 'watercolor-header watercolor-header-scrolled' : 'watercolor-header border-transparent'}`}>
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8">
          <a href="#" className="flex items-center gap-3" aria-label="Go to top">
            <span className="logo-mark grid h-9 w-9 place-items-center rounded-md text-sm font-black">CR</span>
            <span className="hidden text-sm font-bold uppercase tracking-[0.18em] sm:block">Chanjugaa</span>
          </a>

          <div className="hidden items-center gap-7 md:flex">
            {NAV_ITEMS.map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="nav-link text-xs font-bold uppercase tracking-[0.16em] transition-colors">
                {item}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <button onClick={toggleTheme} className="icon-button grid h-10 w-10 place-items-center rounded-md border transition-colors" aria-label="Toggle theme">
              {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
            </button>
            <button onClick={() => setIsMenuOpen(true)} className="icon-button grid h-10 w-10 place-items-center rounded-md border md:hidden" aria-label="Open menu">
              <Menu size={20} />
            </button>
          </div>
        </nav>
      </header>

      <main>
        <section className="relative overflow-hidden px-5 pb-20 pt-28 md:px-8 md:pb-28 md:pt-36">
          <div className="watercolor-wash absolute inset-x-0 top-0 h-[560px]" />
          <div className="relative mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
            <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
              <div className="watercolor-pill mb-7 inline-flex items-center gap-2 rounded-md border px-3 py-2 text-xs font-bold uppercase tracking-[0.16em] backdrop-blur">
                <Sparkles size={15} />
                Open to internship opportunities
              </div>

              <h1 className="max-w-4xl text-5xl font-black leading-[0.96] tracking-tight md:text-7xl lg:text-8xl">
                Software engineer focused on clean, useful web experiences.
              </h1>

              <p className="watercolor-lead mt-7 max-w-2xl text-lg leading-8 md:text-xl">
                I am Chanjugaa Rasamohan, a Software Engineering student who enjoys building full-stack web apps, frontend interfaces, and UI/UX-driven products that feel clear and easy to use.
              </p>

              <div className="mt-9 flex flex-wrap items-center gap-3">
                <a href="#projects" className="btn-primary">
                  View Projects
                  <ArrowUpRight size={17} />
                </a>
                <a href={assetPath('Chanjugaa_Rasamohan_CV.pdf')} target="_blank" rel="noreferrer" className="btn-secondary">
                  Download CV
                  <Download size={17} />
                </a>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }} className="grid gap-4">
              <div className="portrait-frame overflow-hidden rounded-lg border p-3 shadow-xl backdrop-blur">
                <img src={assetPath('profile.jpg')} alt="Chanjugaa Rasamohan" className="aspect-[4/3] w-full rounded-md object-cover object-center" />
              </div>
              <div className="grid grid-cols-3 gap-3">
                {STATS.map((stat) => (
                  <div key={stat.label} className="stat-card rounded-md border p-4">
                    <div className="text-2xl font-black">{stat.value}</div>
                    <div className="muted mt-1 text-xs font-semibold uppercase tracking-[0.12em]">{stat.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        <section id="about" className="section">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            <div>
              <p className="eyebrow">About</p>
              <h2 className="section-title">I build with design sense and engineering discipline.</h2>
            </div>
            <div className="grid gap-5 md:grid-cols-2">
              <div className="panel md:col-span-2">
                <UserRound className="mb-5 text-cyan-700 dark:text-cyan-300" size={26} />
                <p className="text-lg leading-8 text-zinc-700 dark:text-zinc-300">
                  My strongest area is connecting frontend development with UI/UX thinking. I care about structure, readability, responsive layouts, and user flows that make a product feel trustworthy.
                </p>
              </div>
              {[
                ['Current focus', 'React, TypeScript, Django, databases, and stronger production-ready project workflows.'],
                ['Working style', 'Calm, organized, collaborative, and comfortable turning requirements into usable screens.'],
              ].map(([title, body]) => (
                <div key={title} className="panel">
                  <CheckCircle2 className="mb-5 text-emerald-600 dark:text-emerald-300" size={24} />
                  <h3 className="text-lg font-bold">{title}</h3>
                  <p className="muted mt-3 leading-7">{body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="projects" className="section watercolor-band">
          <div className="mx-auto max-w-7xl">
            <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <div>
                <p className="eyebrow">Projects</p>
                <h2 className="section-title">Selected work with clear proof points.</h2>
              </div>
              <div className="flex gap-2">
                {['All', 'Personal', 'University'].map((option) => (
                  <button key={option} onClick={() => setFilter(option)} className={`filter-button rounded-md border px-4 py-2 text-xs font-bold uppercase tracking-[0.14em] transition-colors ${filter === option ? 'filter-button-active' : ''}`}>
                    {option}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              <AnimatePresence mode="popLayout">
                {filteredProjects.map((project) => (
                  <motion.article key={project.title} layout initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 18 }} className="project-card">
                    <div className="relative overflow-hidden border-b watercolor-divider">
                      <img src={project.image} alt={project.title} className="aspect-[16/10] w-full object-cover transition-transform duration-500 hover:scale-105" />
                      <span className="project-highlight absolute left-4 top-4 rounded-md px-3 py-1 text-xs font-bold uppercase tracking-[0.12em] shadow-sm">
                        {project.highlight}
                      </span>
                    </div>
                    <div className="flex flex-1 flex-col p-5">
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <p className="eyebrow-mini text-xs font-bold uppercase tracking-[0.14em]">{project.category}</p>
                          <h3 className="mt-2 text-2xl font-black tracking-tight">{project.title}</h3>
                        </div>
                        <span className="subtitle-chip rounded-md border px-2 py-1 text-xs font-bold">{project.subtitle}</span>
                      </div>
                      <p className="muted mt-4 flex-1 leading-7">{project.description}</p>
                      <div className="mt-5 flex flex-wrap gap-2">
                        {project.tech.map((tech) => <span key={tech} className="tag">{tech}</span>)}
                      </div>
                      <div className="mt-6 grid grid-cols-2 gap-3">
                        {project.liveLink ? <a href={project.liveLink} target="_blank" rel="noreferrer" className="btn-card-primary">Live Demo <ExternalLink size={15} /></a> : <span className="btn-card-disabled">Demo Soon</span>}
                        {project.github ? <a href={project.github} target="_blank" rel="noreferrer" className="btn-card-secondary">View Code <Github size={15} /></a> : <span className="btn-card-disabled">Private</span>}
                      </div>
                    </div>
                  </motion.article>
                ))}
              </AnimatePresence>
            </div>
          </div>
        </section>

        <section id="experience" className="section">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.85fr_1.15fr]">
            <div>
              <p className="eyebrow">Experience</p>
              <h2 className="section-title">Practical exposure and leadership involvement.</h2>
              <div className="education-card mt-6 rounded-lg border p-4">
                <GraduationCap className="mb-3 text-[#7691A1]" size={24} />
                <p className="muted text-sm font-semibold uppercase tracking-[0.14em]">Education</p>
                <p className="mt-2 font-bold">Software Engineering Student</p>
                <p className="muted mt-1">SLIIT City Uni</p>
              </div>
            </div>
            <div className="space-y-4">
              {EXPERIENCE.map((item) => (
                <article key={item.role} className="panel">
                  <div className="flex flex-col justify-between gap-5 md:flex-row md:items-start">
                    <div>
                      <span className="watercolor-badge rounded-md px-3 py-1 text-xs font-bold uppercase tracking-[0.14em]">{item.period}</span>
                      <h3 className="mt-4 text-2xl font-black tracking-tight">{item.role}</h3>
                      <p className="muted mt-1 font-semibold">{item.company}</p>
                    </div>
                    <a href={item.link} target="_blank" rel="noreferrer" className="btn-icon-label">Certificate <Award size={16} /></a>
                  </div>
                  <p className="muted mt-5 leading-7">{item.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="skills" className="section watercolor-band">
          <div className="mx-auto max-w-7xl">
            <div className="max-w-2xl">
              <p className="eyebrow">Skills</p>
              <h2 className="section-title">A practical toolkit for frontend and full-stack work.</h2>
            </div>
            <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
              {SKILL_GROUPS.map((group) => {
                const Icon = group.icon;
                return (
                  <article key={group.title} className="panel">
                    <Icon className="mb-5 text-[#7691A1]" size={26} />
                    <h3 className="text-xl font-black">{group.title}</h3>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {group.skills.map((skill) => <span key={skill} className="tag">{skill}</span>)}
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="section">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-5 md:grid-cols-3">
              {[
                { icon: BriefcaseBusiness, title: 'Internship ready', body: 'Prepared to contribute to frontend, UI, and full-stack feature work.' },
                { icon: Layers3, title: 'Project minded', body: 'Comfortable taking a project from idea to interface, data flow, and deployment.' },
                { icon: Award, title: 'IEEE involvement', body: 'Active in technical communities and collaborative student programs.' },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.title} className="panel">
                    <Icon className="mb-5 text-[#DDBDBE]" size={25} />
                    <h3 className="text-xl font-black">{item.title}</h3>
                    <p className="muted mt-3 leading-7">{item.body}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section id="contact" className="section watercolor-contact">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_0.85fr] lg:items-center">
            <div>
              <p className="eyebrow contact-eyebrow">Contact</p>
              <h2 className="max-w-3xl text-4xl font-black tracking-tight md:text-6xl">Have an internship, project, or collaboration in mind?</h2>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-[#3b4f59]">I am open to opportunities where I can build, learn, and contribute to real web products.</p>
            </div>
            <div className="contact-panel rounded-lg border p-5">
              <div className="space-y-3">
                <a href="mailto:chanju1231@gmail.com" className="contact-link"><Mail size={19} />chanju1231@gmail.com</a>
                <a href="tel:+94712219001" className="contact-link"><Phone size={19} />+94 71 221 9001</a>
                <a href="https://linkedin.com/in/chanjugaa-rasamohan-1444b0372" target="_blank" rel="noreferrer" className="contact-link"><Linkedin size={19} />LinkedIn Profile</a>
                <a href="https://github.com/RChanjugaa" target="_blank" rel="noreferrer" className="contact-link"><Github size={19} />GitHub Profile</a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="watercolor-footer border-t px-5 py-8 md:px-8">
        <div className="muted mx-auto flex max-w-7xl flex-col justify-between gap-4 text-sm md:flex-row md:items-center">
          <p>Copyright 2026 Chanjugaa Rasamohan. Built with React and TypeScript.</p>
          <div className="flex gap-4">
            <a href="https://github.com/RChanjugaa" target="_blank" rel="noreferrer" className="hover:text-zinc-950 dark:hover:text-white">GitHub</a>
            <a href="https://linkedin.com/in/chanjugaa-rasamohan-1444b0372" target="_blank" rel="noreferrer" className="hover:text-zinc-950 dark:hover:text-white">LinkedIn</a>
          </div>
        </div>
      </footer>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[70] bg-[#7691A1]/45 p-4 backdrop-blur md:hidden">
            <motion.div initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }} className="mobile-menu ml-auto flex h-full max-w-sm flex-col rounded-lg p-6">
              <div className="flex items-center justify-between">
                <span className="text-sm font-black uppercase tracking-[0.18em]">Menu</span>
                <button onClick={() => setIsMenuOpen(false)} className="icon-button grid h-10 w-10 place-items-center rounded-md border"><X size={20} /></button>
              </div>
              <div className="mt-10 grid gap-4">
                {NAV_ITEMS.map((item) => (
                  <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setIsMenuOpen(false)} className="mobile-menu-link rounded-md border px-4 py-4 text-lg font-black">
                    {item}
                  </a>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}


