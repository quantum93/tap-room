import React from "react";
import {Route, Switch} from "react-router-dom";

import Header from "./components/Header";
import ListKeg from "./components/ListKeg";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <ListKeg />
      </header>
    </div>
  );
}

export default App;
