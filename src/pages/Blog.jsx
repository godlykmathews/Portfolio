import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router';
import { posts } from '../posts.js';

const publishedPosts = posts;
const formatDate = (date) => new Intl.DateTimeFormat('en-GB', {
  day: 'numeric', month: 'short', year: 'numeric', timeZone: 'UTC',
}).format(new Date(`${date}T12:00:00Z`));

function PostList({ items }) {
  return (
    <ul className="post-list">
      {items.map((post) => (
        <li key={post.slug}>
          <time className="post-date" dateTime={post.date}>{formatDate(post.date)}</time>
          <div>
            <h3 className="post-title"><Link to={`/blog/${post.slug}`}>{post.title}</Link></h3>
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
    <section aria-labelledby="writing-heading">
      <h2 id="writing-heading">From the blog</h2>
      <PostList items={publishedPosts.slice(0, 1)} />
      <p><Link to="/blog">All posts</Link> · <a href="/blog/feed.xml">RSS feed</a></p>
    </section>
  );
}

export function Blog() {
  const years = [...new Set(publishedPosts.map((post) => post.date.slice(0, 4)))];
  return (
    <>
      <h1>Blog</h1>
      <p>Notes and project updates.</p>
      <p><a href="/blog/feed.xml">Subscribe via RSS</a>.</p>
      {years.length ? years.map((year) => (
        <section key={year} aria-labelledby={`year-${year}`}>
          <h2 id={`year-${year}`}>{year}</h2>
          <PostList items={publishedPosts.filter((post) => post.date.startsWith(year))} />
        </section>
      )) : <p>No posts yet.</p>}
    </>
  );
}

export function BlogPost() {
  const { slug } = useParams();
  const post = publishedPosts.find((item) => item.slug === slug);
  if (!post) return <><h1>Post not found</h1><p><Link to="/blog">Back to the blog</Link>.</p></>;
  return (
    <article className="post-body">
      <header className="post-header">
        <h1>{post.title}</h1>
        <time className="post-date" dateTime={post.date}>{formatDate(post.date)}</time>
        {post.tags.length > 0 && <p className="post-tags">Tags: {post.tags.join(', ')}</p>}
      </header>
      <PostContent key={post.slug} load={post.load} />
      <p><Link to="/blog">All posts</Link></p>
    </article>
  );
}

function PostContent({ load }) {
  const [content, setContent] = useState({ html: null, error: false });
  useEffect(() => {
    let active = true;
    load().then(
      (html) => { if (active) setContent({ html, error: false }); },
      () => { if (active) setContent({ html: null, error: true }); },
    );
    return () => { active = false; };
  }, [load]);
  if (content.error) return <p role="alert">This post couldn't load. <a href={window.location.href}>Reload the page</a> to try again.</p>;
  if (content.html === null) return <p role="status">Loading post…</p>;
  // HTML comes from our build-time Markdown parser and sanitizer.
  return <div className="markdown-content" dangerouslySetInnerHTML={{ __html: content.html }} />;
}
