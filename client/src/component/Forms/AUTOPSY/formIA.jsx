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

function FormIA() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  turnOffbutton();
  var formia = setLocalStorage("formia", {
    IA1: "",
    IA2: "",
    IA3: "",
    IA4: "",
    IA5: "",
    IA6: "",
    IA7: "",
    IA8: "",
    IA9: "",
    IA10: "",
  });
  const [formIA, setFormIA] = useState(JSON.parse(formia));
  // const [errors, setErrors] = useState({});
  // for validation
  const { isValid, errors, setErrors } = useFormValidation(formIA, [
    "IA1",
    "IA2",
    "IA3",
    ...(formIA.IA3 === "Yes" ? ["IA4"] : []),
    "IA5",
    "IA6",
    "IA7",
    "IA8",
    "IA9",
    "IA10",
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
      case "IA1":
      case "IA2":
        error = validateName(value);
        if (!error) {
          validatedValue = value;
        } else {
          validatedValue = formIA[name];
        }
        break;
      case "IA4":
      case "IA7":
      case "IA8":
        error = validateNumber(value);
        if (!error) {
          validatedValue = value;
        } else {
          validatedValue = formIA[name];
        }
        break;
      default:
        break;
    }

    setFormIA((prevValue) => ({ ...prevValue, [name]: validatedValue }));

    // Perform additional required validation
    switch (name) {
      case "IA1":
      case "IA2":
      case "IA3":
      case "IA4":
      case "IA5":
      case "IA6":
      case "IA7":
      case "IA8":
      case "IA9":
      case "IA10":
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
            <SidePanelAutopsy id={"18"} />
            <div className="grayedover" onClick={toggleSidebar}></div>
          </>
        )}
        {/* <SidePanel id={"1"} /> */}
        <div className="siteInfo" data-aos="fade-left">
          <div className="formhdr">
            <div>
              <h3>IA : Details of respondent and deceased</h3>
            </div>
          </div>
          <div className="formcontent">
            <InputField
              name="IA1"
              h3="IA.1 : Full name of the Head of the household:"
              value={formIA.IA1}
              onChange={handleChangeWithValidation}
              required
              errorMsg={errors.IA1}
            />
            <InputField
              name="IA2"
              h3="IA.2 : Full name of the deceased:"
              value={formIA.IA2}
              onChange={handleChangeWithValidation}
              required
              errorMsg={errors.IA2}
            />
            <Radio
              name="IA3"
              h3="IA.3 : Was she pregnant?"
              CheckbobItems={["Yes", "No", "Unknown"]}
              onClick={handleChange(setFormIA)}
              byDefault={formIA.IA3}
              errorMsg={errors.IA3}
            />
            {formIA.IA3 === "Yes" && formIA.IA3 && (
              <InputField
                name="IA4"
                h3="IA.4 : If yes, how many months"
                value={formIA.IA4}
                onChange={handleChangeWithValidation}
                required
                errorMsg={errors.IA4}
              />
            )}
            <Radio
              name="IA5"
              h3="IA.5 : Did she died within 42 days of delivery/abortion?"
              CheckbobItems={["Yes", "No"]}
              onClick={handleChange(setFormIA)}
              byDefault={formIA.IA5}
              errorMsg={errors.IA5}
            />
            <Radio
              name="IA6"
              h3="IA.6 : Did she receive antenatal care during the pregnancy?"
              CheckbobItems={["Yes", "No", "Unknown"]}
              onClick={handleChange(setFormIA)}
              byDefault={formIA.IA6}
              errorMsg={errors.IA6}
            />
            <InputField
              name="IA7"
              h3="IA.7 : How many times did she receive antenatal care during the pregnancy?"
              value={formIA.IA7}
              onChange={handleChangeWithValidation}
              required
              errorMsg={errors.IA7}
            />
            <InputField
              name="IA8"
              h3="IA.8 : How many days before death did she deliver/abortion?"
              value={formIA.IA8}
              onChange={handleChangeWithValidation}
              required
              errorMsg={errors.IA8}
            />
            <Radio
              name="IA9"
              h3="IA.9 : Where was the delivery/abortion?"
              CheckbobItems={["Home", "Health facility", "Other", "Unknown"]}
              onClick={handleChange(setFormIA)}
              byDefault={formIA.IA9}
              errorMsg={errors.IA9}
            />
            <Radio
              name="IA10"
              h3="IA.10 : Who attended the delivery?"
              CheckbobItems={[
                "Trained traditional birth attendant",
                "Untrained traditional birth attendant",
                "Midwife/Nurse",
                "Allopathic Doctor",
                "Ayurvedic/Homeopathic/Unani Doctor",
                "None",
                "Other",
                "Unknown",
              ]}
              onClick={handleChange(setFormIA)}
              byDefault={formIA.IA10}
              errorMsg={errors.IA10}
            />

            <div className="button-container">
              {/* <Buttons
                formName="formia"
                formData={formIA}
                prevText="Previous"
                nextText="Save & Next"
                prev="/formHB"
                next="/formIA"
                // validateForm={validateForm}
              /> */}
              <LastButton
                formName="formia"
                formData={formIA}
                prev="/formHC"
                MainForm={"Autopsy"}
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

export default FormIA;
