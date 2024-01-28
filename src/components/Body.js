import React, { useState } from 'react';

function Body() {
  const [activeTab, setActiveTab] = useState('FILE');

  const handleTabClick = (tab, event) => {
    event.preventDefault();
    setActiveTab(tab);
  };

  return (
    <div className="container">
      <div className="wrapper">
        <header className="text-primary">
          <img src={process.env.PUBLIC_URL + '/MalDetect_logo.png'} alt="MalDetect" />
        </header>
        <p className="about">
          Analyse suspicious files, domains, IPs and URLs to detect malware and other breaches, automatically share them with the security community.
        </p>
        <div>
          <div className="omnibar">
            <div className="tab-wrapper">
              <ul className="nav bg-body-secondary" role="tablist">
                <li className={activeTab === 'FILE' ? 'nav-link-active' : 'nav-item'}>
                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                  <a href="#" onClick={(e) => handleTabClick('FILE', e)}>FILE</a>
                </li>
                <li className={activeTab === 'URL' ? 'nav-link-active' : 'nav-item'}>
                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                  <a href="#" onClick={(e) => handleTabClick('URL', e)}>URL</a>
                </li>
                <li className={activeTab === 'SEARCH' ? 'nav-link-active' : 'nav-item'}>
                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                  <a href="#" onClick={(e) => handleTabClick('SEARCH', e)}>SEARCH</a>
                </li>
              </ul>
            </div>
            <div className="section-wrapper">
              {/* Content based on active tab */}
              {activeTab === 'FILE' && (
                <p>
                  Content for FILE tab Lorem ipsum dolor sit amet consectetur adipisicing elit...
                </p>
              )}
              {activeTab === 'URL' && (
                <p>
                  Content for URL tab Lorem ipsum dolor sit amet consectetur adipisicing elit...
                </p>
              )}
              {activeTab === 'SEARCH' && (
                <p>
                  Content for SEARCH tab Lorem ipsum dolor sit amet consectetur adipisicing elit...
                </p>
              )}
            </div>
          </div>
          <div className="tip bg-body-secondary">
            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 24 24">
              {/* SVG paths */}
            </svg>
            <span>
              Want to automate submissions? <a href="/">Check our API</a>, or access your <a href="/">API key</a>.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Body;
