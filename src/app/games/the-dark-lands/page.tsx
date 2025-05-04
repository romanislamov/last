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

export default function Game1Page() {
  const currentGameSlug = "the-dark-lands";
  const otherGamesToShow = allGames.filter((game) => game.slug !== currentGameSlug);
  const textOutlineShadow = "[-1px_-1px_0_#333,1px_-1px_0_#333,-1px_1px_0_#333,1px_1px_0_#333]";

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 font-jaro text-white">
      <h1 className={`text-4xl md:text-5xl font-bold mb-2 text-center ${textOutlineShadow}`}>
        Dark Lands
      </h1>
      <p className="text-lg md:text-xl text-gray-300 text-center mb-8">
        Turn-based roguelike strategy in dark-fantasy style with RPG elements.
      </p>
      <div className="mb-8 max-w-4xl mx-auto">
        <Image
          src="/game1.png"
          alt="Dark Lands main artwork"
          width={1280}
          height={720}
          sizes="(max-width: 768px) 90vw, (max-width: 1200px) 70vw, 800px"
          className="rounded-lg shadow-lg mx-auto w-full h-auto"
          priority
        />
      </div>
      <div className="max-w-3xl mx-auto my-8 space-y-4 text-gray-200 text-sm md:text-base leading-relaxed">
        <p>
          The Dark Lands is an action RPG with turn-based strategy and roguelike elements set in a
          dark fantasy world. Players take on the role of heroes battling the forces of darkness
          through procedurally generated maps, dynamic quests, and increasingly complex enemies. The
          game blends tactical combat with deep character progression, requiring players to think
          strategically and adapt their approach with every run.
        </p>
        <p>
          At the heart of the game is its tactical combat system. Players must carefully position their
          characters, use their abilities wisely, and plan each move to overcome powerful foes. As they
          progress, they unlock new skills, weapons, and powerful items to refine their team and face
          ever-growing challenges.
        </p>
        <p>
          With its dark art style, intense combat mechanics, and deep strategic gameplay, The Dark
          Lands offers a fresh and rewarding experience with each session, perfect for fans of
          challenging RPGs and strategy games.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8 max-w-5xl mx-auto">
        <Image
          src="/game11.png"
          alt="Dark Lands gameplay screenshot 1"
          width={800}
          height={450}
          className="rounded-md shadow-md w-full h-auto object-cover"
        />
        <Image
          src="/game12.png"
          alt="Dark Lands gameplay screenshot 2"
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
          <li>Tactical Combat: Engage in turn-based battles where positioning and strategy are key to victory.</li>
          <li>Procedural Generation: Each playthrough offers a unique experience with randomly generated maps and events.</li>
          <li>Character Progression: Unlock new skills, items, and abilities as you level up, tailoring your heroes to your preferred playstyle.</li>
          <li>Dynamic Story: Make choices that affect the games outcome and uncover the mysteries of a dark and immersive world.</li>
          <li>Challenging Boss Fights: Face off against powerful enemies with intricate mechanics that require careful planning and precision.</li>
          <li>Strategic Exploration: Navigate through various biomes and cities, encountering random events that shape your journey.</li>
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