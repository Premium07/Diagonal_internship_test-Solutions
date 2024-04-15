import Link from "next/link";
import React from "react";
const navlinks = [
  { link: "/", name: "Home" },
  { link: "/romanconverter", name: "Roman Converter" },
  { link: "/agecalc", name: "Age Calculator" },
  { link: "/agecountdown", name: "Age Countdown" },
];

function Navbar() {
  return (
    <div className="bg-slate-500 w-full flex justify-between items-center">
      <Link href="/">
        <h2 className="text-2xl">Diagonal Test Solutions</h2>
      </Link>
      <div className="">
        {navlinks.map((item, index) => {
          return (
            <Link key={index} href={item.link}>
              {item.name}
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default Navbar;
