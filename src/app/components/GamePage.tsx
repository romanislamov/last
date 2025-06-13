'use client';

import Image from "next/image";
import Link from "next/link";
import { useState } from 'react';

// Types
interface Game {
  slug: string;
  title: string;
  imageSrc: string;
}

interface Screenshot {
  src: string;
  alt: string;
}

const ALL_GAMES: Game[] = [
  { slug: "the-dark-lands", title: "The Dark Lands", imageSrc: "/game1.png" },
  { slug: "mini-monsters", title: "Mini Monsters: Gravity Consensus", imageSrc: "/game2.png" },
  { slug: "block-bot", title: "Block Bot: Puzzle Journey", imageSrc: "/game3.png" },
  { slug: "three-to-the-point", title: "Three to the Point", imageSrc: "/game4.png" },
];

const TEXT_OUTLINE_SHADOW = "text-shadow-[1px_1px_0_#333,-1px_1px_0_#333,1px_-1px_0_#333,-1px_-1px_0_#333]";

// Components
const OtherGameCard = ({ game }: { game: Game }) => (
  <Link
    href={`/${game.slug}`}
    className="group block rounded-lg bg-gray-800/60 p-3 transition-transform duration-300 hover:scale-105 hover:shadow-lg"
    aria-label={`View details for ${game.title}`}
  >
    <div className="mb-2 w-full">
      <Image
        src={game.imageSrc}
        alt={`${game.title} preview`}
        width={300}
        height={169}
        sizes="(max-width: 640px) 80vw, (max-width: 1024px) 40vw, 25vw"
        className="aspect-video h-auto w-full rounded object-cover"
      />
    </div>
    <h3 className="text-center text-md font-semibold text-sky-400 transition-colors group-hover:text-sky-300">
      {game.title}
    </h3>
  </Link>
);

const GameFeatures = ({ features }: { features: string[] }) => (
  <div className="mx-auto my-12 max-w-3xl">
    <h2 className={`mb-6 text-center text-2xl font-bold md:text-3xl ${TEXT_OUTLINE_SHADOW}`}>
      Key Features
    </h2>
    <ul className="list-outside list-disc space-y-2 pl-5 text-gray-300">
      {features.map((feature, index) => (
        <li key={index}>{feature}</li>
      ))}
    </ul>
  </div>
);

const GameDescription = ({ description }: { description: string[] }) => (
  <div className="mx-auto my-8 max-w-3xl space-y-4 text-sm leading-relaxed text-gray-200 md:text-base">
    {description.map((paragraph, index) => (
      <p key={index}>{paragraph}</p>
    ))}
  </div>
);

const MainGameImage = ({ imageSrc, alt }: { imageSrc: string; alt: string }) => (
  <div className="mx-auto mb-8 max-w-4xl">
    <Image
      src={imageSrc}
      alt={alt}
      width={1280}
      height={720}
      sizes="(max-width: 768px) 90vw, (max-width: 1200px) 70vw, 800px"
      className="mx-auto h-auto w-full rounded-lg shadow-lg"
      priority
    />
  </div>
);

const GameScreenshots = ({ screenshots, onImageClick }: { screenshots: Screenshot[]; onImageClick?: (src: string) => void }) => (
  <div className="mx-auto my-8 grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2">
    {screenshots.map((screenshot) => (
      <button
        key={screenshot.src}
        onClick={() => onImageClick && onImageClick(screenshot.src)}
        className="aspect-video w-full rounded transition-transform hover:scale-102"
        aria-label={`View ${screenshot.alt} in fullscreen`}
      >
        <Image
          src={screenshot.src}
          alt={screenshot.alt}
          width={800}
          height={450}
          className="h-auto w-full rounded-md object-cover shadow-md"
        />
      </button>
    ))}
  </div>
);

const FullscreenModal = ({ imageSrc, onClose }: { imageSrc: string | null; onClose: () => void }) => {
  if (!imageSrc) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Fullscreen image view"
    >
      <button
        className="absolute right-4 top-4 text-2xl text-white hover:text-gray-300"
        onClick={onClose}
        aria-label="Close fullscreen view"
      >
        ×
      </button>
      <Image
        src={imageSrc}
        alt="Fullscreen screenshot"
        width={1280}
        height={720}
        className="max-h-[90vh] max-w-[90vw] object-contain"
        onClick={(e) => e.stopPropagation()}
      />
    </div>
  );
};

const OtherGamesSection = ({ otherGames }: { otherGames: Game[] }) => (
  <section className="my-16 pt-12">
    <h2 className={`mb-8 text-center text-2xl font-bold text-white md:text-3xl ${TEXT_OUTLINE_SHADOW}`}>
      Explore Other Games
    </h2>
    <div className="mx-auto grid max-w-4xl grid-cols-1 gap-6 sm:grid-cols-3">
      {otherGames.map((game) => (
        <OtherGameCard key={game.slug} game={game} />
      ))}
    </div>
  </section>
);

// Main Component
export default function GamePage({ currentGameSlug, gameTitle, gameDescription, features, screenshots, mainImageSrc, mainImageAlt }: { currentGameSlug: string; gameTitle: string; gameDescription: string[]; features: string[]; screenshots: Screenshot[]; mainImageSrc: string; mainImageAlt: string }) {
  const [fullscreenImage, setFullscreenImage] = useState<string | null>(null);
  const otherGames = ALL_GAMES.filter((game) => game.slug !== currentGameSlug);

  const openFullscreen = (src: string) => setFullscreenImage(src);
  const closeFullscreen = () => setFullscreenImage(null);

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 font-jaro text-white sm:px-6 lg:px-8">
      <header className="mb-8 text-center">
        <h1 className={`mb-2 text-4xl font-bold md:text-5xl ${TEXT_OUTLINE_SHADOW}`}>
          {gameTitle}
        </h1>
        <p className="text-lg text-gray-300 md:text-xl">
          Casual turn-based strategy puzzle game
        </p>
      </header>

      <MainGameImage imageSrc={mainImageSrc} alt={mainImageAlt} />

      <GameDescription description={gameDescription} />

      <GameScreenshots screenshots={screenshots} onImageClick={openFullscreen} />

      <FullscreenModal imageSrc={fullscreenImage} onClose={closeFullscreen} />

      <GameFeatures features={features} />

      <OtherGamesSection otherGames={otherGames} />
    </div>
  );
}
