import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      {/* Include Google Fonts CDN */}
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Indie+Flower&display=swap"
      />
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
