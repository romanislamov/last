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

export default function Game2Page() {
  const currentGameSlug = "mini-monsters-gravity-consensus";
  const otherGamesToShow = allGames.filter((game) => game.slug !== currentGameSlug);
  const textOutlineShadow = "[-1px_-1px_0_#333,1px_-1px_0_#333,-1px_1px_0_#333,1px_1px_0_#333]";

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 font-jaro text-white">
      <h1 className={`text-4xl md:text-5xl font-bold mb-2 text-center ${textOutlineShadow}`}>
        Mini Monsters: Gravity Consensus
      </h1>
      <p className="text-lg md:text-xl text-gray-300 text-center mb-8">Casual turn Based Strategy Game.</p>
      <div className="mb-8 max-w-4xl mx-auto">
        <Image
          src="/game2.png"
          alt="Mini Monsters main artwork"
          width={1280}
          height={720}
          sizes="(max-width: 768px) 90vw, (max-width: 1200px) 70vw, 800px"
          className="rounded-lg shadow-lg mx-auto w-full h-auto"
          priority
        />
      </div>
      <div className="max-w-3xl mx-auto my-8 space-y-4 text-gray-200 text-sm md:text-base leading-relaxed">
        <p>
          Mini Monsters: Gravitational Consensus is an exciting puzzle and strategy game that combines
          the thrill of creature collection with gravity-based mechanics. Players control adorable yet
          powerful mini monsters, each with unique abilities, as they navigate through increasingly
          complex levels filled with puzzles and challenges. The goal is to use gravity to manipulate
          objects, solve puzzles, and strategically place your creatures to complete each stage.
        </p>
        <p>
          The core mechanic of the game is gravity manipulation, allowing players to alter the
          direction of gravitational forces to move objects and monsters. This engaging mechanic
          requires clever planning and precise timing. Players will need to experiment with different
          strategies, as each level presents unique obstacles and environmental factors.
        </p>
        <p>
          As players progress, they will collect a variety of mini monsters, each with its own
          abilities and strengths. These creatures can be used to solve puzzles, defeat enemies, and
          tackle challenges. The more monsters you collect and understand their abilities, the more
          satisfying the puzzles become.
        </p>
        <p>
          The game features a vibrant world filled with diverse environments, from lush forests to
          mysterious caves, each providing a unique setting for players to explore.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8 max-w-5xl mx-auto">
        <Image
          src="/game21.png"
          alt="Mini Monsters gameplay screenshot 1"
          width={800}
          height={450}
          className="rounded-md shadow-md w-full h-auto object-cover"
        />
        <Image
          src="/game22.png"
          alt="Mini Monsters gameplay screenshot 2"
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
          <li>Gravity-Based Puzzles: Manipulate gravity to solve intricate puzzles, move objects, and use monsters abilities to overcome obstacles.</li>
          <li>Monster Collection: Collect and unlock a variety of mini monsters, each with unique skills that help in different puzzle scenarios.</li>
          <li>Challenging Levels: As you progress, the puzzles become more complex and require careful planning, creative thinking, and precise timing.</li>
          <li>Strategic Gameplay: Combine monster abilities and gravity manipulation to develop new strategies for solving each level.</li>
          <li>Vibrant Environments: Explore a diverse range of environments, each with its own challenges and aesthetic, enhancing the immersive experience.</li>
          <li>Unlockable Abilities: The more you play, the more monsters and abilities you unlock, allowing for deeper strategies and more rewarding gameplay.</li>
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