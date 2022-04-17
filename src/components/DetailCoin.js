import React, { useContext } from "react";

//sparkLine
import { Sparklines, SparklinesLine, SparklinesSpots } from "react-sparklines";

//react-router-dom
import { useNavigate, useParams } from "react-router-dom";
//function
import {
  splitId,
  showDate,
  showTime,
  shortNumber,
  minArray,
  maxArray,
} from "./helper/function";

//context
import { coinContext } from "../context/CoinContextProvider";

//components
import Loading from "./shared/Loading";

const DetailCoin = () => {
  const coins = useContext(coinContext);
  const navigate = useNavigate();
  const { id } = useParams();

  const newId = splitId(id);

  const coin = [coins.find((coin) => coin.id === newId)];

  const {
    name,
    symbol,
    image,
    current_price,
    market_cap_rank,
    market_cap,
    high_24h,
    low_24h,
    price_change_percentage_24h,
    sparkline_in_7d,
    last_updated,
  } = coin[0];

  return (
    <div className="text-center dark:bg-gray-800 mb-72">
      <button
        onClick={() => navigate("/")}
        className={
          "bg-red-300 py-1 px-3 select-none rounded-full font-bold dark:text-white"
        }
      >
        Home
      </button>
      {coin.length ? (
        <div>
          <div className="grid place-content-center  grid-cols-12 grid-rows-3 mx-auto gap-8  md:p-0 dark:text-white">
            {/* header */}
            <div className=" col-span-11 row-span-1 row-start-1 row-end-2 w-full ">
              <div className="flex flex-col md:flex-row justify-between items-center w-full gap-5">
                <div className="flex justify-evenly items-center gap-2 md:w-7/12 w-10/12 ">
                  <img src={image} alt={symbol} className="w-3/12 " />
                  <h1 className="font-bold md:text-2xl text-base  ">{name}</h1>
                  <p className="font-bold uppercase text-lg md:ml-8 text-red-500 py-1 px-3 bg-indigo-50 dark:bg-gray-600 rounded-full">
                    {symbol}
                  </p>
                </div>
                <div className="flex  items-center gap-4 w-8/12 justify-center">
                  <span className="font-bold ">{showTime()}</span>
                  <span className="font-bold ">{showDate()}</span>
                </div>
              </div>
            </div>
            {/* sparkline */}
            <div className=" max-h-screen col-span-11 lg:col-span-6 md:col-span-7 row-span-2 row-start-3 row-end-4 md:col-start-2 md:col-end-8  lg:col-start-2 lg:col-end-8 md:row-span-2 col-start-2 col-end-12">
             
              <div className="flex flex-col  h-full">
                <div className="flex items-center justify-center w-full h-full">
                  <Sparklines
                    height={100}
                    min={minArray(sparkline_in_7d.price)}
                    data={sparkline_in_7d.price}
                  >
                    <SparklinesLine color="#56b45d" />
                    <SparklinesSpots style={{ fill: "red" }} />
                  </Sparklines>
                  <div className="flex flex-col justify-between h-4/6">
                    <p className="font-semibold">
                      ${maxArray(sparkline_in_7d.price).toLocaleString()}
                    </p>
                    <p className="font-semibold">
                      ${minArray(sparkline_in_7d.price).toLocaleString()}
                    </p>
                  </div>
                </div>

                <div className="flex justify-between w-11/12 py-0">
                  <p className="font-semibold">7 Day</p>
                  <p className="font-semibold">Now</p>
                </div>

              </div>
            </div>
            {/* detail */}
            <div className="bg-gradient-to-r from-lime-50 via-red-100 to-orange-100 dark:from-gray-800 dark:via-neutral-800 dark:to-zinc-800  p-4 rounded col-span-11 col-start-2 col-end-12 lg:col-span-4 md:col-span-5 row-span-2 row-start-2 row-end-3 md:row-span-2 md:col-start-8 md:col-end-12 ">
              <div className="flex flex-col gap-4 bg-white bg-opacity-20 dark:bg-opacity-10 p-4 h-full justify-evenly  backdrop-blur-lg ">
                <h4 className="font-bold">{name}</h4>

                <div className="flex justify-between">
                  <span className="font-bold">
                    ${current_price.toLocaleString()}
                  </span>
                  <span
                    className={`font-semibold py-1 px-2 rounded ${
                      price_change_percentage_24h > 0
                        ? "bg-emerald-600"
                        : "bg-rose-600"
                    } `}
                  >
                    {shortNumber(price_change_percentage_24h, 2)}%
                  </span>
                </div>

                <div className="flex justify-between">
                  <p className="font-semibold">Market :</p>
                  <span className="font-semibold">
                    ${market_cap.toLocaleString()}
                  </span>
                </div>

                <div className="flex justify-between">
                  <p className="font-semibold">Market rank :</p>
                  <span className="font-semibold">{market_cap_rank}</span>
                </div>

                <div className="flex flex-col items-start">
                  <p className="font-semibold w-full flex justify-between">
                    Max 24H:{" "}
                    <span className="font-semibold ">
                      ${high_24h.toLocaleString()}
                    </span>
                  </p>
                  <p className="font-semibold w-full flex justify-between">
                    Min 24H:{" "}
                    <span className="font-semibold ">
                      ${low_24h.toLocaleString()}
                    </span>
                  </p>
                </div>

                <button className="py-2 px-4 font-semibold bg-slate-200 bg-gradient-to-r from-green-600 via-yellow-50 to-red-500 dark:from-green-900 dark:via-yellow-700 dark:to-rose-900 rounded-md">
                  Buy & sell
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <Loading />
      )}
    </div>
  );
};

export default DetailCoin;
