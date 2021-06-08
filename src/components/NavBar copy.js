import React, { Component } from "react";
/* import '../styles/NavBar.css'; 
 */
class Contador extends Component {
  render() {
    return (
      <nav>
        <a className="active" href="#home">PetShop</a>
        <a href="#news">Productos</a>
        <a href="#contact">Promociones</a>
        <a href="#about">About</a>
    </nav>
    );
  }
}

export default NavBar;