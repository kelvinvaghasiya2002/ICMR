import React, { useState } from 'react'
import SidePanel from './SidePanelHFAT2';
import Buttons from '../child-comp/Buttons';
import Radio from '../child-comp/Radio';
import { handleChange, turnOffbutton } from '../helpers';
import setLocalStorage from '../setLocalStorage';
import Heading from '../../Heading/Heading.jsx';

function Form2J() {
  var form2j = setLocalStorage("form2j" , {H2J1:"" , H2J2:""});
  const [form2J , setForm2J] = useState(JSON.parse(form2j));

  turnOffbutton();
  return (
    <div>
      <Heading h2="HFAT: CHC"></Heading>
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

          <Radio h3="Does this facility have policies and procedures which guide the referral of patients from other hospitals?" CheckbobItems={["Yes", "No"]} name={"H2J1"} onClick={handleChange(setForm2J)} byDefault={form2J.H2J1}  />


          <Radio h3="Does this facility have any policies and procedures which guide the transfer- out/referral of stable and unstable patients after stabilization to another facility with documentation?" CheckbobItems={["Yes", "No"]} name={"H2J2"} onClick={handleChange(setForm2J)} byDefault={form2J.H2J2}  />


          <Buttons formName={"form2j"} formData={form2J} prev="/processpoliciessops-2" next="" />
          
        </div>
      </div>
    </section>
    </div>
  )
}

export default Form2J