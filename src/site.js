export const siteUrl = 'https://godly.is-a.dev';
export const pages = [
  { path: '/', name: 'Home', title: 'Godly K Mathews — Developer', component: 'Home', legacy: '/index.html', description: 'Godly K Mathews, a developer and Computer Science student from Kerala. Projects, experience, and FOSS contributions.' },
  { path: '/about', name: 'About', component: 'About', description: 'About Godly K Mathews, a developer and Computer Science student from Kottayam, Kerala.' },
  { path: '/experience', name: 'Experience', component: 'Experience', description: 'Internships and freelance web development work by Godly K Mathews.' },
  { path: '/projects', name: 'Projects', component: 'Projects', description: 'Selected applications and developer tools built by Godly K Mathews.' },
  { path: '/skills', name: 'Skills', component: 'Skills', description: 'Languages, frameworks, and tools used by Godly K Mathews.' },
  { path: '/open-source', name: 'FOSS', component: 'OpenSource', description: 'Free and open-source software contributions by Godly K Mathews.' },
  { path: '/achievements', name: 'Achievements', component: 'Achievements', description: 'Hackathon and project awards received by Godly K Mathews.' },
  { path: '/education', name: 'Education', component: 'Education', description: 'Education and coursework of Godly K Mathews.' },
  { path: '/blog', name: 'Blog', component: 'Blog', legacy: '/blog/index.html', description: 'Notes and project updates by Godly K Mathews.' },
  { path: '/contact', name: 'Contact', component: 'Contact', description: 'Contact Godly K Mathews by email, GitHub, or LinkedIn.' },
  { path: '/resume', name: 'Résumé', component: 'Resume', legacy: '/resume/index.html', description: 'Read or download the résumé of Godly K Mathews.' },
].map((page) => ({ ...page, title: page.title || `${page.name} — Godly K Mathews`, legacy: page.legacy || `${page.path}.html` }));

export function getAllPages(posts) {
  return [...pages, ...posts.map((post) => ({
    path: `/blog/${post.slug}`,
    legacy: `/blog/${post.slug}.html`,
    title: `${post.title} — Godly K Mathews`,
    description: post.summary || post.title,
  }))];
}

export function entryPaths(page) {
  return [...new Set([page.path === '/' ? '/index.html' : `${page.path}/index.html`, page.legacy])];
}
