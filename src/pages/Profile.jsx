import { Link } from "react-router";
import { LatestPosts } from "./Blog.jsx";
import { Arrow, ContactSection, SectionHeading } from "../components/UI.jsx";
import { projects } from "../projects.js";

function ProjectLinks({ project }) {
  return (
    <div className="project-links">
      {project.links.map((link) => (
        <a className="text-link" href={link.url} key={link.url}>
          {link.label}
          <Arrow />
        </a>
      ))}
    </div>
  );
}

export function Home() {
  const featured = projects[0];
  return (
    <>
      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-topline">
          <p className="eyebrow">
            <span className="status-dot" />
            Developer &amp; Computer Science student
          </p>
          <span className="folio-label">Personal portfolio / 2026</span>
        </div>
        <div className="hero-grid">
          <h1 id="hero-title">
            Curiosity,
            <br />
            put to <em>work.</em>
          </h1>
          <div className="hero-intro">
            <div className="intro-name">
              <img
                src="/assets/godly-portrait.png"
                width="56"
                height="56"
                alt=""
              />
              <span>Hi, I’m Godly K Mathews.</span>
            </div>
            <p>
              I build web and mobile applications, document AI, and tools that
              make everyday work a little easier.
            </p>
            <div className="hero-actions">
              <a className="button button-dark" href="#selected-work">
                Explore my work
                <Arrow direction="down" />
              </a>
              <Link className="text-link" to="/resume">
                Résumé
                <Arrow />
              </Link>
            </div>
          </div>
        </div>
        <div className="hero-footnote">
          <span>Kottayam, Kerala, India</span>
          <span>
            Web &amp; mobile <i>/</i> Applied AI <i>/</i> Open source
          </span>
        </div>
      </section>
      <section
        className="work-section"
        id="selected-work"
        aria-labelledby="work-title"
      >
        <SectionHeading
          number="01"
          label="Selected work"
          title={
            <span id="work-title">
              Ideas made <em>real.</em>
            </span>
          }
          to="/projects"
          linkText="All six projects"
        />
        <article className="featured-project">
          <div className="featured-copy">
            <p className="eyebrow">Featured / Applied AI</p>
            <div>
              <h3>{featured.name}</h3>
              <p className="featured-tagline">{featured.tagline}</p>
              <p>{featured.summary}</p>
            </div>
            <div>
              <p className="project-tech">{featured.stack.join(" / ")}</p>
              <Link className="button button-dark" to="/projects#karyadhyaksha">
                Explore the project
                <Arrow />
              </Link>
            </div>
          </div>
          <Link
            className="featured-visual"
            to="/projects#karyadhyaksha"
            aria-label="Explore Karyadhyaksha, the Malayalam document assistant"
          >
            <div className="visual-label">
              <span>ICFOSS · Internship prototype</span>
              <span>2026</span>
            </div>
            <div className="project-window">
              <div className="window-bar" aria-hidden="true">
                <span />
                <span />
                <span />
                <small>Karyadhyaksha — voice interface</small>
              </div>
              <img
                src="/assets/karyadhyaksha-voice.png"
                width="1550"
                height="946"
                alt="Karyadhyaksha’s voice interface displaying a Malayalam transcript and response."
                loading="lazy"
              />
            </div>
            <span className="visual-caption">
              Malayalam + English{" "}
              <span>
                Text, voice &amp; source references <Arrow />
              </span>
            </span>
          </Link>
        </article>
        <div className="selected-projects">
          {projects.slice(1, 3).map((project) => (
            <Link
              to={`/projects#${project.id}`}
              className="selected-project"
              key={project.id}
            >
              <span className="project-number">{project.number}</span>
              <div>
                <p className="eyebrow">{project.category}</p>
                <h3>{project.name}</h3>
                <p>{project.summary}</p>
                <span className="project-tech">
                  {project.stack.join(" / ")}
                </span>
              </div>
              <Arrow />
            </Link>
          ))}
        </div>
      </section>
      <section className="about-strip" aria-labelledby="about-heading">
        <div className="about-strip-heading">
          <p className="eyebrow">
            <span>02</span> The person behind the code
          </p>
          <h2 id="about-heading">
            Always learning.
            <br />
            <em>Usually building.</em>
          </h2>
          <Link className="text-link" to="/about">
            A little more about me
            <Arrow />
          </Link>
        </div>
        <div className="about-strip-copy">
          <p>
            I’m a developer from Kottayam, studying Computer Science at the
            College of Engineering, Kallooppara.
          </p>
          <p>
            My work spans client applications, internship prototypes, team
            projects, and open-source contributions. I enjoy connecting the
            pieces—from the interface to the systems underneath.
          </p>
          <div className="about-links">
            <Link to="/experience">
              Experience
              <Arrow />
            </Link>
            <Link to="/open-source">
              Open source
              <Arrow />
            </Link>
          </div>
        </div>
      </section>
      <LatestPosts />
      <ContactSection />
    </>
  );
}

export function About() {
  return (
    <>
      <div className="page-heading">
        <p className="eyebrow">About / Godly K Mathews</p>
        <h1>
          A developer.
          <br />A student.
          <br />
          <em>A work in progress.</em>
        </h1>
      </div>
      <div className="about-layout">
        <figure className="portrait">
          <img
            src="/assets/godly-portrait.png"
            width="460"
            height="460"
            alt="Godly K Mathews"
          />
          <figcaption>Kottayam, Kerala, India</figcaption>
        </figure>
        <div className="prose">
          <p className="lead">
            I build web and mobile applications and developer tools, while
            studying Computer Science and Engineering at the College of
            Engineering, Kallooppara.
          </p>
          <p>
            I’ve built projects independently, with teams, and through
            internships and freelance work. That includes document question
            answering at ICFOSS, a delivery management system, and a VS Code
            extension for development commands.
          </p>
          <p>
            Free and open-source software is part of how I work. My
            contributions include documentation, translations, learning
            resources, and project tooling.
          </p>
          <div className="inline-links">
            <Link to="/experience">
              My experience
              <Arrow />
            </Link>
            <Link to="/resume">
              Read my résumé
              <Arrow />
            </Link>
          </div>
        </div>
      </div>
      <section className="about-directory" aria-label="More about me">
        {[
          [
            "/skills",
            "01",
            "The toolkit",
            "Languages, frameworks, and tools I’ve worked with.",
          ],
          [
            "/education",
            "02",
            "Learning",
            "Education, coursework, and certificates.",
          ],
          [
            "/achievements",
            "03",
            "Along the way",
            "Hackathons, awards, and recognition.",
          ],
        ].map(([url, n, title, description]) => (
          <Link to={url} key={url}>
            <span className="eyebrow">{n}</span>
            <h2>
              {title}
              <Arrow />
            </h2>
            <p>{description}</p>
          </Link>
        ))}
      </section>
      <ContactSection />
    </>
  );
}

export function Projects() {
  return (
    <>
      <div className="page-heading">
        <p className="eyebrow">The work / 6 selected projects</p>
        <h1>
          Built to be <em>used.</em>
        </h1>
        <p className="lead">
          Applications, experiments, and small tools. Here’s what they do—and
          the part I played.
        </p>
      </div>
      <nav className="project-index" aria-label="Project index">
        {projects.map((project) => (
          <a href={`#${project.id}`} key={project.id}>
            <span>{project.number}</span>
            {project.name}
            <Arrow direction="down" />
          </a>
        ))}
      </nav>
      <div className="project-archive">
        {projects.map((project) => (
          <article className="project-detail" id={project.id} key={project.id}>
            <div className="project-detail-label">
              <span className="project-number">{project.number}</span>
              <span className="eyebrow">{project.category}</span>
              {project.year && (
                <span className="project-year">{project.year}</span>
              )}
            </div>
            <div className="project-detail-main">
              <p className="meta">{project.role}</p>
              <h2>{project.name}</h2>
              <p className="project-tagline">{project.tagline}</p>
              <p className="lead">{project.summary}</p>
              <p className="project-tech">{project.stack.join(" / ")}</p>
              {project.id === "karyadhyaksha" && (
                <figure className="case-image">
                  <img
                    src="/assets/karyadhyaksha-voice.png"
                    width="1550"
                    height="946"
                    alt="Karyadhyaksha voice assistant showing a Malayalam response."
                    loading="lazy"
                  />
                  <figcaption>
                    The React voice interface, from the project repository.
                  </figcaption>
                </figure>
              )}
              <div className="case-notes">
                {project.context && (
                  <div>
                    <h3>The problem</h3>
                    <p>{project.context}</p>
                  </div>
                )}
                <div>
                  <h3>My contribution</h3>
                  <p>{project.contribution}</p>
                </div>
                {project.status && (
                  <div>
                    <h3>Where it stands</h3>
                    <p>{project.status}</p>
                  </div>
                )}
              </div>
              {project.id === "karyadhyaksha" && (
                <details className="project-evidence">
                  <summary>
                    See the document Q&amp;A interface{" "}
                    <span aria-hidden="true">+</span>
                  </summary>
                  <img
                    src="/assets/karyadhyaksha-chat.png"
                    width="1504"
                    height="1224"
                    alt="Malayalam question answering interface with an answer and source document and page reference."
                    loading="lazy"
                  />
                </details>
              )}
              <ProjectLinks project={project} />
              {project.id === "karyadhyaksha" && (
                <Link
                  className="text-link project-story-link"
                  to="/blog/icfoss-internship"
                >
                  Read the internship story
                  <Arrow />
                </Link>
              )}
            </div>
          </article>
        ))}
      </div>
      <p className="archive-end">
        More experiments live on{" "}
        <a href="https://github.com/godlykmathews?tab=repositories">
          GitHub <Arrow />
        </a>
        .
      </p>
      <ContactSection />
    </>
  );
}

const contributions = [
  [
    "Peri",
    "#435",
    "Malayalam app translation",
    "https://github.com/IraSoro/peri/pull/435",
  ],
  [
    "Clueminati",
    "#94",
    "Feature-request issue form",
    "https://github.com/CodeChefVIT/clueminati-2025/pull/94",
  ],
  [
    "InsForge",
    "#409",
    "Hindi README",
    "https://github.com/InsForge/InsForge/pull/409",
  ],
  [
    "free-programming-books",
    "#12190",
    "FastAPI course",
    "https://github.com/EbookFoundation/free-programming-books/pull/12190",
  ],
  [
    "free-programming-books",
    "#12186",
    "Malayalam Go learning resources",
    "https://github.com/EbookFoundation/free-programming-books/pull/12186",
  ],
  [
    "free-programming-books",
    "#12184",
    "Malayalam FastAPI tutorial",
    "https://github.com/EbookFoundation/free-programming-books/pull/12184",
  ],
];

export function OpenSource() {
  return (
    <>
      <div className="page-heading">
        <p className="eyebrow">Free &amp; open-source software</p>
        <h1>
          Small contributions.
          <br />
          <em>Shared progress.</em>
        </h1>
        <p className="lead">
          Documentation, translations, learning resources, and project tooling.
          Six pull requests merged during Hacktoberfest 2025.
        </p>
      </div>
      <div className="contribution-list">
        {contributions.map(([name, number, description, url]) => (
          <a href={url} key={url}>
            <span className="meta">{number}</span>
            <div>
              <h2>{name}</h2>
              <p>{description}</p>
            </div>
            <Arrow />
          </a>
        ))}
      </div>
      <ContactSection />
    </>
  );
}
