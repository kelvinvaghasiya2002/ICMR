import React, { useState } from 'react'
import Checkbox from '../child-comp/Checkbox';
import SidePanel from './SidePanelHFAT3';
import Buttons from '../child-comp/Buttons';
import Radio from '../child-comp/Radio';
import InputField from '../child-comp/InputField';
import { turnOffbutton } from '../helpers';

function Form3J() {
    turnOffbutton();
  return (
    <section>
    <SidePanel id={"10"} />
    <div className="siteInfo">

      <div className="formhdr">
        <div>
          <h3>
          Referral Linkages
          </h3>
        </div>
      </div>

      <div className="formcontent">

      <Radio h3="Does this facility have policies and procedures which guide the referral of patients from other hospitals?" CheckbobItems={["Yes", "No"]}  />


      <Radio h3="Does this facility have any policies and procedures which guide the transfer- out/referral of stable and unstable patients after stabilization to another facility with documentation?" CheckbobItems={["Yes", "No"]}  />


      <Buttons prev="/processpoliciessops-3" next="" />
      </div>
    </div>
  </section>
  )
}

export default Form3J