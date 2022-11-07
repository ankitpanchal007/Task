import React from "react";
import SearchField from "react-search-field";


const CustomSearchBar = ({ className, placeholder, onChange, searchText, onSubmit }) => {
  return (
    <div>
      <SearchField
        placeholder={placeholder}
        onChange={onChange}
        searchText={searchText}
        classNames={className}
      />
      <button  style={{border:"2px solid black",borderColor:"green",height:"35px",width:"80px"}}onClick={onSubmit}>Search</button>
    </div>
  )
}

export default CustomSearchBar