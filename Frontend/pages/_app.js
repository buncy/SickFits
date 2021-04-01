import "../styles/globals.css";
import Page from "../components/Page";
import Router from "next/router";
import Nprogress from "nprogress";
//TODO:Swap with our own
//import "nprogress/nprogress.css";
import "../components/styles/nprogress.css";

Router.events.on("routeChangeStart", () => {
  Nprogress.start();
});
Router.events.on("routeChangeComplete", () => Nprogress.done());
Router.events.on("routeChangeError", () => Nprogress.done());

function MyApp({ Component, pageProps }) {
  return (
    <Page>
      <Component {...pageProps} />
    </Page>
  );
}

export default MyApp;
