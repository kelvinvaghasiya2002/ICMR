import React, { useState } from 'react'
import Checkbox from '../child-comp/Checkbox';
import SidePanel from '../CST/SidePanel';
import Buttons from '../child-comp/Buttons';
import Radio from '../child-comp/Radio';
import InputField from '../child-comp/InputField';

function FormI() {
  return (
    <section>
      <SidePanel id={"20"} />
      <div className="siteInfo">

        <div className="formhdr">
          <div>
            <h3>
              Process/ Policies/SOPs
            </h3>
          </div>
        </div>

        <div className="formcontent">

          <Checkbox h3="Indicate whether your hospital has the following documented protocols and systems (Select all that apply):" CheckbobItems={["Procedure for registration and admission of new emergency patients", "Procedure/Policy for receiving of referral patients", "Emergency Manual at the point of care", "Triage guidelines and protocol.", "Discharge summaries for all patients.", "Policy on handling cases of death (outside and inside hospital).", "Disaster management plan", "Triage policy/system at your emergency department.", "Alert system: Code Blue.", "Alert system: Trauma.", "Alert system: Chest Pain", "Alert system: Sepsis.", "Alert system: Stroke", "Alert system: Maternal Emergencies", "Alert system: Neonatal Emergencies", "Alert system: Acute Respiratory Emergencies", "Alert system: Snake bite and Poisoning"]} name="1I-1" />

              <Buttons prev="/leadershipandgovernance" next="/referrallinkages" />
            </div>
        </div>
    </section>
  )
}

export default FormI