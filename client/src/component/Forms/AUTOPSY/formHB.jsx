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

function FormHB() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  turnOffbutton();
  var formhb = setLocalStorage("formhb", {
    HB1: "",
    HB2: "",
    HB3: "",
    HB4: "",
    HB5: "",
    HB6: "",
    HB7: "",
    HB8: "",
    HB9: "",
    HB10: "",
    HB11: "",
  });
  const [formHB, setFormHB] = useState(JSON.parse(formhb));
  // const [errors, setErrors] = useState({});
  // for validation
  const { isValid, errors, setErrors } = useFormValidation(formHB, [
    "HB1",
    "HB2",
    "HB3",
    "HB4",
    "HB5",
    // "HB6",
    ...(formHB.HB5 === "Yes" ? ["HB6"] : []),
    "HB7",
    "HB8",
    "HB9",
    "HB10",
    "HB11",
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
      case "HB1":
      case "HB2":
        error = validateName(value);
        if (!error) {
          validatedValue = value;
        } else {
          validatedValue = formHB[name];
        }
        break;
      case "HA3":
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

    setFormHB((prevValue) => ({ ...prevValue, [name]: validatedValue }));

    // Perform additional required validation
    switch (name) {
      case "HB1":
      case "HB2":
      case "HB3":
      case "HB4":
      case "HB5":
      case "HB6":
      case "HB7":
      case "HB8":
      case "HB9":
      case "HB10":
      case "HB11":
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
            <SidePanelAutopsy id={"14"} />
            <div className="grayedover" onClick={toggleSidebar}></div>
          </>
        )}
        {/* <SidePanel id={"1"} /> */}
        <div className="siteInfo" data-aos="fade-left">
          <div className="formhdr">
            <div>
              <h3>HB : Details of deceased</h3>
            </div>
          </div>
          <div className="formcontent">
            <InputField
              name="HB1"
              h3="HB.1 : Full name of the Head of the household:"
              value={formHB.HB1}
              onChange={handleChangeWithValidation}
              required
              errorMsg={errors.HB1}
            />
            <InputField
              name="HB2"
              h3="HB.2 : Full name of the deceased:"
              value={formHB.HB2}
              onChange={handleChangeWithValidation}
              required
              errorMsg={errors.HB2}
            />
            <InputField
              name="HB3"
              h3="HB.3 : Age in Years"
              value={formHB.HB3}
              onChange={handleChangeWithValidation}
              required
              errorMsg={errors.HB3}
            />
            <Radio
              name="HB4"
              h3="HB.4 : Sex:"
              CheckbobItems={["Male", "Female"]}
              onClick={handleChange(setFormHB)}
              error={errors.HB4}
            />
            <Radio
              name="HB5"
              h3="HB.5 : For work does s/he have to live away from home?:"
              CheckbobItems={["Yes", "No", "Unknown"]}
              onClick={handleChange(setFormHB)}
              error={errors.HB5}
            />
            {formHB.HB5 === "Yes" && (
              <Radio
                name="HB6"
                h3="HB.6 : If yes, how many months in a year?:"
                CheckbobItems={[
                  "Less than one month",
                  "One to three months",
                  "More than three months",
                ]}
                onClick={handleChange(setFormHB)}
                error={errors.HB6}
              />
            )}
            <Radio
              name="HB7"
              h3="HB.7 : Relationship of deceased to head of household:"
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
              onClick={handleChange(setFormHB)}
              error={errors.HB7}
            />
            <InputField
              name="HB8"
              h3="HB.8 : House address of the deceased (include PIN):"
              value={formHB.HB8}
              onChange={handleChangeWithValidation}
              required
              errorMsg={errors.HB8}
            />
            <InputField
              name="HB9"
              type={"date"}
              h3="HB.9 : Date of death"
              value={formHB.HB9}
              onChange={handleChangeWithValidation}
              required
              errorMsg={errors.HB9}
            />
            <Radio
              name="HB10"
              h3="HB.10 : Place of death:"
              CheckbobItems={[
                "Home",
                "Health facility",
                "Other place (Specify)",
                "Unknown",
              ]}
              otherArray={[0, 0, 1, 0]}
              onClick={handleChange(setFormHB)}
              error={errors.HB10}
            />
            <InputField
              name="HB11"
              h3="HB.11 : What did the respondent think this person die of?"
              p="(Allow the respondent to tell the illness in his or her own words)"
              value={formHB.HB11}
              onChange={handleChangeWithValidation}
              required
              errorMsg={errors.HB11}
            />

            <div className="button-container">
              <Buttons
                formName="formhb"
                formData={formHB}
                prevText="Previous"
                nextText="Save & Next"
                prev="/formHA"
                next="/formHC"
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

export default FormHB;
