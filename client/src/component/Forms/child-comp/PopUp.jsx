import React from "react";
import { Link } from "react-router-dom";
import {
  OnSubmitForm,
  OnAMBSubmitForm,
  OnAutopsySubmitForm,
} from "../../../utils/OnSubmitForm";

function PopUp({ ifAmbulance, setPopUp, MainForm }) {
  const handleSubmit = () => {
    if (MainForm == "HFAT-1") {
      const completeform = localStorage.getItem("CompleteForm");
      const table1 = localStorage.getItem("C1");
      const table2 = localStorage.getItem("E1");
      const table3 = localStorage.getItem("E2");
      const table4 = localStorage.getItem("I2");
      console.log(
        JSON.parse(completeform),
        JSON.parse(table1),
        JSON.parse(table2),
        JSON.parse(table3),
        JSON.parse(table4)
      );

      OnSubmitForm(completeform, table1, table2, table3, table4, MainForm);
    } else if (MainForm == "HFAT-2") {
      const completeform = localStorage.getItem("CompleteForm");
      const table1 = localStorage.getItem("H2C1");
      const table2 = localStorage.getItem("H2E1");
      const table3 = localStorage.getItem("H2E2");
      const table4 = localStorage.getItem("H2I3");
      console.log(
        JSON.parse(completeform),
        JSON.parse(table1),
        JSON.parse(table2),
        JSON.parse(table3),
        JSON.parse(table4)
      );

      OnSubmitForm(completeform, table1, table2, table3, table4, MainForm);
    } else if (MainForm == "HFAT-3") {
      const completeform = localStorage.getItem("CompleteForm");
      const table1 = localStorage.getItem("H3C1");
      const table2 = localStorage.getItem("H3E1");
      const table3 = localStorage.getItem("H3E2");
      const table4 = localStorage.getItem("H3I3");
      console.log(
        JSON.parse(completeform),
        JSON.parse(table1),
        JSON.parse(table2),
        JSON.parse(table3),
        JSON.parse(table4)
      );

      OnSubmitForm(completeform, table1, table2, table3, table4, MainForm);
    } else if (MainForm == "AMBULANCE") {
      const completeform = localStorage.getItem("CompleteForm");
      const table1 = localStorage.getItem("AMB16");
      const table2 = localStorage.getItem("AMB17");
      console.log(
        JSON.parse(completeform),
        JSON.parse(table1),
        JSON.parse(table2)
      );
      // console.log("comming");
      OnAMBSubmitForm(completeform, table1, table2, MainForm);
    } else if (MainForm == "Autopsy") {
      const completeform = localStorage.getItem("CompleteForm");
      console.log(completeform);
      console.log(JSON.parse(completeform));
      OnAutopsySubmitForm(completeform);
    }

    const localstorage = { ...localStorage };
    for (var key in localstorage) {
      if (key === "token") {
        continue;
      } else {
        // console.log(localstorage[key]);
        localStorage.removeItem(key);
      }
    }
  };

  return (
    <>
      <div id="blur-background"></div>
      <div className="popup scale-in-top">
        <h3 className="popuph3">Form</h3>
        <h3>Confirmation Message</h3>
        <p style={{ margin: "0" }}>Your response have been received.</p>
        {ifAmbulance && (
          <span style={{ fontSize: "1.2vw" }}>
            You will be redirected to ambulance form.
          </span>
        )}
        <div className="popupbtn">
          <button
            className="cancelbtn"
            onClick={() => {
              setPopUp(false);
            }}
          >
            Cancel
          </button>

          <Link
            className="nextbtn"
            onClick={handleSubmit}
            style={{ color: "white", textDecoration: "none" }}
            to={ifAmbulance ? "/facilityinformation" : "/"}
          >
            Submit
          </Link>
        </div>
      </div>
    </>
  );
}

export default PopUp;
