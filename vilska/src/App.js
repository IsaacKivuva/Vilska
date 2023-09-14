import React from "react";
import {Route, Routes} from "react-router-dom";
import Account from "./Account";
import Movies from "./Movies";
import NavBar from "./NavBar";

function App() {
  
  return (
    <div>
      <NavBar />
      <Routes>
      <Route path="/" element={<Account />} />
      <Route path="/movies" element={<Movies />} />
      </Routes>
    </div>
  );
}

export default App;
