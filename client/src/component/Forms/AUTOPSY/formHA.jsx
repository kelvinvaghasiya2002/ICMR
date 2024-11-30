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
import { validateName, validateNumber, validateRequired } from "../fv";
import useFormValidation from "../../../utils/custom_validation_hook";

function FormHA() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  turnOffbutton();
  var formha = setLocalStorage("formha", {
    HA1: "",
    HA2: "",
    HA3: "",
    HA4: "",
    HA5: "",
    HA6: "",
  });
  const [formHA, setFormHA] = useState(JSON.parse(formha));
  // const [errors, setErrors] = useState({});
  // for validation
  const { isValid, errors, setErrors } = useFormValidation(formHA, [
    "HA1",
    "HA2",
    "HA3",
    "HA4",
    "HA5",
    "HA6",
  ]);

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
      case "HA1":
        error = validateName(value);
        if (!error) {
          validatedValue = value;
        } else {
          validatedValue = formHA[name];
        }
        break;
      case "HA5":
        error = validateNumber(value);
        if (!error) {
          validatedValue = value;
        } else {
          validatedValue = formHA[name];
        }
        break;
      default:
        break;
    }

    setFormHA((prevValue) => ({ ...prevValue, [name]: validatedValue }));

    // Perform additional required validation
    switch (name) {
      case "HA1":
      case "HA2":
      case "HA3":
      case "HA4":
      case "HA5":
      case "HA6":
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
            <SidePanelAutopsy id={"13"} />
            <div className="grayedover" onClick={toggleSidebar}></div>
          </>
        )}
        {/* <SidePanel id={"1"} /> */}
        <div className="siteInfo" data-aos="fade-left">
          <div className="formhdr">
            <div>
              <h3>HA : Details of respondent and deceased</h3>
            </div>
          </div>
          <div className="formcontent">
            <InputField
              name="HA1"
              h3="HA.1 : Name of the respondent:"
              value={formHA.HA1}
              onChange={handleChangeWithValidation}
              required
              errorMsg={errors.HA1}
            />
            <InputField
              name="HA2"
              h3="HA.2 : Respondent ID:"
              value={formHA.HA2}
              onChange={handleChangeWithValidation}
              required
              errorMsg={errors.HA2}
            />
            <Radio
              name="HA3"
              h3="HA.3 : Relationship of respondent with deceased:"
              CheckbobItems={[
                "Wife/Husband",
                "Brother/Sister",
                "Son/Daughter",
                "Mother/ Father",
                "Grandfather",
                "Grandchild",
                "Son in law/Daughter in law",
                "Brother in law/Sister in law",
                "Parent in law",
                "Grandfather/Grandmother",
                "Other relative",
                "Neighbour/No relation",
                "Unknown",
              ]}
              byDefault={formHA.HA3}
              onClick={handleChange(setFormHA)}
              error={errors.HA3}
            />
            <Radio
              name="HA4"
              h3="HA.4 : Did the respondent live with the deceased during the events that led to death?:"
              CheckbobItems={["Yes", "No", "Unknown"]}
              byDefault={formHA.HA4}
              onClick={handleChange(setFormHA)}
              error={errors.HA4}
            />
            <InputField
              name="HA5"
              h3="HA.5 : Respondent's age in completed years:"
              value={formHA.HA5}
              onChange={handleChangeWithValidation}
              required
              errorMsg={errors.HA5}
            />
            <Radio
              name="HA6"
              h3="HA.6 : Respondent's sex:"
              CheckbobItems={["Male", "Female"]}
              onChange={handleChange(setFormHA)}
              errorMsg={errors.HA6}
            />

            <div className="button-container">
              <Buttons
                formName="formha"
                formData={formHA}
                prevText="Previous"
                nextText="Save & Next"
                prev="/formGF"
                next="/formHB"
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

export default FormHA;
