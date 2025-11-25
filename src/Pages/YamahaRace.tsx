import React, { useEffect, useState } from "react";
import YamahaRace1 from "../assets/YamahaRace1.png";
import YamahaRace2 from "../assets/YamahaRace2.png";
import YamahaRace3 from "../assets/YamahaRace3.png";
import YamahaRace4 from "../assets/YamahaRace4.png";
import YamahaRally from "../assets/YamahaRally.png";
import YamahaDirt3 from "../assets/YamahaDirt3.png";
import YamahaDirt4 from "../assets/YamahaDirt4.png";

const YamahaRace: React.FC = () => {
  const cardsData = [
    { img: YamahaRace2, title: "SUPERBIKE CHAMPIONSHIP" },
    { img: YamahaRace4, title: "MX RACING SERIES" },
    { img: YamahaRace3, title: "ENDURANCE CHALLENGE" },
    { img: YamahaRace1, title: "ROAD RACING SERIES" },
    { img: YamahaRally, title: "RALLY EXTREME SERIES" },
  ];

  const [activeCardIndex, setActiveCardIndex] = useState<number>(0);
  const [showAllMobile, setShowAllMobile] = useState(false);
  const [showMobileRS, setShowMobileRS] = useState(false);
  const [mobileIndex, setMobileIndex] = useState(0);

  useEffect(() => {
    if (showAllMobile) return;
    const interval = setInterval(() => {
      setMobileIndex((prev) => (prev + 1) % cardsData.length);
    }, 1500);

    return () => clearInterval(interval);
  }, [showAllMobile]);

  // AUTO ROTATE (
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveCardIndex((prev: number) => (prev + 1) % cardsData.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="w-full bg-gray-900 text-gray-200 font-sans">
        {/* HERO SECTION */}
        <section className="relative w-full h-[520px] overflow-hidden">
          <img
            src={YamahaDirt3}
            alt="Yamaha dirt bike racing on a dirt track"
            className="w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-black/40"></div>

          <div className="absolute top-1/2 left-10 -translate-y-1/2 text-white max-w-xl">
            <p className="uppercase text-xs tracking-widest">
              Blu Cru Team | YZ Cup Winners 2025
            </p>

            <h1 className="text-4xl font-bold leading-tight mt-2">
              STOCK, GAJSER & <br />
              ANDRZEJEWSKI NAMED AS <br />
              2025 YZ BLU CRU FIM <br />
              EUROPE C​UP WINNERS!
            </h1>

            <p className="mt-3 text-sm opacity-90">
              The Yamaha blu cru program proudly announces the 2025 winners from
              this year's European competition. Riders delivered an incredible
              display of speed, skill, and determination.
            </p>
          </div>
        </section>

        {/* LATEST NEWS SECTION */}
        <section className="w-full px-10 mt-14">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-bold">LATEST NEWS</h2>
            <button
              type="button"
              className="text-sm font-semibold hover:underline"
            >
              View All
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
            {/* Card 1 */}
            <div className="shadow-lg">
              <img
                src={YamahaRace1}
                alt="Yamaha motorcycle racing on track"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <p className="text-xs text-gray-200">23 Oct 2025</p>
                <h3 className="font-bold mt-2">
                  Yamaha riders achieve outstanding results
                </h3>
                <p className="text-sm mt-2 text-gray-200">
                  Yamaha's training camp concluded with exceptional performances
                  from riders.
                </p>

                <a
                  href="/article-page"
                  rel="noopener noreferrer"
                  className="mt-4 inline-block text-blue-600 font-semibold hover:underline"
                >
                  READ MORE
                </a>
              </div>
            </div>

            {/* Card 2 */}
            <div className="shadow-lg">
              <img
                src={YamahaDirt4}
                alt="Yamaha dirt bike on upgraded track"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <p className="text-xs text-gray-200">18 Oct 2025</p>
                <h3 className="font-bold mt-2">
                  New dirt-track upgrades revealed
                </h3>
                <p className="text-sm mt-2 text-gray-200">
                  Teams now have access to enhanced performance options for
                  2025.
                </p>
                <a
                  href="/yamaha-riders"
                  rel="noopener noreferrer"
                  className="mt-4 inline-block text-blue-600 font-semibold hover:underline"
                >
                  READ MORE
                </a>
              </div>
            </div>

            {/* Card 3 */}
            <div className="shadow-lg">
              <img
                src={YamahaRally}
                alt="Yamaha rally motorcycle in endurance test"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <p className="text-xs text-gray-200">08 Oct 2025</p>
                <h3 className="font-bold mt-2">Rally division pushes limits</h3>
                <p className="text-sm mt-2 text-gray-200">
                  Yamaha rally riders complete demanding endurance training.
                </p>
                <a
                  href="/yamaha-advanture"
                  rel="noopener noreferrer"
                  className="mt-4 inline-block text-blue-600 font-semibold hover:underline"
                >
                  READ MORE
                </a>
              </div>
            </div>
          </div>
        </section>
        {/* RACING SERIES (DESKTOP) */}
        <section className="hidden md:block w-full px-10 mt-16">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-bold">RACING SERIES</h2>

            <div className="flex gap-3">
              <button
                type="button"
                onClick={() =>
                  setActiveCardIndex(
                    (prev) => (prev - 1 + cardsData.length) % cardsData.length
                  )
                }
                className="w-8 h-8 border border-gray-400 rounded-full flex justify-center items-center hover:bg-gray-200"
              >
                &lt;
              </button>

              <button
                type="button"
                onClick={() =>
                  setActiveCardIndex((prev) => (prev + 1) % cardsData.length)
                }
                className="w-8 h-8 border border-gray-400 rounded-full flex justify-center items-center hover:bg-gray-200"
              >
                &gt;
              </button>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
            {[0, 1, 2].map((offset) => {
              const index = (activeCardIndex + offset) % cardsData.length;
              const card = cardsData[index];
              const isCenter = offset === 1;

              return (
                <div
                  key={index}
                  className={`transition-all duration-300 ${
                    isCenter
                      ? "scale-105 shadow-2xl border-2 border-gray-200 z-20"
                      : "scale-100 opacity-90"
                  }`}
                >
                  <img
                    src={card.img}
                    alt={card.title}
                    className="w-full h-52 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="font-bold text-lg">{card.title}</h3>
                    <button
                      type="button"
                      className="mt-3 px-4 py-2 bg-black text-white text-sm"
                    >
                      VIEW DETAILS
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* RACING SERIES (MOBILE — ONLY) */}
        <section className="block md:hidden w-full px-6 mt-12">
          <h2 className="text-xl font-bold mb-4">RACING SERIES</h2>

          {/* Auto Rotating Single Card (only if dropdown not expanded) */}
          {!showAllMobile && (
            <div className="shadow-lg">
              <img
                src={cardsData[mobileIndex].img}
                alt={cardsData[mobileIndex].title}
                className="w-full h-56 object-cover"
              />
              <div className="p-4">
                <h3 className="font-bold text-lg">
                  {cardsData[mobileIndex].title}
                </h3>
                <button className="mt-3 px-4 py-2 bg-black text-white text-sm">
                  VIEW DETAILS
                </button>
              </div>
            </div>
          )}

          {/* Expanded Full List */}
          {showAllMobile && (
            <div className="mt-4 space-y-6">
              {cardsData.map((card, index) => (
                <div key={index} className="shadow-lg">
                  <img
                    src={card.img}
                    alt={card.title}
                    className="w-full h-52 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="font-bold text-lg">{card.title}</h3>
                    <button className="mt-3 px-4 py-2 bg-black text-white text-sm">
                      VIEW DETAILS
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Show More / Show Less button at bottom */}
          <button
            onClick={() => setShowAllMobile((prev) => !prev)}
            className="w-full mt-6 py-2 bg-gray-800 text-white font-semibold rounded"
          >
            {showAllMobile ? "Show Less" : "Show More"}
          </button>
        </section>
      </div>
      {/* Little description section  */}
      <hr className="border-t border-white/50 my-4 " />
      <div className="max-w-screen  mx-auto lg:py-10 px-16 lg:px-72 text-center text-sm bg-gray-900 text-white/70 space-y-10 leading-relaxed mb-6">
        <h2 className="text-3xl font-bold">Note</h2>
        <p>
          The stated discount is exclusively available at participating,
          authorized Mt-15 dealers. All information is non-binding. Printing,
          layout, and typographical errors as well as other mistakes are
          reserved. Information may be changed at any time without prior notice.
        </p>
        <p>
          The illustrated vehicles may vary in selected details from the
          production models and some illustrations feature optional equipment
          available at additional cost. All information concerning the scope of
          supply, appearance, services, dimensions and weights is non-binding
          and specified with the proviso that errors, for instance in printing,
          setting and/or typing, may occur; such information is subject to
          change without notice. Please note that model specifications may vary
          from country to country. In the case of coated surfaces, there may be
          color differences due to the usual process fluctuations. The
          consumption values stated refer to the roadworthy series condition of
          the vehicles at the time of factory delivery.
        </p>
      </div>
    </>
  );
};

export default YamahaRace;
