import React, { useState } from 'react';
import File from './File';
import URL from './URL';
import Search from './Search';

function Tab() {

    const [activeTab, setActiveTab] = useState('FILE');

    const handleTabClick = (tab, event) => {
      event.preventDefault();
      setActiveTab(tab);
    };

    return (
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
                <File />
              )}
              {activeTab === 'URL' && (
                <URL />
              )}
              {activeTab === 'SEARCH' && (
                <Search />
              )}
            </div>
        </div>
    );
};

export default Tab;