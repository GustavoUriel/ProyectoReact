import "bootstrap/dist/css/bootstrap.min.css";
import "../css/UserService.css";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useLocalContext } from "./Context";
import {
  Media,
  Collapse,
  Card,
  Figure,
  Accordion,
  Button,
  OverlayTrigger,
} from "react-bootstrap";
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
  const [open, setOpen] = useState(false)

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

  return userServices.map((i) => {
    let docService = services.find((x) => x.id == i.idService);
    let docProvider = providers.find((x) => x.id == i.idProvider);
    let savings = Math.random() * 50;
    console.log(i);
    return (
      <div className="service-card">
        <div className="col-sm-12 service-card-service">
          <Media>
            <img
              width={100}
              height={100}
              className="align-self-start mr-3"
              src={docProvider.image}
              alt={docProvider.name}
            />
            <img
              width={100}
              height={100}
              className="align-self-start mr-3"
              src={docService.image}
              alt={docService.name}
            />
            <Media.Body className="row col-sm-12 service-card-provider">
              <h5>{docProvider.name}</h5><br />
              <p> {docProvider.description} </p>
            </Media.Body>
            <Media.Body className="row col-sm-12 service-card-service">
              <h5>{docService.name}</h5><br />
              <p>{docService.description}</p>
            </Media.Body>
          </Media>
        </div>
        <div className="row row-content">
          <div className="col-md-8 service-card-details-button">
            {savings <= 10 ? (
              <Button variant="primary" block>
                Este servicio esta optimizado. Felicitaciones!{" "}
              </Button>
            ) : (
              <Button
                variant="success"
                onClick={() => setOpen((open==i.id)? '' : ''+i.id)}
                aria-expanded={open}
                block
              >
                Podés obtener hasta un {parseInt(savings)}% de ahorro{" "} {open}
              </Button>
            )}
          </div>
          <div className="col service-card-remove-button">
            <Button variant="outline-danger" block>
              Quitar
            </Button>
          </div>{" "}
        </div>
        <Collapse in={open==''+i.id}>
          <div className="service-card-proposal" id={"aa"}>
            Esta es la explicación de cómo lograr ese ahorro, ya sea
            renegociando o cambiando el proveedor del servicio
          </div>
        </Collapse>
      </div>
    );
  });
}
