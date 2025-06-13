'use client';

import GamePage from '../components/GamePage';
const CURRENT_GAME_SLUG = 'block-bot-puzzle-journey';

const SCREENSHOTS = [
  { src: '/game31.png', alt: 'Block Bot gameplay screenshot showing puzzle mechanics' },
  { src: '/game32.png', alt: 'Block Bot gameplay screenshot showing robot navigation' },
];

export default function BlockBotPuzzleJourneyPage() {

  const gameTitle = "Block Bot: Puzzle Journey";
  const gameDescription = [
    "Block Bot: Puzzle Journey is a puzzle game blending strategy and logic. Players control a robot solving complex challenges by manipulating blocks to create paths and overcome obstacles.",
    "With unique mechanics, new block types, and increasing difficulty, the game offers engaging gameplay. Experiment with the robot's abilities to navigate traps and unlock new areas.",
    "Its minimalistic art style and rewarding puzzles make it a must-play for fans of logic and strategy games."
  ];

  const features = [
    "Clever puzzles with innovative block manipulation mechanics.",
    "Increasing complexity with new mechanics and challenging obstacles.",
    "Charming robot protagonist with diverse abilities and skills.",
    "Strategic gameplay that rewards careful planning and thinking.",
    "Varied environments with unique challenges and surprises."
  ];

  const mainImageSrc = "/game3.png";
  const mainImageAlt = "Block Bot: Puzzle Journey main artwork";

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
