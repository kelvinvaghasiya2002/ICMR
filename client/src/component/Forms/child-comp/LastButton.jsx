import React, { useState } from "react";
import { Link } from "react-router-dom";
import PopUp from "./PopUp.jsx";

function LastButton({ prev, formName, formData, MainForm, validateForm }) {
  const [popUp, setPopUp] = useState(false);
  const [ifAmbulance, setIfAmbulance] = useState(false);
  console.log(formData);

  const handleSubmit = () => {
    // Validate the form before proceeding
    if (validateForm && !validateForm()) {
      return;
    }
    var CompleteForm = localStorage.getItem("CompleteForm");

    if (CompleteForm) {
      CompleteForm = JSON.parse(CompleteForm);
      const data = { ...CompleteForm, ...formData };
      localStorage.setItem("CompleteForm", JSON.stringify(data));
    } else {
      localStorage.setItem("CompleteForm", JSON.stringify(formData));
    }
    localStorage.setItem(formName, JSON.stringify(formData));

    if (MainForm == "HFAT-1") {
      var completeform = localStorage.getItem("CompleteForm");
      setPopUp(true);
      setIfAmbulance(JSON.parse(completeform).B14);
      JSON.parse(completeform).B14 === "Yes"
        ? setIfAmbulance(true)
        : setIfAmbulance(false);
    }

    if (MainForm == "HFAT-2") {
      var completeform = localStorage.getItem("CompleteForm");
      setPopUp(true);
      JSON.parse(completeform).H2B9 === "Yes"
        ? setIfAmbulance(true)
        : setIfAmbulance(false);
    }

    if (MainForm == "HFAT-3") {
      var completeform = localStorage.getItem("CompleteForm");
      setPopUp(true);
      JSON.parse(completeform).H3B9 === "Yes"
        ? setIfAmbulance(true)
        : setIfAmbulance(false);
    }

    if (MainForm == "AMBULANCE") {
      setPopUp(true);
    }

    if (MainForm == "CST") {
      setPopUp(true);
    }
  };

  return (
    <>
      <div className="buttons">
        {MainForm !== "AMBULANCE" && (
          <button className="prevbtn">
            <Link to={prev}>Previous</Link>
          </button>
        )}
        <button
          onClick={handleSubmit}
          style={{ cursor: "pointer" }}
          className="nextbtn"
        >
          Submit
        </button>
        {popUp && (
          <PopUp
            ifAmbulance={ifAmbulance}
            setPopUp={setPopUp}
            MainForm={MainForm}
          />
        )}
      </div>
    </>
  );
}

export default LastButton;
