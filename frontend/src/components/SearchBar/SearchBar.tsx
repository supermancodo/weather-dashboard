import React from 'react';
import './searchBar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

interface SearchBarProps {
    city: string;
    onChange: (city: string) => void;
    onSearch: () => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ city, onChange, onSearch }) => {
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        onChange(event.target.value);
    };
    const handleKeyPress = (event: React.KeyboardEvent) => {
        if (event.key === 'Enter') {
            onSearch();
        }
    };

    const handleSearchClick = () => {
        onSearch();
    };

    return (
        <div className="search-bar">
            <input
                type="text"
                value={city}
                onChange={handleInputChange}
                onKeyDown={handleKeyPress}
                placeholder="Enter City Name"
                className="search-input"
            />
            <div className="search-icon-wrapper" onClick={handleSearchClick}>
                <FontAwesomeIcon icon={faSearch} className="search-icon" />
            </div>
        </div>
    );
};
export default SearchBar;
