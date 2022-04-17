import React, { useContext } from "react";

import { Route, Routes } from "react-router-dom";

import "./App.scss";

import Landing from "./components/Landing";
import DarkMode from "./components/DarkMode";
import DetailCoin from "./components/DetailCoin";
import CoinContextProvider from "./context/CoinContextProvider";

const App = () => {
  return (
    <CoinContextProvider>
      <div className=" dark:bg-gray-800">
        <div className="container flex flex-col  mx-auto dark:bg-gray-800 relative">
          <div className="self-center my-2">
            <DarkMode />
          </div>

          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/coin/:id" element={<DetailCoin />} />
          </Routes>
        </div>
      </div>
    </CoinContextProvider>
  );
};

export default App;
