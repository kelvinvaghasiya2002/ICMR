import React, { useState } from 'react'
import Checkbox from '../child-comp/Checkbox';
import SidePanel from './SidePanelHFAT1';
import Buttons from '../child-comp/Buttons';
import Radio from '../child-comp/Radio';
import InputField from '../child-comp/InputField';
import { handleChange, turnOffbutton } from '../helpers';
import setLocalStorage from '../setLocalStorage';
function FormJ() {
  turnOffbutton();
  var formj = setLocalStorage("formj",
   {H1J1:"",H1J2:""})

  const [formJ, setFormJ] = useState(JSON.parse(formj));
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

      <Radio byDefault={formJ.H1J1} onClick={handleChange(setFormJ)} name="H1J1"  h3="Does this facility have policies and procedures which guide the referral of patients from other hospitals?" CheckbobItems={["Yes","No"]} />


      <Radio byDefault={formJ.H1J2} onClick={handleChange(setFormJ)} name="H1J2" h3="Does this facility have any policies and procedures which guide the transfer- out/referral of stable and unstable patients after stabilization to another facility with documentation?" CheckbobItems={["Yes","No"]}/>


      <Buttons formName="formj" formData={formJ} prev="/processpoliciessops" next="" />
      </div>
    </div>
  </section>
  )
}

export default FormJ