import React, { useState } from 'react';
import TermsAndConditions from "./T&C";
import {ReactComponent as SearchIcon} from "../icons/search_Icon.svg";

const Search = () => {

    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleSearchSubmit = (e) => {
        e.preventDefault();

        // Assuming you have a server endpoint for processing the input
        const backendEndpoint = '/your-backend-endpoint'; // Replace with your actual backend endpoint

        // Make a POST request to the server with the input value
        fetch(backendEndpoint, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ inputValue }),
        })
        .then(response => response.json())
        .then(data => {
            // Handle the response from the server
            console.log('Server response:', data);
        })
        .catch(error => {
            console.error('Error sending data to server:', error);
        });

        // Clear the input field after submission
        setInputValue('');
    };

    return (
        <div data-route="search" className="search vstack gap-4 align-items-center">
            <SearchIcon />
            <p class="search-desc"> Search for a hash, domain, IP address, URL or gain additional context and threat landscape visibility with <a class="link-primary text-uppercase" href="/">VT Enterprise</a>.
            </p>
            <div className="input-placeholder-wrapper">
            <form onSubmit={handleSearchSubmit} class="search vstack gap-4 align-items-center">
                <input type="text" id="placeholderInput" className="form-control" autoComplete="off" spellCheck="false" autofocus="" placeholder="URL, IP address, domain, or file hash" value={inputValue} onChange={handleInputChange} />
                <button type="submit" className="btn m-b-10">Search</button>
                <TermsAndConditions />
            </form>
            </div>
        </div>
    );
};

export default Search;