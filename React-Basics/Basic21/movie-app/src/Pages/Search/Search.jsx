import { useState } from 'react';
import './Search.css'
import { FcSearch } from "react-icons/fc";
const SearchPage = () => {
    const [userQuery,setUserQuery]=useState("");
    const onInputChangeHandler=(event)=>{
        setUserQuery(event.target.value);
    }
    const onSearchHandler=()=>{
        console.log(userQuery);
    }

  return (
    <>
      <div className="movie-search-page-wrapper">        
        <h1>Search Movies or Series</h1>
        <div className='search-container'>
        <input
          placeholder="Type Movie Name Here:"
          className="input-search"
          onChange={onInputChangeHandler}
          value={userQuery}
        ></input>
        <FcSearch className='search-icon' onClick={onSearchHandler}/>
        </div>
      </div>
    </>
  );
};

export default SearchPage;
