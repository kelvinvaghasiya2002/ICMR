import React from 'react'
import SidePanel from './SidePanelHFAT3';
import Buttons from '../child-comp/Buttons';
import D1 from './tables/D1';

function FormD() {
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
    <section>
      <SidePanel id={"4"} />
      <div className="siteInfo">

        <div className="formhdr">
          <div>
            <h3>
              Logistics (Drugs/ Consumables/ Equipment)
            </h3>
          </div>
        </div>

        <div className="formcontent">
          <h3>Which of the following essential emergency drugs are available at the DH/ Tertiary Care Hospital?
            (Multiple answers possible)?</h3>
          <D1 columns={columns} initialRows={initialRows} />

          <Buttons prev="/humanresources-3" next="/logistics-3-1" />

        </div>
      </div>
    </section>
  )
}

export default FormD