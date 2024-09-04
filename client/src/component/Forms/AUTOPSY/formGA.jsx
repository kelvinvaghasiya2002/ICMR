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
import {
  validateName,
  validateNumber,
  validateNumberRange,
  validateRequired,
} from "../fv";
import useFormValidation from "../../../utils/custom_validation_hook";

function FormGA() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  turnOffbutton();
  var formga = setLocalStorage("formga", {
    GA1: "",
    GA2: "",
    GA3: "",
    GA4: "",
    GA5: "",
    GA6: "",
  });
  const [formGA, setFormGA] = useState(JSON.parse(formga));
  // const [errors, setErrors] = useState({});
  // for validation
  const { isValid, errors, setErrors } = useFormValidation(formGA, [
    "GA1",
    "GA2",
    "GA3",
    "GA4",
    "GA5",
    "GA6",
  ]);

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

    switch (name) {
      case "GA1":
        error = validateNumber(value);
        if (!error) {
          validatedValue = value;
        } else {
          validatedValue = formGA[name];
        }
        break;
      case "GA5":
        error = validateNumberRange(value, 0, 150);
        if (!error) {
          validatedValue = value;
        } else {
          validatedValue = formGA[name];
        }
        break;
      default:
        break;
    }

    setFormGA((prevValue) => ({ ...prevValue, [name]: validatedValue }));

    // Perform additional required validation
    switch (name) {
      case "GA1":
      case "GA2":
      case "GA3":
      case "GA4":
      case "GA5":
      case "GA6":
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
            <SidePanelAutopsy id={"7"} />
            <div className="grayedover" onClick={toggleSidebar}></div>
          </>
        )}
        {/* <SidePanel id={"1"} /> */}
        <div className="siteInfo" data-aos="fade-left">
          <div className="formhdr">
            <div>
              <h3>GA. Details of respondent and deceased</h3>
            </div>
          </div>
          <div className="formcontent">
            <InputField
              name="GA1"
              h3="GA.1 Name of the respondent"
              value={formGA.GA1}
              onChange={handleChangeWithValidation}
              placeholder={"Type here"}
              required
              errorMsg={errors.GA1}
            />
            <InputField
              name="GA2"
              h3="GA.2 Respondent ID:"
              placeholder={"Type here"}
              value={formGA.GA2}
              onChange={handleChangeWithValidation}
              required
              errorMsg={errors.GA2}
            />
            <Radio
              name="GA3"
              h3="GA.3 Relationship of respondent with deceased:"
              CheckbobItems={[
                "Brother/Sister",
                "Mother",
                "Father",
                "Grandfather",
                "Grandmother",
                "Other relative",
                "Neighbour/No relation",
                "Unknown",
              ]}
              byDefault={formGA.GA3}
              onClick={handleChange(setFormGA)}
              // required
              errorMsg={errors.GA3}
            />
            <Radio
              name="GA4"
              h3="GA.4 Did the respondent live with the deceased during the events that led to death?"
              CheckbobItems={["Yes", "No"]}
              byDefault={formGA.GA4}
              onClick={handleChange(setFormGA)}
              // required
              errorMsg={errors.GA4}
            />

            <InputField
              name="GA5"
              h3="GA.5 Respondent's age in completed years"
              value={formGA.GA5}
              onChange={handleChangeWithValidation}
              required
              errorMsg={errors.GA5}
            />
            <Radio
              name="GA6"
              h3="GA.6 Respondent's sex"
              CheckbobItems={["Male", "Female"]}
              byDefault={formGA.GA6}
              onClick={handleChange(setFormGA)}
              errorMsg={errors.GA6}
            />

            <div className="button-container">
              <Buttons
                formName="formga"
                formData={formGA}
                prevText="Previous"
                nextText="Save & Next"
                prev="/formFF"
                next="/formGB"
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

export default FormGA;
