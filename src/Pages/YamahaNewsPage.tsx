import React, { useEffect, useState } from "react";
import YamahaDirt2 from "../assets/YamahaDirt2.png";
import YamahaRace from "../assets/YamahaRace.png";
import YamahaCruiser from "../assets/YamahaCruiser.png";
import { Link } from "react-router-dom";

export default function YamahaNewsPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const cards = [
    {
      date: "Oct 14, 2025",
      title: "THE 2026 YAMAHA RACE MODEL",
      desc: "Get ready for the ultimate Yamaha racing experience. The new Yamaha RACE model brings real racing feel and blistering performance—whether you're on the track or the streets.",
      img: YamahaRace,
      link: "/article-page",
    },
    {
      date: "Nov 9, 2025",
      title: "YAMAHA TRACK BATTLE: MANI VS CHUCKY VS CARSON - WHO'S FASTEST?",
      desc: "The Yamaha Track Battle features three riders across diverse Yamaha motorcycles, pushing limits to crown the fastest.",
      img: YamahaDirt2,
      link: "/yamaha-riders",
    },
    {
      date: "Nov 19, 2025",
      title: "FROM PASSION TO PURPOSE: THE YAMAHA LEGACY",
      desc: "Yamaha celebrates its powerful heritage—bringing together riders, fans, and innovators from around the world.",
      img: YamahaCruiser,
      link: "https://example.com/yamaha-legacy",
    },
  ];

  return (
    <div className="min-h-screen w-full bg-gray-900 text-white px-4 py-10 flex flex-col items-center">
      <h1 className="text-3xl font-bold tracking-wide mb-10">YAMAHA NEWS</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl w-full">
        {cards.map((card, i) => (
          <Link
            key={i}
            to={card.link}
            className="group block bg-gray-900 rounded-xl overflow-hidden shadow-lg cursor-pointer hover:scale-110 transition duration-300"
          >
            <div className="h-\[35rem\] w-full overflow-hidden">
              <img
                src={card.img}
                alt={card.title}
                className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
              />
            </div>
            <div className="p-6 flex flex-col gap-3">
              <p className="text-xs opacity-70">{card.date}</p>
              <h2 className="text-lg font-semibold">{card.title}</h2>
              <p className="text-sm opacity-80 leading-relaxed">{card.desc}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
