import React, { useEffect, useState } from "react";
import YamahaDirt1 from "../assets/YamahaDirt1.png";
import TourMt1 from "../assets/TourMt1.png";
import MtRace from "../assets/MtRace.png";

export default function ExploreMore() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <a href="/racing-page" className="group block">
            <article className="relative overflow-hidden rounded-md">
              <img
                src={MtRace}
                alt="Yamaha dirt"
                className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute left-4 top-4 bg-black text-white px-3 py-1 text-sm font-semibold rounded">
                Naked_Model
              </div>
              <div className="mt-4">
                <p className="text-xs text-gray-200">Nov 9, 2025</p>
                <h3 className="mt-2 text-lg md:text-xl font-extrabold uppercase tracking-wide text-gray-200">
                  P3 AND ANOTHER PODIUM ‘SET’ FOR ACOSTA AS BINDER ALSO MAKES
                  TOP FIVE BREAKTHROUGH AT PORTUGUESE MOTOGP
                </h3>
                <p className="mt-3 text-sm text-gray-300">
                  Pedro Acosta completed the podium double at a sunny and
                  temperate Algarve International Circuit by sliding his Red
                  Bull MT-15 to another outstanding finish, showing impressive
                  control and consistency throughout the race. His strong pace
                  from start to finish allowed him to secure a crucial result
                  and maintain momentum in the championship fight.
                </p>
              </div>
            </article>
          </a>

          {/* Card 2 */}
          <a href="/yamaha-riders" className="group block">
            <article className="relative overflow-hidden rounded-md">
              <img
                src={YamahaDirt1}
                alt="Mt race"
                className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute left-4 top-4 bg-black text-white px-3 py-1 text-sm font-semibold rounded">
                Yamaha_Dirt
              </div>
              <div className="mt-4">
                <p className="text-xs text-gray-200">Nov 6, 2025</p>
                <h3 className="mt-2 text-lg md:text-xl font-extrabold uppercase tracking-wide text-gray-200">
                  ANDREA ADAMO TO MAKE MXGP TRANSITION FOR 2026
                </h3>
                <p className="mt-3 text-sm text-gray-300">
                  Former FIM MX2 World Champion Andrea Adamo will take the next
                  major step in his impressive career by joining the Red Bull
                  MT-15 Factory Racing lineup. The move marks an exciting new
                  chapter for the young rider as he prepares to tackle tougher
                  competition, higher expectations, and new challenges with one
                  of the sport’s most competitive teams.
                </p>
              </div>
            </article>
          </a>

          {/* Card 3 */}
          <a href="/yamaha-advanture" className="group block">
            <article className="relative overflow-hidden rounded-md">
              <img
                src={TourMt1}
                alt="Yamaha adventure"
                className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute left-4 top-4 bg-black text-white px-3 py-1 text-sm font-semibold rounded">
                Yamaha_Adventure
              </div>
              <div className="mt-4">
                <p className="text-xs text-gray-200">Nov 4, 2025</p>
                <h3 className="mt-2 text-lg md:text-xl font-extrabold uppercase tracking-wide text-gray-200">
                  MT-15 LAUNCHES HIGH-PROFILE 2026 SUPERMOTOCROSS WORLD
                  CHAMPIONSHIP RED BULL MT-15 FACTORY RACING ROSTER
                </h3>
                <p className="mt-3 text-sm text-gray-300">
                  A reenergized Red Bull MT-15 Factory Racing team has
                  officially been unveiled at RD Field — the primary testing
                  grounds for MT-15 North America Inc. The launch showcased the
                  team’s renewed focus, updated machinery, and strengthened
                  rider lineup, all aimed at delivering a highly competitive
                  campaign for the upcoming season. With fresh energy and
                  upgraded performance strategies, the team is preparing for one
                  of its most ambitious racing years yet.
                </p>
              </div>
            </article>
          </a>
        </div>

        <hr className="border-t border-white/50 my-4 " />
        <div className="max-w-screen mx-auto lg:py-10 px-16 lg:px-72 text-center text-sm bg-gray-900 text-white/70 space-y-10 leading-relaxed mb-6">
          <h2 className="text-3xl font-bold">Note</h2>
          <p>
            The stated discount is exclusively available at participating,
            authorized Mt-15 dealers. All information is non-binding. Printing,
            layout, and typographical errors as well as other mistakes are
            reserved. Information may be changed at any time without prior
            notice.
          </p>
          <p>
            The illustrated vehicles may vary in selected details from the
            production models and some illustrations feature optional equipment
            available at additional cost. All information concerning the scope
            of supply, appearance, services, dimensions and weights is
            non-binding and specified with the proviso that errors, for instance
            in printing, setting and/or typing, may occur; such information is
            subject to change without notice. Please note that model
            specifications may vary from country to country. In the case of
            coated surfaces, there may be color differences due to the usual
            process fluctuations. The consumption values stated refer to the
            roadworthy series condition of the vehicles at the time of factory
            delivery.
          </p>
        </div>
      </div>
    </div>
  );
}
