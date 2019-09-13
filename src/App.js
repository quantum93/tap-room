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

  handleAddingNewKegToList = (newKeg) => {
    var newMasterKegList = this.state.masterKegList.slice();
    newMasterKegList.push(newKeg);
    this.setState({masterKegList: newMasterKegList});
  }

  render() {
    return (
      <div className="App">
      <Header />
      <UserNav />
      <Container>
        <Switch>
          <Route exact path='/' render={()=><ListKeg listKeg={this.state.masterKegList} />} />
          <Route exact path='/addkeg' render={()=><AddKegControl onNewKegCreation={this.handleAddingNewKegToList} />} />
          <Route component={Error404} />
        </Switch>
      </Container>
      </div>
    );
  }
}

export default App;
