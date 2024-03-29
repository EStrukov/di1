import "./App.css";
import SimpleSlider from "./slider";
import lines from "./assets/lines.svg";
import linesBlack from "./assets/linesblack.svg";
import card1 from "./assets/card1.png";
import card2 from "./assets/card2.png";
import card3 from "./assets/card3.png";
import card4 from "./assets/card4.png";
import step1 from "./assets/step_1.png";
import step2 from "./assets/step_2.png";
import step3 from "./assets/step_3.png";
import step4 from "./assets/step_4.png";
import hollywood from "./assets/hollywood.png";
import Header from "./Header";
import Footer from "./Footer";

function App() {
  const slides = [
    <div className="slide__content">
      <div className="img__container">
        <img src={step1} alt="Slide 1" />
      </div>
      <div className="slide__content-text">
        <h3>Header</h3>
        <p>
          Sodales dui sit vestibulum faucibus. Ornare lacinia sodales cursus
          morbi efficitur hac tortor, vestibulum dapibus dui arcu ipsum libero,
          sed dictum.
          <br />
          <br />
          Ex. Arcu sapien amet, libero, sit dapibus ultricies. Vitae molestie
          tempus malesuada pellentesque quis, libero, ipsum dictum ultricies.
          Tempus dictum hac ut.
          <br />
        </p>
      </div>
    </div>,
    <div className="slide__content">
      <div className="img__container">
        <img src={step2} alt="Slide 2" />
      </div>

      <div className="slide__content-text">
        <h3>Header</h3>
        <p>
          Sodales dui sit vestibulum faucibus. Ornare lacinia sodales cursus
          morbi efficitur hac tortor, vestibulum dapibus dui arcu ipsum libero,
          sed dictum.
          <br />
          <br />
          Ex. Arcu sapien amet, libero, sit dapibus ultricies. Vitae molestie
          tempus malesuada pellentesque quis, libero, ipsum dictum ultricies.
          Tempus dictum hac ut.
          <br />
        </p>
      </div>
    </div>,
    <div className="slide__content">
      <div className="img__container">
        <img src={step3} alt="Slide 3" />
      </div>

      <div className="slide__content-text">
        <h3>Header</h3>
        <p>
          Sodales dui sit vestibulum faucibus. Ornare lacinia sodales cursus
          morbi efficitur hac tortor, vestibulum dapibus dui arcu ipsum libero,
          sed dictum.
          <br />
          <br />
          Ex. Arcu sapien amet, libero, sit dapibus ultricies. Vitae molestie
          tempus malesuada pellentesque quis, libero, ipsum dictum ultricies.
          Tempus dictum hac ut.
          <br />
        </p>
      </div>
    </div>,
    <div className="slide__content">
      <div className="img__container">
        <img src={step4} alt="Slide 4" />
      </div>

      <div className="slide__content-text">
        <h3>Header</h3>
        <p>
          Sodales dui sit vestibulum faucibus. Ornare lacinia sodales cursus
          morbi efficitur hac tortor, vestibulum dapibus dui arcu ipsum libero,
          sed dictum.
          <br />
          <br />
          Ex. Arcu sapien amet, libero, sit dapibus ultricies. Vitae molestie
          tempus malesuada pellentesque quis, libero, ipsum dictum ultricies.
          Tempus dictum hac ut.
          <br />
        </p>
      </div>
    </div>,
  ];

  const controls = [
    { label: "Step 1", value: 0 },
    { label: "Step 2", value: 1 },
    { label: "Step 3", value: 2 },
    { label: "Step 4", value: 3 },
  ];

  return (
    <div className="App">
      {<Header />}
      <main>
        <section className="section__1">
          <div className="background">
            <p>Contract: x8c81B4c816d66D36c4bF348BdeC01dBCbC70E987</p>
            {/* <div className="block_bord"><div></div></div> */}
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
          {/* <div className="block_bord"></div> */}
        </section>
        <div className="section__3_wrap">
          <section className="section__3">
            <h1 className="section_header white">Horizontal art</h1>
          </section>
        </div>

        <section className="section__4">
          <div className="with-img">
            <h1 className="section_header white">How to buy?</h1>
            <img className="lines" src={lines} alt="lines" />
          </div>
          <div className="slider__container">
            {<SimpleSlider slides={slides} controls={controls} />}
          </div>
          {/* <div className="block_bord"></div> */}
        </section>
        <div className="section__5-wrap">
          <section className="section__5">
            <div className="with-img">
              <img className="lines" src={linesBlack} alt="lines" />
              <h1 className="section_header black">Parting phrase</h1>
            </div>
            <div>
              <img className="hollywood" src={hollywood} alt="hollywood" />
            </div>
            {<Footer />}
          </section>
        </div>
      </main>
    </div>
  );
}

export default App;
