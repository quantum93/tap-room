import React from 'react';
import ConfirmationQuestions from './ConfirmationQuestions';
import AddKeg from './AddKeg';

class AddKegControl extends React.Component {

  constructor (props) {
    super(props);
    this.state = {formVisibleOnPage: false};
  }

  render() {
    let currentlyVisibleContent = null;

    if (this.state.formVisibleOnPage) {
      currentlyVisibleContent = <AddKeg />;
    } else {
      currentlyVisibleContent = <ConfirmationQuestions />;
    }

    return (<div>{currentlyVisibleContent}</div>);
  }
}

export default AddKegControl;
