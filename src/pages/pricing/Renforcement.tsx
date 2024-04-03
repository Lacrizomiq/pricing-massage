import { GiWeightLiftingUp } from "react-icons/gi";

import { IoMdCheckmark } from "react-icons/io";

const Renforcement = () => {
  return (
    <div className="flex flex-col min-w-[350px] min-h-[300px] max-w-sm rounded overflow-hidden shadow-lg bg-white p-6 m-4">
      <div>
        <div className="font-bold text-xl mb-2 flex justify-center items-center">
          <GiWeightLiftingUp />{" "}
          <p className="ml-4">Renforcement musculaire et massage</p>
        </div>
        <p className="text-gray-700 text-base flex-grow">
          Coaching personnalisé à base de renforcement musculaire, d'exercices
          de mobilité et de massage
        </p>
        <p className="text-gray-700 text-base flex-grow mt-4 mb-2">
          <ul>
            <li className="flex items-center">
              <IoMdCheckmark />
              <p className="px-3">Séance de renforcement musculaire</p>
            </li>
            <li className="flex items-center">
              <IoMdCheckmark />
              <p className="px-3">Amélioration de la posture</p>
            </li>
            <li className="flex items-center">
              <IoMdCheckmark />
              <p className="px-3">
                Vous êtes guidés à travers chaque exercices
              </p>
            </li>
            <li className="flex items-center">
              <IoMdCheckmark />
              <p className="px-3">
                Pédagogie afin de vous rendre autonome pour la suite
              </p>
            </li>
            <li className="flex items-center">
              <IoMdCheckmark />
              <p className="px-3">Sessions de massage régénérantes incluses</p>
            </li>
          </ul>
        </p>
      </div>
      <div className="flex mt-auto pt-4 pb-2">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          1 mois
        </span>
        <span className="inline-block bg-blue-200 rounded-full px-3 py-1 text-sm font-semibold text-blue-700 mr-2 mb-2">
          400 €
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

export default Renforcement;
