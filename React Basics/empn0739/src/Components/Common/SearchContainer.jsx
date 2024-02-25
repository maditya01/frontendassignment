import React from 'react';
import Path23 from '../../assets/Path 23.svg';

const SearchContainer = () => {
    const handleSearch = (event) => {
        event.preventDefault(); // Prevents the default form submission behavior
        const searchInput = document.getElementById('search');
        const query = searchInput.value;
        // Open a new tab with Edge browser and construct the search URL
        window.open(`https://www.bing.com/search?q=${query}`, '_blank');
    };

    return (
        <form onSubmit={handleSearch}>
            <input
                id="search"
                name="search"
                type="text"
                style={{
                    width: '90%',
                    padding: '4px',
                    border: 'none'
                }}
                placeholder="Search"
            />
            <label htmlFor="search">
                <img src={Path23} alt="Search" onClick={handleSearch} style={{ transform: 'rotate(170deg)', cursor: 'pointer' }} />

            </label>
        </form>
    );
};

export default SearchContainer;
