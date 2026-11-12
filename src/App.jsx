import { useLayoutEffect, useRef, useState } from "react";
import { Arrow } from "./components/UI.jsx";
import {
  Link,
  NavLink,
  Navigate,
  Outlet,
  Route,
  Routes,
  useLocation,
} from "react-router";
import { getAllPages, entryPaths, pages, siteUrl } from "./site.js";
import { posts } from "./posts.js";
import { Home, About, Projects, OpenSource } from "./pages/Profile.jsx";
import {
  Experience,
  Skills,
  Education,
  Achievements,
  Contact,
  Resume,
} from "./pages/Details.jsx";
import { Blog, BlogPost } from "./pages/Blog.jsx";

const components = {
  Home,
  About,
  Projects,
  OpenSource,
  Experience,
  Skills,
  Education,
  Achievements,
  Contact,
  Resume,
  Blog,
};
const allPages = getAllPages(posts);

function Navigation() {
  const [open, setOpen] = useState(false);
  const toggle = useRef(null);
  const links = [
    ["/projects", "Work"],
    ["/about", "About"],
    ["/experience", "Experience"],
    ["/blog", "Writing"],
  ];
  function closeOnEscape(event) {
    if (event.key === "Escape" && open) {
      setOpen(false);
      toggle.current?.focus();
    }
  }
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <header className="site-header" onKeyDown={closeOnEscape}>
        <nav className="site-nav" aria-label="Main navigation">
          <Link
            className="site-name"
            to="/"
            aria-label="Godly K Mathews — home"
          >
            <span className="brand-mark" aria-hidden="true">
              g.
            </span>
            <span>
              Godly K<br />
              Mathews
            </span>
          </Link>
          <button
            ref={toggle}
            type="button"
            className="menu-toggle"
            aria-expanded={open}
            aria-controls="nav-links"
            onClick={() => setOpen(!open)}
          >
            {open ? "Close" : "Menu"}
            <span aria-hidden="true">{open ? "−" : "+"}</span>
          </button>
          <div id="nav-links" className={`nav-links ${open ? "is-open" : ""}`}>
            {links.map(([path, name]) => (
              <NavLink key={path} to={path} onClick={() => setOpen(false)}>
                {name}
              </NavLink>
            ))}
            <Link
              className="nav-contact"
              to="/contact"
              onClick={() => setOpen(false)}
            >
              Let’s talk
              <Arrow />
            </Link>
          </div>
        </nav>
      </header>
    </>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-top">
        <Link className="footer-name" to="/">
          Godly K Mathews<span>Web, mobile, and applied AI.</span>
        </Link>
        <nav aria-label="More pages">
          {pages
            .filter(({ path }) =>
              [
                "/skills",
                "/open-source",
                "/achievements",
                "/education",
                "/resume",
              ].includes(path),
            )
            .map(({ path, name }) => (
              <Link key={path} to={path}>
                {name}
              </Link>
            ))}
        </nav>
      </div>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} Godly K Mathews</span>
        <span>Built with care.</span>
        <a href="#main">Back to top ↑</a>
      </div>
    </footer>
  );
}

function Layout() {
  const { pathname, hash } = useLocation();

  useLayoutEffect(() => {
    const path = pathname.replace(/\/$/, "") || "/";
    const page = allPages.find(
      (item) => item.path === path || item.legacy === path,
    );
    document.title = page?.title || "Page not found — Godly K Mathews";
    const description = page?.description || "This page could not be found.";
    document.querySelector('meta[name="description"]').content = description;
    document.querySelector('meta[property="og:title"]').content =
      document.title;
    document.querySelector('meta[property="og:description"]').content =
      description;
    document.querySelector('link[rel="canonical"]').href =
      `${siteUrl}${page?.path || path}`;
    document.querySelector('meta[property="og:url"]').content =
      `${siteUrl}${page?.path || path}`;

    let anchor;
    try {
      anchor = document.getElementById(decodeURIComponent(hash.slice(1)));
    } catch {
      /* Ignore malformed fragment URLs. */
    }
    document.getElementById("main").focus({ preventScroll: true });
    if (anchor) anchor.scrollIntoView();
    else window.scrollTo(0, 0);
  }, [pathname, hash]);

  return (
    <>
      <Navigation key={pathname} />
      <main
        id="main"
        className={pathname === "/" ? "home-page" : "inner-page"}
        tabIndex={-1}
      >
        <Outlet />
        <Footer />
      </main>
    </>
  );
}

function LegacyRedirect({ to }) {
  const { search, hash } = useLocation();
  return <Navigate to={`${to}${search}${hash}`} replace />;
}

export function NotFound() {
  return (
    <div className="page-heading">
      <p className="eyebrow">404 / A wrong turn</p>
      <h1>
        Nothing here.
        <br />
        <em>Plenty elsewhere.</em>
      </h1>
      <p className="lead">
        This page may have moved. <Link to="/">Go home</Link> or browse the{" "}
        <Link to="/projects">projects</Link>.
      </p>
    </div>
  );
}

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        {pages.map((page) => {
          const Page = components[page.component];
          return <Route key={page.path} path={page.path} element={<Page />} />;
        })}
        <Route path="/blog/:slug" element={<BlogPost />} />
        {allPages.flatMap((page) =>
          entryPaths(page).map((path) => (
            <Route
              key={path}
              path={path}
              element={<LegacyRedirect to={page.path} />}
            />
          )),
        )}
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
