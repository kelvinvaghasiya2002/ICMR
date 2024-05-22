import React, { useState } from 'react'
import Checkbox from '../child-comp/Checkbox';
import SidePanel from './SidePanelHFAT1';
import Buttons from '../child-comp/Buttons';
import Radio from '../child-comp/Radio';
import InputField from '../child-comp/InputField';
import E1 from './tables/E1';

function FormE() {

  const columns =[
    { key: 'Number1', label: 'Adult (> 18Years)', type: 'input'},
    { key: 'Number2', label: 'Pediatric', type: 'input' },
    { key: 'Number3', label: 'Brought dead', type: 'input' },
    { key: 'Number4', label: 'Death after arrival', type: 'input' },
    { key: 'Number5', label: 'MLC', type: 'input' },
  ]
  const initialRows = [
    { Number1: '', Number2: '', Number3: '', Number4: '', Number5:''},
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
        <E1 columns={columns} initialRows={initialRows}/>
        <h1>table</h1>
        <Checkbox
          h3="Which of these emergency care services does your facility provide? (Select all that apply)"
          CheckbobItems={[
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
            "Other (Specify)________"
          ]}
          name="E3"
        />

        <Checkbox
          h3="Which of these emergency diagnostic facilities are provided at DH/ Tertiary Care Hospital?"
          CheckbobItems={[
            "Radiology-CT",
            "Radiology-ultrasound",
            "Radiology-MRI",
            "Radiology Services are functional 24X7",
            "Point of care lab -ABG, Troponin",
            "Availability of Functional ECG Services",
            "Other (Specify)______________"
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