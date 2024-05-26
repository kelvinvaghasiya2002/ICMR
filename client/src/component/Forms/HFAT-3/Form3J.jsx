import React, { useState } from 'react'
import Checkbox from '../child-comp/Checkbox';
import SidePanel from './SidePanelHFAT3';
import Buttons from '../child-comp/Buttons';
import Radio from '../child-comp/Radio';
import InputField from '../child-comp/InputField';
import { handleChange, turnOffbutton } from '../helpers';
import setLocalStorage from '../setLocalStorage';

function Form3J() {
    turnOffbutton();
    var form3j = setLocalStorage("form3j",
   {H3J1:"",H3J2:""})

  const [form3J, setForm3J] = useState(JSON.parse(form3j));

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

      <Radio byDefault={form3J.H3J1} onClick={handleChange(setForm3J)} name="H3J1" h3="Does this facility have policies and procedures which guide the referral of patients from other hospitals?" CheckbobItems={["Yes", "No"]}  />


      <Radio byDefault={form3J.H3J2} onClick={handleChange(setForm3J)} name="H3J2" h3="Does this facility have any policies and procedures which guide the transfer- out/referral of stable and unstable patients after stabilization to another facility with documentation?" CheckbobItems={["Yes", "No"]}  />


      <Buttons formName="form3j" formData={form3J} prev="/processpoliciessops-3" next="" />
      </div>
    </div>
  </section>
  )
}

export default Form3J