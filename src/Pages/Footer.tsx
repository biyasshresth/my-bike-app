import React from "react";
import { FaFacebook, FaYoutube, FaInstagram } from "react-icons/fa";

interface FooterProps {
  transparent?: boolean;
}

const Footer: React.FC<FooterProps> = ({ transparent }) => {
  return (
    <footer
      className={`w-full py-10 px-6 ${
        transparent ? "bg-transparent" : "bg-gray-900"
      } border-t border-gray-700 text-white`}
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">

        {/* Logo Section */}
        <div className="flex flex-col items-start">
          <img
            src="YamahaLogo.svg"
            alt="Yamaha Logo"
            className="w-20 h-auto mb-3"
          />
          <h2 className="text-2xl font-extrabold tracking-wide text-purple-800 uppercase">
            Yamaha
          </h2>
          <p className="text-sm text-gray-300 mt-2 max-w-[220px]">
            Inspiring riders with <br /> innovation & performance.
          </p>
        </div>

        {/* MT-15 World */}
        <div>
          <h3 className="font-bold uppercase mb-4 text-lg">MT-15 World</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>
              <a
                href="/yamaha-news-page"
                className="hover:text-blue-400 transition-colors"
              >
                News & Blogs
              </a>
            </li>
            <li>
              <a
                href="/racing-page"
                className="hover:text-blue-400 transition-colors"
              >
                Racing Page
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/mt15ridersnepal_official/?hl=en"
                className="hover:text-blue-400 transition-colors"
              >
                Ride MT-15
              </a>
            </li>
          </ul>
        </div>

        {/* Service */}
        <div>
          <h3 className="font-bold uppercase mb-4 text-lg">Service</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>
              <a href="/faq" className="hover:text-blue-400">
                FAQ
              </a>
            </li>
            <li>
              <a href="/maintainance" className="hover:text-blue-400">
                Maintenance
              </a>
            </li>
            <li>
              <a
                href="/spare-parts"
                className="hover:text-blue-400 transition-colors"
              >
                Spare Parts
              </a>
            </li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h3 className="font-bold uppercase mb-4 text-lg">Legal</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>
              <a href="/legal-notices-yamaha" className="hover:text-blue-400">
                Legal Notices
              </a>
            </li>
            <li>
              <a href="/terms-policy" className="hover:text-blue-400">
                Terms of Use
              </a>
            </li>
            <li>
              <a href="/privacy-policy" className="hover:text-blue-400">
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>

        {/* Connect */}
        <div>
          <h3 className="font-bold uppercase mb-4 text-lg">Connect</h3>
          <div className="flex gap-5 mt-2">
            <a
              href="https://www.youtube.com/c/YamahaNepal"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
              className="hover:text-blue-400"
            >
              <FaYoutube size={24} />
            </a>
            <a
              href="https://www.facebook.com/YamahaNepal"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="hover:text-blue-400"
            >
              <FaFacebook size={22} />
            </a>
            <a
              href="https://www.instagram.com/yamaha_scooters_nepal"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="hover:text-blue-400"
            >
              <FaInstagram size={22} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom small text */}
      <div className="text-center text-xs text-gray-400 mt-10">
        © {new Date().getFullYear()} Yamaha Nepal. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
