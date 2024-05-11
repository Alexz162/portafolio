import type { Metadata } from "next";
import "./globals.css";
import NavLink from "./ui/NavLink";
import { inter, roboto } from "./ui/fonts";



export const metadata: Metadata = {
  title: "alexcordova",
  description: "Portafolio personal",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} `}>
        <NavLink />
        {children}
      </body>
    </html>
  );
}
