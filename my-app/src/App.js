import "./App.css";
import lines from "./assets/lines.svg";
import card1 from "./assets/card1.png";
import card2 from "./assets/card2.png";
import card3 from "./assets/card3.png";
import card4 from "./assets/card4.png";

function App() {
  return (
    <div classNameName="App">
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
      <main>
        <section className="section__1">
          <h1 className="section_header black">Scoreboard text</h1>
          <div>
            <p>Contract: x8c81B4c816d66D36c4bF348BdeC01dBCbC70E987</p>
          </div>
        </section>
        <section className="section__2">
          <div className="with-img">
            <img className="lines" src={lines} alt="lines" />
            <h1 className="section_header white">Tokenomics</h1>
          </div>
          <ul className="card-list">
            <li>
              <div className="card">
                <img src={card1} alt="card1" />
                <div className="card-text">
                  <p>$</p>
                  <p>TOKEN</p>
                </div>
              </div>
            </li>
            <li>
              <div className="card">
                <img src={card2} alt="card1" />
                <div className="card-text">
                  <p>1B</p>
                  <p>Total Supply</p>
                </div>
              </div>
            </li>
            <li>
              <div className="card">
                <img src={card3} alt="card1" />
                <div className="card-text">
                  <p>0/0</p>
                  <p>taxes</p>
                </div>
              </div>
            </li>
            <li>
              <div className="card">
                <img src={card4} alt="card1" />
                <div className="card-text">
                  <p>Renounced</p>
                  <p>and Liquidity Burnt</p>
                </div>
              </div>
            </li>
          </ul>
        </section>
        <section className="section__3">
          <h1 className="section_header white">Horizontal art</h1>
        </section>
        <section className="section__4">
          <div className="with-img">
            <h1 className="section_header white">How to buy?</h1>
            <img className="lines" src={lines} alt="lines" />
          </div>
          <div>
            <div>
              <ul>
                <li>Step 1</li>
                <li>Step 1</li>
                <li>Step 1</li>
                <li>Step 1</li>
              </ul>
              <div>
                <img src="" alt="" />
                <p></p>
              </div>
            </div>
          </div>
        </section>
        <footer className="footer-container"></footer>
      </main>
    </div>
  );
}

export default App;
