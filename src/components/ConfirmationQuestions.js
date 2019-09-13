import React from 'react';
import PropTypes from 'prop-types';

const ConfirmationQuestions = (props) => {
  return (
    <div>
      <p>Have you gone through all the current keg list on the main page?</p>
      <button onClick={props.onConfirmation}>Yes</button>
    </div>
  );
}

ConfirmationQuestions.propTypes = {onConfirmation: PropTypes.func};

export default ConfirmationQuestions;
