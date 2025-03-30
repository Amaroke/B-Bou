import React, { useState } from "react";
import ipExplanation from "../assets/images/ip_explanation.png";
import avaExplanation from "../assets/images/ava_explanation.png";
import mist1 from "../assets/images/mist1.png";
import mist2 from "../assets/images/mist2.png";
import mist3 from "../assets/images/mist3.png";
import mist4 from "../assets/images/mist4.png";
import mist5 from "../assets/images/mist5.png";

const Tips: React.FC = () => {
  const [openSections, setOpenSections] = useState<number[]>([]);

  const toggleSection = (index: number, id: string): void => {
    setOpenSections((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );

    const element = document.getElementById(id);
    if (element) {
      const yOffset = -80;
      const y =
        element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
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
                className="mt-4 w-full md:w-1/3 lg:w-1/4"
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
      title: "🪵 Ressources et zones liées 🪵",
      content: (
        <>
          <div className="bg-[#656874] rounded-lg p-4 mb-4">
            <h3 className="text-lg text-[#ffeff8]">
              ⛏️ Répartition des ressources ⛏️
            </h3>
            <p className="text-[#ffeff8] mt-2">
              La répartition des ressources dans les différentes capitales se
              fait ainsi :
            </p>
            <table className="table-auto w-full mt-4 text-[#ffeff8]">
              <thead>
                <tr>
                  <th className="border px-4 py-2">Capitale</th>
                  <th className="border px-4 py-2">Ressources</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border px-4 py-2">Bridgewatch</td>
                  <td className="border px-4 py-2">
                    Principale : Peau, Secondaire : Fibre, Tertiaire : Minerai
                  </td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">Fort Sterling</td>
                  <td className="border px-4 py-2">
                    Principale : Minerai, Secondaire : Pierre, Tertiaire : Fibre
                  </td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">Martlock</td>
                  <td className="border px-4 py-2">
                    Principale : Pierre, Secondaire : Minerai, Tertiaire : Bois
                  </td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">Thetford</td>
                  <td className="border px-4 py-2">
                    Principale : Fibre, Secondaire : Bois, Tertiaire : Peau
                  </td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">Lymhurst</td>
                  <td className="border px-4 py-2">
                    Principale : Bois, Secondaire : Peau, Tertiaire : Pierre
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="bg-[#656874] rounded-lg p-4 mb-4">
            <h3 className="text-lg text-[#ffeff8]">
              🛠️ Boost de raffinage dans les cités 🛠️
            </h3>
            <p className="text-[#ffeff8] mt-2">
              Le boost de raffinage dans les cités fonctionne de la manière
              suivante :
            </p>
            <table className="table-auto w-full mt-4 text-[#ffeff8]">
              <thead>
                <tr>
                  <th className="border px-4 py-2">Capitale</th>
                  <th className="border px-4 py-2">Biome</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border px-4 py-2">Bridgewatch</td>
                  <td className="border px-4 py-2">Pierres</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">Fort Sterling</td>
                  <td className="border px-4 py-2">Bois</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">Martlock</td>
                  <td className="border px-4 py-2">Peaux</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">Thetford</td>
                  <td className="border px-4 py-2">Minerais</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">Lymhurst</td>
                  <td className="border px-4 py-2">Fibre</td>
                </tr>
              </tbody>
            </table>
          </div>
        </>
      ),
    },
    {
      title: "👊 Conseils pour le PvP 👊",
      content: (
        <>
          <div className="bg-[#656874] rounded-lg p-4 mb-4">
            <h3 className="text-lg text-[#ffeff8]">⚔️ Conseils en PvP ⚔️</h3>
            <ul className="list-inside text-[#ffeff8] mt-2">
              <li>
                ✅{" "}
                <strong>Ne prenez que du stuff que vous pouvez perdre</strong> –
                Ne partez jamais avec quelque chose dont la perte vous ruinerait
                !
              </li>
              <li>
                ⚡ <strong>Bonne connexion & bon matériel</strong> – Le lag peut
                vous coûter la vie en PvP, soyez préparé !
              </li>
              <li>
                ⛔ <strong>Pas d’échanges en zone rouge/noire</strong> – Sinon,
                adieu le retour rapide !
              </li>
              <li>
                🐎 <strong>Utilisez une monture rapide</strong> – Cerf, cheval
                T5 ou vivegriffe au minimum pour fuir ou poursuivre
                efficacement.
              </li>
              <li>
                👥 <strong>Restez groupé mais pas collé</strong> – Évitez les
                AoE et facilitez vos déplacements en équipe.
              </li>
              <li>
                🎯 <strong>Focus une seule cible en combat</strong> – En
                général, éliminez le healer en premier !
              </li>
              <li>
                👀 <strong>Attention aux blobs et gros groupes</strong> – Un
                zerg peut vite vous écraser si vous ne faites pas attention.
              </li>
              <li>
                ⏳ <strong>Temps d’attente après un coup</strong> – Si vous
                attaquez un ennemi, vous ne pourrez plus fuir immédiatement !
              </li>
              <li>
                🛡️ <strong>Testez différents builds</strong> – Expérimentez pour
                trouver ce qui vous convient le mieux.
              </li>
              <li>
                🎯 <strong>Connaissez votre rôle en groupe</strong> – Que vous
                soyez tank, DPS ou healer, maîtrisez votre rôle pour une
                meilleure synergie d'équipe.
              </li>
              <li>
                🗺️ <strong>Familiarisez-vous avec les zones PvP</strong> –
                Apprenez les particularités des zones rouges et noires pour
                anticiper les dangers et opportunités. Apprenez également à
                duels en corrompus ou à fuir en mists (ce ne sont que des
                exemples).
              </li>
              <li>
                🍔 <strong>Utilisez des consommables appropriés</strong> – Les
                potions et la nourriture peuvent faire la différence en combat.
              </li>
              <li>
                👁️ <strong>Restez vigilant aux embuscades</strong> – Les ennemis
                peuvent se cacher dans les recoins, soyez toujours sur vos
                gardes.
              </li>
              <li>
                💀 <strong>Apprenez des défaites</strong> – Analysez chaque
                combat perdu pour identifier vos erreurs et vous améliorer.
              </li>
              <li>
                🥊 <strong>Soyez patient et choisissez vos combats</strong> – Il
                vaut mieux éviter un combat perdu d'avance que de risquer un
                équipement précieux.
              </li>
            </ul>
          </div>
        </>
      ),
    },
    {
      title: "🌀 Guide des routes ava 🌀",
      content: (
        <>
          <>
            <div className="bg-[#656874] rounded-lg p-4 mb-4">
              <h3 className="text-lg text-[#ffeff8]">
                🛣️ Décodage des noms des Routes d'Avalon 🛣️
              </h3>
              <ul className="list-inside text-[#ffeff8] mt-2">
                <li>
                  <strong>Noms sans tiret</strong> (ex : Eldon Hill) mènent à
                  des maps normales.
                </li>
                <li>
                  <strong>Noms avec un tiret</strong> (ex : Xasos-Aeoilos)
                  mènent à une map avalonienne classique.
                </li>
                <li>
                  <strong>Noms avec deux tirets</strong> (ex : Settun-Al-Nusis)
                  mènent aux maps de HO.
                </li>
              </ul>
              <div className="flex justify-center items-center">
                <img
                  className="mt-4 w-full md:w-1/2 lg:w-1/2"
                  src={avaExplanation}
                  alt="Expliquation des IPs"
                />
              </div>
            </div>

            <div className="bg-[#656874] rounded-lg p-4 mb-4">
              <h3 className="text-lg text-[#ffeff8]">
                🧭 Suffixe du 2ème mot et types de ressources 🧭
              </h3>
              <ul className="list-inside text-[#ffeff8] mt-2">
                <li>
                  <strong>Los</strong> = grande forêt verte 🌲
                </li>
                <li>
                  <strong>Am</strong> = grande zone bleue 💧
                </li>
                <li>
                  <strong>Un</strong> = grande zone dorée 🟡
                </li>
                <li>
                  <strong>Tum</strong> = grande zone de cuir 🐾
                </li>
                <li>
                  <strong>Sum</strong> = grande zone de fibres 🌿
                </li>
                <li>
                  <strong>Aum</strong> = grande zone de bois 🪵
                </li>
                <li>
                  <strong>Lum</strong> = grande zone de minerais ⛏️
                </li>
                <li>
                  <strong>Rom</strong> = grande zone de roche 🪨
                </li>
              </ul>
            </div>

            <div className="bg-[#656874] rounded-lg p-4 mb-4">
              <h3 className="text-lg text-[#ffeff8]">
                🛡️ Décodage des Routes de HO 🛡️
              </h3>
              <ul className="list-inside text-[#ffeff8] mt-2">
                <ul className="list-inside text-[#ffeff8]">
                  <li>
                    <strong>Qua</strong> → Niveau 4
                  </li>
                  <li>
                    <strong>Qii</strong> → Niveau 5
                  </li>
                  <li>
                    <strong>Sec</strong> → Niveau 6
                  </li>
                  <li>
                    <strong>Set</strong> → Niveau 7
                  </li>
                  <li>
                    <strong>Vyn</strong> → Horaires 21h UTC
                  </li>
                  <li>
                    <strong>Ode</strong> → Horaires 18h UTC
                  </li>
                  <li>
                    <strong>Qin</strong> → Horaires 15h UTC
                  </li>
                  <li>
                    <strong>Duo</strong> → Horaires 12h UTC
                  </li>
                  <li>
                    <strong>Vie</strong> → Horaires 05h UTC
                  </li>
                  <li>
                    <strong>Ter</strong> → Horaires 03h UTC
                  </li>
                  <li>
                    <strong>Nu</strong> → Horaires 00h UTC
                  </li>
                </ul>
              </ul>
            </div>
          </>
        </>
      ),
    },
    {
      title: "🌟 Guide des Brumes 🌟",
      content: (
        <>
          <>
            <div className="bg-[#656874] rounded-lg p-4 mb-4">
              <h3 className="text-lg text-[#ffeff8]">
                Qu'est-ce que les Brumes ?
              </h3>
              <p className="text-[#ffeff8] mt-2">
                Les Brumes sont essentiellement des zones Open World avec une
                entrée sous forme de portail. On peut les trouver avec les
                petites fées/petits feu follets disponibles un peu partout sur
                la map. Elles offrent des mobs à tuer, quelques petits lacs pour
                pêcher, des coffres aléatoires, etc. Tous les types de
                ressources y sont disponibles.
              </p>
              <div className="flex justify-center items-center">
                <img
                  className="mt-4 w-full md:w-1/3 lg:w-1/4"
                  src={mist1}
                  alt="Mist1"
                />
              </div>
            </div>

            <div className="bg-[#656874] rounded-lg p-4 mb-4">
              <h3 className="text-lg text-[#ffeff8]">
                Réputation de Brecilien
              </h3>
              <p className="text-[#ffeff8] mt-2">
                Les Brumes ont une réputation similaire aux Factions, appelée
                Réputation de Brecillen. Vous pouvez augmenter votre réputation
                en accomplissant deux tâches : sauver des Wisps et nettoyer des
                Camps. Vous pouvez vérifier votre niveau de réputation en
                ouvrant vos Statistiques et en faisant défiler jusqu'en bas.
                Vous commencez comme "Neutre", c'est-à-dire à 0. Vous
                débloquerez le rang "Amical" à 50 000 points de réputation, et
                vous débloquerez ainsi l'accès à Brecilien (via un nouveau
                portail dans les brumes).
              </p>
            </div>

            <div className="bg-[#656874] rounded-lg p-4 mb-4">
              <h3 className="text-lg text-[#ffeff8]">
                Sauvetage des feu follets
              </h3>
              <p className="text-[#ffeff8] mt-2">
                Dans les Brumes, écoutez un "sifflement plaintif" pour trouver
                des Wisps piégés. Interagissez avec le Wisp piégé pour le
                libérer, mais cela prend du temps, il est donc généralement
                préférable de tuer les mobs autour. Cependant, vous pouvez
                également voler des Wisps aux autres joueurs en les sauvant
                pendant qu'ils combattent les mobs.
              </p>
              <div className="flex justify-center items-center">
                <img
                  className="mt-4 w-1/2 md:w-1/5 lg:w-1/7"
                  src={mist2}
                  alt="Mist2"
                />
              </div>
            </div>

            <div className="bg-[#656874] rounded-lg p-4 mb-4">
              <h3 className="text-lg text-[#ffeff8]">Nettoyage des Camps</h3>
              <p className="text-[#ffeff8] mt-2">
                Les camps sont des structures carrées sur la carte avec des mobs
                qui réapparaissent constamment, comme dans les Donjons
                Statiques. Votre objectif est de tuer suffisamment de mobs pour
                obtenir la renommée requise : 2.7K pour les petits camps, 5K
                pour les camps moyens et 10K pour les grands camps. D'autres
                joueurs rivaliseront pour nettoyer les camps, alors agissez
                rapidement, surtout en Zone Rouge et Noire. Les zones de
                ressources/camps des brumes sont toujours sur le même pattern,
                mais sont rotatées aléatoirement sur 360°.
              </p>
              <div className="flex justify-center items-center">
                <img
                  className="mt-4 w-full md:w-1/2 lg:w-1/3"
                  src={mist3}
                  alt="Mist3"
                />
              </div>
            </div>

            <div className="bg-[#656874] rounded-lg p-4 mb-4">
              <h3 className="text-lg text-[#ffeff8]">Rareté des Brumes</h3>
              <p className="text-[#ffeff8] mt-2">
                Les Brumes ont différentes raretés : Commun, Peu Commun, Rare,
                Épique et Légendaire. La rareté influence plusieurs facteurs :
              </p>
              <ul className="list-inside text-[#ffeff8] mt-2">
                <li>
                  <strong>Tier de Ressources :</strong> Les Brumes de plus
                  grande rareté contiennent des ressources de plus haut niveau.
                </li>
                <li>
                  <strong>Tier des Ennemis :</strong> Le niveau des ennemis dans
                  les Brumes augmente avec la rareté.
                </li>
                <li>
                  <strong>Renommée Nécessaire pour les Camps :</strong> La
                  renommée requise pour nettoyer les camps varie en fonction de
                  la rareté des Brumes.
                </li>
                <li>
                  <strong>Récompenses :</strong> Les Brumes de plus grande
                  rareté offrent de meilleures récompenses, y compris un butin
                  plus précieux et des gains de réputation plus élevés.
                </li>
              </ul>
              <div className="flex justify-center items-center">
                <img
                  className="mt-4  w-full md:w-1/3 lg:w-1/3"
                  src={mist4}
                  alt="Mist4"
                />
              </div>
            </div>

            <div className="bg-[#656874] rounded-lg p-4 mb-4">
              <h3 className="text-lg text-[#ffeff8]">Abbayes des Brumes</h3>
              <p className="text-[#ffeff8] mt-2">
                L'Abbaye propose un nouvel environnement et une mécanique pour
                débloquer des récompenses. Chaque salle nettoyée offre soit de
                la richesse via un coffre, soit un buff pour aider au combat.
                Étant dans les Brumes, vous avez un temps limité pour nettoyer
                les salles, accumuler des richesses et vaincre les ennemis. Des
                trésors et des coffres apparaissent pendant la durée de vie du
                donjon, offrant des opportunités de combat. Des sorties sont
                disponibles tout au long du donjon, vous permettant de trouver
                des trésors et de vous échapper si vous êtes engagé par un autre
                joueur. Quitter par une sortie vous ramène dans les Brumes, prêt
                à reprendre l'exploration.
              </p>
              <p className="text-[#ffeff8] mt-2">
                Bien que ces donjons n'aient pas de raretés, ils suivent la même
                distribution de tiers que les autres zones des Brumes. Les zones
                de plus haut niveau offrent des récompenses accrues pour des
                risques plus élevés, avec plus de joueurs autorisés par tiers.
              </p>
              <p className="text-[#ffeff8] mt-2">
                Joueurs Max Solo (Non Létal et Létal) :
              </p>
              <ul className="list-disc list-inside text-[#ffeff8] mt-2">
                <li>T5 : 8</li>
                <li>T6 : 8</li>
                <li>T7 : 9</li>
                <li>T8 : 10</li>
              </ul>
              <p className="text-[#ffeff8] mt-2">Joueurs Max Duo Létal :</p>
              <ul className="list-disc list-inside text-[#ffeff8] mt-2">
                <li>T6 - T8 : 12</li>
              </ul>
              <div className="flex justify-center items-center">
                <img
                  className="mt-4 w-full md:w-1/2 lg:w-1/2"
                  src={mist5}
                  alt="Mist5"
                />
              </div>
            </div>

            <div className="bg-[#656874] rounded-lg p-4 mb-4">
              <h3 className="text-lg text-[#ffeff8]">Plus d'infos</h3>
              <p className="text-[#ffeff8] mt-2">
                Dans les zones jaunes, les brumes vont du niveau 5 au niveau 7.
                Elles sont non létales, donc vous ne pouvez pas perdre
                d'équipement. Dans les zones rouges et noires, les brumes vont
                du niveau 6 au niveau 8. Elles sont létales, alors soyez
                prudents.
              </p>
              <p className="text-[#ffeff8] mt-2">
                Les niveaux de rareté des brumes et leurs chances associées dans
                les zones noires sont les suivants :
              </p>
              <ul className="list-inside text-[#ffeff8] mt-2">
                <li>
                  <strong>Communes</strong> : Niveau 6 (100%)
                </li>
                <li>
                  <strong>Peu communes</strong> : Niveau 6 (66,67%), Niveau 7
                  (33,33%)
                </li>
                <li>
                  <strong>Rares</strong> : Niveau 6 (40%), Niveau 7 (53,33%),
                  Niveau 8 (6,67%)
                </li>
                <li>
                  <strong>Épiques</strong> : Niveau 7 (75%), Niveau 8 (25%)
                </li>
                <li>
                  <strong>Légendaires</strong> : Niveau 8 (100%)
                </li>
              </ul>
              <p className="text-[#ffeff8] mt-2">
                Ces niveaux restent les mêmes pour les brumes non létales, mais
                un niveau inférieur.
              </p>
              <p className="text-[#ffeff8] mt-2">
                Les araignées de cristal et d'autres boss peuvent apparaître
                comme des ennemis de niveau 5 à niveau 8 dans les brumes. Les
                araignées de cristal sont agressives mais n'attaquent que si
                elles sont provoquées. Elles fournissent de la puissance et des
                faveurs à leur mort. Les araignées de cristal laissent tomber
                des runes, des âmes, des reliques, des artefacts, des cartes de
                donjon et des sacs d'argent. Ces boss légendaires, hors
                l'araignée de cristal, n'apparaissent que dans des mists
                enchantées.
              </p>
            </div>
          </>
        </>
      ),
    },
    {
      title: "🌾 Comment gather featuring séries 🌾",
      content: <>TODO</>,
    },
    {
      title: "💀 Devenir un bandit de Caerleon 💀",
      content: <>TODO</>,
    },
  ];

  return (
    <section className="min-h-screen w-full flex flex-col pt-16 overflow-x-hidden">
      <div className="flex flex-col items-center justify-center flex-grow text-center px-6 sm:px-8 md:px-12 lg:px-16 xl:px-24 w-full my-8">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mt-4 mb-2 sm:mb-4">
          📖 Voici nos divers conseils et astuces ! 💡
        </h1>
        <h2 className="text-xl sm:text-xl md:text-xl font-bold text-white mb-6 sm:mb-8">
          Cliquez sur les catégories qui vous intéressent pour les dérouler !
        </h2>

        <div className="space-y-6 w-full">
          {categories.map((category, index) => (
            <div
              key={index}
              id={`category-${index}`}
              className="bg-[#44464e] rounded-lg p-6 cursor-pointer"
              onClick={() => toggleSection(index, `category-${index}`)}
            >
              <h2 className="text-xl text-white font-bold">{category.title}</h2>
              {openSections.includes(index) && (
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
