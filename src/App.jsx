import { useLayoutEffect } from 'react';
import { Link, NavLink, Navigate, Outlet, Route, Routes, useLocation } from 'react-router';
import { getAllPages, entryPaths, pages, siteUrl } from './site.js';
import { posts } from './posts.js';
import { Home, About, Projects, OpenSource } from './pages/Profile.jsx';
import { Experience, Skills, Education, Achievements, Contact, Resume } from './pages/Details.jsx';
import { Blog, BlogPost } from './pages/Blog.jsx';

const components = { Home, About, Projects, OpenSource, Experience, Skills, Education, Achievements, Contact, Resume, Blog };
const allPages = getAllPages(posts);

function Navigation() {
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <nav className="site-nav" aria-label="Main navigation">
        <Link className="site-name" to="/">godly</Link>
        <ul>
          {pages.map(({ path, name }) => (
            <li key={path}><NavLink to={path} end={path === '/'}>{name}</NavLink></li>
          ))}
        </ul>
      </nav>
    </>
  );
}

function Footer() {
  return (
    <footer>
      <p>Godly K Mathews · <Link to="/">Home</Link> · <Link to="/blog">Blog</Link> · <a href="https://github.com/godlykmathews">GitHub</a> · <a href="mailto:work.godlykm@gmail.com">Email</a></p>
    </footer>
  );
}

function Layout() {
  const { pathname, hash } = useLocation();

  useLayoutEffect(() => {
    const path = pathname.replace(/\/$/, '') || '/';
    const page = allPages.find((item) => item.path === path || item.legacy === path);
    document.title = page?.title || 'Page not found — Godly K Mathews';
    const description = page?.description || 'This page could not be found.';
    document.querySelector('meta[name="description"]').content = description;
    document.querySelector('meta[property="og:title"]').content = document.title;
    document.querySelector('meta[property="og:description"]').content = description;
    document.querySelector('link[rel="canonical"]').href = `${siteUrl}${page?.path || path}`;

    let anchor;
    try { anchor = document.getElementById(decodeURIComponent(hash.slice(1))); } catch { /* Ignore malformed fragment URLs. */ }
    document.getElementById('main').focus({ preventScroll: true });
    if (anchor) anchor.scrollIntoView();
    else window.scrollTo(0, 0);
  }, [pathname, hash]);

  return (
    <>
      <Navigation />
      <main id="main" tabIndex={-1}>
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
  return <><h1>Page not found</h1><p>The page may have moved. <Link to="/">Go home</Link> or browse the <Link to="/projects">projects</Link>.</p></>;
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
        {allPages.flatMap((page) => entryPaths(page).map((path) => <Route key={path} path={path} element={<LegacyRedirect to={page.path} />} />))}
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
