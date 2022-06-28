import Head from "next/head";
import Image from "next/image";
import About from "../Components/About";
import Card from "../Components/Card";
import Navigation from "../Components/Navigation";
import styles from "../styles/Home.module.css";
import { getArticleFromSlug, getSlugs, getAllArticles } from "../utils/mdx";

export default function Home({ posts }) {
  console.log(posts);
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className={styles.titleContainer}>
          <div className={styles.title}>Sup &#x1F33B;</div>
          <div className={styles.secTitle}>Vipin Chandra.</div>
          <div className={styles.subTitle}>Software Engineer</div>
        </div>
        <About />
        <div className={styles.flexContainer}>
          {posts.map((frontMatter) => {
            return (
              <Card
                title={frontMatter.title}
                excerpt={frontMatter.excerpt}
                date={frontMatter.publishedAt}
                tag={frontMatter.tag}
                readTime={frontMatter.readingTime}
              />
            );
          })}
        </div>
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
