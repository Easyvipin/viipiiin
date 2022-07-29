import dayjs from "dayjs";
import React, { useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import Meta from "../../Components/Meta";
import styles from "../../styles/blog.module.css";
import rehypeSlug from "rehype-slug";
import { MDXRemote } from "next-mdx-remote";
import rehypeHighlight from "rehype-highlight";
import rehypeCodeTitles from "rehype-code-titles";
import { serialize } from "next-mdx-remote/serialize";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import { getSlugs, getArticleFromSlug, getAllArticles } from "../../utils/mdx";
import hljs from "highlight.js";
import javascript from "highlight.js/lib/languages/javascript";
import "highlight.js/styles/atom-one-dark-reasonable.css";
import Card from "../../Components/Card";
import Pich from "../../Components/Pich";

hljs.registerLanguage("javascript", javascript);

export default function Blog({ post: { source, frontmatter }, otherPosts }) {
  useEffect(() => {
    updateCodeSyntaxHighlighting();
  });

  const updateCodeSyntaxHighlighting = () => {
    document.querySelectorAll("pre code").forEach((block) => {
      hljs.highlightBlock(block);
    });
  };
  console.log(otherPosts);
  return (
    <React.Fragment>
      <Meta
        title={frontmatter.title}
        description={frontmatter.excerpt}
        coverImg={"./profileImg"}
      />

      <div className={styles.articleContainer}>
        <h1 className={styles.articleTitle}>{frontmatter.title}</h1>
        <span className={styles.publishDate}>
          {dayjs(frontmatter.publishedAt).format("MMMM D, YYYY")}
        </span>
        <span className={styles.time}>{frontmatter.readingTime}</span>
        <div className={styles.cover}>
          <Image
            src="https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg"
            width="50%"
            height="50%"
            layout="responsive"
            objectFit="cover"
          />
        </div>
        <div className={styles.content}>
          <MDXRemote {...source} />
        </div>
        <Pich title={frontmatter.title} />
        <div className={styles.blogFooter}>
          <div className={styles.headingFooter}>More Blogs to explore</div>
          <p className={styles.subHeader}>
            Tehnichal Blogs based on React , js , Next.js
          </p>
          <div className={styles.flexContainer}>
            {otherPosts.map((frontMatter) => {
              return (
                <Card
                  title={frontMatter.title}
                  excerpt={frontMatter.excerpt}
                  date={frontMatter.publishedAt}
                  tag={frontMatter.tag}
                  readTime={frontMatter.readingTime}
                  slug={frontMatter.slug}
                  key={frontMatter.title}
                />
              );
            })}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export async function getStaticProps({ params }) {
  const { slug } = params;
  const { content, frontmatter } = await getArticleFromSlug(slug);
  const AllBlogs = await getAllArticles();

  const mdxSource = await serialize(content, {
    mdxOptions: {
      rehypePlugins: [
        rehypeSlug,
        [
          rehypeAutolinkHeadings,
          {
            properties: { className: ["anchor"] },
          },
          { behaviour: "wrap" },
        ],
        rehypeHighlight,
        rehypeCodeTitles,
      ],
    },
  });

  const getRestBlog = AllBlogs.filter((eachBlog) => eachBlog.slug !== slug);

  return {
    props: {
      post: {
        source: mdxSource,
        frontmatter,
      },
      otherPosts: getRestBlog,
    },
  };
}

export async function getStaticPaths() {
  const slugArry = await getSlugs();
  const paths = slugArry.map((slug) => ({
    params: {
      slug,
    },
  }));

  return {
    paths,
    fallback: false,
  };
}
