import React, { useState } from 'react'
import Checkbox from '../child-comp/Checkbox';
import SidePanel from './SidePanelHFAT3';
import Buttons from '../child-comp/Buttons';
import Radio from '../child-comp/Radio';
import InputField from '../child-comp/InputField';
import { turnOffbutton } from '../helpers';
import RadioButtonOtherSpecify from '../child-comp/RadioButtonOtherSpecify';

function Form3F() {
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

      <Radio h3="Does the facility have a Hospital   Management Information System (HMIS)" CheckbobItems={["Yes", "No"]}  />

      <Radio h3="Does this facility do complete   reporting of indicators on emergency care in HMIS?" CheckbobItems={["Yes", "No"]}  />

      <InputField h3="How many personnel are available for managing information system?" placeholder="Type here"/>

      <Radio h3="What key indicators are generated from the emergency management information system?" CheckbobItems={["Numbers by type of emergencies", "Length of hospital stay","Turnaround time","Disposal time","Number of deaths","Number of Referrals"]}  />

      <Radio h3="Whether time bound management of common emergencies is captured in MIS." CheckbobItems={["Yes", "No"]}  />

      <Radio h3="Which of the following alert systems does your facility have?" CheckbobItems={["Code blue alert system.", "NSTEMI alert systemo","Stroke alert system.","Trauma alert system"]}  />

      <Radio h3="Whether Medical Officer In charge (MO/IC) uses or reviews the data for quality improvement" CheckbobItems={["Yes", "No"]}  />

      <RadioButtonOtherSpecify h3="Do you get Pre-Hospital Notification during an emergency?" CheckbobItems={["No","Yes(How often per week)"]}  />

      <Radio h3="Infrastructure for receiving internal communication?" CheckbobItems={["Yes", "No"]}  />

      <Buttons prev="/emergencycareservices-3" next="/finance-3" />
      </div>
    </div>
  </section>
  )
}

export default Form3F