import { AcademicCapIcon } from "@heroicons/react/24/outline";
import CardProyecto from "./CardProyecto";

export default function Proyectos() {
  return (
    <div
      id="proyectos"
      className="sm:w-[450px] md:w-[600px] lg:w-[900px] xl:w-[900px]"
    >
      <div className="flex items-center">
        <AcademicCapIcon className="w-6 h-6 mr-2" />
        <h2 className="lg:text-2xl mb-1 text-slate-950 text-xl font-semibold">
          PROJECTOS
        </h2>
      </div>
      <CardProyecto />
      
    </div>
  );
}
