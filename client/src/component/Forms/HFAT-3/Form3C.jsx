import React, { useState } from 'react'
import Checkbox from '../child-comp/Checkbox';
import SidePanel from './SidePanelHFAT3';
import Buttons from '../child-comp/Buttons';
import Radio from '../child-comp/Radio';
import InputField from '../child-comp/InputField';
import C1 from './tables/C1';
import { turnOffbutton , handleChange } from '../helpers';
import setLocalStorage from '../setLocalStorage';


function Form3C() {
  turnOffbutton();
  var form3c = setLocalStorage("form3c",{H3C2 : "" , H3C3 : ""})
  const [form3C , setForm3C] = useState(JSON.parse(form3c))

  const columns = [
    { key: 'btn', label: 'Select Required', type: 'checkbox', options: ['Yes'] },
    { key: 'Manpower', label: 'Manpower', type: 'text' },
    { key: 'Number', label: 'Number', type: 'input' },
    { key: 'availability247', label: '24/7 Availability', type: 'radio', options: ['Yes', 'No'] },
    { key: 'onSiteAvailability', label: 'On-site Availability', type: 'radio', options: ['Yes', 'No'] },
    { key: 'onCallAvailability', label: 'On-call Availability', type: 'radio', options: ['Yes', 'No'] }
  ];

  const initialRows = [
    { btn: "", Manpower: 'MO MBBS', Number: '', availability247: '', onSiteAvailability: '', onCallAvailability: '' },
    { btn: "", Manpower: 'Specialist for Medicine', Number: '', availability247: '', onSiteAvailability: '', onCallAvailability: '' },
    { btn: "", Manpower: 'Specialist for Pediatrics', Number: '', availability247: '', onSiteAvailability: '', onCallAvailability: '' },
    { btn: "", Manpower: 'Specialist for Ophthalmology', Number: '', availability247: '', onSiteAvailability: '', onCallAvailability: '' },
    { btn: "", Manpower: 'Specialist Obstetrics & Gynecologist', Number: '', availability247: '', onSiteAvailability: '', onCallAvailability: '' },
    { btn: "", Manpower: 'Staff Nurses', Number: '', availability247: '', onSiteAvailability: '', onCallAvailability: '' },
    { btn: "", Manpower: 'Pharmacist', Number: '', availability247: '', onSiteAvailability: '', onCallAvailability: '' },
    { btn: "", Manpower: 'Lab Technician', Number: '', availability247: '', onSiteAvailability: '', onCallAvailability: '' },
    { btn: "", Manpower: 'Dressor', Number: '', availability247: '', onSiteAvailability: '', onCallAvailability: '' },
    { btn: "", Manpower: 'Data entry operator', Number: '', availability247: '', onSiteAvailability: '', onCallAvailability: '' },
    { btn: "", Manpower: 'Sanitation staff', Number: '', availability247: '', onSiteAvailability: '', onCallAvailability: '' },
    { btn: "", Manpower: 'Other (please specify): _______', Number: '', availability247: '', onSiteAvailability: '', onCallAvailability: '' },
  ]
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

          <Radio h3="Whether training for emergency care management is being conducted for the staff in the institution?" CheckbobItems={["Yes", "No"]} name="H3C2" onClick={handleChange(setForm3C)} byDefault={form3C.H3C2} />

          <InputField h3="When was the last training conducted?" placeholder="Type here" value={form3C.H3C3} name={"H3C3"} onChange={handleChange(setForm3C)} />

          <Buttons formName={"form3c"} formData={form3C} prev="/infrastructure-3" next="/logistics-3" />
        </div>
      </div>
    </section>
  )
}

export default Form3C