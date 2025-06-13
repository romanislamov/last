'use client';
import { useState, useCallback, useMemo } from 'react';
import GameCarousel from './components/GameCarousel';
import AboutUs from './components/AboutUs';
import HeroGamePanel from './components/HeroGamePanel';

const allGames = [
  { slug: "the-dark-lands", title: "The Dark Lands", imageSrc: "/game1.png" },
  { slug: "mini-monsters", title: "Mini Monsters: Gravity Consensus", imageSrc: "/game2.png" },
  { slug: "block-bot", title: "Block Bot: Puzzle Journey", imageSrc: "/game3.png" },
  { slug: "three-to-the-point", title: "Three to the Point", imageSrc: "/game4.png" },
];

function getGameDescription(slug: string): string {
  const descriptions = {
    "the-dark-lands": "Venture into The Dark Lands, a realm of mystery and danger. Explore forgotten ruins, battle ancient evils, and uncover the secrets of a fallen kingdom.",
    "mini-monsters-gravity-consensus": "Defy gravity in Mini Monsters: Gravity Consensus! Control adorable creatures with unique abilities to overcome obstacles and restore balance to their whimsical world.",
    "block-bot": "Embark on a puzzling adventure with Block Bot! Navigate challenging levels, solve intricate puzzles, and help Block Bot find its way. A journey of logic and discovery awaits.",
    "three-to-the-point": "A minimalist puzzle game that challenges your perception and spatial reasoning. Connect the dots and reveal the hidden shapes in 'Three to the Point'."
  };
  return descriptions[slug as keyof typeof descriptions] || "";
}

function getGameDetailedDescription(slug: string): string {
  const detailedDescriptions = {
    "the-dark-lands": "An atmospheric adventure game that combines exploration, combat, and puzzle-solving. Navigate through dark and mysterious lands to uncover the truth about the fallen kingdom.",
    "mini-monsters-gravity-consensus": "A physics-based puzzle platformer where you control gravity to guide your monsters through challenging levels. Each monster has unique abilities that can be combined to solve puzzles.",
    "block-bot": "A captivating puzzle game where you guide Block Bot through increasingly complex levels. Use logic and creativity to solve each challenge and uncover the secrets of the puzzle world.",
    "three-to-the-point": "A minimalist yet challenging puzzle game that tests your spatial reasoning and pattern recognition skills. Connect dots to reveal hidden shapes and solve increasingly complex puzzles."
  };
  return detailedDescriptions[slug as keyof typeof detailedDescriptions] || "";
}

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const gamesWithSlugs = useMemo(() => {
    return allGames.map((game) => ({
      slug: game.slug,
      title: game.title,
      id: game.slug,
      imageUrl: game.imageSrc,
      thumbnailUrl: game.imageSrc,
      src: game.imageSrc,
      description: getGameDescription(game.slug),
      detailedDescription: getGameDetailedDescription(game.slug),
      alt: `${game.title} preview`,
    }));
  }, []);

  const handleThumbnailClick = useCallback((index: number) => {
    setCurrentIndex(index);
  }, []);

  const currentGame = gamesWithSlugs[currentIndex];
  const totalGames = gamesWithSlugs.length;

  if (!currentGame) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div>Loading games...</div>
      </div>
    );
  }

  return (
    <main className="flex flex-col items-center scroll-smooth min-h-screen overflow-x-hidden">
      <section className="w-full flex flex-col lg:flex-row lg:h-[calc(70vh-80px)] max-lg:min-h-[500px] mb-4">
        <HeroGamePanel
          game={currentGame}
          fallbackImage="/images/fallback-game-image.jpg"
          isHeroPanel={true}
          totalGames={totalGames}
          currentIndex={currentIndex}
          onDotClick={handleThumbnailClick}
        />
      </section>
      
      <GameCarousel
        games={gamesWithSlugs}
        currentIndex={currentIndex}
        onThumbnailClick={handleThumbnailClick}
      />
      
      <AboutUs />
    </main>
  );
}