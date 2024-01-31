import React, { useState } from "react";
import './Error.css';

const ErrorPopup = (props) => {
  return (
    <div className="backdrop" onClick={props.errorbtn}>
      <div className="Error-div">
       <header>
        <h2>{props.name}</h2>
       </header>
       <div>
        <p>Error Occured</p>
       </div>
       <footer>
        <button style={{margin:"10px"}} onClick={props.errorbtn}>
          Okay
        </button>
       </footer>
     </div>
    </div>
  )
}

export default ErrorPopup;
