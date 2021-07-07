import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/UserService.css';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useLocalContext } from './Context';
import { Card, Accordion, Button, OverlayTrigger } from 'react-bootstrap';
import InsertImage from './InsertImage'

export default function UserService() {
  const { selectUser, listUserServices, addUserService, removeUserService, listServices, listProviders, listUserData, listUsers, doneLoading
  } = useLocalContext();
  const user = listUserData();
  if (!(user)) { return <div>Logueate para cargar tus servicios</div> }

  const userServices = listUserServices();
  const services = listServices();
  const providers = listProviders();

  const deleteService = (props) => {
    console.log('delete service', props)
    removeUserService(props)
  }

  return (

    <Accordion>
      {userServices.map((i) => {
        let docService = services.find(x => x.id == i.idService)
        let docProvider = providers.find(x => x.id == i.idProvider)
        return (
          <Card>
            <Card.Header>
              <div className="mb-0">
                <Accordion.Toggle as={Button} variant="link" eventKey={i.id} >
                  <div className="row">
                    <InsertImage src={docProvider.image} size={100} className={'row float-start col-3'} />
                    <h5 className='row float-end col-9'>{docProvider.description} <br />
                      <small>(click para abrir y ver propuestas y botón de eliminar)</small></h5>
                  </div>
                  <div className="row">
                    <InsertImage src={docService.image} size={100} className={'row float-start col-3'} />
                    <div className='row float-end col-9'>
                      <span class="badge badge-danger">Tenemos para proponerte que ahorres un {parseInt(Math.random() * 50)} % </span>
                      <h5>Servicio: {docService.name} </h5>
                      <p>{docService.description}<small></small><br />
                        <small> Registraste este servicio el {i.date}</small></p>
                    </div>
                  </div>
                </Accordion.Toggle>
              </div>
            </Card.Header>
            <Accordion.Collapse eventKey={i.id}>
              <Card.Body>
                <p class="">Nuestra propuesta generada por AI en el back. La etiqueta de propuesta de ahorro es generada random ahora, pero debería ser calculable y este texto explicativo.</p>
                <button onClick={() => { deleteService(i.id) }} type="button" class="btn btn-secondary font-weight-bold col-2" idProvider={i.idProvider} idService={i.idService}>Eliminar</button>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        )
      })}
    </Accordion>)



  /*     < div class="card-header info-descartable row" id = "head${parameter.id}" role = "tab" >
        <p data-toggle="collapse" data-target="#body${parameter.id}" class="col-10">
          Otorgante: ${otorgantes.find(iterator => iterator.id === parameter.idOtorgante).descripcion} <br>
            Tipo de servicio: ${tiposCreditos.find(iterator => iterator.id === parameter.idTipoCredito).nombre} <br>
              Explicación:  ${tiposCreditos.find(iterator => iterator.id === parameter.idTipoCredito).descripcion} <br>
  </p>
              <button type="button" class="btn btn-secondary font-weight-bold col-2 buttonDeleteService" id="servicio${parameter.id}">Eliminar</button>
  </>
            <div class="collapse show info-descartable row" id="body${parameter.id}" data-parent="#acordeon">
              <div class="card-body">
              </div>
            </div>
  
  
            < div >
  
            </div >
            ) */
}
