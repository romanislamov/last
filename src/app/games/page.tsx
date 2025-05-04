import Image from "next/image";
import Link from "next/link";

const createSlug = (title: string) => {
  return title
    .toLowerCase()
    .replace(/:/g, "")
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9-]/g, "");
};

const allGamesData = [
  {
    slug: createSlug("The Dark Lands"),
    title: "The Dark Lands",
    tagline: "Turn-based roguelike strategy in dark-fantasy style with RPG elements.",
    description:
      "An action RPG with turn-based strategy and roguelike elements set in a dark fantasy world. Battle the forces of darkness through procedurally generated maps and dynamic quests.",
    imageSrc: "/game1.png",
    altText: "The Dark Lands game preview",
  },
  {
    slug: createSlug("Mini Monsters Gravity Consensus"),
    title: "Mini Monsters: Gravity Consensus",
    tagline: "Casual turn Based Strategy Game.",
    description:
      "An exciting puzzle and strategy game combining creature collection with gravity-based mechanics. Use gravity to manipulate objects and solve complex levels.",
    imageSrc: "/game2.png",
    altText: "Mini Monsters: Gravity Consensus game preview",
  },
  {
    slug: createSlug("Block Bot Puzzle Journey"),
    title: "Block Bot: Puzzle Journey",
    tagline: "Casual turn Based Strategy Game.",
    description:
      "An engaging puzzle game combining strategy and logic. Control a unique robot to manipulate blocks, create paths, and solve increasingly complex challenges.",
    imageSrc: "/game3.png",
    altText: "Block Bot: Puzzle Journey game preview",
  },
  {
    slug: createSlug("Three to the Point"),
    title: "Three to the Point",
    tagline: "Casual turn Based Strategy Game.",
    description:
      "An immersive turn-based puzzle platformer. Control unique characters, use distinct abilities, and navigate beautifully designed islands filled with puzzles.",
    imageSrc: "/game4.png",
    altText: "Three to the Point game preview",
  },
];

export default function AllGamesPage() {
  const textOutlineShadow = "[-1px_-1px_0_#333,1px_-1px_0_#333,-1px_1px_0_#333,1px_1px_0_#333]";

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-white">
      <h1 className={`text-4xl md:text-5xl font-bold mb-10 md:mb-12 text-center ${textOutlineShadow}`}>
        Our Games
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
        {allGamesData.map((game) => (
          <Link
            key={game.slug}
            href={`/games/${game.slug}`}
            className="flex flex-col bg-gray-800/50 rounded-lg overflow-hidden transition-transform duration-300 hover:scale-[1.03] hover:shadow-xl group cursor-pointer"
            aria-label={`View details for ${game.title}`}
          >
            <div className="w-full relative">
              <Image
                src={game.imageSrc}
                alt={game.altText}
                width={600}
                height={338}
                sizes="(max-width: 768px) 90vw, 45vw"
                className="object-cover w-full h-auto aspect-video"
              />
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <div className="p-5 flex flex-col flex-grow">
              <h3 className="text-2xl font-semibold mb-2 text-sky-400 group-hover:text-sky-300 transition-colors">
                {game.title}
              </h3>
              <p className="text-sm text-gray-300 flex-grow mb-3">{game.description}</p>
              <span className="text-sky-500 group-hover:text-sky-400 text-sm font-medium mt-auto self-start">
                Learn More →
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}