import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto text-center">
        <h1 className="text-2xl font-bold">Foodies</h1>
        <p className="text-sm text-gray-400">Serves the best dishes in town.</p>

        <div className="flex justify-center space-x-6 mt-4">
          <FaFacebook className="text-gray-400 hover:text-white" />
          <FaInstagram className="text-gray-400 hover:text-white" />
          <FaTwitter className="text-gray-400 hover:text-white" />
        </div>

        <div className="text-gray-500 text-sm mt-4">
          © 2024 Foodies. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
