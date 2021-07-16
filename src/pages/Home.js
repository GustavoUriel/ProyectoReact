import "bootstrap/dist/css/bootstrap.min.css";
import "../css/Home.css";
import React, { useEffect, useState, useContext } from "react";
import Jumbotron from "../components/Jumbotron.js";
import Carousel from "../components/Carousel.js";
import User from "./AboutYou.js";
import UserServicesContainer from "../components/UserServicesContainer.js";
import AboutUs from "./AboutUs.js";
import Contact from "./Contact.js";
import { useServerSide } from "../logic/ServerSide";
import Spinner from "react-bootstrap/Spinner";
import CustomModal from "../components/CustomModal";
import { render } from "react-dom/cjs/react-dom.development";

export default function Home() {
  const {
    selectUser,
    listUserServices,
    addUserService,
    removeUserService,
    listServices,
    listProviders,
    listUserInfo,
    listUsers,
    stillLoading,
    listUserUniqueProviders,
    listUserUniqueServices,
    howManyOfThisProvider,
    howManyOfThisService,
  } = useServerSide();

  return (
    <div>
     <h5> HOLA BELÉN, GRACIAS POR VER EL CÓDIGO. PRIMERO LEÉ ESTO. DESPUÉS APRETÁ F5 Y FIJATE LO QUE TE DIGO ABAJO</h5>
ABRÍ LA CONSOLA Y APRETÁ LAS TRES VECES EL MISMO NÚMERO DE USUARIO EN LOS BOTONES DE NÚMERO DEL JUMBOTRON. <br />
Cuando apretás hace console log([string del id de usuario], [objeto usuario], [array de servicios de ese usuario]),<br />
  Fijate que a la primera vez, sólo te muestra el id de usuario, y los otros dos objetos son undefined, <br />
  A la segunda vez, ya te cargó el objeto usuario, pero el array de servicios sigue undefined.<br />
  Recién a la tercera vez que apretás un usuario, se carga el array de servicios contratados de ese usuario.<br />
  No es una cuestión de esperar, es necesario apretar 3 veces.<br />
  Si apretás un usuario diferente, hace lo mismo, sólo que en vez de undefined te da el usuario que estaba cargado antes.<br />
  El código está en src/logic/ServerSide línea 123. Ahí te detallo en un comentario lo que creo que es el problema.<br />
  <br />
  Después de seleccionar (3 veces seguidas) un usuario, andá a la pestaña TUS SERVICIOS. Ahí tengo la otra consulta.<br />
  POR FAVOR, TAMBIÉN ME AYUDARÍA MUCHÍSIMO QUE ME DIGAS CÓMO ORDENAR Y LIMPIAR EL CÓDIGO
      <Jumbotron />
      <Carousel />
    </div>
  );
}

{/* <button onClick={() => listServices()}>listServices</button>
<button onClick={() => listProviders()}> listProviders </button>
<button onClick={() => listUserInfo()}> listUserInfo </button>
<button onClick={() => listUsers()}>listUsers</button> */}