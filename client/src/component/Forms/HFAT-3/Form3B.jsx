import React, { useState } from 'react'
import Checkbox from '../child-comp/Checkbox';
import SidePanel from './SidePanelHFAT3';
import Buttons from '../child-comp/Buttons';
import Radio from '../child-comp/Radio';
import InputField from '../child-comp/InputField';
import { turnOffbutton } from '../helpers';

function Form3B() {

    turnOffbutton();
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

      <Radio h3="Is the PHC 24/7?" CheckbobItems={["Yes", "No"]}  />

      <InputField h3="How many beds are available for the in-patient department (IPD)?" placeholder="Type here"/>

      <Radio h3="Whether any dedicated beds present for emergency care?" CheckbobItems={["Yes", "No"]}  />

      <InputField h3="How many beds are available for emergency care?" placeholder="Type here"/>

      <InputField h3="What is the average number of patients presenting to OPD?" placeholder="Type here"/>

      <InputField h3="What is the average daily number of patients presenting with emergency conditions?" p="(Chest pain, stroke, acute weakness, acute blindness, Shortness of breath, altered mentation, snake bite, bites, road traffic accident, injuries, poisoning, deliberate self-harm, infectious diseases, fever, pregnancy related, seizure, acute abdomen, anaphylaxis, cerebro-meningeal infections, foreign body, acute pulmonary disease, Shock, accidental injuries, infections)" placeholder="Type here"/>

      <Checkbox h3="Which of the following infrastructure requirements for emergency are available at the PHC?" CheckbobItems={["Emergency Registration Counter","Waiting Area for patients/attendants","Plaster Room/Suturing Room/Minor OT","Point of Care Lab","Area to Keep Dead Bodies","Demarcate Duty Rooms for Doctors and Nurses","Computerized Registration","Triage Area","Resuscitation Area","Decontamination Facility","Security Services","Designated Parking Area for Ambulance","Smooth Entry for Wheelchair Trolley and Stretcher Bay","IT infrastructure for providing teleconsultation services","There is the provision of adequate illumination at the entrance & access road to PHC especially at night.","Availability of Wheelchair or stretcher for easy Access","Ward is easily accessible from the OPD."]}/>

      <Checkbox h3="Which   of these signage or display boards of the emergency services and entitlements available in its departments?" CheckbobItems={["Services provided to the patients are clearly defined, displayed prominently.","The name of the facility is prominently displayed in front of the hospital building","Display of citizen’s charter","Direction to PHC is displayed from the Access Road.","Facility layout with Directions to different departments displayed","Name of the facility is prominently displayed in front of the hospital building.","All functional areas identified by their respective signage","Availability of complaint box and display of process for grievance re-addressed and whom to contact is displayed"]}/>

      <Radio h3="Does this facility provide ambulance services?" CheckbobItems={["Yes", "No"]}  />

      <InputField h3="If ambulances are not there, how are patients transferred? " placeholder="Type here"/>

      <Buttons prev="/facilityinformation-3" next="/humanresources-3" />
      </div>
    </div>
  </section>
  )
}

export default Form3B