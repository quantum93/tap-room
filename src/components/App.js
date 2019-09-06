import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from "./Home";
import ListKeg from "./ListKeg/ListKeg";
import ListKegTitle from "./ListKeg/ListKegTitle";
import Kombuchas from "./Kombuchas";

function App() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/listkeg">ListKeg</Link>
          </li>
          <li>
            <Link to="/listkegtitle">ListKegTitle</Link>
          </li>
          <li>
            <Link to="/kombuchas">Kombuchas</Link>
          </li>
        </ul>

        <hr />

        <Route exact path="/" component={Home} />
        <Route path="/ListKeg" component={ListKeg} />
        <Route path="/ListKegTitle" component={ListKegTitle} />
        <Route path="/kombuchas" component={Kombuchas} />
      </div>
    </Router>
  );
}

export default App;
