import React from 'react';
import ShoppingCart from '../logo.svg';
import { Nav } from 'react-bootstrap';

const CartWidget = () => {
  return(
      <Nav.Link href="#" className="avatar"><img src={ShoppingCart} alt="cartWidget" className="iconSize" /></Nav.Link>
  )
}

export default CartWidget;
