import axios from "axios";
import React, { useEffect, useState } from "react";
import card from "../img/card.svg";
import { useNavigate } from "react-router-dom";
function Home() {
  let [data, setData] = useState([]);
  let [skip, setSkip] = useState(12);
  let [like, setLike] = useState([]);
  let navigation=useNavigate()

  useEffect(
    function () {
      axios
        .get(`https://dummyjson.com/products?limit=${skip}&skip=10`)
        .then((response) => {
          return setData(response.data.products);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    [skip]
  );
  console.log(data);
  function skipp() {
    setSkip((skip += 12));
  }
  function lik(id) {
   if (like.includes(id)) {
     setLike((prevLike) => prevLike.filter((item) => item !== id));
   } else {
     setLike((prevLike) => [...prevLike, id]);
   }
  }
  function details(id) {
    navigation(`/details/${id}`)
    localStorage.setItem('id',id)
  }
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
      <div className="mx-auto container w-[1200px]">
        <div className="p-6 flex flex-wrap">
          {data.map((data) => (
            <div onClick={()=>details(data.id)}
              key={data.id}
              className="mx-auto scale-3d relative bg-white rounded-2xl hover:shadow-xl w-[250px] mb-6 shadow cursor-pointer border-gray-200"
            >
              <img src={data.images[0]} alt="" className="w-full h-[200px]" />
              {like.includes(data.id) ? (
                <i className="fa-solid fa-heart absolute top-5 right-5 text-red-500"></i>
              ) : (
                <i
                  onClick={() => lik(data.id)} 
                  className="fa-regular absolute top-5 right-5 fa-heart"
                ></i>
              )}
              <div className="p-4">
                <p className="text-xs mt-2 line-clamp-2">{data.description}</p>
                <div className="text-[12px] flex items-center gap-1">
                  <i className="fa-solid fa-star text-[#FFB54C]"></i>
                  <p className="text-gray-600">
                    {data.rating} ({data.stock} otziv)
                  </p>
                </div>
                <div className="flex items-center justify-between">
                  <div className="items-center justify-between mt-3">
                    <p className="text-gray-400 text-sm line-through">
                      {data.price} so'm
                    </p>
                    <p className="text-lg font-bold">
                      {data.price -
                        data.price * (data.discountPercentage / 100)}
                    </p>
                  </div>
                  <button className="border mt-4 rounded-full w-8 h-8 text-[#BDBEC4]">
                    <img className="ml-[3px]" src={card} alt="" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="mx-auto container flex justify-center">
        <button
          onClick={skipp}
          className="w-[600px] font-semibold hover:bg-[#D0D3D9] cursor-pointer transition-all rounded-md p-4 mb-10 bg-[#E6E8ED]"
        >
          Показать ещё 10
        </button>
      </div>
    </div>
  );
}

export default Home;
