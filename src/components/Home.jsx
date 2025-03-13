import axios from "axios";
import React, { useEffect, useState } from "react";
import card from "../img/card.svg";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { addToCart, removeFromCart } from "../store/card";
import { useDispatch, useSelector } from "react-redux";
import "react-toastify/dist/ReactToastify.css";
import bir from '../img/b.jpg'
import ramadan from "../img/ramadan.jpg";
import har from "../img/har.jpg";
import uzum from "../img/uzum.jpg";
import karta from "../img/karta.jpg";

function Home() {
  let [data, setData] = useState([]);
  let [skip, setSkip] = useState(12);
  let [like, setLike] = useState([]);
  let navigation = useNavigate();
  let dispatch = useDispatch();
  let cards = useSelector((state) => state.cart.cartItems);
  console.log(cards);

  const slides = [
    `${bir}`,
    `${ramadan}`,
    `${har}`,
    `${uzum}`,
    `${karta}`,
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 3500);

    return () => clearInterval(interval);
  }, []);
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
  function cart() {
    navigation("/card");
  }
  function lik(e, id) {
    // e.stopPropagation();

    if (like.includes(id)) {
      setLike((prevLike) => prevLike.filter((item) => item !== id));
    } else {
      setLike((prevLike) => [...prevLike, id]);
    }
  }
  function details(id) {
    navigation(`/details/${id}`);
    localStorage.setItem("id", id);
  }
  function notify() {
    // event.stopPropagation();
    toast.success("mahsulot savatga qoshildi");
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
          <div className="relative group">
            <div class="w-96 mx-auto hidden absolute bg-white shadow-lg rounded-2xl p-4 group-hover:block z-10 right-8 top-5">
              {cards &&
                cards.map((value, index) => {
                  return (
                    <div
                      key={index}
                      class="flex items-center justify-between border-b pb-3 mb-3"
                    >
                      <img
                        src={value.images[0]}
                        class="w-12 h-12 rounded-md object-cover"
                      />
                      <div class="flex-1 ml-4">
                        <p class="text-sm font-semibold">{value.title}</p>
                        <p class="text-xs text-gray-500">
                          {value.price.toFixed(2)} so'm
                        </p>
                      </div>
                      <button class="text-gray-400 hover:text-gray-600">
                        <i
                          class="fa-solid fa-trash cursor-pointer"
                          onClick={() => dispatch(removeFromCart(value.id))}
                        ></i>
                      </button>
                    </div>
                  );
                })}

              <button class="w-full bg-purple-600 cursor-pointer text-white text-sm font-semibold py-3 rounded-md mt-4">
                Buyurtmani rasmiylashtirish
              </button>
            </div>
            <div className="cursor-pointer relative group" onClick={cart}>
              <i className="fa-solid fa-bag-shopping"></i>
              <span className="mr-8 ml-2.5">Savat</span>
            </div>
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
      <div className="carousel h-[400px] mx-auto container w-[1200px] rounded-2xl">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`carousel-item relative w-full ${
              index === current ? "block" : "hidden"
            }`}
          >
            <img
              src={slide}
              className="w-full h-[400px] bg-cover rounded-2xl"
              alt={`Slide ${index + 1}`}
            />
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
              <button
                onClick={() =>
                  setCurrent(
                    (prev) => (prev - 1 + slides.length) % slides.length
                  )
                }
                className="btn btn-circle w-10 h-10 bg-white/40 border-white/100 cursor-pointer rounded-full"
              >
                ❮
              </button>
              <button
                onClick={() => setCurrent((prev) => (prev + 1) % slides.length)}
                className="btn btn-circle w-10 h-10 bg-white/40 border-white/100 cursor-pointer rounded-full"
              >
                ❯
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="mx-auto container w-[1200px]">
        <ToastContainer />
        <div className="p-6 flex flex-wrap">
          {data.map((data) => (
            <div
              onClick={() => details(data.id)}
              key={data.id}
              className="mx-auto scale-3d relative bg-white rounded-2xl hover:shadow-xl w-[250px] mb-6 shadow cursor-pointer border-gray-200"
            >
              <img src={data.images[0]} alt="" className="w-full h-[200px]" />
              {like.includes(data.id) ? (
                <i className="fa-solid fa-heart absolute top-5 right-5 text-red-500"></i>
              ) : (
                <i
                  onClick={(event) => {
                    lik(data.id);
                    // event.stopPropagation();
                  }}
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
                      {(
                        data.price -
                        data.price * (data.discountPercentage / 100)
                      ).toFixed(2)}
                    </p>
                  </div>
                  <button
                    onClick={(event) => {
                      event.stopPropagation();
                      dispatch(addToCart(data));
                      notify(event);
                    }}
                    className="border mt-4 rounded-full w-8 h-8 text-[#BDBEC4]"
                  >
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
