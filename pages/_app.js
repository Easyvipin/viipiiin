import Image from "next/image";
import Navigation from "../Components/Navigation";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navigation />
      <Component {...pageProps} />
      <footer>
        <div>
          <a
            href="https://twitter.com/easyvipin"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="https://img.icons8.com/ios/250/FFFFFF/twitter.png"
              width={20}
              height={20}
            />
            <h4>easyvipin</h4>
          </a>
        </div>
      </footer>
    </>
  );
}

export default MyApp;
