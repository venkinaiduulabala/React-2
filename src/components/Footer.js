import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const currentDate = new Date().toLocaleDateString('indian')

  return (
    <footer className="flex justify-center items-center h-20 border border-solid border-black rounded-md m-2 bg-white shadow-lg sm:bg-amber-100 lg:bg-amber-200 xl:bg-gray-200">
      <div className="text-center">
        <p className="text-sm text-gray-600 font-bold">
          @{currentYear} All rights reserved | Food Ordering Application {currentDate}
        </p>
      </div>
    </footer>
  );
};

export default Footer;