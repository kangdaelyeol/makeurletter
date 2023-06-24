import React, { useState } from "react";
import Styles from "./create.module.css";
import Setbar from "../setbar/Setbar";
import Createform from "../createform/Createform";

const Create = () => {
  const [elements, setElements] = useState([]);
  const [currentElement, setCurrentElement] = useState([]);
  

  return (
    <div className="container">
      <Createform />
      <Setbar />
    </div>
  )
}


export default Create;