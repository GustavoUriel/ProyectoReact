import React from 'react'
import logo from '../img/pesos.png'

export default function Logo(props) {

  return (
    <div onClick= {subir} >
      <img src={logo} className="Logo" alt="$$$" height={props.Size} />
    </div>
    )
  function subir() {
    props.Size = props.Size + 1;

  }
}




