import React from 'react'
import SidePanel from './SidePanelHFAT3';
import Buttons from '../child-comp/Buttons';
import D2 from '../HFAT-2/tables/D2';


function FormD() {
    const columns = [
        { key: 'SrNo', label: 'Sr.No', type: 'text' },
        { key: 'Question', label: '24x7 availability of (with numbers and availability and functionality)', type: 'text' },
        { key: 'DistrictHospital', label: 'District Hospital', type: 'checkbox', options: ["Yes"] },
    ];

    const initialRows = [
        { SrNo: '1', Question: 'Do you have mobile bed for Resuscitation?', DistrictHospital: '' },
        { SrNo: '2', Question: 'Do you have crash cart (specialized cart for resuscitation)?', DistrictHospital: '' },
        { SrNo: '3', Question: 'Do you have Hard Cervical collar?', DistrictHospital: '' },
        { SrNo: '4', Question: 'Do you have Oxygen cylinder/central oxygen supply?', DistrictHospital: '' },
        { SrNo: '5', Question: 'Do you have suction machine?', DistrictHospital: '' },
        { SrNo: '6', Question: 'Do you have Multipara Monitor (To monitor Heart rate, BP, SPO2[Essential] ECG, Respiration Rate [Desirable] etc)?', DistrictHospital: '' },
        { SrNo: '7', Question: 'Do you have defibrillator with or without external pacer?', DistrictHospital: '' },
        { SrNo: '8', Question: 'Do you have Toothed Forceps, Kocher Forceps, Magill\'s forceps, Artery forceps?', DistrictHospital: '' },
        { SrNo: '9', Question: 'Do you have AMBU Bag for adult and Paediatric?', DistrictHospital: '' },
        { SrNo: '10', Question: 'Do you have basic airway equipment like oropharyngeal nasopharyngeal airway, LMA for adult and pediatric?', DistrictHospital: '' },
        { SrNo: '11', Question: 'Do you have advanced laryngoscope and endotracheal tube or other similar device?', DistrictHospital: '' },
        { SrNo: '12', Question: 'Do you have tourniquet?', DistrictHospital: '' },
        { SrNo: '13', Question: 'Do you have pelvic binder or bed sheets with clips?', DistrictHospital: '' },
        { SrNo: '14', Question: 'Do you have laryngoscope with all sized blades?', DistrictHospital: '' },
        { SrNo: '15', Question: 'Do you have Endotracheal Tubes of all sizes?', DistrictHospital: '' },
        { SrNo: '16', Question: 'Do you have Laryngeal Mask Airway (LMA)?', DistrictHospital: '' },
        { SrNo: '17', Question: 'Do you have Chest Tubes with Water seal drain?', DistrictHospital: '' },
        { SrNo: '18', Question: 'Do you have ECG machine?', DistrictHospital: '' },
        { SrNo: '19', Question: 'Do you have nebulizer?', DistrictHospital: '' },
        { SrNo: '20', Question: 'Do you have fluid warmer?', DistrictHospital: '' },
        { SrNo: '21', Question: 'Do you have Infusion pump and Syringe Drivers?', DistrictHospital: '' },
        { SrNo: '22', Question: 'Do you have spine board with sling and scotch tapes?', DistrictHospital: '' },
        { SrNo: '23', Question: 'Do you have splints for all types of fracture?', DistrictHospital: '' },
        { SrNo: '24', Question: 'Do you have non-invasive ventilators?', DistrictHospital: '' },
        { SrNo: '25', Question: 'Do you have invasive ventilators?', DistrictHospital: '' },
        { SrNo: '26', Question: 'Do you have incubators?', DistrictHospital: '' },
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
                    <h3>Which of the following essential emergency equipment is available at the DH/ Tertiary Care Hospital?
                        (Multiple answers possible)</h3>
                    <D2 columns={columns} initialRows={initialRows} />
                    <Buttons prev="/logistics-3" next="/emergencycareservices-3" />
                </div>
            </div>
        </section>
    )
}

export default FormD