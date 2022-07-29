import Head from "next/head";

const Meta = ({ title, description, icon, coverImg }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="icon" href="../Images/Icons/vipinIcon.png" />
      <meta property="og:title" content={title} />
      <meta property="og:image" content={coverImg} />
      <meta property="og:image:secure" content={coverImg} />
      <meta property="og:description" content={description} />
    </Head>
  );
};

export default Meta;
