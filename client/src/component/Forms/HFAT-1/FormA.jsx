import React, { useMemo, useState, useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Checkbox from '../child-comp/Checkbox';
import SidePanel from './SidePanelHFAT1';
import Buttons from '../child-comp/Buttons';
import Radio from '../child-comp/Radio';
import InputField from '../child-comp/InputField';
import { handleChange, turnOffbutton } from '../helpers';
import setLocalStorage from '../setLocalStorage';
import Heading from '../../Heading/Heading';
import DropDown from "../child-comp/DropDown.jsx"
import { GJBRC_DH_00000, MPBHS_DH_22222, ORPUR_DH_11111, PBLDH_DH_33333, PYPDY_DH_44444 } from '../BlockItem/blockList.js';
import LocationButton from '../child-comp/Location.jsx';

function FormA() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  turnOffbutton();
  var forma = setLocalStorage("forma", { A1: "", A2: "", A3: "", A4: "", A5: "", A6: "", A7: "", A8: "", A9: "", A10: "", A11: "", A12: "" });
  const [formA, setFormA] = useState(JSON.parse(forma));
  const [errors, setErrors] = useState({});

  const date = new Date();

  const dropdownItems = useMemo(() => {
    switch (formA.A3) {
      case "GJBRC_DH_00000":
        return GJBRC_DH_00000;
      case "ORPUR_DH_11111":
        return ORPUR_DH_11111;
      case "MPBHS_DH_22222":
        return MPBHS_DH_22222;
      case "PBLDH_DH_33333":
        return PBLDH_DH_33333;
      case "PYPDY_DH_44444":
        return PYPDY_DH_44444;
      default:
        return [];
    }
  }, [formA.A3]);

  const validateForm = () => {
    const newErrors = {};
    if (!formA.A1) newErrors.A1 = 'Assessor’s Name is required';
    if (!formA.A5) newErrors.A5 = 'Healthcare Facility Name is required';
    if (!formA.A6) newErrors.A6 = 'Healthcare Facility Address is required';
    if (!formA.A7) newErrors.A7 = 'Name of the hospital Superintendent is required';
    if (!formA.A8) newErrors.A8 = 'Contact Number of the hospital Superintendent is required';
    if (!formA.A9) newErrors.A9 = 'Email ID is required';
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
              h3="1A.1 : Assessor’s Name: " 
              onChange={handleChange(setFormA)} 
              value={formA.A1} 
              placeholder="Type here" 
              required 
              error={errors.A1}
            />
            <div>
              <p className='datetime'>1A.2: Date & Time : <span className='datetime_current'>{date.toDateString()}  {date.getHours()}:{date.getMinutes()}</span></p>
            </div>
            <Radio h3="1A.3 : Code :" onClick={handleChange(setFormA)} byDefault={formA.A3} CheckbobItems={["GJBRC_DH_00000", "ORPUR_DH_11111", "MPBHS_DH_22222", "PBLDH_DH_33333", "PYPDY_DH_44444"]} name="A3" />
            <DropDown
              name="A4" h3="1A.4 : Block Name:"
              byDefault={formA.A4}
              onClick={handleChange(setFormA)}
              dropdownItems={dropdownItems}
            />
            <InputField 
              name="A5" 
              value={formA.A5} 
              onChange={handleChange(setFormA)} 
              h3="1A.5 : Healthcare Facility Name:  " 
              placeholder="Type here" 
              required 
              error={errors.A5}
            />
            <InputField 
              name="A6" 
              value={formA.A6} 
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
              regex={/^[0-9]{10}$/}
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
            <LocationButton />
            <Radio h3="1A.11 : Type of Health Care Facility?" CheckbobItems={["District Hospital (DH)", "Tertiary care center"]} name="A11" onClick={handleChange(setFormA)} byDefault={formA.A11} />
            <Radio style={{ display: "flex", flexDirection: "column" }} h3="1A.12 : If Tertiary care center, select the appropriate one." onClick={handleChange(setFormA)} CheckbobItems={["Public: ESI Hospital/ Railway Hospital/Trust Hospital/ Medical College", "Semi govt. hospital", "Private: Medical College/ Corporate hospital/NGO Hospital"]} name="A12" byDefault={formA.A12} />
            <Buttons formName="forma" formData={formA} prevText="" nextText="Save & Next" prev="" next="/infrastructure" validateForm={validateForm} />
          </div>
        </div>
      </section>
    </div>
  )
}

export default FormA;
