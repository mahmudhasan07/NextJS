import { Html, Head, Main, NextScript } from "next/document";
import NavBar from "./NavBar";

export default function Document() {
  // console.log(NavBar);
  return (
    <Html lang="en">
      <Head>
        {/* <title>Tale Of Time</title> */}
        <title>Home Page</title>
        <link rel="icon" href="https://i.ibb.co/f8Hms2Y/tale-of-time-high-resolution-logo-removebg-preview.png"></link>
      </Head>
      <body>

        {/* <NavBar/> */}
        <Main />
        {/* <NavBar/> */}
        <NextScript />
      </body>
    </Html>
  );
}
