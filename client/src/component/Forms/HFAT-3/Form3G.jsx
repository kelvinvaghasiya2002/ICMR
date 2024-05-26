import React, { useState } from 'react'
import Checkbox from '../child-comp/Checkbox';
import SidePanel from './SidePanelHFAT3';
import Buttons from '../child-comp/Buttons';
import Radio from '../child-comp/Radio';
import InputField from '../child-comp/InputField';
import { turnOffbutton } from '../helpers';
import RadioButtonOtherSpecify from '../child-comp/RadioButtonOtherSpecify';

function Form3G() {
    turnOffbutton();
  return (
    <section>
    <SidePanel id={"7"} />
    <div className="siteInfo">

      <div className="formhdr">
        <div>
          <h3>
          Finance
          </h3>
        </div>
      </div>

      <div className="formcontent">

      <Radio h3="Whether any untied fund is available at your hospital?" CheckbobItems={["Yes", "No"]}  />

      <Radio h3="whether this fund is utilized for providing emergency care services?" CheckbobItems={["Yes", "No"]}  />

      <Radio h3="Whether any fund is available for emergency care?" CheckbobItems={["Yes", "No"]}  />

      <RadioButtonOtherSpecify h3="If funds are available, which health protection schemes are covering your emergency care system?" CheckboxItems={["PMJAY", "RKS","Others(Specify)"]}  />

      <InputField h3="Out of total patients being provided emergency care, how many were provided services under PMJAY scheme/ any other insurance scheme." placeholder="Type family member"/>

      <Radio h3="Is the facility providing free emergency services to pregnant women, mothers, and neonates as per prevalent government schemes?" CheckbobItems={["Yes", "No"]}  />

      <Buttons prev="/informationsystem-3" next="/leadershipandgovernance-3" />
      </div>
    </div>
  </section>
  )
}

export default Form3G