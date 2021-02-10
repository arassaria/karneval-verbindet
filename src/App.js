import "./App.css";
<<<<<<< HEAD
import hachenburger from "./assets/hachenburger.png";
import stadtLogo from "./assets/stadt logo.png";
import esLogo from "./assets/logo-eventservice.png";

function App() {
  return (
    <div className="App">
      <h1>Karneval Verbindet</h1>
      <div className="ContentWrapper">
        <div className="Stream">
          <iframe
            className="YouTube"
            title="Youtube"
            width="960"
            height="540"
            src="https://youtube.com/embed/dzwDA6ARiPM?autoplay=1"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
          <iframe
            className="Livechat"
            title="LiveChat"
            width="300"
            height="540"
            src="https://www.youtube.com/live_chat?v=dzwDA6ARiPM&amp;embed_domain=https://karneval-verbindet.vercel.app/"
          ></iframe>
        </div>
        <div className="Forms">
          <iframe
            title="MusikWuensche"
            src="https://docs.google.com/forms/d/e/1FAIpQLSfBfvwhAOf0jKIVfhmEGn1nEo1NEPMzh8hiovLCxxEvI9mqZQ/viewform?embedded=true"
            width="640"
            height="705"
            frameborder="0"
            marginheight="0"
            marginwidth="0"
          >
            Wird geladen…
          </iframe>
          <iframe
            title="Gruesse"
            src="https://docs.google.com/forms/d/e/1FAIpQLSetcHA024QgVDTxLWfq45w9ZYypi6sJb1kUstEq-paYkWSm5Q/viewform?embedded=true"
            width="640"
            height="546"
            frameborder="0"
            marginheight="0"
            marginwidth="0"
          >
            Wird geladen…
          </iframe>
        </div>
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
        </div>
      </div>
    </div>
  );
=======

function App() {
  return <div className="App"></div>;
>>>>>>> main
}

export default App;
