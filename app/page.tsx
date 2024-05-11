import Image from "next/image";
import { baloo } from "./ui/fonts";
import Experiencia from "./ui/Experiencia";
import Proyectos from "./ui/Proyectos";

export default function Home() {
  return (
    <main className="flex flex-col items-center p-10 top-20">
      <section className="flex justify-center items-center flex-col sm:w-[450px] md:w-[600px] lg:w-[900px] xl:w-[900px]">
        <h1
          className={`${baloo.className} text-center text-5xl md:text-6xl xl:text-7xl text-transparent bg-gradient-to-r from-[#8f6efe] to-[#5ab0ff] bg-clip-text mb-1 font-semibold`}
        >
          Hola soy Alex
        </h1>
        <p className="mb-12 font-semibold text-slate-800 text-xl">
          Desarrollador Web
        </p>
        <p className="text-gray-800 text-sm md:text-base mb-12">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum
          nesciunt corporis totam quaerat at sequi consequuntur hic doloremque,
          delectus pariatur? Eveniet laborum necessitatibus illo totam maiores
          vel ut soluta laboriosam?
        </p>
      </section>
      <Proyectos />
      <Experiencia />
    </main>
  );
}
