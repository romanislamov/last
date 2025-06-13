'use client';
import { useState } from 'react';
const AboutUs = () => {
  const [copied, setCopied] = useState(false);
  const handleCopyEmail = () => {
    navigator.clipboard.writeText('cybermoon@cyber.moon').then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1000);
    });
  };
  return (
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <section className="scroll-mt-12">
          <div className="max-w-3xl mx-auto p-4 rounded-lg text-left">
            <h2 className="text-2xl md:text-3xl font-bold mb-8">About Us</h2>
            <p className="text-sm md:text-base leading-relaxed">
              At CyberMoon Games, we are a group of passionate gamers united by a shared vision to reclaim the heart of gaming. Frustrated by an industry often swayed by corporate agendas, we are dedicated to creating engaging, authentic experiences by gamers, for gamers. Our journey began with a bold dream, cultivated voluntarily by 20 talented individuals committed to building something extraordinary, not just for profit, but out of pure love for the craft. We are growing and always seeking fresh ideas and collaborators. Join us and help create the future of gaming together.
            </p>
          </div>
          <div className="max-w-3xl mx-auto p-4 rounded-lg text-left">
            <h2 className="text-2xl md:text-3xl font-bold mb-8">Contact</h2>
            <p className="text-sm md:text-base leading-relaxed mb-8">
              At CyberMoon Games, we are always open to new opportunities, partnerships, and business proposals. If you have any suggestions or inquiries, feel free to reach out to us through our email. We will respond as soon as possible.
            </p>
            <p className="text-sm md:text-base leading-relaxed">
              Email:{' '}
              <span className="relative group inline-block">
                <a
                  href="mailto:cybermoon@cyber.moon"
                  className="font-semibold cursor-pointer"
                  onClick={(e) => {
                    e.preventDefault();
                    handleCopyEmail();
                  }}
                >
                  cybermoon@cyber.moon
                </a>
                <span
                  className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-1 hidden group-hover:block text-sm rounded py-1 px-2 whitespace-nowrap"
                >
                  {copied ? 'Copied!' : 'Click to copy'}
                </span>
              </span>
            </p>
          </div>
        </section>
      </div>
  );
};
export default AboutUs;