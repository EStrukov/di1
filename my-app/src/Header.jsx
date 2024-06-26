import React, { useState } from 'react';

const Header = () => {
  const [active, setActive] = useState(false)
  return (
    <header className='header'>
      <a className="nav_link logo" href="">
            Tyke Mason
          </a>

        <nav className={`nav ${active ? 'open' : ''}`}>
          
          <ul>
            <li className="nav_item">
              <a className="nav_link" href="">
                Twitter
              </a>
            </li>
            <li className="nav_item">
              <a className="nav_link" href="">
                Telegram
              </a>
            </li>
            <li className="nav_item">
              <a className="nav_link" href="">
                Chart
              </a>
            </li>
          </ul>
          <a className="nav__link-button" href="">
            Buy $Token
          </a>
        </nav>
        <button className={`burger ${active ? 'active' : ''}`} onClick={() => {setActive(!active)}} active={active}>
          <span></span>
        </button>
      </header>
  );
};

export default Header;