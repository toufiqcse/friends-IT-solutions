import Meta from "@/components/Meta";
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>{/* <Meta /> */}</Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}