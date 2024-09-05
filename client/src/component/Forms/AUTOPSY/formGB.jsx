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

function FormGB() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  turnOffbutton();
  var formgb = setLocalStorage("formgb", {
    GB1: "",
    GB2: "",
    GB3: "",
    GB4: "",
    GB5: "",
    GB6: "",
    GB7: "",
    GB8: "",
    GB9: "",
    GB10: "",
  });
  const [formGB, setFormGB] = useState(JSON.parse(formgb));
  // const [errors, setErrors] = useState({});
  // for validation
  const { isValid, errors, setErrors } = useFormValidation(formGB, [
    "GB1",
    "GB2",
    "GB3",
    "GB4",
    "GB5",
    "GB6",
    "GB7",
    "GB8",
    "GB9",
    "GB10",
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
      case "GB1":
      case "GB2":
      case "GB3":
        error = validateName(value);
        if (!error) {
          validatedValue = value;
        } else {
          validatedValue = formGB[name];
        }
        break;
      case "GB4":
        error = validateNumber(value);
        if (!error) {
          validatedValue = value;
        } else {
          validatedValue = formGB[name];
        }
        break;
      default:
        break;
    }

    setFormGB((prevValue) => ({ ...prevValue, [name]: validatedValue }));

    // Perform additional required validation
    switch (name) {
      case "GB1":
      case "GB2":
      case "GB3":
      case "GB4":
      case "GB5":
      case "GB6":
      case "GB7":
      case "GB8":
      case "GB9":
      case "GB10":
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
            <SidePanelAutopsy id={"8"} />
            <div className="grayedover" onClick={toggleSidebar}></div>
          </>
        )}
        {/* <SidePanel id={"1"} /> */}
        <div className="siteInfo" data-aos="fade-left">
          <div className="formhdr">
            <div>
              <h3>GB. Details of deceased</h3>
            </div>
          </div>
          <div className="formcontent">
            <InputField
              name="GB1"
              h3="GB.1 : Name of the Head of the household:"
              value={formGB.GB1}
              onChange={handleChangeWithValidation}
              placeholder={"Type here"}
              required
              errorMsg={errors.GB1}
            />
            <InputField
              name="GB2"
              h3="GB.2 : Full name of the deceased:"
              value={formGB.GB2}
              placeholder={"Type here"}
              onChange={handleChangeWithValidation}
              required
              errorMsg={errors.GB2}
            />
            <InputField
              name="GB3"
              h3="GB3. Name of mother of the deceased:"
              placeholder={"Type here"}
              value={formGB.GB3}
              onChange={handleChangeWithValidation}
              required
              errorMsg={errors.GB3}
            />
            <InputField
              name="GB4"
              h3="GB.4 : Age in Months or Years:"
              value={formGB.GB4}
              placeholder={"Type here"}
              onChange={handleChangeWithValidation}
              required
              errorMsg={errors.GB4}
            />
            <Radio
              name="GB5"
              h3="GB.5 : Respondent's sex:"
              CheckbobItems={["Male", "Female"]}
              byDefault={formGB.GB5}
              onClick={handleChange(setFormGB)}
              errorMsg={errors.GB5}
            />
            <Radio
              name="GB6"
              h3="GB.6 : Relationship of deceased to head of household:"
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
              byDefault={formGB.GB6}
              onClick={handleChange(setFormGB)}
              // required
              errorMsg={errors.GB6}
            />
            <InputField
              name="GB7"
              h3="GB.7 : House address of the deceased (include PIN):"
              value={formGB.GB7}
              onChange={handleChangeWithValidation}
              placeholder={"Type here"}
              required
              errorMsg={errors.GB7}
            />
            <InputField
              name="GB8"
              type={"date"}
              h3="GB.8 : Date of death:"
              value={formGB.GB8}
              onChange={handleChangeWithValidation}
              required
              errorMsg={errors.GB8}
            />
            <Radio
              name="GB9"
              h3="GB.9 : Place of death:"
              CheckbobItems={[
                "Home",
                "Hospital",
                "Other place (Specify)",
                "Unknown",
              ]}
              otherArray={[0, 0, 1, 0]}
              byDefault={formGB.GB9}
              onClick={handleChange(setFormGB)}
              // required
              errorMsg={errors.GB9}
            />
            <InputField
              name="GB10"
              h3="GB.10 : What did the respondent think this person die of?"
              p="(Allow the respondent to tell the illness in his or her own words)"
              value={formGB.GB10}
              onChange={handleChangeWithValidation}
              placeholder={"Type here"}
              required
              errorMsg={errors.GB10}
            />

            <div className="button-container">
              <Buttons
                formName="formgb"
                formData={formGB}
                prevText="Previous"
                nextText="Save & Next"
                prev="/formGA"
                next="/formGC"
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

export default FormGB;
