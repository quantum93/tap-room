import React from "react";
import {Route, Switch} from "react-router-dom";
import Container from "react-bootstrap/Container";

import Header from "./components/Header";
import ListKeg from "./components/ListKeg";
import UserNav from "./components/UserNav";
import Error404 from "./components/Error404";

function App() {
  return (
    <div className="App">
      <Header />
      <UserNav />
        <Container>
          <ListKeg />
          <Error404 />
        </Container>
    </div>
  );
}

export default App;
