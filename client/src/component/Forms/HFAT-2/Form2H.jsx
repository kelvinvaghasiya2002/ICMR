import React, { useState } from 'react'
import Checkbox from '../child-comp/Checkbox';
import SidePanel from './SidePanelHFAT2';
import Buttons from '../child-comp/Buttons';
import Radio from '../child-comp/Radio';
import InputField from '../child-comp/InputField';
import { turnOffbutton } from '../helpers';


function Form2H() {
  turnOffbutton();
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

          <h3 style={{ color: "#3177FF" }}>Disaster management plan :</h3>

          <Radio h3="Do you have any disaster management plan?" CheckbobItems={["Yes", "No"]} name="2H1" />

          <Radio h3="Do you have a redistribution plan?" CheckbobItems={["Yes", "No"]} name="2H2" />

          <Radio h3="Do you have any evacuation plan?" CheckbobItems={["Yes", "No"]} name="2H3" />

          <h3 style={{ color: "#3177FF" }}>Quality Improvement Plan :</h3>

          <Radio h3="Do you have a Quality Improvement Committee? (if yes, collect detail of Committee)" CheckbobItems={["Yes", "No"]} name="2H4" />
          {/* if yes show textbox */}
          <InputField h3="How frequently does this committee meet in a year?" placeholder="Type here" name="2H5" />

          <Radio h3="Do you have regular audits related to emergency care in hospital?" CheckbobItems={["Yes", "No"]} name="2H6" />

          <InputField h3="How frequently audits are conducted in a year?" placeholder="Type here" name="2H7" />

          <Checkbox h3="Types of audits conducted?" CheckbobItems={["Mortality audit", "Morbidity Audit"]} other={true} name="2H8" />

          <InputField h3="Any action being taken on Audit report in the last one year?" placeholder="Type here" name="2H9" />
          <Buttons prev="/finance-2" next="/processpoliciessops-2" />
        </div>
      </div>
    </section>
  )
}

export default Form2H