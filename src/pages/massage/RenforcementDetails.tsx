import img from "../../assets/renforcement-musculaire.png";

const RenforcementDetails = () => {
  return (
    <div className="flex flex-col lg:flex-row w-full max-w-screen-lg mx-auto px-6 py-6 mt-6 rounded overflow-hidden shadow-lg bg-white">
      <div className="flex flex-1 justify-center items-center lg:justify-start lg:items-start">
        <img src={img} alt="Renforcement musculaire" />
      </div>
      <div className="mt-4 md:mt-0 md:ml-4 flex-grow">
        <p>
          Découvrez les nombreux avantages du renforcement musculaire. En plus
          d'augmenter la force et l'endurance, d'améliorer la posture et de
          prévenir les blessures, nos séances de renforcement musculaire mettent
          l'accent sur la pédagogie.
        </p>
        <br />
        <p>
          Nous vous guidons à travers chaque exercice, vous enseignant les
          techniques appropriées et vous fournissant des conseils personnalisés
          afin de vous rendre autonome pour la suite de votre évolution.
        </p>
        <br />
        <p>
          Intégrez ces exercices dans votre quotidien vous permettra d’améliorer
          votre santé, renforcer votre corps et cultiver un bien-être global.
        </p>
        <br />
        <p>
          En complément, profitez également de sessions de massage régénérantes
          incluses dans votre programme.
        </p>
      </div>
    </div>
  );
};

export default RenforcementDetails;
