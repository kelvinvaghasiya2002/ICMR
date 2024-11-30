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
import OverlayCard from "../OverlayCard.jsx";
import useFormValidation from "../../../utils/custom_validation_hook.js";

function FormB18() {
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

  const { isValid, errors, setErrors } = useFormValidation(formB16, [
    "B16",
  ]);

//   const handleChangeWithValidation = (e) => {
//     const { name, value } = e.target;
//     let validatedValue = value;
//     let error = "";

//     setFormA3((prevValue) => ({ ...prevValue, [name]: validatedValue }));

//     // Perform additional required validation
//     switch (name) {
//         case "B16":
//             error = error || validateRequired(validatedValue);
//             break;
//         default:
//             break;
//     }

//     setErrors((prevErrors) => ({ ...prevErrors, [name]: error }));
// };

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
              <h3>Initial Healthcare Seeking Pathway</h3>
            </div>
          </div>

          <div className="formcontent cont_extra">
            <Radio
              h3="B.16 If Home visit by a doctor, then which type of doctor visited to attend the emergency patient?"
              CheckbobItems={[
                "Allopathic doctor",
                "AYUSH doctor",
                "Registered Medical Practitioner (RMP)",
                "Non-registered Medical Practitioner",
                "Unqualified Person",
                "Other (Specify)",
              ]}
              otherArray={[0, 0, 0, 0, 0, 1]}
              name="B16"
              setter={setFormB16}
              onClick={handleChange(setFormB16)}
              byDefault={formB16.B16}
            />

            <div className="button-container">
            <CSTButton
              formName="formb16"
              formData={formB16}
              prev="/initialhealthcareseekingpathway-1"
              next="/initialhealthcareseekingpathway-4"
              prevText="Previous"
              nextText="Save & Next"
            />
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

export default FormB18;