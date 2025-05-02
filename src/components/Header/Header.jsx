import Image from "next/image";
import Link from "next/link";
import React from "react";

function Header() {
  return (
    <header className="flex items-center justify-around fixed top-0 left-0 right-0 z-10">
      <div>
        <Image src="/logo.svg" alt="logo" width={200} height={200} />
      </div>
      <div>
        <nav className="flex gap-4 font-medium">
          <Link href="/">MEN</Link>
          <Link href="/">WOMEN</Link>
          <Link href="/">MOBILE COVERS</Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
