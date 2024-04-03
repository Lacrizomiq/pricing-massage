// type PricingProps = {
//   name: string;
//   price: number | string;
//   duration: string;
//   description: string;
//   text?: string;
// };

// const PricingCard: React.FC<{ service: PricingProps }> = ({ service }) => {
//   return (
//     <div className="flex flex-col min-w-[100px] min-h-[300px] max-w-sm rounded overflow-hidden shadow-lg bg-white p-6 m-4">
//       <div>
//         <div className="font-bold text-xl mb-2">{service.name}</div>
//         <p className="text-gray-700 text-base flex-grow">
//           {service.description}
//         </p>
//       </div>
//       <div className="mt-auto pt-4 pb-2">
//         <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
//           {service.duration}
//         </span>
//         <span className="inline-block bg-blue-200 rounded-full px-3 py-1 text-sm font-semibold text-blue-700">
//           {service.price}
//         </span>
//         <span className="inline-block bg-blue-200 rounded-full px-3 py-1 text-sm font-semibold text-blue-700 ml-8">
//           En savoir plus
//         </span>
//       </div>
//     </div>
//   );
// };

import MassageBienEtre from "./pricing/MassageBienEtre";
import MassageSportif from "./pricing/MassageSportif";
import MobiliteMassage from "./pricing/MobiliteMassage";
import Renforcement from "./pricing/Renforcement";

const PricingCard = () => {
  return (
    <div className="flex flex-wrap justify-center items-center">
      <MassageBienEtre />
      <MassageSportif />
      <MobiliteMassage />
      <Renforcement />
    </div>
  );
};

export default PricingCard;
