import React ,{useState, useEffect} from "react";
import { shortNumber ,arrayRange } from "../helper/function";

import { Sparklines, SparklinesLine } from "react-sparklines";

const CoinCard = ({ data }) => {
  const { image, symbol, name, price_change_percentage_24h, current_price , sparkline_in_7d } = data;

    const [sparklines , setSparklines] = useState([])

    useEffect(()=> {
      arrayRange(sparkline_in_7d.price).map(item => setSparklines([...sparklines , item] ))
      
      console.log(arrayRange(sparkline_in_7d.price));
    },[sparklines])

  
    

  return (
    <div className="flex justify-between items-center w-10/12 border bg-white p-2 rounded-lg hover:shadow-2xl transition-all ease-in">
      <img src={image} alt={symbol} className="w-14 h-14  " />
      <h3 className="w-2/12 font-bold">{name} </h3>
      <h6 className="w-2/12 font-semibold">{symbol} </h6>
      <p
        className={`w-2/12 font-bold ${
          shortNumber(price_change_percentage_24h, 2) > 0
            ? "text-green-500"
            : "text-red-500"
        }`}
      >
        {shortNumber(price_change_percentage_24h, 2)}{" "}
      </p>
      <p className="w-2/12 font-semibold">{current_price} $</p>
      <div className="w-2/12">
        <Sparklines data={sparklines}>
          <SparklinesLine color="red" />
        </Sparklines>
      </div>
    </div>
  );
};

export default CoinCard;
