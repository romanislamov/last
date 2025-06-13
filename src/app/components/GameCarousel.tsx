'use client';
import Image from 'next/image';
interface Game {
  id: string;
  thumbnailUrl: string;
  title: string;
}
interface GameCarouselProps {
  games: Game[];
  currentIndex: number;
  onThumbnailClick: (index: number) => void;
}
export default function GameCarousel({ games, currentIndex, onThumbnailClick }: GameCarouselProps) {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <section className="scroll-mt-12">
        <div className="max-w-3xl mx-auto p-4 rounded-lg text-left">
          <h3 className="text-2xl md:text-3xl font-bold mb-8">Our Games</h3>
          <div className="grid grid-cols-4 gap-4">
            {games.map((game, index) => (
              <button
                key={game.id}
                onClick={() => onThumbnailClick(index)}
                aria-label={`Select game: ${game.title}`}
                type="button"
                className="relative"
              >
                <Image
                  src={game.thumbnailUrl}
                  alt={`${game.title} game thumbnail`}
                  width={192}
                  height={108}
                  className={`w-full h-auto object-contain rounded-md transition-all ${
                    index === currentIndex
                      ? 'ring-2 ring-gray-400 shadow-lg brightness-110'
                      : 'hover:ring-2 hover:ring-gray-500/50'
                  }`}
                />
              </button>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}