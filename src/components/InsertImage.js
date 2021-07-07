import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/InsertImage.css';

export default function InsertImage(props) {
  if (!props.src) return
  return (
    <div>
      <img src={props.src} className={props.className} alt={props.alt} height={props.Size} />
    </div>
  )
}
