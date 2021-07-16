import React from "react";
import "../css/Jumbotron.css";
import InsertImage from "components/InsertImage";
import logo from "img/pesos.png";
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

export default function Jumbotron() {
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
  } = useServerSide();

  return (
    <Container fluid className="jumbotron-container">
      <Row fluid>
        <Col fluid>
          <InsertImage src={logo} Size={100} />
        </Col>
        <Col fluid>
          <h1>ES TU PLATA!!</h1>
          <h3>Y te decimos cómo cuidarla</h3>
          Usuario:{'  '}
          {listUsers().map((i) => {
            return (
              <button
                onClick={() => {
                  selectUser("" + i.id);
                }}
              >
                {i.id}
              </button>
            );
          })}
        </Col>
        <Col>
          <button
            className="btn btn-block nav-link btn-warning font-weight-bold"
            id="RegistrarseButton"
          >
            Registrate...
          </button>
          <button
            className="btn btn-block nav-link btn-light font-weight-bold"
            id="AnonimoButton"
          >
            Entrada anónima
          </button>
        </Col>
      </Row>
    </Container>
  );
}
