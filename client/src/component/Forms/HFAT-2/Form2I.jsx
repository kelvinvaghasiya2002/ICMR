import React, { useState } from 'react'
import Checkbox from '../child-comp/Checkbox';
import SidePanel from './SidePanelHFAT2';
import Buttons from '../child-comp/Buttons';
import Radio from '../child-comp/Radio';
import { handleChange, turnOffbutton } from '../helpers';
import I1 from "../Tables/I1.jsx"
import setLocalStorage from '../setLocalStorage.js';
import Heading from '../../Heading/Heading.jsx';

function Form2I() {
  var form2i = setLocalStorage("form2i" , {H2I1:[""] , H2I2 : [], H2I4:""})
  const [form2I , setForm2I] = useState(JSON.parse(form2i));

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
    <div>
      <Heading h2="Health Facility Assessment Tool 2: Community Health Centre"></Heading>
    <section>
      <SidePanel id={"9"} />
      <div className="siteInfo">

        <div className="formhdr">
          <div>
            <h3>
              2I. Process/ Policies/SOPs
            </h3>
          </div>
        </div>

        <div className="formcontent">

          <Checkbox h3="2I.1 : What types of registers are maintained at the CHC?" CheckbobItems={["Emergency/OPD/Treatment Register", "Inventory Register", "Procedure register", "Referral Register", "Record for handing over and taking over of critical care equipment", "Medico-legal register", "Death Register", "Patient/Community feedback register"]} other={true} name="H2I1" setFunction={setForm2I} StateValue={form2I} array={form2I.H2I1} />

          <Checkbox h3="2I.2 : Which of the following SOPs for the management of common medical emergencies are followed at your CHC?" CheckbobItems={["Documented triage guidelines and protocols", "Standard treatment protocols for emergencies", "Transfer policies and procedures", "Disaster Management Plan", "Policies for handling cases of death"]} name="H2I2" setFunction={setForm2I} StateValue={form2I} array={form2I.H2I2} />

          <h3>Whether having Emergency condition specific SOP/STW for emergency care?</h3>

          <I1 columns={columns} initialRows={initialRows} tableName="H2I3" />

          <Radio h3="2I.4 : Does the facility have defined and established procedure for informing patients about their medical condition, involving them in treatment planning and facilitating informed decision making?" CheckbobItems={["Yes", "No"]} name="H2I4" onClick={handleChange(setForm2I)} byDefault={form2I.H2I4} />

          <Buttons formName={"form2i"} formData={form2I} prevText="Previous" nextText="Next" prev="/leadershipandgovernance-2" next="/referrallinkages-2" />
        </div>

      </div>
    </section>
    </div>
  )
}

export default Form2I