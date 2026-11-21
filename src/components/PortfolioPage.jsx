import { AnimatePresence, motion } from 'framer-motion'
import { ArrowDown, ArrowDownRight, ArrowRight, ArrowUpRight, Award, BriefcaseBusiness, Check, Code2, ExternalLink, GitBranch as Github, GraduationCap, Layers3, Briefcase as Linkedin, Menu, Moon, Send, Sparkles, Sun, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { achievements, certifications, codingProfiles, education, experience, interests, personal, projects, roles, skillGroups, statistics } from '../data/portfolio.js'

const filters = ['All work', 'AI/ML', 'GenAI', 'Web Development', 'Software Development']
const currentYear = new Date().getFullYear()
const apiBaseUrl = (import.meta.env.VITE_API_BASE_URL || '').replace(/\/+$/, '')

function ExternalAnchor({ href, children, ...props }) {
  return href ? <a href={href} target="_blank" rel="noreferrer" {...props}>{children}</a> : null
}

function SectionTitle({ index, eyebrow, title, copy }) {
  return <div className="section-title"><div className="section-index"><span>{index}</span><span className="index-line" /></div><div><p className="eyebrow">{eyebrow}</p><h2>{title}</h2>{copy && <p className="section-copy">{copy}</p>}</div></div>
}

function ProjectArtwork({ project }) {
  return <div className={`project-art art-${project.visual}`} aria-hidden="true"><div className="art-window"><div className="art-topbar"><i /><i /><i /><span /></div><div className="art-content">
    {project.visual === 'career' && <><div className="art-side" /><div className="art-main"><b /><i /><i /><div className="art-grid"><span /><span /><span /></div></div></>}
    {project.visual === 'voice' && <><div className="voice-orbit"><span /><span /><Sparkles size={20} /></div><div className="waveform">{Array.from({ length: 19 }, (_, i) => <i key={i} style={{ '--wave': `${12 + ((i * 13) % 35)}px` }} />)}</div></>}
    {project.visual === 'drawing' && <><div className="draw-canvas"><span /><i /><b /></div><div className="draw-tools"><i /><i /><i /><b /></div></>}
    {project.visual === 'food' && <><div className="food-photo">01</div><div className="food-info"><b /><i /><i /><span /></div><div className="food-photo small">02</div></>}
    {project.visual === 'blog' && <><div className="blog-cover">FIELD NOTES<br />ON MAKING</div><div className="blog-lines"><b /><i /><i /><i /><span /></div></>}
  </div></div><span className="art-label">{project.type}</span></div>
}

function ProjectCard({ project, onOpen }) {
  return <motion.article className={`project-card accent-${project.accent}`} layout initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 12 }} transition={{ duration: .3 }}><button className="project-open" type="button" onClick={() => onOpen(project)} aria-label={`Read ${project.title} case study`}><ProjectArtwork project={project} /><div className="project-meta"><span>{project.category}</span><ArrowUpRight size={16} /></div><h3>{project.title}</h3><p>{project.description}</p><span className="project-cta">Explore case study <ArrowRight size={14} /></span></button></motion.article>
}

function JourneyList({ title, icon, entries, empty }) {
  return <div className="journey-list"><div className="journey-heading">{icon}<h3>{title}</h3></div>{entries.length ? <div className="timeline">{entries.map((entry) => <article className="timeline-item" key={`${entry.title}-${entry.period}`}><span className="timeline-dot" /><span className="timeline-period">{entry.period}</span><h4>{entry.title}</h4><p className="timeline-org">{entry.organization}</p><p>{entry.description}</p>{entry.highlights && <ul className="timeline-highlights">{entry.highlights.map((item) => <li key={item}>{item}</li>)}</ul>}{entry.skills && <div className="timeline-tags">{entry.skills.map((skill) => <span key={skill}>{skill}</span>)}</div>}</article>)}</div> : <p className="empty-note">{empty}</p>}</div>
}

function Hero({ roleIndex }) {
  return <section className="hero section-wrap" id="home"><div className="hero-copy"><motion.div className="availability" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .1 }}><span className="availability-dot" /> HYDERABAD, INDIA <span>/</span> OPEN TO OPPORTUNITIES</motion.div><motion.p className="hero-kicker" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .2 }}>PASSIONATE ABOUT CODING. DRIVEN BY PROBLEM SOLVING. FOCUSED ON BUILDING SOFTWARE.</motion.p><motion.h1 initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .6, delay: .25 }}>{personal.name}<span className="name-period">.</span></motion.h1><div className="role-line"><span>I&apos;m a</span><AnimatePresence mode="wait"><motion.span key={roleIndex} className="role-word" initial={{ opacity: 0, y: 9 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -9 }}>{roles[roleIndex]}</motion.span></AnimatePresence></div><p className="hero-description">{personal.introduction}</p><div className="hero-actions"><a className="button button-primary" href="#projects">Explore my projects <ArrowDownRight size={16} /></a><a className="button button-secondary" href="#contact">Contact me <ArrowUpRight size={16} /></a>{personal.resumeUrl && <a className="button button-secondary" href={personal.resumeUrl} download>Download resume <ArrowDown size={14} /></a>}</div><div className="hero-socials"><ExternalAnchor href={personal.socials.github}><Github size={16} />GitHub</ExternalAnchor><ExternalAnchor href={personal.socials.linkedin}><Linkedin size={16} />LinkedIn</ExternalAnchor><ExternalAnchor href={personal.socials.leetcode}><Code2 size={16} />LeetCode</ExternalAnchor></div></div><motion.div className="hero-art" initial={{ opacity: 0, scale: .96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: .7, delay: .25 }} aria-label="Profile monogram illustration"><div className="hero-art-grid" /><div className="hero-art-label label-top"><span>PASSIONATE ABOUT</span><b>CODE<br />PROBLEM SOLVING</b></div><div className="portrait-frame"><div className="portrait-monogram">CPK</div><span className="portrait-corner corner-tl" /><span className="portrait-corner corner-br" /><span className="portrait-stamp"><Sparkles size={14} /> BUILDER MINDSET</span></div><div className="hero-art-label label-bottom"><span>FOCUS AREAS</span><b>JAVA / SOFTWARE / DSA</b></div><span className="hero-orbit orbit-one" /><span className="hero-orbit orbit-two" /><span className="hero-art-index">01 - 04</span></motion.div><div className="hero-stats">{statistics.map((stat) => <div className="hero-stat" key={stat.label}><strong>{stat.value}</strong><span>{stat.label}</span></div>)}</div><a className="scroll-cue" href="#about">SCROLL TO EXPLORE <ArrowDown size={14} /></a></section>
}

export default function PortfolioPage() {
  const [theme, setTheme] = useState(() => localStorage.getItem('portfolio-theme') || 'dark')
  const [menuOpen, setMenuOpen] = useState(false)
  const [filter, setFilter] = useState('All work')
  const [activeProject, setActiveProject] = useState(null)
  const [scrollProgress, setScrollProgress] = useState(0)
  const [showTop, setShowTop] = useState(false)
  const [roleIndex, setRoleIndex] = useState(0)
  const [githubStats, setGithubStats] = useState(null)
  const [contactStatus, setContactStatus] = useState({ kind: '', message: '' })
  const [sending, setSending] = useState(false)

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    localStorage.setItem('portfolio-theme', theme)
  }, [theme])

  useEffect(() => {
    const updateScroll = () => {
      const available = document.documentElement.scrollHeight - window.innerHeight
      setScrollProgress(available > 0 ? window.scrollY / available : 0)
      setShowTop(window.scrollY > 560)
    }
    updateScroll()
    window.addEventListener('scroll', updateScroll, { passive: true })
    return () => window.removeEventListener('scroll', updateScroll)
  }, [])

  useEffect(() => {
    const timer = window.setInterval(() => setRoleIndex((index) => (index + 1) % roles.length), 2800)
    return () => window.clearInterval(timer)
  }, [])

  useEffect(() => {
    const username = personal.socials.github.split('/').filter(Boolean).at(-1)
    if (!username) return
    const controller = new AbortController()
    fetch(`https://api.github.com/users/${encodeURIComponent(username)}`, { signal: controller.signal }).then((response) => {
      if (!response.ok) throw new Error('GitHub profile unavailable')
      return response.json()
    }).then((data) => setGithubStats({ repositories: data.public_repos, followers: data.followers })).catch(() => setGithubStats(null))
    return () => controller.abort()
  }, [])

  useEffect(() => {
    if (!activeProject) return undefined
    const onKey = (event) => event.key === 'Escape' && setActiveProject(null)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [activeProject])

  const visibleProjects = filter === 'All work' ? projects : projects.filter((project) => project.category === filter || project.categories?.includes(filter))

  async function submitContact(event) {
    event.preventDefault()
    setSending(true)
    setContactStatus({ kind: '', message: '' })
    const form = event.currentTarget
    const payload = Object.fromEntries(new FormData(form).entries())
    try {
      const response = await fetch(`${apiBaseUrl}/api/contact`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) })
      const responseText = await response.text()
      let result
      try {
        result = responseText ? JSON.parse(responseText) : {}
      } catch {
        throw new Error('The contact service returned an unexpected response. Check that the API is running, then try again.')
      }
      if (!response.ok) throw new Error(result.error || 'Message could not be sent.')
      form.reset()
      setContactStatus({ kind: 'success', message: 'Message sent. Thanks for reaching out.' })
    } catch (error) {
      setContactStatus({ kind: 'error', message: error.message || 'The contact service is unavailable. Please try again later.' })
    } finally { setSending(false) }
  }

  return <div className="site-shell">
    <div className="scroll-progress" style={{ transform: `scaleX(${scrollProgress})` }} />
    <header className="site-header"><a className="brand" href="#home" onClick={() => setMenuOpen(false)}><span className="brand-mark">CPK</span><span>{personal.name}<small>JAVA · SOFTWARE · FULL-STACK</small></span></a><nav className={menuOpen ? 'nav-links is-open' : 'nav-links'} aria-label="Main navigation">{[['About', '#about'], ['Skills', '#skills'], ['Projects', '#projects'], ['Journey', '#journey'], ['Profiles', '#profiles']].map(([label, href]) => <a key={href} href={href} onClick={() => setMenuOpen(false)}>{label}</a>)}<a className="nav-contact" href="#contact" onClick={() => setMenuOpen(false)}>Let&apos;s talk <ArrowUpRight size={15} /></a></nav><div className="header-actions"><button className="icon-button" type="button" onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`} title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}>{theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}</button><button className="icon-button menu-toggle" type="button" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Close menu' : 'Open menu'} aria-expanded={menuOpen}>{menuOpen ? <X size={20} /> : <Menu size={20} />}</button></div></header>
    <main>
      <Hero roleIndex={roleIndex} />

      <section className="about-section section-wrap section-rule" id="about"><SectionTitle index="01" eyebrow="A LITTLE ABOUT ME" title={<>Solving problems,<br /><em>building software.</em></>} /><div className="about-content"><p className="about-lead">Computer Science Engineering at <span>GRIET</span>, focused on Java, problem solving, and full-stack development.</p><div className="about-bottom"><p>{personal.biography}</p><div className="about-note"><Layers3 size={17} /><span>LEARN. BUILD. SOLVE.<br /><b>Curiosity into working software.</b></span></div></div><div className="interest-block"><h3>AREAS I&apos;M EXPLORING</h3><div className="skill-tags">{interests.map((interest) => <span key={interest}>{interest}</span>)}</div></div><div className="about-facts"><div><span>01</span><b>8.89 / 10</b><small>B.Tech CSE · GRIET</small></div><div><span>02</span><b>600+ problems</b><small>LeetCode · Java</small></div><div><span>03</span><b>Smart Interviews</b><small>DSA Mentor</small></div></div></div></section>

      <section className="skills-section section-wrap section-rule" id="skills"><SectionTitle index="02" eyebrow="THE TOOLKIT" title={<>Tools for<br /><em>the work.</em></>} copy="Java, full-stack development, and core computer science, with additional project experience in AI and computer vision." /><div className="skills-grid">{skillGroups.map((group, index) => <motion.article className="skill-group" key={group.title} initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .2 }} transition={{ delay: index * .04 }}><div className="skill-heading"><span>{String(index + 1).padStart(2, '0')}</span><h3>{group.title}</h3></div><div className="skill-tags">{group.items.map((skill) => <span key={skill}>{skill}</span>)}</div></motion.article>)}</div></section>

      <section className="projects-section section-wrap section-rule" id="projects"><SectionTitle index="03" eyebrow="SELECTED WORK" title={<>Ideas built<br /><em>to solve.</em></>} copy="From career preparation and full-stack ordering to conversational learning and gesture-based math." /><div className="projects-toolbar"><p><span>{String(visibleProjects.length).padStart(2, '0')}</span> PROJECTS</p><div className="filter-list" role="group" aria-label="Filter projects">{filters.map((item) => <button key={item} type="button" className={filter === item ? 'filter-chip active' : 'filter-chip'} onClick={() => setFilter(item)} aria-pressed={filter === item}>{item}</button>)}</div></div><motion.div className="projects-grid" layout><AnimatePresence mode="popLayout">{visibleProjects.map((project) => <ProjectCard key={project.id} project={project} onOpen={setActiveProject} />)}</AnimatePresence></motion.div><p className="project-disclosure"><span />Project summaries and technology details are based on the information provided.</p></section>

      <section className="journey-section section-wrap section-rule" id="journey"><SectionTitle index="04" eyebrow="THE JOURNEY" title={<>Practice into<br /><em>progress.</em></>} copy="Academic foundations, mentoring, and milestones along the way." /><div className="journey-columns"><JourneyList title="Education" icon={<GraduationCap size={18} />} entries={education} empty="Education details will appear here." /><JourneyList title="Experience" icon={<BriefcaseBusiness size={18} />} entries={experience} empty="Professional experience will appear here." /></div><div className="achievement-strip"><div className="achievement-title"><Award size={16} />CODING & TECHNICAL ACHIEVEMENTS</div><div className="achievement-grid">{achievements.map((item) => <article key={item.title} className="achievement-card"><b>{item.title}</b><span>{item.detail}</span></article>)}</div><div className="certifications-heading"><span>CERTIFICATIONS</span><span className="index-line" /></div><div className="certifications-grid">{certifications.map((certificate) => <article className="certification-card" key={certificate.name}><span className="certificate-mark"><Award size={16} /></span><div><h3>{certificate.name}</h3><p>{certificate.issuer}</p></div><span className="certificate-status">CERTIFIED</span></article>)}</div></div></section>

      <section className="profiles-section section-wrap section-rule" id="profiles"><SectionTitle index="05" eyebrow="BEYOND THE BUILD" title={<>Code, measure,<br /><em>improve.</em></>} copy="Public coding profiles and contest results, linked to their original sources." /><div className="profile-grid"><article className="profile-card"><div className="profile-card-head"><Github size={18} />CODE & COMMUNITY</div><h3>GitHub</h3><p>Repositories, experiments, and the work behind the projects.</p><div className="profile-stats"><div><span>PUBLIC REPOS</span><strong>{githubStats?.repositories ?? '—'}</strong></div><div><span>FOLLOWERS</span><strong>{githubStats?.followers ?? '—'}</strong></div></div><ExternalAnchor href={`${personal.socials.github.replace(/\/$/, '')}?tab=overview#js-contribution-activity`} className="contribution-link">Open contribution activity on GitHub</ExternalAnchor><ExternalAnchor href={personal.socials.github} className="profile-link">View GitHub profile <ArrowUpRight size={14} /></ExternalAnchor></article><article className="profile-card"><div className="profile-card-head"><Code2 size={18} />PROBLEM SOLVING</div><h3>Coding profiles</h3><p>Practice profiles and achievements, linked directly to their sources.</p><div className="coding-highlights"><div><span>LEETCODE SOLVED</span><strong>{codingProfiles.leetcode.solved}</strong></div><div><span>LEETCODE RATING</span><strong>{codingProfiles.leetcode.rating}</strong></div><div><span>BADGE</span><strong>{codingProfiles.leetcode.badge}</strong></div><div><span>CODECHEF RATING</span><strong>{codingProfiles.codechef.rating}</strong></div></div><div className="profile-links"><ExternalAnchor href={personal.socials.leetcode}>LeetCode <ArrowUpRight size={14} /></ExternalAnchor><ExternalAnchor href={personal.socials.codechef}>CodeChef <ArrowUpRight size={14} /></ExternalAnchor></div><div className="profile-footnote">LeetCode and CodeChef highlights are supplied profile figures; platform stats are not fetched from third-party APIs.</div></article></div></section>

      <section className="contact-section section-wrap section-rule" id="contact"><SectionTitle index="06" eyebrow="START A CONVERSATION" title={<>Have an idea<br /><em>or opportunity?</em></>} copy="I&apos;m open to connecting with developers, recruiters, technology enthusiasts, and professionals." /><div className="contact-content"><div className="contact-aside"><span className="contact-aside-label">SAY HELLO</span><h3>Let&apos;s build<br />something useful.</h3><p>Reach out about software, a collaboration, or an opportunity.</p><a className="email-link" href={`mailto:${personal.email}`}>{personal.email}<ArrowUpRight size={14} /></a><a className="email-link" href={`tel:${personal.phone.replaceAll(' ', '')}`}>{personal.phone}</a><p className="contact-location">{personal.location}</p><div className="contact-socials"><ExternalAnchor href={personal.socials.linkedin}><Linkedin size={15} /> LinkedIn</ExternalAnchor><ExternalAnchor href={personal.socials.github}><Github size={15} /> GitHub</ExternalAnchor></div></div><form className="contact-form" onSubmit={submitContact}><div className="form-row"><label>Your name<input name="name" autoComplete="name" required minLength="2" maxLength="80" placeholder="Name" /></label><label>Email address<input name="email" type="email" autoComplete="email" required maxLength="254" placeholder="you@example.com" /></label></div><label>Subject<input name="subject" required minLength="3" maxLength="120" placeholder="What would you like to discuss?" /></label><label>Message<textarea name="message" required minLength="10" maxLength="4000" rows="4" placeholder="A little context goes a long way..." /></label><label className="website-field">Leave this field empty<input name="website" tabIndex="-1" autoComplete="off" /></label><div className="form-submit-row"><button className="button button-primary" type="submit" disabled={sending}>{sending ? 'Sending...' : 'Send message'}{sending ? <span className="button-spinner" /> : <Send size={14} />}</button><span className="form-privacy">Your details are only used to reply.</span></div>{contactStatus.message && <p className={`form-status ${contactStatus.kind}`} role="status">{contactStatus.kind === 'success' && <Check size={14} />}{contactStatus.message}</p>}</form></div></section>
    </main>
    <footer className="site-footer section-wrap"><a className="footer-brand" href="#home">CPK<span>.</span></a><p>Passionate about coding, problem-solving, and building meaningful software.</p><a className="back-to-top" href="#home">BACK TO TOP <ArrowUpRight size={13} /></a><span className="footer-copy">© {currentYear} {personal.name}</span></footer>
    {showTop && <button className="floating-top" type="button" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} aria-label="Back to top"><ArrowUpRight size={18} /></button>}
    <AnimatePresence>{activeProject && <motion.div className="modal-backdrop" role="presentation" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onMouseDown={(event) => event.target === event.currentTarget && setActiveProject(null)}><motion.section className="project-modal" role="dialog" aria-modal="true" aria-labelledby="modal-title" initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 10 }}><button type="button" className="modal-close icon-button" aria-label="Close case study" onClick={() => setActiveProject(null)}><X size={18} /></button><ProjectArtwork project={activeProject} /><p className="eyebrow">{activeProject.category} / CASE STUDY</p><h2 id="modal-title">{activeProject.title}</h2><p className="modal-detail">{activeProject.detail}</p><h3>Key features</h3><ul className="feature-list">{activeProject.features.map((feature) => <li key={feature}><Check size={14} />{feature}</li>)}</ul><div className="modal-stack">{activeProject.stack.map((item) => <span key={item}>{item}</span>)}</div><div className="modal-links"><ExternalAnchor href={activeProject.github} className="button button-secondary"><Github size={15} /> Source code <ExternalLink size={12} /></ExternalAnchor><ExternalAnchor href={activeProject.demo} className="button button-primary">Live project <ArrowUpRight size={14} /></ExternalAnchor>{!activeProject.github && !activeProject.demo && <p>Repository and live demo links were not included in the supplied details.</p>}</div></motion.section></motion.div>}</AnimatePresence>
  </div>
}
