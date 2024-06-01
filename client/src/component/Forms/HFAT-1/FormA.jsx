import React, { useState } from 'react'
import Checkbox from '../child-comp/Checkbox';
import SidePanel from './SidePanelHFAT1';
import Buttons from '../child-comp/Buttons';
import Radio from '../child-comp/Radio';
import InputField from '../child-comp/InputField';
import { handleChange, turnOffbutton } from '../helpers';
import setLocalStorage from '../setLocalStorage';

function FormA() {
  turnOffbutton();
  var forma = setLocalStorage("forma", {A1:"",A2:"",A3:"",A4:"",A5:"",A6:"",A7:"",A8:"",A9:"",A10:"",A11 : [] ,A12:""})
  const [formA, setFormA] = useState(JSON.parse(forma))
  
  console.log(formA);

  const date = new Date();

  return (
    <section>
      <SidePanel id={"1"} />
      <div className="siteInfo">

        <div className="formhdr">
          <div>
            <h3>
              Health Facility Information
            </h3>
          </div>
        </div>

        <div className="formcontent">
          <InputField name="A1" h3="Assessor’s Name: "  onChange={handleChange(setFormA)} value={formA.A1} placeholder="Type here" />

          <div>
            <p className='datetime'>Date & Time : {date.toDateString()}  {date.getHours()}:{date.getMinutes()}</p>
          </div>

          <Radio h3="Site :"  onClick={handleChange(setFormA)} byDefault={formA.A3} CheckbobItems={["GJBRC_DH_00000", "ORPUR_DH_11111", "MPBHS_DH_22222", "PBLDH_DH_33333", "PYPDY_DH_44444"]} name="A3" />

          <InputField name="A4" value={formA.A4} onChange={handleChange(setFormA)} h3="Block Name:" placeholder="Type here" />

          <InputField name="A5" value={formA.A5} onChange={handleChange(setFormA)} h3="Healthcare Facility Name:  " placeholder="Type here" />

          <InputField name="A6" value={formA.A6} onChange={handleChange(setFormA)} h3="Healthcare Facility Address:  " placeholder="Type here" />

          <InputField name="A7" value={formA.A7} onChange={handleChange(setFormA)} h3="Name of the hospital Superintendent:" placeholder="Type here" />

          <InputField name="A8" value={formA.A8} onChange={handleChange(setFormA)} h3="Contact Number of the hospital Superintendent:" placeholder="Type here" />

          <InputField name="A9" value={formA.A9} onChange={handleChange(setFormA)} h3="Email ID:" placeholder="Type here" />

          <InputField name="A10" value={formA.A10} onChange={handleChange(setFormA)} h3="GPS Coordinates:" placeholder="Type here" />

          <Checkbox h3="Type of Health Care Facility?" CheckbobItems={["District Hospital (DH))", "Tertiary care center"]} name="A11" setFunction={setFormA} array={formA.A11} StateValue={formA}  />

          <Radio h3="If Tertiary care center, select the appropriate one." onClick={handleChange(setFormA)} CheckbobItems={["Public: ESI Hospital/ Railway Hospital/Trust Hospital/ Medical College", "Semi govt. hospital", "Private: Medical College/ Corporate hospital/NGO Hospital"]} name="A12" byDefault={formA.A12} />

          <Buttons formName="forma" formData={formA} prev="" next="/infrastructure" />
        </div>
      </div>
    </section>
  )
}

export default FormA