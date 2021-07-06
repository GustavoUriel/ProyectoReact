import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/Home.css';
import React, { useEffect } from 'react';
import Jumbotron from '../components/Jumbotron.js';
import Carousel from '../components/Carousel.js';
import User from './User.js';
import ServicesContainer from './ServicesContainer.js';
import AboutUs from './AboutUs.js';
import Contact from './Contact.js';
import { useLocalContext } from '../components/Context';

export default function Home() {

  const { selectUser, listUserServices, addUserService, removeUserService, listServices, listProviders, getUserData, listUsers, doneLoading
  } = useLocalContext();


  useEffect(() => {

  })

  return (
    <div>
      Seleccione un usuario:
      {console.log('users to map')}
      {listUsers().map((i) => {
        return (
          <button
            onClick={() => {
              selectUser(i.id);
              console.log(i.id)
            }}>
            {i.id}
            {/*      <button onClick={() => selectUser(i.id)} > {i.id} </button> */}
          </button>
        )
      })}
      <br />
      <button onClick={() => listUserServices()} > listUserServices </button>
      <button onClick={() => listServices()} >listServices</button>
      <button onClick={() => listProviders()} > listProviders </button>
      <button onClick={() => getUserData()} > getUserData </button>
      <button onClick={() => listUsers()} >listUsers</button>

      <h1 className='tituloSeparador'>Jumbotron (solo en home)</h1>
      <Jumbotron />
      <h1 className='tituloSeparador'>Carousel (solo en home)</h1>
      <Carousel />
      <h1 className='tituloSeparador'>Usuario</h1>
      <User />
      <h1 className='tituloSeparador'>Servicios registrados</h1>
      <ServicesContainer />
      <h1 className='tituloSeparador'>Sobre nosotros</h1>
      <AboutUs />
      <h1 className='tituloSeparador'>Contacto</h1>
      <Contact />
      <h1 className='tituloSeparador'>Pie de página</h1>
    </div>
  );
}
