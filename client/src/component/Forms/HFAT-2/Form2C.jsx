import React, { useState } from 'react'
import Checkbox from '../child-comp/Checkbox';
import SidePanel from './SidePanelHFAT2';
import Buttons from '../child-comp/Buttons';
import Radio from '../child-comp/Radio';
import InputField from '../child-comp/InputField';
import C1 from './tables/C1';

function Form2C() {
  const columns = [
    { key: 'Manpower', label: 'Manpower', type: 'text' },
    { key: 'Number', label: 'Number', type: 'input' },
    { key: 'Availability', label: '24/7 Availability', type: 'radio', options: ['Yes', 'No'] },
    { key: 'OnSite', label: '24/7 On-site Availability', type: 'radio', options: ['Yes', 'No'] },
    { key: 'OnCall', label: '24/7 On-call Availability', type: 'radio', options: ['Yes', 'No'] },
  ];

  const initialRows = [
    { Manpower: 'Physician/Family Medicine Specialist', Number: '', Availability: '', OnSite: '', OnCall: '' },
    { Manpower: 'Surgeon', Number: '', Availability: '', OnSite: '', OnCall: '' },
    { Manpower: 'Obstetrician & Gynecologist', Number: '', Availability: '', OnSite: '', OnCall: '' },
    { Manpower: 'Pediatrician', Number: '', Availability: '', OnSite: '', OnCall: '' },
    { Manpower: 'Anesthesiologist', Number: '', Availability: '', OnSite: '', OnCall: '' },
    { Manpower: 'Ophthalmologist', Number: '', Availability: '', OnSite: '', OnCall: '' },
    { Manpower: 'Orthopaedician', Number: '', Availability: '', OnSite: '', OnCall: '' },
    { Manpower: 'ENT', Number: '', Availability: '', OnSite: '', OnCall: '' },
    { Manpower: 'Microbiologist/Pathologist/Biochemist', Number: '', Availability: '', OnSite: '', OnCall: '' },
    { Manpower: 'GDMO', Number: '', Availability: '', OnSite: '', OnCall: '' },
    { Manpower: 'Nurses', Number: '', Availability: '', OnSite: '', OnCall: '' },
    { Manpower: 'Data entry operator', Number: '', Availability: '', OnSite: '', OnCall: '' },
    { Manpower: 'ECG technician', Number: '', Availability: '', OnSite: '', OnCall: '' },
    { Manpower: 'MLT', Number: '', Availability: '', OnSite: '', OnCall: '' },
    { Manpower: 'Pharmacist', Number: '', Availability: '', OnSite: '', OnCall: '' },
    { Manpower: 'Radiology technician', Number: '', Availability: '', OnSite: '', OnCall: '' },
    { Manpower: 'Others (please specify)', Number: '', Availability: '', OnSite: '', OnCall: '' },
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
          <h3>Tick the manpower available in your emergency department and provide numbers</h3>
          <C1 columns={columns} initialRows={initialRows} />
          <Radio h3="Whether training for emergency care management is being conducted for the staff in the institution?" CheckbobItems={["Yes", "No"]} name="2C2" />

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
            ]}
            other={true}
            name="2C3"
          />

          <Radio
            h3="Frequency of training on emergency care in a year?"
            CheckbobItems={[
              "Every Month",
              "Quarterly",
              "Annually",
            ]}
            other={true}
            name="2C4"
          />

          <InputField h3="When was the last training conducted?" placeholder="Type here" name="2C5" />

          <Buttons prev="/infrastructure-2" next="/logistics-2" />
        </div>
      </div>
    </section>
  )
}

export default Form2C