import React, { useState } from 'react'
import Checkbox from '../child-comp/Checkbox';
import SidePanel from './SidePanelHFAT3';
import Buttons from '../child-comp/Buttons';
import Radio from '../child-comp/Radio';
import InputField from '../child-comp/InputField';
import { turnOffbutton } from '../helpers';

function Form3A() {

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

          <InputField h3="Assessor’s Name: " placeholder="Type here" />

          <div>
            <p className='datetime'>Date : {date.toDateString()}  {date.getHours()}:{date.getMinutes()}</p>
          </div>

          <Radio h3="Code :" CheckbobItems={["GJBRC_CS_", "ORPUR_CS_", "MPBHS_CS_", "PBLDH_CS_", "PYPDY_CS_"]} />

          <InputField h3="Block Name :" placeholder="Type here" />

          <InputField h3="Healthcare Facility Name :" placeholder="Type here" />

          <InputField h3="Healthcare Facility Address :" placeholder="Type here" />

          <InputField h3="Name of the MOIC :" placeholder="Type here" />

          <InputField h3="Contact Number of MOIC :" placeholder="Type here" />

          <InputField h3="Email ID :" placeholder="Type here" />

          <InputField h3="GPS Coordinates :" placeholder="Type here" />

          <Radio h3="What type of CHC is this?" CheckbobItems={["Non-FRU – CHC (30 beds)", "FRU – CHC (30 beds)", "FRU – CHC (50 beds)", "FRU – UCHC (50 beds)", "FRU – UCHC (100 beds)"]} />

          <Radio h3="Type of locality:" CheckbobItems={["Urban", "Rural"]} />


          <Buttons prev="" next="/infrastructure-3" />
        </div>
      </div>
    </section>
  )
}

export default Form3A