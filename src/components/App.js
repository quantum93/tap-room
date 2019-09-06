import React from "react";
import Home from "./Home";
import ListKeg from "./ListKeg/ListKeg";
import {Route, Switch} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Home/>
        <Route exact path='/' component={ListKeg}/>
      </header>
    </div>
  );
}

export default App;
