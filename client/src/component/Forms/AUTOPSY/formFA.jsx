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

function FormFA() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  turnOffbutton();
  var formfa = setLocalStorage("formfa", {
    FA1: "",
    FA2: "",
    FA3: "",
    FA4: "",
    FA5: "",
    FA6: "",
  });
  const [formFA, setFormFA] = useState(JSON.parse(formfa));
  // const [errors, setErrors] = useState({});
  const { isValid, errors, setErrors } = useFormValidation(formFA, [
    "FA1",
    "FA2",
    "FA3",
    "FA4",
    "FA5",
    "FA6",
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
      case "FA5":
        error = validateNumber(value);
        if (!error) {
          validatedValue = value;
        } else {
          validatedValue = formFA[name];
          e.preventDefault(); // Prevent default behavior if the input was invalid
        }
        break;
      default:
        break;
    }

    setFormFA((prevValue) => ({ ...prevValue, [name]: validatedValue }));

    // Perform additional required validation
    switch (name) {
      case "FA1":
      case "FA2":
      case "FA3":
      case "FA4":
      case "FA5":
      case "FA6":
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
            <SidePanelAutopsy id={"1"} />
            <div className="grayedover" onClick={toggleSidebar}></div>
          </>
        )}
        {/* <SidePanel id={"1"} /> */}
        <div className="siteInfo" data-aos="fade-left">
          <div className="formhdr">
            <div>
              <h3>FA. Details of Respondent</h3>
            </div>
          </div>
          <div className="formcontent">
            <InputField
              name="FA1"
              h3="FA.1 : Name of Respondent:"
              onChange={handleChangeWithValidation}
              value={formFA.FA1}
              placeholder="Type here"
                required
              //   error={errors.A1}
            />
            <InputField
              name="FA2"
              h3="FA.2 : Respondent ID:"
              onChange={handleChangeWithValidation}
              value={formFA.FA2}
              placeholder="Type here"
              required
              //   error={errors.A1}
            />
            <Radio
              name="FA3"
              h3="FA.3 : Relationship of respondent with deceased:"
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
              byDefault={formFA.FA3}
              onClick={handleChange(setFormFA)}
              //   error={errors.A1}
            />
            <Radio
              name="FA4"
              h3="FA.4 : Did the respondent live with the deceased during the events that led to death?:"
              onClick={handleChange(setFormFA)}
              value={formFA.FA4}
              placeholder="Type here"
              // required
              CheckbobItems={["Yes", "No"]}
              byDefault={formFA.FA4}
              //   error={errors.A1}
            />
            <InputField
              name="FA5"
              h3="FA.5 : Respondent&#39;s age in completed years"
              onChange={handleChangeWithValidation}
              value={formFA.FA5}
              // regex={/^[A-Za-z ]+$/}
              placeholder="Type here"
              // regex={/^\d{10}$/}
              minLength={1}
              maxLength={3}
              max={120}
              required
              //   error={errors.A1}
            />
            <Radio
              name="FA6"
              h3="FA.6 : Repondent's sex:"
              onClick={handleChange(setFormFA)}
              CheckbobItems={["Male", "Female"]}
              byDefault={formFA.FA6}
              // required
            />
            <div className="button-container">
              <Buttons
                formName="formfa"
                formData={formFA}
                prevText=""
                nextText="Save & Next"
                prev=""
                next="/formFB"
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

export default FormFA;
