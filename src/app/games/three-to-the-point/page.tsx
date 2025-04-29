// Example Path: src/components/GamePages/Game4Page.tsx
// Or integrate into src/app/games/three-to-the-point/page.tsx

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

// Data for all games (needed for "Other Games" section) - reuse or import
const allGames = [
    { slug: 'the-dark-lands', title: 'The Dark Lands', imageSrc: '/game1.png' },
    { slug: 'mini-monsters-gravity-consensus', title: 'Mini Monsters: Gravity Consensus', imageSrc: '/game2.png' },
    { slug: 'block-bot-puzzle-journey', title: 'Block Bot: Puzzle Journey', imageSrc: '/game3.png' },
    { slug: 'three-to-the-point', title: 'Three to the Point', imageSrc: '/game4.png' },
];

// Helper component for the "Other Games" card - reuse or import
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
                height={169} // 16:9 aspect ratio
                sizes="(max-width: 640px) 80vw, (max-width: 1024px) 40vw, 25vw"
                className="rounded object-cover w-full h-auto aspect-video"
            />
        </div>
        <h3 className="text-md font-semibold text-center text-sky-400 group-hover:text-sky-300 transition-colors">
            {game.title}
        </h3>
    </Link>
);


export default function Game4Page() {
    const currentGameSlug = 'three-to-the-point';
    const otherGamesToShow = allGames.filter(game => game.slug !== currentGameSlug);
    const textOutlineShadow = "[-1px_-1px_0_#333,1px_-1px_0_#333,-1px_1px_0_#333,1px_1px_0_#333]";

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 font-jaro text-white">

            {/* Header */}
            <h1 className={`text-4xl md:text-5xl font-bold mb-2 text-center ${textOutlineShadow}`}>
                Three to the Point
            </h1>
             <p className="text-lg md:text-xl text-gray-300 text-center mb-8">
                 Casual turn Based Strategy Game
             </p>

            {/* Main Image */}
            <div className="mb-8 max-w-4xl mx-auto">
                <Image
                    src="/game4.png" // Use game4.png
                    alt="Three to the Point main artwork"
                    width={1280}
                    height={720}
                    sizes="(max-width: 768px) 90vw, (max-width: 1200px) 70vw, 800px"
                    className="rounded-lg shadow-lg mx-auto w-full h-auto"
                    priority
                />
            </div>

            {/* Description */}
            <div className="max-w-3xl mx-auto my-8 space-y-4 text-gray-200 text-sm md:text-base leading-relaxed">
                 <p>
                     Three to the Point is an immersive turn-based puzzle platformer that challenges players with creative problem-solving and strategic thinking. You control a team of unique characters, each with distinct abilities, navigating through beautifully designed islands filled with puzzles and hidden secrets. The goal is simple: plan your moves, position your characters strategically, and solve intricate puzzles to progress.
                 </p>
                 <p>
                     The game’s world evolves as you unlock new islands, each with fresh mechanics and puzzles. As you journey through colorful, hand-drawn landscapes, you will meet quirky characters who share their stories, provide hints, and guide you through challenges.
                 </p>
                 <p>
                     Three to the Point offers a family-friendly experience suitable for all ages. The simple mechanics are easy to learn, but each level brings new challenges, rewarding creativity and careful planning. Even the simplest puzzles have multiple solutions, making every move count.
                 </p>
                 <p>
                    With vibrant visuals, charming characters, and clever puzzle designs, Three to the Point immerses players in a relaxing yet engaging world. Whether you are a casual gamer or puzzle enthusiast, you will enjoy unlocking new islands, solving puzzles, and uncovering the story, making this the perfect game for a relaxing yet intellectually stimulating adventure.
                 </p>
            </div>

            {/* Secondary Images */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8 max-w-5xl mx-auto">
                <Image
                    src="/game41.png" // Make sure this image exists
                    alt="Three to the Point gameplay screenshot 1"
                    width={800}
                    height={450}
                    className="rounded-md shadow-md w-full h-auto object-cover"
                />
                <Image
                    src="/game42.png" // Make sure this image exists
                    alt="Three to the Point gameplay screenshot 2"
                    width={800}
                    height={450}
                    className="rounded-md shadow-md w-full h-auto object-cover"
                />
            </div>

            {/* Key Features */}
            <div className="max-w-3xl mx-auto my-12">
                <h2 className={`text-2xl md:text-3xl font-bold mb-6 text-center ${textOutlineShadow}`}>
                    Key Features
                </h2>
                 <ul className="list-disc list-outside pl-5 space-y-2 text-gray-300">
                     <li>Unique Puzzle Mechanics: Solve puzzles by positioning your characters and using their abilities in creative ways.</li>
                     <li>Engaging Storyline: Discover the rich history of the islands and meet characters that guide you on your journey.</li>
                     <li>Vibrant Visuals: Enjoy beautifully hand-drawn islands and characters that create a charming, immersive world.</li>
                     <li>Casual Yet Challenging: Perfect for players of all ages, with easy-to-learn mechanics but challenging puzzles that keep you coming back.</li>
                     <li>Family-Friendly: A fun and relaxing experience for players of all ages to enjoy together.</li>
                 </ul>
            </div>

             {/* Other Games Section */}
             <section className="my-16 pt-12 border-t border-gray-700">
                 <h2 className={`text-2xl md:text-3xl font-bold text-center mb-8 text-white ${textOutlineShadow}`}>
                     Explore Other Games
                 </h2>
                 <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
                     {otherGamesToShow.map(game => (
                         <OtherGameCard key={game.slug} game={game} />
                     ))}
                 </div>
             </section>

        </div>
    );
}