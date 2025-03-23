import React, { useState } from "react";
import ipExplanation from "../assets/images/ip_explanation.png";

const Tips: React.FC = () => {
  const [openSection, setOpenSection] = useState<number | null>(null);

  const toggleSection = (index: number) => {
    setOpenSection(openSection === index ? null : index);
  };

  const categories = [
    {
      title: "🏅 Conseils pour débutants 🏅",
      content: (
        <>
          <div className="bg-[#656874] rounded-lg p-4 mb-4">
            <h3 className="text-lg text-[#ffeff8]">
              ✨ Le système de tiers ✨
            </h3>
            <p className="text-[#ffeff8] mt-2">
              Dans Albion Online, les équipements sont classés par tiers, allant
              du T1 (Tier 1) au T8 (Tier 8). Chaque tier représente un niveau de
              puissance croissant, avec des objets de plus haut tier étant plus
              puissants mais aussi plus coûteux et plus difficiles à obtenir.
            </p>
            <p className="text-[#ffeff8] mt-2">
              Les noms correspondants à chaque tier sont utilisés pour indiquer
              l'expertise et la qualité des objets :
            </p>
            <ul className="list-disc list-inside text-[#ffeff8]">
              <li>Compagnon (Journeyman) : T3</li>
              <li>Adepte (Adept) : T4</li>
              <li>Expert (Expert) : T5</li>
              <li>Maître (Master) : T6</li>
              <li>Grand Maître (Grandmaster) : T7</li>
              <li>Sage (Elder) : T8</li>
            </ul>
            <p className="text-[#ffeff8] mt-2">
              Attention donc à ne pas utiliser ces termes lors de la recherche
              d'items (dans le marché par exemple). Mais préférez les sélecteurs
              de tier dans la barre de recherche.
            </p>
          </div>

          <div className="bg-[#656874] rounded-lg p-4 mb-4">
            <h3 className="text-lg text-[#ffeff8]">
              🪄 Les enchantements dans Albion 🪄
            </h3>
            <p className="text-[#ffeff8] mt-2">
              Les équipements dans Albion peuvent être enchantés, ce qui
              augmente leur puissance. Ces enchantements sont représentés par
              des nombres et des couleurs.
            </p>
            <ul className="list-disc list-inside text-[#ffeff8]">
              <li>Vert : premier niveau d'enchantement (.1).</li>
              <li>Bleu : deuxième niveau d'enchantement (.2).</li>
              <li>Violet : troisième niveau d'enchantement (.3).</li>
              <li>Jaune : quatrième niveau d'enchantement (.4).</li>
            </ul>
          </div>

          <div className="bg-[#656874] rounded-lg p-4 mb-4">
            <h3 className="text-lg text-[#ffeff8]">
              ⚔️ L'IP (Item Power) des équipements ⚔️
            </h3>
            <p className="text-[#ffeff8] mt-2">
              L'IP (Item Power) représente la puissance de votre équipement en
              jeu. Plus l'IP est élevé, plus vos armes et armures seront
              efficaces en combat.
            </p>
            <div className="flex justify-center items-center">
              <img
                className="mt-8 w-1/2"
                src={ipExplanation}
                alt="Expliquation des IPs"
              />
            </div>
          </div>

          <div className="bg-[#656874] rounded-lg p-4 mb-4">
            <h3 className="text-lg text-[#ffeff8]">
              🗺️ Les zones et leurs couleurs 🗺️
            </h3>
            <ul className="list-inside text-[#ffeff8]">
              <li>🔵 Zones Bleues : Pas de PvP, ressources faibles (T1-T5).</li>
              <li>
                🌕 Zones Jaunes : PvP limité, non létal, ressources modérées
                (T3-T6).
              </li>
              <li>
                🔴 Zones Rouges : PvP complet, perte de loot possible,
                ressources avancées (T4-T7).
              </li>
              <li>
                ⚫ Zones Noires : PvP total, perte de tout l'inventaire,
                ressources rares (T5-T8).
              </li>
            </ul>
          </div>
        </>
      ),
    },
    {
      title: "💎 Conseils généraux 💎",
      content: (
        <>
          <div className="bg-[#656874] rounded-lg p-4 mb-4">
            <h3 className="text-lg text-[#ffeff8]">
              📖 N'utiliser pas vos points d'apprentissage sur les armes/armures
              📖
            </h3>
            <p className="text-[#ffeff8] mt-2">
              Il est plus utile d’investir vos points d'apprentissage dans les
              métiers de collecte. Cela vous permettra de mieux progresser à
              long terme, car les armes et armures peuvent être obtenues plus
              facilement sans gaspiller vos points.
            </p>
          </div>

          <div className="bg-[#656874] rounded-lg p-4 mb-4">
            <h3 className="text-lg text-[#ffeff8]">
              💸 Vendre vos items avec des offres 💸
            </h3>
            <p className="text-[#ffeff8] mt-2">
              Lorsque vous vendez vos objets, privilégiez les offres de vente
              plutôt que la vente directe. Cela peut sembler peu différent, mais
              en réalité, c’est plus rentable et vous permet de mieux contrôler
              vos prix sur le marché.
            </p>
          </div>

          <div className="bg-[#656874] rounded-lg p-4 mb-4">
            <h3 className="text-lg text-[#ffeff8]">
              👕 Tester différentes combinaisons d'armures et d'armes 👕
            </h3>
            <p className="text-[#ffeff8] mt-2">
              Ne vous enfermez pas dans un set d'armure complet. Essayez
              différentes armes et armures en fonction des sorts qui vous
              plaisent, plutôt que de vous concentrer uniquement sur des "types
              d'armures". La diversité peut enrichir votre expérience de jeu !
            </p>
          </div>

          <div className="bg-[#656874] rounded-lg p-4 mb-4">
            <h3 className="text-lg text-[#ffeff8]">
              🤯 Ne gaspillez pas vos livres d'expérience sur des objets maxés
              🤯
            </h3>
            <p className="text-[#ffeff8] mt-2">
              N'utilisez pas vos livres d’expérience sur des équipements déjà
              maxés (100+). Vous risquez de perdre une grande partie de
              l’expérience. Réservez-les pour des équipements que vous voulez
              améliorer, même si ce sont des objets de bas tiers (T4). De plus,
              stockez-les dans votre banque pour une session XP plus tard !
            </p>
          </div>

          <div className="bg-[#656874] rounded-lg p-4 mb-4">
            <h3 className="text-lg text-[#ffeff8]">
              🥗 Utiliser des outils avaloniens et de la nourriture 🥗
            </h3>
            <p className="text-[#ffeff8] mt-2">
              Utilisez de la nourriture pour la collecte ou la fabrication pour
              obtenir des bonus considérables (comme les salades pour le craft
              ou les tourtes pour la collecte). De plus, les outils avaloniens
              vous donnent plus de matériaux, ce qui est une excellente façon de
              gagner de la renommée et de monter vos niveaux.
            </p>
          </div>

          <div className="bg-[#656874] rounded-lg p-4 mb-4">
            <h3 className="text-lg text-[#ffeff8]">🔗 Liens utiles 🔗</h3>
            <ul className="list-inside text-[#ffeff8]">
              <li>
                📚 Wiki :{" "}
                <a
                  href="https://wiki.albiononline.com/wiki/Albion_Online_Wiki"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:text-blue-700"
                >
                  Albion Online Wiki
                </a>
              </li>
              <li>
                🌐 Fandom :{" "}
                <a
                  href="https://albiononline.fandom.com/fr/wiki/Wikia_Albiononline"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:text-blue-700"
                >
                  Fandom Albion Online
                </a>
              </li>
              <li>
                🛡️ Builds :{" "}
                <a
                  href="https://albiononlinegrind.com/builds"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:text-blue-700"
                >
                  Builds de personnages
                </a>
              </li>
              <li>
                📊 Stats :{" "}
                <a
                  href="https://albionmurder.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:text-blue-700"
                >
                  Statistiques des joueurs
                </a>
              </li>
              <li>
                🛒 Market DB :{" "}
                <a
                  href="https://europe.albiononline2d.com/en/item"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:text-blue-700"
                >
                  Base de données du marché
                </a>
              </li>
              <li>
                🔌 API :{" "}
                <a
                  href="https://www.albion-online-data.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:text-blue-700"
                >
                  API Albion Online
                </a>
              </li>
            </ul>
          </div>

          <div className="bg-[#656874] rounded-lg p-4 mb-4">
            <h3 className="text-lg text-[#ffeff8]">
              👨‍💻 Logiciels utilitaires 👨‍💻
            </h3>
            <p className="text-[#ffeff8] mt-2">
              Pour enregistrer votre jeu et réaliser des clips, vous pouvez
              utiliser Medal, un logiciel simple, presque open-source et gratuit
              :{" "}
              <a
                href="https://medal.tv/fr"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:text-blue-700"
              >
                Medal
              </a>
            </p>
            <p className="text-[#ffeff8] mt-2">
              Et pour ceux qui veulent farmer les loots Twitch, je vous
              conseille le Twitch Drop Miner, un outil pratique pour récolter
              sans ouvrir un navigateur :{" "}
              <a
                href="https://github.com/DevilXD/TwitchDropsMiner?tab=readme-ov-file"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:text-blue-700"
              >
                Twitch Drops Miner
              </a>
            </p>
            <p className="text-[#ffeff8] mt-2">
              Si vous avez déjà vu un compteur de DPS ou que vous êtes
              intéréssés pour voir vos stats comme votre fame/h ou vos dégats,
              il existe cet add-on :{" "}
              <a
                href="https://github.com/Triky313/AlbionOnline-StatisticsAnalysis"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:text-blue-700"
              >
                Albion StatisticsAnalyzer
              </a>
            </p>
          </div>
        </>
      ),
    },
    {
      title: "🪵 Ressources 🪵",
      content: <p>Contenu fictif pour la catégorie 3.</p>,
    },
    {
      title: "👊 PvP 👊",
      content: <p>Contenu fictif pour la catégorie 4.</p>,
    },
    {
      title: "🌀 Routes ava 🌀",
      content: <p>Contenu fictif pour la catégorie 5.</p>,
    },
    {
      title: "🌟 Brumes 🌟",
      content: <p>Contenu fictif pour la catégorie 6.</p>,
    },
  ];

  return (
    <section className="min-h-screen w-full flex flex-col pt-16 overflow-x-hidden">
      <div className="flex flex-col items-center justify-center flex-grow text-center px-6 sm:px-8 md:px-12 lg:px-16 xl:px-24 w-full my-8">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mt-4 mb-2 sm:mb-4">
          📖 Voici nos divers conseils et astuces ! 💡
        </h1>
        <h1 className="text-xl sm:text-xl md:text-xl font-bold text-white mb-6 sm:mb-8">
          Cliquez sur les catégories qui vous intéresse pour les dérouler !
        </h1>

        <div className="space-y-6 w-full">
          {categories.map((category, index) => (
            <div
              key={index}
              className="bg-[#44464e] rounded-lg p-6 cursor-pointer"
              onClick={() => toggleSection(index)}
            >
              <h2 className="text-xl text-white font-bold">{category.title}</h2>
              {openSection === index && (
                <div className="mt-4">{category.content}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tips;
