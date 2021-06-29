import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/AboutUs.css';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Card, Accordion, Button } from 'react-bootstrap';


export default function AboutUs() {
  console.log (useParams())
  return (
    <div id="seccionNosotros"> 
      <div className="col col-sm-6 ">
        <h2>Nuestra Historia</h2>
        <p>Empezamos a hacer esta página como un proyecto del cursado de Full Stack de <em>CoderHouse</em>.</p>
        <p>Por ahora pinta bien. Ya llevamos más de 150 horas vertidas en este proyecto.</p>
      </div>
      <div className="col-12 col-sm-6">
        <Card>
          <Card.Header className="bg-primary text-white">Nuestros números</Card.Header>
          <Card.Body>
            <dl className="row">
              <dt className="col-6">Comienzo:</dt>
              <dd className="col-6">16 de noviembre de 2020</dd>
              <dt className="col-6">Simultáneamente:</dt>
              <dd className="col-6">Trabajo regular</dd>
              <dt className="col-6">Ingresos anuales:</dt>
              <dd className="col-6">Para qué te voy a amargar a vos también?</dd>
            </dl>
          </Card.Body>
        </Card>
      </div>
      <div className="col-12">
        <Card.Body>
          <blockquote className="blockquote">
            <p className="mb-0">Successful people are always looking for opportunities to help others.
              Unsuccessful people are always asking, "What's in it for me?</p>
            <footer className="blockquote-footer">Brian Tracy,
              <cite title="Source Title">Author and motivational speaker</cite>
            </footer>
          </blockquote>
        </Card.Body>
      </div>
      <div className="row">
        <div className="col-12">
          <h2 className="titulo-separador">Nuestras áreas de servicio (El acordeón de la vida)</h2>
          <Accordion>
            <Card>
              <Card.Header>
                <h3 className="mb-0">
                  <Accordion.Toggle as={Button} variant="link" eventKey="0">
                  Padre de familia<small> Principal función</small>
                  </Accordion.Toggle>
                </h3>
              </Card.Header>
              <Accordion.Collapse eventKey="0">
                <Card.Body>
                  <p className="">Mantenemos el orden y la estructura de una familia funcional. Siempre al servicio de la jefa y los pequeños jefes.</p>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Card.Header>
                <h3 className="mb-0">
                  <Accordion.Toggle as={Button} variant="link" eventKey="1">
                  Servicios en oficinas<small> Principal dedicación horaria</small>
                  </Accordion.Toggle>
                </h3>
              </Card.Header>
              <Accordion.Collapse eventKey="1">
                <Card.Body>
                  <p>Hacemos todo lo que pide el que paga el sueldo, con profesionalismo y buena actitud. Realización de complejos procedimientos legales y escritura de su documentación según los más altos estándares internacionales. Atención al cliente. Asesistencia a personas públicas en sus publicaciones.</p>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Card.Header>
                <h3 className="mb-0">
                  <Accordion.Toggle as={Button} variant="link" eventKey="2">
                  Estudios judaicos avanzados<small> Doble turno</small>
                  </Accordion.Toggle>
                </h3>
              </Card.Header>
              <Accordion.Collapse eventKey="2">
                <Card.Body>
                  <p>Dedicación al estudio por vocación, textos en hebreo y arameo, en solitario y en grupo.</p>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Card.Header>
                <h3 className="mb-0">
                  <Accordion.Toggle as={Button} variant="link" eventKey="3">
                  Servicios de sistemas<small> Casos puntuales</small>
                  </Accordion.Toggle>
                </h3>
              </Card.Header>
              <Accordion.Collapse eventKey="3">
                <Card.Body>
                  <p>Sólo para clientes que pagan bien, o para amigos.</p>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>
        </div>
      </div>
	</div>
  )
}

