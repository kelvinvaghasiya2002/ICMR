import React, { useState } from 'react'
import Checkbox from '../child-comp/Checkbox';
import SidePanel from './SidePanelHFAT1';
import Buttons from '../child-comp/Buttons';
import Radio from '../child-comp/Radio';
import InputField from '../child-comp/InputField';

function FormA() {

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
          <InputField name="A1" h3="Assessor’s Name: " placeholder="Type here" />
          <div>
            <p className='datetime'>Date & Time : {date.toDateString()}  {date.getHours()}:{date.getMinutes()}</p>
          </div>
          <Radio h3="Site :" CheckbobItems={["GJBRC_CS_", "ORPUR_CS_", "MPBHS_CS_", "PBLDH_CS_", "PYPDY_CS_"]} name="A3" />
          <InputField name="A4" h3="Block Name:" placeholder="Type here" />
          <InputField name="A5" h3="Healthcare Facility Address:  " placeholder="Type here" />
          <InputField name="A6" h3="Name of the hospital Superintendent:" placeholder="Type here" />
          <InputField name="A7" h3="Contact Number of the hospital Superintendent:" placeholder="Type here" />
          <InputField name="A8" h3="Email ID:" placeholder="Type here" />
          <InputField name="A9" h3="GPS Coordinates:" placeholder="Type here" />
          <Checkbox h3="Type of Health Care Facility?" CheckbobItems={["District Hospital (DH))","Tertiary care center"]} name="A10" />
          <Checkbox h3="If Tertiary care center, select the appropriate one." CheckbobItems={["Public: ESI Hospital/ Railway Hospital/Trust Hospital/ Medical College","Semi govt. hospital","Private: Medical College/ Corporate hospital/NGO Hospital"]} name="A10" />
          <Buttons prev="" next="/infrastructure" />
        </div>
      </div>
    </section>
  )
}

export default FormA