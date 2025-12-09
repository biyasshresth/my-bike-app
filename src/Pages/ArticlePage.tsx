import React, { useEffect, useState } from "react";
import YamahaRace5 from "../assets/YamahaRace5.mp4";
import YamahaRace from "../assets/YamahaRace.png";
import YamahaRace6 from "../assets/YamahaRace6.png";
import YamahaRace7 from "../assets/YamahaRace7.png";
import YamahaRace8 from "../assets/YamahaRace8.png";
export default function ArticlePage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className="w-full min-h-screen bg-gray-900 text-gray-200">
      {/* HERO IMAGE */}
      <div className="relative w-full h-[300px] sm:h-[380px] md:h-[480px] overflow-hidden rounded-lg">
        <video
          src={YamahaRace5}
          autoPlay
          loop
          muted
          playsInline
          className="w-full  h-96 sm:h-96 md:h-96 rounded-lg object-cover"
        />

        {/* Overlay Text */}
        <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6 text-gray-200">
          <p className="text-xs sm:text-sm tracking-wide opacity-80">
            MOTO GP &nbsp;|&nbsp; 10 NOVEMBER 2025
          </p>
          <h1 className="text-xl sm:text-xl md:text-3xl font-bold leading-tight mt-1 drop-shadow-lg">
            IZAN GUEVARA ENJOYS YAMAHA REWARD AFTER VALENCIAN GP TRIUMPH
          </h1>
        </div>
      </div>

      {/* TITLE SECTION */}
      <div className="max-w-6xl mx-auto px-4 mt-8">
        <h2 className="text-xl sm:text-xl md:text-3xl font-bold leading-tight drop-shadow-lg">
          Description:
        </h2>
      </div>

      {/* MAIN CONTENT */}
      <div className="max-w-6xl mx-auto px-4 mt-6 flex flex-col md:flex-row gap-6">
        {/* LEFT IMAGE SECTION */}
        <div className="md:w-1/4 w-full flex flex-col gap-4">
          <img
            src={YamahaRace}
            alt="Yamaha Side"
            className="w-full h-auto rounded-lg object-cover"
          />
          <img
            src={YamahaRace6}
            alt="Yamaha Side"
            className="w-full h-auto rounded-lg object-cover"
          />
        </div>

        {/* RIGHT CONTENT SECTION */}
        <div className="md:w-3/4 w-full space-y-6 text-gray-200 leading-7">
          <p>
            After his spectacular triumph in the season finale at the Valencian
            GP, Izan Guevara earned a much-deserved Yamaha test ride, getting a
            chance to demonstrate his talent on a full-factory setup for the
            first time in his young career. The breathtaking win marked a
            defining moment for the rider and highlighted his commitment, speed,
            and racing intelligence.
          </p>

          <p>
            The test provided valuable feedback to Yamaha engineers while
            offering Guevara a taste of what awaits should he continue his rise
            through the racing ranks. His smooth ride style and remarkable
            ability to adapt quickly impressed both fans and team members alike.
          </p>

          {/* QUOTE 1 */}
          <div className="bg-gray-300 p-4 sm:p-6 border-l-4 border-gray-400 italic text-gray-700 rounded-lg">
            <p className="mb-2 text-base sm:text-lg">
              "Izan is the first BLU CRU rider to try a MotoGP bike, and once
              again he showed his talent. He completed two runs of five laps
              each, demonstrating how quickly he can adapt to the bike and
              manage the braking points. After winning the Valencian GP, today
              he received his reward. I hope this experience gives him even more
              motivation as we look ahead to the 2026 season."
            </p>
            <p className="font-semibold mt-2 sm:mt-3">
              — GINO BORSOI, Team Director, BLU CRU Pramac Yamaha Moto2
            </p>
          </div>

          {/* QUOTE 2 */}
          <div className="bg-gray-300 p-4 sm:p-6 border-l-4 border-gray-400 italic text-gray-700 rounded-lg">
            <p className="mb-2 text-base sm:text-lg">
              "I am so thankful to Yamaha for giving me the opportunity to try
              the M1. Jumping on a MotoGP bike is a goal for anyone who wants to
              become a professional rider, and being able to live this
              experience is truly a dream come true. <br />I was really
              surprised by the acceleration. On the straight, I truly realised
              just how much power it has and what it must be like to manage that
              for a full race."
            </p>
            <p className="font-semibold mt-2 sm:mt-3">
              — IZAN GUEVARA, BLU CRU Pramac Yamaha Moto2 Rider
            </p>
          </div>

          <p>
            With renewed determination, Guevara now looks toward the next season
            with the momentum of a champion and the support of a team that
            believes strongly in his potential. On the straight, I truly
            realised just how much power it has and what it must be like to
            manage that for a full race. Fans eagerly await what comes next for
            one of the sport’s brightest rising stars.
          </p>
        </div>
      </div>

      {/* GALLERY SECTION */}
      <div className="max-w-6xl mx-auto px-4 mt-16">
        <h2 className="text-2xl md:text-3xl font-bold mb-6">Photo Gallery</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {[YamahaRace8, YamahaRace, YamahaRace6, YamahaRace7].map(
            (img, index) => (
              <img
                key={index}
                src={img}
                alt={`Gallery Image ${index + 1}`}
                className="w-full h-48 sm:h-56 md:h-48 object-cover rounded-lg cursor-pointer hover:opacity-75 transition"
                onClick={() => setSelectedImage(img)}
              />
            )
          )}
        </div>
      </div>
      {/* FULLSCREEN MODAL WITH CLOSE BUTTON */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center shadow-2xl z-50">
          <button
            type="button"
            className="absolute top-4 right-4 text-red-600 text-3xl sm:text-4xl font-bold focus:outline-none shadow-2xl"
            onClick={() => setSelectedImage(null)}
          >
            &times;
          </button>
          <img
            src={selectedImage}
            alt="Full Screen"
            className="max-w-full sm:max-w-3xl max-h-[90vh] rounded-lg shadow-lg"
          />
        </div>
      )}

      {/* FOOTER SPACING */}
      <div className="h-20" />
    </div>
  );
}
