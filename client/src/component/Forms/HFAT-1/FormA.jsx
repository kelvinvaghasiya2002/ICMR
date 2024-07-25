import React, { useMemo, useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import SidePanel from './SidePanelHFAT1';
import Buttons from '../child-comp/Buttons';
import Radio from '../child-comp/Radio';
import InputField from '../child-comp/InputField';
import { handleChange, turnOffbutton } from '../helpers';
import setLocalStorage from '../setLocalStorage';
import Heading from '../../Heading/Heading';
import DropDown from "../child-comp/DropDown.jsx";
import { GJBRC_DH, MPBHS_DH, ORPUR_DH, PBLDH_DH, PYPDY_DH } from '../BlockItem/blockList.js';
import LocationButton from '../child-comp/Location.jsx';

function FormA() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  turnOffbutton();
  var forma = setLocalStorage("forma", {
    A1: "",
    A2: "",
    A3: "",
    A4: "",
    A5: "",
    A6: "",
    A7: "",
    A8: "",
    A9: "",
    A10: {},
    A11: "",
    A12: "",
  });
  const [formA, setFormA] = useState(JSON.parse(forma));
  const [errors, setErrors] = useState({});

  const date = new Date();

  useEffect(() => {
    setFormA((prevValue) => {
      return {
        ...prevValue,
        A2: (formA.A2 === "") ? `${date.toDateString()}  ${date.getHours()}:${date.getMinutes()}` : formA.A2,
      };
    });
  }, []);

  useEffect(() => {
    if (formA.A11 === "District Hospital (DH)") {
      setFormA((prevValue) => {
        return {
          ...prevValue,
          A12: ""
        };
      });
    }
  }, [formA.A11]);

  const dropdownItems = useMemo(() => {
    switch (formA.A3) {
      case "GJBRC_DH":
        return GJBRC_DH;
      case "ORPUR_DH":
        return ORPUR_DH;
      case "MPBHS_DH":
        return MPBHS_DH;
      case "PBLDH_DH":
        return PBLDH_DH;
      case "PYPDY_DH":
        return PYPDY_DH;
      default:
        return [];
    }
  }, [formA.A3]);

  const validateForm = () => {
    const newErrors = {};
    if (!formA.A1) newErrors.A1 = "Assessor's Name is required";
    if (!formA.A4) newErrors.A4 = "Block Name is required";
    if (!formA.A5) newErrors.A5 = 'Healthcare Facility Name is required';
    if (!formA.A6) newErrors.A6 = 'Healthcare Facility Address is required';
    if (!formA.A7) newErrors.A7 = 'Name of the hospital Superintendent is required';
    if (!formA.A8) newErrors.A8 = 'Contact Number of the hospital Superintendent is required';
    if (!formA.A9) newErrors.A9 = 'Email ID is required';
    if (formA.A10 == {}) newErrors.A10 = "Location is required";
    
    // Validate radio buttons
    if (!formA.A3) newErrors.A3 = 'Code is required';
    if (!formA.A11) newErrors.A11 = 'Type of Health Care Facility is required';
    if (formA.A11 === "Tertiary care center" && !formA.A12) newErrors.A12 = 'Appropriate tertiary care center is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  return (
    <div>
      <Heading h2="Health Facility Assessment Tool 1: District Hospital/Tertiary Care (Public or Private)"></Heading>
      <section>
        <SidePanel id={"1"} />
        <div className="siteInfo" data-aos="fade-left">
          <div className="formhdr">
            <div>
              <h3>1A. Health Facility Information</h3>
            </div>
          </div>
          <div className="formcontent">
            <InputField
              name="A1"
              h3="1A.1 : Assessor's Name: "
              onChange={handleChange(setFormA)}
              value={formA.A1}
              regex={/^[A-Za-z ]+$/}
              placeholder="Type here"
              required
              error={errors.A1}
            />

            <div>
              <p className="datetime">
                1A.2 : Date & Time :{" "}
                <span className="datetime_current">{formA.A2}</span>
              </p>
            </div>

            <Radio
              h3="1A.3 : Code :"
              onClick={handleChange(setFormA)}
              byDefault={formA.A3}
              CheckbobItems={["GJBRC_DH", "ORPUR_DH", "MPBHS_DH", "PBLDH_DH", "PYPDY_DH"]}
              name="A3"
              required
              errorMsg={errors.A3}
            />

            <DropDown
              name="A4"
              h3="1A.4 : Block Name:"
              byDefault={formA.A4}
              onClick={handleChange(setFormA)}
              dropdownItems={dropdownItems}
              error={errors.A4}
            />

            <InputField
              name="A5"
              value={formA.A5}
              regex={/^[A-Za-z ]+$/}
              onChange={handleChange(setFormA)}
              h3="1A.5 : Healthcare Facility Name:  "
              placeholder="Type here"
              required
              error={errors.A5}
            />
            <InputField
              name="A6"
              value={formA.A6}
              regex={/^[A-Za-z0-9_.-]+$/}
              onChange={handleChange(setFormA)}
              h3="1A.6 : Healthcare Facility Address:  "
              placeholder="Type here"
              required
              error={errors.A6}
            />
            <InputField
              name="A7"
              value={formA.A7}
              onChange={handleChange(setFormA)}
              h3="1A.7 : Name of the hospital Superintendent:"
              placeholder="Type here"
              required
              error={errors.A7}
            />
            <InputField
              name="A8"
              value={formA.A8}
              onChange={handleChange(setFormA)}
              h3="1A.8 : Contact Number of the hospital Superintendent:"
              placeholder="Type here"
              required
              regex={/^[0-9]{10,10}$/}
              maxLength={10}
              errorMsg="Contact number must be 10 digits"
              error={errors.A8}
            />
            <InputField
              name="A9"
              value={formA.A9}
              onChange={handleChange(setFormA)}
              h3="1A.9 : Email ID:"
              placeholder="Type here"
              required
              regex={/^\S+@\S+\.\S+$/}
              errorMsg="Invalid email format"
              error={errors.A9}
            />

            <LocationButton
              setter={setFormA}
              name={"A10"}
              heading={"1A.10"}
              error={errors.A10}
            />

            <Radio
              h3="1A.11 : Type of Health Care Facility?"
              CheckbobItems={["District Hospital (DH)", "Tertiary care center"]}
              name="A11"
              onClick={handleChange(setFormA)}
              byDefault={formA.A11}
            />

            {formA.A11 === "Tertiary care center" && (
              <Radio
                style={{ display: "flex", flexDirection: "column" }}
                h3="1A.12 : If Tertiary care center, select the appropriate one."
                onClick={handleChange(setFormA)}
                CheckbobItems={[
                  "Public: ESI Hospital/ Railway Hospital/Trust Hospital/ Medical College",
                  "Semi govt. hospital",
                  "Private: Medical College/ Corporate hospital/NGO Hospital",
                ]}
                name="A12"
                byDefault={formA.A12}
              />
            )}

            <Buttons
              formName="forma"
              formData={formA}
              prevText=""
              nextText="Save & Next"
              prev=""
              next="/infrastructure"
              validateForm={validateForm}
            />
            {Object.keys(errors).length > 0 && (
              <div className="error-msg">
                Please fill out all required fields before proceeding.
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

export default FormA;
