/* id={i.id}
date={i.date}
service={docService.name}
provider={docProvider.description}

 */
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/ButtonModifyService.css";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useServerSide } from "../logic/ServerSide";
import {
  Media,
  Container,
  Row,
  Col,
  Collapse,
  Card,
  ListGroup,
  Figure,
  Accordion,
  Button,
  OverlayTrigger,
  Modal,
  Form,
  Dropdown,
} from "react-bootstrap";
/* import FloatingLabel from "react-bootstrap/FloatingLabel"; */
import { render } from "react-dom";
import CustomModal from "./CustomModal";

export default function ButtonModifyService(props) {
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
    listUserUniqueProviders,
    listUserUniqueServices,
    howManyOfThisProvider,
    howManyOfThisService,
  } = useServerSide();

    let id = props.id;
  let date = props.date;
  let service = props.service;
  let idService = props.idService;
  let provider = props.provider;
  let idProvider = props.idProvider;

  var defaultTextSelectedProvider = "SELECCIONE UN PROVEEDOR DE SERVICIO";
  var defaultTextSelectedService = "SELECCIONE UN TIPO DE SERVICIO";

  const uniqueProviders = listProviders();
  const selectedProviderId = "";
  const textSelectedProvider = defaultTextSelectedProvider;

  const uniqueServices = listServices();
  const selectedServiceId = "";
  const textSelectedService = defaultTextSelectedService;

  const [show, setShow] = useState(false);

  const handleSelectDropdownProviders = (id, text) => {
    selectedProviderId = id;
    text
      ? (textSelectedProvider = text)
      : (textSelectedProvider = defaultTextSelectedProvider);
  };
  const handleSelectDropdownServices = (id, text) => {
    selectedProviderId = id;
    text
      ? (textSelectedService = text)
      : (textSelectedService = defaultTextSelectedService);
  };

  const handleClose = () => setShow(false);
  const handleShow = () => {
    setShow(true);
  };
  const handleSave = () => {

    setShow(false);
  };

  let docService = uniqueServices.find((x) => x.id == props.idService);
  let docProvider = uniqueProviders.find((x) => x.id == props.idProvider);

  return (
    <>
      <Button variant="outline-warning" onClick={handleShow} block>
        Modificar
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modificar servicio</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form action="/my-handling-form-page" method="post">
            <select id="selectProvider" name="selectProvider">
              <option disabled={true} selected>
                SELECCIONE UN PROVEEDOR DE SERVICIO
              </option>
              {uniqueProviders
                ? uniqueProviders.map((i) => {
                    return (
                      <option id={i.id} selected={i.id == idProvider}>
                        {i.name}
                      </option>
                    );
                  })
                : ""}
            </select>
          </form>
          <form action="/my-handling-form-page" method="post">
            <select id="selectService" name="selectService">
              <option disabled={true} selected>
                SELECCIONE UN SERVICIO
              </option>
              {uniqueServices
                ? uniqueServices.map((i) => {
                    return (
                      <option id={i.id} selected={i.id == idService}>
                        {i.name}
                      </option>
                    );
                  })
                : ""}
            </select>
          </form>
        </Modal.Body>
        <Modal.Footer>
          Recuerde que aunque no cambie el proveedor, el servicio o el valor, al
          guardar se registrará con la fecha de hoy.
          <Button variant="secondary" onClick={handleClose}>
            Cancelar
          </Button>
          <Button variant="primary" onClick={handleSave}>
            Modificar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
