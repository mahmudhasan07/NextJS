import "@/styles/globals.css";
// import NavBar from "./NavBar";

export default function App({ Component, pageProps }) {
  return (
    <section>
      {/* <NavBar></NavBar> */}
      <Component {...pageProps} />
    </section>
  );
}
