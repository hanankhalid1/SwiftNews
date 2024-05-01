import React from "react";
import Link from "next/link";
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-4">
      <div className="container mx-auto px-4 lg:px-0 flex flex-col lg:flex-row justify-between items-center">
        <p className="text-center lg:text-left mb-4 lg:mb-0 lg:mr-4">
          &copy; 2024 Hanank01. All rights reserved.
        </p>
        <nav className="flex flex-wrap justify-center lg:justify-end space-x-4">
          <a href="#" className="hover:text-gray-400">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-gray-400">
            Terms of Service
          </a>
          <a href="#" className="hover:text-gray-400">
            Contact Us
          </a>

          <ul className="flex space-x-4 items-center">
            <li>
              <Link
                href="https://www.instagram.com/hanank.1/"
                className="hover:text-gray-400"
              >
                <FaInstagram className="h-4 w-4 text-gray-400 hover:text-blue-500" />
              </Link>
            </li>
            <li>
              <Link
                href="https://www.linkedin.com/in/hanankhalid1/"
                className="hover:text-gray-400"
              >
                <FaLinkedin className="h-4 w-4 text-gray-400 hover:text-blue-700" />
              </Link>
            </li>
            <li>
              <Link
                href="https://www.github.com/hanankhalid1"
                className="hover:text-gray-400"
              >
                <FaGithub className="h-4 w-4 text-gray-400 hover:text-purple-600" />
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
