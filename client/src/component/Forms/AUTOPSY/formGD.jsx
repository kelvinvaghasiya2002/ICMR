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
import { validateNumber, validateRequired } from "../fv";
import useFormValidation from "../../../utils/custom_validation_hook";

function FormGD() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  turnOffbutton();
  var formgd = setLocalStorage("formgd", {
    GD1: "",
    GD2: "",
    GD3: "",
    GD4: "",
    GD5: "",
  });
  const [formGD, setFormGD] = useState(JSON.parse(formgd));
  // const [errors, setErrors] = useState({});
  // for validation
  const { isValid, errors, setErrors } = useFormValidation(formGD, [
    "GD1",
    "GD2",
    ...(formGD.GD2 !== "No" ? ["GD3"] : []),
    "GD4",
    ...(formGD.GD4 !== "No" ? ["GD5"] : []),
  ]);

  useEffect(() => {
    if (formGD.GD2 === "No") {
      setFormGD({ ...formGD, GD3: "" });
    }
  }, [formGD.GD2]);

  useEffect(() => {
    if (formGD.GD4 === "No") {
      setFormGD({ ...formGD, GD5: "" });
    }
  }, [formGD.GD4]);

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

    setFormGD((prevValue) => ({ ...prevValue, [name]: validatedValue }));

    // Perform additional required validation
    switch (name) {
      case "GD1":
      case "GD2":
      case "GD3":
      case "GD4":
      case "GD5":
      case "GD6":
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
            <SidePanelAutopsy id={"10"} />
            <div className="grayedover" onClick={toggleSidebar}></div>
          </>
        )}
        {/* <SidePanel id={"1"} /> */}
        <div className="siteInfo" data-aos="fade-left">
          <div className="formhdr">
            <div>
              <h3>
                GD. If yes, did the child stop feeding during the illness that
                led to death?
              </h3>
            </div>
          </div>
          <div className="formcontent">
            <Radio
              name="GD1"
              h3="GD.1 : How was the child's size at birth?:"
              CheckbobItems={[
                "Very small",
                "Smaller than usual",
                "Average",
                "Larger than average",
                "Unknown",
              ]}
              byDefault={formGD.GD1}
              onClick={handleChange(setFormGD)}
              error={errors.GD1}
            />
            <Radio
              name="GD2"
              h3="GD.2 : Was he/she born premature?:"
              CheckbobItems={["Yes", "No", "Unknown"]}
              byDefault={formGD.GD2}
              onClick={handleChange(setFormGD)}
              error={errors.GD2}
            />
            {formGD.GD2 === "Yes" && (
              <InputField
                name="GD3"
                h3="GD.3 : If yes, after how many months of pregnancy?:"
                value={formGD.GD3}
                onChange={handleChangeWithValidation}
                required
                errorMsg={errors.GD3}
              />
            )}
            <Radio
              name="GD4"
              h3="GD.4 : Was the child breast-fed?:"
              CheckbobItems={["Yes", "No", "Unknown"]}
              byDefault={formGD.GD4}
              onClick={handleChange(setFormGD)}
              error={errors.GD4}
            />
            {formGD.GD4 === "Yes" && (
              <Radio
                name="GD5"
                h3="GD.5 : If yes, did the child stop feeding during the illness that led to death?:"
                CheckbobItems={["Yes", "No", "Unknown"]}
                byDefault={formGD.GD5}
                onClick={handleChange(setFormGD)}
                error={errors.GD5}
              />
            )}
            <div className="button-container">
              <Buttons
                formName="formgd"
                formData={formGD}
                prevText="Previous"
                nextText="Save & Next"
                prev="/formGB"
                next="/formGE"
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

export default FormGD;
