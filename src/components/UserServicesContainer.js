import "bootstrap/dist/css/bootstrap.min.css";
import "../css/UserServicesContainer.css";
import React, { useEffect, useState, useContext } from "react";
import UserService from "./UserService";
import { useParams } from "react-router-dom";
import { Tabs, Tab, DropdownButton, Dropdown } from "react-bootstrap";
import { useLocalContext } from "./Context";

export default function UserServicesContainer() {
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

  var defaultTextSelectedProvider =
    "SELECCIONE UN PROVEEDOR DE SERVICIO PARA FILTRAR";
  var defaultTextSelectedService =
    "SELECCIONE UN TIPO DE SERVICIO PARA FILTRAR";
  const [selectedProvider, setSelectedProvider] = useState("");
  const [selectedService, setSelectedService] = useState("");
  const [textSelectedProvider, setTextSelectedProvider] = useState(
    defaultTextSelectedProvider
  );
  const [textSelectedService, setTextSelectedService] = useState(
    defaultTextSelectedService
  );

  const uniqueProviders = listUserUniqueProviders();
  const uniqueServices = listUserUniqueServices();

  const handleSelectDropdownProviders = (value, text) => {
    setSelectedProvider(value);
    text
      ? setTextSelectedProvider(text)
      : setTextSelectedProvider(defaultTextSelectedProvider);
  };
  const handleSelectDropdownServices = (value, text) => {
    setSelectedService(value);
    text
      ? setTextSelectedService(text)
      : setTextSelectedService(defaultTextSelectedService);
  };

  const resetFilters = () => {
    setSelectedProvider("");
    setTextSelectedProvider(defaultTextSelectedProvider);
    setSelectedService("");
    setTextSelectedService(defaultTextSelectedService);
  };

  return (
    <div>
      <Tabs
        defaultActiveKey="all"
        variant="pills"
        onClick={() => resetFilters()}
      >
        <Tab eventKey="all" title="TODOS">
          NOTA: Todas las propuestas son random
        </Tab>

        <Tab eventKey="byPovider" title="Por proveedor">
          NOTA: Todas las propuestas son random
          <Dropdown id="dropdown-providers" title="Dropdown button">
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              {textSelectedProvider}
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item
                id={""}
                onClick={() => handleSelectDropdownProviders("", "")}
              >
                {defaultTextSelectedProvider}
              </Dropdown.Item>
              {uniqueProviders
                ? uniqueProviders.map((i) => {
                    return (
                      <Dropdown.Item
                        id={i.id}
                        onClick={() =>
                          handleSelectDropdownProviders("" + i.id, i.name)
                        }
                      >
                        ({howManyOfThisProvider(i.id)}) {i.name}
                      </Dropdown.Item>
                    );
                  })
                : ""}
            </Dropdown.Menu>
          </Dropdown>
        </Tab>

        <Tab eventKey="byService" title="Por servicio">
          NOTA: Todas las propuestas son random
          <Dropdown id="dropdown-services" title="Dropdown button">
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              {textSelectedService}
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item
                id={""}
                onClick={() => handleSelectDropdownServices("", "")}
              >
                {defaultTextSelectedService}
              </Dropdown.Item>
              {uniqueServices
                ? uniqueServices.map((i) => {
                    return (
                      <Dropdown.Item
                        id={i.id}
                        onClick={() =>
                          handleSelectDropdownServices("" + i.id, i.name)
                        }
                      >
                        ({howManyOfThisService(i.id)}) {i.name}
                      </Dropdown.Item>
                    );
                  })
                : ""}
            </Dropdown.Menu>
          </Dropdown>
        </Tab>

        <Tab eventKey="byProposal" title="Las mejores propuestas">
          Como las propuestas se hacen desde el backend, y ésto es sólo REACT,
          esta pestaña está vacía.
        </Tab>
      </Tabs>
      <UserService idProvider={selectedProvider} idService={selectedService} />
    </div>
  );
}
