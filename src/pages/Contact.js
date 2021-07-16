import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/Contact.css';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
/* import { GetUsers } from '../components/FromServerSide.js';
import { Card, Accordion, Button } from 'react-bootstrap';
 */
export default function Contact() {
/*     const temp = GetUsers()
 */
return (
  <div id="seccionContanos">
    <div class="row row-content">
      <div class="col-12">
        <h3>Información de Contacto</h3>
      </div>
      <div class="col-12 col-sm-4 offset-sm-1">
        <h5>Nuestra dirección</h5>
        <address>
          Avenida Siempreviva 742
          <br />
          Springfield, Argentina
          <br />
          <i class="fa fa-phone"></i>: +555 5555 5555
          <br />
          <i class="fa fa-fax"></i>: +555 5555 5556
          <br />
          <i class="fa fa-envelope"></i>:
          <a href="mailto:glevcovich@outlook.com">glevcovich@outlook.com</a>
        </address>
      </div>
      <div class="col-12 col-sm-6 offset-sm-1">
        <h5>Nuestra ubicación</h5>
        <div class="mapouter">
          <div class="gmap_canvas">
            <iframe
              width="300"
              height="300"
              id="gmap_canvas"
              src="https://maps.google.com/maps?q=puerto%20madero%20alvear%20tower&t=k&z=17&ie=UTF8&iwloc=&output=embed"
              frameborder="0"
              scrolling="no"
              marginheight="0"
              marginwidth="0"
            />
            <a href="https://youtube-embed-code.com">youtube embed code</a>
          </div>
        </div>
      </div>
      <div class="col-12 col-sm-11 offset-sm-1">
        <div class="btn-group" role="group">
          <a role="button" class="btn btn-primary" href="tel:+55555555555">
            <i class="fa fa-phone"></i> Llámenos
          </a>
          <a role="button" class="btn btn-info">
            <i class="fa fa-skype"></i> Skype
          </a>
          <a
            role="button"
            class="btn btn-success"
            href="mailto:glevcovich@outlook.com"
          >
            <i class="fa fa-envelope-o"></i> E-mail
          </a>
        </div>
      </div>
    </div>
    <div class="row row-content">
      <div class="col-12">
        <h3>Sugerencias</h3>
      </div>
      <div class="col-12 col-md-9">
        <form>
          <div class="form-group row">
            <label for="nombre" class="col-md-2 col-form-label">
              Nombre
            </label>
            <div class="col-md-10">
              <input
                type="text"
                class="form-control"
                id="nombre"
                name="nombre"
                placeholder="Nombre"
              />
            </div>
          </div>
          <div class="form-group row">
            <label for="apellido" class="col-md-2 col-form-label">
              Apellido
            </label>
            <div class="col-md-10">
              <input
                type="text"
                class="form-control"
                id="apellido"
                name="apellido"
                placeholder="Apellido"
              />
            </div>
          </div>
          <div class="form-group row">
            <label for="telnum" class="col-12 col-md-2 col-form-label">
              Teléfono
            </label>
            <div class="col-7 col-md-7">
              <input
                type="tel"
                class="form-control"
                id="telnum"
                name="telnum"
                placeholder="Teléfono"
              />
            </div>
          </div>
          <div class="form-group row">
            <label for="emailid" class="col-md-2 col-form-label">
              E-mail
            </label>
            <div class="col-md-10">
              <input
                type="email"
                class="form-control"
                id="emailid"
                name="emailid"
                placeholder="E-mail"
              />
            </div>
          </div>
          <div class="form-group row">
            <div class="col-md-6 offset-md-2">
              <div class="form-check">
                <input
                  type="checkbox"
                  class="form-check-input"
                  name="contactame"
                  id="contactame"
                  value=""
                />
                <label class="form-check-label" for="contactame">
                  <strong>Podemos contactarte?</strong>
                </label>
              </div>
            </div>
            <div class="col-md-3 offset-md-1">
              <select class="form-control">
                <option>Tel.</option>
                <option>E-mail</option>
              </select>
            </div>
          </div>
          <div class="form-group row">
            <label for="feedback" class="col-md-2 col-form-label">
              Tus sugerencias
            </label>
            <div class="col-md-10">
              <textarea
                class="form-control"
                id="sugerencias"
                name="sugerencias"
                rows="12"
              />
            </div>
          </div>
          <div class="form-group row">
            <div class="offset-md-2 col-md-10">
              <button type="submit" class="btn btn-primary">
                Enviar
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
);
}
{
/* 

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
*/
}
