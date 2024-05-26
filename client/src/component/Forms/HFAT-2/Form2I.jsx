import React, { useState } from 'react'
import Checkbox from '../child-comp/Checkbox';
import SidePanel from './SidePanelHFAT2';
import Buttons from '../child-comp/Buttons';
import Radio from '../child-comp/Radio';
import InputField from '../child-comp/InputField';
import { turnOffbutton } from '../helpers';
import CheckBoxOtherSpecify from '../child-comp/CheckBoxOtherSpecify';

function Form2I() {
  turnOffbutton();
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

        <CheckBoxOtherSpecify h3="What   types of registers are maintained at the CHC?" CheckboxItems={["Emergency/OPD/Treatment Register","Inventory Register","Procedure register","Referral Register","Record for handing over and taking over of critical care equipment","Medico-legal register","Death Register","Patient/Community feedback register","Other (please specify)"]}/>

        <Checkbox h3="Which of the following SOPs for the management of common medical emergencies are followed at your CHC?" CheckbobItems={["Documented triage guidelines and protocols","Standard treatment protocols for emergencies","Transfer policies and procedures","Disaster Management Plan","Policies for handling cases of death"]} />

        <h1>TABLE</h1>

        <Radio h3="Does the facility have defined and   established procedure for informing patients about their medical condition,   involving them in treatment planning and facilitating informed decision   making?" CheckbobItems={["Yes", "No"]}  />


      <Buttons prev="/leadershipandgovernance-2" next="/referrallinkages-2" />
      </div>
    </div>
  </section>
  )
}

export default Form2I