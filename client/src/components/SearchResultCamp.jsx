import React from 'react';
import { FaCampground } from 'react-icons/fa';

const SearchResultCamp = (props) => {
  let { camp, searchTerm } = props;
  let { type, name, state, photo } = camp;

  let searchStart = name.toLowerCase().indexOf(searchTerm.toLowerCase());
  let searchEnd = searchStart + searchTerm.length;

  let prefix = name.substring(0, searchStart);
  let highlight = name.substring(searchStart, searchEnd)
  let suffix = name.substring(searchEnd);

  return (
    <li className="nav-search-result-camp-container">
      <div className="nav-search-result-camp-icon">
        <FaCampground />
      </div>
      <div className="nav-search-result-camp">
        <div className="nav-search-camp-name">
          {prefix}<strong>{highlight}</strong>{suffix}
        </div>
        <div className="nav-search-camp-info">{type} in {state}</div>
      </div>
      <img src={photo} alt={`${name} thumbnail preview`} />
    </li>
  );
};

export default SearchResultCamp;