import React, { useState } from 'react'
import Checkbox from '../child-comp/Checkbox';
import SidePanel from './SidePanelHFAT3';
import Buttons from '../child-comp/Buttons';
import Radio from '../child-comp/Radio';
import InputField from '../child-comp/InputField';
import { turnOffbutton } from '../helpers';
import I1 from './tables/I1';

function Form3I() {
  turnOffbutton();
  const columns = [
    { key: 'EmergencyCondition', label: 'Emergency Condition', type: 'text' },
    { key: 'SOP', label: 'Have Specific SOP/STW', type: 'radio', options: ['Yes', 'No'] },
    { key: 'FollowsSOP', label: 'Follows SOP', type: 'radio', options: ['Yes', 'No'] },
];

// Define the initial rows
const initialRows = [
    { EmergencyCondition: 'MI', SOP: '', FollowsSOP: '' },
    { EmergencyCondition: 'Stroke', SOP: '', FollowsSOP: '' },
    { EmergencyCondition: 'Trauma & Burns', SOP: '', FollowsSOP: '' },
    { EmergencyCondition: 'Poisoning', SOP: '', FollowsSOP: '' },
    { EmergencyCondition: 'Snake Bite', SOP: '', FollowsSOP: '' },
    { EmergencyCondition: 'Maternal Emergencies-PPH', SOP: '', FollowsSOP: '' },
    { EmergencyCondition: 'Maternal Emergencies- Eclampsia', SOP: '', FollowsSOP: '' },
    { EmergencyCondition: 'Neonatal Emergencies', SOP: '', FollowsSOP: '' },
    { EmergencyCondition: 'Acute Respiratory Illness', SOP: '', FollowsSOP: '' },
];

  return (
    <section>
    <SidePanel id={"9"} />
    <div className="siteInfo">

      <div className="formhdr">
        <div>
          <h3>
          Process/ Policies/SOPs
          </h3>
        </div>
      </div>

      <div className="formcontent">

        <Checkbox h3="What   types of registers are maintained at the PHC?" CheckbobItems={["Emergency/OPD/Treatment Register","Inventory Register","Procedure register","Referral Register","Record for handing over and taking over of critical care equipment","Medico-legal register","Death Register","Patient/Community feedback register","Other (please specify) ___________________"]}/>

        <Checkbox h3="Which of the following SOPs for the management of common medical emergencies are followed at your PHC?" CheckbobItems={["Documented triage guidelines and protocols","Standard treatment protocols for emergencies","Transfer policies and procedures","Disaster Management Plan","Policies for handling cases of death"]} />

        <h3>Whether having Emergency condition specific SOP/STW for emergency care?</h3>
        <I1 columns={columns} initialRows={initialRows} />

        <Radio h3="Does the facility have defined and   established procedure for informing patients about their medical condition,   involving them in treatment planning and facilitating informed decision   making?" CheckbobItems={["Yes", "No"]}  />


      <Buttons prev="/leadershipandgovernance-3" next="/referrallinkages-3" />
      </div>
    </div>
  </section>
  )
}

export default Form3I