import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
//Context
import { coinContext } from "../context/CoinContextProvider";


//Components
import CoinCard from "./shared/CoinCard";
import Loading from "./shared/Loading";
const Landing = () => {

  const [search , setSearch] = useState("");
  const coins = useContext(coinContext)

  const searchHandler = event => {
    setSearch(event.target.value)
  }

  const searchCoin = coins.filter(coin => coin.name.toLowerCase().includes(search.toLowerCase()))

  return (
    <div className="">
      <div className="flex flex-col justify-center items-center  gap-4">

      <input type={"text"} placeholder="Search" value={search} onChange={searchHandler} className="rounded outline-none border-2 border-pink-300 focus:border-pink-800 py-2 px-4 font-semibold capitalize my-3 transition-all ease-out"  />

        
        {
          coins.length ? 
            
          searchCoin.map((item) => (
           <Link key={item.id} to={`/coin/:${item.id}`}  className="flex max-w-screen-2xl flex-col md:flex-row gap-8 md:gap-0 justify-between items-center overflow-hidden text-center   w-10/12 border bg-gray-300 p-2 rounded-lg dark:bg-gray-500" > <CoinCard  data={item} /></Link>
          )) 
          
          :

          <Loading  />
        
        }


      </div>
    </div>
  );
};

export default Landing;
