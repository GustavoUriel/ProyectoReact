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
    let promise = new Promise((resolve, reject) => {
      dbProviders.get().then((querySnapshot) => {
        if (querySnapshot.size === 0) {
          console.log("Firestores Providers vacío");
          setProviders([]);
        } else {
          setProviders(querySnapshot.docs.map((doc) => doc.data()));
        }
      });
    });
    promise.then(
      dbUsers.get().then((querySnapshot) => {
        if (querySnapshot.size === 0) {
          console.log("Firestores Users vacío");
          setUsers([]);
        } else {
          let toArrange = querySnapshot.docs.map((doc) => doc.data());
          toArrange.sort((a, b) => a.id - b.id);
          setUsers(toArrange);
        }
      })
    );
    promise.then(
      dbServices.get().then((querySnapshot) => {
        if (querySnapshot.size === 0) {
          console.log("Firestores Services vacío");
          setServices([]);
        } else {
          setServices(querySnapshot.docs.map((doc) => doc.data()));
        }
      })
    );
    promise.then(
      setTimeout(() => {
        console.log("ups en promises", users, providers, services);
      }, 4000)
    );
    promise.then(populateUserssServices(50));
    promise.then(setIsLoading(false));
    
  }, []);

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
    console.log(users, providers, services);
    if (users.length * providers.length * services.length == 0) {
      return;
    }
    for (let i = 0; i < props; i++) {
      console.log(i);
      const element = {
        id: i,
        idUser: randomUser(),
        idProvider: randomProvider(),
        idService: randomService(),
        date: randomDate(),
        value: randomValue(),
      };
      console.log(element);
      allUserssServices.push(element);
      function randomDate() {
        return parseInt(Math.random() * 5000);
      }
      function randomUser() {
        let rndIndex = parseInt(Math.random() * users.length);
        console.log("user", rndIndex, users);
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
    }
  };

  // Functions that changes the context
  const selectUser = (props) => {
    console.log("ups en setusers", users, providers, services);
    let result;
    if (props) {
      result = users.find((i) => i.id == props);
      setLoggedUser(result);
      loadServicesOfSelectedUser();
      return result;
    }
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
    let tempArray;
    if (loggedUser) {
      tempArray = allUserssServices.filter((i) => i.idUser == loggedUser.id);

      result = tempArray.sort((a, b) => a.date < b.date);
      setLoggedUserServices(result);
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
    return !isLoading;
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
