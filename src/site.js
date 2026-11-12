export const siteUrl = "https://godlykmathews.tech";

export const pages = [
  {
    path: "/", name: "Home", title: "Godly K Mathews — Developer", component: "Home", legacy: "/index.html",
    description: "Selected software projects and technical notes by Godly K Mathews.",
  },
  {
    path: "/projects", name: "Work", component: "Projects",
    description: "Web applications, mobile apps, and developer tools by Godly K Mathews.",
  },
  {
    path: "/blog", name: "Writing", component: "Blog", legacy: "/blog/index.html",
    description: "Notes on building software, document AI, and open source.",
  },
  {
    path: "/about", name: "About", component: "About",
    description: "A short introduction to Godly K Mathews’s development work.",
  },
].map((page) => ({
  ...page,
  title: page.title || `${page.name} — Godly K Mathews`,
  legacy: page.legacy || `${page.path}.html`,
}));

export function getAllPages(posts) {
  return [
    ...pages,
    ...posts.map((post) => ({
      path: `/blog/${post.slug}`,
      legacy: `/blog/${post.slug}.html`,
      title: `${post.title} — Godly K Mathews`,
      description: post.summary || post.title,
    })),
  ];
}

export function entryPaths(page) {
  return [...new Set([
    page.path === "/" ? "/index.html" : `${page.path}/index.html`,
    page.legacy,
  ])];
}
