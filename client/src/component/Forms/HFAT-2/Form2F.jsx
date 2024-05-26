import React, { useState } from 'react'
import Checkbox from '../child-comp/Checkbox';
import SidePanel from './SidePanelHFAT2';
import Buttons from '../child-comp/Buttons';
import Radio from '../child-comp/Radio';
import InputField from '../child-comp/InputField';
import { turnOffbutton } from '../helpers';
import RadioButtonOtherSpecify from '../child-comp/RadioButtonOtherSpecify';

function Form2F() {
  turnOffbutton();
  return (
    <section>
      <SidePanel id={"6"} />
      <div className="siteInfo">

        <div className="formhdr">
          <div>
            <h3>
              Information System
            </h3>
          </div>
        </div>

        <div className="formcontent">
          <Radio h3="Does the facility have a Hospital Management Information System (HMIS)" CheckbobItems={["Yes", "No"]} name="2F1" />

          <Radio h3="Does this facility do complete reporting of indicators on emergency care in HMIS?" CheckbobItems={["Yes", "No"]} name="2F2" />

          <InputField h3="How many personnel are available for managing information system?" placeholder="Type here" name="2F3" />

          <Radio h3="What key indicators are generated from the emergency management information system?" CheckbobItems={["Numbers by type of emergencies", "Length of hospital stay", "Turnaround time", "Disposal time", "Number of deaths", "Number of Referrals"]} name="2F4" />

          <Radio h3="Whether time bound management of common emergencies is captured in MIS." CheckbobItems={["Yes", "No"]} name="2F5" />

          <Radio h3="Which of the following alert systems does your facility have?" CheckbobItems={["Code blue alert system.", "NSTEMI alert system", "Stroke alert system.", "Trauma alert system"]} name="2F6" />

          <Radio h3="Whether Medical Officer In charge (MO/IC) uses or reviews the data for quality improvement" CheckbobItems={["Yes", "No"]} name="2F7" />


      <RadioButtonOtherSpecify h3="Do you get Pre-Hospital Notification during an emergency?" CheckboxItems={["No","Yes (How often per week)"]}  />


          <Radio h3="Infrastructure for receiving internal communication?" CheckbobItems={["Yes", "No"]} name="2F9" />

          <Buttons prev="/emergencycareservices-2" next="/finance-2" />
        </div>
      </div>
    </section>
  )
}

export default Form2F