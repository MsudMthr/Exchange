import React, { useContext } from "react";

import { Route, Routes } from "react-router-dom";

import "./App.scss";

import Landing from "./components/Landing";
import DarkMode from "./components/DarkMode";

const App = () => {
  return (
    <div className="w-screen dark:bg-gray-800">
      <div className="container flex flex-col  mx-auto dark:bg-gray-800 relative">
      
        <div className="self-center my-2">
          <DarkMode />
        </div>

        <Routes>
          <Route path="/" element={<Landing />} />
          {/* <Route path="/coin/:id" /> */}
        </Routes>
      </div>
    </div>
  );
};

export default App;
