import React from 'react';

const Footer = () => {
  return (
    <footer>
        <nav className="nav_footer">
          <a className="nav_link logo" href="">
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
      </footer>
  );
};

export default Footer;