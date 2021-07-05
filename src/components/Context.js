import React, { useState, useContext } from 'react';
export const AddTocontext = React.createContext();

export function useCounter() {
  return useContext(AddTocontext);
};


export function Context({ children }) {

  console.log('first time context');
  const [cuenta, setCuenta] = useState(0);

  const hacerAddTo = (i) => {
    console.log('cuenta en context');
    console.log(cuenta);
    let temp = cuenta + i;
    console.log('esto sería el temp antes de grabar en memoria: ', temp)
    setCuenta(temp);
  };

const nombrarPerro =(i)=> {console.log('el perro se llama:', i)}
const decirMama = ()=>{console.log('Matilde')}

const value={hacerAddTo, nombrarPerro, decirMama}
  return (
    <AddTocontext.Provider value={value}>
      {children}
    </AddTocontext.Provider>
  )
}
