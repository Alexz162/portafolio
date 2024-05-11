import { BuildingOfficeIcon } from "@heroicons/react/24/outline";
import { oswald } from "./fonts";
import { trabajos } from "./trabajos";

export default function Experiencia() {
  return (
    <div
      id="experiencia"
      className="sm:w-[450px] md:w-[600px] lg:w-[900px] xl:w-[900px] mb-10"
    >
      <div className="flex items-center ">
        <BuildingOfficeIcon className="w-6 h-6 mr-2" />
        <h2 className="lg:text-2xl mb-1 text-slate-950 text-xl font-semibold">
          EXPERIENCIA
        </h2>
      </div>

      {trabajos.map((trabajo) => {
        return (
          <div key={trabajo.empresa}>
            <h3 className="text-lg text-slate-900 font-semibold">
              {trabajo.rol} -
              <span className="text-slate-950 font-normal">
                {" "}
                {trabajo.empresa}
              </span>
            </h3>
            <p className="text-gray-700 mb-2">
              {trabajo.flechaInicio} - {trabajo.flechaFin}
            </p>
            <p className="text-gray-800 text-sm md:text-base">
              {trabajo.descripcion}
            </p>
          </div>
        )
      })}
    </div>
  );
}
