import React, { useState, useContext } from "react";

//Context
import { coinContext } from "../context/CoinContextProvider";
import Pagination from "./Pagination";

const Landing = () => {
  const [search, setSearch] = useState("");
  const coins = useContext(coinContext);

  const searchHandler = (event) => {
    setSearch(event.target.value);
  };

  const searchCoin = coins.filter((coin) =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="flex justify-center flex-col">
      <input
        type={"text"}
        placeholder="Search"
        value={search}
        onChange={searchHandler}
        className="rounded outline-none border-2 w-48 mx-auto border-pink-300 focus:border-pink-800 py-2 px-4 font-semibold capitalize my-3 transition-all ease-out"
      />
      <Pagination coins={searchCoin} />
    </div>
  );
};

export default Landing;
