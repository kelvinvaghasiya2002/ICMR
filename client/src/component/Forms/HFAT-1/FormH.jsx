import React, { useState,useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Checkbox from '../child-comp/Checkbox';
import SidePanel from './SidePanelHFAT1';
import Buttons from '../child-comp/Buttons';
import Radio from '../child-comp/Radio';
import InputField from '../child-comp/InputField';
import { handleChange, turnOffbutton } from '../helpers';
import setLocalStorage from '../setLocalStorage';
import Heading from '../../Heading/Heading';

function FormH() {

  useEffect(()=> {
    AOS.init({duration:2000})
}, []);

  turnOffbutton();
  var formh = setLocalStorage("formh",
    { H1H1: "", H1H2: "", H1H3: "", H1H4: "", H1H5: "", H1H6: "", H1H7: "", H1H8: [""], H1H9: "" })

  const [formH, setFormH] = useState(JSON.parse(formh));
  return (
    <div>
      <Heading h2="Health Facility Assessment Tool 1: District Hospital/Tertiary Care (Public or Private)"></Heading>
      <section>
        <SidePanel id={"8"} />
        <div className="siteInfo" data-aos="fade-left">

          <div className="formhdr">
            <div>
              <h3>
                1H. Leadership and Governance
              </h3>
            </div>
          </div>

          <div className="formcontent">

            <h3 style={{ color: "#3177FF" }}>Disaster management plan :</h3>

            <Radio byDefault={formH.H1H1} onClick={handleChange(setFormH)} name="H1H1" h3="1H.1.1 : Do you have any disaster management plan?" CheckbobItems={["Yes", "No"]} />

            <Radio byDefault={formH.H1H2} onClick={handleChange(setFormH)} name="H1H2" h3="1H.1.2 : Do you have a redistribution plan?" CheckbobItems={["Yes", "No"]} />

            <Radio byDefault={formH.H1H3} onClick={handleChange(setFormH)} name="H1H3" h3="1H.1.3 : Do you have any evacuation plan?" CheckbobItems={["Yes", "No"]} />

            <h3 style={{ color: "#3177FF" }}>Quality Improvement Plan :</h3>


            <Radio h3="1H.2.1 : Do you have a Quality Improvement Committee? (if yes, collect detail of Committee" CheckbobItems={["Yes", "No"]} otherArray={[1,0]} setter={setFormH} name="H1H4" onClick={handleChange(setFormH)} byDefault={formH.H1H4}  />

            <InputField value={formH.H1H5} onChange={handleChange(setFormH)} name="H1H5" h3="1H.2.2 : How frequently does this committee meet in a year?" placeholder="Type here" />


            <Radio byDefault={formH.H1H6} onClick={handleChange(setFormH)} name="H1H6" h3="1H.2.3 : Do you have regular audits related to emergency care in hospital?" CheckbobItems={["Yes", "No"]} />

            <InputField value={formH.H1H7} onChange={handleChange(setFormH)} name="H1H7" h3="1H.2.4 : How frequently audits are conducted in a year?" placeholder="Type here" />


            <Checkbox setFunction={setFormH} array={formH.H1H8} StateValue={formH} name="H1H8" h3="1H.2.5 : Types of audits conducted?" CheckbobItems={["Mortality Audit", "Morbidity Audit"]} other={true}/>


            <InputField value={formH.H1H9} onChange={handleChange(setFormH)} name="H1H9" h3="1H.2.6 : Any action being taken on Audit report in the last one year?" placeholder="Type here" />

            <Buttons formName="formh" formData={formH} prevText="Previous" nextText="Save & Next" prev="/finance" next="/processpoliciessops" />
          </div>
        </div>
      </section>
    </div>
  )
}

export default FormH