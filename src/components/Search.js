import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { enpointApiSearch } from "../api";

export const Search = () => {
  const navigate = useNavigate();
  const [searchData, setSearchData] = useState("");
  const handleChange = (e) => {
    setSearchData(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(searchData);
    try {
      const res = await axios.get(enpointApiSearch(searchData));
      const data = res.data;
      console.log(data);
      navigate("/search", {
        state: {
          data: data,
          query: searchData
        },
      });
      setSearchData("");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="searchBar">
      <input
        type="text"
        className="searchItem"
        placeholder="Search news..."
        value={searchData}
        onChange={handleChange}
      />
      <button type="submit" className="searchButton" onClick={handleSubmit}>
        Search
      </button>
    </div>
  );
};
