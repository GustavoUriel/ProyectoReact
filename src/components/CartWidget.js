import React from "react";

const CartWidget = () => {
  function sumar(){
    setClicks (clicks +1);
    setCuenta(cuenta +1);
  };
  function restar(){
    setClicks (clicks +1);
    if (cuenta==0) {
      setCuenta(cuenta)
    } else {
      setCuenta(cuenta-1)
    }
    console.log("restarrrrrr");
    console.log(cuenta);
    console.log(clicks);
  };

  const[cuenta, setCuenta] = React.useState(0);
  const[clicks, setClicks] = React.useState(0);

  return (
    <div>
      <button onClick={sumar}>Sumar</button>
      <button onClick={restar}>Restar</button>
      <p>{`Llevás ${cuenta} en la cuenta`}</p>
      <p>{`Pero clickeaste ${clicks} veces`}</p>
      <small>{new Date().toLocaleString()}</small>
    </div>
  )

}
export default CartWidget;

