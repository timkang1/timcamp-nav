import React from 'react';
import { FaCampground } from 'react-icons/fa';

const SearchResultCamp = ({ camp, highlights }) => {
  let { type, name, state, photo } = camp;
  let [ prefix, highlighted, suffix ] = highlights;

  return (
    <li className="nav-search-result-camp-container">
      <div className="nav-search-result-camp-icon">
        <FaCampground />
      </div>
      <div className="nav-search-result-camp">
        <div className="nav-search-camp-name">
          {prefix}<strong>{highlighted}</strong>{suffix}
        </div>
        <div className="nav-search-camp-info">{type} in {state}</div>
      </div>
      <img src={photo} alt={`${name} thumbnail preview`} />
    </li>
  );
};

export default SearchResultCamp;