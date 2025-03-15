import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../store/card";
import { toggleLike } from "../store/like";
import card from '../img/card.svg'
import { toast, ToastContainer } from "react-toastify";
function ProductCard({ product }) {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.like.likedItems);
console.log(data);

  // const isLiked = data.some((item) => item.id === product.id);
  // let dispatch=useDispatch()
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
            // onChange={(e) => {
            //   setSearch(e.target.value);
            // }}
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
            <div className="w-96 mx-auto hidden absolute bg-white shadow-lg rounded-2xl p-4 group-hover:block z-10 right-8 top-5">
              {/* {cards &&
                cards.map((value, index) => {
                  return (
                    <div
                      key={index}
                      className="flex items-center justify-between border-b pb-3 mb-3"
                    >
                      <img
                        src={value.images[0]}
                        className="w-12 h-12 rounded-md object-cover"
                      />
                      <div className="flex-1 ml-4">
                        <p className="text-sm font-semibold">{value.title}</p>
                        <p className="text-xs text-gray-500">
                          {value.price.toFixed(2)} so'm
                        </p>
                      </div>
                      <button className="text-gray-400 hover:text-gray-600">
                        <i
                          className="fa-solid fa-trash cursor-pointer"
                          // onClick={() => dispatch(removeFromCart(value.id))}
                        ></i>
                      </button>
                    </div>
                  );
                })} */}

              <button className="w-full bg-purple-600 cursor-pointer text-white text-sm font-semibold py-3 rounded-md mt-4">
                Buyurtmani rasmiylashtirish
              </button>
            </div>
            <div className="cursor-pointer relative group">
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
      <div className="flex mx-auto container w-[1200px] flex-wrap">
        <ToastContainer />
        {data.length > 0 &&
          data.map((data) => {
            return (
              <div
                data-title={data.title}
                // onClick={() => details(data.id)}
                key={data.id}
                className="mx-auto scale-3d relative bg-white rounded-2xl hover:shadow-xl w-[250px] mb-6 shadow cursor-pointer border-gray-200"
              >
                <img
                  src={data?.images?.[0]}
                  alt=""
                  className="w-full h-[200px]"
                />
                <i
                  className="absolute top-5 right-5 cursor-pointer fa-solid fa-heart text-red-500"
                  onClick={(event) => lik(event, data)}
                ></i>

                <div className="p-4">
                  <h2>{data.title}</h2>
                  <p className="text-xs mt-2 line-clamp-2">
                    {data.description}
                  </p>
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
            );
          })}
        {data.length<=0&&(<p className="text-2xl mx-auto">saralanganlar yoq</p>)}
      </div>
    </div>
  );
}

export default ProductCard;
