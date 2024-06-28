import React, { useState,useEffect } from 'react'
import Checkbox from '../child-comp/Checkbox';
import SidePanel from './SidePanelHFAT3';
import Buttons from '../child-comp/Buttons';
import Radio from '../child-comp/Radio';
import InputField from '../child-comp/InputField';
import { handleChange, turnOffbutton } from '../helpers';
import setLocalStorage from '../setLocalStorage';
import Heading from '../../Heading/Heading.jsx';
import AOS from 'aos'
import 'aos/dist/aos.css'


function Form3G() {
  useEffect(()=> {
    AOS.init({duration:2000})
}, []);

    turnOffbutton();
    var form3g = setLocalStorage("form3g",
   {H3G1:"",H3G2:"",H3G3:"",H3G4:"",H3G5:"",H3G6:""})

  const [form3G, setForm3G] = useState(JSON.parse(form3g));
  return (
    <div>
      <Heading h2="Health Facility Assessment Tool 3: Primary Health Centre"></Heading>
    <section>
    <SidePanel id={"7"} />
    <div className="siteInfo" data-aos="fade-left">

      <div className="formhdr">
        <div>
          <h3>
          3G. Finance
          </h3>
        </div>
      </div>

      <div className="formcontent">

      <Radio byDefault={form3G.H3G1} onClick={handleChange(setForm3G)} name="H3G1" h3="3G.1 : Whether any untied fund is available at your hospital?" CheckbobItems={["Yes", "No"]}  />

      <Radio byDefault={form3G.H3G2} onClick={handleChange(setForm3G)} name="H3G2" h3="3G.2 : If yes, whether this fund is utilized for providing emergency care services?" CheckbobItems={["Yes", "No"]}  />

      <Radio byDefault={form3G.H3G3} onClick={handleChange(setForm3G)} name="H3G3" h3="3G.3 : Whether any fund is available for emergency care?" CheckbobItems={["Yes", "No"]}  />

      <Radio byDefault={form3G.H3G4} onClick={handleChange(setForm3G)} name="H3G4" h3="3G.4 : If funds are available, which health protection schemes are covering your emergency care system?" CheckbobItems={["PMJAY", "RKS" , "Others (Specify)"]} otherArray={[0,0,1]} setter={setForm3G} other={true} />

      <InputField value={form3G.H3G5} onChange={handleChange(setForm3G)} name="H3G5" h3="3G.5 : Out of total patients being provided emergency care, how many were provided services under PMJAY scheme/ any other insurance scheme." placeholder="Type family member"/>

      <Radio byDefault={form3G.H3G6} onClick={handleChange(setForm3G)} name="H3G6" h3="3G.6 : Is the facility providing free emergency services to pregnant women, mothers, and neonates as per prevalent government schemes?" CheckbobItems={["Yes", "No"]}  />

      <Buttons formName="form3g" formData={form3G} prevText="Previous" nextText="Save & Next" prev="/informationsystem-3" next="/leadershipandgovernance-3" />
      </div>
    </div>
  </section>
  </div>
  )
}

export default Form3G