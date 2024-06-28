import React, { useState , useEffect } from 'react'
import SidePanel from './SidePanelHFAT2';
import Buttons from '../child-comp/Buttons';
import Checkbox from '../child-comp/Checkbox';
import setLocalStorage from '../setLocalStorage';
import { turnOffbutton } from '../helpers';
import Heading from '../../Heading/Heading.jsx';
import AOS from 'aos'
import 'aos/dist/aos.css'

function Form2D() {
  useEffect(()=> {
    AOS.init({duration:2000})
}, []);

turnOffbutton();
  var form2d = setLocalStorage("form2d",
  {
    H2D1: []
  })

 const [form2D, setForm2D] = useState(JSON.parse(form2d));

  const columns = [
    { key: 'SrNo', label: 'Sr.No', type: 'text' },
    { key: 'DrugName', label: 'Drug Name', type: 'text' },
    { key: 'DistrictHospital', label: 'District Hospital', type: 'checkbox', options: ['Yes'] },
  ];

  const initialRows = [
    { SrNo: '1', DrugName: 'Oxygen medicinal gas', DistrictHospital: "" },
    { SrNo: '2', DrugName: 'Atropine', DistrictHospital: '' },
    { SrNo: '3', DrugName: 'Diazepam/Lorazepam', DistrictHospital: '' },
    { SrNo: '4', DrugName: 'Adrenaline', DistrictHospital: '' },
    { SrNo: '5', DrugName: 'Charcoal activated', DistrictHospital: '' },
    { SrNo: '6', DrugName: 'Antisnake venom', DistrictHospital: '' },
    { SrNo: '7', DrugName: 'Pralidoxime (PAM)', DistrictHospital: '' },
    { SrNo: '8', DrugName: 'Magnesium sulphate', DistrictHospital: '' },
    { SrNo: '9', DrugName: 'Tetanus immunoglobulin', DistrictHospital: '' },
    { SrNo: '10', DrugName: 'Neostigmine', DistrictHospital: '' },
    { SrNo: '11', DrugName: 'Aspirin', DistrictHospital: '' },
    { SrNo: '12', DrugName: 'Clopidogrel', DistrictHospital: '' },
    { SrNo: '13', DrugName: 'Atorvastatin', DistrictHospital: '' },
    { SrNo: '14', DrugName: 'Misoprostol', DistrictHospital: '' },
    { SrNo: '15', DrugName: 'Labetalol IV', DistrictHospital: '' },
    { SrNo: '16', DrugName: 'Phenobarbitone', DistrictHospital: '' },
    { SrNo: '17', DrugName: 'Phenytoin (inj)', DistrictHospital: '' },
    { SrNo: '18', DrugName: 'Plasma volume expander', DistrictHospital: '' },
    { SrNo: '19', DrugName: '3% Saline', DistrictHospital: '' },
    { SrNo: '20', DrugName: 'Dobutamine', DistrictHospital: '' },
    { SrNo: '21', DrugName: 'Streptokinase', DistrictHospital: '' },
    { SrNo: '22', DrugName: 'Tenecteplase', DistrictHospital: '' },
    { SrNo: '23', DrugName: 'Oxytocin', DistrictHospital: '' },
    { SrNo: '24', DrugName: 'Salbutamol sulphate', DistrictHospital: '' },
    { SrNo: '25', DrugName: 'Glucose/ 25 % dextrose', DistrictHospital: '' },
    { SrNo: '26', DrugName: 'Tranexamic acid', DistrictHospital: '' },
    { SrNo: '27', DrugName: 'tPA IV', DistrictHospital: '' },
    { SrNo: '28', DrugName: 'Methergine', DistrictHospital: '' },
    { SrNo: '29', DrugName: 'Carboprost', DistrictHospital: '' },
  ];

  return (
    <div>
      <Heading h2="Health Facility Assessment Tool 2: Community Health Centre"></Heading>
    <section>
      <SidePanel id={"4"} />
      <div className="siteInfo" data-aos="fade-left">

        <div className="formhdr">
          <div>
            <h3>
              2D. Logistics (Drugs/ Consumables/ Equipment)
            </h3>
          </div>
        </div>

        <div className="formcontent">
          <h3>2D.1 : Which of the following emergency drugs are available at the CHC? (Multiple answers possible)? </h3>

          <h3>Drug Name:</h3>
          <Checkbox setFunction={setForm2D} StateValue={form2D} array={form2D.H2D1} name="H2D1" CheckbobItems={["Oxygen medicinal gas","Atropine","Diazepam/Lorazepam","Adrenaline","Charcoal activated","Antisnake venom","Pralidoxime (PAM)","Magnesium sulphate","Tetanus immunoglobulin","Neostigmine","Aspirin","Clopidogrel","Atorvastatin","Misoprostol","Labetalol IV","Phenobarbitone","Phenytoin (inj)","Plasma volume expander","3% Saline","Dobutamine","Streptokinase","Tenecteplase","Oxytocin","Salbutamol sulphate","Glucose/ 25 % dextrose","Tranexamic acid","tPA IV","Methergine","Carboprost"]} />

          <Buttons formData={form2D} formName="form2d" prevText="Previous" nextText="Save & Next" prev="/humanresources-2" next="/logistics-2-1" />

        </div>
      </div>
    </section>
    </div>
  )
}

export default Form2D