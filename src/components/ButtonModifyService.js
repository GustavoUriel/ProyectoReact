/* id={i.id}
date={i.date}
service={docService.name}
provider={docProvider.description}

 */
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/ButtonModifyService.css";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useLocalContext } from "./Context";
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
/* import FloatingLabel from "react-bootstrap/FloatingLabel";  //console.log(VER COMO HACER) */
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
  } = useLocalContext();

  console.log(props);

  var defaultTextSelectedProvider =
    "SELECCIONE UN PROVEEDOR DE SERVICIO PARA FILTRAR";
  var defaultTextSelectedService =
    "SELECCIONE UN TIPO DE SERVICIO PARA FILTRAR";

  const uniqueProviders = listUserUniqueProviders();
  const selectedProviderId = "";
  const textSelectedProvider = defaultTextSelectedProvider;

  const uniqueServices = listUserUniqueServices();
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
    console.log("modificaste el sercvic");
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


        <Form>
  <Form.Group className="mb-3" controlId="formBasicEmail">


  </Form.Group>
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>


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
