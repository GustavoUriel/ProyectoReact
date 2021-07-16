import "bootstrap/dist/css/bootstrap.min.css";
import "../css/NotFound.css";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import img404 from "img/404.webp";
import InsertImage from "components/InsertImage";

export default function NotFound() {
  return (
    <div>
      <InsertImage src={img404} Size={400} />
    </div>
  );
}
