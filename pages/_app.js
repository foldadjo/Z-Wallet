import "../styles/globals.css";
import "../styles/index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect } from "react";
// import "../scss/customBoostrap.min.css";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap");
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp;
