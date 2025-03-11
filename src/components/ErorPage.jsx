import React from 'react'
import { useNavigate } from 'react-router-dom';
import eror from '../img/eror.png'

function ErorPage() {
    let navigaet=useNavigate()
    function hom() {
        navigaet('/')
    }
  return (
    <div>
      <div className="flex flex-col items-center justify-center h-screen text-center space-y-4">
        <img
          src={eror}
          alt="Error"
          className="w-80 h-80"
        />
        <h1 className="text-2xl font-bold">Nimadir oxshamadi</h1>
        <p className="text-gray-500">
          Orqaga qaytib koring yoki asosiy sahifaga oting
        </p>
        <button onClick={hom} className="px-4 cursor-pointer py-2 bg-gray-300 text-gray-700 rounded-md">
          Bosh sahifaga
        </button>
      </div>-
    </div>
  );
}

export default ErorPage