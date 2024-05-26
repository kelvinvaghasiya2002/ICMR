import React, { useState } from 'react'
import Checkbox from '../child-comp/Checkbox';
import SidePanel from './SidePanelHFAT2';
import Buttons from '../child-comp/Buttons';
import Radio from '../child-comp/Radio';
import InputField from '../child-comp/InputField';
import { turnOffbutton } from '../helpers';

function Form2G() {
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

          <Radio h3="Whether any untied fund is available at your hospital?" CheckbobItems={["Yes", "No"]} name="2G1" />

          <Radio h3="Whether this fund is utilized for providing emergency care services?" CheckbobItems={["Yes", "No"]} name="2G2" />

          <Radio h3="Whether any fund is available for emergency care?" CheckbobItems={["Yes", "No"]} name="2G3" />

          <Radio h3="If funds are available, which health protection schemes are covering your emergency care system?" CheckbobItems={["PMJAY", "RKS"]} other={true} name="2G4" />

          <InputField h3="Out of total patients being provided emergency care, how many were provided services under PMJAY scheme/ any other insurance scheme." placeholder="Type here" name="2G5" />

          <Radio h3="Is the facility providing free emergency services to pregnant women, mothers, and neonates as per prevalent government schemes?" CheckbobItems={["Yes", "No"]} name="2G6" />

          <Buttons prev="/informationsystem-2" next="/leadershipandgovernance-2" />
        </div>

      </div>
    </section>
  )
}

export default Form2G