import "bootstrap/dist/css/bootstrap.min.css";
import "../css/UserService.css";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useLocalContext } from "./Context";
import { Card, Accordion, Button, OverlayTrigger } from "react-bootstrap";
import InsertImage from "./InsertImage";

export default function UserService() {
  const {
    selectUser,
    listUserServices,
    addUserService,
    removeUserService,
    listServices,
    listProviders,
    listUserData,
    listUsers,
    doneLoading,
  } = useLocalContext();
  const user = listUserData();
  if (!user) {
    return <div>Logueate para cargar tus servicios</div>;
  }

  const userServices = listUserServices();
  const services = listServices();
  const providers = listProviders();

  const deleteService = (props) => {
    console.log("delete service", props);
    removeUserService(props);
  };

  return (
    <Accordion>
      {userServices.map((i) => {
        let docService = services.find((x) => x.id == i.idService);
        let docProvider = providers.find((x) => x.id == i.idProvider);
        return (
          <Card>
            <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey={i.id}>
                <Card className=" mb-3">
                  <div className="row no-gutters">
                    <div className="col-md-4">
                      <Card.Image src={docProvider.image} />
                      <div className="col-md-8">
                        <Card.Body>
                          {" "}
                          <Card.Title>{docProvider.name}</Card.Title>
                          <Card.Subtitle>
                            {" "}
                            {docProvider.description}{" "}
                            <small>
                              {" "}
                              (click para abrir y ver propuestas y botón de
                              eliminar)
                            </small>
                          </Card.Subtitle>
                          <Card.Text>
                            <small className="text-muted">
                              Last updated 3 mins ago
                            </small>
                          </Card.Text>
                        </Card.Body>
                      </div>
                    </div>
                  </div>
                </Card>
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey={i.id}>
              <Card.Body>
                Nuestra propuesta generada por AI en el back. La etiqueta de
                propuesta de ahorro es generada random ahora, pero debería ser
                calculable y este texto explicativo.
                <button
                  onClick={() => {
                    deleteService(i.id);
                  }}
                  type="button"
                  className="btn btn-secondary font-weight-bold col-2"
                  idProvider={i.idProvider}
                  idService={i.idService}
                >
                  Eliminar
                </button>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        );
      })}
    </Accordion>
  );
}

/* {
      <Accordion>
      {userServices.map((i) => {
        let docService = services.find((x) => x.id == i.idService);
        let docProvider = providers.find((x) => x.id == i.idProvider);
        return (
          <Card>
            <Card.Header>
              <div className="mb-0">
                <Accordion.Toggle as={Button} variant="link" eventKey={i.id}>
                  <Card className=" mb-3" style="max-width: 540px;">
                    <div className="row no-gutters">
                      <div className="col-md-4">
                        <Card.image src={docProvider.image} />
                        <div className="col-md-8">
                          <div className="card-body">
                            <Card.Title>{docProvider.name}</Card.Title>
                            <Card.Subtitle>
                              {docProvider.description}
                              <small>
                                (click para abrir y ver propuestas y botón de
                                eliminar)
                              </small>
                            </Card.Subtitle>
                            <Card.Text>
                              <small className="text-muted">
                                Last updated 3 mins ago
                              </small>
                            </Card.Text>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Card>
                </Accordion.Toggle>
              </div>
            </Card.Header>
            <Accordion.Collapse eventKey={i.id}>
              <Card.Body>
                                  Nuestra propuesta generada por AI en el back. La etiqueta de
                  propuesta de ahorro es generada random ahora, pero debería ser
                  calculable y este texto explicativo.
                <button
                  onClick={() => {
                    deleteService(i.id);
                  }}
                  type="button"
                  className="btn btn-secondary font-weight-bold col-2"
                  idProvider={i.idProvider}
                  idService={i.idService}
                >
                  Eliminar
                </button>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        );
      })}
    </Accordion>
} */
