import React from 'react';
import { Link } from 'react-router-dom';
import './EditKeg.css'

function EditKeg(props){
  return (
    <div className='EditKeg'>
      <h1>Edit Keg Info</h1>
      <form>
        <input type='text' id='name' placeholder='Name'/>
        <input type='text' id='brand' placeholder='Brand'/>
        <input type='number' id='alcoholContent' placeholder='ABV'/>
        <input type='number' id='price' placeholder='Price'/>
        <input type='number' id='pints' placeholder='Pints'/>
        <button type='submit'>Submit</button>
      </form>
      <Link to='/' className='EditKeg-link'>Cancel</Link>
    </div>
  );
}

export default EditKeg;
