import React, { useState } from 'react'
import Checkbox from '../child-comp/Checkbox';
import SidePanel from '../child-comp/SidePanel';
import Buttons from '../child-comp/Buttons';
import Radio from '../child-comp/Radio';
import InputField from '../child-comp/InputField';

function FormJ() {
  return (
    <section>
    <SidePanel id={"20"} />
    <div className="siteInfo">

      <div className="formhdr">
        <div>
          <h3>
          Referral Linkages
          </h3>
        </div>
      </div>

      <div className="formcontent">

      <Radio h3="Does this facility have policies and procedures which guide the referral of patients from other hospitals?" CheckbobItems={["Yes","No"]} name="1J-1"/>


      <Radio h3="Does this facility have any policies and procedures which guide the transfer- out/referral of stable and unstable patients after stabilization to another facility with documentation?" CheckbobItems={["Yes","No"]} name="1J-2"/>


      <Buttons prev="/processpoliciessops" next="" />
      </div>
    </div>
  </section>
  )
}

export default FormJ