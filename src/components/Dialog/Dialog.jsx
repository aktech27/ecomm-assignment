import "./Dialog.css";

import React from "react";

const Dialog = (props) => {
  return (
    <div className="dialog" style={{ visibility: props.visibility }}>
      <div className="container">
        <h1>Purchase Successful</h1>
        <div>{JSON.stringify(props.product)}</div>
        <button
          onClick={() => {
            props.setVisibility("hidden");
            window.location.href = "../";
          }}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Dialog;
