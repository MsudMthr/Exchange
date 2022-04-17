import React, { useState, useEffect } from "react";
import { shortNumber, arrayRange } from "../helper/function";

const CoinCard = ({ data }) => {
  const {
    image,
    symbol,
    name,
    price_change_percentage_24h,
    current_price,
    market_cap,
  } = data;

  return (
    <div className="flex max-w-screen-2xl flex-col md:flex-row gap-8 md:gap-0 justify-between items-center overflow-hidden text-center   w-full border bg-gray-300 dark:bg-gray-500 p-2 rounded-lg ">
      <div className="flex md:justify-between justify-center gap-2 items-center md:w-1/12 w-full ">
        <img src={image} alt={symbol} className="w-14 h-14  " />
        <h3 className="w-2/12 md:mx-8  font-bold">{name} </h3>
      </div>

      <div className="flex w-full md:w-8/12 justify-around items-center  ">
        
        <div className="flex flex-col sm:flex-row justify-around w-6/12 text-center md:gap-0 gap-4">
          <h6 className="w-full font-bold text-amber-600">
            {symbol.toUpperCase()}{" "}
          </h6>

          <p className="w-full md:w-4/12 font-semibold text-center">
            ${current_price.toLocaleString()}
          </p>
        </div>

        <div className="flex flex-col sm:flex-row justify-around w-6/12 text-center md:gap-0 gap-4">
          <p
            className={`w-full font-bold ${
              shortNumber(price_change_percentage_24h, 2) > 0
                ? "text-green-500"
                : "text-red-500"
            }`}
          >
            {shortNumber(price_change_percentage_24h, 2)}%
          </p>

          <p className="w-full md:w-8/12 font-semibold text-center">
            ${market_cap.toLocaleString()}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CoinCard;
