import "bootstrap/dist/css/bootstrap.min.css";
import "../css/UserService.css";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useServerSide } from "./ServerSide";
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

export default function CustomModal(props) {
  // props

  // answer: reference to object that returns the answer of the modal
  // accepted: boolean true if accepted or false if cancelled
  // close: reference to function to close the modal from parent

  // header: strign of the header of the modal
  // body: strign of the body of the modal
  // footer: strign of the footer of the modal
  // accept: strign of the accept button of the modal
  // cancel: strign of the cancel button of the modal


  const handleClose = () => {
    props.close ? props.close() : this.show = false;
  };

  const handleSaveClose = () => {
    if (props.accepted) {props.accepted = true};
    if (props.answer) {props.answer = [2,2,5,5]}
    handleClose();
  };

  return (
    <Modal show={true} onHide={handleClose} size="lg" centered>

      hola modal
{/*       <Modal.Header closeButton>
        <Modal.Title>{props.header ? props.header : ""}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{props.body ? props.body : ""}</Modal.Body>
      <Modal.Footer>
        {props.footer ? props.footer : ""}
        <Button variant="secondary" onClick={handleClose}>
          {props.cancel ? props.footer : "Cancelar"}
        </Button>
        <Button variant="primary" onClick={handleSaveClose}>
          {props.accept ? props.footer : "Aceptar"}
        </Button>
      </Modal.Footer> */}
    </Modal>
  );
}
