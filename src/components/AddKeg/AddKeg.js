import React from "react";
import "./AddKeg.css";
import {Link} from "react-router-dom";

function AddKeg() {
  return (
    <div className='AddKeg'>
    <Link to='/' className="AddKeg-link">Back to the List of Kegs</Link>
      <form>
        <input type='text' id='name' placeholder='Name'/>
        <input type='text' id='brand' placeholder='Brand'/>
        <input type='number' id='alcoholContent' placeholder='%'/>
        <input type='number' id='price' placeholder='Price'/>
        <input type='number' id='pints' placeholder='Pints'/>
        <button type='submit'>Add Keg</button>
      </form>
    </div>
  );
}

export default AddKeg;
