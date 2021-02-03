import React, { useCallback } from 'react';
import SearchResultLocation from './SearchResultLocation.jsx';
import SearchResultCamp from './SearchResultCamp.jsx';


// Available props: camps (array), locations (array)
const SearchResults = ({ locations, camps, searchTerm }) => {
  // Highlights search word in each camp & location
  const highlight = (targetString, searchTerm) => {
    let start = targetString.toLowerCase().indexOf(searchTerm.toLowerCase());
    let end = start + searchTerm.length;

    let prefix = targetString.substring(0, start);
    let highlight = targetString.substring(start, end);
    let suffix = targetString.substring(end);
    return [ prefix, highlight, suffix ];
  };

  return (
    <div className="nav-search-results-dropdown">
      <ul>
        {locations.map((location, index) => {
          return <SearchResultLocation key={index} highlights={highlight(location.city + ', ' + location.state, searchTerm)}/>;
        })}
        {camps.map((camp, index) => {
          return <SearchResultCamp key={index} camp={camp} highlights={highlight(camp.name, searchTerm)} />;
        })}
      </ul>
    </div>
  );
};

export default SearchResults;