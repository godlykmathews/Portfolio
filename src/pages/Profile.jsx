import { Link } from "react-router";
import { LatestPosts } from "./Blog.jsx";
import { Arrow } from "../components/UI.jsx";
import { projects } from "../projects.js";

export function Home() {
  return (
    <>
      <section className="hero" aria-labelledby="hero-title">
        <p className="eyebrow">Developer</p>
        <h1 id="hero-title">Building useful<br /><span>software.</span></h1>
        <p className="lead">I’m Godly. I build web and mobile applications, AI tools.</p>
        <a className="text-link" href="#selected-work">Explore the work <Arrow direction="down" /></a>
      </section>
      <section className="home-section" id="selected-work" aria-labelledby="work-title">
        <div className="section-heading">
          <h2 id="work-title">Selected work</h2>
          <Link className="text-link quiet-link" to="/projects">All projects <Arrow /></Link>
        </div>
        <ol className="selected-projects">
          {projects.slice(0, 3).map((project) => (
            <li key={project.id}>
              <Link className="project-row" to={`/projects#${project.id}`}>
                <span className="project-number" aria-hidden="true">{project.number}</span>
                <div className="project-copy">
                  <h3>{project.name}</h3>
                  <p>{project.summary}</p>
                  <span className="project-tech">{project.stack.join(" · ")}</span>
                </div>
                <Arrow />
              </Link>
            </li>
          ))}
        </ol>
      </section>
      <LatestPosts />
      <section className="home-section about-note" aria-labelledby="about-title">
        <h2 id="about-title">A little about me</h2>
        <div>
          <p>I enjoy connecting thoughtful interfaces with the systems underneath.
            My work spans web, mobile, applied AI, and open source.</p>
          <Link className="text-link" to="/about">More about my work <Arrow /></Link>
        </div>
      </section>
    </>
  );
}

export function Projects() {
  return (
    <>
      <div className="page-heading">
        <p className="eyebrow">Work</p>
        <h1>Selected projects.</h1>
        <p className="lead">Applications, experiments, and small tools built to be useful.</p>
      </div>
      <div className="project-archive">
        {projects.map((project) => (
          <article className="project-detail" id={project.id} key={project.id}>
            <span className="project-number" aria-hidden="true">{project.number}</span>
            <div>
              <p className="eyebrow">{project.category}</p>
              <h2>{project.name}</h2>
              <p className="project-description">{project.summary}</p>
              <p className="project-tech">{project.stack.join(" · ")}</p>
              <details className="project-notes">
                <summary>My contribution <span aria-hidden="true">+</span></summary>
                <p>{project.contribution}</p>
                {project.status && <p className="project-status">{project.status}</p>}
              </details>
              <div className="project-links">
                {project.links.map((link) => (
                  <a className="text-link" href={link.url} key={link.url}>{link.label}<Arrow /></a>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </>
  );
}

export function About() {
  return (
    <>
      <div className="page-heading">
        <p className="eyebrow">About</p>
        <h1>A little context.</h1>
        <p className="lead">I’m Godly, a developer working across web, mobile, and applied AI.</p>
      </div>
      <div className="about-copy">
        <p>I like making software that solves a clear problem, from a document assistant
          to a delivery app or a small tool inside the editor.</p>
        <p>I work across interfaces, APIs, and data pipelines. Free and open-source
          software is part of how I build and learn.</p>
      </div>
      <section className="about-section" aria-labelledby="toolkit-title">
        <h2 id="toolkit-title">Working toolkit</h2>
        <dl className="toolkit">
          <div><dt>Web &amp; mobile</dt><dd>React, TypeScript, Flutter</dd></div>
          <div><dt>Backend &amp; AI</dt><dd>Python, FastAPI, Node.js, document retrieval</dd></div>
          <div><dt>Everyday tools</dt><dd>Git, Linux, Docker</dd></div>
        </dl>
      </section>
      <section className="about-section" aria-labelledby="open-source-title">
        <h2 id="open-source-title">Open source</h2>
        <p>Contributions to documentation, translations, learning resources, and project tooling.</p>
        <ul className="contribution-list">
          {[
            ["Peri", "App translation", "https://github.com/IraSoro/peri/pull/435"],
            ["Clueminati", "Project tooling", "https://github.com/CodeChefVIT/clueminati-2025/pull/94"],
            ["free-programming-books", "Learning resources", "https://github.com/EbookFoundation/free-programming-books/pull/12190"],
          ].map(([name, description, url]) => (
            <li key={url}><a href={url}><span>{name}<small>{description}</small></span><Arrow /></a></li>
          ))}
        </ul>
      </section>
    </>
  );
}
