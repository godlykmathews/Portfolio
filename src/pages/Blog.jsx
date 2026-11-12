import { useEffect, useState } from "react";
import { Link, useParams } from "react-router";
import { posts } from "../posts.js";
import { Arrow } from "../components/UI.jsx";

const publishedPosts = posts;
const formatDate = (date) =>
  new Intl.DateTimeFormat("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(`${date}T12:00:00Z`));

function PostList({ items }) {
  return (
    <ul className="post-list">
      {items.map((post) => (
        <li key={post.slug}>
          <time className="post-date" dateTime={post.date}>
            {formatDate(post.date)}
          </time>
          <div>
            <h3 className="post-title">
              <Link to={`/blog/${post.slug}`}>{post.title}</Link>
            </h3>
            {post.summary && <p className="post-summary">{post.summary}</p>}
          </div>
        </li>
      ))}
    </ul>
  );
}

export function LatestPosts() {
  if (!publishedPosts.length) return null;
  return (
    <section className="home-section writing-section" aria-labelledby="writing-heading">
      <div className="section-heading">
        <h2 id="writing-heading">Writing</h2>
        <Link className="text-link quiet-link" to="/blog">All notes <Arrow /></Link>
      </div>
      <PostList items={publishedPosts.slice(0, 1)} />
    </section>
  );
}

export function Blog() {
  const years = [
    ...new Set(publishedPosts.map((post) => post.date.slice(0, 4))),
  ];
  return (
    <>
      <div className="page-heading">
        <p className="eyebrow">Notes</p>
        <h1>
          Writing.
        </h1>
        <p className="lead">
          Notes on building software and what I learn along the way.
        </p>
      </div>
      <a className="text-link rss-link" href="/blog/feed.xml">RSS feed <Arrow /></a>
      {years.length ? (
        years.map((year) => (
          <section className="writing-year" key={year} aria-labelledby={`year-${year}`}>
            <h2 id={`year-${year}`}>{year}</h2>
            <PostList
              items={publishedPosts.filter((post) =>
                post.date.startsWith(year),
              )}
            />
          </section>
        ))
      ) : (
        <p>No posts yet.</p>
      )}
    </>
  );
}

export function BlogPost() {
  const { slug } = useParams();
  const post = publishedPosts.find((item) => item.slug === slug);
  if (!post)
    return (
      <div className="page-heading not-found">
        <h1>Post not found.</h1>
        <p>
          <Link className="text-link" to="/blog">Back to writing <Arrow /></Link>
        </p>
      </div>
    );
  return (
    <article className="post-body">
      <header className="post-header">
        <h1>{post.title}</h1>
        <time className="post-date" dateTime={post.date}>
          {formatDate(post.date)}
        </time>
        {post.tags.length > 0 && (
          <p className="post-tags">Tags: {post.tags.join(", ")}</p>
        )}
      </header>
      <PostContent key={post.slug} load={post.load} />
      <Link className="text-link" to="/blog">All notes <Arrow /></Link>
    </article>
  );
}

function PostContent({ load }) {
  const [content, setContent] = useState({ html: null, error: false });
  useEffect(() => {
    let active = true;
    load().then(
      (html) => {
        if (active) setContent({ html, error: false });
      },
      () => {
        if (active) setContent({ html: null, error: true });
      },
    );
    return () => {
      active = false;
    };
  }, [load]);
  if (content.error)
    return (
      <p role="alert">
        This post couldn't load.{" "}
        <a href={window.location.href}>Reload the page</a> to try again.
      </p>
    );
  if (content.html === null) return <p role="status">Loading post…</p>;
  // HTML comes from our build-time Markdown parser and sanitizer.
  return (
    <div
      className="markdown-content"
      dangerouslySetInnerHTML={{ __html: content.html }}
    />
  );
}
