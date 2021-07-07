import React, { useState, useContext } from 'react';
export const AddTocontext = React.createContext();
import { getFirestore } from '../firebase';


export function useCounter() {
  return useContext(AddTocontext);
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
  dbProviders.get().then((querySnapshot) => {
    if (querySnapshot.size === 0) {
      console.log('Firestores Providers vacío');
      setProviders([]);
    } else {
      setProviders(querySnapshot.docs.map((doc) => doc.data()));
    }})
  dbUsers.get().then((querySnapshot) => {
    if (querySnapshot.size === 0) {
      console.log('Firestores Users vacío');
      setUsers([]);
    } else {
      setUsers(querySnapshot.docs.map((doc) => doc.data()));
    }})
  dbServices.get().then((querySnapshot) => {
    if (querySnapshot.size === 0) {
      console.log('Firestores Services vacío');
      setServices([]);
    } else {
      setServices(querySnapshot.docs.map((doc) => doc.data()));
    }})
  dbUsers_services.get().then((querySnapshot) => {
    if (querySnapshot.size === 0) {
      console.log('Firestores Users_services vacío');
      setUsers_services([]);
    } else {
      setUsers_services(querySnapshot.docs.map((doc) => doc.data()));
    }})

/*   const hacerAddTo = (i) => {
    console.log('cuenta en context');
    console.log(cuenta);
    let temp = cuenta + i;
    console.log('esto sería el temp antes de grabar en memoria: ', temp)
    setCuenta(temp);
  };
 */

  const [loggedUser, setLoggedUser]=useState(null);

  const selectUser= () => {console.log('selectUser')
    const index = order.findIndex((i) => i.id === props.userId);
    setLoggedUser(index);
    return loggedUser;
  }

  const listUserServices= () => {console.log('listUserServices')}




  const addUserService = (service) => {console.log('addUserService')}
  const removeUserService= (service) => {console.log('removeUserService')}
  const listServices= () => {console.log('listServices')}
  const listUserData= () => {console.log('listUserData')}
  const listUsers= () => {console.log('listUsers')}
  const selectUser= () => {console.log('selectUser')}





const value={addUserService, removeUserService, listUserServices,
  listServices,listUserData, listUsers, selectUser}
  return (
    <AddTocontext.Provider value={value}>
      {children}
    </AddTocontext.Provider>
  )
}
