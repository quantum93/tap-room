import React from "react";
import PropTypes from "prop-types";

function ListKegTitle(props) {
  const priceStyles = {
    color: 'red',
  }
  if (props.price < 5) {
    priceStyles.color = 'green';
  }
  const kegStyles = {
    backgroundColor: '#d1ac6e' // For lower ABV beers
  }
  if (props.alcoholContent > 5) {
    kegStyles.backgroundColor = '#966d28'; // For higher ABV beers
  }

  return (
    <div className="List-Keg-Title">
    <p><span className='Keg-name'>{props.name}</span> - <span className='Keg-brand'>{props.brand}</span></p>
    <p className='Keg-info'><span className='Keg-price'>Price: ${props.price}</span> <span className='Keg-alcoholContent'>ABV: {props.alcoholContent}%</span> <span className='Keg-pints'>Pints: {props.pints}</span></p>
    <hr/>
    </div>
  );
}

ListKegTitle.propTypes = {
  name: PropTypes.string.isRequired,
  brand: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  alcoholContent: PropTypes.number.isRequired,
  pints: PropTypes.number.isRequired
};

export default ListKegTitle;
