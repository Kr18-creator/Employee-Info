import "./App.css";
import React from "react";
import SearchBar from "./searchbar";
import EmployeeInfo from "./users";
import Pagination from "./Pagination";

function App() {
  return (
    <div className="App">
      <SearchBar />
      <EmployeeInfo />
      <Pagination />
    </div>
  );
}

export default App;
