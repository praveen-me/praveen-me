import { allBlogs } from "contentlayer/generated";

export default async function sitemap() {
  const blogs = allBlogs.map((post) => ({
    url: `https://praveen-me.github.io/blog/${post.slug}`,
    lastModified: post.date,
  }));

  const routes = ["", "/about", "/blog", "/guestbook", "/uses"].map(
    (route) => ({
      url: `https://praveen-me.github.io${route}`,
      lastModified: new Date().toISOString().split("T")[0],
    })
  );

  return [...routes, ...blogs];
}
