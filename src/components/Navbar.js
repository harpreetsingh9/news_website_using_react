import React from "react";
import { Link, NavLink } from "react-router-dom";
import { categories } from "../api";
import { Search } from "./Search";

export const Navbar = () => {
  return (
    <div className="Navbar">
      <h1 className="title"><Link className="logo" to="/">News App</Link></h1>
      <Search />
      <div className="navLink navItems">
        {categories.map((item) => (
          <div className="navItem" key={item.path}>
            <NavLink className="navLink" to={item.path}>{item.name}</NavLink>
          </div>
        ))}
      </div>
    </div>
  );
};
