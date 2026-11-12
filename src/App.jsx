import { useLayoutEffect } from "react";
import { Link, NavLink, Navigate, Outlet, Route, Routes, useLocation } from "react-router";
import { Arrow } from "./components/UI.jsx";
import { getAllPages, entryPaths, pages, siteUrl } from "./site.js";
import { posts } from "./posts.js";
import { Home, About, Projects } from "./pages/Profile.jsx";
import { Blog, BlogPost } from "./pages/Blog.jsx";

const components = { Home, About, Projects, Blog };
const allPages = getAllPages(posts);

function Navigation() {
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <header className="site-header">
        <nav className="site-nav" aria-label="Main navigation">
          <Link className="site-name" to="/" aria-label="Godly K Mathews — home">
            Godly K Mathews<span aria-hidden="true">.</span>
          </Link>
          <div className="nav-links">
            {pages.filter(({ path }) => path !== "/").map(({ path, name }) => (
              <NavLink key={path} to={path}>{name}</NavLink>
            ))}
          </div>
        </nav>
      </header>
    </>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <span>© {new Date().getFullYear()} Godly K Mathews</span>
      <a className="text-link" href="https://github.com/godlykmathews">GitHub <Arrow /></a>
    </footer>
  );
}

function Layout() {
  const { pathname, hash } = useLocation();
  useLayoutEffect(() => {
    const path = pathname.replace(/\/$/, "") || "/";
    const page = allPages.find((item) => item.path === path || item.legacy === path);
    document.title = page?.title || "Page not found — Godly K Mathews";
    const description = page?.description || "This page could not be found.";
    document.querySelector('meta[name="description"]').content = description;
    document.querySelector('meta[name="robots"]').content = page ? "index, follow" : "noindex";
    document.querySelector('meta[property="og:title"]').content = document.title;
    document.querySelector('meta[property="og:description"]').content = description;
    document.querySelector('link[rel="canonical"]').href = `${siteUrl}${page?.path || path}`;
    document.querySelector('meta[property="og:url"]').content = `${siteUrl}${page?.path || path}`;

    let anchor;
    try { anchor = document.getElementById(decodeURIComponent(hash.slice(1))); }
    catch { /* Ignore malformed fragment URLs. */ }
    document.getElementById("main").focus({ preventScroll: true });
    if (anchor) anchor.scrollIntoView();
    else window.scrollTo(0, 0);
  }, [pathname, hash]);

  return <><Navigation /><main id="main" tabIndex={-1}><Outlet /></main><Footer /></>;
}

function LegacyRedirect({ to }) {
  const { search, hash } = useLocation();
  return <Navigate to={`${to}${search}${hash}`} replace />;
}

export function NotFound() {
  return (
    <div className="page-heading not-found">
      <p className="eyebrow">404</p>
      <h1>Page not found.</h1>
      <p className="lead">This page is no longer here.</p>
      <Link className="text-link" to="/">Back to home <Arrow /></Link>
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
        {allPages.flatMap((page) => entryPaths(page).map((path) => (
          <Route key={path} path={path} element={<LegacyRedirect to={page.path} />} />
        )))}
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
