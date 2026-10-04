import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Lenis from 'lenis'
import galaxy from './assets/Halftone Galaxy Over Alien Mountains.png'
import githubLogo from './assets/github.svg'
import npmLogo from './assets/npm.svg'
import './App.css'

gsap.registerPlugin(ScrollTrigger)

const copy = {
  hero: { title: 'design.md', control: 'SCROLL TO KNOW MORE ↓' },
  intro: {
    title: 'A SKILL.md FILE THAT ENABLES TWO DESIGN LANGUAGES.',
    lede: 'One set of rules. Two radically different visual languages.',
    support: 'Design.md gives an AI agent the constraints, principles and motion language needed to produce interfaces with a coherent visual identity.',
    architecture: 'A design skill is not just a palette. It defines the language an AI uses to make consistent visual and interaction decisions.',
  },
}

const prompts = {
  minimalism: 'Build this interface using the Minimalism skill bundle in .agents/. Read design.md, components.md, structure.md, and animation.md before coding. Follow their tokens, 4px spacing grid, hairline surfaces, accessibility floor, responsive rules, and reversible motion. Adapt the system to the existing project rather than introducing a second design system.',
  brutalism: 'Build this interface using the Neobrutalism skill bundle in .agents/. Read design.md, components.md, structure.md, and animation.md before coding. Follow its flat palette, black 2px outlines, hard 4px offset shadows, physical press behavior, responsive rules, and reduced-motion guidance. Use strong scroll compositions only where they support the content, and adapt to the existing project.',
}

function PreviewCanvas({ kind }) {
  const minimal = kind === 'minimal'
  return (
    <div className={`preview-canvas ${minimal ? 'preview-minimal' : 'preview-neo'}`} aria-hidden="true">
      {minimal ? (
        <><div className="canvas-minimal-nav"><b>form&nbsp; / &nbsp;function</b><span>INDEX&nbsp;&nbsp; ABOUT</span></div><div className="canvas-minimal-copy"><small>OBJECTS FOR EVERY DAY</small><strong>Less,<br/>but better.</strong><span>Thoughtful forms for modern living.</span><i>EXPLORE COLLECTION ↗</i></div><div className="canvas-minimal-object"><div/><span>01 / CERAMIC</span></div></>
      ) : (
        <><div className="canvas-neo-nav"><b>LOUD STUDIO™</b><span>MENU ☰</span></div><div className="canvas-neo-sticker">GOOD<br/>IDEAS<br/>ONLY!</div><div className="canvas-neo-copy"><small>DESIGN THAT HITS DIFFERENT</small><strong>MAKE<br/>SOME<br/>NOISE.</strong><span>Big energy. Zero apologies.</span><i>LET'S GO ↗</i></div><div className="canvas-neo-star">✳</div></>
      )}
    </div>
  )
}

function App() {
  const root = useRef(null)
  const heroImage = useRef(null)
  const [activeStyle, setActiveStyle] = useState('minimalism')
  const [copied, setCopied] = useState(false)
  const [copiedCommand, setCopiedCommand] = useState(false)

  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const lenis = reduced ? null : new Lenis({ lerp: 0.1, smoothWheel: true })
    const tick = (time) => lenis?.raf(time * 1000)
    if (lenis) {
      lenis.on('scroll', ScrollTrigger.update)
      gsap.ticker.add(tick)
      gsap.ticker.lagSmoothing(0)
    }
    const ctx = gsap.context(() => {
      if (!reduced) {
        gsap.from('.hero-title', { y: 22, opacity: 0, duration: 0.9, stagger: 0.12, ease: 'power3.out' })
        gsap.to(heroImage.current, { y: 110, scale: 1.08, ease: 'none', scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: true } })
        gsap.to('.hero-copy', { y: -40, ease: 'none', scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: true } })
        if (window.matchMedia('(min-width: 761px)').matches) {
          gsap.timeline({ scrollTrigger: { trigger: '#designs', start: 'top top', end: '+=300%', pin: true, scrub: 0.5 } })
            .from('.intro-heading', { clipPath: 'inset(0 0 100% 0)', duration: 0.15 })
            .from('.intro-copy', { opacity: 0, y: 16, duration: 0.15 }, 0.15)
            .to('.intro-copy', { opacity: 0, duration: 0.12 }, 0.3)
            .to('.intro-heading', { opacity: 0, duration: 0.12 }, 0.3)
            .from('.comparison-title.minimal', { opacity: 0, duration: 0.2 }, 0.3)
            .from('.comparison-title.neo', { opacity: 0, duration: 0.2 }, 0.36)
            .from('.preview-canvas', { y: 45, opacity: 0, duration: 0.2, stagger: 0.04 }, 0.56)
        }
        if (window.matchMedia('(min-width: 761px)').matches) {
          gsap.timeline({ scrollTrigger: { trigger: '.skill-story', start: 'top top', end: '+=180%', pin: '.story-pin', scrub: 0.7 } })
            .to('.story-minimal', { opacity: 0, y: -48, duration: 0.42, ease: 'none' }, 0.2)
            .fromTo('.story-brutal', { opacity: 0, y: 64, clipPath: 'inset(0 0 100% 0)' }, { opacity: 1, y: 0, clipPath: 'inset(0 0 0% 0)', duration: 0.42, ease: 'none' }, 0.48)
        }
        gsap.from('.footer-inner', { yPercent: 25, ease: 'none', scrollTrigger: { trigger: '.footer', start: 'top bottom', end: 'top top', scrub: true } })
      }
    }, root)
    document.fonts?.ready.then(() => ScrollTrigger.refresh())
    heroImage.current?.decode?.().then(() => ScrollTrigger.refresh()).catch(() => {})
    return () => {
      ctx.revert()
      if (lenis) { gsap.ticker.remove(tick); lenis.destroy() }
    }
  }, [])

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(prompts[activeStyle])
      setCopied(true)
      window.setTimeout(() => setCopied(false), 1800)
    } catch { setCopied(false) }
  }

  const handleCopyCommand = async () => {
    try {
      await navigator.clipboard.writeText('npx create-design-md')
      setCopiedCommand(true)
      window.setTimeout(() => setCopiedCommand(false), 1800)
    } catch { setCopiedCommand(false) }
  }

  return (
    <div className="site-shell" ref={root}>
      <a className="skip-link" href="#main">Skip to content</a>
      <main id="main">
        <section className="hero" aria-label="Design MD introduction">
          <div className="hero-image"><img ref={heroImage} src={galaxy} alt="Halftone galaxy over alien mountains"/><div className="grain"/></div>

          <div className="hero-copy"><h1 className="hero-title">{copy.hero.title}</h1><nav className="hero-links" aria-label="Project links"><a href="https://github.com/akshatmalik-bruh/design.md" target="_blank" rel="noreferrer" aria-label="Design Skills on GitHub"><img src={githubLogo} alt="" /></a><a href="https://www.npmjs.com/package/create-design-md" target="_blank" rel="noreferrer" aria-label="create-design-md on npm"><img src={npmLogo} alt="" /></a></nav></div>
          <p className="hero-coordinate">VERSION 1</p><a className="scroll-link" href="#designs">{copy.hero.control}</a>
        </section>

        <section id="designs" className="designs" aria-labelledby="designs-heading">
          <div className="designs-inner">
            <p className="section-index">01 / THE EXPERIMENT <span>ONE SYSTEM · TWO OUTPUTS</span></p>
            <h2 id="designs-heading" className="intro-heading">{copy.intro.title}</h2>
            <div className="intro-copy"><p className="intro-lede">{copy.intro.lede}</p><p>{copy.intro.support}</p></div>
            <div className="comparison">
              <div><h3 className="comparison-title minimal">Minimalism <sup>01</sup></h3><PreviewCanvas kind="minimal"/></div>
              <div><h3 className="comparison-title neo">Neobrutalism <sup>02</sup></h3><PreviewCanvas kind="neo"/></div>
            </div>
            <p className="proof-note">SAME CONTENT OBJECT <span>DIFFERENT DESIGN RULES</span></p>
          </div>
        </section>

        <section className="skill-story" id="architecture" aria-label="Two design languages">
          <div className="story-pin">
            <p className="section-index story-index">02 / TWO PHILOSOPHIES <span>SCROLL TO SWITCH THE WORLD</span></p>
            <article className="story-act story-minimal">
              <p className="story-file">MINIMALISM / .AGENTS / DESIGN.MD</p><h2>Minimalism<span>.</span></h2><p className="story-deck">Less noise. More signal.</p>
              <p className="story-description">A neutral ramp. A four-pixel rhythm. One-pixel hairlines instead of shadows. Hierarchy comes from type, spacing and position; motion confirms, then gets out of the way.</p>
              <div className="story-rules"><span>4PX GRID</span><span>1PX HAIRLINES</span><span>NO BOUNCE</span><span>SCROLL REVERSES</span></div><span className="story-stamp">QUIET<br/>BY DESIGN</span>
            </article>
            <article className="story-act story-brutal">
              <p className="story-file">NEOBRUTALISM / .AGENTS / DESIGN.MD</p><h2>NEO<br/>BRUTALISM<span>!</span></h2><p className="story-deck">Make the structure impossible to miss.</p>
              <div className="story-rules"><span>2PX BLACK</span><span>4PX SHADOW</span><span>PRESS / RELEASE</span><span>LAYERS IN MOTION</span></div><span className="story-stamp">BUILT TO<br/>BE FELT</span>
            </article>
            <div className="story-progress"><span>01 / RESTRAINT</span><i/><span>02 / IMPACT</span></div>
          </div>
        </section>

        <section className="bundle-section section-paper" id="bundles">
          <div className="section-head compact install-head"><p className="section-index">03 / TAKE THE SYSTEM <span>ONE SKILL · TWO WAYS IN</span></p><h2>Choose your<br/>install ritual.</h2><p className="section-lede">Bring the same four-file design language into your project by command line or as a ready-to-drop <code>.agents/</code> folder.</p></div>
          <div className="install-paths" id="viewer">
            <article className="install-path npm-path">
              <div className="install-path-top"><span>ROUTE 01 / NPM</span><span className="coming-soon">PUBLISHED · READY TO RUN</span></div>
              <h3>One command.<br/>Two design languages.</h3>
              <p>Run it from your project root to add a complete design skill to <code>./.agents/</code>.</p>
              <div className="npm-command-card"><span>RUN IN YOUR PROJECT</span><div><code>npx create-design-md</code><button onClick={handleCopyCommand}>{copiedCommand ? 'COPIED ✓' : 'COPY ↗'}</button></div></div>
              <div className="npm-note"><span>THEN</span><p>Choose a rulebook. Get its four files and a ready-to-copy prompt for your AI.</p></div>
              <div className="install-path-foot"><span>01</span><span>MINIMALISM / NEOBRUTALISM</span></div>
            </article>
            <article className={`install-path zip-path ${activeStyle === 'brutalism' ? 'zip-neo' : ''}`}>
              <div className="install-path-top"><span>ROUTE 02 / ZIP</span><span className="zip-ready">AVAILABLE NOW ↘</span></div>
              <div className="zip-art" aria-hidden="true"><span className="zip-paper zip-paper-back">ANIMATION.MD</span><span className="zip-paper zip-paper-mid">COMPONENTS.MD</span><span className="zip-paper zip-paper-front"><b>.AGENTS/</b><i>{activeStyle === 'minimalism' ? 'MINIMALISM' : 'NEOBRUTALISM'}</i><small>DESIGN · STRUCTURE · MOTION</small></span><span className="zip-seal">{activeStyle === 'minimalism' ? '01' : '02'}</span></div>
              <div className="zip-copy"><h3>{activeStyle === 'minimalism' ? 'Minimalism' : 'Neobrutalism'}<br/><span>as a folder.</span></h3><p>Download the complete skill bundle and place <code>.agents/</code> at your project root.</p><a className="bundle-download" href={activeStyle === 'minimalism' ? '/downloads/minimalism-skill-bundle.zip' : '/downloads/neobrutalism-skill-bundle.zip'} download>DOWNLOAD {activeStyle === 'minimalism' ? 'MINIMALISM' : 'NEOBRUTALISM'} ↘</a></div>
              <div className="install-path-foot"><div className="install-switch" role="group" aria-label="Choose ZIP skill bundle">{['minimalism', 'brutalism'].map((style) => <button key={style} aria-pressed={activeStyle === style} onClick={() => setActiveStyle(style)}>{style === 'minimalism' ? '01 MINIMAL' : '02 NEO'}</button>)}</div><span>FOUR FILES · READY TO DROP</span></div>
            </article>
          </div>
          <div className="prompt-kit"><div><p className="bundle-number">PASTE THIS INTO YOUR CODING AGENT</p><h3>Start with the files.</h3><p>Add the downloaded <code>.agents/</code> folder at your project root, then use this prompt.</p></div><div className="prompt-box"><div className="prompt-tabs" role="group" aria-label="Choose a design skill">{['minimalism', 'brutalism'].map((style) => <button key={style} aria-pressed={activeStyle === style} onClick={() => { setActiveStyle(style); setCopied(false) }}>{style === 'minimalism' ? 'MINIMALISM' : 'NEOBRUTALISM'}</button>)}</div><p>{prompts[activeStyle]}</p><button className="copy-prompt" onClick={handleCopy}>{copied ? 'COPIED ✓' : 'COPY PROMPT ↗'}</button><span className="sr-only" aria-live="polite">{copied ? 'Prompt copied to clipboard' : ''}</span></div></div>
          <p className="agent-note"><span>GOOD HABIT /</span> Always tell the agent to read the files inside <code>.agents/</code> before it starts. The folder keeps the rules close to the code, ready for the next screen too.</p>
        </section>
      </main>
      <footer className="footer"><div className="footer-inner"><div className="footer-top"><div><a className="wordmark" href="#main">DESIGN.MD</a><p>Design languages for AI-generated interfaces.</p><p className="footer-credit">Created by Akshat Malik <a href="https://github.com/akshatmalik-bruh" target="_blank" rel="noreferrer" aria-label="Akshat Malik on GitHub"><img src={githubLogo} alt="" /></a></p></div><nav aria-label="Footer links"><a href="https://github.com/akshatmalik-bruh/design.md" target="_blank" rel="noreferrer">GitHub ↗</a><a href="https://www.npmjs.com/package/create-design-md" target="_blank" rel="noreferrer">NPM ↗</a><a href="#designs">Minimalism ↗</a><a href="#designs">Neobrutalism ↗</a></nav></div><p className="footer-line">DESIGN IS A LANGUAGE.</p><div className="footer-bottom"><span>DESIGN.MD — 2026</span><span>MADE WITH INTENT</span><a href="#main">BACK TO TOP ↑</a></div></div></footer>
    </div>
  )
}

export default App



