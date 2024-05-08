import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";

export default function NavBar() {

    return (
        <section>
            <div>
                <Image src={'https://i.ibb.co/f8Hms2Y/tale-of-time-high-resolution-logo-removebg-preview.png'}></Image>
            </div>
            <div>
                <ul>
                    <Link href={'/'}><li>Home</li></Link>
                    <Link href={'/about'}><li>About</li></Link>
                    <Link href={'/contact'}><li>Contact</li></Link>
                    <Link href={''}><li>Press</li></Link>
                </ul>
            </div>
        </section>
    );
}