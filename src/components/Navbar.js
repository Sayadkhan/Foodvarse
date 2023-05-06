import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar flex justify-between items-center container mx-auto py-8 lg:flex-row gap-5 lg:gap-0">
      <h2 className="logo text-2xl font-bold lowercase italic">
        Food <span className="text-rose-500">verse</span>
      </h2>

      <form className="search-bar">
        <input
          type="search"
          placeholder="search recipe...."
          required
          className="bg-white/75 p-3 px-8 lg:w-96 rounded-full outline-none shadow-lg shadow-rose-100 focus:shadow-red-200 duration-300"
        />
      </form>

      <ul className="menu flex">
        <li>
          <NavLink end to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/favourites">
            Favourites<span className="favourites-count">(10)</span>
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
