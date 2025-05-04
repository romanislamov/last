'use client';

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

// Helper to generate slug
const createSlug = (title: string) => {
  return title
    .toLowerCase()
    .replace(/:/g, "")
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9-]/g, "");
};

// Game data
const gameImages = [
  {
    title: "Mini Monsters: Gravity Consensus",
    src: "/game2.png",
    alt: "Mini Monsters: Gravity Consensus preview",
    slug: createSlug("Mini Monsters Gravity Consensus"),
  },
  {
    title: "Block Bot: Puzzle Journey",
    src: "/game3.png",
    alt: "Block Bot: Puzzle Journey preview",
    slug: createSlug("Block Bot Puzzle Journey"),
  },
  {
    title: "Three to the Point",
    src: "/game4.png",
    alt: "Three to the Point preview",
    slug: createSlug("Three to the Point"),
  },
  {
    title: "The Dark Lands",
    src: "/game1.png",
    alt: "The Dark Lands preview",
    slug: createSlug("The Dark Lands"),
  },
];

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? gameImages.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === gameImages.length - 1 ? 0 : prev + 1));
  };

  const textOutlineShadow =
    "[-1px_-1px_0_#333,1px_-1px_0_#333,-1px_1px_0_#333,1px_1px_0_#333]";

  return (
    <main className="font-jaro bg-gradient-to-b from-gray-900 via-black to-gray-900 text-white">
      {/* Hero Section */}
      <section className="flex flex-col justify-center items-center text-center px-4 pt-32 pb-16 md:pt-40 md:pb-20">
        <h1 className={`text-5xl sm:text-6xl md:text-7xl font-bold mb-4 text-white ${textOutlineShadow}`}>
          Cyber Moon Games
        </h1>
        <p className="text-lg md:text-xl text-gray-300">From gamers for gamers</p>
      </section>

      {/* Carousel Section */}
      <section className="py-12 md:py-16 px-4 sm:px-6 lg:px-8">
        <h2 className={`text-3xl md:text-4xl font-bold text-center mb-8 text-white ${textOutlineShadow}`}>
          Featured Game
        </h2>

        <div className="relative w-full max-w-4xl mx-auto aspect-video overflow-hidden rounded-lg shadow-lg group">
          <Link href={`/games/${gameImages[currentIndex].slug}`} className="block w-full h-full relative">
            <Image
              src={gameImages[currentIndex].src}
              alt={gameImages[currentIndex].alt}
              fill
              className="object-cover transition-opacity duration-500"
              priority
            />
          </Link>

          {/* Navigation Buttons */}
          <button
            onClick={handlePrev}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white px-3 py-2 rounded-full z-10"
            aria-label="Previous Game"
          >
            ◀
          </button>
          <button
            onClick={handleNext}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white px-3 py-2 rounded-full z-10"
            aria-label="Next Game"
          >
            ▶
          </button>
        </div>

        <p className="mt-4 text-sky-400 text-lg font-medium text-center">
          {gameImages[currentIndex].title}
        </p>
      </section>

      {/* Our Games Section */}
      <section className="py-12 md:py-16 px-4 sm:px-6 lg:px-8 bg-black/20">
        <h2 className={`text-3xl md:text-4xl font-bold text-center mb-8 text-white ${textOutlineShadow}`}>
          Our Games
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {gameImages.map((game) => (
            <Link
              key={game.slug}
              href={`/games/${game.slug}`}
              className="block bg-gray-800/50 rounded-lg p-4 transition-transform duration-300 hover:scale-105 hover:shadow-xl flex-col items-center text-center cursor-pointer group"
              aria-label={`View details for ${game.title}`}
            >
              <h3 className="text-l font-semibold mb-3 text-sky-400 group-hover:text-sky-300 transition-colors">
                {game.title}
              </h3>
              <div className="w-full mb-3 aspect-video relative">
                <Image
                  src={game.src}
                  alt={game.alt}
                  fill
                  className="rounded-md object-cover"
                />
              </div>
              <p className="text-sm text-gray-300 flex-grow">Coming soon...</p>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
