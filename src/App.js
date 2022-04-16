import React, { useContext } from "react";

import { Route , Routes } from "react-router-dom";

import "./App.scss";

import Landing from "./components/Landing";

const App = () => {
  return (
    <Routes className="bg-gray-300">
      <Route path="/" element={<Landing />}/>
      <Route path=""/>
    </Routes>
  );
};

export default App;
