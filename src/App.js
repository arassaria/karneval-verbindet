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
  );
}

export default App;
