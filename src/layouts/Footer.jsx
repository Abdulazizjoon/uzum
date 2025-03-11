import React from "react";
import play from "../img/play.svg";
import instagram from "../img/instagram.svg";
import telegram from "../img/telegram.svg";
import f from "../img/f.svg";
import y from "../img/y.svg";
import { useState } from "react";
function Footer() {

  return (
    <div>
      <div className="max-w-7xl w-full mx-auto px-5 mt-14">
        <div className="grid grid-cols-4 mb-14">
          <div className="flex flex-col gap-y-4">
            <strong className="text-sm font-medium">Biz haqimizda</strong>
            <div className="text-xs font-normal text-[#8b8e99]">
              Topshirish punktlari
            </div>
            <div className="text-xs font-normal text-[#8b8e99]">
              Vakansiyalar
            </div>
          </div>
          <div className="flex flex-col gap-y-4">
            <strong className="text-sm font-medium">Foydalanuvchilarga</strong>
            <div className="text-xs font-normal text-[#8b8e99]">
              Biz bilan bog'lanish
            </div>
            <div className="text-xs font-normal text-[#8b8e99]">
              Savol-Javob
            </div>
          </div>
          <div className="flex flex-col gap-y-4">
            <strong className="text-sm font-medium">Tadbirkorlarga</strong>
            <div className="text-xs font-normal text-[#8b8e99]">
              Uzumda soting
            </div>
            <div className="text-xs font-normal text-[#8b8e99]">
              Sotuvchi kabineti kirish
            </div>
            <div className="text-xs font-normal text-[#8b8e99]">
              Topshirish punktini ochish
            </div>
          </div>
          <div>
            <strong>Ilovani yuklab olish</strong>
            <div className="flex items-center gap-x-6 mt-4 mb-12">
              <img src={play} alt="" />
              <div className="text-[13px] font-medium">AppStore</div>
              <div className="text-[13px] font-medium">Google Play</div>
            </div>
            <strong className="text-sm font-medium">
              Uzum ijtimoiy tarmoqlarda
            </strong>
            <div className="flex items-center gap-x-3 mt-4"> 
              <div>
                <img src={instagram} alt="" />
              </div>
              <div>
                <img src={telegram} alt="" />
              </div>
              <div>
                <img src={f} alt="" />
              </div>
              <div>
                <img src={y} alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="py-3.5 border-t border-t-gray-300 flex justify-between items-center">
          <div className="flex items-center gap-x-4">
            <div className="text-sm font-semibold tracking-tighter">
              Maxfiylik kelishuvi
            </div>
            <div className="text-sm font-semibold tracking-tighter">
              Foydalanuvchi kelishuvi
            </div>
          </div>
          <div>
            <p className="text-[11px] font-normal text-[#7e818c] tracking-tight">
              «2025© XK MCHJ «UZUM MARKET». STIR 309376127. Barcha huquqlar
              himoyalangan»
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
