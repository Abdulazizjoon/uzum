import React from "react";

function Header() {
  return (
    <div className="bg-[#F0F2F5]">
      <div className="flex items-center w-[1200px] container mx-auto justify-between py-2 px-4">
        <div className="flex items-center space-x-4">
          <span className="text-gray-600">
            <i className="fa-solid fa-location-dot"></i>
          </span>
          <p className="text-blue-600">Toshkent</p>
          <a href="#" className="text-gray-700">
            Topshirish punktlari
          </a>
        </div>
        <div className="flex items-center space-x-4">
          <p className="text-purple-600">
            Sotuvchi bo‘lish
          </p>
          <p className="text-purple-600">
            Topshirish punktini ochish
          </p>
          <p className="text-gray-700">
            Savol-javob
          </p>
          <p className="text-gray-700">
            Buyurtmalarim
          </p>
          <span className="w-5 h-5 rounded-full bg-gradient-to-b from-green-500 to-blue-500 flex items-center justify-center text-white text-xs"></span>
          <p>O'zbekcha</p>
        </div>
      </div>
    </div>
  );
}

export default Header;
