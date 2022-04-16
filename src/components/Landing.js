import React, { useState, useEffect } from "react";
//API
import { fetchData } from "../services/api";

//Components
import CoinCard from "./shared/CoinCard";
import Loading from "./shared/Loading";
const Landing = () => {
  const [coins, setCoins] = useState([]);
  const [search , setSearch] = useState("");

  useEffect(() => {
    const fetchAPI = async () => {
      const data = await fetchData();
      return setCoins(data);
    };

    fetchAPI();
  }, []);

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
            <CoinCard key={item.id} data={item} />
          )) 
          
          :

          <Loading  />
        
        }


      </div>
    </div>
  );
};

export default Landing;
