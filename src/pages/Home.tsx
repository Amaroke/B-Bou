import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import "../petal.css";
import { Link } from "react-router-dom";

interface Petal {
  type: number;
  left: string;
  animationDelay: string;
}

const Home: React.FC = () => {
  const [petals, setPetals] = useState<Petal[]>([]);

  useEffect(() => {
    const generatedPetals: Petal[] = [];
    for (let i = 0; i < 30; i++) {
      generatedPetals.push({
        type: Math.floor(Math.random() * 3) + 1,
        left: `${Math.random() * 100}dvw`,
        animationDelay: `${Math.random() * 10}s`,
      });
    }
    setPetals(generatedPetals);
  }, []);

  return (
    <div className="relative w-screen h-screen overflow-x-hidden">
      <div className="absolute inset-0">
        {petals.map((petal, index) => (
          <div
            className={`petal${petal.type} absolute`}
            key={index}
            style={{
              left: petal.left,
              animationDelay: petal.animationDelay,
            }}
          ></div>
        ))}
      </div>

      <section className="bg-[url('./assets/images/background.png')] bg-cover bg-bottom min-h-screen w-full flex flex-col pt-16 overflow-x-hidden">
        <Navbar />
        <div className="flex flex-col items-center justify-center flex-grow text-center px-6 sm:px-8 md:px-12 lg:px-16 xl:px-24 w-full">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mt-4 mb-6 sm:mb-8">
            🌸 Bienvenue chez les B-Bou ! 🌸
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 max-w-2xl">
            Petite communauté chaleureuse et détendue, notre guilde est ouverte
            à tous, débutants comme vétérans.
          </p>
          <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mt-4">
            Ici, pas de stress, pas de contraintes : on est là pour jouer
            ensemble, échanger des conseils, et s’amuser avant tout ! ❤️
          </p>
          <div className="mt-8 text-lg sm:text-xl space-y-4 text-gray-300 max-w-4xl">
            <h2 className="text-xl sm:text-2xl text-white font-semibold">
              🔥 Ce que nous proposons et nos valeurs 🔥
            </h2>
            <div className="w-full">
              <ul className="list list-inside space-y-2 mb-8">
                <li>
                  <strong>Chill et bonne humeur :</strong> Pas de rage ni de
                  drama, juste du fun et du partage.
                </li>
                <li>
                  <strong>Esprit d’entraide :</strong> Nous aimons accueillir
                  les nouveaux et répondre aux questions.
                </li>
                <li>
                  <strong>Liberté et flexibilité :</strong> Pas de taxes ni
                  d'obligations pesantes, pas de CTA.
                </li>
                <li>
                  <strong>Sorties en groupe :</strong> Roaming, Black zones, Red
                  zones, gank, donjons, et plein d'autres !
                </li>
                <li>
                  <strong>Guides et astuces :</strong> Conseils sur les
                  équipements et stratégies optimales.
                </li>
                <li>
                  <strong>Alliance française et map HO :</strong> QG en routes
                  avaloniennes et une alliance 100% française avec plusieurs
                  événements en tout genre organisés par semaine.
                </li>
                <li>
                  <strong>Liberté d'entreprendre :</strong> Vous pouvez
                  organiser des activités si cela vous intéresse !
                </li>
              </ul>
            </div>
            <div className="mb-8">
              <Link
                to="/compos"
                className="text-xl sm:text-2xl text-white font-semibold cursor-pointer"
              >
                ✨ Rejoins-nous ! ✨
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
