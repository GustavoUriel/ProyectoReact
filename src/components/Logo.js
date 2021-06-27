import React from 'react'
import logo from '../img/pesos.png'

export default function Logo(props) {
  console.log(props)
  return (
    <div>
      <img src={logo} className="Logo" alt="$$$" height={props.Size} />
    </div>
  )
}




