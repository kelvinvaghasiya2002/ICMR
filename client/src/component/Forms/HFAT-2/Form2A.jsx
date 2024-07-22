import React, { useState, useEffect, useMemo } from 'react';
import SidePanel from './SidePanelHFAT2';
import Buttons from '../child-comp/Buttons';
import Radio from '../child-comp/Radio';
import InputField from '../child-comp/InputField';
import { handleChange, turnOffbutton } from '../helpers';
import setLocalStorage from '../setLocalStorage';
import Heading from '../../Heading/Heading.jsx';
import LocationButton from '../child-comp/Location.jsx';
import DropDown from "../child-comp/DropDown.jsx";
import { GJBRC_DH, MPBHS_DH, ORPUR_DH, PBLDH_DH, PYPDY_DH } from '../BlockItem/blockList.js';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Form2A() {
  turnOffbutton();
  const initialState = {
    H2A1: "",
    H2A2: "",
    H2A3: "",
    H2A4: "",
    H2A5: "",
    H2A6: "",
    H2A7: "",
    H2A8: "",
    H2A9: "",
    H2A10: "",
    H2A11: "",
    HFAT2_DATE: ""
  };
  const form2a = setLocalStorage("form2a", initialState);

  const [form2A, setForm2A] = useState(JSON.parse(form2a));
  const [errors, setErrors] = useState({});

  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  const date = new Date();

  useEffect(() => {
    setForm2A((prevValue) => ({
      ...prevValue,
      HFAT2_DATE: form2A.HFAT2_DATE === "" ? `${date.toDateString()}  ${date.getHours()}:${date.getMinutes()}` : form2A.HFAT2_DATE,
    }));
  }, [form2A.HFAT2_DATE]);

  const dropdownItems = useMemo(() => {
    switch (form2A.H2A2) {
      case "GJBRC_CHC":
        return GJBRC_DH;
      case "ORPUR_CHC":
        return ORPUR_DH;
      case "MPBHS_CHC":
        return MPBHS_DH;
      case "PBLDH_CHC":
        return PBLDH_DH;
      case "PYPDY_CHC":
        return PYPDY_DH;
      default:
        return [];
    }
  }, [form2A.H2A2]);

  const validateForm = () => {
    const newErrors = {};
    if (!form2A.H2A1) newErrors.H2A1 = "This field is required";
    if (!form2A.H2A2) newErrors.H2A2 = "This field is required";
    if (!form2A.H2A3) newErrors.H2A3 = "This field is required";
    if (!form2A.H2A4) newErrors.H2A4 = "This field is required";
    if (!form2A.H2A5) newErrors.H2A5 = "This field is required";
    if (!form2A.H2A6) newErrors.H2A6 = "This field is required";
    if (!form2A.H2A7) newErrors.H2A7 = "This field is required";
    if (!form2A.H2A8) newErrors.H2A8 = "This field is required";
    if (!form2A.H2A9) newErrors.H2A9 = "This field is required";
    if (!form2A.H2A10) newErrors.H2A10 = "This field is required";
    if (!form2A.H2A11) newErrors.H2A11 = "This field is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  return (
    <div>
      <Heading h2="Health Facility Assessment Tool 2: Community Health Centre"></Heading>
      <section>
        <SidePanel id={"1"} />
        <div className="siteInfo" data-aos="fade-left">
          <div className="formhdr">
            <div>
              <h3>2A. Facility Information</h3>
            </div>
          </div>

          <div className="formcontent">
            <InputField
              value={form2A.H2A1}
              onChange={handleChange(setForm2A)}
              h3="2A.1 : Assessor’s Name:"
              placeholder="Type here"
              name="H2A1"
              regex={/^[A-Za-z ]+$/}
              required
              errorMsg={errors.H2A1}
            />

            <div>
              <p className="datetime">
                Date : {form2A.HFAT2_DATE}
              </p>
            </div>

            <Radio
              h3="2A.2 : State :"
              CheckbobItems={[
                "GJBRC_CHC",
                "ORPUR_CHC",
                "MPBHS_CHC",
                "PBLDH_CHC",
                "PYPDY_CHC"
              ]}
              byDefault={form2A.H2A2}
              onClick={handleChange(setForm2A)}
              name="H2A2"
              required
              errorMsg={errors.H2A2}
            />

            <DropDown
              dropdownItems={dropdownItems}
              name="H2A3"
              h3="2A.3 : Block Name :"
              onClick={handleChange(setForm2A)}
              byDefault={form2A.H2A3}
              required
              errorMsg={errors.H2A3}
            />

            <InputField
              value={form2A.H2A4}
              onChange={handleChange(setForm2A)}
              h3="2A.4 : Healthcare Facility Name :"
              placeholder="Type here"
              name="H2A4"
              regex={/^[A-Za-z ]+$/}
              required
              errorMsg={errors.H2A4}
            />

            <InputField
              value={form2A.H2A5}
              onChange={handleChange(setForm2A)}
              h3="2A.5 : Healthcare Facility Address :"
              placeholder="Type here"
              regex={/^[A-Za-z0-9 _.-]+$/}
              name="H2A5"
              required
              errorMsg={errors.H2A5}
            />

            <InputField
              value={form2A.H2A6}
              onChange={handleChange(setForm2A)}
              h3="2A.6 : Name of the MOIC :"
              placeholder="Type here"
              name="H2A6"
              regex={/^[A-Za-z ]+$/}
              required
              errorMsg={errors.H2A6}
            />

            <InputField
              value={form2A.H2A7}
              onChange={handleChange(setForm2A)}
              h3="2A.7 : Contact Number of MOIC :"
              placeholder="Type here"
              regex={/^[0-9]{10,10}$/}
              maxLength={10}
              name="H2A7"
              required
              errorMsg={errors.H2A7}
            />

            <InputField
              value={form2A.H2A8}
              onChange={handleChange(setForm2A)}
              h3="2A.8 : Email ID :"
              placeholder="Type here"
              regex={/^\S+@\S+\.\S+$/}
              name="H2A8"
              required
              errorMsg={errors.H2A8}
            />

            <LocationButton
              setter={setForm2A}
              name="H2A9"
              heading="2A.9"
              required
              errorMsg={errors.H2A9}
            />

            <Radio
              byDefault={form2A.H2A10}
              onClick={handleChange(setForm2A)}
              h3="2A.10 : What type of CHC is this?"
              CheckbobItems={[
                "Non-FRU – CHC (30 beds)",
                "FRU – CHC (30 beds)",
                "FRU – CHC (50 beds)",
                "FRU – UCHC (50 beds)",
                "FRU – UCHC (100 beds)",
              ]}
              name="H2A10"
              required
              errorMsg={errors.H2A10}
            />

            <Radio
              byDefault={form2A.H2A11}
              onClick={handleChange(setForm2A)}
              h3="2A.11 : Type of locality:"
              CheckbobItems={["Urban", "Rural"]}
              name="H2A11"
              required
              errorMsg={errors.H2A11}
            />

            <Buttons
              formName="form2a"
              formData={form2A}
              prevText=""
              nextText="Save & Next"
              prev=""
              next="/infrastructure-2"
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

export default Form2A;
