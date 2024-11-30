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
import { validateNumber, validateNumberRange, validateRequired } from "../fv";
import useFormValidation from "../../../utils/custom_validation_hook";

function FormFC() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  turnOffbutton();
  var formfc = setLocalStorage("formfc", {
    FC1: "",
    FC2: "",
    FC3: "",
    FC4: "",
    FC5: "",
    FC6: "",
    FC7: "",
    FC8: [],
    FC9: "",
  });
  const [formFC, setFormFC] = useState(JSON.parse(formfc));
  // const [errors, setErrors] = useState({});
  // for validation
  const { isValid, errors, setErrors } = useFormValidation(formFC, [
    "FC1",
    ...(formFC.FC1 !== "No" ? ["FC2"] : []),
    ...(formFC.FC1 === "No"
      ? [
          "FC3",
          "FC4",
          "FC5",
          "FC6",
          "FC7",
          ...(formFC.FC7 !== "No" ? ["FC8"] : []),
          "FC9",
        ]
      : []),
  ]);

  useEffect(() => {
    if (formFC.FC1 === "No") {
      setFormFC({ ...formFC, FC2: "" });
    }
    if (formFC.FC1 !== "No") {
      setFormFC({
        ...formFC,
        FC3: "",
        FC4: "",
        FC5: "",
        FC6: "",
        FC7: "",
        FC8: [],
        FC9: "",
      });
    }
    if (formFC.FC7 === "No") {
      setFormFC({ ...formFC, FC8: [] });
    }
  }, [formFC.FC1, formFC.FC7]);

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
      case "FC6":
        error = validateNumberRange(value, 0, 12);
        if (!error) {
          validatedValue = value;
        } else {
          validatedValue = formFC[name];
          e.preventDefault(); // Prevent default behavior if the input was invalid
        }
        break;
      default:
        break;
    }

    setFormFC((prevValue) => ({ ...prevValue, [name]: validatedValue }));

    // Perform additional required validation
    switch (name) {
      case "FC1":
      case "FC2":
      case "FC3":
      case "FC4":
      case "FC5":
      case "FC6":
      case "FC7":
      case "FC8":
      case "FC9":
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
            <SidePanelAutopsy id={"3"} />
            <div className="grayedover" onClick={toggleSidebar}></div>
          </>
        )}
        {/* <SidePanel id={"1"} /> */}
        <div className="siteInfo" data-aos="fade-left">
          <div className="formhdr">
            <div>
              <h3>FC. Neonatal Death</h3>
            </div>
          </div>
          <div className="formcontent">
            <Radio
              name="FC1"
              h3="FC.1 : Did s/he die from an injury or accident?:"
              CheckbobItems={["Yes", "No", "Unknown"]}
              byDefault={formFC.FC1}
              onClick={handleChange(setFormFC)}
              error={errors.FC1}
            />
            {formFC.FC1 !== "No" && formFC.FC1 && (
              <>
                <Radio
                  name="FC2"
                  h3="FC.2 : If yes, what kind of injury or accident?:"
                  CheckbobItems={[
                    "Road traffic accident",
                    "Fall",
                    "Fall of objects",
                    "Burn",
                    "Poisoning",
                    "Bite/sting",
                    "Natural disaster",
                    "Homicide/Assault",
                  ]}
                  byDefault={formFC.FC2}
                  onClick={handleChange(setFormFC)}
                  error={errors.FC2}
                />
              </>
            )}
            {formFC.FC1 === "No" && formFC.FC1 && (
              <>
                <Radio
                  name="FC3"
                  h3="FC.3 : Neonatal Death:"
                  CheckbobItems={["Yes", "No", "Unknown"]}
                  byDefault={formFC.FC3}
                  onClick={handleChange(setFormFC)}
                  error={errors.FC3}
                />
                <Radio
                  name="FC4"
                  h3="FC.4 : Where was he/she born:"
                  CheckbobItems={[
                    "Home",
                    "Health facility",
                    "Other",
                    "Unknown",
                  ]}
                  byDefault={formFC.FC4}
                  onClick={handleChange(setFormFC)}
                  error={errors.FC4}
                />
                <Radio
                  name="FC5"
                  h3="FC.5 : Who attended the delivery?:"
                  CheckbobItems={[
                    "Trained traditional birth attendant",
                    "Untrained traditional birth attendant",
                    "Midwife/Nurse",
                    "Allopathic Doctor",
                    "Homeopathic/Unani Doctor",
                    "None",
                    "Others",
                    "Unknown",
                  ]}
                  byDefault={formFC.FC5}
                  onClick={handleChange(setFormFC)}
                  error={errors.FC5}
                />
                <InputField
                  name="FC6"
                  h3="FC.6 : How many months long was the pregnancy?:"
                  onChange={handleChangeWithValidation}
                  value={formFC.FC6}
                  placeholder="Type here"
                  required
                  error={errors.FC6}
                />
                <Radio
                  name="FC7"
                  h3="FC.7 : Was there any complication during the pregnancy, or during labour?:"
                  CheckbobItems={["Yes", "No", "Unknown"]}
                  byDefault={formFC.FC7}
                  onClick={handleChange(setFormFC)}
                  error={errors.FC7}
                />
                {formFC.FC7 != "No" && formFC.FC7 && (
                  <Checkbox
                    name="FC8"
                    h3="FC.8 : If yes, what complications occurred?:"
                    CheckbobItems={[
                      "Mother had fits",
                      "Excessive bleeding before/during delivery",
                      "Waters broke one or more days before contractions started",
                      "Prolonged/difficult labour (12 hours or more)",
                      "Operative delivery",
                      "Mother had fever baby delivered bottom or feet first",
                      "Baby had cord around neck",
                      "Unknown",
                    ]}
                    setFunction={setFormFC}
                    StateValue={formFC}
                    array={formFC.FC8}
                    error={errors.FC8}
                  />
                )}
                <Radio
                  name="FC9"
                  h3="FC.9 : Did the mother receive 2 doses of tetanus toxoid during pregnancy?:"
                  CheckbobItems={["Yes", "No", "Unknown"]}
                  byDefault={formFC.FC9}
                  onClick={handleChange(setFormFC)}
                  error={errors.FC9}
                />
              </>
            )}

            <div className="button-container">
              <Buttons
                formName="formfc"
                formData={formFC}
                prevText="Previous"
                nextText="Save & Next"
                prev="/formFB"
                next={formFC.FC1 !== "No" ? "/formFF" : "/formFD"}
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

export default FormFC;
