import React, { useState, useEffect } from "react";
//API
import { fetchData } from "../services/api";

//Components
import CoinCard from "./shared/CoinCard";
const Landing = () => {
  const [coins, setCoins] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      const data = await fetchData();
      return setCoins(data);
    };

    fetchAPI();
  }, []);

  return (
    <div className="">
        
      <div className="flex flex-col justify-center items-center  gap-4">
        {coins.map((item) => (
          <CoinCard key={item.id} data={item} />
        ))}
      </div>

    </div>
  );
};

export default Landing;
