import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addToCart } from "../store/card";
import { ToastContainer, toast } from "react-toastify";

function Details() {
  let [data, setData] = useState([]);
  let [id, setId] = useState();
  let [counter, setCounter] = useState(0);
  let dispatch = useDispatch();
  let navigate = useNavigate();
  useEffect(() => {
    setId(localStorage.getItem("id"));
  }, []);

  useEffect(() => {
    if (id) {
      axios
        .get(`https://dummyjson.com/product/${id}`)
        .then((response) => {
          setData(response.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [id]);

  function card() {
    navigate("/card");
  }
  function notify() {
    toast.success("mahsulot savatga qoshildi");
  }
  console.log(data);
  function hom() {
    navigation("/");
  }

  return (
    <div>
      <div className="flex mt-2 mx-auto container w-[1200px] items-center justify-between px-4 py-2">
        <div className="flex items-center space-x-2">
          <span onClick={hom} className="text-xl font-bold text-purple-700">uzum market</span>
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
          <div className="cursor-pointer" onClick={card}>
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
      {data && (
        <div className="mx-auto container gap-5 flex w-[1200px]">
          <div className="w-[65%]">
            <div>
              <h2 className="text-xl font-semibold">{data.description}</h2>
              <div className="mt-5 flex items-center">
                <div className="flex mr-6 gap-1">
                  <i className="fa-solid fa-star text-[#F5A623]"></i>
                  <i className="fa-solid fa-star text-[#F5A623]"></i>
                  <i className="fa-solid fa-star text-[#F5A623]"></i>
                  <i className="fa-solid fa-star text-[#F5A623]"></i>
                </div>
                <div className="text-[#7E818C] flex">
                  <p>
                    {data.rating} ({data?.reviews && data.reviews.length} sharh)
                  </p>
                  <p className="ml-2">
                    {data?.images && data.images.length} fotosurat
                  </p>
                </div>
              </div>
            </div>
            <div className="flex gap-10">
              <img src={data?.images?.[0]} className="w-[500px]" alt="" />
              <button
                onClick={() => {
                  dispatch(addToCart(data));
                  notify();
                }}
                className="w-3xs bg-[#7000FF] h-10 mt-40 rounded-md cursor-pointer text-white"
              >
                Savatga qoʻshish
              </button>
              <ToastContainer />
            </div>
          </div>
          <div className="w-[35%]"></div>
        </div>
      )}
    </div>
  );
}

export default Details;
