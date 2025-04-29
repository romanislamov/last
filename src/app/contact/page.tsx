"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

// Define Formspree endpoint URL as a constant
const FORMSPREE_URL = "https://formspree.io/f/mldjyozl"; // Replace with your actual Formspree ID

export default function ContactUs() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    // Reset submission status if user starts typing again
    if (submitted) setSubmitted(false);
    if (error) setError(null); // Also clear error on new input

    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null); // Clear previous errors
    setSubmitted(false); // Reset submission status
    setLoading(true); // Start loading state

    try {
      const response = await fetch(FORMSPREE_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json", // Important for Formspree to return JSON
        },
        // Structure payload according to Formspree requirements
        body: JSON.stringify({
          firstName: formData.firstName,
          lastName: formData.lastName,
          _replyto: formData.email, // Use _replyto for the user's email
          message: formData.message,
          // Include any other fields you want to capture
        }),
      });

      if (response.ok) {
        // const result = await response.json(); // Optional: process success response if needed
        setSubmitted(true);
        // Reset form fields after successful submission
        setFormData({ firstName: "", lastName: "", email: "", message: "" });
      } else {
        // Try to parse the error response from Formspree
        let errorData;
        try {
            errorData = await response.json();
          } catch (_parseError) { // Variable defined here
            // Log the actual parsing error for debugging purposes
            console.error("Failed to parse Formspree error response:", _parseError); // <-- USE the variable
            // Set user-facing error message
            setError(`HTTP error ${response.status}. Failed to submit the form.`);
            return; // Exit early
          }
        // Use Formspree's error message if available, otherwise provide a generic one
        setError(errorData?.error || "Failed to submit the form. Please try again.");
      }
    } catch (err) {
      // Handle network errors or other unexpected issues
      console.error("Form submission error:", err); // Log the actual error for debugging
      setError("Network error occurred. Please check your connection and try again.");
    } finally {
      setLoading(false); // Stop loading state regardless of outcome
    }
  };

  return (
    // Assuming font-jaro is applied globally or in a layout component
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Top Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        {/* Top Left: Main Text */}
        <div className="p-6 rounded-lg flex flex-col justify-center">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
            We’re Open to Your Ideas and Feedback
          </h1>
          <p className="text-gray-200 text-sm md:text-base leading-relaxed">
            At Cyber Moon Games, we are always open to new opportunities, partnerships, and
            business proposals. If you have any suggestions or inquiries, feel free to
            reach out to us through the contact form below, and we’ll get back to you as
            soon as possible. {/* Updated Company Name */}
            <br />
            <br />
            We value constructive communication and are eager to explore ways to
            collaborate with like-minded individuals and organizations.
          </p>
        </div>

        {/* Top Right: Logo */}
        <div className="p-6 rounded-lg flex justify-center items-center">
          <Image
            src="/logo.png" // Ensure this path is correct relative to your public folder
            alt="Cyber Moon Games Logo" // Updated Alt Text
            width={300}
            height={300}
            sizes="(max-width: 768px) 50vw, 33vw"
            className="max-w-full h-auto"
            priority
          />
        </div>
      </div>

      {/* Bottom Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Bottom Left: Contact Form */}
        <div className="bg-black/50 p-6 rounded-lg">
          <h2 className="text-2xl font-bold text-white mb-4">Contact Us</h2>
          {/* Status Messages */}
          <div aria-live="polite" className="mb-4 min-h-[24px]"> {/* Reserve space for messages */}
            {submitted && (
              <p className="text-green-400">Thank you for your message! We will be in touch soon.</p>
            )}
            {error && <p className="text-red-400 font-semibold">{error}</p>}
          </div>

          <form onSubmit={handleSubmit} className="space-y-4" aria-busy={loading}>
            {/* Honeypot field for spam prevention */}
            <input
              type="text"
              name="_gotcha"
              style={{ display: "none" }}
              tabIndex={-1}
              autoComplete="off"
            />

            {/* First Name */}
            <div>
              <label htmlFor="firstName" className="block text-sm text-gray-300 mb-1">
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
                className="w-full p-2 rounded-md bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-sky-500"
                placeholder="Your first name"
                disabled={loading}
              />
            </div>

            {/* Last Name */}
            <div>
              <label htmlFor="lastName" className="block text-sm text-gray-300 mb-1">
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName} // Corrected binding
                onChange={handleChange}
                required
                className="w-full p-2 rounded-md bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-sky-500"
                placeholder="Your last name"
                disabled={loading}
              />
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm text-gray-300 mb-1">
                Email Address
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
                disabled={loading}
              />
            </div>

            {/* Message */}
            <div>
              <label htmlFor="message" className="block text-sm text-gray-300 mb-1">
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={4}
                className="w-full p-2 rounded-md bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-sky-500"
                placeholder="Your message"
                disabled={loading}
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-2 px-4 bg-sky-600 hover:bg-sky-700 text-white rounded-md transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={loading} // Disable button when loading
            >
              {loading ? "Submitting..." : "Submit"}
            </button>
          </form>
        </div>

        {/* Bottom Right: Secondary Text */}
        <div className="p-6 rounded-lg flex flex-col justify-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Stay Connected with Cyber Moon Games {/* Updated Company Name */}
          </h2>
          <p className="text-gray-200 text-sm md:text-base leading-relaxed">
            For business inquiries, please use the contact form or email us directly. We aim to respond promptly.
            <br />
            <br />
            For quicker responses and community interaction, connect with us on Telegram:
            {" "}
            <Link
              href="https://t.me/cybermoon" // Example Link - Update if needed
              target="_blank"
              rel="noopener noreferrer"
              className="text-sky-400 hover:text-sky-300 underline"
            >
              @cybermoon {/* Example Handle - Update if needed */}
            </Link>
            <br />
            <br />
            It’s a great way to stay updated with our latest news and interact directly with the team and community. :)
          </p>
        </div>
      </div>
    </div>
  );
}