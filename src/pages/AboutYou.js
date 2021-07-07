import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/AboutYou.css';
import React, { useState, useEffect } from 'react';
import { useLocalContext } from '../components/Context';
import UserServicesContainer from './UserServicesContainer.js';


export default function AboutYou() {
  const { selectUser, listUserServices, addUserService, removeUserService, listServices, listProviders, listUserData, listUsers, doneLoading
  } = useLocalContext();

  const user = listUserData();
  let txtFiscal,
    txtHome,
    txtCar,
    txtUndeclared,
    txtResidency
  if (!(user)) { return <div>No hay usuario logueado</div> }

  if (user.city != "CABA") { txtResidency = txtResidency + " en " + user.state }
  return (
    <div>
      <h1>Bienvenido {user.name} {user.surname}</h1>
      <div>
        <p>
          Registrado bajo el email: {user.email}. <br />
          Pronto tendremos tips y consejos para aprovechar tu dinero...<br />
          Específicamente para vos y en tu ciudad, {user.city}. <br />
          Como sabemos que{user.homeOwner ? '' : ' no'} tenés casa propia
          y{user.carOwner ? '' : ' no'} tenés auto, vamos a seleccionar nuestras propuestas a lo que más te convenga. <br />
          Vos{user.fiscalStatus ? '' : ' no'} estás registrado en el fisco,
          tus sueldo es {(user.incomeAsEmployee == 0) ? ('nulo (nos pasa a todos)') :(user.incomeAsEmployee)},
          y... {(user.incomeAsSelfEmployed == 0) ? ('nada') :(user.incomeAsSelfEmployed)} por trabajos autónomos facturados
          {(user.incomeNotRegistered == 0) ? ('.') 
          : (' Y, Sh!, tu secreto está a salvo con nosotros alrededor de ' + user.incomeNotRegistered +', de ingresos no facturados ni declarados.')}
        </p>
      </div>
      <UserServicesContainer />
    </div>)

}
