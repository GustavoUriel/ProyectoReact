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
        console.log('antes de ordenar', toArrange)
        toArrange.sort((a,b)=>a.id-b.id)
        console.log('desp de ordenar', toArrange)
        setUsers(toArrange);      }
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
    console.log('selectUser ', props)
    if (props) {
      let result
      users.map((i) => { if (i.id == props) { result = i } });
      setLoggedUser(result);
      console.log(result)
      console.log(result.id)
      return result
    }
  }

  const listUserServices = (props) => {
    console.log('listUserServices')
    if (loggedUser) {
      let result
      console.log('todoslosservicios', users_services)
      result = users_services.filter(i => i.idUser == loggedUser.id)
      console.log('solodelusuario', result)
      return result
    }
  }

  const addUserService = (props) => {
    console.log('addUserService')
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
      console.log(result)
      return result
    }
  }

  const removeUserService = (props) => {
    console.log('removeUserService')
    if (props.idService && props.idProvider && loggedUser) {
      let result
      result = users_services.filter((i) => {
        return i.idUser != loggedUser.id || i.services != props.idService || i.idProvider != props.idProvider;
      });
      return setUsers_services(result)
    }
  }
  const listServices = () => {
    console.log('listServices')
    let result
    result = services;
    console.log(result)
    return result;
  }
  const listProviders = () => {
    console.log('listProviders')
    let result
    result = providers;
    console.log(result)
    return result;
  }
  const getUserData = (props) => {
    let result;
    console.log('getUserData')
    result = loggedUser
    console.log(result)
    return result
  }

  const listUsers = (props) => {
    console.log('listUsers')
    let result
    result = users;
    console.log(result)
    return result;
  }

  const doneLoading = () => {
    console.log('pro us ser usser', providers, users, services, users_services)
    return (providers && users && services && users_services)
  }

  const value = {
    selectUser, listUserServices, addUserService, removeUserService, listServices, listProviders, getUserData, listUsers, doneLoading
  }
  return (
    <LocalContext.Provider value={value}>
      {children}
    </LocalContext.Provider>
  )
}
