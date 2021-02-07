import "./App.css";

function App() {
  return (
    <div className="App">
      <iframe
        title="Youtube"
        width="960"
        height="540"
        src="https://youtube.com/embed/RuA-79Emp1g"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
      <iframe
        title="LiveChat"
        width="300"
        height="540"
        src="https://www.youtube.com/live_chat?v=RuA-79Emp1g&amp;embed_domain=localhost"
      ></iframe>
      <form className="Form">
        <input type="Text" placeholder="Dein Name" />
        <input type="Text" placeholder="Titel des Songs" />
        <input type="Text" placeholder="Interpret" />
        <button type="submit">Abschicken</button>
      </form>
    </div>
  );
}

export default App;
