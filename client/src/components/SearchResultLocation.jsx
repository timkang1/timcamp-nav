import React from 'react';
import { FaMapMarkerAlt } from 'react-icons/fa';

const SearchResultLocation = ({ highlights }) => {
  let [ prefix, highlighted, suffix ] = highlights;

  return (
    <li className="nav-search-result-location-container">
      <div className="nav-search-result-location-icon">
        <FaMapMarkerAlt />
      </div>
      <div className="nav-search-result-location">
        {prefix}<strong>{highlighted}</strong>{suffix}
      </div>
    </li>
  );
};

export default SearchResultLocation;