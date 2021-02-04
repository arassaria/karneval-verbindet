import "./App.css";

function App() {
  return (
    <div className="App">
      <iframe
        src="https://player.twitch.tv/?channel=zock4fun92&parent=karneval-verbindet.vercel.app"
        frameborder="0"
        allowfullscreen="true"
        scrolling="no"
        height="378"
        width="620"
      ></iframe>
      <iframe
        id="chat_embed"
        src="https://www.twitch.tv/embed/zock4fun92/chat?parent=karneval-verbindet.vercel.app"
        height="500"
        width="350"
      ></iframe>
    </div>
  );
}

export default App;
