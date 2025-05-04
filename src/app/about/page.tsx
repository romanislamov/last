// src/pages/about.tsx
"use client";

import Image from "next/image";

// Team Member Interface
interface TeamMember {
  id: number;
  photoUrl: string | null;
  name: string;
  position: string;
  description: string;
}

// TeamMemberCard Component
const TeamMemberCard: React.FC<TeamMember> = ({ id, photoUrl, name, position, description }) => {
  const getPlaceholderImage = (memberId: number): string =>
    `/api/placeholder/150/150?text=Member+${memberId}`;

  const imageUrl = photoUrl || getPlaceholderImage(id);

  return (
    <div className="group w-64 h-80 perspective-1000">
      <div className="relative w-full h-full duration-1400 transition-all preserve-3d group-hover:rotate-y-180">
        {/* Front Face */}
        <div className="absolute inset-0 w-full h-full bg-gray-800 rounded-lg shadow-md overflow-hidden flex flex-col items-center justify-center text-center p-4 border border-gray-700 backface-hidden">
          <div className="relative w-40 h-40 rounded-2xl overflow-hidden mb-4 border-2 border-blue-400">
            <Image
              src={imageUrl}
              alt={photoUrl ? `${name}'s photo` : `Placeholder image for ${name}`}
              fill
              className="object-cover"
              sizes="128px"
              priority
            />
          </div>
          <h3 className="text-lg font-semibold text-white">{name}</h3>
          <p className="text-sm text-blue-300">{position}</p>
        </div>

        {/* Back Face */}
        <div className="absolute inset-0 w-full h-full bg-blue-900 rounded-lg shadow-md overflow-hidden flex flex-col items-center justify-center text-center p-4 border border-blue-700 backface-hidden rotate-y-180">
          <h3 className="text-lg font-semibold text-white mb-2">{name}</h3>
          <p className="text-sm text-gray-200 leading-relaxed overflow-y-auto">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

// Sample Team Data
const teamMembers: TeamMember[] = [
  {
    id: 1,
    photoUrl: "/logo.png",
    name: "Mikhail Nadishlyn",
    position: "3d-artist",
    description: "text",
  },
  {
    id: 2,
    photoUrl: "/logo.png",
    name: "Nikol Overko",
    position: "Game promoter",
    description:
      "text",
  },
  {
    id: 3,
    photoUrl: "/logo.png",
    name: "Ilia Neronov",
    position: "Programmer",
    description:
      "text",
  },
  {
    id: 4,
    photoUrl: "/logo.png",
    name: "Igor Stanislavskiy",
    position: "Game designer",
    description:
      "Text",
  },  {
    id: 5,
    photoUrl: "/logo.png",
    name: "Kostiantyn Dzybko",
    position: "UFX Artist",
    description:
      "text",
  },  {
    id: 6,
    photoUrl: "/logo.png",
    name: "Stas Golovin",
    position: "Programmer",
    description:
      "texte",
  },  {
    id: 7,
    photoUrl: "/logo.png",
    name: "Barsik",
    position: "Game designer",
    description:
      "text",
  },  {
    id: 8,
    photoUrl: "/logo.png",
    name: "Rafael Enikeev",
    position: "Game Desinger",
    description:
      "text",
  },  {
    id: 9,
    photoUrl: "/logo.png",
    name: "Kostiantyn Semerak",
    position: "Product Manager",
    description:
      "text",
  },  {
    id: 10,
    photoUrl: "/logo.png",
    name: "Dmitry Mokrov",
    position: "Sound designer",
    description:
      "text",
  },  {
    id: 11,
    photoUrl: "/logo.png",
    name: "Dmitry grabovskii",
    position: "UI Artist",
    description:
      "text",
  },  {
    id: 12,
    photoUrl: "/logo.png",
    name: "Nikita",
    position: "3d Artist",
    description:
      "text",
  },  {
    id: 13,
    photoUrl: "/logo.png",
    name: "Anton",
    position: "QA",
    description:
      "text",
  },  {
    id: 14,
    photoUrl: "/logo.png",
    name: "Anton Mikriukov",
    position: "3d Artist",
    description:
      "text",
  },  {
    id: 15,
    photoUrl: "/logo.png",
    name: "Dmitry Shlyago",
    position: "3d Artist",
    description:
      "text",
  },  {
    id: 16,
    photoUrl: "/logo.png",
    name: "Cringe Master",
    position: "SMM",
    description:
      "text",
  },  {
    id: 17,
    photoUrl: "/logo.png",
    name: "Oreh",
    position: "Programmer",
    description:
      "text",
  },  {
    id: 18,
    photoUrl: "/logo.png",
    name: "Roman",
    position: "Web Developer",
    description:
      "text",
  },  {
    id: 19,
    photoUrl: "/logo.png",
    name: "Carol Davis",
    position: "Art Director",
    description:
      "text",
  },
  {
    id: 20,
    photoUrl: "/logo.png",
    name: "Tina Thompson",
    position: "Localization Manager",
    description:
      "text",
  },
];

// Main Component
const AboutUs: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex flex-col items-center min-h-screen text-white">
      {/* About Section */}
      <div className="p-6 rounded-lg text-center mb-16 max-w-3xl w-full">
        <h1 className="text-3xl md:text-4xl font-bold mb-12">About Us</h1>
        <p className="text-gray-200 text-sm md:text-base leading-relaxed mb-4">
          At CyberMoon, we`re a passionate group of gamers who believe the gaming industry, often
          driven by corporate profits, has lost touch with the true spirit of gaming. Our mission is to
          create games by gamers, for gamers, through an open and collaborative development process.
          We`re dedicated to delivering engaging, heartfelt experiences that resonate with players
          while staying true to our love for gaming.
        </p>
        <p className="text-gray-200 text-sm md:text-base leading-relaxed mb-4">
          Our journey began with a shared dream, sparked in a Telegram channel where strangers united
          around a bold vision: to craft games with heart, not just for profit. Every member of our
          team works voluntarily, fueled by a deep passion for games and a commitment to building
          something extraordinary.
        </p>
        <p className="text-gray-200 text-sm md:text-base leading-relaxed">
          Today, our team of {teamMembers.length} talented individuals continues to grow, and we`re always eager to
          welcome new ideas and collaborators. Join us in shaping the future of gaming—reach out and
          let`s create unforgettable games together!
        </p>
      </div>

      {/* Team Section */}
      <div className="w-full">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">Meet Our Team</h2>
        <div className="flex flex-wrap justify-center items-start gap-8">
          {teamMembers.map((member) => (
            <TeamMemberCard key={member.id} {...member} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
