import React from "react";
import Button from "./Button"
import "./ApplySection.css"

//Exemple d'un class component

class ApplySection extends React.Component {

  render(){
    return(
    <div className="apply-container">
      <h1>Change your life, learn to code</h1>
      <h2>Le Wagon brings technical skills to creative people</h2>
      <Button/>

    </div>
    )
  }
}

export default ApplySection;
