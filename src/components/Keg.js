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
    backgroundColor: '#E5E5E5', // low alcoholContent
    borderRadius: "30px"
  }
  if (props.alcoholContent > 5) {
    kegStyles.backgroundColor = '#6E7DA2'; // high alcoholContent
  }

  let myStyle = {
    textAlign: 'center',
    fontWeight: 'bold'
  }

  return (
    <div style={myStyle} className='Keg'>
      <div style={kegStyles} className='Keg-info-container'>
        <div className='Keg-info' id='Keg-name'>Name: {props.name}</div>
        <div className='Keg-info' id='Keg-brand'>Brand: {props.brand}</div>

        <div id='price' style={priceStyles}>Price: ${props.price}</div>
        <div id='alcoholContent'>ABV: {props.alcoholContent}%</div>
        <div id='pints'>Pints: {props.pints}/124<button>Sell Pint</button></div>

        <div className='Keg-buttons-container'>
          <button>Edit</button>
          <button>Delete</button>
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
  alcoholContent: PropTypes.number.isRequired,
  pints: PropTypes.number.isRequired
}

export default Keg;
