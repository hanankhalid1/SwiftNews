import React from "react";

const Header = () => {
  return (
    <div>
      <div className="bg-gray-900 text-white py-4">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="text-center md:text-left">
              <h1 className="text-4xl font-bold mb-4">The SwiftNews</h1>
              <p className="text-lg mb-8">
                Stay informed with SwiftNews, delivering concise updates on
                global events. Trust our reliable reporting to keep you ahead of
                the curve.
              </p>
              <a
                href="#"
                className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
              >
                Read More
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
