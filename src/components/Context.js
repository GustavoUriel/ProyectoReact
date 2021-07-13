import React, { useEffect, useState, useContext } from "react";
import { getFirestore } from "../firebase/firebase";

export const LocalContext = React.createContext();

export function useLocalContext() {
  return useContext(LocalContext);
}

export function Context({ children }) {
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
    console.log("llamada useeffect");
    if (allUserssServices.length > 0) {
      return;
    }
    if (users.length * providers.length * services.length == 0) {
      return;
    }
    console.log("llamada populate");
    populateUserssServices(100);
    console.log("vuelta de populate", loggedUserServices);
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
    console.log("entro en populate", props);

    if (users.length * providers.length * services.length == 0) {
      console.log("salgo mal");
      return;
    }
    console.log("adentro de populate");
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
      console.log("en ciclo de populate");
    }
    console.log("fuera de ciclo de populate", tempArray);
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
  const myPromise = new Promise((resolve, reject) => {
  
  });
  

  // Functions that changes the context
  const selectUser = (props) => {
    console.log("asdfasdf", props);
    const promise = new Promise((resolve, reject) => {
      console.log("1era");
      return users.find((i) => i.id == props);
    });
    console.log('antes de promesa')
    promise
      .then((result) => {
        console.log("2da");
        setLoggedUser(result);
      })
      .then((result) => {
        console.log("3era");
        loadServicesOfSelectedUser();
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
  const loadServicesOfSelectedUser = () => {
    let result;
    console.log("loadserviceusers");
    let tempArray;
    if (loggedUser) {
      tempArray = allUserssServices.filter((i) => i.idUser == loggedUser.id);

      result = tempArray.sort((a, b) => a.date < b.date);
      setLoggedUserServices(result).then(() => {
        console.log("loggedUserServices", loggedUserServices);
        console.log("loggedUser", loggedUser);
      });

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
