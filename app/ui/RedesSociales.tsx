import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function RedesSociales() {
  const redes = [
    {
      nombre: "linkedin",
      url: "https://www.linkedin.com/in/alex-cordova-huaracha-6a80aa1b3/",
      icon: "linkedin",
    },
    {
      nombre: "whatsapp",
      url: "https://wa.link/3yvh30",
      icon: "whatsapp",
    },
    {
      nombre: "github",
      url: "https://github.com/Alexz162",
      icon: "github",
    },
  ];

  return (
    <div className="mb-16 lg:mb-[150px] flex flex-row">
      {redes.map((red) => (
        <Link
          key={red.nombre}
          href={red.url}
          target="_blank"
          className="mx-5"
        >
          <Image
            src={`${red.icon}.svg`}
            className="mt-2"
            alt=""
            width={30}
            height={30}
          />
        </Link>
      ))}
    </div>
  );
}
