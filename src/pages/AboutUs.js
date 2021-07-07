import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/AboutUs.css';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Card, Accordion, Button } from 'react-bootstrap';


export default function AboutUs() {

  const textos = [
    {
      'id':'0',
      'grande': 'Padre de familia',
      'chico': 'Principal función',
      'ocultable': 'Mantenemos el orden y la estructura de una familia funcional. Siempre al servicio de la jefa y los pequeños jefes.',
    },
    {
      'id':'1',
      'grande': ' Servicios en oficinas',
      'chico': 'Principal dedicación horaria',
      'ocultable': 'Hacemos todo lo que pide el que paga el sueldo, con profesionalismo y buena actitud. Realización de complejos procedimientos legales y escritura de su documentación según los más altos estándares internacionales. Atención al cliente. Asesistencia a personas públicas en sus publicaciones.',
    },
    {
      'id':'2',
      'grande': 'Estudios judaicos avanzados',
      'chico': 'Doble turno',
      'ocultable': 'Dedicación al estudio por vocación, textos en hebreo y arameo, en solitario y en grupo.',

    },
    {
      'id':'3',
      'grande': 'Servicios de sistemas',
      'chico': 'Casos puntuales',
      'ocultable': 'Sólo para clientes que pagan bien, o para amigos.',
    },
  ]
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
          {textos.map((i) => {
          return (
            <Card>
              <Card.Header>
                <h3 className="mb-0">
                  <Accordion.Toggle as={Button} variant="link" eventKey={i.id}>
                    <h3>{i.grande}<small> {i.chico}</small></h3>
                  </Accordion.Toggle>
                </h3>
              </Card.Header>
              <Accordion.Collapse eventKey={i.id}>
                <Card.Body>
                  <p className=""> {i.ocultable} </p>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          )})}
          </Accordion>
        </div>
      </div>
	</div>
  )
}
