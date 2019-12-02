import App from "next/app";
import Head from "next/head";
// import Router from "next/router";
// import NProgress from "nprogress";

// import Header from "../components/header";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import Sidebar from "../components/sidebar";

// Router.events.on("routeChangeStart", () => NProgress.start());
// Router.events.on("routeChangeComplete", () => NProgress.done());
// Router.events.on("routeChangeError", () => NProgress.done());

class MyApp extends App {
  render() {
    const { Component, pageProps, router } = this.props;
    const { pathname } = router;

    if (pathname && pathname.startsWith("/login")) {
      return (
        <>
          <Head>
            <title>Nagios Dashboard</title>
          </Head>
          <div className="wrapper" style={{ height: "100vh" }}>
            <div className="content-wrapper">
              <div className="container">
                <Component {...pageProps} />
              </div>
            </div>
            <Footer />
          </div>
        </>
      );
    }

    return (
      <>
        <Head>
          <title>Nagios Dashboard</title>
        </Head>
        <div className="wrapper" style={{ height: "auto", minHeight: "100%" }}>
          <Navbar />
          <Sidebar />
          {/* <Header /> */}
          <div className="content-wrapper">
            <Component {...pageProps} />
          </div>
          <Footer />
        </div>
      </>
    );
  }
}

export default MyApp;
