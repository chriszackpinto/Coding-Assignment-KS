import { useState, useEffect } from "react";
import { API_URL, DEMO } from "./API/API";
import "./App.css";
import Nav from "./components/Nav.js";
import Display from "./components/Display";
import CardList from "./components/CardList";

function App() {
  const [directory, setDirectory] = useState([]);
  const [display, setDisplay] = useState(DEMO);

  useEffect(() => {
    async function getNames() {
      try {
        const res = await fetch(API_URL);
        const data = await res.json();
        setDirectory(data.results);
        setDisplay(data.results[0]);
      } catch (error) {
        console.error(error.message);
      }
    }
    getNames();
  }, []);

  return (
    <div className="App">
      <Nav />
      <Display display={display} />
      <CardList directory={directory} setDisplay={setDisplay} />
    </div>
  );
}

export default App;
