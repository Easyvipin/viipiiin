import Head from "next/head";
import Image from "next/image";
import Navigation from "../Components/Navigation";
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

      <main>
        <div className={styles.title}>Vipin Chandra.</div>
        <div className={styles.subTitle}>Software Engineer</div>
        {posts.map((frontMatter) => {
          return (
            <>
              <p>{frontMatter.title}</p>
              <p>{frontMatter.readingTime}</p>
            </>
          );
        })}
      </main>
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
