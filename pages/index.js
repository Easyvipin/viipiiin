import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { getArticleFromSlug, getSlugs, getAllArticles } from "../utils/mdx";

export default function Home({ posts }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <p className={styles.description}>
          Explore the different blogs
          <code className={styles.code}>pages/index.js</code>
        </p>
        {posts.map((frontMatter) => {
          return (
            <>
              <p>{frontMatter.title}</p>
              <p>{frontMatter.readingTime}</p>
            </>
          );
        })}
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Viipiiin
        </a>
      </footer>
    </div>
  );
}

export async function getStaticProps() {
  const articles = await getAllArticles();

  articles
    .map((article) => article.data)
    .sort((a, b) => {
      if (a.data.publishedAt > b.data.publishedAt) return 1;
      if (a.data.publishedAt < b.data.publishedAt) return -1;

      return 0;
    });

  return {
    props: {
      posts: articles.reverse(),
    },
  };
}
