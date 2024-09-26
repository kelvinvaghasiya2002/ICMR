import SidePanel from "./SidePanelCST.jsx";
import Checkbox from "../child-comp/Checkbox.jsx";
import Radio from "../child-comp/Radio.jsx";
import { Link } from "react-router-dom";
import "../Form.css";
import React, { useEffect, useState } from "react";
import Buttons from "../child-comp/Buttons.jsx";
import InputField from "../child-comp/InputField.jsx";
import { turnOffbutton, handleChange } from "../helpers.js";
import setLocalStorage from "../setLocalStorage.js";
import Heading from "../../Heading/Heading";
import Table from "../child-comp/Table.jsx";
import DropDown from "../child-comp/DropDown.jsx";
import Table1 from "../child-comp/Table1.jsx";
import CSTButton from "../child-comp/CSTButton.jsx";
import CSTLastButton from "../child-comp/CSTLastButton.jsx";
import OverlayCard from "../OverlayCard.jsx";
import useFormValidation from "../../../utils/custom_validation_hook.js";
import { validateRequired } from "../fv.js";

function FormB16() {
  var formb16 = setLocalStorage("formb16", {
    B0: "",
    B1: "",
    B2: "",
    B3: "",
    B4: [],
    B5_dt: "",
    B6: "",
    B7: "",
    B8: "",
    B9: "",
    B10: "",
    B11_if: "",
    B12: "",
    B13: "",
    B14: "",
    B15: "",
    B16: "",
    B17: "",
    B18_1: "",
    B18_2: "",
    B19: "",
    B20: "",
    B21: "",
    B22: "",
    B23_1: "",
    B23_2: "",
    B24_1: "",
    B24_2: "",
    B25: "",
    B26: "",
    B27: [],
    B28: "",
    B29: "",
    B30: "",
    B31: "",
    B32: "",
    B33: "",
    B34: "",
    B35: "",
  });
  const [formB16, setFormB16] = useState(JSON.parse(formb16));
  var [lessThen6Months, setLessThen6Months] = useState(false);
  turnOffbutton();

  const [isSidebarVisible, setSidebarVisible] = useState(
    window.innerWidth > 1024
  );

  const toggleSidebar = () => {
    setSidebarVisible(!isSidebarVisible);
  };
  const handleResize = () => {
    if (window.innerWidth >= 1025) {
      setSidebarVisible(true);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    // AOS.init({ duration: 2000 });
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const Name_and_Emergencies = JSON.parse(
    localStorage.getItem("Name_and_Emergencies")
  );

  //  check date is less than 6 months and set true false in setLessThen6Months
  useEffect(() => {
    if (formB16.B0 === "") return;
    const date = new Date();
    const date1 = new Date(formB16.B0);
    const diffTime = Math.abs(date - date1);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    if (diffDays > 180) {
      setLessThen6Months(false);
    } else {
      setLessThen6Months(true);
    }
  }, [formB16.B0]);

  const { isValid, errors, setErrors } = useFormValidation(formB16, [
    "B0",
    ...(lessThen6Months
      ? ["B1", "B2", "B3", "B4"]
      : []),
  ]);

  const handleChangeWithValidation = (e) => {
    const { name, value } = e.target;
    let validatedValue = value;
    let error = "";

    setFormB16((prevValue) => ({ ...prevValue, [name]: validatedValue }));

    // Perform additional required validation
    switch (name) {
      case "B0":
      case "B1":
      case "B2":
      case "B3":
      case "B4":
        error = error || validateRequired(validatedValue);
        break;
      default:
        break;
    }

    setErrors((prevErrors) => ({ ...prevErrors, [name]: error }));
  };

  return (
    <div>
      <div className="header">
        <div className="burger-menu" onClick={toggleSidebar}>
          &#9776;
        </div>
        <Heading h2="Community Survey Tool"></Heading>
      </div>
      <section id='site-info' className="form-main">
        {isSidebarVisible && (
          <>
            <SidePanel id={"11"} />
            <div className="grayedover" onClick={toggleSidebar}></div>
          </>
        )}
        <div className="siteInfo">
          <div className="formhdr">
            <div>
              <h2>A Socio-demographic Characteristics</h2>
            </div>
            <div>
              <h3>
                Socio-demographic profile of the patient in the HH with
                Emergency Condition
              </h3>
            </div>
          </div>

          <div className="formcontent cont_extra fbox">
            <div className="fbox1">
              <h3>
                Note: PART-B to be filled for each individual who were selected
                for emergency conditions or deaths.
                <br />
                <br />
                Name : {Name_and_Emergencies[0]?.Name} <br /> Emergency condition
                : {Name_and_Emergencies[0]?.Emergency}
              </h3>

              <InputField
                name={"B0"}
                h3="B.0 When did the Patient suffered with this condition?"
                placeholder="Type here"
                type={"date"}
                onChange={handleChangeWithValidation}
                value={formB16.B0}
              />
              {/* <h5>Note: If emergency conditions is within ≤ 6 months, continue to B.2 else skip to next patient in the list. If none of the patient in the list had any condition under ≤ 6 months then skip to section H.</h5> */}

              {/* check date(B0) is less then 6 months == true then show other question */}

              {lessThen6Months == true && (
                <>
                  <Radio
                    h3="B.1 Marital status"
                    CheckbobItems={[
                      "Never married",
                      "Currently Married",
                      "Separated",
                      "Divorced",
                      "Widow / Widower",
                      "Cohabitating",
                      "Prefer not to disclose/ Refuse",
                      "Not Applicable",
                    ]}
                    name="B1"
                    onClick={handleChange(setFormB16)}
                    byDefault={formB16.B1}
                  />
                  <Radio
                    h3="B.2 Level of education"
                    CheckbobItems={[
                      "Illiterate",
                      "Primary School",
                      "Middle School",
                      "High School",
                      "Intermediate/ Diploma",
                      "Graduate",
                      "Professional Degree",
                      "Prefer not to disclose/ Refuse",
                      "Not Applicable",
                    ]}
                    name="B2"
                    onClick={handleChange(setFormB16)}
                    byDefault={formB16.B2}
                  />
                  <Radio
                    h3="B.3 Occupation"
                    CheckbobItems={[
                      "Unemployed",
                      "Housewife/ Homemaker",
                      "Elementary Occupation",
                      "Plant & Machine Operators and Assemblers",
                      "Craft & Related Trade Workers",
                      "Skilled Agricultural Fishery Workers",
                      "Skilled Workers and Shop & Market Sales Workers",
                      "Clerks",
                      "Technicians & Associate Professionals",
                      "Professionals",
                      "Legislators, Senior Officers & Managers",
                      "Prefer not to disclose/ Refuse",
                      "Not Applicable",
                    ]}
                    name="B3"
                    onClick={handleChange(setFormB16)}
                    byDefault={formB16.B3}
                  />
                  <Checkbox
                    h3="B.4 Which of the following Health Insurance coverage you or the person with emergency condition or the deceased had?"
                    CheckbobItems={[
                      "Private cashless",
                      "Private reimbursement",
                      "Central Health Insurance Scheme (Ayushmaan Bharat/ CGHS / etc.)",
                      "State Health Insurance Scheme",
                      "Co-Payment",
                      "Community Health Insurance Programme",
                      "None",
                      "Prefer not to disclose/ Refuse",
                      "Don't Know",
                    ]}
                    name="B4"
                    StateValue={formB16}
                    setFunction={setFormB16}
                    array={formB16.B4}
                  />
                </>
              )}

            </div>

            <div className="button-container">

              {!lessThen6Months ? (
                <CSTLastButton
                  prev="/death"
                  formName="formb16"
                  formData={formB16}
                  MainForm={"CST"}
                />
              ) : (
                <CSTButton
                  formName="formb16"
                  formData={formB16}
                  prev="/death"
                  next="/initialhealthcareseekingpathway-1"
                  prevText="Previous"
                  nextText="Save & Next"
                />
              )}
              <OverlayCard
                isVisible={!isValid}
                message="(Please fill all required fields to proceed)"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default FormB16;
