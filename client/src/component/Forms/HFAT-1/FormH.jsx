import React, { useState } from 'react'
import Checkbox from '../child-comp/Checkbox';
import SidePanel from './SidePanelHFAT1';
import Buttons from '../child-comp/Buttons';
import Radio from '../child-comp/Radio';
import InputField from '../child-comp/InputField';

function FormH() {
  return (
    <section>
    <SidePanel id={"8"} />
    <div className="siteInfo">

      <div className="formhdr">
        <div>
          <h3>
          Leadership and Governance
          </h3>
        </div>
      </div>

      <div className="formcontent">

        <h3 style={{color:"#3177FF"}}>Disaster management plan :</h3>

        <Radio h3="Do you have any disaster management plan?" CheckbobItems={["Yes","No"]} name="1H-1-1"/>

        <Radio h3="Do you have a redistribution plan?" CheckbobItems={["Yes","No"]} name="1H-1-2"/>

        <Radio h3="Do you have any evacuation plan?" CheckbobItems={["Yes","No"]} name="1H-1-3"/>

        <h3 style={{color:"#3177FF"}}>Quality Improvement Plan :</h3>


        <Radio h3="Do you have a Quality Improvement Committee? (if yes, collect detail of Committee)" CheckbobItems={["Yes","No"]} name="1H-2-1"/>

        <InputField h3="How frequently does this committee meet in a year?" placeholder="Type here" />


        <Radio h3="Do you have regular audits related to emergency care in hospital?" CheckbobItems={["Yes","No"]} name="1H-2-3"/>

        <InputField h3="How frequently audits are conducted in a year?" placeholder="Type here" />


        <Checkbox h3="Types of audits conducted?" CheckbobItems={["Mortality audit","Morbidity Audit","Others (Specify)_______________"]} name="1H-2-5"/>


        <InputField h3="Any action being taken on Audit report in the last one year?" placeholder="Type here" />

      <Buttons prev="/finance" next="/processpoliciessops" />
      </div>
    </div>
  </section>
  )
}

export default FormH