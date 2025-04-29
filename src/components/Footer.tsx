"use client";

import React from 'react';
import Link from 'next/link';
import { FaYoutube, FaInstagram } from 'react-icons/fa'; // Install react-icons if needed

interface FooterLink {
  href: string;
  label: string;
  isExternal?: boolean;
}

const navLinks: FooterLink[] = [
  { href: '/games', label: 'Games' },
  { href: '/contact', label: 'Contact' },
  { href: '/about', label: 'About' },
  { href: '/support-us', label: 'Support Us' },
];

const socialLinks: FooterLink[] = [
  { href: 'https://www.youtube.com/@CyberMoon-b4c', label: 'YouTube', isExternal: true },
  { href: 'https://www.instagram.com', label: 'Instagram', isExternal: true },
];

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white font-jaro text-shadow py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h2 className="text-2xl font-bold">CyberMoon</h2>
            <p className="mt-2 text-sm">&copy; 2025 CyberMoon. All rights reserved.</p>
          </div>

          {/* Navigation Links */}
          <div>
            <h3 className="text-lg font-semibold">Explore</h3>
            <ul className="mt-2 space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm hover:text-gray-300 transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Media Links */}
          <div>
            <h3 className="text-lg font-semibold">Follow Us</h3>
            <div className="mt-2 flex space-x-4">
              {socialLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors duration-300"
                  aria-label={link.label}
                >
                  {link.label === 'YouTube' ? (
                    <FaYoutube className="h-6 w-6" />
                  ) : (
                    <FaInstagram className="h-6 w-6" />
                  )}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;