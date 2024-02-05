'use client';

import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href={"/"}>
        <Image
        className="hidden cursor-pointer mx-4 sm:block"
        alt="logo"
        height={20}
        width={98}
        src={'/images/Youtube.svg'}
        property="true"
        />
    </Link>
  )
}

export default Logo