import React, { useState } from 'react';
import Checkbox from '../child-comp/Checkbox';
import SidePanel from './SidePanelHFAT2';
import Buttons from '../child-comp/Buttons';
import Radio from '../child-comp/Radio';
import InputField from '../child-comp/InputField';
import { handleChange, turnOffbutton } from '../helpers';
import setLocalStorage from '../setLocalStorage';
import Heading from '../../Heading/Heading.jsx';

function Form2B() {
  turnOffbutton();
  var form2b = setLocalStorage("form2b",
  {H2B1: "",H2B2: "",H2B3: "",H2B4: "",H2B5: "",H2B6: "",H2B7: [], H2B8: [""],H2B9: "",H2B10: ""})

 const [form2B, setForm2B] = useState(JSON.parse(form2b));
  return (
    <div>
      <Heading h2="HFAT: CHC"></Heading>
    <section>
      <SidePanel id={"2"} />
      <div className="siteInfo">

        <div className="formhdr">
          <div>
            <h3>Infrastructure</h3>
          </div>
        </div>

        <div className="formcontent">
          <Radio 
              h3="2B.1 : Is the CHC 24/7?" 
              CheckbobItems={["Yes", "No"]} 
              name="H2B1" 
              byDefault={form2B.H2B1} 
              onClick={handleChange(setForm2B)} 
          />

          <InputField 
              h3="2B.2 : How many beds are available for the in-patient department (IPD)?" 
              placeholder="Type here" 
              name="H2B2" 
              value={form2B.H2B2} 
              type={"number"}
              onChange={handleChange(setForm2B)} 
          />

          <Radio 
              h3="2B.3 : Is there any dedicated bed present for emergency care?" 
              CheckbobItems={["Yes", "No"]} 
              name="H2B3" 
              byDefault={form2B.H2B3} 
              onClick={handleChange(setForm2B)} 
          />

          <InputField 
              h3="2B.4 : How many beds are available for emergency care?" 
              placeholder="Type here" 
              name="H2B4" 
              value={form2B.H2B4} 
              type={"number"}
              onChange={handleChange(setForm2B)} 
          />

          <InputField 
              h3="2B.5 : What is the average number of patients presenting to OPD per month?" 
              placeholder="Type here" 
              name="H2B5" 
              value={form2B.H2B5} 
              onChange={handleChange(setForm2B)} 
          />

          <InputField 
              h3="2B.6 : What is the average daily number of patients presenting with emergency conditions daily?" 
              p="(Chest pain, stroke, acute weakness, acute blindness, Shortness of breath, altered mentation, snake bite, bites, road traffic accident, injuries, poisoning, deliberate self-harm, infectious diseases, fever, pregnancy related, seizure, acute abdomen, anaphylaxis, cerebro-meningeal infections, foreign body, acute pulmonary disease, Shock, accidental injuries, infections)" 
              placeholder="Type here" 
              name="H2B6" 
              value={form2B.H2B6} 
              onChange={handleChange(setForm2B)} 
          />

          <Checkbox 
              h3="2B.7 : Which of the following infrastructure requirements for emergency are available at the CHC?" 
              CheckbobItems={["Emergency Registration Counter","Computerized Registration","Triage Area","Resuscitation Area","Decontamination Facility","Security Services","Designated Parking Area for Ambulance","Smooth Entry for Wheelchair Trolley and Stretcher Bay","Waiting Area for patients & Attendants.","Plaster Room/Suturing Room/Minor OT","Emergency OT","Dedicated Isolation rooms","Point of Care Lab","Blood storage unit","Point of care ultrasound","Radiology service-X ray, Ultrasound","Demarcated Duty Rooms for Doctors and Nurses","Area to Keep Dead Bodies","Tele-Medicine Facility"]} 
              name="H2B7" 
              setFunction={setForm2B}
              StateValue={form2B}
              array={form2B.H2B7}
          />

          <Checkbox 
              h3="2B.8 : Which of these signage or display boards of the emergency services and entitlements are available in its departments?" 
              CheckbobItems={["Services provided to the patients are clearly defined, displayed prominently.","Names of doctor and nursing staff on duty are displayed and updated.","List of available drugs are displayed.","All relevant information is displayed for the patients and visitors including user charges wherever applicable at the time of procedure/ investigation/admission.","Important contact numbers including ambulance, blood bank, police and referral centers displayed.","Display of citizen’s charter"]} 
              other={true} 
              name="H2B8" 
              setFunction={setForm2B}
              StateValue={form2B}
              array={form2B.H2B8} 
          />

          <Radio 
              h3="2B.9 : Does this hospital provide ambulance services?" 
              CheckbobItems={["Yes", "No"]} 
              name="H2B9" 
              byDefault={form2B.H2B9} 
              onClick={handleChange(setForm2B)} 
          />

          <InputField 
              h3="2B.10 : If ambulances are not there, how are patients transferred?" 
              placeholder="Type here" 
              name="H2B10" 
              value={form2B.H2B10} 
              onChange={handleChange(setForm2B)} 
          />


          <Buttons formData={form2B} formName="form2b" prev="/facilityinformation-2" next="/humanresources-2" />
        </div>
      </div>
    </section>
    </div>
  );
}

export default Form2B;
