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
  const [userssServices, setAllUserssServices] = useState([]);

  // Declaration of local consts
  const [loggedUserServices, setLoggedUserServices] = useState(null); // Document of logged user info
  const [loggedUser, setLoggedUser] = useState(null); // Document of logged user info

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
    dbuserssServices.get().then((querySnapshot) => {
      if (querySnapshot.size === 0) {
        console.log("Firestores userssServices vacío");
        setAllUserssServices([]);
      } else {
        setAllUserssServices(querySnapshot.docs.map((doc) => doc.data()));
      }
    });
  }, []);

  // Functions that changes the context
  const selectUser = (props) => {
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
      let result;
      const doc = {
        id:
          1 +
          Math.max.apply(
            Math,
            userssServices.map((i) => {
              return i.id;
            })
          ),
        idUser: loggedUser.id,
        idProvider: props.idProvider,
        idService: props.idService,
        fecha: Date.now(),
      };
      result = userssServices.push(doc);
      return result;
    }
  };
  const removeUserService = (props) => {
    if (props && loggedUser) {
      let result;
      result = userssServices.filter((i) => i.id != props);
      setAllUserssServices(result);
      return result;
    }
  };
  const loadServicesOfSelectedUser = () => {
    let result;
    let tempArray;
    if (loggedUser) {
      tempArray = userssServices.filter((i) => i.idUser == loggedUser.id);

      result = tempArray.sort((a, b) => a.date < b.date);
      setLoggedUserServices(result);
      return result;
    }
  };
  // functions that list general data
  const doneLoading = () => {
    // This one I wrote, and works, but is now deprecated
    return providers && users && services && userssServices;
  };
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
    doneLoading,
    listUserUniqueProviders,
    listUserUniqueServices,
    howManyOfThisProvider,
    howManyOfThisService
  };
  return (
    <LocalContext.Provider value={value}>{children}</LocalContext.Provider>
  );
}
