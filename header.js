import React from 'react';

const Header = (props) => {
  const { onSearch } = props;

  const handleSearch = () => {
    const location = document.getElementById('location-input').value;
    onSearch(location);
  };
  
  return (
    <header>
      <h1>Weather Map</h1>
      <div className="search-box">
        <input id="location-input" type="text" placeholder="Enter location" />
        <button id="search-button" type="button" onClick={handleSearch}>Search</button>
      </div>
    </header>
  );
};

export default Header;