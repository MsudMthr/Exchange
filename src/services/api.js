import axios from "axios";


//get market data
const BASE_URL =
  "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=250&page=1&sparkline=true";

export const getData = async () => {
  const { data } = await axios.get(BASE_URL);
  return data;
};



//get coin data

// const COIN_URL = `https://api.coingecko.com/api/v3/coins/${id}?localization=false&tickers=false&market_data=false&community_data=false&developer_data=true&sparkline=false`;
export const getCoinData = async (id) => {
   const { data } = await axios.get(`https://api.coingecko.com/api/v3/coins/${id}?localization=false&tickers=false&market_data=false&community_data=false&developer_data=true&sparkline=false`)
   return data;
}




