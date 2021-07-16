import "bootstrap/dist/css/bootstrap.min.css";
import "../css/ButtonDeleteService.css";
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
} from "react-bootstrap";

import { render } from "react-dom";
import CustomModal from "./CustomModal";

export default function ButtonDeleteService(props) {
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
  const [showModal, setShowModal] = useState(false);

  const [show, setShow] = useState(false);
  const update = props.update;
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleDelete = () => {
    console.log("propsid dentro de handledelete", props.id);
    removeUserService(props.id);
    setShow(false);
    update();
  };

  return (
    <>
      <Button variant="outline-danger" onClick={handleShow}>
        Desregistrar servicio
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Seguro desea desregistrar el servicio?</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Seguro desea eliminar el servicio <b>{props.service}</b> <br />
          De <b>{props.provider}</b>
          <br />
          Que registraste el <b>{props.date}</b> ?
        </Modal.Body>
        <Modal.Body>
          <b>Esto no se puede deshacer, aunque podés volver a registrarlo</b>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancelar
          </Button>
          <Button variant="primary" onClick={handleDelete}>
            Desregistrar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

/*     const answerModalConfirmDelete = "";
    const acceptedModalConfirmDelete = false;
    const closeModalConfirmDelete = () => {
      if (acceptedModalConfirmDelete) {
      } else {
      }
      setShowModalConfirmDelete(false);
    };
    setShowModalConfirmDelete(true);
 */

/* removeUserService(id); */
/* show={true}
  answer={answerModalConfirmDelete}
  accepted={acceptedModalConfirmDelete}
  close={closeModalConfirmDelete}
  header="Seguro desea desregistrar el servicio?"
  body={
    ("Seguro desea eliminar el servicio ",
    { txtService },
    " de ",
    { txtProvider },
    " que registraste el ",
    { txtDate })
  }
  footer="Esto no se puede deshacer, aunque podés volver a registrarlo"
  accept="Guardar cambios"
  cancel="Cancelar"

 */
