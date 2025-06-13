'use client';

import GamePage from '../components/GamePage';

const CURRENT_GAME_SLUG = "the-dark-lands";

const SCREENSHOTS = [
  { src: "/game11.png", alt: "Dark Lands gameplay screenshot showing tactical combat mechanics" },
  { src: "/game12.png", alt: "Dark Lands gameplay screenshot showing character progression and abilities" },
];

export default function TheDarkLandsPage() {
  const gameTitle = "The Dark Lands";
  const gameDescription = [
    "The Dark Lands is an action RPG with turn-based strategy and roguelike elements set in a dark fantasy world. Players take on the role of heroes battling the forces of darkness through procedurally generated maps, dynamic quests, and increasingly complex enemies. The game blends tactical combat with deep character progression, requiring players to think strategically and adapt their approach with every run.",
    "At the heart of the game is its tactical combat system. Players must carefully position their characters, use their abilities wisely, and plan each move to overcome powerful foes. As they progress, they unlock new skills, weapons, and powerful items to refine their team and face ever-growing challenges.",
    "With its dark art style, intense combat mechanics, and deep strategic gameplay, The Dark Lands offers a fresh and rewarding experience with each session, perfect for fans of challenging RPGs and strategy games."
  ];

  const features = [
    "Tactical Combat: Engage in turn-based battles where positioning and strategy are key to victory.",
    "Procedural Generation: Each playthrough offers a unique experience with randomly generated maps and events.",
    "Character Progression: Unlock new skills, items, and abilities as you level up, tailoring your heroes to your preferred playstyle.",
    "Dynamic Story: Make choices that affect the game's outcome and uncover the mysteries of a dark and immersive world.",
    "Challenging Boss Fights: Face off against powerful enemies with intricate mechanics that require careful planning and precision.",
    "Strategic Exploration: Navigate through various biomes and cities, encountering random events that shape your journey."
  ];

  const mainImageSrc = "/game1.png";
  const mainImageAlt = "The Dark Lands main artwork showcasing the dark fantasy world and heroes";

  return (
    <GamePage
      currentGameSlug={CURRENT_GAME_SLUG}
      gameTitle={gameTitle}
      gameDescription={gameDescription}
      features={features}
      screenshots={SCREENSHOTS}
      mainImageSrc={mainImageSrc}
      mainImageAlt={mainImageAlt}
    />
  );
}
