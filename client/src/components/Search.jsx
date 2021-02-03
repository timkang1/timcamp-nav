import React, { useState } from 'react';
import axios from 'axios';
import { FaSearch } from 'react-icons/fa';
import SearchResults from './SearchResults.jsx';

const Search = () => {

  const [searchTerm, setSearchTerm] = useState('');
  const [locations, setLocations] = useState([]);
  const [camps, setCamps] = useState([]);

  // Debounce function for search
  const debounce = (func, wait) => {
    let timeout;
    return function (...args) {
      const context = this;
      if (timeout) { clearTimeout(timeout); } // ensure debounce happens instead of delay
      timeout = setTimeout(() => { // if context wasn't passed, "this" would point to setTimeout (the function in which func was called)
        timeout = null;
        func.apply(context, args);
      }, wait);
    };
  };

  // Axios request to the locations and camps database with a delay to account for search time
  const onChange = (term) => {
    setSearchTerm(term);
    if (term.length !== 0) {
      axios.all([
        axios.get(`http://localhost:3001/api/search/locations/${term}`),
        axios.get(`http://localhost:3001/api/search/camps/${term}`)
      ]).then(([ locResults, campResults ]) => {
        setLocations(locResults.data);
        setCamps(campResults.data);
      }).catch(error => {
        console.log(error.message);
      });
    }

    if (term.length < 1) {
      setLocations([]);
      setCamps([]);
    }
  };

  // useCallback memoizes instance of debounce(onChange, 500)
  // the onChange attribute will reference this one instance
  // dependency [] to invoke debounce only once (we only need one instance of debounce(onChange, 500))
  const debounceOnChange = React.useCallback(debounce(onChange, 500), []);

  return (
    <form>
      <div className="nav-search-container">
        <FaSearch />
        <input
          type="text"
          placeholder="Try Yosemite, Napa, Moab..."
          onChange={e => debounceOnChange(e.target.value)}
        />
        {locations.length || camps.length ? <SearchResults locations={locations} camps={camps} searchTerm={searchTerm}/> : ''}
      </div>
    </form>
  );
};

export default Search;