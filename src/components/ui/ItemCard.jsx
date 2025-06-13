import React from "react";
import Product1 from "../../assets/images/Product-1.jpg";
import Product2 from '../../assets/images/Product-2.jpg';
import { FaRegStarHalfStroke } from "react-icons/fa6";
import { FaStar } from "react-icons/fa6";
import { FaRegStar } from "react-icons/fa6";
import { Button } from "./button";
import { RiPokerHeartsLine } from "react-icons/ri";
import { CgShoppingCart } from "react-icons/cg";
function ItemCard() {
  return (
    <div className="flex flex-col lg:w-[28%]  md:w-[40%] sm:w-[80%] rounded-2xl p-4 shadow-2xl border-2 m-4 border-amber-200 cursor-pointer">
      <img src={Product1} alt="" className="w-full rounded" />
      <div className="flex flex-col gap-2 mt-2">
        <p className="font lg:text-sm">Necklace Set</p>
        <h2 className="font lg:text-md font-bold md:text-lg sm:text-2xl text-red-900">
          Royal Emerald Necklace Set
        </h2>
        <div className="flex items-center">
          <FaStar fill="goldenrod" />
          <FaStar fill="goldenrod" />
          <FaStar fill="goldenrod" />
          <FaRegStarHalfStroke fill="goldenrod" />
          <FaRegStar fill="goldenrod" /><span className="ml-1">3.5</span>
        </div>
        <p className="font">
          {" "}
          12,000
          <span className="ml-1 text-neutral-400 line-through">₹15,000</span>
        </p>
      </div>
      <div className="buttons flex justify-start flex-wrap gap-3 mt-3 items-center">
        <Button className=" yellow pr-9 pl-9 lg:w-[45%] sm:w-[100%]">
          <CgShoppingCart />
          Add to Cart
        </Button>
        <Button className="maroon pr-9 pl-9 lg:w-[45%] sm:w-[100%]">
          <RiPokerHeartsLine /> Wish List
        </Button>
      </div>
    </div>
  );
}

export default ItemCard;
