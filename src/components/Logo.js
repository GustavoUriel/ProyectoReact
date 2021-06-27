import React from 'react'
import logo from '../img/pesos.png'

export default function Logo(props) {
  console.log(props)
  return (
    <div onClick= {subir} >
      <img src={logo} className="Logo" alt="$$$" height={props.Size} />
    </div>
    )
  function subir() {
    props.Size = props.Size + 1;
    console.log('onclick')
  }
}




