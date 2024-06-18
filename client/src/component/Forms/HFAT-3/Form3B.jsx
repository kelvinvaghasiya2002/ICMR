import React, { useState } from 'react'
import Checkbox from '../child-comp/Checkbox';
import SidePanel from './SidePanelHFAT3';
import Buttons from '../child-comp/Buttons';
import Radio from '../child-comp/Radio';
import InputField from '../child-comp/InputField';
import { handleChange, turnOffbutton } from '../helpers';
import setLocalStorage from '../setLocalStorage';
import Heading from '../../Heading/Heading.jsx';

function Form3B() {

    turnOffbutton();
    var form3b = setLocalStorage("form3b",
   {H3B1:"",H3B2:"",H3B3:"",H3B4:"",H3B5:"",H3B6:"",H3B7:[],H3B8:[],H3B9:"",H3B10:""})

  const [form3B, setForm3B] = useState(JSON.parse(form3b));

  return (
    <div>
      <Heading h2="HFAT: PHC"></Heading>
    <section>
    <SidePanel id={"2"} />
    <div className="siteInfo">

      <div className="formhdr">
        <div>
          <h3>
          Infrastructure
          </h3>
        </div>
      </div>

      <div className="formcontent">

      <Radio byDefault={form3B.H3B1} onClick={handleChange(setForm3B)}  name="H3B1" h3="3B.1 : Is the PHC 24/7 open?" CheckbobItems={["Yes", "No"]}  />

      <InputField value={form3B.H3A2} onChange={handleChange(setForm3B)} name="H3B2" h3="3B.2 : How many observation beds are available in the PHC?" placeholder="Type here"/>

      <Radio byDefault={form3B.H3A3} onClick={handleChange(setForm3B)} name="H3B3" h3="3B.3 : Are dedicated beds present for emergency care?" CheckbobItems={["Yes", "No"]}  />

      <InputField value={form3B.H3A4} onChange={handleChange(setForm3B)} name="H3B4" h3="3B.4 : How many beds are earmarked for emergency care?" placeholder="Type here"/>

      <InputField value={form3B.H3A5} onChange={handleChange(setForm3B)} name="H3B5" h3="3B.5 : What is the average number of patients presenting to OPD?" placeholder="Type here"/>

      <InputField value={form3B.H3A6} onChange={handleChange(setForm3B)} name="H3B6" h3="3B.6 : What is the average daily number of patients presenting with emergency conditions?" p="(Chest pain, stroke, acute weakness, acute blindness, Shortness of breath, altered mentation, snake bite, bites, road traffic accident, injuries, poisoning, deliberate self-harm, infectious diseases, fever, pregnancy related, seizure, acute abdomen, anaphylaxis, cerebro-meningeal infections, foreign body, acute pulmonary disease, Shock, accidental injuries, infections)" placeholder="Type here"/>

      <Checkbox setFunction={setForm3B} StateValue={form3B} array={form3B.H3B7} name="H3B7" h3="3B.7 : Which of the following infrastructure requirements for emergency are available at the PHC?" CheckbobItems={["Emergency Registration Counter","Computerized Registration","Triage Area","Resuscitation Area","Decontamination Facility","Security Services","Designated Parking Area for Ambulance","Smooth Entry for Wheelchair Trolley and Stretcher Bay","Waiting Area for patients & Attendants.","Plaster Room/Suturing Room/Minor OT","Emergency OT","Dedicated Isolation rooms","Point of Care Lab","Blood storage unit","Point of care ultrasound","Radiology service-X ray, Ultrasound","Demarcated Duty Rooms for Doctors and Nurses","Area to Keep Dead Bodies","Tele-Medicine Facility"]}/>

      <Checkbox setFunction={setForm3B} StateValue={form3B} array={form3B.H3B8} name="H3B8" h3="3B.8 : Which of these signage or display boards of the emergency services and entitlements available in its departments?"
       CheckbobItems={["Services provided to the patients are clearly defined, displayed prominently.","Names of doctor and nursing staff on duty are displayed and updated.","List of available drugs are displayed.","All relevant information is displayed for the patients and visitors including user charges wherever applicable at the time of procedure/ investigation/admission.","Important contact numbers including ambulance, blood bank, police and referral centers displayed.","Display of citizen’s charter",]} other={true}/>

      <Radio  byDefault={form3B.H3A9} onClick={handleChange(setForm3B)} name="H3B9" h3="3B.9 : Does this facility provide ambulance services?" CheckbobItems={["Yes", "No"]}  />

      <InputField value={form3B.H3A10} onChange={handleChange(setForm3B)} name="H3B10" h3="3B.10 : If ambulances are not there, how are patients transferred? " placeholder="Type here"/>

      <Buttons formName="form3b" formData={form3B} prev="/facilityinformation-3" next="/humanresources-3" />
      </div>
    </div>
  </section>
  </div>
  )
}

export default Form3B