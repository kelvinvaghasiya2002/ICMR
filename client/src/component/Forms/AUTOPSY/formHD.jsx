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
import LastButton from "../child-comp/LastButton";

function FormHD() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  turnOffbutton();
  var formhb = getLocalStorage("formhb");
  var formhd = setLocalStorage("formhd", {
    HD1: "",
    HD2: "",
    HD3: "",
    HD4: "",
    HD5: "",
    HD6: "",
    HD7: "",
    HD8: "",
    HD9: "",
    HD10_1: "",
    HD10_2: "",
    HD10_3: "",
  });
  const [formHD, setFormHD] = useState(JSON.parse(formhd));
  // const [errors, setErrors] = useState({});
  // for validation
  const { isValid, errors, setErrors } = useFormValidation(formHD, [
    "HD1",
    ...(formHD.HD1 === "Definitely Yes" ? ["HD2", "HD3"] : []),
    "HD4",
    "HD5",
    "HD6",
    "HD7",
    ...(formHD.HD7 === "Definitely Yes" ? ["HD8"] : []),
    "HD9",
    ...(formhb.HB3 >= 15 && formhb.HB3 <= 49 && formhb.HB4 === "Female"
      ? ["HD10_1", "HD10_2", "HD10_3"]
      : []),
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
      case "HD2":
        error = validateNumber(value);
        if (!error) {
          validatedValue = value;
        } else {
          validatedValue = formHD[name];
        }
        break;
      default:
        break;
    }

    setFormHD((prevValue) => ({ ...prevValue, [name]: validatedValue }));

    // Perform additional required validation
    switch (name) {
      case "HD1":
      case "HD2":
      case "HD3":
      case "HD4":
      case "HD5":
      case "HD6":
      case "HD7":
      case "HD8":
      case "HD9":
      case "HD10_1":
      case "HD10_2":
      case "HD10_3":
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
            <SidePanelAutopsy id={"16"} />
            <div className="grayedover" onClick={toggleSidebar}></div>
          </>
        )}
        {/* <SidePanel id={"1"} /> */}
        <div className="siteInfo" data-aos="fade-left">
          <div className="formhdr">
            <div>
              <h3>HD : Tobacco, Alcohol and Diet</h3>
            </div>
          </div>
          <div className="formcontent">
            {/* 
            HD.1
Did s/he smoke tobacco within the last five years?
⬜ Definitely Yes
⬜ Definitely No
⬜ Unknown
HD.2
If yes, how many bidi per day?
HD.3
If yes, how many cigarettes per day?






            */}
            <Radio
              name="HD1"
              h3="HD.1 Did s/he smoke tobacco within the last five years?"
              CheckbobItems={["Definitely Yes", "Definitely No", "Unknown"]}
              onClick={handleChange(setFormHD)}
              byDefault={formHD.HD1}
              errorMsg={errors.HD1}
            />
            {formHD.HD1 === "Definitely Yes" && (
              <>
                <InputField
                  name="HD2"
                  h3="HD.2 If yes, how many bidi per day?"
                  type="number"
                  value={formHD.HD2}
                  onChange={handleChange(setFormHD)}
                  errorMsg={errors.HD2}
                />
                <InputField
                  name="HD3"
                  h3="HD.3 If yes, how many cigarettes per day?"
                  type="number"
                  value={formHD.HD3}
                  onChange={handleChange(setFormHD)}
                  errorMsg={errors.HD3}
                />
              </>
            )}
            {/* 
            HD.4
Any other tobacco smoked?
⬜ Definitely Yes
⬜ Definitely No
⬜ Unknown
HD.5
Dis s/he chew tobacco within the last five years?
⬜ Definitely Yes
⬜ Definitely No
⬜ Unknown
HD.6
Dis s/he apply tobacco within last five years?
⬜ Definitely Yes
⬜ Definitely No
⬜ Unknown
HD.7
Did s/he normally drink alcohol (use local term) at least once a week during most weeks?
⬜ Definitely Yes
⬜ Definitely No
⬜ Unknown


            */}
            <Radio
              name="HD4"
              h3="HD.4 Any other tobacco smoked?"
              CheckbobItems={["Definitely Yes", "Definitely No", "Unknown"]}
              onClick={handleChange(setFormHD)}
              byDefault={formHD.HD4}
              errorMsg={errors.HD4}
            />
            <Radio
              name="HD5"
              h3="HD.5 Dis s/he chew tobacco within the last five years?"
              CheckbobItems={["Definitely Yes", "Definitely No", "Unknown"]}
              onClick={handleChange(setFormHD)}
              byDefault={formHD.HD5}
              errorMsg={errors.HD5}
            />
            <Radio
              name="HD6"
              h3="HD.6 Dis s/he apply tobacco within last five years?"
              CheckbobItems={["Definitely Yes", "Definitely No", "Unknown"]}
              onClick={handleChange(setFormHD)}
              byDefault={formHD.HD6}
              errorMsg={errors.HD6}
            />
            <Radio
              name="HD7"
              h3="HD.7 Did s/he normally drink alcohol (use local term) at least once a week during most weeks?"
              CheckbobItems={["Definitely Yes", "Definitely No", "Unknown"]}
              onClick={handleChange(setFormHD)}
              byDefault={formHD.HD7}
              errorMsg={errors.HD7}
            />
            {/* HD.8
If yes, normal average number of days per week drink was taken. (1 to 7, or 9. Unknown)


HD.9
Was s/he a pure vegetarian (consumed no eggs, meat or fish) for last few years.
⬜ Definitely Yes
⬜ Definitely No
⬜ Unknown


*/}
            {formHD.HD7 === "Definitely Yes" && (
              <InputField
                name="HD8"
                h3="HD.8 If yes, normal average number of days per week drink was taken. (1 to 7, or 9. Unknown)"
                type="number"
                value={formHD.HD8}
                onChange={handleChange(setFormHD)}
                errorMsg={errors.HD8}
              />
            )}
            <Radio
              name="HD9"
              h3="HD.9 Was s/he a pure vegetarian (consumed no eggs, meat or fish) for last few years."
              CheckbobItems={["Definitely Yes", "Definitely No", "Unknown"]}
              onClick={handleChange(setFormHD)}
              byDefault={formHD.HD9}
              errorMsg={errors.HD9}
            />
            {/* 
            HD.10
For female deaths aged 15-49 ask the following questions. For all others, skip to HE
HD.10.1
Was she either known or suspected to be pregnant?
⬜ Yes
⬜ No
HD.10.2
Did she die within 42 days of delivery?
⬜ Yes
⬜ No
HD.10.3
Did she die within 42 days of abortion?
⬜ Yes
⬜ No

 */}
            {formhb.HB3 >= 15 &&
              formhb.HB3 <= 49 &&
              formhb.HB4 === "Female" && (
                <>
                  <Radio
                    name="HD10_1"
                    h3="HD.10.1 Was she either known or suspected to be pregnant?"
                    CheckbobItems={["Yes", "No"]}
                    onClick={handleChange(setFormHD)}
                    byDefault={formHD.HD10_1}
                    errorMsg={errors.HD10_1}
                  />
                  <Radio
                    name="HD10_2"
                    h3="HD.10.2 Did she die within 42 days of delivery?"
                    CheckbobItems={["Yes", "No"]}
                    onClick={handleChange(setFormHD)}
                    byDefault={formHD.HD10_2}
                    errorMsg={errors.HD10_2}
                  />
                  <Radio
                    name="HD10_3"
                    h3="HD.10.3 Did she die within 42 days of abortion?"
                    CheckbobItems={["Yes", "No"]}
                    onClick={handleChange(setFormHD)}
                    byDefault={formHD.HD10_3}
                    errorMsg={errors.HD10_3}
                  />
                </>
              )}

            <div className="button-container">
              {formhb?.HB3 >= 15 &&
              formhb?.HB3 <= 49 &&
              formhb?.HB4 === "Female" ? (
                <Buttons
                  formName="formhd"
                  formData={formHD}
                  prevText="Previous"
                  nextText="Save & Next"
                  prev="/formHB"
                  next="/formHD"
                  // validateForm={validateForm}
                />
              ) : (
                <LastButton
                  formName="formhd"
                  formData={formHD}
                  prev="/formHC"
                  MainForm={"Autopsy"}
                  // validateForm={validateForm}
                  formType="autopsy"
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

export default FormHD;
