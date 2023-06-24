import React from "react";
import Styles from "./create.module.css";
import Setbar from "../setbar/Setbar";
import Createform from "../createform/Createform";

const Create = () => {

  return (
    <div className="container">
      <Createform />
      <Setbar />
    </div>
  )
}


export default Create;