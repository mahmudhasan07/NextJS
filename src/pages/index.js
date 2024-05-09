import Image from "next/image";
import { Inter } from "next/font/google";
import { useEffect } from "react";
import Head from "next/head";
// import NavBar from "./NavBar";
// import image from "https://i.ibb.co/f8Hms2Y/tale-of-time-high-resolution-logo-removebg-preview.png"

const inter = Inter({ subsets: ["latin"] });

export default function Home() {

  useEffect(() => {

    const Data = async () => {
        const data = await fetch('https://watch-server-07.vercel.app/watches')
        const res = await data.json()
        console.log(res);
    }
    Data()

}, []);

  return <section>
    <div>
      <h1>Hello , Welcome to my page</h1>
      {/* <NavBar></NavBar> */}
      {/* <Image src={'https://i.ibb.co/f8Hms2Y/tale-of-time-high-resolution-logo-removebg-preview.png'}></Image> */}
{/* <image src="https://i.ibb.co/f8Hms2Y/tale-of-time-high-resolution-logo-removebg-preview.png"></image> */}
    </div>
    <div>
      <h1>This is Home page</h1>

    </div>
  </section>
}
