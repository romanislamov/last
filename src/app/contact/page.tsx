"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const FORMSPREE_URL = "https://formspree.io/f/mldjyozl";

export default function ContactUs() {
  const [formData, setFormData] = useState({
    firstName: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    if (submitted) setSubmitted(false);
    if (error) setError(null);
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSubmitted(false);
    setLoading(true);

    try {
      const response = await fetch(FORMSPREE_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          firstName: formData.firstName,
          _replyto: formData.email,
          message: formData.message,
        }),
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({ firstName: "", email: "", message: "" });
      } else {
        let errorData;
        try {
          errorData = await response.json();
        } catch (_parseError) {
          console.error("Failed to parse Formspree error response:", _parseError);
          setError(`HTTP error ${response.status}. Failed to submit the form.`);
          return;
        }
        setError(errorData?.error || "Failed to submit the form. Please try again.");
      }
    } catch (err) {
      console.error("Form submission error:", err);
      setError("Network error occurred. Please check your connection and try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div className="p-6 rounded-lg flex flex-col justify-center">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
            We are open for your ideas and feedback
          </h1>
          <p className="text-gray-200 text-sm md:text-base leading-relaxed">
            At CyberMoon Games, we are always open to new opportunities, partnerships, and business
            proposals. If you have any suggestions or inquiries, feel free to reach out to us through
            the contact form below, and we will answer to you as soon as possible. We value constructive communication and are eager to explore ways to collaborate with
            like-minded individuals and organizations.
          </p>
        </div>
        <div className="p-6 rounded-lg flex justify-center items-center">
          <Image
            src="/logo.png"
            alt="Cyber Moon Games Logo"
            width={600}
            height={600}
            sizes="(max-width: 900px) 60vw, 40vw"
            className="max-w-full h-auto"
            priority
          />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-black/50 p-6 rounded-lg">
          <h2 className="text-2xl font-bold text-white mb-4">Contact Us</h2>
          <div aria-live="polite" className="mb-4 min-h-[24px]">
            {submitted && (
              <p className="text-green-400">Thank you for your message! We will be in touch soon.</p>
            )}
            {error && <p className="text-red-400 font-semibold">{error}</p>}
          </div>
          <form onSubmit={handleSubmit} className="space-y-4" aria-busy={loading}>
            <input type="text" name="_gotcha" style={{ display: "none" }} tabIndex={-1} autoComplete="off" />
            <div>
              <label htmlFor="firstName" className="block text-sm text-gray-300 mb-1">
                Full Name
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
                className="w-full p-2 rounded-md bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-sky-500"
                placeholder="Full Name"
                disabled={loading}
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm text-gray-300 mb-1">
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
                placeholder="Email"
                disabled={loading}
              />
            </div>
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
                rows={3}
                className="w-full p-2 rounded-md bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-sky-500"
                placeholder="Your message"
                disabled={loading}
              />
            </div>
            <button
              type="submit"
              className="w-full py-2 px-4 bg-sky-600 hover:bg-sky-700 text-white rounded-md transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={loading}
            >
              {loading ? "Submitting..." : "Submit"}
            </button>
          </form>
        </div>
        <div className="p-6 rounded-lg flex flex-col justify-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Stay connected with CyberMoon Games
          </h2>
          <p className="text-gray-200 text-sm md:text-base leading-relaxed">
            For business inquiries, please use the contact form.
            <br />
            <br />
            For quicker responses connect with us on Telegram:{" "}
            <Link
              href="https://t.me/cybermoondev"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sky-400 hover:text-sky-300"
            >
              @cybermoon
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}