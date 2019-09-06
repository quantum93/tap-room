import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function Kombuchas({ match }) {
  return (
    <div>
      <h2>Kombuchas</h2>
      <ul>
        <li>
          <Link to={`${match.url}/rendering`}>Rendering with React</Link>
        </li>
        <li>
          <Link to={`${match.url}/components`}>Components</Link>
        </li>
        <li>
          <Link to={`${match.url}/props-v-state`}>Props v. State</Link>
        </li>
      </ul>

      <hr/>

      <Route path={`${match.path}/:kombuchaId`} component={Kombucha} />
      <Route exact path={match.path} render={() => <h3>Please select a kombucha.</h3>}
      />
    </div>
  );
}

function Kombucha({ match }) {
  return (
    <div>
      <h3>{match.params.kombuchaId}</h3>
    </div>
  );
}

export default Kombuchas;
