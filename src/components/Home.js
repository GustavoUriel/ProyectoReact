import React from 'react'
import Header from './Header.js';
import Jumbotron from './Jumbotron.js';
import Carousel from './Carousel.js';
import User from './User.js';
import ServicesContainer from './ServicesContainer.js';
import AboutUs from './AboutUs.js';
import Contact from './Contact.js';
import Footer from './Footer.js';



export default function Home() {
    return (
        <div >
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
