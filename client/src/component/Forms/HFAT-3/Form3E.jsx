import React from 'react'
import SidePanel from './SidePanelHFAT3';
import Buttons from '../child-comp/Buttons';
import Radio from '../child-comp/Radio';
import E1 from '../HFAT-2/tables/E1';
import E2 from '../HFAT-2/tables/E2';
import { turnOffbutton } from '../helpers';

function Form3E() {
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
  return (
    <section>
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

        <Radio h3="Which of the following emergency services are delivered at the PHC? " CheckbobItems={["Triage", "Resuscitation","Medico Legal Reporting"]}  />

      <Buttons prev="/logistics-3-1" next="/informationsystem-3" />
      </div>
    </div>
  </section>
  )
}

export default Form3E