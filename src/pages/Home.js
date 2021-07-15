import "bootstrap/dist/css/bootstrap.min.css";
import "../css/Home.css";
import React, { useEffect, useState, useContext } from "react";
import Jumbotron from "../components/Jumbotron.js";
import Carousel from "../components/Carousel.js";
import User from "./AboutYou.js";
import UserServicesContainer from "../components/UserServicesContainer.js";
import AboutUs from "./AboutUs.js";
import Contact from "./Contact.js";
import { useServerSide } from "../components/ServerSide";
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
      Seleccione un usuario:
      {listUsers().map((i) => {
        return (
          <button
            onClick={() => {
              selectUser("" + i.id);
            }}
          >
            {i.id}
          </button>
        );
      })}
      <br />
      <button onClick={() => listServices()}>listServices</button>
      <button onClick={() => listProviders()}> listProviders </button>
      <button onClick={() => listUserInfo()}> listUserInfo </button>
      <button onClick={() => listUsers()}>listUsers</button>
      <h1 className="tituloSeparador">Jumbotron (solo en home)</h1>
      <Jumbotron />
      <h1 className="tituloSeparador">Carousel (solo en home)</h1>
      <Carousel />
      <h1 className="tituloSeparador">Contacto</h1>
      <Contact />
      <h1 className="tituloSeparador">Pie de página</h1>
    </div>
  );
}
