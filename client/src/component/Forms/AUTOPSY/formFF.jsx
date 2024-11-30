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
import { validateNumber,validateRequired } from "../fv";
import useFormValidation from "../../../utils/custom_validation_hook";

function FormFF() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  turnOffbutton();
  var formF = getLocalStorage("formfc");
  var formff = setLocalStorage("formff", {
    FF1: "",
  });
  const [formFF, setFormFF] = useState(JSON.parse(formff));
  // const [errors, setErrors] = useState({});
  // for validation
  const { isValid, errors, setErrors } = useFormValidation(formFF, ["FF1"]);

  // useEffect(() => {
  //   if (formFE.FE1 === "No") {
  //     setFormFE({ ...formFE, FE2: "" });
  //   }
  //   if (formFE.FE7 === "No") {
  //     setFormFE({ ...formFE, FE8: [] });
  //   }
  // }, [formFE.FE1,formFE.FE7]);

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

    setFormFF((prevValue) => ({ ...prevValue, [name]: validatedValue }));

    // Perform additional required validation
    switch (name) {
      case "FF1":
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
            <SidePanelAutopsy id={"6"} />
            <div className="grayedover" onClick={toggleSidebar}></div>
          </>
        )}
        {/* <SidePanel id={"1"} /> */}
        <div className="siteInfo" data-aos="fade-left">
          <div className="formhdr">
            <div>
              <h3>FF. Written narrative in local language</h3>
            </div>
          </div>
          <div className="formcontent">
            <InputField
              name="FF1"
              h3="FF.1 : Written narrative in local language:"
              p={
                "(Please describe the symptoms in order of appearance, doctor consulted or hospitalization, history of similar episodes, enter the results from reports of the investigations if available.)"
              }
              onChange={handleChangeWithValidation}
              value={formFF.FF1}
              placeholder="Type here"
              required
              error={errors.FF1}
            />

            <div className="button-container">
              <Buttons
                formName="formfd"
                formData={formFF}
                prevText="Previous"
                nextText="Save & Next"
                prev={formF?.FC1 !== "No" ? "/formFC" : "/formFE"}
                next="/formGA"
                // validateForm={validateForm}
                formType="autopsy"
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

export default FormFF;
