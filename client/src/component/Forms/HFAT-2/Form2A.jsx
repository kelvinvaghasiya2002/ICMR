import React, { useState } from 'react'
import Checkbox from '../child-comp/Checkbox';
import SidePanel from './SidePanelHFAT2';
import Buttons from '../child-comp/Buttons';
import Radio from '../child-comp/Radio';
import InputField from '../child-comp/InputField';
import { turnOffbutton } from '../helpers';

function Form2A() {
  turnOffbutton();

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

          <InputField h3="Assessor’s Name: " placeholder="Type here" name="2A1" />

          <div>
            <p className='datetime'>Date : {date.toDateString()}  {date.getHours()}:{date.getMinutes()}</p>
          </div>

          <Radio h3="Code :" CheckbobItems={[
            "GJBRC_CHC_",
            "ORPUR_CHC_",
            "MPBHS_CHC_",
            "PBLDH_CHC_",
            "PYPDY_CHC_"
          ]} name="2A3" />

          <InputField h3="Block Name :" placeholder="Type here" name="2A4" />

          <InputField h3="Healthcare Facility Name :" placeholder="Type here" name="2A5" />

          <InputField h3="Healthcare Facility Address :" placeholder="Type here" name="2A6" />

          <InputField h3="Name of the MOIC :" placeholder="Type here" name="2A7" />

          <InputField h3="Contact Number of MOIC :" placeholder="Type here" name="2A8" />

          <InputField h3="Email ID :" placeholder="Type here" name="2A9" />

          <InputField h3="GPS Coordinates :" placeholder="Type here" name="2A10" />

          <Radio h3="What type of CHC is this?" CheckbobItems={["Non-FRU – CHC (30 beds)", "FRU – CHC (30 beds)", "FRU – CHC (50 beds)", "FRU – UCHC (50 beds)", "FRU – UCHC (100 beds)"]} name="2A11" />

          <Radio h3="Type of locality:" CheckbobItems={["Urban", "Rural"]} name="2A12" />


          <Buttons prev="" next="/infrastructure-2" />
        </div>
      </div>
    </section>
  )
}

export default Form2A