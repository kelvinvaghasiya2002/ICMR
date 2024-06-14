import React, { useState } from 'react'
import SidePanel from './SidePanelHFAT2';
import Buttons from '../child-comp/Buttons';
import Checkbox from '../child-comp/Checkbox';
import setLocalStorage from '../setLocalStorage';
import { turnOffbutton } from '../helpers';
import Heading from '../../Heading/Heading.jsx';


function Form2D2() {
    turnOffbutton();
    var form2d2 = setLocalStorage("form2d2", { H2D2: [] });
    const [form2D2, setForm2D2] = useState(JSON.parse(form2d2));


    return (
        <div>
            <Heading h2="HFAT: CHC"></Heading>
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

                    <Checkbox CheckbobItems={['Do you have mobile bed for Resuscitation?', 'Do you have crash cart (specialized cart for resuscitation)?', 'Do you have Hard Cervical collar?', 'Do you have Oxygen cylinder/central oxygen supply?', 'Do you have suction machine?', 'Do you have Multipara Monitor (To monitor Heart rate, BP, SPO2[Essential] ECG, Respiration Rate [Desirable] etc)?', 'Do you have defibrillator with or without external pacer?', 'Do you have Toothed Forceps, Kocher Forceps, Magill\'s forceps, Artery forceps?', 'Do you have AMBU Bag for adult and Paediatric?', 'Do you have basic airway equipment like oropharyngeal nasopharyngeal airway, LMA for adult and pediatric?', 'Do you have advanced laryngoscope and endotracheal tube or other similar device?', 'Do you have tourniquet?', 'Do you have pelvic binder or bed sheets with clips?', 'Do you have laryngoscope with all sized blades?', 'Do you have Endotracheal Tubes of all sizes?', 'Do you have Laryngeal Mask Airway (LMA)?', 'Do you have Chest Tubes with Water seal drain?', 'Do you have ECG machine?', 'Do you have nebulizer?', 'Do you have fluid warmer?', 'Do you have Infusion pump and Syringe Drivers?', 'Do you have spine board with sling and scotch tapes?', 'Do you have splints for all types of fracture?', 'Do you have non-invasive ventilators?', 'Do you have invasive ventilators?', 'Do you have incubators?']
                    } name={"H2D2"} setFunction={setForm2D2} StateValue={form2D2} array={form2D2.H2D2} />

                    <Buttons formName={"form2d2"} formData={form2D2} prev="/logistics-2" next="/emergencycareservices-2" />
                </div>
            </div>
        </section>
        </div>
    )
}

export default Form2D2