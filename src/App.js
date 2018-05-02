import React, { Component } from "react";
import "./App.css";
import Map from "./map/Map";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Traveler's Blog</h1>
        <Map isMarkerShown />
        <Map isMarkerShown={false} />
      </div>
    );
  }
}

export default App;
