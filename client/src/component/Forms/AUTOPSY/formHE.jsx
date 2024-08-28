import React, { useState, useEffect } from "react";
import AOS from "aos";
import { handleChange, turnOffbutton } from "../helpers";
import setLocalStorage, { getLocalStorage } from "../setLocalStorage";
import Heading from "../../Heading/Heading";
import SidePanelCST from "../CST/SidePanelCST";
import InputField from "../child-comp/InputField";
import SidePanelAutopsy from "./sideBarAutopsy";
import Checkbox from "../child-comp/Checkbox";
import Radio from "../child-comp/Radio";
import Buttons from "../child-comp/Buttons";
import OverlayCard from "../OverlayCard";
import { validateNumber, validateRequired } from "../fv";
import useFormValidation from "../../../utils/custom_validation_hook";

function FormHE() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  turnOffbutton();
  var formG = getLocalStorage("formgc");
  var formhe = setLocalStorage("formhe", {
    HE1: "",
  });
  const [formHE, setFormHE] = useState(JSON.parse(formhe));
  // const [errors, setErrors] = useState({});
  // for validation
  const { isValid, errors, setErrors } = useFormValidation(formHE, ["HE1"]);

  const [showOverlay, setShowOverlay] = useState(false);

  // --toggle--
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
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleChangeWithValidation = (e) => {
    const { name, value } = e.target;
    let validatedValue = value;
    let error = "";

    setFormHE((prevValue) => ({ ...prevValue, [name]: validatedValue }));

    // Perform additional required validation
    switch (name) {
      case "HE1":
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
        <Heading h2="Verbal Autopsy Tools"></Heading>
      </div>
      <section className="form-main">
        {isSidebarVisible && (
          <>
            {/* <SidePanelCST id={"1"} /> */}
            <SidePanelAutopsy id={"17"} />
            <div className="grayedover" onClick={toggleSidebar}></div>
          </>
        )}
        {/* <SidePanel id={"1"} /> */}
        <div className="siteInfo" data-aos="fade-left">
          <div className="formhdr">
            <div>
              <h3>HE : narrative in local language</h3>
            </div>
          </div>
          <div className="formcontent">
            <InputField
              name="HE1"
              h3="HE.1 : Written narrative in local language:"
              p={
                "(Please describe the symptoms in order of appearance, doctor consulted or hospitalization, history of similar episodes, enter the results from reports of the investigations if available)"
              }
              onChange={handleChangeWithValidation}
              value={formHE.HE1}
              placeholder="Type here"
              required
              error={errors.HE1}
            />

            <div className="button-container">
              <Buttons
                formName="formhe"
                formData={formHE}
                prevText="Previous"
                nextText="Save & Next"
                prev={formG?.FC1 !== "No" ? "/formGC" : "/formGE"}
                next="/formGA"
                // validateForm={validateForm}
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

export default FormHE;
