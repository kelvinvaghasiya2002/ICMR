import React, { useState } from 'react'
import SidePanel from './SidePanelHFAT2';
import Buttons from '../child-comp/Buttons';
import Radio from '../child-comp/Radio';
import InputField from '../child-comp/InputField';
import { handleChange, turnOffbutton } from '../helpers';
import setLocalStorage from '../setLocalStorage';

function Form2A() {
  turnOffbutton();
  var form2a = setLocalStorage("form2a",
  {H2A1:"",H2A2:"",H2A3:"",H2A4:"",H2A5:"",H2A6:"",H2A7:"",H2A8:"",H2A9:"",H2A10:"",H2A11 : ""})

 const [form2A, setForm2A] = useState(JSON.parse(form2a));
  const date = new Date();
  return (
    <section>
      <SidePanel id={"1"} />
      <div className="siteInfo">

        <div className="formhdr">
          <div>
            <h3>
              Facility Information
            </h3>
          </div>
        </div>

        <div className="formcontent">

          <InputField value={form2A.H2A1} onChange={handleChange(setForm2A)} h3="Assessor’s Name: " placeholder="Type here" name="H2A1" />

          <div>
            <p className='datetime'>Date : {date.toDateString()}  {date.getHours()}:{date.getMinutes()}</p>
          </div>

          <Radio h3="Code :" CheckbobItems={[
            "GJBRC_CHC_",
            "ORPUR_CHC_",
            "MPBHS_CHC_",
            "PBLDH_CHC_",
            "PYPDY_CHC_"
          ]} byDefault={form2A.H2A2} onClick={handleChange(setForm2A)} name="H2A2" />

          <InputField name="H2A3" value={form2A.H2A3} onChange={handleChange(setForm2A)}  h3="Block Name :" placeholder="Type here"  />

          <InputField value={form2A.H2A4} onChange={handleChange(setForm2A)}  h3="Healthcare Facility Name :" placeholder="Type here" name="H2A4" />

          <InputField value={form2A.H2A5} onChange={handleChange(setForm2A)} h3="Healthcare Facility Address :" placeholder="Type here" name="H2A5" />

          <InputField value={form2A.H2A6} onChange={handleChange(setForm2A)} h3="Name of the MOIC :" placeholder="Type here" name="H2A6" />

          <InputField value={form2A.H2A7} onChange={handleChange(setForm2A)} h3="Contact Number of MOIC :" placeholder="Type here" name="H2A7" />

          <InputField value={form2A.H2A8} onChange={handleChange(setForm2A)} h3="Email ID :" placeholder="Type here" name="H2A8" />

          <InputField value={form2A.H2A9} onChange={handleChange(setForm2A)} h3="GPS Coordinates :" placeholder="Type here" name="H2A9" />

          <Radio byDefault={form2A.H2A10} onClick={handleChange(setForm2A)} h3="What type of CHC is this?" CheckbobItems={["Non-FRU – CHC (30 beds)", "FRU – CHC (30 beds)", "FRU – CHC (50 beds)", "FRU – UCHC (50 beds)", "FRU – UCHC (100 beds)"]} name="H2A10" />

          <Radio byDefault={form2A.H2A11} onClick={handleChange(setForm2A)} h3="Type of locality:" CheckbobItems={["Urban", "Rural"]} name="H2A11" />


          <Buttons formName="form2a" formData={form2A} prev="" next="/infrastructure-2" />
        </div>
      </div>
    </section>
  )
}

export default Form2A