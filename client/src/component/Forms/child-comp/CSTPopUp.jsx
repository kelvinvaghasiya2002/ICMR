import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
const server = import.meta.env.VITE_SERVER;

function CSTPopUp({ setPopup, lastForm, from, formName }) {
  const [linkPath, setLinkPath] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async () => {
    var uniqueCode = JSON.parse(localStorage.getItem("CSTuniqueCode"));
    var CompleteForm = JSON.parse(localStorage.getItem("CompleteForm"));
    CompleteForm = { ...uniqueCode, ...CompleteForm, ...lastForm };

    if (formName === "formf27" || formName === "formb16") {
      var Name_and_Emergencies = JSON.parse(
        localStorage.getItem("Name_and_Emergencies")
      );
      var PartBLoop = JSON.parse(localStorage.getItem("PartBLoop"));

      var Emergency_Data = CompleteForm.Emergency_Data;
      if (Emergency_Data) {
        CompleteForm.Emergency_Data = [...Emergency_Data, PartBLoop];
      } else {
        Emergency_Data = [PartBLoop];
        CompleteForm = { ...CompleteForm, Emergency_Data };
      }
      localStorage.setItem("CompleteForm", JSON.stringify(CompleteForm));

      if (Name_and_Emergencies?.length === 0) {
        try {
          const response = await axios.post(`${server}/cstdata`, {
            CompleteForm: CompleteForm,
          });
          console.log(response.data);
          const localstorage = { ...localStorage };
          for (var key in localstorage) {
            if (key === "token") {
              continue;
            } else {
              localStorage.removeItem(key);
            }
          }
          navigate("/");
        } catch (error) {
          console.log(error);
        }
      } else {
        const localstorage = { ...localStorage };
        for (var key in localstorage) {
          if (
            key === "token" ||
            key === "forma1" ||
            key === "CompleteForm" ||
            key === "forma2" ||
            key === "forma3" ||
            key === "forma3_table" ||
            key === "Name_and_Emergencies" ||
            key === "forma15" ||
            key === "forma15_table" ||
            key === "CSTCompleteForm"
          ) {
            continue;
          } else {
            // console.log(localstorage[key]);
            localStorage.removeItem(key);
          }
        }

        if (
          window.location.pathname ===
          "/socio-demographicprofileofthepatientinthehhwithemergencycondition"
        ) {
          window.location.reload();
        } else {
          setLinkPath(
            "/socio-demographicprofileofthepatientinthehhwithemergencycondition"
          );
        }
      }
    } else {
      try {
        const response = await axios.post(`${server}/cstdata`, {
          CompleteForm: CompleteForm,
        });
        console.log(response.data);
        const localstorage = { ...localStorage };
        for (var key in localstorage) {
          if (key === "token") {
            continue;
          } else {
            // console.log(localstorage[key]);
            localStorage.removeItem(key);
          }
        }
        navigate("/");
      } catch (error) {
        console.log(error);
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

        <div className="popupbtn">
          <button
            className="cancelbtn"
            onClick={() => {
              setPopup(false);
            }}
          >
            Cancel
          </button>

          <Link
            className="nextbtn"
            onClick={handleSubmit}
            style={{ color: "white", textDecoration: "none" }}
            to={linkPath}
          >
            Submit
          </Link>
        </div>
      </div>
    </>
  );
}

export default CSTPopUp;
