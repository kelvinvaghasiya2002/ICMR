import React, { useState } from "react";
import { Link } from "react-router-dom";
import PopUp from "./PopUp.jsx";

function LastButton({ prev, formName, formData, MainForm, validateForm, formType }) {
  const [popUp, setPopUp] = useState(false);
  const [ifAmbulance, setIfAmbulance] = useState(false);
  console.log(formData);

  const handleSubmit = () => {
    // Validate the form before proceeding
    if (validateForm && !validateForm()) {
      return;
    }
    // var CompleteForm = localStorage.getItem("CompleteForm");

    let targetFormType;

    switch (formType) {
        case "hfat1":
            targetFormType = "completeFormHfat1";
            break;
        case "hfat2":
            targetFormType = "completeFormHfat2";
            break;
        case "hfat3":
            targetFormType = "completeFormHfat3";
            break;
        case "cst":
            targetFormType = "completeFormCST";
            break;
        case "autopsy":
            targetFormType = "completeFormAutopsy";
            break;
        case "ambulance":
            targetFormType = "completeFormAmbulance";
            break;
        default:
            targetFormType = "CompleteForm";
    }

    // if (targetFormType) {
    //   targetFormType = JSON.parse(targetFormType);
    //   const data = { ...targetFormType, ...formData };
    //   localStorage.setItem(targetFormType, JSON.stringify(data));
    // } else {
    //   localStorage.setItem(targetFormType, JSON.stringify(formData));
    // }
    // localStorage.setItem(formName, JSON.stringify(formData));

    const existingData = localStorage.getItem(targetFormType);
    const data = existingData ? { ...JSON.parse(existingData), ...formData } : formData;
    localStorage.setItem(targetFormType, JSON.stringify(data));
    localStorage.setItem(formName, JSON.stringify(formData));

    if (MainForm == "HFAT-1") {
      var completeform = localStorage.getItem("completeFormHfat1");
      setPopUp(true);
      setIfAmbulance(JSON.parse(completeform).B14);
      JSON.parse(completeform).B14 === "Yes"
        ? setIfAmbulance(true)
        : setIfAmbulance(false);
    }

    if (MainForm == "HFAT-2") {
      var completeform = localStorage.getItem("completeFormHfat2");
      setPopUp(true);
      JSON.parse(completeform).H2B9 === "Yes"
        ? setIfAmbulance(true)
        : setIfAmbulance(false);
    }

    if (MainForm == "HFAT-3") {
      var completeform = localStorage.getItem("completeFormHfat3");
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
    if (MainForm == "Autopsy") {
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
