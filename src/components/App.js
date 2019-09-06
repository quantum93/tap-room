import React from "react";
import Home from "./Home";
import Header from "./Header";
import ListKeg from "./ListKeg/ListKeg";
import {Route, Switch} from "react-router-dom";
import Error404 from "../Error404";
import AddKeg from "./AddKeg/AddKeg"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <Switch>
          <Route exact path='/' component={ListKeg}/>
          <Route path='/addkeg' component={AddKeg}/>
          <Route component={Error404} />
        </Switch>
      </header>
    </div>
  );
}

export default App;
