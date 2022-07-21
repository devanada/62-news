import React from "react";
import Link from "next/link";

export default function Header() {
  return (
    <div className="h-16 flex justify-between items-center px-8 py-4 mb-8 border-b border-white bg-neutral-800">
      <Link href="/">
        <a className="text-white text-2xl font-bold">+62 News</a>
      </Link>
    </div>
  );
}
