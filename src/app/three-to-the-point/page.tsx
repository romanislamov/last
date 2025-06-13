'use client';

import GamePage from '../components/GamePage';

export default function Game4Page() {
  const currentGameSlug = "three-to-the-point";
  const gameTitle = "Three to the Point";
  const gameDescription = [
    "Three to the Point is an immersive turn-based puzzle platformer that challenges players with creative problem-solving and strategic thinking. You control a team of unique characters, each with distinct abilities, navigating through beautifully designed islands filled with puzzles and hidden secrets.",
    "The game's world evolves as you unlock new islands, each with fresh mechanics and puzzles. As you journey through colorful, hand-drawn landscapes, you will meet quirky characters who share their stories and guide you through challenges.",
    "Three to the Point offers a family-friendly experience suitable for all ages. The simple mechanics are easy to learn, but each level brings new challenges, rewarding creativity and careful planning.",
    "With vibrant visuals, charming characters, and clever puzzle designs, Three to the Point immerses players in a relaxing yet engaging world perfect for puzzle enthusiasts of all ages."
  ];

  const features = [
    "Unique puzzle mechanics using character positioning and abilities",
    "Engaging storyline with rich island history and memorable characters",
    "Vibrant hand-drawn visuals creating an immersive world",
    "Easy-to-learn mechanics with challenging puzzles",
    "Family-friendly experience for all ages"
  ];

  const screenshots = [
    { src: "/game41.png", alt: "Three to the Point gameplay screenshot 1" },
    { src: "/game42.png", alt: "Three to the Point gameplay screenshot 2" }
  ];

  const mainImageSrc = "/game4.png";
  const mainImageAlt = "Three to the Point main artwork";

  return (
    <GamePage
      currentGameSlug={currentGameSlug}
      gameTitle={gameTitle}
      gameDescription={gameDescription}
      features={features}
      screenshots={screenshots}
      mainImageSrc={mainImageSrc}
      mainImageAlt={mainImageAlt}
    />
  );
}
