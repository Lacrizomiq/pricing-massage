import { TbMassage } from "react-icons/tb";
import { IoMdCheckmark } from "react-icons/io";

const MassageSportif = () => {
  return (
    <div className="flex flex-col min-w-[350px] min-h-[300px] max-w-sm rounded overflow-hidden shadow-lg bg-white p-6 m-4">
      <div>
        <div className="font-bold text-xl mb-2 flex justify-center items-center">
          <TbMassage /> <p className="ml-4">Massage sportif</p>
        </div>
        <p className="text-gray-700 text-base flex-grow">
          Massage sportif pour améliorer votre condition physique et votre
          récupération.
        </p>
        <p className="text-gray-700 text-base flex-grow mt-4">
          <ul>
            <li className="flex items-center">
              <IoMdCheckmark />
              <p className="px-3">Echange préalable au massage</p>
            </li>
            <li className="flex items-center">
              <IoMdCheckmark />
              <p className="px-3">Massage sportif</p>
            </li>
            <li className="flex items-center">
              <IoMdCheckmark />
              <p className="px-3">Utilisation d'huile relaxante</p>
            </li>
          </ul>
        </p>
      </div>
      <div className="flex mt-auto pt-4 pb-2">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          60 minutes
        </span>
        <span className="inline-block bg-blue-200 rounded-full px-3 py-1 text-sm font-semibold text-blue-700 mr-2 mb-2">
          60 €
        </span>
        <div>
          <span className="inline-block bg-blue-200 rounded-full px-3 py-1 text-sm font-semibold text-blue-700 ml-4">
            En savoir plus !
          </span>
        </div>
      </div>
    </div>
  );
};

export default MassageSportif;
