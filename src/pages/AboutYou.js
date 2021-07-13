import "bootstrap/dist/css/bootstrap.min.css";
import "../css/AboutYou.css";
import React, { useState, useEffect } from "react";
import { useLocalContext } from "../components/Context";
import UserServicesContainer from "../components/UserServicesContainer.js";
import Carousel from "../components/Carousel";
import { Tabs, Tab, DropdownButton, Dropdown, Collapse, Button } from "react-bootstrap";


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
  } = useLocalContext();
  const [open, setOpen] = useState(false);

  const user = listUserInfo();
  let txtFiscal, txtHome, txtCar, txtUndeclared, txtResidency;
  if (!user) {
    return <div>No hay usuario logueado</div>;
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
        <div id="example-collapse-text" className='border-rounded'>
          Registrado bajo el email: "{user.email}" y contrasena: "{user.pass}" <br />
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
          {(user.incomeNotRegistered == 0)
            ? "."
            :". Y, Sh... tu secreto está a salvo con nosotros alrededor de " +              user.incomeNotRegistered +
              ", de ingresos no facturados ni declarados."})
        </div>
      </Collapse>
      <UserServicesContainer />
    </div>
  )
}
