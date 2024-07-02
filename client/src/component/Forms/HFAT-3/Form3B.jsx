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

function Form3B() {

  useEffect(()=> {
    AOS.init({duration:2000})
}, []);

    turnOffbutton();
    var form3b = setLocalStorage("form3b",
   {H3B1:"",H3B2:"",H3B3:"",H3B4:"",H3B5:"",H3B6:"",H3B7:[],H3B8:[],H3B9:"",H3B10:""})

  const [form3B, setForm3B] = useState(JSON.parse(form3b));

  return (
    <div>
      <Heading h2="Health Facility Assessment Tool 3: Primary Health Centre"></Heading>
    <section>
    <SidePanel id={"2"} />
    <div className="siteInfo" data-aos="fade-left" >

      <div className="formhdr">
        <div>
          <h3>
          3B. Infrastructure
          </h3>
        </div>
      </div>

      <div className="formcontent">

      <Radio byDefault={form3B.H3B1} onClick={handleChange(setForm3B)}  name="H3B1" h3="3B.1 : Is the PHC 24/7 open?" CheckbobItems={["Yes", "No"]}  />

      <InputField value={form3B.H3B2} onChange={handleChange(setForm3B)} name="H3B2" h3="3B.2 : How many observation beds are available in the PHC?" placeholder="Type here"/>

      <Radio byDefault={form3B.H3B3} onClick={handleChange(setForm3B)} name="H3B3" h3="3B.3 : Are dedicated beds present for emergency care?" CheckbobItems={["Yes", "No"]}  />

      <InputField value={form3B.H3B4} onChange={handleChange(setForm3B)} name="H3B4" h3="3B.4 : How many beds are earmarked for emergency care?" placeholder="Type here"/>

      <InputField value={form3B.H3B5} onChange={handleChange(setForm3B)} name="H3B5" h3="3B.5 : What is the average number of patients presenting to OPD in a day/ everyday?" placeholder="Type here"/>

      <InputField value={form3B.H3B6} onChange={handleChange(setForm3B)} name="H3B6" h3="3B.6 : What is the average daily number of patients presenting with emergency conditions?" p="(Chest pain, stroke, acute weakness, acute blindness, Shortness of breath, altered mentation, snake bite, bites, road traffic accident, injuries, poisoning, deliberate self-harm, infectious diseases, fever, pregnancy related, seizure, acute abdomen, anaphylaxis, cerebro-meningeal infections, foreign body, acute pulmonary disease, Shock, accidental injuries, infections)" placeholder="Type here"/>

      <Checkbox setFunction={setForm3B} StateValue={form3B} array={form3B.H3B7} name="H3B7" h3="3B.7 : Which of the following infrastructure requirements for emergency are available at the PHC? (Multiple answers possible)" CheckbobItems={["Emergency Registration Counter","Waiting Area for patients/attendants","Plaster Room/Suturing Room/Minor OT","Point of Care Lab","Area to Keep Dead Bodies","Demarcate Duty Rooms for Doctors and Nurses"," Computerized Registration","Triage Area","Resuscitation Area","Decontamination Facility","Security Services","Designated Parking Area for Ambulance","Wheelchair Trolley and Stretcher Bay"," IT infrastructure for providing teleconsultation services","Adequate illumination at the entrance & access road to PHC at night.","Availability of Wheelchair or stretcher","Ward is easily accessible from the OPD"]}/>

      <Checkbox setFunction={setForm3B} StateValue={form3B} array={form3B.H3B8} name="H3B8" h3="3B.8 : Which of these signage or display boards of the emergency services and entitlements available in its departments?"
       CheckbobItems={["Services Provided Clearly Defined and Displayed, displayed prominently.","The name of the facility is prominently displayed in front of the hospital building","Display of citizen’s charter","Direction to PHC is displayed from the Access Road.","Facility layout with Directions to different departments displayed."," Name of the facility is prominently displayed in front of the hospital building.","All functional areas identified by their respective signage.","Availability of complaint box and display of process for grievance re-addressed and whom to contact is displayed"]}/>

      <Radio  byDefault={form3B.H3B9} onClick={handleChange(setForm3B)} name="H3B9" h3="3B.9 : Does this facility provide ambulance services?" CheckbobItems={["Yes", "No"]}  />

      <InputField value={form3B.H3B10} onChange={handleChange(setForm3B)} name="H3B10" h3="3B.10 : If ambulances are not there, how are patients transferred? " placeholder="Type here"/>

      <Buttons formName="form3b" formData={form3B} prevText="Previous" nextText="Save & Next" prev="/facilityinformation-3" next="/humanresources-3" />
      </div>
    </div>
  </section>
  </div>
  )
}

export default Form3B