import Navigation from "../Components/Navigation";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navigation />
      <Component {...pageProps} />
      <footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Viipiiin
        </a>
      </footer>
    </>
  );
}

export default MyApp;
