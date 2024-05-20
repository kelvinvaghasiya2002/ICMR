import React, { useState } from 'react'
import Checkbox from '../child-comp/Checkbox';
import SidePanel from '../child-comp/SidePanel';
import Buttons from '../child-comp/Buttons';
import Radio from '../child-comp/Radio';
import InputField from '../child-comp/InputField';

function FormG() {
  return (
    <section>
    <SidePanel id={"20"} />
    <div className="siteInfo">

      <div className="formhdr">
        <div>
          <h3>
          Finance          </h3>
        </div>
      </div>

      <div className="formcontent">

      <Radio h3="Whether any untied fund is available at your hospital?" CheckbobItems={["Yes","No"]} name="1G-1"/>

<Radio h3="If yes, whether this fund is utilized for providing emergency care services?" CheckbobItems={["Yes","No"]} name="1G-2"/>

<Radio h3="Whether any fund is available for emergency care?" CheckbobItems={["Yes","No"]} name="1G-3"/>

<InputField h3="If yes, which health schemes are covering your emergency care system?" placeholder="Type here" />

<InputField h3="Out of total patients being provided emergency care, how many were provided services under PMJAY scheme/ any other insurance scheme." placeholder="Type here" />

      <Buttons prev="/informationsystem" next="/leadershipandgovernance" />
      </div>
    </div>
  </section>
  )
}

export default FormG