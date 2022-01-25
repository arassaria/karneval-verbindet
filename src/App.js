import "./App.css";
import hachenburger from "./assets/hachenburger.png";
import stadtLogo from "./assets/stadt logo.png";
import esLogo from "./assets/logo-eventservice.png";

function App() {
  return (
    <div className="App">
      <h1>Karneval Verbindet</h1>
      <div className="ContentWrapper">
        {/* <div className="Stream">
          <iframe
            src="https://kolbe-live.de/embed/video"
            title="Owncast"
            height="350px"
            width="550px"
            referrerpolicy="origin"
            scrolling="no"
            allowFullScreen
          ></iframe>
          <iframe
            src="https://kolbe-live.de/embed/chat/readwrite"
            title="Chat"
            height="350px"
            width="300px"
            referrerpolicy="origin"
            scrolling="no"
          ></iframe>
        </div> */}
        <div className="Footer">
          <h3>Unsere Sponsoren</h3>
          <div className="LogoContainer">
            <img src={hachenburger} alt="Hachenburger" />
            <img src={stadtLogo} alt="Karneval Montabaur" />
            <img
              src={esLogo}
              alt="Eventservice Mario Bachmeier"
              className="ESLogo"
            />
          </div>
          <div className="LinkContainer">
            <a href="https://www.eventservice-mb.de/rechtliches/impressum/">
              Impressum
            </a>
            <a href="https://www.eventservice-mb.de/rechtliches/datenschutz/">
              Datenschutz
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
