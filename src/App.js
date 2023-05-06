import React from "react";
import { useState, useRef } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Favourites from "./components/Favourites";
import NotFoundPage from "./pages/NotFoundPage";

const App = () => {
  
  const [searchQuery, setSearchQuery] = useState("");
  const inputfield = useRef(null);

  const searchHandler = (e) => {
    e.preventDefault();

    setSearchQuery("");

    inputfield.current.blur();
  };

  return (
    <>
      <div className="app min-h-screen bg-rose-50 text-gray-600 text-lg">
        <Navbar
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          inputfield={inputfield}
          searchHandler={searchHandler}
        />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favourites" element={<Favourites />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
};

export default App;
