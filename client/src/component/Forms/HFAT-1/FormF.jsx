import React, { useState } from 'react'
import Checkbox from '../child-comp/Checkbox';
import SidePanel from './SidePanelHFAT1';
import Buttons from '../child-comp/Buttons';
import Radio from '../child-comp/Radio';
import InputField from '../child-comp/InputField';

function FormF() {
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

          <Radio h3="Does the facility have a Hospital Management Information System (HMIS)" CheckbobItems={["Yes", "No"]} name="1F-1" />

          <Radio h3="Does this facility do complete reporting of indicators on emergency care in HMIS?" CheckbobItems={["Yes", "No"]} name="1F-2" />

          <InputField h3="How many personnel are available for managing information system?" placeholder="Type here" />

          <Radio h3="What key indicators are generated from the emergency management information system?" CheckbobItems={["Numbers by type of emergencieses", "Length of hospital stay", "Turnaround time", "Disposal time", "Number of deaths", "Number of Referrals"]} name="1F-4" />

          <Radio h3="Whether time bound management of common emergencies is captured in MIS. For example,
Door to CT/ECG time, Door to needle time, Time to activate emergency alert team." CheckbobItems={["Yes", "No"]} name="1F-5" />

          <Checkbox h3="If yes, select all that apply and provide their value" CheckbobItems={["Door to CT/ECG time: _________", "Door to needle time: _______________", "Time to activate emergency alert team: __________"]} name="1F-6" />

          <Radio h3="Whether hospital administrators/ Medical Superintendent uses or reviews the data for quality improvement" CheckbobItems={["Yes", "No"]} name="1F-7" />

          <Radio h3="Do you get Pre-Hospital Notification during an emergency?" CheckbobItems={["Yes", "No"]} name="1F-8" />

          <Radio h3="Infrastructure for receiving internal communication?" CheckbobItems={["Yes", "No"]} name="1F-9" />

          <Buttons prev="/emergencycareservices" next="/finance" />
        </div>
      </div>
    </section>
  )
}

export default FormF