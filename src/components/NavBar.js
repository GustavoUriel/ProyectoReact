import React, { Component } from "react";
/* import '../styles/NavBar.css'; 
 */
class NavBar extends Component {
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