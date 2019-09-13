
import React from "react";
import ListKegItem from "./ListKegItem";
import {Link} from "react-router-dom";

// let List_Keg = [
//   {name: "Ginger Fixx", brand: "Lion Heart", price: 4.50, alcoholContent: 3, pints: 3},
//   {name: "Lemon Ginger", brand: "Humm", price: 3.50, alcoholContent: 0, pints: 86},
//   {name: "Original", brand: "Kevita Master Brew", price: 5.00, alcoholContent: 0, pints: 124},
//   {name: "Ginger Devil", brand: "Brew Dr.", price: 3.79, alcoholContent: 10, pints: 30},
// ]

let myStyle = {
  textAlign: 'center',
}

function ListKeg() {
  return (
    <div style={myStyle} className="List-Keg">
    <Link to='/addkeg' className="ListKeg-link">Add new Keg</Link>
      <hr/>
      {List_Keg.map((keg, index) =>
        <ListKegItem
          name={keg.name}
          brand={keg.brand}
          price={keg.price}
          alcoholContent={keg.alcoholContent}
          pints={keg.pints}
          key={index}/>
      )}
    </div>
  );
}

export default ListKeg;
