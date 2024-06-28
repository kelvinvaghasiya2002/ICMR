import React, { useState,useEffect } from 'react'
import SidePanel from './SidePanelHFAT3';
import Buttons from '../child-comp/Buttons';
import Radio from '../child-comp/Radio';
import { handleChange, turnOffbutton } from '../helpers';
import setLocalStorage from '../setLocalStorage';
import Heading from '../../Heading/Heading.jsx';
import LastButton from '../child-comp/LastButton.jsx';
import AOS from 'aos'
import 'aos/dist/aos.css'

function Form3J() {
  useEffect(()=> {
    AOS.init({duration:2000})
}, []);

  turnOffbutton();
  var form3j = setLocalStorage("form3j",
    { H3J1: "", H3J2: "" })

  const [form3J, setForm3J] = useState(JSON.parse(form3j));

  return (
    <div>
      <Heading h2="Health Facility Assessment Tool 3: Primary Health Centre"></Heading>
      <section>
        <SidePanel id={"10"} />
        <div className="siteInfo" data-aos="fade-left">

          <div className="formhdr">
            <div>
              <h3>
                3J. Referral Linkages
              </h3>
            </div>
          </div>

          <div className="formcontent cont_extra">

            <Radio byDefault={form3J.H3J1} onClick={handleChange(setForm3J)} name="H3J1" h3="3J.1 : Does this facility follow any policies and procedures which guide the transfer- out/referral of stable and unstable patients after stabilization to another facility? " CheckbobItems={["Yes", "No"]} />


            <Radio byDefault={form3J.H3J2} onClick={handleChange(setForm3J)} name="H3J2" h3="3J.2 : Do you any documented SOP/STW guiding the referral linkages?" CheckbobItems={["Yes", "No"]} />


            {/* <Buttons formName="form3j" formData={form3J} prevText="Previous" nextText="Submit" prev="/processpoliciessops-3" next="" /> */}
            <LastButton prev="/processpoliciessops-3" formName="form3j" formData={form3J} MainForm={"HFAT-3"} />
          </div>
        </div>
      </section>
    </div>
  )
}

export default Form3J