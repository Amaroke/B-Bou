import React, { useState } from "react";
import { tipsData } from "../data/tipsData";

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

  return (
    <section className="min-h-screen w-full flex flex-col pt-16 overflow-x-hidden">
      <div className="flex flex-col items-center justify-center flex-grow text-center px-6 sm:px-8 md:px-12 lg:px-16 xl:px-24 w-full my-8">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mt-4 mb-2 sm:mb-4">
          📖 Voici nos divers conseils et astuces ! 💡
        </h1>
        <h2 className="text-xl sm:text-xl md:text-xl font-bold text-white mb-6 sm:mb-8">
          Cliquez sur les catégories qui vous intéressent pour les dérouler !
        </h2>

        <div className="space-y-6 w-2/3">
          {tipsData.map((category, index) => (
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
