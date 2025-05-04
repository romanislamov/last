"use client";

import { useState } from "react";
import Image from "next/image";

export default function SupportUs() {
  const [formData, setFormData] = useState({
    amount: "",
    name: "",
    email: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Donation submitted:", formData);
    setFormData({ amount: "", name: "", email: "" });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 font-jaro">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <div className="p-6 rounded-lg">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Support CyberMoon: Help Us Bring Quality Games to Life
          </h1>
          <p className="text-gray-200 text-sm md:text-base leading-relaxed">
            At CyberMoon, we live by the motto <em>From Gamers, For Gamers</em>. Our goal is to create
            high-quality, innovative, and exciting games that are built with the passion and
            dedication of gamers, for gamers.
            <br />
            <br />
            Your support is crucial in helping us continue to craft the experiences you love. Every
            donation, big or small, brings us closer to developing new titles, enhancing gameplay, and
            pushing the boundaries of what we can create together.
            <br />
            <br />
            When you support us, you are not just backing a company — you are becoming part of a
            community that values quality and creativity.
            <br />
            <br />
            <strong>Together, we can make gaming better.</strong>
          </p>
        </div>
        <div className="p-6 rounded-lg flex justify-center items-center">
          <Image
            src="/logo.png"
            alt="CyberMoon Logo"
            width={0}
            height={0}
            sizes="33.33vw"
            style={{ width: "33.33vw", height: "auto" }}
            className="max-w-full"
            priority
          />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-black/50 p-6 rounded-lg">
          <h2 className="text-2xl font-bold text-white mb-4">Make a Donation</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="amount" className="block text-sm text-gray-300">
                Donation Amount ($)
              </label>
              <input
                type="number"
                id="amount"
                name="amount"
                value={formData.amount}
                onChange={handleChange}
                required
                min="1"
                className="w-full p-2 rounded-md bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-sky-500"
                placeholder="Enter amount"
              />
            </div>
            <div>
              <label htmlFor="name" className="block text-sm text-gray-300">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full p-2 rounded-md bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-sky-500"
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm text-gray-300">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full p-2 rounded-md bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-sky-500"
                placeholder="Your email"
              />
            </div>
            <button
              type="submit"
              className="w-full py-2 px-4 bg-sky-600 hover:bg-sky-700 text-white rounded-md transition-colors duration-300"
            >
              Donate Now
            </button>
          </form>
        </div>
        <div className="p-6 rounded-lg">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Donate and Make an Impact</h2>
          <p className="text-gray-200 text-sm md:text-base leading-relaxed">
            We offer multiple convenient payment options, including credit cards and various payment
            systems, so you can easily contribute to our projects.
            <br />
            <br />
            Your donation directly supports the development of new games, improvements, and features
            that will continue to deliver fun and immersive experiences.
            <br />
            <br />
            Thank you for believing in our vision — your support helps us create the games that gamers
            deserve!
          </p>
        </div>
      </div>
    </div>
  );
}