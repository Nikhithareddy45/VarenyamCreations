import React from "react";
import { CgSearch } from "react-icons/cg";
import './../../App.css'
function Search() {
  return (
    <div className="flex items-center gap-2 justify-center border-2 rounded-3xl pt-2 pb-2 pl-2 pr-16 search-comp">
      <CgSearch className="react-icon" />
      <div className="flex">
        <label htmlFor="Search"></label>
        <input type="text" name="Search" id="Search" placeholder="Search" className="border-none focus:outline-none focus:border-none"/>
      </div>
    </div>
  );
}

export default Search;
