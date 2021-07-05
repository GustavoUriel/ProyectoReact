import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/Contact.css';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
/* import { GetUsers } from '../components/Context.js';
import { Card, Accordion, Button } from 'react-bootstrap';
 */
export default function Contact() {
/*     const temp = GetUsers()
 */
    return (
        <div>
          <h1>Contenido del array de usuarios</h1>
       </div>
    )
}
{/* 

          <Accordion>
        {temp.map((i) => {
          return (
            <Card>
              <Card.Header>
                <h3 className="mb-0">
                  <Accordion.Toggle as={Button} variant="link" eventKey={i.id.toString()}>
                    <small>Nombre: {i.nombre}</small>
                    <h3>Apellido: {i.apellido}</h3>
                    <small>Origen: {i.ciudad}, {i.provincia}</small>
                  </Accordion.Toggle>
                </h3>
              </Card.Header>
              <Accordion.Collapse eventKey={i.id.toString()}>
                <Card.Body>
                <p className="">Email de registro: {i.email} </p>
                <p className="">Contraseña: {i.contrasena} </p>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          )})}
</Accordion>
 */} 