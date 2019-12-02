import Document, { Html, Main, NextScript } from "next/document";
import Head from "../components/head";

class CustomDocument extends Document {
  render() {
    return (
      <Html>
        <Head />
        <body
          className={"skin-blue sidebar-mini"}
          // style={{ height: "auto", minHeight: "100%" }}
        >
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default CustomDocument;
