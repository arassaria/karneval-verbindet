import "./App.css";
import {
  BrowserRouter as Router,
  Routes as Switch,
  Link,
  Route,
} from "react-router-dom";
import Home from "./pages/Home";
import Impressum from "./pages/Impressum";
import styled from "styled-components/macro";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/impressum" element={<Impressum />} />
          <Route path="/" element={<Home />} />
        </Switch>
        <Footer>
          <Link to="/">Home</Link>
          <Link to="/impressum">Impressum</Link>
        </Footer>
      </Router>
    </div>
  );
}

export default App;

const Footer = styled.div`
  display: flex;
  justify-content: space-evenly;
`;
