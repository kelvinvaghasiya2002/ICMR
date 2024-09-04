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

function FormFD() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  turnOffbutton();
  var formfd = setLocalStorage("formfd", {
    FD1: "",
    FD2: "",
    FD3: "",
    FD4: "",
    FD5: "",
    FD6: "",
    FD7: "",
    FD8: "",
    FD9: "",
    FD10: "",
  });
  const [formFD, setFormFD] = useState(JSON.parse(formfd));
  // const [errors, setErrors] = useState({});
  // for validation
  const { isValid, errors, setErrors } = useFormValidation(formFD, [
    "FD1",
    "FD2",
    "FD3",
    "FD4",
    "FD5",
    ...(formFD.FD5 !== "No" ? ["FD6"] : []),
    ...(formFD.FD6 !== "No" && formFD.FD6 ? ["FD7"] : []),
    "FD8",
    ...(formFD.FD8 !== "No" ? ["FD9"] : []),
    ...(formFD.FD9 !== "No" && formFD.FD9 ? ["FD10"] : []),
  ]);

  useEffect(() => {
    if (formFD.FD5 === "No") {
      setFormFD({ ...formFD, FD6: "", FD7: "" });
    }
    if (formFD.FD6 === "No") {
      setFormFD({ ...formFD, FD7: "" });
    }
  }, [formFD.FD5, formFD.FD6]);

  useEffect(() => {
    if (formFD.FD8 === "No") {
      setFormFD({ ...formFD, FD9: "", FD10: "" });
    }
    if (formFD.FD9 === "No") {
      setFormFD({ ...formFD, FD10: "" });
    }
  }, [formFD.FD8, formFD.FD9]);

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
      case "FD7":
      case "FD10":
        error = validateNumber(value);
        if (!error) {
          validatedValue = value;
        } else {
          validatedValue = formFD[name];
          e.preventDefault(); // Prevent default behavior if the input was invalid
        }
        break;
      default:
        break;
    }

    setFormFD((prevValue) => ({ ...prevValue, [name]: validatedValue }));

    // Perform additional required validation
    switch (name) {
      case "FD1":
      case "FD2":
      case "FD3":
      case "FD4":
      case "FD5":
      case "FD6":
      case "FD7":
      case "FD8":
      case "FD9":
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
            <SidePanelAutopsy id={"4"} />
            <div className="grayedover" onClick={toggleSidebar}></div>
          </>
        )}
        {/* <SidePanel id={"1"} /> */}
        <div className="siteInfo" data-aos="fade-left">
          <div className="formhdr">
            <div>
              <h3>FD. Details of baby after birth</h3>
            </div>
          </div>
          <div className="formcontent">
            <Radio
              name="FD1"
              h3="FD.1 : Was the baby born alive (alive if the baby ever cried, moved or breathed)?:"
              CheckbobItems={["Yes", "No", "Unknown"]}
              byDefault={formFD.FD1}
              onClick={handleChange(setFormFD)}
              errorMsg={errors.FD1}
            />
            <Radio
              name="FD2"
              h3="FD.2 : Were there any bruises or signs of injury on child's body after the birth?:"
              CheckbobItems={["Yes", "No", "Unknown"]}
              byDefault={formFD.FD2}
              onClick={handleChange(setFormFD)}
              errorMsg={errors.FD2}
            />
            <Radio
              name="FD3"
              h3="FD.3 : Did he/she have any visible malformations at birth (very small head, mass on spine, etc.)?:"
              CheckbobItems={["Yes", "No", "Unknown"]}
              byDefault={formFD.FD3}
              onClick={handleChange(setFormFD)}
              errorMsg={errors.FD3}
            />
            <Radio
              name="FD4"
              h3="FD.4 : What was the child's size at birth?:"
              CheckbobItems={[
                "Very small",
                "Smaller than usual",
                "Average",
                "Larger than average",
                "Unknown",
              ]}
              byDefault={formFD.FD4}
              onClick={handleChange(setFormFD)}
              errorMsg={errors.FD4}
            />
            <Radio
              name="FD5"
              h3="FD.5 : Was he/she able to breath immediately after birth?:"
              CheckbobItems={["Yes", "No", "Unknown"]}
              byDefault={formFD.FD5}
              onClick={handleChange(setFormFD)}
              errorMsg={errors.FD5}
            />
            {formFD.FD5 !== "No" && formFD.FD5 && (
              <>
                <Radio
                  name="FD6"
                  h3="FD.6 : If yes, did he/she stop being able to breath/cry?:"
                  CheckbobItems={["Yes", "No", "Unknown"]}
                  byDefault={formFD.FD6}
                  onClick={handleChange(setFormFD)}
                  errorMsg={errors.FD6}
                />

                {formFD.FD6 !== "No" && formFD.FD6 && (
                  <InputField
                    name="FD7"
                    h3="FD.7 : If yes, how long (days) after birth did he/she stop breathing/crying?:"
                    onChange={handleChangeWithValidation}
                    value={formFD.FD7}
                    placeholder="Type here"
                    required
                    errorMsg={errors.FD7}
                  />
                )}
              </>
            )}
            <Radio
              name="FD8"
              h3="FD.8 : Was the baby breastfed within 1 hour of birth?:"
              CheckbobItems={["Yes", "No", "Unknown"]}
              byDefault={formFD.FD8}
              onClick={handleChange(setFormFD)}
              errorMsg={errors.FD8}
            />
            {formFD.FD8 !== "No" && formFD.FD8 && (
              <>
                <Radio
                  name="FD9"
                  h3="FD.9 : Was the baby given anything other than breast milk within 3 days of birth?:"
                  CheckbobItems={["Yes", "No", "Unknown"]}
                  byDefault={formFD.FD9}
                  onClick={handleChange(setFormFD)}
                  errorMsg={errors.FD9}
                />
                {formFD.FD9 !== "No" && formFD.FD9 && (
                  <InputField
                    name="FD10"
                    type={"number"}
                    h3="FD.10 : If yes, how long (days) after birth did he/she stop sucking?:"
                    onChange={handleChangeWithValidation}
                    value={formFD.FD10}
                    placeholder="Type here"
                    errorMsg={errors.FD10}
                  />
                )}
              </>
            )}
            <div className="button-container">
              <Buttons
                formName="formfd"
                formData={formFD}
                prevText="Previous"
                nextText="Save & Next"
                prev="/formFC"
                next="/formFE"
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

export default FormFD;
