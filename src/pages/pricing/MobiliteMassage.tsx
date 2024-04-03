import { TbYoga } from "react-icons/tb";

import { IoMdCheckmark } from "react-icons/io";

const MobiliteMassage = () => {
  return (
    <div className="flex flex-col min-w-[300px] min-h-[300px] max-w-sm rounded overflow-hidden shadow-lg bg-white p-6 m-4">
      <div>
        <div className="font-bold text-xl mb-2 flex justify-center items-center">
          <TbYoga /> <p className="ml-4">Mobilité du corps et massage</p>
        </div>
        <p className="text-gray-700 text-base flex-grow">
          Travail autour de l'amélioration de votre mobilité suivi d'un massage
          bien-être.
        </p>
        <p className="text-gray-700 text-base flex-grow mt-4">
          <ul>
            <li className="flex items-center">
              <IoMdCheckmark />
              <p className="px-3">Echange préalable au massage</p>
            </li>
            <li className="flex items-center">
              <IoMdCheckmark />
              <p className="px-3">Repérage des tensions musculaires</p>
            </li>
            <li className="flex items-center">
              <IoMdCheckmark />
              <p className="px-3">Préparation du corps au massage</p>
            </li>
            <li className="flex items-center">
              <IoMdCheckmark />
              <p className="px-3">Sessions personnalisées</p>
            </li>
          </ul>
        </p>
      </div>
      <div className="mt-auto pt-4 pb-2">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          1h30
        </span>
        <span className="inline-block bg-blue-200 rounded-full px-3 py-1 text-sm font-semibold text-blue-700">
          80 €
        </span>
        <span className="inline-block bg-blue-200 rounded-full px-3 py-1 text-sm font-semibold text-blue-700 ml-8">
          En savoir plus !
        </span>
      </div>
    </div>
  );
};

export default MobiliteMassage;
