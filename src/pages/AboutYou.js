import "bootstrap/dist/css/bootstrap.min.css";
import "../css/AboutYou.css";
import React, { useState, useEffect } from "react";
import { useServerSide } from "../logic/ServerSide";
import UserServicesContainer from "../components/UserServicesContainer.js";
import Carousel from "../components/Carousel";
import {
  Tabs,
  Tab,
  DropdownButton,
  Dropdown,
  Collapse,
  Button,
} from "react-bootstrap";

export default function AboutYou() {
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
  } = useServerSide();
  const [open, setOpen] = useState(false);

  const user = listUserInfo();
  let txtFiscal, txtHome, txtCar, txtUndeclared, txtResidency;
  if (!user) {
    return (
      <div>
        <h1>No hay usuario logueado</h1>
      </div>
    );
  }

  if (user.city != "CABA") {
    txtResidency = txtResidency + " en " + user.state;
  }
  return (
    <div>
      <Button
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}
        block
        size="lg"
        variant="outline-primary"
      >
        Bienvenido {user.name} {user.surname}
      </Button>
      <Collapse in={open}>
        <div id="example-collapse-text" className="border-rounded">
          Registrado bajo el email: "{user.email}" y contrasena: "{user.pass}"{" "}
          <br />
          Pronto tendremos tips y consejos para aprovechar tu dinero...
          <br />
          Específicamente para vos y en tu ciudad, {user.city}. <br />
          Como sabemos que{user.homeOwner ? "" : " no"} tenés casa propia y
          {user.carOwner ? "" : " no"} tenés auto, vamos a seleccionar nuestras
          propuestas a lo que más te convenga. <br />
          Vos{user.fiscalStatus ? "" : " no"} estás registrado en el fisco, tus
          sueldo es{" "}
          {user.incomeAsEmployee == 0
            ? "nulo (nos pasa a todos)"
            : user.incomeAsEmployee}
          , y...{" "}
          {user.incomeAsSelfEmployed == 0 ? "nada" : user.incomeAsSelfEmployed}{" "}
          por trabajos autónomos facturados
          {user.incomeNotRegistered == 0
            ? "."
            : ". Y, Sh... tu secreto está a salvo con nosotros alrededor de " +
              user.incomeNotRegistered +
              ", de ingresos no facturados ni declarados."}
        </div>
      </Collapse>
      Acá cuando apretás borrar y aceptás en el Modal, en verdad se borra el
      servicio, pero no lo ves hasta que se renderiza la página de nuevo. <br />
      Y se renderiza de nuevo al borrar otro servicio o al seleccionar EL MISMO
      usuario 3 veces en la página HOME.
      <br />
      CREO QUE ES EL MISMO PROBLEMA QUE EL DE LA PÁGINA HOME, QUE HAY QUE
      APRETAR 3 VECES.
      <br />
      NOTA: Cada vez que recargás la página se generan random 100 servicios que
      se reparten entre los 10 usuarios. <br />
      Asique no aprietes F5, solamente andá a HOME y seleccioná el usuario, y
      volvé a esta página de TUS SERVICIOS Podés usar las pestañas de abajo para
      ver todos o filtrar por proveedor o por tipo de servicio.
      <UserServicesContainer />
    </div>
  );
}
