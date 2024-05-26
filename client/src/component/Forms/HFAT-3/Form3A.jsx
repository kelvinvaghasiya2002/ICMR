import React, { useState } from 'react'
import Checkbox from '../child-comp/Checkbox';
import SidePanel from './SidePanelHFAT3';
import Buttons from '../child-comp/Buttons';
import Radio from '../child-comp/Radio';
import InputField from '../child-comp/InputField';
import { handleChange, turnOffbutton } from '../helpers';
import setLocalStorage from '../setLocalStorage';
function Form3A() {

  turnOffbutton();

  var form3a = setLocalStorage("form3a",
   {H3A1:"",H3A2:"",H3A3:"",H3A4:"",H3A5:"",H3A6:"",H3A7:"",H3A8:"",H3A9:"",H3A10:"",H3A11 : ""})

  const [form3A, setForm3A] = useState(JSON.parse(form3a));

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

          <InputField value={Form3A.H3A1} onChange={handleChange(setForm3A)} name="H3A1" h3="Assessor’s Name: " placeholder="Type here" />

          <div>
            <p className='datetime'>Date : {date.toDateString()}  {date.getHours()}:{date.getMinutes()}</p>
          </div>

          <Radio byDefault={form3A.H3A2}  onClick={handleChange(setForm3A)} name="H3A2" h3="Code :" CheckbobItems={["GJBRC_CS_", "ORPUR_CS_", "MPBHS_CS_", "PBLDH_CS_", "PYPDY_CS_"]} />

          <InputField value={Form3A.H3A3} onChange={handleChange(setForm3A)} name="H3A3" h3="Block Name :" placeholder="Type here" />

          <InputField value={Form3A.H3A4} onChange={handleChange(setForm3A)} name="H3A4" h3="Healthcare Facility Name :" placeholder="Type here" />

          <InputField value={Form3A.H3A5} onChange={handleChange(setForm3A)} name="H3A5" h3="Healthcare Facility Address :" placeholder="Type here" />

          <InputField value={Form3A.H3A6} onChange={handleChange(setForm3A)} name="H3A6" h3="Name of the MOIC :" placeholder="Type here" />

          <InputField value={Form3A.H3A7} onChange={handleChange(setForm3A)} name="H3A7" h3="Contact Number of MOIC :" placeholder="Type here" />

          <InputField value={Form3A.H3A8} onChange={handleChange(setForm3A)} name="H3A8" h3="Email ID :" placeholder="Type here" />

          <InputField value={Form3A.H3A9} onChange={handleChange(setForm3A)} name="H3A9" h3="GPS Coordinates :" placeholder="Type here" />

          <Radio byDefault={form3A.H3A10} onClick={handleChange(setForm3A)} name="H3A10" h3="What type of CHC is this?" CheckbobItems={["Non-FRU – CHC (30 beds)", "FRU – CHC (30 beds)", "FRU – CHC (50 beds)", "FRU – UCHC (50 beds)", "FRU – UCHC (100 beds)"]} />

          <Radio byDefault={form3A.H3A11} onClick={handleChange(setForm3A)} name="H3A11" h3="Type of locality:" CheckbobItems={["Urban", "Rural"]} />


          <Buttons formName="form3a" formData={form3A} prev="" next="/infrastructure-3" />
        </div>
      </div>
    </section>
  )
}

export default Form3A