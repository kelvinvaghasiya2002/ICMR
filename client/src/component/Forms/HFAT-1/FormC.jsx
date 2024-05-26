import React, { useState } from 'react'
import Checkbox from '../child-comp/Checkbox';
import SidePanel from './SidePanelHFAT1';
import Buttons from '../child-comp/Buttons';
import Radio from '../child-comp/Radio';
import InputField from '../child-comp/InputField';
import C1 from './tables/C1';
import { turnOffbutton } from '../helpers';
import RadioButtonOtherSpecify from '../child-comp/RadioButtonOtherSpecify';
import CheckBoxOtherSpecify from '../child-comp/CheckBoxOtherSpecify';

function FormC() {

  turnOffbutton();

  const columns = [
    { key: 'btn', label: 'Select Required', type: 'checkbox', options: ['Yes'] },
    { key: 'Manpower', label: 'Manpower', type: 'text' },
    { key: 'Number', label: 'Number', type: 'input' },
    { key: 'availability247', label: '24/7 Availability', type: 'radio', options: ['Yes', 'No'] },
    { key: 'onSiteAvailability', label: 'On-site Availability', type: 'radio', options: ['Yes', 'No'] },
    { key: 'onCallAvailability', label: 'On-call Availability', type: 'radio', options: ['Yes', 'No'] }
  ];

  const initialRows = [
    { btn: "", Manpower: 'Faculty/Consultant', Number: '', availability247: '', onSiteAvailability: '', onCallAvailability: '' },
    { btn: "", Manpower: 'CMO (casualty medical officer)', Number: '', availability247: '', onSiteAvailability: '', onCallAvailability: '' },
    { btn: "", Manpower: 'SR (Senior Residents)', Number: '', availability247: '', onSiteAvailability: '', onCallAvailability: '' },
    { btn: "", Manpower: 'JR (Junior Residents)', Number: '', availability247: '', onSiteAvailability: '', onCallAvailability: '' },
    { btn: "", Manpower: 'MO (Medical officer)', Number: '', availability247: '', onSiteAvailability: '', onCallAvailability: '' },
    { btn: "", Manpower: 'Nursing officer in charge / Team leader', Number: '', availability247: '', onSiteAvailability: '', onCallAvailability: '' },
    { btn: "", Manpower: 'Staff Nurse/ Nursing Officer', Number: '', availability247: '', onSiteAvailability: '', onCallAvailability: '' },
    { btn: "", Manpower: 'Radiology technician/ Radiographer', Number: '', availability247: '', onSiteAvailability: '', onCallAvailability: '' },
    { btn: "", Manpower: 'Lab Technician', Number: '', availability247: '', onSiteAvailability: '', onCallAvailability: '' },
    { btn: "", Manpower: 'OT. Technician', Number: '', availability247: '', onSiteAvailability: '', onCallAvailability: '' },
    { btn: "", Manpower: 'H.A/ GDA/ Orderly', Number: '', availability247: '', onSiteAvailability: '', onCallAvailability: '' },
    { btn: "", Manpower: 'SA/ Housekeeping staff', Number: '', availability247: '', onSiteAvailability: '', onCallAvailability: '' },
    { btn: "", Manpower: 'EMT', Number: '', availability247: '', onSiteAvailability: '', onCallAvailability: '' },
    { btn: "", Manpower: 'Security', Number: '', availability247: '', onSiteAvailability: '', onCallAvailability: '' },
    { btn: "", Manpower: 'Registration staff', Number: '', availability247: '', onSiteAvailability: '', onCallAvailability: '' },
    { btn: "", Manpower: 'IT Staff', Number: '', availability247: '', onSiteAvailability: '', onCallAvailability: '' },
    { btn: "", Manpower: 'Hospital Administrator', Number: '', availability247: '', onSiteAvailability: '', onCallAvailability: '' },
    { btn: "", Manpower: 'Pharmacist', Number: '', availability247: '', onSiteAvailability: '', onCallAvailability: '' },
    { btn: "", Manpower: 'Radiology technician', Number: '', availability247: '', onSiteAvailability: '', onCallAvailability: '' },
    { btn: "", Manpower: 'Other (please specify)', Number: '', availability247: '', onSiteAvailability: '', onCallAvailability: '' }
  ];

  return (
    <section>
      <SidePanel id={"3"} />
      <div className="siteInfo">

        <div className="formhdr">
          <div>
            <h3>
              Human Resources
            </h3>
          </div>
        </div>

        <div className="formcontent">
          {/* <h3>Tick the manpower available in your emergency department and provide numbers</h3> */}
          <C1 columns={columns} initialRows={initialRows} />
          <h3>Please indicate which of the following specialist/super specialist services are available in your hospital</h3>
          <Checkbox
            h3="District Hospital + Medical College"
            CheckbobItems={[
              "Medicine",
              "Gynecology and obstetrics",
              "Orthopedics",
              "General surgery",
              "Radiology",
              "Anesthesia",
              "Critical care",
              "Ophthalmology",
              "ENT",
              "Psychiatry",
              "Dermatology",
              "Forensic medicine"
            ]}
            name="C2a"
          />

          <Checkbox
            h3="Medical College"
            CheckbobItems={[
              "Transfusion medicine",
              "Cardiology",
              "CTVS",
              "Neurology",
              "Neurosurgery",
              "Plastic surgery",
              "Maxillofacial surgery",
              "Gastroenterology",
              "Nephrology",
              "Urology",
              "Pediatric surgery",
              "Emergency medicine"
            ]}
            name="C2b"
          />

          <Radio
            h3="Whether training for emergency care management is being conducted for the staff in the institution?"
            CheckbobItems={["Yes", "No"]}
            name="C3"
          />
          <Checkbox
            h3="Which of the following emergency care trainings you have undergone?"
            CheckbobItems={[
              "Trauma & Accidental Injuries",
              "Burns",
              "Cardiac emergencies: acute chest pain, acute coronary syndrome (ACS)/ STEMI, Heart failure, Cardiac Arrest",
              "Stroke",
              "Acute Breathlessness",
              "Bites (Animal bite/snake bite/scorpion sting)",
              "Choking/foreign body ingestion",
              "Poisoning",
              "PPH",
              "Pre-Eclampsia",

          <CheckBoxOtherSpecify
            h3="Which of the following emergency care trainings you have undergone?"
            CheckboxItems={[
              "Trauma & Accidental Injuries",
              "Burns",
              "Cardiac emergencies: acute chest pain, acute coronary syndrome (ACS)/ STEMI, Heart failure, Cardiac Arrest",
              "Stroke",
              "Acute Breathlessness",
              "Bites (Animal bite/snake bite/scorpion sting)",
              "Choking/foreign body ingestion",
              "Poisoning",
              "PPH",
              "Pre-Eclampsia",
              "Pediatric surgery",
              "Others (Specify)"
            ]}
            name="C4"
          />

          <RadioButtonOtherSpecify
            h3="Frequency of training on emergency care in a year?"
            CheckboxItems={["Every Month", "Quarterly","Annually","Others(Specify)"]}
            name="C5"
          />

          <InputField name="C6" h3="When was the last training conducted ? " placeholder="Type here" />

            ]}
            other={true}
            name="C4"
          />
          <Checkbox
            h3="Frequency of training on emergency care in a year?"
            CheckbobItems={[
              "Every Month",
              "Quarterly",
              "Annually"
            ]}
            name="C5"
          />



          <InputField name="C6" h3="When was the last training conducted ? " placeholder="Type here" />
          <Buttons prev="/infrastructure" next="/logisticsdrugsconsumablesequipment-1" />
        </div>
      </div>
    </section>
  )
}

export default FormC