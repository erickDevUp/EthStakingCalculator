import SeoTags from "@/components/utils/seoTags";
import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <SeoTags />
      </Head>

      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
