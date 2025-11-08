import React, { Component } from "react";
import "./card.css";

class Cards extends Component {
  render() {

    let {name, email, phone, color} = this.props
    return (
      <div className={`container ${color}`}>
        <h3>Dagi INC .</h3>
        <p>Name: {name}</p>
        {email && <p>Email: {email}</p>}
        {phone ? <p>Phone number: {phone}</p> : null}
      </div>
    );
  }
}

export default Cards;
