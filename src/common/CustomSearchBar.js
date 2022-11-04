import React from "react";
import SearchField from "react-search-field";

 
const CustomSearchBar = ({className, placeholder, onChange, searchText, onSubmit}) => {
  return (
    <div>
        <SearchField
            placeholder={placeholder}
            onChange={onChange}
            searchText={searchText}
            classNames={className}
        />
    <button onClick={onSubmit}>Search</button>
    </div>
  )
}

export default CustomSearchBar