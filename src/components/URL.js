import React, { useState } from 'react';
import {ReactComponent as UrlIcon} from "../icons/Url_Icon.svg";
import TermsAndConditions from "./T&C";

const URL = () =>  {

    const [url, setUrl] = useState('');

    const handleUrlChange = (event) => {
        setUrl(event.target.value);
    };

    const handleUrlSubmit = (event) => {
        event.preventDefault();

        // Simulate sending the URL to the server (replace with actual server request later)
        console.log('Sending URL to server:', url);

        // Clear the input field after submission
        setUrl('');
    };


    return (
        <form id="searchUrlForm" className="search vstack gap-4 align-items-center" onSubmit={handleUrlSubmit}>
            <div className="tab-logo">
               <UrlIcon />
            </div>
            <input id="urlSearchInput" autofocus type="text" className="form-control" placeholder="Search or scan a URL" value={url} onChange={handleUrlChange}/>
            <button type="submit" className="btn m-b-10" id="searchUrlButton"> Search </button>
            <TermsAndConditions />
        </form>
    );
};

export default URL;