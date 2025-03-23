import React, { useState } from "react";

const Compos: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const sheets = [
    {
      title: "Donjons de groupe",
      url: "https://docs.google.com/spreadsheets/d/e/2PACX-1vQXcgSYChYhsoh8pjv6s2AjL3Ox3UrQfmbJmJl115c0iS9clC6D5a8MXWAVogKL5XS8L8BQBN5UlDDb/pubhtml?gid=1167427530&single=true",
    },
    {
      title: "PvE Caerleon",
      url: "https://docs.google.com/spreadsheets/d/e/2PACX-1vQXcgSYChYhsoh8pjv6s2AjL3Ox3UrQfmbJmJl115c0iS9clC6D5a8MXWAVogKL5XS8L8BQBN5UlDDb/pubhtml?gid=1341050172&single=true",
    },
    {
      title: "Gold chests Ava",
      url: "https://docs.google.com/spreadsheets/d/e/2PACX-1vQXcgSYChYhsoh8pjv6s2AjL3Ox3UrQfmbJmJl115c0iS9clC6D5a8MXWAVogKL5XS8L8BQBN5UlDDb/pubhtml?gid=1364612249&single=true",
    },
    {
      title: "Raid Ava",
      url: "https://docs.google.com/spreadsheets/d/e/2PACX-1vQXcgSYChYhsoh8pjv6s2AjL3Ox3UrQfmbJmJl115c0iS9clC6D5a8MXWAVogKL5XS8L8BQBN5UlDDb/pubhtml?gid=656523873&single=true",
    },
    {
      title: "Brawl Ava",
      url: "https://docs.google.com/spreadsheets/d/e/2PACX-1vQXcgSYChYhsoh8pjv6s2AjL3Ox3UrQfmbJmJl115c0iS9clC6D5a8MXWAVogKL5XS8L8BQBN5UlDDb/pubhtml?gid=1267007128&single=true",
    },
  ];

  const toggleSheet = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="min-h-screen w-full flex flex-col pt-16 overflow-x-hidden">
      <div className="flex flex-col items-center justify-center flex-grow text-center px-6 sm:px-8 md:px-12 lg:px-16 xl:px-24 w-full my-8">
        <div className="space-y-4 w-full">
          {sheets.map((sheet, index) => (
            <div
              key={index}
              className="bg-[#ffffff] rounded-lg p-4 cursor-pointer"
              onClick={() => toggleSheet(index)}
            >
              <div className=" flex items-center justify-between">
                <h2 className="text-xl font-semibold text-black">
                  {sheet.title}
                </h2>
                <span className="text-lg">
                  {openIndex === index ? "-" : "+"}
                </span>
              </div>

              <div
                className={`mt-4 flex justify-center items-center ${
                  openIndex === index ? "block" : "hidden"
                }`}
              >
                <iframe
                  src={sheet.url}
                  width="98%"
                  height="500"
                  title={`Feuille ${index + 1}`}
                  className="border-none"
                ></iframe>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Compos;
