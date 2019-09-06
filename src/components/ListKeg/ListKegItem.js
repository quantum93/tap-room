import React from 'react';
import PropTypes from "prop-types";

function Keg(props) {
  const priceStyles = {
    color: 'red',
    fontWeight: 'bold'
  }
  if (props.price < 5) {
    priceStyles.color = 'green';
  }
  const kegStyles = {
    backgroundColor: '#80ced6' // low alcoholContent
  }
  if (props.alcoholContent > 5) {
    kegStyles.backgroundColor = '#f18973'; // high alcoholContent
  }

  return (
    <div className='Keg'>
      <div style={kegStyles} className='Keg-info-container'>
        <div className='Keg-info' id='Keg-name'>{props.name}</div>
        <div className='Keg-info' id='Keg-brand'>{props.brand}</div>
        <div className='Keg-info'>
          <div id='price' style={priceStyles}>Price: ${props.price}</div>
          <div id='alcoholContent'>ABV: {props.alcoholContent}%</div>
          <div id='pints'>Pints: {props.pints}</div>
        </div>
        <div className='Keg-buttons-container'>
          <div>
            <button>Edit</button>
            <button>Delete</button>
          </div>

        </div>
      </div>
      <hr/>
    </div>
  );
}

Keg.propTypes = {
  name: PropTypes.string.isRequired,
  brand: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  alcoholContent: PropTypes.number.isRequired
}

export default Keg;
