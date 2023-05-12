import React, { useState, useEffect } from "react";
import { useUsersStore } from "./store";
import './searchbar.css'

function SearchBar() {
  const columns = [
    "id",
    "name",
    "gender",
    "email",
    "salary",
    "experience",
    "hiredDate",
  ];
  const { data , setFilteredData } = useUsersStore();
  const [searchTerm, setSearchTerm] = useState("");
  const handleChange = (event) => {
    setSearchTerm(event.target.value);
    searchRows(event.target.value)
  };


  const searchRows = (searchTerm)=>{
    const finalRows = data.filter((row, index) => {
      const results =  Object.values(row).some((column) => {
        const myString = column;
        const search = searchTerm;
        const regex = new RegExp(search, "i");
        const found = regex.test(myString);
        return found;
      });
      console.log('results', results ,index)
      return results
    });
    console.log('finalrows', finalRows)
    setFilteredData(finalRows)
  }


  return (
    <>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search"
          value={searchTerm}
          onChange={handleChange}
        />
        <button type="submit">search</button>
      </div>
    </>
  );
}

export default SearchBar;
