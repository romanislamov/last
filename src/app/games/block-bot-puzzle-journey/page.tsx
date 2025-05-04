import Image from "next/image";
import Link from "next/link";

const allGames = [
  { slug: "the-dark-lands", title: "The Dark Lands", imageSrc: "/game1.png" },
  { slug: "mini-monsters-gravity-consensus", title: "Mini Monsters: Gravity Consensus", imageSrc: "/game2.png" },
  { slug: "block-bot-puzzle-journey", title: "Block Bot: Puzzle Journey", imageSrc: "/game3.png" },
  { slug: "three-to-the-point", title: "Three to the Point", imageSrc: "/game4.png" },
];

const OtherGameCard = ({ game }: { game: typeof allGames[0] }) => (
  <Link
    href={`/games/${game.slug}`}
    className="block bg-gray-800/60 rounded-lg p-3 transition-transform duration-300 hover:scale-105 hover:shadow-lg group"
    aria-label={`View details for ${game.title}`}
  >
    <div className="w-full mb-2">
      <Image
        src={game.imageSrc}
        alt={`${game.title} preview`}
        width={300}
        height={169}
        sizes="(max-width: 640px) 80vw, (max-width: 1024px) 40vw, 25vw"
        className="rounded object-cover w-full h-auto aspect-video"
      />
    </div>
    <h3 className="text-md font-semibold text-center text-sky-400 group-hover:text-sky-300 transition-colors">
      {game.title}
    </h3>
  </Link>
);

export default function Game3Page() {
  const currentGameSlug = "block-bot-puzzle-journey";
  const otherGamesToShow = allGames.filter((game) => game.slug !== currentGameSlug);
  const textOutlineShadow = "[-1px_-1px_0_#333,1px_-1px_0_#333,-1px_1px_0_#333,1px_1px_0_#333]";

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 font-jaro text-white">
      <h1 className={`text-4xl md:text-5xl font-bold mb-2 text-center ${textOutlineShadow}`}>
        Block Bot: Puzzle Journey
      </h1>
      <p className="text-lg md:text-xl text-gray-300 text-center mb-8">Casual turn Based Strategy Game.</p>
      <div className="mb-8 max-w-4xl mx-auto">
        <Image
          src="/game3.png"
          alt="Block Bot main artwork"
          width={1280}
          height={720}
          sizes="(max-width: 768px) 90vw, (max-width: 1200px) 70vw, 800px"
          className="rounded-lg shadow-lg mx-auto w-full h-auto"
          priority
        />
      </div>
      <div className="max-w-3xl mx-auto my-8 space-y-4 text-gray-200 text-sm md:text-base leading-relaxed">
        <p>
          Block Bot: Puzzle Journey is an engaging puzzle game that combines strategy and logic, where
          players control a unique robot tasked with solving a series of increasingly complex
          challenges. Each level is a carefully designed puzzle that requires players to manipulate
          blocks and create paths to reach the goal.
        </p>
        <p>
          The game blends clever puzzle mechanics with an immersive experience, offering a dynamic
          gameplay experience.
        </p>
        <p>
          The core of the game lies in its unique block-manipulation mechanics, where players must move
          and arrange blocks in a way that allows the robot to progress through each level. As the game
          advances, new block types, obstacles, and interactive elements are introduced, gradually
          increasing the difficulty and requiring more thoughtful strategies.
        </p>
        <p>
          The robot itself is designed with a variety of abilities, allowing players to experiment with
          different approaches to solving each puzzle. Whether you are creating bridges, unlocking new
          areas, or navigating tricky traps, every move counts, making each level a satisfying
          challenge to complete.
        </p>
        <p>
          With its minimalistic yet charming art style and captivating puzzles, Block Bot: Puzzle
          Journey is a must-play for fans of logic puzzles and strategic thinking. It encourages
          experimentation, creativity, and problem-solving, all while keeping players entertained with
          its fun and rewarding progression system.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8 max-w-5xl mx-auto">
        <Image
          src="/game31.png"
          alt="Block Bot gameplay screenshot 1"
          width={800}
          height={450}
          className="rounded-md shadow-md w-full h-auto object-cover"
        />
        <Image
          src="/game32.png"
          alt="Block Bot gameplay screenshot 2"
          width={800}
          height={450}
          className="rounded-md shadow-md w-full h-auto object-cover"
        />
      </div>
      <div className="max-w-3xl mx-auto my-12">
        <h2 className={`text-2xl md:text-3xl font-bold mb-6 text-center ${textOutlineShadow}`}>
          Key Features
        </h2>
        <ul className="list-disc list-outside pl-5 space-y-2 text-gray-300">
          <li>Clever Puzzle Design: Each level presents unique challenges, requiring you to use blocks in innovative ways to create paths and overcome obstacles.</li>
          <li>Increased Complexity: New mechanics and obstacles appear as you progress through the game, ensuring a fresh and exciting experience with each new level.</li>
          <li>Charming Robot Protagonist: Take control of a cute yet capable robot that manipulates blocks to navigate through the puzzles, adding personality and fun to the gameplay.</li>
          <li>Strategic Gameplay: Success relies on careful planning, creative thinking, and precise execution. Every level demands a thoughtful approach, rewarding players with a sense of accomplishment.</li>
          <li>Diverse Environments: As you progress, the robot explores a variety of themed environments, each bringing new challenges and visual aesthetics to enhance the puzzle-solving experience.</li>
        </ul>
      </div>
      <section className="my-16 pt-12 border-t border-gray-700">
        <h2 className={`text-2xl md:text-3xl font-bold text-center mb-8 text-white ${textOutlineShadow}`}>
          Explore Other Games
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {otherGamesToShow.map((game) => (
            <OtherGameCard key={game.slug} game={game} />
          ))}
        </div>
      </section>
    </div>
  );
}