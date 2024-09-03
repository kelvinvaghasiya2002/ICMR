import React, { useState, useEffect } from "react";
import AOS from "aos";
import { handleChange, turnOffbutton } from "../helpers";
import setLocalStorage from "../setLocalStorage";
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

function FormFB() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  turnOffbutton();
  var formfb = setLocalStorage("formfb", {
    FB1: "",
    FB2: "",
    FB3: "",
    FB4: "",
    FB5: "",
    FB6: "",
    FB7: "",
    FB8: "",
    FB9: "",
  });
  const [formFB, setFormFB] = useState(JSON.parse(formfb));
  // const [errors, setErrors] = useState({});
  const { isValid, errors, setErrors } = useFormValidation(formFB, [
    "FB1",
    "FB2",
    "FB3",
    "FB4",
    "FB5",
    "FB6",
    "FB7",
    "FB8",
    "FB9",
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
      case "FB4":
        error = validateNumber(value);
        if (!error) {
          validatedValue = value;
        } else {
          validatedValue = formFB[nBme];
          e.preventDefault(); // Prevent default behavior if the input was invalid
        }
        break;
      default:
        break;
    }

    setFormFB((prevValue) => ({ ...prevValue, [name]: validatedValue }));

    // Perform additional required validation
    switch (name) {
      case "FB1":
      case "FB2":
      case "FB3":
      case "FB4":
      case "FB5":
      case "FB6":
      case "FB7":
      case "FB8":
      case "FB9":
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
            <SidePanelAutopsy id={"2"} />
            <div className="grayedover" onClick={toggleSidebar}></div>
          </>
        )}
        {/* <SidePanel id={"1"} /> */}
        <div className="siteInfo" data-aos="fade-left">
          <div className="formhdr">
            <div>
              <h3>FB. Neonatal Death</h3>
            </div>
          </div>
          <div className="formcontent">
            <InputField
              name="FB1"
              h3="FB.1 : Name of the Head of the household:"
              onChange={handleChangeWithValidation}
              value={formFB.FB1}
              placeholder="Type here"
              required
              error={errors.FB1}
            />
            <InputField
              name="FB2"
              h3="FB.2 : Full name of the deceased:"
              onChange={handleChangeWithValidation}
              value={formFB.FB2}
              placeholder="Type here"
              required
              error={errors.FB2}
            />
            <InputField
              name="FB3"
              h3="FB.3 : Name of mother of the deceased:"
              onChange={handleChangeWithValidation}
              value={formFB.FB3}
              placeholder="Type here"
              required
              error={errors.FB3}
            />
            <InputField
              name="FB4"
              h3="FB.4 : Age in days:"
              onChange={handleChangeWithValidation}
              value={formFB.FB4}
              placeholder="Type here"
              required
              error={errors.FB4}
            />
            <Radio
              name="FB5"
              h3="FB.5 : Repondent's sex:"
              onClick={handleChange(setFormFB)}
              CheckbobItems={["Male", "Female"]}
              byDefault={formFB.FB5}
              // required
              error={errors.FB4}
            />
            <InputField
              name="FB6"
              h3="FB.6 : House address of the deceased (include PIN)"
              onChange={handleChangeWithValidation}
              value={formFB.FB6}
              placeholder="Type here"
              required
              error={errors.FB6}
            />
            <InputField
              name="FB7"
              h3="FB.7 : Date of death:"
              type={"date"}
              onChange={handleChangeWithValidation}
              value={formFB.FB7}
              placeholder="Type here"
              required
              error={errors.FB7}
            />
            <Radio
              name="FB38"
              h3="FB.8 : Place of death:"
              CheckbobItems={[
                "Home",
                "Health facility",
                "Other place (Specify)",
                "Unknown",
              ]}
              other={[0, 0, 1, 0]}
              byDefault={formFB.FB8}
              onClick={handleChange(setFormFB)}
              error={errors.FB8}
            />
            <InputField
              name="FB9"
              h3="FB.9 : What did the respondent think this person die of?:"
              p="(Allow the respondent to tell the illness in his or her own words)"
              onChange={handleChangeWithValidation}
              value={formFB.FB9}
              placeholder="Type here"
              required
              error={errors.FB9}
            />
            <div className="button-container">
              <Buttons
                formName="formfa"
                formData={formFB}
                prevText="Previous"
                nextText="Save & Next"
                prev="formFA"
                next="/formFC"
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

export default FormFB;
