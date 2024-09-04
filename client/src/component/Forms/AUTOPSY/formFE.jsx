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

function FormFE() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  turnOffbutton();
  var formfe = setLocalStorage("formfe", {
    FE1: "",
    FE2: "",
    FE3: "",
    FE4: "",
    FE5: "",
    FE6: "",
    FE7: "",
    FE8: "",
    FE9: "",
    FE10: "",
  });
  const [formFE, setFormFE] = useState(JSON.parse(formfe));
  // const [errors, setErrors] = useState({});
  // for validation
  const { isValid, errors, setErrors } = useFormValidation(formFE, [
    "FE1",
    "FE2",
    // "FE3",
    ...(formFE.FE2 !== "No" ? ["FE3"] : []),
    "FE4",
    ...(formFE.FE4 !== "No" ? ["FE5"] : []),
    // "FE5",
    "FE6",
    ...(formFE.FE6 !== "No" ? ["FE7"] : []),
    "FE7",
    "FE8",
    "FE9",
    "FE10",
    "FE11",
    "FE12",
    // "FE13",
    ...(formFE.FE12 !== "No" ? ["FE13"] : []),
    "FE14",
    "FE15",
    "FE16",
    "FE17",
    "FE18",
    "FE19",
    "FE20",
    "FE21",
    "FE22",
  ]);

  useEffect(() => {
    if (formFE.FE2 === "No") {
      setFormFE({ ...formFE, FE3: "" });
    }
    if (formFE.FE4 === "No") {
      setFormFE({ ...formFE, FE5: "" });
    }
    if (formFE.FE6 === "No") {
      setFormFE({ ...formFE, FE7: "" });
    }
    if (formFE.FE12 === "No") {
      setFormFE({ ...formFE, FE13: "" });
    }
  }, [formFE.FE2, formFE.FE4, formFE.FE6, formFE.FE12]);

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
      case "FE1":
      case "FE3":
      case "FE5":
      case "FE13":
        error = validateNumber(value);
        if (!error) {
          validatedValue = value;
        } else {
          validatedValue = formFE[name];
          e.preventDefault(); // Prevent default behavior if the input was invalid
        }
        break;
      default:
        break;
    }

    setFormFE((prevValue) => ({ ...prevValue, [name]: validatedValue }));

    // Perform additional required validation
    switch (name) {
      case "FE1":
      case "FE2":
      case "FE3":
      case "FE4":
      case "FE5":
      case "FE6":
      case "FE7":
      case "FE8":
      case "FE9":
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
            <SidePanelAutopsy id={"5"} />
            <div className="grayedover" onClick={toggleSidebar}></div>
          </>
        )}
        {/* <SidePanel id={"1"} /> */}
        <div className="siteInfo" data-aos="fade-left">
          <div className="formhdr">
            <div>
              <h3>FE. Details of sickness</h3>
            </div>
          </div>
          <div className="formcontent">
            <InputField
              name="FE1"
              h3="FE.1 : For how many days was s/he sick before death?:"
              onChange={handleChangeWithValidation}
              value={formFE.FE1}
              placeholder="Type here"
              required
              error={errors.FE1}
            />
            <Radio
              name="FE2"
              h3="FE.2 : Did he/she have fever?:"
              CheckbobItems={["Yes", "No", "Unknown"]}
              byDefault={formFE.FE2}
              onClick={handleChange(setFormFE)}
              error={errors.FE2}
            />

            {formFE.FE2 !== "No" && formFE.FE2 && (
              <InputField
                name="FE3"
                h3="FE.3 : If yes, how many days did the fever last?:"
                onChange={handleChangeWithValidation}
                value={formFE.FE3}
                placeholder="Type here"
                required
                error={errors.FE3}
              />
            )}
            <Radio
              name="FE4"
              h3="FE.4 :Did he/she have any difficulty with breathing?:"
              CheckbobItems={["Yes", "No", "Unknown"]}
              byDefault={formFE.FE4}
              onClick={handleChange(setFormFE)}
              error={errors.FE4}
            />
            {formFE.FE4 !== "No" && formFE.FE4 && (
              <InputField
                name="FE5"
                h3="FE.5 : If yes, for how many days did the difficulty with breathing last?:"
                onChange={handleChangeWithValidation}
                value={formFE.FE5}
                placeholder="Type here"
                required
                error={errors.FE5}
              />
            )}
            <Radio
              name="FE6"
              h3="FE.6 : Did he/she have fast breathing?:"
              CheckbobItems={["Yes", "No", "Unknown"]}
              byDefault={formFE.FE6}
              onClick={handleChange(setFormFE)}
              error={errors.FE6}
            />
            {formFE.FE6 !== "No" && formFE.FE6 && (
              <InputField
                name="FE7"
                h3="FE.7 : If yes, for how many days did the difficulty with breathing last?:"
                onChange={handleChangeWithValidation}
                value={formFE.FE7}
                placeholder="Type here"
                required
                error={errors.FE7}
              />
            )}
            <Radio
              name="FE8"
              h3="FE.8 :Did s/he have in-drawing of the chest?:"
              CheckbobItems={["Yes", "No"]}
              byDefault={formFE.FE8}
              onClick={handleChange(setFormFE)}
              error={errors.FE8}
            />
            <Radio
              name="FE9"
              h3="FE.9 : Did he/she have a cough?:"
              CheckbobItems={["Yes", "No"]}
              byDefault={formFE.FE9}
              onClick={handleChange(setFormFE)}
              error={errors.FE9}
            />
            <Radio
              name="FE10"
              h3="FE.10 : Did he/she have grunting (demonstrate)??:"
              CheckbobItems={["Yes", "No"]}
              byDefault={formFE.FE10}
              onClick={handleChange(setFormFE)}
              error={errors.FE10}
            />
            <Radio
              name="FE11"
              h3="FE.11 : Did his/her nostrils flare with breathing?:"
              CheckbobItems={["Yes", "No"]}
              byDefault={formFE.FE11}
              onClick={handleChange(setFormFE)}
              error={errors.FE11}
            />
            <Radio
              name="FE12"
              h3="FE.12 : Did he/she have diarrhoea (frequent liquid stools)?:"
              CheckbobItems={["Yes", "No", "Unknown"]}
              byDefault={formFE.FE12}
              onClick={handleChange(setFormFE)}
              error={errors.FE12}
            />
            {formFE.FE12 !== "No" && formFE.FE12 && (
              <InputField
                name="FE13"
                h3="FE.13 : If yes, for how many days were the stools more frequent or liquid?:"
                onChange={handleChangeWithValidation}
                value={formFE.FE13}
                placeholder="Type here"
                required
                error={errors.FE13}
              />
            )}
            <Radio
              name="FE14"
              h3="FE.14 : Did he/she vomit?:"
              CheckbobItems={["Yes", "No", "Unknown"]}
              byDefault={formFE.FE14}
              onClick={handleChange(setFormFE)}
              error={errors.FE14}
            />
            <Radio
              name="FE15"
              h3="FE.15 : Did s/he have redness around, or discharge from, the birth cord stump?:"
              CheckbobItems={["Yes", "No", "Unknown"]}
              byDefault={formFE.FE15}
              onClick={handleChange(setFormFE)}
              error={errors.FE15}
            />
            <Radio
              name="FE16"
              h3="FE.16 : Did s/he have areas of skin that were red, hot or peeling?:"
              CheckbobItems={["Yes", "No", "Unknown"]}
              byDefault={formFE.FE16}
              onClick={handleChange(setFormFE)}
              error={errors.FE16}
            />
            <Radio
              name="FE17"
              h3="FE.17 : Did s/he have a skin rash with blisters containing pus?:"
              CheckbobItems={["Yes", "No", "Unknown"]}
              byDefault={formFE.FE17}
              onClick={handleChange(setFormFE)}
              error={errors.FE17}
            />

            <Radio
              name="FE18"
              h3="FE.18 : Did he/she have yellow eyes or skin?:"
              CheckbobItems={["Yes", "No", "Unknown"]}
              byDefault={formFE.FE18}
              onClick={handleChange(setFormFE)}
              error={errors.FE18}
            />
            <Radio
              name="FE19"
              h3="FE.19 : Did s/he have spasms or fits (convulsions)?:"
              CheckbobItems={["Yes", "No", "Unknown"]}
              byDefault={formFE.FE19}
              onClick={handleChange(setFormFE)}
              error={errors.FE19}
            />
            <Radio
              name="FE20"
              h3="FE.20 : Did s/he become unresponsive or unconscious?:"
              CheckbobItems={["Yes", "No", "Unknown"]}
              byDefault={formFE.FE20}
              onClick={handleChange(setFormFE)}
              error={errors.FE20}
            />
            <Radio
              name="FE21"
              h3="FE.21 : Did s/he have a bulging fontanelle (describe)?:"
              CheckbobItems={["Yes", "No", "Unknown"]}
              byDefault={formFE.FE21}
              onClick={handleChange(setFormFE)}
              error={errors.FE21}
            />
            <Radio
              name="FE22"
              h3="FE.22 : Did the child's body feel cold when touched?:"
              CheckbobItems={["Yes", "No", "Unknown"]}
              byDefault={formFE.FE22}
              onClick={handleChange(setFormFE)}
              error={errors.FE22}
            />

            <div className="button-container">
              <Buttons
                formName="formfe"
                formData={formFE}
                prevText="Previous"
                nextText="Save & Next"
                prev="/formFD"
                next="/formFF"
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

export default FormFE;
