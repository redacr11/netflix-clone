import React from "react";
import "./App.css";
import Banner from "./Components/Banner";
import Row from "./Components/Row";
import requests from "./requests";
import Nav from "./Components/Nav";

function App() {
  return (
    <div className="App">
      <Nav />
      <Banner />
      <Row title="Animation" fetchUrl={requests.fetchAnimation} isLargeRow />
      <Row title="News" fetchUrl={requests.fetchNews} />
    </div>
  );
}

export default App;
