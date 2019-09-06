import React from "react";
import Home from "./Home";
import Header from "./Header";
import ListKeg from "./ListKeg/ListKeg";
import {Route, Switch} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <Route exact path='/' component={ListKeg}/>
      </header>
    </div>
  );
}

export default App;
