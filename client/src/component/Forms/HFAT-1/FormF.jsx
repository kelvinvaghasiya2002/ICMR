import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Checkbox from '../child-comp/Checkbox';
import SidePanel from './SidePanelHFAT1';
import Buttons from '../child-comp/Buttons';
import Radio from '../child-comp/Radio';
import InputField from '../child-comp/InputField';
import { handleChange, turnOffbutton } from '../helpers';
import setLocalStorage from '../setLocalStorage';
import Heading from '../../Heading/Heading';

function FormF() {
  var formf = setLocalStorage("formf",
    { H1F1: "", H1F2: "", H1F3: "", H1F4: [], H1F5: "", H1F6: [], H1F7: "", H1F8: "", H1F9: "" });

  const [formF, setFormF] = useState(JSON.parse(formf));
  const [formError, setFormError] = useState("");

  useEffect(() => {
    if (formF.H1F5 === "No") {
      setFormF((prevValue) => ({
        ...prevValue,
        H1F6: []
      }));
    }

    if (formF.H1F1 === "No") {
      setFormF((prevValue) => ({
        ...prevValue,
        H1F2: "",
        H1F7: ""
      }));
    }
  }, [formF.H1F5, formF.H1F1]);

  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  turnOffbutton();

  const validateForm = () => {
    let error = "";

    if (!formF.H1F1) {
      error = "1F.1 is required";
    } else if (formF.H1F1 === "Yes" && !formF.H1F2) {
      error = "1F.2 is required";
    } else if (!formF.H1F3) {
      error = "1F.3 is required";
    } else if (formF.H1F4.filter(item => item !== "").length === 0) {
      error = "Select at least one key indicator in section 1F.4";
    } else if (!formF.H1F5) {
      error = "1F.5 is required";
    } else if (formF.H1F5 === "Yes" && formF.H1F6.filter(item => item !== "").length === 0) {
      error = "Select at least one time bound management option in section 1F.6";
    } else if (formF.H1F1 === "Yes" && !formF.H1F7) {
      error = "1F.7 is required";
    } else if (!formF.H1F8) {
      error = "1F.8 is required";
    } else if (!formF.H1F9) {
      error = "1F.9 is required";
    }

    setFormError(error);
    return !error;
  };

  const handleNext = () => {
    if (validateForm()) {
      // Proceed to next page logic here
      console.log("Form is valid, proceed to next page");
      // Implement navigation logic here
    } else {
      // Display errors or prevent navigation
      console.error("Form validation failed");
      // Optionally, display errors to the user
    }
  };

  return (
    <div>
      <Heading h2="Health Facility Assessment Tool 1: District Hospital/Tertiary Care (Public or Private)" />
      <section>
        <SidePanel id={"6"} />
        <div className="siteInfo" data-aos="fade-left">
          <div className="formhdr">
            <div>
              <h3>
                1F. Information System
              </h3>
            </div>
          </div>

          <div className="formcontent">
            <Radio
              byDefault={formF.H1F1}
              onClick={handleChange(setFormF)}
              name="H1F1"
              h3="1F.1 : Does the facility have a Hospital Management Information System (HMIS)"
              CheckbobItems={["Yes", "No"]}
            />

            {formF.H1F1 === "Yes" && (
              <Radio
                byDefault={formF.H1F2}
                onClick={handleChange(setFormF)}
                name="H1F2"
                h3="1F.2 : Does this facility do complete reporting of indicators on emergency care in HMIS?"
                CheckbobItems={["Yes", "No"]}
              />
            )}

            <InputField
              value={formF.H1F3}
              onChange={handleChange(setFormF)}
              name="H1F3"
              h3="1F.3 : How many personnel are available for managing information system?"
              placeholder="Type here"
              type='number'
              required={true}
            />

            <Checkbox
              name="H1F4"
              h3="1F.4 : What key indicators are generated from the emergency management information system?"
              CheckbobItems={["Numbers by type of emergencieses", "Length of hospital stay", "Turnaround time", "Disposal time", "Number of deaths", "Number of Referrals (in-house referrals and to other hospitals)"]}
              StateValue={formF}
              setFunction={setFormF}
              array={formF.H1F4}
            />

            <Radio
              byDefault={formF.H1F5}
              onClick={handleChange(setFormF)}
              name="H1F5"
              h3="1F.5 : Whether time bound management of common emergencies is captured in MIS. For example, Door to CT/ECG time, Door to needle time, Time to activate emergency alert team."
              CheckbobItems={["Yes", "No"]}
            />

            {formF.H1F5 === "Yes" && (
              <Checkbox
                setFunction={setFormF}
                StateValue={formF}
                array={formF.H1F6}
                name="H1F6"
                h3="1F.6 : If yes, select all that apply and provide their value"
                CheckbobItems={["Door to CT/ECG time:-  ", "Door to needle time:- ", "Time to activate emergency alert team:- "]}
                time={true}
              />
            )}

            {formF.H1F1 === "Yes" && (
              <Radio
                byDefault={formF.H1F7}
                onClick={handleChange(setFormF)}
                name="H1F7"
                h3="1F.7 : Whether hospital administrators/ Medical Superintendent uses or reviews the data for quality improvement"
                CheckbobItems={["Yes", "No"]}
              />
            )}

            <Radio
              byDefault={formF.H1F8}
              onClick={handleChange(setFormF)}
              name="H1F8"
              h3="1F.8 : Do you get Pre-Hospital Notification during an emergency?"
              CheckbobItems={["Yes", "No"]}
            />

            <Radio
              byDefault={formF.H1F9}
              onClick={handleChange(setFormF)}
              name="H1F9"
              h3="1F.9 : Infrastructure for receiving internal communication?"
              CheckbobItems={["Yes", "No"]}
            />

            {formError && <p className="error-msg">{formError}</p>}

            <Buttons
              formName="formf"
              formData={formF}
              prevText="Previous"
              nextText="Save & Next"
              prev="/emergencycareservices"
              next="/finance"
              onClick={handleNext}
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default FormF;
