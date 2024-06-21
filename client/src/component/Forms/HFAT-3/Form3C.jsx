import React, { useState } from 'react'
import Checkbox from '../child-comp/Checkbox';
import SidePanel from './SidePanelHFAT3';
import Buttons from '../child-comp/Buttons';
import Radio from '../child-comp/Radio';
import InputField from '../child-comp/InputField';
import C1 from '../Tables/C1.jsx'
import { turnOffbutton, handleChange } from '../helpers';
import setLocalStorage from '../setLocalStorage';
import Heading from '../../Heading/Heading.jsx';


function Form3C() {
  turnOffbutton();
  var form3c = setLocalStorage("form3c", { H3C2: "", H3C3: [""], H3C4: "", H3C5: "" })
  const [form3C, setForm3C] = useState(JSON.parse(form3c))

  const columns = [
    { key: 'Manpower', label: 'Manpower', type: 'text' },
    { key: 'Number', label: 'Number', type: 'input' },
    { key: 'availability247', label: '24/7 Availability', type: 'radio', options: ['Yes', 'No'] },
    { key: 'onSiteAvailability', label: 'On-site Availability', type: 'radio', options: ['Yes', 'No'] },
    { key: 'onCallAvailability', label: 'On-call Availability', type: 'radio', options: ['Yes', 'No'] }
  ];

  const initialRows = [
    { Manpower: 'MO MBBS', Number: '', availability247: '', onSiteAvailability: '', onCallAvailability: '' },
    { Manpower: 'Specialist for Medicine*', Number: '', availability247: '', onSiteAvailability: '', onCallAvailability: '' },
    { Manpower: 'Specialist for Pediatrics*', Number: '', availability247: '', onSiteAvailability: '', onCallAvailability: '' },
    { Manpower: 'Specialist for Ophthalmology*', Number: '', availability247: '', onSiteAvailability: '', onCallAvailability: '' },
    { Manpower: 'Specialist Obstetrics & Gynecologist*', Number: '', availability247: '', onSiteAvailability: '', onCallAvailability: '' },
    { Manpower: 'Staff Nurses', Number: '', availability247: '', onSiteAvailability: '', onCallAvailability: '' },
    { Manpower: 'Pharmacist', Number: '', availability247: '', onSiteAvailability: '', onCallAvailability: '' },
    { Manpower: 'Lab Technician', Number: '', availability247: '', onSiteAvailability: '', onCallAvailability: '' },
    { Manpower: 'Dressor', Number: '', availability247: '', onSiteAvailability: '', onCallAvailability: '' },
    { Manpower: 'Data entry operator', Number: '', availability247: '', onSiteAvailability: '', onCallAvailability: '' },
    { Manpower: 'Sanitation staff', Number: '', availability247: '', onSiteAvailability: '', onCallAvailability: '' },
    { Manpower: 'Other', Number: '', availability247: '', onSiteAvailability: '', onCallAvailability: '' },
  ]
  return (
    <div>
      <Heading h2="Health Facility Assessment Tool 3: Primary Health Centre"></Heading>
      <section>
        <SidePanel id={"3"} />
        <div className="siteInfo">

          <div className="formhdr">
            <div>
              <h3>
              3C. Human Resources
              </h3>
            </div>
          </div>

          <div className="formcontent">
            <h3>3C.1 : Tick the manpower available in your emergency department and provide numbers</h3>
            <C1 columns={columns} initialRows={initialRows} tableName={"H3C1"} />
            <span style={{fontSize : "1vw"}}>*1 Specialists are on rotation basis at polyclinics as per IPHS guideline for PHCs.</span>

            <Radio h3="3C.2 : Whether training for emergency care management is being conducted for the staff in the institution?" CheckbobItems={["Yes", "No"]} name="H3C2" onClick={handleChange(setForm3C)} byDefault={form3C.H3C2} />

            <Checkbox CheckbobItems={["Trauma & Accidental Injuries",
              "Burns",
              "Cardiac emergencies: acute chest pain, acute coronary syndrome (ACS)/ STEMI, Heart failure, Cardiac Arrest",
              "Stroke",
              "Acute Breathlessness",
              "Seizures",
              " Bites (Animal bite/snake bite/scorpion sting)",
              "Choking/foreign body ingestion",
              "Poisoning",
              "PPH",
              "Pre-Eclampsia",
              "Neonatal emergencies"]} name="H3C3" h3="3C.3 : If Yes to 3C.2, Which of the following emergency care trainings you have undergone?" other={true} setFunction={setForm3C} StateValue={form3C} array={form3C.H3C3} />

            <Radio CheckbobItems={["Every Month",
              "Quarterly",
              "Half Yearly",
              "Annually",
              "Others (Specify)"]} otherArray={[0,0,0,0,1]} name="H3C4" h3="3C.4 : If Yes, Frequency of training on emergency care in a year?" other={true} byDefault={form3C.H3C4} onClick={handleChange(setForm3C)} />

            <InputField h3="3C.5 : When was the last training conducted?" placeholder="Type here" value={form3C.H3C5} name={"H3C5"} onChange={handleChange(setForm3C)} />

            <Buttons formName={"form3c"} formData={form3C} prevText="Previous" nextText="Next" prev="/infrastructure-3" next="/logistics-3" />
          </div>
        </div>
      </section>
    </div>
  )
}

export default Form3C