import { Link } from 'react-router';
import { LatestPosts } from './Blog.jsx';

export function Home() {
  return (
    <>
      <h1>Godly K Mathews</h1>
      <p>I'm <strong>Godly</strong>, a developer and Computer Science student from Kottayam, Kerala. I build web and mobile applications and developer tools.</p>
      <p>I'm pursuing a B.Tech at the College of Engineering, Kallooppara. Alongside my studies, I've worked on client applications, team projects, and contributions to free and open-source software (FOSS).</p>
      <p>A few things I've worked on:</p>
      <ul>
        <li><Link to="/projects#delivery">A delivery management system</Link> with a Flutter driver app and a React admin dashboard.</li>
        <li><Link to="/projects#run-all-apps">Run All Apps</Link>, a VS Code extension for running development commands from the status bar.</li>
        <li><Link to="/projects#khojbeen">A Ghost theme for Khojbeen Mandali</Link>, built during the OASIS hackathon.</li>
      </ul>
      <p>Read more <Link to="/about">about me</Link>, browse my <Link to="/projects">projects</Link>, or see my <Link to="/open-source">FOSS contributions</Link>.</p>
      <LatestPosts />
      <p>Find me on <a href="https://github.com/godlykmathews">GitHub</a> and <a href="https://linkedin.com/in/godly-k-mathews">LinkedIn</a>, read my <Link to="/resume">résumé</Link>, or <Link to="/contact">get in touch</Link>.</p>
    </>
  );
}

export function About() {
  return (
    <>
      <h1>About</h1>
      <p>I'm <strong>Godly K Mathews</strong>, a developer from Kottayam, Kerala. I'm studying Computer Science and Engineering at the College of Engineering, Kallooppara.</p>
      <p>My work includes web and mobile applications, a delivery management system, and tools such as a VS Code extension for development commands. I've built projects independently, with teams, and as part of internships and freelance work.</p>
      <p>I contribute to <strong>free and open-source software (FOSS)</strong>. My contributions include documentation, translations, learning resources, and project tooling. The <Link to="/open-source">FOSS page</Link> links to that work.</p>
      <p>See my <Link to="/projects">projects</Link> for what I've built, <Link to="/experience">experience</Link> for work history, and <Link to="/education">education</Link> for coursework. You can also read my <Link to="/resume">résumé</Link> or <Link to="/contact">contact me</Link>.</p>
    </>
  );
}

export function Projects() {
  return (
    <>
      <h1>Projects</h1>
      <p>Selected applications, developer tools, and team projects. Source links are included where the work is public.</p>
      <article id="delivery">
        <h2 className="entry-title">Digital Delivery Management System</h2>
        <p className="meta">Co-developer · Flutter, React, Python · 2026</p>
        <p>Co-developed a delivery system used in live operations, reducing paper-based processes by 80%. Built a Flutter driver app with offline synchronization and digital proof of delivery, alongside a React admin dashboard handling more than 100 invoices per session, CSV uploads, and driver assignments.</p>
        <p><a href="https://github.com/godlykmathews/Dlive-Driver-App">Driver app</a> · <a href="https://github.com/godlykmathews/Driver-Admin-Portal">Admin dashboard</a> · <a href="https://github.com/godlykmathews/Driver-Backend">Backend</a></p>
      </article>
      <article id="run-all-apps">
        <h2 className="entry-title">Run All Apps</h2>
        <p className="meta">VS Code extension · TypeScript</p>
        <p>Adds status-bar buttons for development commands. Commands can be configured per workspace, imported from npm scripts, and run in terminals with a chosen working directory.</p>
        <p><a href="https://github.com/godlykmathews/Run-All-Apps">Source on GitHub</a></p>
      </article>
      <article id="khojbeen">
        <h2 className="entry-title">Khojbeen Mandali theme</h2>
        <p className="meta">Ghost, Handlebars · OASIS / Tech4Good hackathon</p>
        <p>A custom Ghost theme for the NGO Khojbeen Mandali. Includes templates for blog posts, resources, and the organisation's work, with contact and footer details configurable through Ghost.</p>
        <p><a href="https://github.com/godlykmathews/khojbeen-mandali-theme">Source on GitHub</a></p>
      </article>
      <article id="agriculture">
        <h2 className="entry-title">Plant Disease Detection &amp; Smart Spray Assistant</h2>
        <p className="meta">Team project · Python, React, Raspberry Pi, ESP32 · 2026</p>
        <p>Built the software backend and dashboard for a plant-monitoring system, working with teammates on the hardware. The dashboard shows disease events, treatment guidance generated with Gemma, and spray status, with controls to trigger treatment.</p>
        <p><a href="https://github.com/godlykmathews/plant-monitoring-system">Source on GitHub</a></p>
      </article>
      <article id="karyadhyaksha">
        <h2 className="entry-title">Karyadhyaksha</h2>
        <p className="meta">Internship prototype · FastAPI, React, Chroma, BGE-M3 · 2026</p>
        <p>A document question-answering prototype built during my internship. It supports Malayalam and English queries, voice interaction, and answers with document and page references. The pipeline combines OCR, text extraction, embeddings, and retrieval.</p>
        <p><a href="https://github.com/godlykmathews/karyadhyaksha-rag-assistant">Source on GitHub</a> · <Link to="/experience#icfoss">Internship details</Link></p>
      </article>
      <article id="prabhatha-vachanam">
        <h2 className="entry-title">Prabhatha Vachanam</h2>
        <p className="meta">Mobile app · Flutter, Dart</p>
        <p>An app for daily and random Bible verses, with locally saved favourites and shareable verse images.</p>
        <p><a href="https://github.com/godlykmathews/prabhatha-vachanam">Source on GitHub</a></p>
      </article>
      <p>More repositories are on <a href="https://github.com/godlykmathews?tab=repositories">GitHub</a>.</p>
    </>
  );
}

export function OpenSource() {
  return (
    <>
      <h1>Free &amp; open-source software</h1>
      <p>I contribute to FOSS through documentation, translations, learning resources, and project tooling.</p>
      <h2 className="entry-title">Contributions</h2>
      <p>Six pull requests merged during Hacktoberfest 2025:</p>
      <ul>
        <li><a href="https://github.com/IraSoro/peri/pull/435">Peri #435</a> — Malayalam app translation.</li>
        <li><a href="https://github.com/CodeChefVIT/clueminati-2025/pull/94">Clueminati #94</a> — a feature-request issue form.</li>
        <li><a href="https://github.com/InsForge/InsForge/pull/409">InsForge #409</a> — Hindi README.</li>
        <li><a href="https://github.com/EbookFoundation/free-programming-books/pull/12190">free-programming-books #12190</a> — a FastAPI course.</li>
        <li><a href="https://github.com/EbookFoundation/free-programming-books/pull/12186">free-programming-books #12186</a> — Malayalam Go learning resources.</li>
        <li><a href="https://github.com/EbookFoundation/free-programming-books/pull/12184">free-programming-books #12184</a> — a Malayalam FastAPI tutorial.</li>
      </ul>
      <p>My public projects are on <a href="https://github.com/godlykmathews">GitHub</a>. A selection is described on the <Link to="/projects">projects page</Link>.</p>
    </>
  );
}
