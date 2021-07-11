import React, { useState, useContext } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/InsertImage.css';
import { unstable_renderSubtreeIntoContainer } from 'react-dom';

export default function InsertImage(props) {
  if (!props.src) return
  let Height= props.Size;
  console.log('Height antes',Height)


    return (
      <div>
        <img  src={props.src} className={props.className} alt={props.alt} height={Height} />
      </div>
    )


}
