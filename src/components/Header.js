import React from 'react'
import '../css/Header.css';
import Logo from './Logo.js';
import NavBar from './NavBar.js'
import WidgetUser from './WidgetUser.js'

export default function Header() {
  const [tamanio, setTamanio] = React.useState(80);
  return (
    <div clasName='header-base'>

      <div className='header-logo'>
        <Logo Size={tamanio} />
      </div>

      <div className='header-menu'>
      <NavBar />
      </div>

      <div className='header-widgetUser'>
      <WidgetUser />
      </div>
    </div>
)
function subirpadre() {
  setTamanio(tamanio+1);
  console.log('onclickpadre')
}
}

