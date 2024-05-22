import React, { useState } from 'react'
import Checkbox from '../child-comp/Checkbox';
import SidePanel from './SidePanelHFAT1';
import Buttons from '../child-comp/Buttons';
import Radio from '../child-comp/Radio';
import InputField from '../child-comp/InputField';

function FormB() {
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

          <InputField name="B1" h3="How many beds are available for the in-patient department (IPD)?" placeholder="Type here" />
          <Radio h3="Whether any dedicated bed present for emergency care?" CheckbobItems={["Yes", "No"]} name="B2" />
          <InputField name="B3" h3="How many beds are available for emergency care?" placeholder="Type here" />
          <Checkbox h3="Number of Beds by Emergency Severity Index (ESI):" CheckbobItems={[" Red", " Yellow", "Green"]} name="B4" />
          <InputField name="B5" h3="What is the average number of patients presenting to OPD per month?" placeholder="Type here" />
          <InputField name="B6" p="(Chest pain, stroke, acute weakness, acute blindness, Shortness of breath, altered mentation, snake bite, bites, road traffic accident, injuries ,poisoning, deliberate self-harm, infectious diseases, fever, pregnancy related, seizure, acute abdomen, anaphylaxis, cerebro-meningeal infections, foreign body, acute pulmonary disease, Shock, accidental injuries, infections)" h3="What is the average number of patients presenting with emergency conditions daily?" placeholder="Type here" />
          <Radio h3="Does the facility have a licensed in-house blood bank?" CheckbobItems={["Yes, it is available 24/7", "Yes, but it is not available 24/7", "No", "Other"]} name="B7" />
          <Radio h3="Which of these does the blood bank have among the following?" CheckbobItems={["Component facility", "O -ve Blood availability"]} name="B8" />
          <Radio h3="Is there a blood storage facility inside the emergency?" CheckbobItems={["Yes", "No"]} name="B9" />
          <Checkbox
            h3="Which of the following demarcated/dedicated areas does this facility have for emergency care? (Select all that apply)"
            CheckbobItems={[
              "Decontamination Area at the Entrance of ED",
              "Hospital attendant at the entrance of hospital to help the patient with the wheelchair, stretcher, etc.",
              "Waiting area for patients/ attendants",
              "Police control room",
              "Emergency Registration Counter",
              "Department has proper layout and demarcated areas as per Triage.",
              "Demarcated station for doctors and nurses",
              "Demarcated plaster room",
              "Dedicated isolation rooms (Emergency Infections)",
              "Dedicated minor OT",
              "Provision for emergency OT",
              "Point of care lab (24x7)",
              "Demarcated duty room for doctors",
              "Demarcated duty room for nursing staff",
              "Ambulance driver’s room",
              "Dedicated LaQshya certified labor room",
              "Child-friendly service based on MusQan",
              "NABH Accreditation"
            ]}
            name="B9"
          />

          <Checkbox
            h3="Is there any display board of all the emergency services and entitlements available in its departments?"
            CheckbobItems={[
              "Services provided to the patients are clearly defined, displayed prominently.",
              "Names of doctor and nursing staff on duty are displayed and updated.",
              "List of available drugs are displayed.",
              "All relevant information is displayed for the patients and visitors including user charges wherever applicable at the time of procedure/ investigation/admission.",
              "Important contact numbers including ambulance, blood bank, police and referral centers displayed.",
              "Other (Specify)____________"
            ]}
            name="B10"
          />

          <Checkbox
            h3="Which of the following safety and security infrastructure/measures are in place at your hospital (Select all that apply):"
            CheckbobItems={[
              "Fire safety",
              "Building safety",
              "Electrical safety",
              "Patient and healthcare provider safety",
              "Chemical safety",
              "Periodic training of staff (Every 6 months)",
              "Periodic mock drill (Every 6 months)",
              "Police post available within the premises.",
              "Alarm bell in Emergency / Code announcement available for extra help.",
              "Disease outbreak management plan",
              "Surge capacity in your hospital"
            ]}
            name="B11"
          />

          <Radio
            h3="Does the hospital provide ambulance services?"
            CheckbobItems={["Yes", "No"]}
            name="B12"
          />

          <InputField name="B13" h3="If ambulances are not there, how are patients transferred? " placeholder="Type here" />





          <Buttons prev="/healthfacilityinformation" next="/humanresources" />
        </div>
      </div>
    </section>
  )
}

export default FormB