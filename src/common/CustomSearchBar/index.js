import React from "react";
import SearchField from "react-search-field";
import './style.scss';

const CustomSearchBar = ({ className, placeholder, onChange, searchText, onSubmit }) => {
  return (
    <div className="custom-search-bar">
      <SearchField
        placeholder={placeholder}
        onChange={onChange}
        searchText={searchText}
        classNames={className}
      />
      <button  className="search-btn" onClick={onSubmit}>Search</button>
    </div>
  )
}

export default CustomSearchBar