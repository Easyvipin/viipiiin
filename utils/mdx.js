import path from "path";
import fs from "fs";
import matter from "gray-matter";
import readingTime from "reading-time";
import { sync } from "glob";

const articlesPath = path.join(process.cwd(), "data/articles");

export async function getSlugs() {
  const paths = sync(`${articlesPath}/*.mdx`.replace(/\\/g, "/"));

  return paths.map((path) => {
    const pathContent = path.split("/");
    const fileName = pathContent[pathContent.length - 1];
    const [slug, _extention] = fileName.split(".");

    return slug;
  });
}

export async function getArticleFromSlug(slug) {
  const articleDir = path.join(articlesPath, `${slug}.mdx`);
  const source = fs.readFileSync(articleDir);
  const { content, data } = matter(source);
  return {
    content,
    frontmatter: {
      slug,
      excerpt: data.excerpt,
      title: data.title,
      publishedAt: data.publishedAt,
      readingTime: readingTime(source).text,
      ...data,
    },
  };
}

export async function getAllArticles() {
  const articles = fs.readdirSync(path.join(process.cwd(), "data/articles"));

  return articles.reduce((allArticles, articleSlug) => {
    const source = fs.readFileSync(
      path.join(process.cwd(), "data/articles", articleSlug),
      "utf-8"
    );
    const { data } = matter(source);
    return [
      {
        ...data,
        slug: articleSlug.replace(".mdx", ""),
        readingTime: readingTime(source).text,
      },
      ...allArticles,
    ];
  }, []);
}
