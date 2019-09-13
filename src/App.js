import React from "react";
import {Route, Switch} from "react-router-dom";
import Container from "react-bootstrap/Container";

import Header from "./components/Header";
import ListKeg from "./components/ListKeg";
import UserNav from "./components/UserNav";
import Error404 from "./components/Error404";
import AddKegControl from "./components/AddKegControl";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state={masterKegList: []};
  }

  render() {
    return (
      <div className="App">
      <Header />
      <UserNav />
      <Container>
        <Switch>
          <Route exact path='/' component={ListKeg} />
          <Route exact path='/addkeg' component={AddKegControl} />
          <Route component={Error404} />
        </Switch>
      </Container>
      </div>
    );
  }
}

export default App;
