import React from 'react';
import { FaMapMarkerAlt } from 'react-icons/fa';

const SearchResultLocation = (props) => {
  let { searchTerm, location } = props;
  let address = location.city + ', ' + location.state;

  let searchStart = address.toLowerCase().indexOf(searchTerm.toLowerCase());
  let searchEnd = searchStart + searchTerm.length;

  let prefix = address.substring(0, searchStart);
  let highlight = address.substring(searchStart, searchEnd)
  let suffix = address.substring(searchEnd);

  return (
    <li className="nav-search-result-location-container">
      <div className="nav-search-result-location-icon">
        <FaMapMarkerAlt />
      </div>
      <div className="nav-search-result-location">
        {prefix}<strong>{highlight}</strong>{suffix}
      </div>
    </li>
  );
};

export default SearchResultLocation;