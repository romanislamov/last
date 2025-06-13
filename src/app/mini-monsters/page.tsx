'use client';

import GamePage from '../components/GamePage';

export default function Game2Page() {
  const currentGameSlug = "mini-monsters-gravity-consensus";
  const gameTitle = "Mini Monsters: Gravity Consensus";
  const gameDescription = [
    "Mini Monsters: Gravitational Consensus is an exciting puzzle and strategy game that combines the thrill of creature collection with gravity-based mechanics. Players control adorable yet powerful mini monsters, each with unique abilities, as they navigate through increasingly complex levels filled with puzzles and challenges. The goal is to use gravity to manipulate objects, solve puzzles, and strategically place your creatures to complete each stage.",
    "The core mechanic of the game is gravity manipulation, allowing players to alter the direction of gravitational forces to move objects and monsters. This engaging mechanic requires clever planning and precise timing. Players will need to experiment with different strategies, as each level presents unique obstacles and environmental factors.",
    "As players progress, they will collect a variety of mini monsters, each with its own abilities and strengths. These creatures can be used to solve puzzles, defeat enemies, and tackle challenges. The more monsters you collect and understand their abilities, the more satisfying the puzzles become.",
    "The game features a vibrant world filled with diverse environments, from lush forests to mysterious caves, each providing a unique setting for players to explore."
  ];

  const features = [
    "Gravity-Based Puzzles: Manipulate gravity to solve intricate puzzles, move objects, and use monsters abilities to overcome obstacles.",
    "Monster Collection: Collect and unlock a variety of mini monsters, each with unique skills that help in different puzzle scenarios.",
    "Challenging Levels: As you progress, the puzzles become more complex and require careful planning, creative thinking, and precise timing.",
    "Strategic Gameplay: Combine monster abilities and gravity manipulation to develop new strategies for solving each level.",
    "Vibrant Environments: Explore a diverse range of environments, each with its own challenges and aesthetic, enhancing the immersive experience.",
    "Unlockable Abilities: The more you play, the more monsters and abilities you unlock, allowing for deeper strategies and more rewarding gameplay."
  ];

  const screenshots = [
    { src: "/game21.png", alt: "Mini Monsters gameplay screenshot 1" },
    { src: "/game22.png", alt: "Mini Monsters gameplay screenshot 2" }
  ];

  const mainImageSrc = "/game2.png";
  const mainImageAlt = "Mini Monsters main artwork";

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
