import React from 'react'
import '../css/Header.css';
import Logo from './Logo.js';
import NavBar from './NavBar.js'
import WidgetUser from './WidgetUser.js'

export default function Header() {
  return (
    <div clasName='row align-items-center'>
      <div className=' col-2'>
        <Logo Size={80} />
      </div>

      <div className=' col-6'>
      <NavBar />
      </div>

      <div className=' col-4'>
      <WidgetUser />

      </div>
    </div>
)
}
