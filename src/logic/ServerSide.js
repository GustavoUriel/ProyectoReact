import { beforeMain } from "@popperjs/core";
import React, { useEffect, useState, useContext } from "react";
import { getFirestore } from "../firebase/firebase";

export const LocalContext = React.createContext();

export function useServerSide() {
  return useContext(LocalContext);
}

export function ServerSide({ children }) {
  // open remote databases
  const db = getFirestore();
  const dbProviders = db.collection("providers");
  const dbUsers = db.collection("users");
  const dbServices = db.collection("services");
  const dbuserssServices = db.collection("userssServices");

  // declaration of local databases
  const [providers, setProviders] = useState([]);
  const [users, setUsers] = useState([]);
  const [services, setServices] = useState([]);
  const [allUserssServices, setAllUserssServices] = useState([]);

  // Declaration of local consts
  const [loggedUserServices, setLoggedUserServices] = useState(null); // Document of logged user info
  const [loggedUser, setLoggedUser] = useState(null); // Document of logged user info
  const [isLoading, setIsLoading] = useState(true); // Document of logged user info
  const [waiting, setWaiting] = useState(true); // Document of logged user info

  // copy of remote databases to local databases
  useEffect(() => {
    dbProviders.get().then((querySnapshot) => {
      if (querySnapshot.size === 0) {
        console.log("Firestores Providers vacío");
        setProviders([]);
      } else {
        setProviders(querySnapshot.docs.map((doc) => doc.data()));
      }
    });
    dbUsers.get().then((querySnapshot) => {
      if (querySnapshot.size === 0) {
        console.log("Firestores Users vacío");
        setUsers([]);
      } else {
        let toArrange = querySnapshot.docs.map((doc) => doc.data());
        toArrange.sort((a, b) => a.id - b.id);
        setUsers(toArrange);
      }
    });
    dbServices.get().then((querySnapshot) => {
      if (querySnapshot.size === 0) {
        console.log("Firestores Services vacío");
        setServices([]);
      } else {
        setServices(querySnapshot.docs.map((doc) => doc.data()));
      }
    });
  }, []);

  useEffect(() => {
    if (allUserssServices.length > 0) {
      return;
    }
    if (users.length * providers.length * services.length == 0) {
      return;
    }
    populateUserssServices(100);
  }, [users, providers, services]);

  /* {while (((users.length) * (providers.length) * (services.length)) == 0) 
  {
 */
  /*     dbuserssServices.get().then((querySnapshot) => {
      if (querySnapshot.size === 0) {
        console.log("FirestoresallUserssServices vacío");
        setAllUserssServices([]);
      } else {
        setAllUserssServices(querySnapshot.docs.map((doc) => doc.data()));
      }
    }); */

  const populateUserssServices = (props) => {

    if (users.length * providers.length * services.length == 0) {
      return;
    }
    let tempArray = [];
    for (let i = 0; i < props; i++) {
      const element = {
        id: i,
        idUser: randomUser(),
        idProvider: randomProvider(),
        idService: randomService(),
        date: randomDate(),
        value: randomValue(),
      };
      tempArray.push(element);
    }
    setAllUserssServices(tempArray);

    function randomDate() {
      return parseInt(Math.random() * 5000);
    }
    function randomUser() {
      let rndIndex = parseInt(Math.random() * users.length);
      return users[rndIndex].id;
    }
    function randomProvider() {
      let rndIndex = parseInt(Math.random() * providers.length);
      return providers[rndIndex].id;
    }
    function randomService() {
      let rndIndex = parseInt(Math.random() * services.length);
      return services[rndIndex].id;
    }
    function randomValue() {
      return parseInt(Math.random() * 10000000);
    }
  };
  //Functions that changes the context

  // Lo que me parece que pasa es que ejecuta las tres sentencias a la vez.
  // Entonces la primera vez, la primer sentencia funciona, pero la segunda y la tercera no, porque todavía aplicó la primera
  // Lo mismo la segunda vez que apretás el botón, pero cuando se ejecuta la segunda sentencia,
  // ya tenía la respuesta de la pasada anterior.
  // Entonces recién a la tercer pasada se ejecuta correctamente la tercer sentencia, que utiliza el resultado de la segunda.
  // Probé hacerlo así como está ahora, con una promise, pero igual no funciona.
  const selectUser = (props) => {
    var result;
    Promise.resolve()
      .then(function () {
        result = users.find((i) => i.id == props);
      })
      .then(function () {
        setLoggedUser(result);
      })
      .then(function () {
        loadServicesOfSelectedUser(result, loggedUser);
      });
    console.log("veamos", props, loggedUser, loggedUserServices);
  };

  const loadServicesOfSelectedUser = () => {
    let result;
    let tempArray;
    if (!loggedUser) {
      return;
    }
    return Promise.resolve()
      .then(function () {
        tempArray = allUserssServices.filter((i) => i.idUser == loggedUser.id);
      })
      .then(function () {
        result = tempArray.sort((a, b) => a.date < b.date);
      })
      .then(function () {
        setLoggedUserServices(result);
      });
  };


  
  const addUserService = (props) => {
    if (props.idUser && props.idService && props.idProvider && loggedUser) {
      let result = allUserssServices;
      const doc = {
        id:
          1 +
          Math.max.apply(
            Math,
            allUserssServices.map((i) => {
              return i.id;
            })
          ),
        idUser: loggedUser.id,
        idProvider: props.idProvider,
        idService: props.idService,
        fecha: Date.now(),
      };
      result.push(doc);
      setAllUserssServices(result);
      return allUserssServices;
    }
  };
  const removeUserService = (props) => {
    if (props && loggedUser) {
      let result;
      result = allUserssServices.filter((i) => i.id != props);
      setAllUserssServices(result);
      return result;
    }
  };
  // functions that list general data
  const listUsers = (props) => {
    let result, tempArray;
    tempArray = users;
    result = tempArray.sort((a, b) => a.id > b.id);
    return result, tempArray;
  };
  const listServices = () => {
    let result, tempArray;
    tempArray = services;
    result = tempArray.sort((a, b) => a.name > b.name);
    return result;
  };
  const listProviders = () => {
    let result, tempArray;
    tempArray = providers;
    result = tempArray.sort((a, b) => a.name > b.name);
    return result;
  };
  const stillLoading = () => {
    return isLoading;
  };
  // functions that list user specific data
  const listUserInfo = (props) => {
    // Ok, this one also sets the user, but it is not used
    let result;
    if (!props) {
      result = loggedUser;
      return result;
    } else {
      let result;
      result = users.find((i) => i.id == props);
      setLoggedUser(result);
      setLoggedUser(result);
      return result;
    }
  };
  const listUserServices = (props) => {
    if (loggedUserServices) {
      return loggedUserServices;
    }
  };
  const listUserUniqueServices = (props) => {
    if (loggedUser && loggedUserServices) {
      let result;
      result = services.filter((i) => {
        let tempArray = loggedUserServices.filter((x) => x.idService == i.id);
        return !(tempArray.length == 0);
      });
      return result;
    }
  };
  const listUserUniqueProviders = (props) => {
    if (loggedUser && loggedUserServices) {
      let result;
      result = providers.filter((i) => {
        let tempArray = loggedUserServices.filter((x) => x.idProvider == i.id);
        return !(tempArray.length == 0);
      });
      return result;
    }
  };

  const howManyOfThisProvider = (props) => {
    if (loggedUser && loggedUserServices) {
      return loggedUserServices.filter((i) => i.idProvider == props).length;
    }
  };

  const howManyOfThisService = (props) => {
    if (loggedUser && loggedUserServices) {
      return loggedUserServices.filter((i) => i.idService == props).length;
    }
  };

  // The composition of the CONTEXT
  const value = {
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
  };
  return (
    <LocalContext.Provider value={value}>{children}</LocalContext.Provider>
  );
}
