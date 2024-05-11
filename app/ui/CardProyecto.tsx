import Image from "next/image";
import Link from "next/link";
import { projects } from "./projects";

export default function CardProyecto() {
  return (
    <div>
      {projects.map((project) => {
        return (
          <article
            key={project.title}
            className="shadow-md p-5 bg-slate-100 flex flex-col lg:flex-row justify-center items-center my-9"
          >
            <Image
              src={project.img}
              className="md:mr-4 "
              alt="imagen de proyecto"
              width={350}
              height={150}
            />
            <div className="my-2">
              <div className="flex items-center justify-between">
                <Link
                  href={project.link}
                  target="_blank"
                  className="text-xl font-semibold"
                >
                  {project.title}
                </Link>
                <div className="flex flex-row">
                  <Link href={project.github} target="_blank">
                    <Image
                      src="/github.svg"
                      className=" rounded-full  mx-1"
                      alt=""
                      width={35}
                      height={35}
                    />
                  </Link>
                </div>
              </div>
              <div className="text-gray-900 text-sm md:text-base">
                {project.description}
              </div>
              <footer className="flex flex-row">
                {project.techs.map((tech) => {
                  return (
                    <Image
                    key={tech}
                      src={`${tech}.svg`}
                      className="border rounded-full p-1 mt-2 mx-1"
                      alt=""
                      width={40}
                      height={35}
                    />
                  );
                })}
              </footer>
            </div>
          </article>
        );
      })}
    </div>
  );
}
