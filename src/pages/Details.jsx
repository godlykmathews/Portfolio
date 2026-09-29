import { Link } from 'react-router';

const resumeUrl = '/assets/Godly_K_Mathews_Resume.pdf';

export function Experience() {
  return (
    <>
      <h1>Experience</h1>
      <article id="icfoss">
        <h2 className="entry-title">Student Intern · ICFOSS</h2>
        <p className="meta">
          International Centre for Free and Open Source Software<br />
          <time dateTime="2026-06-08">8 June 2026</time> – <time dateTime="2026-07-16">16 July 2026</time>
        </p>
        <ul>
          <li>Worked on Malayalam document question answering using retrieval-augmented generation (RAG), multilingual embeddings, and semantic search.</li>
          <li>Built and tested document-processing steps including OCR, text extraction, normalization, chunking, and retrieval.</li>
          <li>Deployed OpenWebUI for employee access to locally hosted large language models.</li>
          <li>Evaluated embedding models, retrieval approaches, and local model deployments.</li>
        </ul>
      </article>
      <article>
        <h2 className="entry-title">Developer Intern · Thinkvyne Digital</h2>
        <p className="meta">
          Kochi, Kerala · <time dateTime="2025-06">June 2025</time> – <time dateTime="2025-12">December 2025</time>
        </p>
        <p>Built responsive interfaces with React and Tailwind CSS and connected them to Laravel APIs.</p>
      </article>
      <article id="coxdo">
        <h2 className="entry-title">Freelance Web Developer · Coxdo Solutions</h2>
        <p className="meta">
          Kerala, India · <time dateTime="2024-09">September 2024</time> – present
        </p>
        <p>Delivered more than five web applications using React and Tailwind CSS. Worked with clients to gather requirements and implement their applications.</p>
      </article>
    </>
  );
}

export function Skills() {
  return (
    <>
      <h1>Skills &amp; tools</h1>
      <p>Tools I have used across projects, coursework, and development work.</p>
      <dl>
        <dt>Programming</dt>
        <dd>Python, JavaScript, TypeScript, and Dart. HTML, CSS, and YAML.</dd>
        <dt>Web &amp; mobile</dt>
        <dd>React, Flutter, Node.js, Express, FastAPI, and REST APIs.</dd>
        <dt>AI &amp; document processing</dt>
        <dd>Retrieval-augmented generation, embeddings, vector databases, semantic search, OCR, and locally hosted language models.</dd>
        <dt>Development tools</dt>
        <dd>Linux, Git, GitHub, Docker, and Jira.</dd>
        <dt>Hardware projects</dt>
        <dd>Raspberry Pi, ESP32, and Arduino.</dd>
      </dl>
      <p>See the <Link to="/projects">projects</Link> and <Link to="/experience">experience</Link> pages for the work behind this list.</p>
    </>
  );
}

export function Education() {
  return (
    <>
      <h1>Education &amp; learning</h1>
      <article>
        <h2 className="entry-title">B.Tech in Computer Science and Engineering</h2>
        <p>College of Engineering, Kallooppara<br />APJ Abdul Kalam Technological University</p>
        <p className="meta"><time dateTime="2023-09">September 2023</time> – present</p>
        <p>Coursework includes data structures, operating systems, database management, computer networks, algorithms, compiler design, object-oriented programming, artificial intelligence, and cloud computing.</p>
      </article>
      <article>
        <h2 className="entry-title">Higher Secondary Education</h2>
        <p>Technical Higher Secondary School, IHRD, Puthuppally<br />Physics, Chemistry, Mathematics, Computer Science, and Electronic Systems.</p>
        <p className="meta"><time dateTime="2021-06">June 2021</time> – <time dateTime="2023-05">May 2023</time></p>
      </article>
      <section aria-labelledby="learning-heading">
        <h2 id="learning-heading">Certificates &amp; workshops</h2>
        <ul>
          <li>Programming in Java — Elite Certificate, NPTEL / IIT Kharagpur.</li>
          <li>Introduction to Large Language Models and Introduction to Generative AI — Google.</li>
          <li>Responsive Web Design — freeCodeCamp.</li>
          <li>Information Gathering Fundamentals — VertualCyberLabs.</li>
          <li>Brototype 100K Coding Challenge and Web Designing Challenge.</li>
          <li>YIP Voice of Customer (2021) and Arduino workshop participation.</li>
        </ul>
      </section>
    </>
  );
}

export function Achievements() {
  return (
    <>
      <h1>Achievements</h1>
      <h2 className="entry-title">Hackathons</h2>
      <ul>
        <li><strong>Best Use of Gemma</strong> — Google Physical AI Hackathon, TinkerSpace Kochi.</li>
        <li><strong>Best Creative Project</strong> — Google Build with AI, Alappuzha edition at CEC.</li>
        <li><strong>Winner</strong> — Oasis Ghosted Hackathon, Tech4Good Community.</li>
        <li><strong>Software Category Winner</strong> — Build for Thrissur, GECT.</li>
      </ul>
      <p>I also earned an A grade for a working model at the state-level science fair.</p>
      <p>See <Link to="/open-source">FOSS contributions</Link> for Hacktoberfest work and <Link to="/education">education</Link> for certificates and coursework.</p>
    </>
  );
}

export function Contact() {
  return (
    <>
      <h1>Contact</h1>
      <p>For project enquiries, opportunities, or FOSS collaboration, email <a href="mailto:work.godlykm@gmail.com">work.godlykm@gmail.com</a>.</p>
      <p>Kottayam, Kerala, India.</p>
      <p><a href="https://github.com/godlykmathews">GitHub</a> · <a href="https://linkedin.com/in/godly-k-mathews">LinkedIn</a> · <Link to="/resume">Résumé</Link></p>
    </>
  );
}

export function Resume() {
  return (
    <>
      <h1>Résumé</h1>
      <p>Godly K Mathews · Developer</p>
      <p><a href={resumeUrl} download>Download résumé (PDF)</a> · <a href={resumeUrl}>Open PDF</a></p>
      <p className="meta">Open the PDF in your viewer to print it.</p>
      <object className="resume-document" data={resumeUrl} type="application/pdf" title="Godly K Mathews's résumé" aria-label="Godly K Mathews's résumé">
        <p><a href={resumeUrl}>Open the résumé as a PDF.</a></p>
      </object>
    </>
  );
}
