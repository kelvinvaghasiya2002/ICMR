import React, { useState ,useEffect } from 'react'
import Checkbox from '../child-comp/Checkbox';
import SidePanel from './SidePanelHFAT2';
import Buttons from '../child-comp/Buttons';
import Radio from '../child-comp/Radio';
import InputField from '../child-comp/InputField';
import { handleChange, turnOffbutton } from '../helpers';
import setLocalStorage from '../setLocalStorage';
import Heading from '../../Heading/Heading.jsx';
import AOS from 'aos'
import 'aos/dist/aos.css'

function Form2G() {
  useEffect(()=> {
    AOS.init({duration:2000})
}, []);
  turnOffbutton();
  var form2g = setLocalStorage("form2g",
  {
    H2G1: "", H2G2: "", H2G3: "", H2G4: "", H2G5: "", H2G6: ""
  })

 const [form2G, setForm2G] = useState(JSON.parse(form2g));
  return (
    <div>
      <Heading h2="Health Facility Assessment Tool 2: Community Health Centre"></Heading>
    <section>
      <SidePanel id={"7"} />
      <div className="siteInfo" data-aos="fade-left">

        <div className="formhdr">
          <div>
            <h3>
              2G. Finance
            </h3>
          </div>
        </div>

        <div className="formcontent">

          <Radio byDefault={form2G.H2G1} onClick={handleChange(setForm2G)} h3="2G.1 : Whether any untied fund is available at your hospital?" CheckbobItems={["Yes", "No"]} name="H2G1" />

          <Radio byDefault={form2G.H2G2} onClick={handleChange(setForm2G)} h3="2G.2 : If Yes,Whether this fund is utilized for providing emergency care services?" CheckbobItems={["Yes", "No"]} name="H2G2" />

          <Radio byDefault={form2G.H2G3} onClick={handleChange(setForm2G)} h3="2G.3 : Whether any fund is available for emergency care?" CheckbobItems={["Yes", "No"]} name="H2G3" />

          <Radio byDefault={form2G.H2G4} onClick={handleChange(setForm2G)} h3="2G.4 : If funds are available, which health protection schemes are covering your emergency care system?" CheckbobItems={["PMJAY", "RKS"]} other={true} name="H2G4" />

          <InputField value={form2G.H2G5} onChange={handleChange(setForm2G)} h3="2G.5 : Out of total patients being provided emergency care, how many were provided services under PMJAY scheme/ any other insurance scheme." placeholder="Type here" name="H2G5" />

          <Radio byDefault={form2G.H2G6} onClick={handleChange(setForm2G)} h3="2G.6 : Is the facility providing free emergency services to pregnant women, mothers, and neonates as per prevalent government schemes?" CheckbobItems={["Yes", "No"]} name="H2G6" />

          <Buttons formData={form2G} formName="form2g" prevText="Previous" nextText="Save & Next" prev="/informationsystem-2" next="/leadershipandgovernance-2" />
        </div>

      </div>
    </section>
    </div>
  )
}

export default Form2G