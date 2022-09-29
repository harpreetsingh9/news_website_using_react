import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import { CategoryNews } from "./components/CategoryNews";
import { News } from "./components/News";
import { SearchNews } from "./components/SearchNews";
import { categories } from "./api";
import { Navbar } from "./components/Navbar";

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <Routes>
          <Route exact path="/" element={<News />} />
          <Route exact path="/search" element={<SearchNews />} key="search" />
          {categories.map((item) => (
            <Route
              exact
              path={item.path}
              key={item.path}
              element={
                <CategoryNews
                  category={item.category}
                  key={item.path}
                  name={item.name}
                />
              }
            ></Route>
          ))}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
