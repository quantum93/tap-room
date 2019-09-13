import React from 'react';
import ConfirmationQuestions from './ConfirmationQuestions';
import AddKeg from './AddKeg';
import PropTypes from "prop-types";

class AddKegControl extends React.Component {

  constructor (props) {
    super(props);
    this.state = {formVisibleOnPage: false};
  }

  handleConfirmation = () => { this.setState({formVisibleOnPage: true}); }

  render() {
    let currentlyVisibleContent = null;

    if (this.state.formVisibleOnPage) {
      currentlyVisibleContent = <AddKeg onAddKegCreation={this.props.onAddKegCreation}/>;
    } else {
      currentlyVisibleContent = <ConfirmationQuestions onConfirmation={this.handleConfirmation}/>;
    }

    return (<div>{currentlyVisibleContent}</div>);
  }
}

AddKegControl.propTypes = {
  onAddKegCreation:PropTypes.func
};

export default AddKegControl;
