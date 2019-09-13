
import React from "react";
import Keg from "./Keg";
import {Link} from "react-router-dom";
import PropTypes from 'prop-types';

let myStyle = {
  textAlign: 'center',
}

const ListKeg = (props) => {
  return (
    <div style={myStyle} className="List-Keg">
    <Link to='/addkeg' className="ListKeg-link">Add new Keg</Link>
      <hr/>
      {props.ListKeg.map((keg, index) =>
        <Keg
          name={keg.name}
          brand={keg.brand}
          price={keg.price}
          alcoholContent={keg.alcoholContent}
          pints={keg.pints}
          key={keg.id}
          onDeleteKeg={props.onDeleteKeg}/>
      )}
    </div>
  );
}

ListKeg.propTypes = {
  ListKeg: PropTypes.array,
  onDeleteKeg: PropTypes.func
};

export default ListKeg;
