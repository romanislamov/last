// src/app/about/page.tsx (or appropriate path)
"use client";

import React from "react";
import Image from "next/image";
// import Link from "next/link"; // Not needed for this component, but keep if you add links later

export default function AboutUs() {
  return (
    // Main container with padding, max-width, and font (assuming font-jaro is global or applied higher up)
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 font-jaro"> {/* Increased py for standalone page feel */}

      {/* Single Section Layout: Grid for Text and Logo */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center"> {/* Use items-center for vertical alignment */}

        {/* Left Column: Text Content */}
        <div className="p-6 rounded-lg order-2 md:order-1"> {/* Order changed for mobile view: logo first */}
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-6"> {/* Slightly increased margin-bottom */}
            About Us
          </h1>
          {/* Paragraph 1 */}
          <p className="text-gray-200 text-sm md:text-base leading-relaxed mb-4">
            We are a group of gamers who believe that the current game industry,
            dominated by large corporations focused on profit, doesnt serve the
            true spirit of gaming. At CyberMoon, we position ourselves as a team
            that creates games from gamers, for gamers, with an open,
            step-by-step development process. Our mission is to bring engaging
            and meaningful experiences to players while remaining true to our
            passion for gaming.
          </p>
          {/* Paragraph 2 */}
          <p className="text-gray-200 text-sm md:text-base leading-relaxed mb-4">
            Our team, born from a shared dream, started as a group of strangers
            brought together through a Telegram channel. We united around the
            idea of building something special — games made with heart, not just
            for profit. All of us work without payment, driven solely by our
            love for games and our belief in creating something truly remarkable.
          </p>
          {/* Paragraph 3 */}
          <p className="text-gray-200 text-sm md:text-base leading-relaxed">
            Currently, our team consists of 20 talented individuals, but that
            number is always growing as we continue to expand our reach and our
            vision. We are always open to new ideas and collaboration, so feel
            free to get in touch with us. Together, we can create the games
            that gamers deserve!
          </p>
        </div>

        {/* Right Column: Logo */}
        <div className="p-6 rounded-lg flex justify-center items-center order-1 md:order-2"> {/* Order changed */}
          <Image
            src="/logo.png" // Ensure this path is correct relative to your public folder
            alt="CyberMoon Logo"
            width={300} // Consistent width/height as used before
            height={300} // Adjust based on your logo's aspect ratio if needed
            sizes="(max-width: 768px) 50vw, 33vw" // Re-using sizes, adjust if layout differs significantly
            className="max-w-full h-auto" // Ensure it scales down
            priority // Good practice if this image is likely visible on initial load
          />
        </div>

      </div>
    </div>
  );
}