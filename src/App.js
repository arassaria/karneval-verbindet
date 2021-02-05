import "./App.css";
import flyer from "./assets/karneval-verbindet.png";

function App() {
  return (
    <div className="App">
      <img
        className="Flyer"
        src={flyer}
        alt="Karneval verbindet"
        width="1920"
        height="1080"
      />
    </div>
  );
}

export default App;
