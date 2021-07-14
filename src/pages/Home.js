import "bootstrap/dist/css/bootstrap.min.css";
import "../css/Home.css";
import React, { useEffect, useState, useContext } from "react";
import Jumbotron from "../components/Jumbotron.js";
import Carousel from "../components/Carousel.js";
import User from "./AboutYou.js";
import UserServicesContainer from "../components/UserServicesContainer.js";
import AboutUs from "./AboutUs.js";
import Contact from "./Contact.js";
import { useLocalContext } from "../components/Context";
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
  } = useLocalContext();

  const [showModal, setShowModal] = useState(false);
  /* 
  {savings <= 10 ? (
    <Button variant="primary" block>
      {txtMoney} Este servicio esta optimizado. Felicitaciones!{" "}
    </Button>
  ) : (
    <Button
      variant="success"
      onClick={() => setOpen(open == i.id ? "" : "" + i.id)}
      aria-expanded={open}
      block
    >
      {txtMoney} Podés obtener hasta un {parseInt(savings)}% de
      ahorro {open}
    </Button>
  )}
 */
  /* const [notLoaded, setNotLoaded] = useState(stillLoading())

setNotLoaded(stillLoading())
 */
  return (
    <div>
      {/*  {notLoaded ? (
        <div>
          {" "}
          <Spinner animation="border" variant="primary" />{" "}
        </div>
      ) : ( */}
      <div>
        Seleccione un usuario:
        {listUsers().map((i) => {
          return (
            <button
              onClick={() => {
                selectUser("" + i.id);
              }}
            >
              {i.id}
              {/*      <button onClick={() => selectUser(i.id)} > {i.id} </button> */}
            </button>
          );
        })}
        <br />
        <button onClick={() => listServices()}>listServices</button>
        <button onClick={() => listProviders()}> listProviders </button>
        <button onClick={() => listUserInfo()}> listUserInfo </button>
        <button onClick={() => listUsers()}>listUsers</button>
        <h1 className="tituloSeparador">CustomModal (solo en home)</h1>
        <h1 className="tituloSeparador">Jumbotron (solo en home)</h1>
        <Jumbotron />
        <h1 className="tituloSeparador">Carousel (solo en home)</h1>
        <Carousel />
        <h1 className="tituloSeparador">Contacto</h1>
        <Contact />
        <h1 className="tituloSeparador">Pie de página</h1>
      </div>
    </div>
  );
}
