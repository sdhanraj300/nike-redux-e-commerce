import { ArrowLeftIcon } from "@heroicons/react/24/solid";
import React from "react";
import emptyBag from "../../assets/emptybag.png";
const CartEmpty = ({ onCartToggle }) => {
  return (
    <div>
      <div className="flex items-center justify-center flex-col h-screen px-11 text-center gap-7 ">
        <img
          src={emptyBag}
          alt=""
          className="w-40 lg:w-36 sm:w-28
        h-auto object-fill transition-all duration-300 hover:scale-110
        "
        />
        <button
          onClick={onCartToggle}
          className="button-theme bg-gradient-to-b from-amber-500 to-orange-500 shadow-lg shadow-orange-500 flex items-center justify-center text-slate-900  py-2 gap-3 text-sm px-5 font-semibold active:scale-110"
          type="button"
        >
          <ArrowLeftIcon className="h-5 w-5 text-slate-900" />
          <span className="">Back To Nike Store</span>
        </button>
      </div>
    </div>
  );
};

export default CartEmpty;
