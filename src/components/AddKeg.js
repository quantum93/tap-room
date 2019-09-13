import React from "react";
import "./AddKeg.css";
import {Link} from "react-router-dom";
import PropTypes from "prop-types";
import { v4 } from 'uuid';

const AddKeg = (props) => {

  let _name = null;
  let _brand = null;
  let _price = null;
  let _alcoholContent = null;
  let _pints = null;

  const handleAddKegFormSubmission = (event) => {
    event.preventDefault();
    // console.log(_name.value);
    // console.log(_brand.value);
    // console.log(_price.value);
    // console.log(_alcoholContent.value);
    // console.log(_pints.value);

    props.onAddKegCreation({
      name: _name.value,
      brand: _brand.value,
      price: _price.value,
      alcoholContent: _alcoholContent.value,
      pints: _pints.value,
      id: v4()
    });

    _name.value = '';
    _brand.value = '';
    _price.value = '';
    _alcoholContent.value = '';
    _pints.value = '';
  }

  return (
    <div className='AddKeg'>
    <Link to='/' className="AddKeg-link">Back to the List of Kegs</Link>
      <form onSubmit={handleAddKegFormSubmission}>
        <input type='text' id='name' placeholder='Name'ref={(input) => {_name = input;}}/>
        <input type='text' id='brand' placeholder='Brand'ref={(input) => {_brand = input;}}/>
        <input type='number' step="0.01" id='alcoholContent' placeholder='%'ref={(input) => {_alcoholContent = input;}}/>
        <input type='number' step="0.01" id='price' placeholder='Price' ref={(input) => {_price = input;}}/>
        <input type='number' id='pints' placeholder='Pints' ref={(input) => {_pints = input;}}/>
        <button type='submit'>Add New Keg</button>
      </form>
    </div>
  );
}

AddKeg.propTypes = {onAddKegCreation: PropTypes.func};

export default AddKeg;
