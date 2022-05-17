import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";


import Pagination from "./Pagination";

//Components
import CoinCard from "./shared/CoinCard";
import Loading from "./shared/Loading";
const Coins = ({currentItems}) => {
  

  return (
    <div className="">
      <div className="flex flex-col justify-center items-center  gap-4">
       

        {currentItems ? (
          currentItems.map((item) => (
            <Link
              key={item.id}
              to={`/coin/:${item.id}`}
              className="flex max-w-screen-2xl flex-col md:flex-row gap-8 md:gap-0 justify-between items-center overflow-hidden text-center   w-10/12 border bg-gray-300 p-2 rounded-lg dark:bg-gray-500"
            >
              {" "}
              <CoinCard data={item} />
            </Link>
          ))
        ) : (
          <Loading />
        )}
      </div>
    </div>
  );
};

export default Coins;
