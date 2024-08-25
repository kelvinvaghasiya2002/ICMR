import React from "react";
import { Link } from "react-router-dom";

function NewFormPopUp({ setPopUp, MainForm }) {
  const handleSubmit = () => {
    localStorage.removeItem(MainForm);
  };

  return (
    <>
      <div id="blur-background"></div>
      <div className="popup scale-in-top">
        <h3 className="popuph3">Form</h3>
        <h3>Fill New Form</h3>
        <p style={{ margin: "0" }}>
          Do you want to contine form? or Fil New Form?
        </p>
        <div className="popupbtn">
          <button
            className="cancelbtn"
            onClick={() => {
              setPopUp(false);
            }}
          >
            Contine
          </button>

          <Link
            className="nextbtn"
            onClick={handleSubmit}
            style={{ color: "white", textDecoration: "none" }}
            // to={ifAmbulance ? "/facilityinformation" : "/"}
          >
            New Form
          </Link>
        </div>
      </div>
    </>
  );
}

export default NewFormPopUp;
