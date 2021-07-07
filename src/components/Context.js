import React, { useEffect, useState, useContext } from 'react';
import { getFirestore } from '../firebase/firebase';

export const LocalContext = React.createContext();

export function useLocalContext() {
  return useContext(LocalContext);
};

export function Context({ children }) {

  // open remote databases
  const db = getFirestore();
  const dbProviders = db.collection('providers');
  const dbUsers = db.collection('users');
  const dbServices = db.collection('services');
  const dbUsers_services = db.collection('users_services');

  // declaration of local databases
  const [providers, setProviders] = useState([]);
  const [users, setUsers] = useState([]);
  const [services, setServices] = useState([]);
  const [users_services, setUsers_services] = useState([]);

  // copy of remote databases to local databases
  useEffect(() => {
    dbProviders.get().then((querySnapshot) => {
      if (querySnapshot.size === 0) {
        console.log('Firestores Providers vacío');
        setProviders([]);
      } else {
        setProviders(querySnapshot.docs.map((doc) => doc.data()));
      }
    })
    dbUsers.get().then((querySnapshot) => {
      if (querySnapshot.size === 0) {
        console.log('Firestores Users vacío');
        setUsers([]);
      } else {
        let toArrange = querySnapshot.docs.map((doc) => doc.data())
        toArrange.sort((a, b) => a.id - b.id)
        setUsers(toArrange);
      }
    })
    dbServices.get().then((querySnapshot) => {
      if (querySnapshot.size === 0) {
        console.log('Firestores Services vacío');
        setServices([]);
      } else {
        setServices(querySnapshot.docs.map((doc) => doc.data()));
      }
    })
    dbUsers_services.get().then((querySnapshot) => {
      if (querySnapshot.size === 0) {
        console.log('Firestores Users_services vacío');
        setUsers_services([]);
      } else {
        setUsers_services(querySnapshot.docs.map((doc) => doc.data()))
      }
    })
  }, []);

  // Declaration of local constants
  const [loggedUser, setLoggedUser] = useState(null); // Document of logged user info

  const selectUser = (props) => {
    let result
    if (props) {
      result = users.find(i => i.id == props)
      setLoggedUser(result);
      return result
    }
  }

  const listUserServices = (props) => {
    if (loggedUser) {
      let result
      result = users_services.filter(i => i.idUser == loggedUser.id)
      console.log('user services', result)
      return result
    }
  }

  const addUserService = (props) => {
    if (props.idUser && props.idService && props.idProvider && loggedUser) {
      let result
      const doc = {
        id: 1 + Math.max.apply(Math, users_services.map((i) => { return i.id })),
        idUser: loggedUser.id,
        idProvider: props.idProvider,
        idService: props.idService,
        fecha: Date.now(),
      };
      result = users_services.push(doc)
      return result
    }
  }

  const removeUserService = (props) => {
    console.log ('props', props)
    console.log ('loggedUser', loggedUser)
    console.log ('props && loggedUser', props && loggedUser)
    if (props && loggedUser) {
      console.log('user services'.users_services)
      let result
      result = users_services.filter(i => (i.id != props)      )
      setUsers_services(result)
      console.log('despues de borrar'.return)
      return result
    }
  }

  const listServices = () => {
    let result
    result = services;
    return result;
  }
  const listProviders = () => {
    let result
    result = providers;
    return result;
  }
  const listUserData = (props) => {
    let result;
    if (!props) {
      result = loggedUser
      return result
    }
    else {
      let result
      result = users.find(i => i.id == props)
      setLoggedUser(result);
      setLoggedUser(result);
      return result
    }
  }

  const listUsers = (props) => {
    let result
    result = users;
    return result;
  }

  const doneLoading = () => {
    console.log('pro us ser usser', providers, users, services, users_services)
    return (providers && users && services && users_services)
  }

  const value = {
    selectUser, listUserServices, addUserService, removeUserService, listServices, listProviders, listUserData, listUsers, doneLoading
  }
  return (
    <LocalContext.Provider value={value}>
      {children}
    </LocalContext.Provider>
  )
}
