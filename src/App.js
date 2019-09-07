import React from "react";
import {Route, Switch} from "react-router-dom";
import Container from "react-bootstrap/Container";

import Header from "./components/Header";
import ListKeg from "./components/ListKeg";
import UserNav from "./components/UserNav";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <UserNav />
        <Container>
        <ListKeg />
        </Container>
      </header>
    </div>
  );
}

export default App;
