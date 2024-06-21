import React, { useState } from 'react'
import Checkbox from '../child-comp/Checkbox';
import SidePanel from './SidePanelHFAT2';
import Buttons from '../child-comp/Buttons';
import Radio from '../child-comp/Radio';
import InputField from '../child-comp/InputField';
import C1 from '../Tables/C1';
import setLocalStorage from '../setLocalStorage';
import { handleChange, turnOffbutton } from '../helpers';
import Heading from '../../Heading/Heading.jsx';

function Form2C() {
  turnOffbutton();

  var form2c = setLocalStorage("form2c", { H2C2: "", H2C3: [""], H2C4: "", H2C5: "" });
  const [form2C, setForm2C] = useState(JSON.parse(form2c));

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
    { Manpower: 'Other', Number: '', Availability: '', OnSite: '', OnCall: '' },
  ];



  return (
    <div>
      <Heading h2="Health Facility Assessment Tool 2: Community Health Centre"></Heading>
      <section>
        <SidePanel id={"3"} />
        <div className="siteInfo">

          <div className="formhdr">
            <div>
              <h3>
                2C. Human Resources
              </h3>
            </div>
          </div>


          <div className="formcontent">
            <h3>2C.1 : Which of the following manpower is available at the CHC?
              (Multiple answers possible also mention the number)</h3>
            <C1 columns={columns} initialRows={initialRows} tableName="H2C1" />

            <Radio h3="2C.2 : Whether training for emergency care management is being conducted for the staff in the institution?" CheckbobItems={["Yes", "No"]} name="H2C2"
              onClick={handleChange(setForm2C)} byDefault={form2C.H2C2} />

            <Checkbox
              h3="2C.3 : if Yes to 2C.2 , Which of the following emergency care trainings you have undergone?"
              CheckbobItems={[
                "Trauma & Accidental Injuries",
                "Burns",
                "Cardiac emergencies: acute chest pain, acute coronary syndrome (ACS)/ STEMI, Heart failure, Cardiac Arrest",
                "Stroke",
                "Acute Breathlessness",
                "Seizures",
                "Bites (Animal bite/snake bite/scorpion sting)",
                "Choking/foreign body ingestion",
                "Poisoning",
                "PPH",
                "Pre-Eclampsia",
                "Neonatal emergencies"
              ]}
              other={true}
              name="H2C3"
              setFunction={setForm2C} StateValue={form2C} array={form2C.H2C3}
            />

            <Radio
              h3="2C.4 : if Yes, Frequency of training on emergency care in a year?"
              CheckbobItems={[
                "Every Month",
                "Quarterly",
                "Half Yearly",
                "Annually",
                "Other (Specify)"
              ]}
              other={true}
              otherArray={[0,0,0,0,1]}
              name="H2C4" onClick={handleChange(setForm2C)} setter={setForm2C} byDefault={form2C.H2C4}
            />

            <InputField h3="2C.5 : When was the last training conducted?" placeholder="Type here" name="H2C5" value={form2C.H2C5} onChange={handleChange(setForm2C)} />

            <Buttons formName={"form2c"} formData={form2C} prevText="Previous" nextText="Next" prev="/infrastructure-2" next="/logistics-2" />
          </div>
        </div>
      </section>
    </div>
  )
}

export default Form2C