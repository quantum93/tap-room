import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/kombuchas">Kombuchas</Link>
          </li>
        </ul>

        <hr />

        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/kombuchas" component={Kombuchas} />
      </div>
    </Router>
  );
}

function Home() {
  return (
    <div>
      <h1>Welcome Kombucha Tap-Room Management System</h1>
      <ul>
        <li>As a patron, I want to see a list/menu of all available kegs. For each keg, I need to see its name, brand, price and alcoholContent (or perhaps something like flavor for a kombucha store).</li>
        <li>As an employee, I want to fill out a form when I tap a new keg to add it to the list.</li>
        <li>As an employee, I want the option to edit a keg's properties after entering them just in case I make a mistake.</li>
        <li>As a patron and/or employee, I want to see how many pints are left in a keg. (Hint: A full keg has roughly 124 pints).</li>
        <li>As an employee, I want to be able to click a button next to a keg whenever I sell a pint of it. This should decrease the number of pints left by 1.</li>
        <li>As an employee, I want to be able to see kegs with less than 10 pints left so I can be ready to change them.</li>
        <li>As a patron, I want to have kegs prices to be color-coded for easy readability. Perhaps based on their price (greater or less than $5 per pint, perhaps) or the particular style of beer or kombucha.</li>
        <li>As a patron, I want to use the alcohol content property to display stronger beers differently than weaker beers.</li>
      </ul>
    </div>
  );
}

function About() {
  return (
    <div>
      <h2>About</h2>
    </div>
  );
}

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

export default App;
