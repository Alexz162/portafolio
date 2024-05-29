"use client";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { useState } from "react";
import RedesSociales from "./RedesSociales";

export default function NavLink() {
  const [nav, setNav] = useState(false);

  const navHandler = () => {
    setNav(!nav);
  };

  const links = [
    { name: "Inicio", href: "/" },
    { name: "Experiencia", href: "#experiencia" },
    { name: "Proyectos", href: "#proyectos" },
  ];

  return (
    <div className=" ">
      {nav ? (
        <div className="bg-white w-[100%] h-[100vh] fixed z-10">
          <XMarkIcon
            className="h-6 w-6 cursor-pointer m-4 "
            onClick={navHandler}
          />
          <div className=" flex flex-col items-start gap-5 pr-9 p-4">
            {links.map((link) => {
              return (
                <Link
                  className="py-2 px-2 mx-2  text-sm font-semibold border-b border-slate-200 w-full "
                  key={link.name}
                  href={link.href}
                  onClick={navHandler}
                >
                  <p className="text-slate-950 hover:text-slate-700 ">{link.name}</p>
                </Link>
              );
            })}
            <div className="w-[100%] flex justify-center ">
              <RedesSociales />
            </div>
            
          </div>
        </div>
      ) : (
        <>
          <Bars3Icon
            className="h-6 w-6 cursor-pointer m-4 sm:hidden"
            onClick={navHandler}
          />
        </>
      )}

      <div className="sm:flex flex-row justify-center items-center  py-10 hidden">
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
      </div>
    </div>
  );
}
