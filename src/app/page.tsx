// src/app/page.tsx (or your main page file)
import React from "react";
import Image from "next/image";
import Link from 'next/link'; // Import the Link component

// Function to create simple slugs (optional, can define slugs manually)
const createSlug = (title: string) => {
  return title
    .toLowerCase()
    .replace(/:/g, '') // Remove colons
    .replace(/\s+/g, '-') // Replace spaces with hyphens
    .replace(/[^a-z0-9-]/g, ''); // Remove other invalid characters
};

// Define game data with slugs
const ourGames = [
    {
        title: "Mini Monsters : Gravity Consensus",
        description: "A charming 2d puzzle game with gravity - based mechanics",
        imageSrc: "/game2.png",
        altText: "Mini Monsters: Gravity Consensus game preview",
        slug: createSlug("Mini Monsters Gravity Consensus"), // "mini-monsters-gravity-consensus"
    },
    {
        title: "Block Bot: Puzzle Journey",
        description: "BlockBot is a shape-shifting puzzle adventure in a vibrant pixel world.",
        imageSrc: "/game3.png",
        altText: "Block Bot: Puzzle Journey game preview",
        slug: createSlug("Block Bot Puzzle Journey"), // "block-bot-puzzle-journey"
    },
    {
        title: "Three to the Point",
        description: "Casual turn Based Strategy Game.",
        imageSrc: "/game4.png",
        altText: "Three to the Point game preview",
        slug: createSlug("Three to the Point"), // "three-to-the-point"
    },
    {
        title: "The Dark Lands",
        description: "Roguelike - turn based strategy with RPG elements",
        imageSrc: "/game1.png",
        altText: "The Dark Lands game preview",
        slug: createSlug("The Dark Lands"), // "the-dark-lands"
    },
];

// Define slug for the upcoming game (assuming it's 'The Dark Lands')
const upcomingGameSlug = createSlug("The Dark Lands"); // "the-dark-lands"


export default function Home() {
    // Define text shadow for outline effect - subtle dark gray outline
    const textOutlineShadow =
        "[-1px_-1px_0_#333,1px_-1px_0_#333,-1px_1px_0_#333,1px_1px_0_#333]";

    return (
        <>

            {/* Main Content Area */}
            <main className="font-jaro bg-gradient-to-b from-gray-900 via-black to-gray-900 text-white">

                {/* Hero Section - Reduced Height */}
                <section className="flex flex-col justify-center items-center text-center px-4 pt-32 pb-16 md:pt-40 md:pb-20">
                    <h1
                        className={`text-5xl sm:text-6xl md:text-7xl font-bold mb-4 text-white ${textOutlineShadow}`}
                    >
                        Cyber Moon Games
                    </h1>
                    <p
                        className="text-lg md:text-xl text-gray-300"
                    >
                        From gamers to gamers
                    </p>
                </section>

                {/* Upcoming Games Section - Image Wrapped in Link */}
                <section className="py-12 md:py-16 px-4 sm:px-6 lg:px-8">
                    <h2
                        className={`text-3xl md:text-4xl font-bold text-center mb-8 text-white ${textOutlineShadow}`}
                    >
                        Upcoming Games
                    </h2>
                    <div className="max-w-4xl mx-auto group"> {/* Added group for potential hover effects */}
                        <Link href={`/games/${upcomingGameSlug}`} className="block cursor-pointer" aria-label={`View details for upcoming game: The Dark Lands`}>
                           {/* Make the image container clickable */}
                            <Image
                                src="/game1.png"
                                alt="Upcoming CyberMoon Game Preview"
                                width={1280}
                                height={720}
                                sizes="(max-width: 768px) 90vw, (max-width: 1200px) 70vw, 800px"
                                className="rounded-lg shadow-lg mx-auto w-full h-auto transition-transform duration-300 group-hover:scale-105" // Example hover effect
                                priority
                            />
                        </Link>
                        <p className="text-center text-gray-400 mt-4 text-lg">
                            Stay tuned for more details on our next adventure!
                        </p>
                    </div>
                </section>

                {/* Our Games Section - Cards Wrapped in Link */}
                <section className="py-12 md:py-16 px-4 sm:px-6 lg:px-8 bg-black/20">
                    <h2
                        className={`text-3xl md:text-4xl font-bold text-center mb-8 text-white ${textOutlineShadow}`}
                    >
                        Our Games
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
                        {ourGames.map((game) => (
                            // Wrap the entire card div in a Link component
                            <Link
                                key={game.slug} // Use slug as key for consistency if titles are unique
                                href={`/games/${game.slug}`}
                                className="block bg-gray-800/50 rounded-lg p-4 transition-transform duration-300 hover:scale-105 hover:shadow-xl flex-col items-center text-center cursor-pointer group" // Apply styles to Link, make it block
                                aria-label={`View details for ${game.title}`}
                            >
                                <h3 className="text-xl font-semibold mb-3 text-sky-400 group-hover:text-sky-300 transition-colors"> {/* Change color on hover */}
                                    {game.title}
                                </h3>
                                <div className="w-full mb-3">
                                    <Image
                                        src={game.imageSrc}
                                        alt={game.altText}
                                        width={400}
                                        height={225}
                                        sizes="(max-width: 640px) 80vw, (max-width: 1024px) 40vw, 25vw"
                                        className="rounded-md object-cover w-full h-auto aspect-video" // Image itself doesn't need hover effect if card has it
                                    />
                                </div>
                                <p className="text-sm text-gray-300 flex-grow">
                                    {game.description}
                                </p>
                            </Link> // End Link wrapper for the card
                        ))}
                    </div>
                </section>

                {/* Footer placeholder */}
                {/* <footer className="py-8 text-center text-gray-500"> Footer Content Here </footer> */}

            </main>
        </>
    );
}