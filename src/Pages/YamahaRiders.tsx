import React, { useEffect, useState } from "react";
import YamahaDirt5 from "../assets/YamahaDirt5.png";
import YamahaDirt1 from "../assets/YamahaDirt1.png";
import YamahaDirt2 from "../assets/YamahaDirt2.png";
import YamahaDirt3 from "../assets/YamahaDirt3.png";
import YamahaDirt4 from "../assets/YamahaDirt4.png";
import DirtVedio from "../assets/DirtVedio.mp4";

export default function ArticlePage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="w-full min-h-screen bg-gray-900 text-gray-200">
      {/* HERO IMAGE */}
      <div className="relative w-full h-[250px] sm:h-[380px] md:h-[480px] overflow-hidden rounded-lg">
        <img
          src={YamahaDirt5}
          alt="Yamaha Racing"
          className="w-full h-full object-cover"
        />
        {/* Overlay Text */}
        <div className="absolute bottom-4 sm:bottom-10 left-4 sm:left-16 right-4 text-gray-100">
          <p className="text-xs sm:text-sm tracking-wide opacity-80">
            MOTO GP &nbsp;|&nbsp; 10 NOVEMBER 2025
          </p>
          <h1 className="text-lg sm:text-2xl md:text-4xl font-bold leading-tight mt-1 drop-shadow-lg">
            IZAN GUEVARA ENJOYS YAMAHA REWARD <br /> AFTER VALENCIAN GP TRIUMPH
          </h1>
        </div>
      </div>

      {/* DESCRIPTION TITLE */}
      <div className="max-w-6xl mx-auto px-4 mt-8">
        <h2 className="text-xl sm:text-2xl md:text-4xl font-bold drop-shadow-lg">
          Description:
        </h2>
      </div>

      {/* MAIN CONTENT */}
      <div className="max-w-6xl mx-auto px-4 mt-6 flex flex-col md:flex-row gap-6">
        {/* LEFT SECTION */}
        <div className="md:w-1/4 w-full flex flex-col gap-4">
          <img
            src={YamahaDirt1}
            alt="Yamaha Side"
            className="w-full h-auto rounded-lg object-cover"
          />

          {/* VIDEO */}
          <video
            src={DirtVedio}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-64 sm:h-80 md:h-96 rounded-lg object-cover"
          />

          <img
            src={YamahaDirt2}
            alt="Yamaha Side"
            className="w-full h-auto rounded-lg object-cover"
          />
        </div>

        {/* RIGHT SECTION */}
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
            As Guevara crossed the finish line in Valencia, the paddock
            witnessed a celebration filled with emotion and anticipation for
            what's next. Yamaha rewarded his efforts with an exclusive test
            opportunity, allowing him to experience the performance and
            refinement of the latest Yamaha prototype, marking a significant
            milestone in his professional journey.
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
              manage the braking points. This opportunity came from a bet I made
              with him in Malaysia, after seeing how much he improved during the
              second part of the season, to give him some extra motivation. I
              promised that if he won a race before the end of the season, he
              would get the chance to test the MotoGP bike in a private session.
              After winning the Valencian GP, today he received his reward. I
              hope this experience gives him even more motivation as we look
              ahead to the 2026 season."
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
              experience is truly a dream come true. In the morning, I had a
              briefing with Jack Miller's technical team, who explained how the
              bike works and how to manage the braking and acceleration. The
              power of this bike is incredible. <br />I was really surprised by
              the acceleration. Even before changing gears, I could feel there
              was still more power to come, which is impressive. The feeling in
              the corners was fantastic; the bike is smooth and easy to handle.
              On the straight, I truly realised just how much power it has and
              what it must be like to manage that for a full race."
            </p>
            <p className="font-semibold mt-2 sm:mt-3">
              — IZAN GUEVARA, BLU CRU Pramac Yamaha Moto2 Rider
            </p>
          </div>

          <p className="text-sm sm:text-base">
            With renewed determination, Guevara now looks toward the next season
            with the momentum of a champion and the support of a team that
            believes strongly in his potential. Fans eagerly await what comes
            next for one of the sport’s brightest rising stars.
          </p>
        </div>
      </div>

      {/* GALLERY */}
      <div className="max-w-6xl mx-auto px-4 mt-16">
        <h2 className="text-2xl md:text-3xl font-bold mb-6">Photo Gallery</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {[YamahaDirt4, YamahaDirt2, YamahaDirt1, YamahaDirt3].map(
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

      {/* FOOTER SPACE */}
      <div className="h-20" />
    </div>
  );
}
