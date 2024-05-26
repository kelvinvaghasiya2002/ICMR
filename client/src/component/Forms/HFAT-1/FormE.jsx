import React, { useState } from 'react'
import Checkbox from '../child-comp/Checkbox';
import SidePanel from './SidePanelHFAT1';
import Buttons from '../child-comp/Buttons';
import Radio from '../child-comp/Radio';
import InputField from '../child-comp/InputField';
import E1 from './tables/E1';
import E2 from './tables/E2';
import { turnOffbutton } from '../helpers';
import CheckBoxOtherSpecify from '../child-comp/CheckBoxOtherSpecify';

function FormE() {

  turnOffbutton();

  const columns1 =[
    { key: 'Number1', label: 'Adult (> 18Years)', type: 'input'},
    { key: 'Number2', label: 'Pediatric', type: 'input' },
    { key: 'Number3', label: 'Brought dead', type: 'input' },
    { key: 'Number4', label: 'Death after arrival', type: 'input' },
    { key: 'Number5', label: 'MLC', type: 'input' },
  ]
  const initialRows1 = [
    { Number1: '', Number2: '', Number3: '', Number4: '', Number5:''},
];

const columns2 = [
  { key: 'Type', label: 'Type', type: 'text' },
  { key: 'Attended', label: 'Attended (NA: data unavailable)', type: 'input' },
  { key: 'Death', label: 'Death (NA: data unavailable)', type: 'input' },
];

// Define the initial rows
const initialRows2 = [
  { Type: 'MI', Attended: '', Death: '' },
  { Type: 'Stroke', Attended: '', Death: '' },
  { Type: 'Trauma & Burns', Attended: '', Death: '' },
  { Type: 'Poisoning', Attended: '', Death: '' },
  { Type: 'Snake Bite', Attended: '', Death: '' },
  { Type: 'Maternal Emergencies-PPH', Attended: '', Death: '' },
  { Type: 'Maternal Emergencies- Eclampsia', Attended: '', Death: '' },
  { Type: 'Neonatal Emergencies', Attended: '', Death: '' },
  { Type: 'Acute Respiratory Illness', Attended: '', Death: '' },
];
  return (<section>
    <SidePanel id={"5"} />
    <div className="siteInfo">

      <div className="formhdr">
        <div>
          <h3>
            Emergency Care Services
          </h3>
        </div>
      </div>

      <div className="formcontent">
        <h3>Numbers of Patients who Visited ED in Last One Month</h3>
        <E1 columns={columns1} initialRows={initialRows1}/>
        <h3>Numbers of Patients Attended in ED and Deaths in Last One Year (Jan - Dec 2023)</h3>
        <E2 columns={columns2} initialRows={initialRows2}/>
        <CheckBoxOtherSpecify
          h3="Which of these emergency care services does your facility provide? (Select all that apply)"
          CheckboxItems={[
            "Emergency operative services for trauma patients",
            "Emergency operative services for non-trauma (surgical, orthopedics etc.) patients",
            "Emergency operative services for obstetrics patients",
            "Elective operative services for orthopedic patients",
            "Elective operative services for neurosurgical patients",
            "Common intensive care services (ICU)",
            "Common high dependency Unit (HDU)",
            "Pediatrics ICU",
            "Neonatal ICU",
            "Neurosurgery ICU",
            "Cardiac ICU",
            "Cardiac Cath Lab",
            "Intervention Radiology",
            "Intervention neuroradiology service with DSA",
            "Stroke unit",
            "Tele-Medicine facility",
            "Other (Specify)"
          ]}
          name="E3"
        />

        <CheckBoxOtherSpecify
          h3="Which of these emergency diagnostic facilities are provided at DH/ Tertiary Care Hospital?"
          CheckboxItems={[
            "Radiology-CT",
            "Radiology-ultrasound",
            "Radiology-MRI",
            "Radiology Services are functional 24X7",
            "Point of care lab -ABG, Troponin",
            "Availability of Functional ECG Services",
            "Other (Specify)"
          ]}
          name="E4"
        />


        <Buttons prev="/logisticsdrugsconsumablesequipment" next="/informationsystem" />
      </div>
    </div>
  </section>
  )
}

export default FormE