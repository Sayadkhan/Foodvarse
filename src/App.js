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

  const [recipes, setRecipes] = useState([]);

  const [loading, setLoading] = useState(false);

  const [error, setError] = useState("");

  const searchHandler = (e) => {
    e.preventDefault();

    getData(searchQuery);

    setSearchQuery("");

    inputfield.current.blur();
  };

  const getData = async (searchQuery) => {
    try {
      setLoading(true);
      const res = await fetch(
        `https://forkify-api.herokuapp.com/api/search?q=${searchQuery}`
      );

      if (!res.ok) throw new Error("No recipe found");

      const data = await res.json();
      console.log(data);
      setRecipes(data.recipes);
    } catch (err) {
      setError(err.message);
    }
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
          <Route
            path="/"
            element={<Home recipes={recipes} loading={loading} error={error} />}
          />
          <Route path="/favourites" element={<Favourites />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
};

export default App;
