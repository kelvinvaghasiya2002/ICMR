import React, { useState } from 'react'
import Checkbox from '../child-comp/Checkbox';
import SidePanel from './SidePanelHFAT3';
import Buttons from '../child-comp/Buttons';
import Radio from '../child-comp/Radio';
import InputField from '../child-comp/InputField';
import { handleChange, turnOffbutton } from '../helpers';
import setLocalStorage from '../setLocalStorage';

function Form3B() {

    turnOffbutton();
    var form3b = setLocalStorage("form3b",
   {H3B1:"",H3B2:"",H3B3:"",H3B4:"",H3B5:"",H3B6:"",H3B7:"",H3B8:"",H3B9:"",H3B10:""})

  const [form3B, setForm3B] = useState(JSON.parse(form3b));

  return (
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

      <Radio byDefault={form3B.H3B1} onClick={handleChange(setForm3B)}  name="H3B1" h3="Is the PHC 24/7?" CheckbobItems={["Yes", "No"]}  />

      <InputField value={form3B.H3A2} onChange={handleChange(setForm3B)} name="H3B2" h3="How many beds are available for the in-patient department (IPD)?" placeholder="Type here"/>

      <Radio byDefault={form3B.H3A3} onClick={handleChange(setForm3B)} name="H3B3" h3="Whether any dedicated beds present for emergency care?" CheckbobItems={["Yes", "No"]}  />

      <InputField value={form3B.H3A4} onChange={handleChange(setForm3B)} name="H3B4" h3="How many beds are available for emergency care?" placeholder="Type here"/>

      <InputField value={form3B.H3A5} onChange={handleChange(setForm3B)} name="H3B5" h3="What is the average number of patients presenting to OPD?" placeholder="Type here"/>

      <InputField value={form3B.H3A6} onChange={handleChange(setForm3B)} name="H3B6" h3="What is the average daily number of patients presenting with emergency conditions?" p="(Chest pain, stroke, acute weakness, acute blindness, Shortness of breath, altered mentation, snake bite, bites, road traffic accident, injuries, poisoning, deliberate self-harm, infectious diseases, fever, pregnancy related, seizure, acute abdomen, anaphylaxis, cerebro-meningeal infections, foreign body, acute pulmonary disease, Shock, accidental injuries, infections)" placeholder="Type here"/>


      <Checkbox h3="Which of the following infrastructure requirements for emergency are available at the PHC?" CheckbobItems={["Emergency Registration Counter","Waiting Area for patients/attendants","Plaster Room/Suturing Room/Minor OT","Point of Care Lab","Area to Keep Dead Bodies","Demarcate Duty Rooms for Doctors and Nurses","Computerized Registration","Triage Area","Resuscitation Area","Decontamination Facility","Security Services","Designated Parking Area for Ambulance","Smooth Entry for Wheelchair Trolley and Stretcher Bay","IT infrastructure for providing teleconsultation services","There is the provision of adequate illumination at the entrance & access road to PHC especially at night.","Availability of Wheelchair or stretcher for easy Access","Ward is easily accessible from the OPD."]}/>

      <Checkbox h3="Which   of these signage or display boards of the emergency services and entitlements available in its departments?" CheckbobItems={["Services provided to the patients are clearly defined, displayed prominently.","The name of the facility is prominently displayed in front of the hospital building","Display of citizen’s charter","Direction to PHC is displayed from the Access Road.","Facility layout with Directions to different departments displayed","Name of the facility is prominently displayed in front of the hospital building.","All functional areas identified by their respective signage","Availability of complaint box and display of process for grievance re-addressed and whom to contact is displayed"]}/>

      <Checkbox name="H3B7" h3="Which of the following infrastructure requirements for emergency are available at the PHC?" CheckbobItems={["Emergency Registration Counter","Computerized Registration","Triage Area","Resuscitation Area","Decontamination Facility","Security Services","Designated Parking Area for Ambulance","Smooth Entry for Wheelchair Trolley and Stretcher Bay","Waiting Area for patients & Attendants.","Plaster Room/Suturing Room/Minor OT","Emergency OT","Dedicated Isolation rooms","Point of Care Lab","Blood storage unit","Point of care ultrasound","Radiology service-X ray, Ultrasound","Demarcated Duty Rooms for Doctors and Nurses","Area to Keep Dead Bodies","Tele-Medicine Facility"]}/>

      <Checkbox name="H3B8" h3="Which   of these signage or display boards of the emergency services and entitlements available in its departments?"
       CheckbobItems={["Services provided to the patients are clearly defined, displayed prominently.","Names of doctor and nursing staff on duty are displayed and updated.","List of available drugs are displayed.","All relevant information is displayed for the patients and visitors including user charges wherever applicable at the time of procedure/ investigation/admission.","Important contact numbers including ambulance, blood bank, police and referral centers displayed.","Display of citizen’s charter",]} other={true}/>


      <Radio  byDefault={form3B.H3A9} onClick={handleChange(setForm3B)} name="H3B9" h3="Does this facility provide ambulance services?" CheckbobItems={["Yes", "No"]}  />

      <InputField value={form3B.H3A10} onChange={handleChange(setForm3B)} name="H3B10" h3="If ambulances are not there, how are patients transferred? " placeholder="Type here"/>

      <Buttons formName="form3b" formData={form3B} prev="/facilityinformation-3" next="/humanresources-3" />
      </div>
    </div>
  </section>
  )
}

export default Form3B