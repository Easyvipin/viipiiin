import dayjs from "dayjs";
import React, { useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import styles from "../../styles/blog.module.css";
import rehypeSlug from "rehype-slug";
import { MDXRemote } from "next-mdx-remote";
import rehypeHighlight from "rehype-highlight";
import rehypeCodeTitles from "rehype-code-titles";
import { serialize } from "next-mdx-remote/serialize";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import { getSlugs, getArticleFromSlug } from "../../utils/mdx";
import hljs from "highlight.js";
import javascript from "highlight.js/lib/languages/javascript";
import "highlight.js/styles/atom-one-dark-reasonable.css";

hljs.registerLanguage("javascript", javascript);

export default function Blog({ post: { source, frontmatter } }) {
  useEffect(() => {
    updateCodeSyntaxHighlighting();
  });

  const updateCodeSyntaxHighlighting = () => {
    document.querySelectorAll("pre code").forEach((block) => {
      hljs.highlightBlock(block);
    });
  };

  return (
    <React.Fragment>
      <Head>
        <title>{frontmatter.title} | My blog</title>
      </Head>
      <div className={styles.articleContainer}>
        <h1 className={styles.articleTitle}>{frontmatter.title}</h1>
        <span className={styles.publishDate}>
          {dayjs(frontmatter.publishedAt).format("MMMM D, YYYY")}
        </span>
        <span className={styles.time}>{frontmatter.readingTime}</span>
        <div class={styles.cover}>
          <Image
            src="https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg"
            width="100%"
            height="100%"
            layout="responsive"
            objectFit="cover"
          />
        </div>
        <div className="content">
          <MDXRemote {...source} />
        </div>

        <div className={styles.blogFooter}>div.</div>
      </div>
    </React.Fragment>
  );
}

export async function getStaticProps({ params }) {
  const { slug } = params;
  const { content, frontmatter } = await getArticleFromSlug(slug);

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

  return {
    props: {
      post: {
        source: mdxSource,
        frontmatter,
      },
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
