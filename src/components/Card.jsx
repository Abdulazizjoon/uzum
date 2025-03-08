import React from "react";

function Card() {
  return (
    <div>
      <div className="flex mt-2 mx-auto container w-[1200px] items-center justify-between px-4 py-2">
        <div className="flex items-center space-x-2">
          <span className="text-xl font-bold text-purple-700">uzum market</span>
        </div>
        <div className="flex relative space-x-4">
          <button className="px-4 py-2 bg-purple-100 text-purple-700 rounded-lg">
            Katalog
          </button>
          <input
            type="text"
            placeholder="Mahsulotlar va turkumlar izlash"
            className="px-4 py-2 w-[450px] border rounded-lg"
          />
          <div className="absolute right-4 h-full -z-10 w-20 bg-purple-100 rounded-tr-lg rounded-br-lg">
            <i className="fa-solid fa-magnifying-glass ml-[40%] mt-[15px]"></i>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <div className="cursor-pointer">
            <i className="fa-regular fa-user"></i>
            <span className="mr-8 ml-2.5">Kirish</span>
          </div>
          <div className="cursor-pointer">
            <i className="fa-regular fa-heart"></i>
            <span className="mr-8 ml-2.5">Saralangan</span>
          </div>
          <div className="cursor-pointer">
            <i className="fa-solid fa-bag-shopping"></i>
            <span className="mr-8 ml-2.5">Savat</span>
          </div>
        </div>
      </div>
      <div className="flex mt-2 mb-5 mx-auto w-[1200px] text-[14px] items-center bg-white">
        <div className="flex items-center">
          <h1 className="text-xl font-bold text-gray-800">Hafta tovarlar!</h1>
        </div>
        <div className="flex items-center">
          <ul className="items-center flex gap-5">
            <li className="text-gray-700 ml-4 cursor-pointer relative group">
              <strong>Har kuni foyda</strong>
              <span className="absolute left-0 bottom-[-2px] w-0 h-[2px] bg-black transition-all duration-300 group-hover:w-full"></span>
            </li>
            <li className="text-gray-700 cursor-pointer relative group">
              Elektronika
              <span className="absolute left-0 bottom-[-2px] w-0 h-[2px] bg-black transition-all duration-300 group-hover:w-full"></span>
            </li>
            <li className="text-gray-700 cursor-pointer relative group">
              Maishiy texnika
              <span className="absolute left-0 bottom-[-2px] w-0 h-[2px] bg-black transition-all duration-300 group-hover:w-full"></span>
            </li>
            <li className="text-gray-700 cursor-pointer relative group">
              Kiyim
              <span className="absolute left-0 bottom-[-2px] w-0 h-[2px] bg-black transition-all duration-300 group-hover:w-full"></span>
            </li>
            <li className="text-gray-700 cursor-pointer relative group">
              Poyabzallar
              <span className="absolute left-0 bottom-[-2px] w-0 h-[2px] bg-black transition-all duration-300 group-hover:w-full"></span>
            </li>
            <li className="text-gray-700 cursor-pointer relative group">
              Aksessuarlar
              <span className="absolute left-0 bottom-[-2px] w-0 h-[2px] bg-black transition-all duration-300 group-hover:w-full"></span>
            </li>
            <li className="text-gray-700 cursor-pointer relative group">
              Goʻzallik va parvarish
              <span className="absolute left-0 bottom-[-2px] w-0 h-[2px] bg-black transition-all duration-300 group-hover:w-full"></span>
            </li>
            <li className="text-gray-700 cursor-pointer relative group">
              Sport mollari
              <span className="absolute left-0 bottom-[-2px] w-0 h-[2px] bg-black transition-all duration-300 group-hover:w-full"></span>
            </li>
            <li className="text-gray-700 cursor-pointer relative group">
              Uy-roʻzgʻor buyumlari!
              <span className="absolute left-0 bottom-[-2px] w-0 h-[2px] bg-black transition-all duration-300 group-hover:w-full"></span>
            </li>
            <li className="text-gray-700 cursor-pointer relative group">
              Yana
              <span className="absolute left-0 bottom-[-2px] w-0 h-[2px] bg-black transition-all duration-300 group-hover:w-full"></span>
            </li>
          </ul>
        </div>
      </div>
      <div className="max-w-4xl mx-auto p-6 space-y-4">
        <h2 className="text-2xl font-bold">Savat</h2>

        <div className="bg-white p-4 rounded-lg shadow-md flex items-center gap-4">
          <input
            type="checkbox"
            className="w-5 h-5 text-purple-600"
            defaultChecked
          />
          <img
            src="https://via.placeholder.com/80"
            alt="Fairy Limon"
            className="w-16 h-16 rounded"
          />
          <div className="flex flex-col flex-1">
            <span className="text-gray-500 text-sm">Uzum Market omborida</span>
            <span className="font-semibold text-lg">
              Idish yuvish uchun Fairy, Limon, 450ml
            </span>
            <span className="text-gray-500 text-sm">
              Sotuvchi: The Procter & Gamble Company
            </span>
            <div className="flex items-center mt-2">
              <button className="px-3 py-1 border rounded">-</button>
              <span className="mx-3">1</span>
              <button className="px-3 py-1 border rounded">+</button>
            </div>
          </div>
          <div className="text-right">
            <span className="text-lg font-bold text-purple-600">
              14 990 so'm
            </span>
            <span className="block text-gray-400 line-through">
              25 990 so'm
            </span>
          </div>
        </div>

        <div className="bg-white p-4 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold">Buyurtmangiz</h3>
          <div className="flex justify-between text-gray-600 mt-2">
            <span>Mahsulotlar (1):</span>
            <span>25 990 so'm</span>
          </div>
          <div className="flex justify-between font-bold text-xl mt-2">
            <span>Jami:</span>
            <span className="text-purple-600">14 990 so'm</span>
          </div>
          <p className="text-green-600 mt-1">Tejovingiz: 11 000 so'm</p>
          <button className="w-full bg-purple-600 text-white py-2 rounded-lg mt-4 hover:bg-purple-700 transition">
            Rasmiylashtirishga o'tish
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
