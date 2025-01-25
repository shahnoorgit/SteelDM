import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="w-full border-t border-blue-200/20 bg-white/5 backdrop-blur-sm">
      <div className="container px-4 py-12 md:py-16 lg:py-20">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-5">
          {/* Brand and Description */}
          <div className="md:col-span-2">
            <span className="text-2xl font-bold text-[#AABBFF]">SteelDM</span>
            <p className="mt-4 text-sm text-blue-200">
              Revolutionize your Instagram engagement with AI-powered
              automation. Join thousands of users who trust SteelDM to grow
              their audience.
            </p>
            <div className="mt-6 flex space-x-4">
              <Link
                href="https://twitter.com"
                className="text-blue-200 hover:text-white transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-twitter"
                >
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                </svg>
              </Link>
              <Link
                href="https://instagram.com"
                className="text-blue-200 hover:text-white transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-instagram"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
              </Link>
              <Link
                href="https://linkedin.com"
                className="text-blue-200 hover:text-white transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-linkedin"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect width="4" height="12" x="2" y="9" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-blue-400">Quick Links</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link
                  href="#features"
                  className="text-sm text-blue-200 hover:text-white transition-colors"
                >
                  Features
                </Link>
              </li>
              <li>
                <Link
                  href="#pricing"
                  className="text-sm text-blue-200 hover:text-white transition-colors"
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link
                  href="#about"
                  className="text-sm text-blue-200 hover:text-white transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-sm text-blue-200 hover:text-white transition-colors"
                >
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-semibold text-blue-400">Support</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link
                  href="/contact"
                  className="text-sm text-blue-200 hover:text-white transition-colors"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  href="/faq"
                  className="text-sm text-blue-200 hover:text-white transition-colors"
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="text-sm text-blue-200 hover:text-white transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-sm text-blue-200 hover:text-white transition-colors"
                >
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter Signup */}
          <div className="md:col-span-2">
            <h3 className="text-lg font-semibold text-blue-400">
              Subscribe to Our Newsletter
            </h3>
            <p className="mt-4 text-sm text-blue-200">
              Get the latest updates, tips, and exclusive offers straight to
              your inbox.
            </p>
            <form className="mt-6 flex flex-col gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full rounded-lg border border-blue-200/20 bg-white/10 px-4 py-2 text-sm text-white placeholder-blue-200/50 focus:border-blue-400 focus:outline-none"
              />
              <Button
                type="submit"
                className="w-full bg-blue-600 text-white hover:bg-blue-700"
              >
                Subscribe
              </Button>
            </form>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 border-t border-blue-200/20 pt-8 text-center">
          <p className="text-sm text-blue-200">
            © {new Date().getFullYear()} SteelDM. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
