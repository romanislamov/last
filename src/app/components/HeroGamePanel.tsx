'use client';
import Link from 'next/link';
import Image from 'next/image';
interface GameProps {
  slug: string;
  title: string;
  description: string;
  detailedDescription: string;
  imageUrl: string;
}
interface HeroGamePanelProps {
  game: GameProps;
  fallbackImage: string;
  isHeroPanel?: boolean;
  isLargeScreen?: boolean;
  totalGames?: number;
  currentIndex?: number;
  onDotClick?: (index: number) => void;
}
export default function HeroGamePanel({
  game,
  isHeroPanel = false,
  isLargeScreen = false,
  totalGames = 0,
  currentIndex = 0,
  onDotClick,
}: HeroGamePanelProps) {
  if (isHeroPanel) {
    return (
      <div className="flex flex-col lg:flex-row w-full h-[50vh] lg:h-[70vh]">
        <div className="w-full lg:w-2/3 xl:w-3/4 relative order-1 lg:order-none">
          <Link
            href={`/${game.slug}`}
            className="block w-full h-full focus:outline-none"
            aria-label={`View details for ${game.title}`}
          >
            <Image
              src={game.imageUrl}
              alt={`Featured game: ${game.title}`}
              fill
              style={{
                objectFit: 'contain',
                objectPosition: 'center center'
              }}
              priority
              sizes="(min-width: 1280px) 75vw, (min-width: 1024px) 66vw, 100vw"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.alt = 'Error loading image. Displaying fallback.';
              }}
            />
          </Link>
        </div>
        <div className="w-full lg:w-1/3 xl:w-1/4 flex flex-col order-2 lg:order-none p-6 sm:p-8 md:p-10">
          <div className="flex flex-col h-full justify-between">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                {game.title.toUpperCase()}
              </h2>
              <Link
                href={`/${game.slug}`}
                className="inline-block border-2 border-white font-bold py-3 px-8 rounded-none hover:bg-white hover:text-black transition-colors duration-300 text-sm tracking-wider"
              >
                More
              </Link>
            </div>
            <div className="mt-auto pt-8">
              {totalGames > 0 && (
                <div className="flex space-x-3 mb-6">
                  {Array.from({ length: Math.min(totalGames, 4) }).map((_, index) => (
                    <button
                      key={index}
                      onClick={() => onDotClick && onDotClick(index)}
                      className={`w-4 h-4 rounded-full transition-colors duration-300 focus:outline-none ${
                        currentIndex === index
                          ? 'bg-white'
                          : 'bg-neutral-600 hover:bg-neutral-400'
                      }`}
                      aria-label={`View item ${index + 1}`}
                      disabled={!onDotClick && currentIndex !== index}
                    />
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div
      className={`$${
        isLargeScreen
          ? 'hidden lg:block space-y-8 lg:pl-8'
          : 'lg:hidden space-y-6 mt-4'
      }`}
    >
      <div className="space-y-6">
        <div className="space-y-2">
          <h2
            className={`text-3xl ${
              isLargeScreen ? 'lg:text-4xl' : ''
            } font-bold ${
              isLargeScreen ? 'text-white' : 'text-sky-300'
            }`}
          >
            {game.title}
          </h2>
        </div>
        <div className="space-y-4">
          <p className="text-white text-sm lg:text-base leading-relaxed">
            {game.description}
          </p>
          <p className="text-white text-sm lg:text-base leading-relaxed">
            {game.detailedDescription}
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 pt-4">
          <Link
            href={`/${game.slug}`}
            className="border border-white hover:bg-white hover:text-black font-semibold py-2 px-8 rounded-lg transition-colors duration-300 text-center"
          >
            More
          </Link>
        </div>
      </div>
    </div>
  );
}