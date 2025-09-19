import React from "react";
import image from "/plastoGreen.png";

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 lg:px-8">
        {/* Top Section */}
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <div className="flex items-center gap-4">
            <img
              src={image}
              alt="Plasto Green"
              className="w-16 h-16 object-contain"
            />
            <p className="text-2xl font-bold text-green-700">Plasto Green</p>
          </div>

          {/* Social Icons */}
          <div className="flex gap-5">
            {[
              { name: "Facebook", href: "#", path: "M22 12c0-5.523..." },
              { name: "Instagram", href: "#", path: "M12.315 2c2.43..." },
              { name: "Twitter", href: "#", path: "M8.29 20.251c7.547..." },
              { name: "GitHub", href: "#", path: "M12 2C6.477..." },
              { name: "Dribbble", href: "#", path: "M12 2C6.48 2..." },
            ].map((icon, index) => (
              <a
                key={index}
                href={icon.href}
                target="_blank"
                rel="noreferrer"
                className="text-gray-600 hover:text-green-600 transition"
              >
                <span className="sr-only">{icon.name}</span>
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d={icon.path} />
                </svg>
              </a>
            ))}
          </div>
        </div>

        {/* Links Grid */}
        <div className="mt-10 grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-4">
          <div>
            <p className="font-semibold text-gray-900">Services</p>
            <ul className="mt-4 space-y-3 text-sm text-gray-600">
              <li>
                <a href="#" className="hover:text-green-600">
                  1on1 Coaching
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-600">
                  Company Review
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-600">
                  Accounts Review
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-600">
                  HR Consulting
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-600">
                  SEO Optimisation
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="font-semibold text-gray-900">Company</p>
            <ul className="mt-4 space-y-3 text-sm text-gray-600">
              <li>
                <a href="#" className="hover:text-green-600">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-600">
                  Meet the Team
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-600">
                  Careers
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="font-semibold text-gray-900">Helpful Links</p>
            <ul className="mt-4 space-y-3 text-sm text-gray-600">
              <li>
                <a href="#" className="hover:text-green-600">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-600">
                  FAQs
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-600">
                  Live Chat
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="font-semibold text-gray-900">Legal</p>
            <ul className="mt-4 space-y-3 text-sm text-gray-600">
              <li>
                <a href="#" className="hover:text-green-600">
                  Accessibility
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-600">
                  Returns Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-600">
                  Refund Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-600">
                  Terms & Conditions
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-10 border-t border-gray-100 pt-6 text-center">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} Plasto Green. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
