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

function FormHC() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  turnOffbutton();
  var formhc = setLocalStorage("formhc", {
    HC1: "",
    HC2: "",
    HC3: "",
    HC4: "",
  });
  const [formHC, setFormHC] = useState(JSON.parse(formhc));
  // const [errors, setErrors] = useState({});
  // for validation
  const { isValid, errors, setErrors } = useFormValidation(formHC, [
    "HC1",
    ...(formHC.HC1 === "Yes" ? ["HC2"] : []),
    "HC3",
    "HC4",
  ]);

  const [showOverlay, setShowOverlay] = useState(false);

  useEffect(() => {
    if (formHC.HC1 !== "Yes") {
      setErrors((prevErrors) => ({ ...prevErrors, HC2: "" }));
    }
  }, [formHC.HC1]);

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

    setFormHC((prevValue) => ({ ...prevValue, [name]: validatedValue }));

    // Perform additional required validation
    switch (name) {
      case "HC1":
      case "HC2":
      case "HC3":
      case "HC4":
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
            <SidePanelAutopsy id={"15"} />
            <div className="grayedover" onClick={toggleSidebar}></div>
          </>
        )}
        {/* <SidePanel id={"1"} /> */}
        <div className="siteInfo" data-aos="fade-left">
          <div className="formhdr">
            <div>
              <h3>HC : Past history</h3>
            </div>
          </div>
          <div className="formcontent">
            <Radio
              name="HC1"
              h3="HC.1 Had a doctor ever stated that the deceased had any diseases?"
              CheckbobItems={["Yes", "No", "Unknown"]}
              onClick={handleChange(setFormHC)}
              byDefault={formHC.HC1}
              errorMsg={errors.HC1}
            />
            {formHC.HC1 === "Yes" && formHC.HC1 && (
              <Radio
                name="HC2"
                h3="HC.2 : If yes, what kind of disease the deceased had?"
                CheckbobItems={[
                  "Hypertension",
                  "Heart disease",
                  "Stroke",
                  "Diabetes",
                  "Tuberculosis",
                  "HIV/AIDS",
                  "Cancer",
                  "Asthma",
                  "Other chronic illness",
                ]}
                onClick={handleChange(setFormHC)}
                byDefault={formHC.HC2}
                errorMsg={errors.HC2}
              />
            )}
            <Radio
              name="HC3"
              h3="HC.3 : During the last year, did the weight of the deceased change significantly?"
              CheckbobItems={[
                "About same",
                "Yes, gained significantly",
                "Yes, lost significantly",
                "Unknown",
              ]}
              byDefault={formHC.HC3}
              onClick={handleChangeWithValidation}
              errorMsg={errors.HC3}
            />
            <InputField
              name="HC4"
              h3="HC.4 : Was the deceased taking any medications regularly during the last five years?"
              value={formHC.HC4}
              onChange={handleChangeWithValidation}
              required
              errorMsg={errors.HC4}
            />

            <div className="button-container">
              <Buttons
                formName="formhc"
                formData={formHC}
                prevText="Previous"
                nextText="Save & Next"
                prev="/formHB"
                next="/formHD"
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

export default FormHC;
