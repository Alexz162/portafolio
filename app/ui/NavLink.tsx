"use client";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { useState } from "react";

export default function NavLink() {
  const [nav, setNav] = useState(false);

  const navHandler = () => {
    setNav(!nav);
  };

  const links = [
    { name: "Inicio", href: "/" },
    { name: "Experiencia", href: "#experiencia" },
    { name: "Proyectos", href: "#proyectos" },
    { name: "Blog", href: "#blog" },
  ];

  return (
    <div>
      {nav ? <XMarkIcon className="h-6 w-6 cursor-pointer m-4" /> : <Bars3Icon className="h-6 w-6 cursor-pointer m-4 sm:hidden" />}

      <nav className="sm:flex flex-row justify-center items-center  py-10 hidden">
        {links.map((link) => {
          return (
            <Link
              className="py-2 px-4 mx-2 hover:bg-slate-200 rounded-md text-sm font-semibold"
              key={link.name}
              href={link.href}
            >
              <p className="text-slate-950">{link.name}</p>
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
