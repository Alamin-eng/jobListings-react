import React, { useState } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import "./App.css";

let jobs = require("./data.json"); // this is how we import local json file data and put them in a varibale

function App() {
  
  return (
    <div className="app">
      <Header />
      <Main jobs={jobs} />
      <Footer />
    </div>
  );
}

export default App;
