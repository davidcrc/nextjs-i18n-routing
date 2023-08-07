import Link from "next/link";
import React from "react";

const Nabvar = () => {
  return (
    <nav className="bg-gray-900 py-5 mb-2 text-white">
      <div className="container flex justify-between px-10 md:ppx-0 mx-auto">
        <ul className="flex justify-between px-8 w-full">
          <li>
            <Link href={"/"}>To Form</Link>
          </li>
          <li>
            <Link href={"/about"}>About</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nabvar;
