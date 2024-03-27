import React from 'react';

const Header = () => {
  return (
    <header>
        <nav className="nav">
          <a className="nav_link" href="">
            Tyke Mason
          </a>
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
      </header>
  );
};

export default Header;