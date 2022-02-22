import "./App.css";
import GlobalStyle from "./GlobalStyles";
import styled from "styled-components/macro";
import {
  BrowserRouter as Router,
  Routes as Switch,
  Route,
  Link,
} from "react-router-dom";
import Schriftzug from "./assets/Karneval-Verbindet Schriftzug.svg";
import Hut from "./assets/KarnevalHut.svg";
import Livestream from "./pages/Livestream";
import Sponsors from "./pages/Sponsors";
import Contact from "./pages/Contact";
import Impressum from "./pages/Impressum";
import Datenschutz from "./pages/Datenschutz";

function App() {
  return (
    <>
      <Router>
        <GlobalStyle />
        <Header>
          <Logo src={Hut} alt="Hut" />
          <Logo src={Schriftzug} alt="Logo" />
          <Logo src={Hut} alt="Hut" />
        </Header>
        <Nav>
          <Link to="/">Livestream</Link>
          <Link to="/sponsors">Sponsoren</Link>
          <Link to="/contact">Kontakt</Link>
        </Nav>
        <Switch>
          <Route path="/impressum" element={<Impressum />} />
          <Route path="/datenschutz" element={<Datenschutz />} />
          <Route path="/sponsors" element={<Sponsors />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/" element={<Livestream />} />
        </Switch>
        <Footer>
          <div className="LinkContainer">
            <Link to="/impressum">Impressum</Link>
            <Link to="/datenschutz">Datenschutz</Link>
          </div>
        </Footer>
      </Router>
    </>
  );
}

export default App;

const Nav = styled.div`
  background-color: #3f789b;
  list-style-type: none;
  display: flex;
  justify-content: space-evenly;
  padding: 20px 0;
`;

const Header = styled.div`
  display: flex;
  height: 100px;
  justify-content: space-between;
  max-width: 100vw;
  @media screen and (min-width: 900px) {
    margin: 0 20%;
    > :last-child {
      margin-right: 0;
    }
  }
  @media screen and (max-width: 900px) {
    margin: 0;
    > :last-child {
      margin-right: 10px;
    }
  }
`;

const Footer = styled.div`
  background-color: black;
  color: white;
  position: fixed;
  bottom: 0;
  text-align: center;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

const Logo = styled.img`
  height: 100px;
  padding-right: 5px;
`;
