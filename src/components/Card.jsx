import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../store/card"; 

function Card() {
  const cart = useSelector((state) => state.cart.cartItems); 
  const dispatch = useDispatch();

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-4">
      <h2 className="text-2xl font-bold">Savat</h2>

      {cart?.length > 0 ? (
        cart.map((item) => (
          <div
            key={item.id}
            className="bg-white p-4 rounded-lg shadow-md flex items-center gap-4"
          >
            <input
              type="checkbox"
              className="w-5 h-5 text-purple-600"
              defaultChecked
            />
            <img
              src={item.images?.[0]}
              alt={item.title}
              className="w-16 h-16 rounded"
            />

            <div className="flex flex-col flex-1">
              <span className="text-gray-500 text-sm">
                Uzum Market omborida
              </span>
              <span className="font-semibold text-lg">{item.title}</span>
              <span className="text-gray-500 text-sm">
                Sotuvchi: {item.seller || "Noma'lum"}
              </span>

              <div className="flex items-center mt-2">
                <button className="px-3 py-1 border rounded">-</button>
                <span className="mx-3">1</span>
                <button className="px-3 py-1 border rounded">+</button>
              </div>
            </div>

            <div className="text-right">
              <span className="text-lg font-bold text-purple-600">
                {item.price} so'm
              </span>
              {item.oldPrice && (
                <span className="block text-gray-400 line-through">
                  {item.oldPrice} so'm
                </span>
              )}
              <button
                className="ml-4 text-red-500 hover:text-red-700"
                onClick={() => dispatch(removeFromCart(item.id))}
              >
                🗑 O'chirish
              </button>
            </div>
          </div>
        ))
      ) : (
        <p className="text-center text-gray-500">Savat bo'sh</p>
      )}

      {cart?.length > 0 && (
        <div className="bg-white p-4 rounded-lg shadow-md mt-5">
          <h3 className="text-lg font-semibold">Buyurtmangiz</h3>
          <div className="flex justify-between text-gray-600 mt-2">
            <span>Mahsulotlar ({cart.length}):</span>
            <span>
              {cart
                .reduce((total, item) => total + item.price, 0)
                .toLocaleString()}{" "}
              so'm
            </span>
          </div>
          <div className="flex justify-between font-bold text-xl mt-2">
            <span>Jami:</span>
            <span className="text-purple-600">
              {cart
                .reduce((total, item) => total + item.price, 0)
                .toLocaleString()}{" "}
              so'm
            </span>
          </div>
          <button className="w-full bg-purple-600 text-white py-2 rounded-lg mt-4 hover:bg-purple-700 transition">
            Rasmiylashtirishga o'tish
          </button>
        </div>
      )}
    </div>
  );
}

export default Card;
