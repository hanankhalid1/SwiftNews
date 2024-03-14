import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-4">
  <div className="container mx-auto px-4 lg:px-0 flex flex-col lg:flex-row justify-between items-center">
    <p className="text-center lg:text-left mb-4 lg:mb-0 lg:mr-4">&copy; 2024 Hanank01. All rights reserved.</p>
    <nav className="flex flex-wrap justify-center lg:justify-end space-x-4">
      <a href="#" className="hover:text-gray-400">Privacy Policy</a>
      <a href="#" className="hover:text-gray-400">Terms of Service</a>
      <a href="#" className="hover:text-gray-400">Contact Us</a>
    </nav>
  </div>
</footer>

  )
}

export default Footer;
