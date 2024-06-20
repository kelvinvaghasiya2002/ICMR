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
            <Heading h2="Health Facility Assessment Tool 2: Community Health Centre"></Heading>
        <section>
            <SidePanel id={"4"} />
            <div className="siteInfo">

                <div className="formhdr">
                    <div>
                        <h3>
                            2D. Logistics (Drugs/ Consumables/ Equipment)
                        </h3>
                    </div>
                </div>

                <div className="formcontent">
                    <h3>2D.2 : Which of the following emergency equipment is available at the CHC? (Multiple answers possible)</h3>

                    <Checkbox CheckbobItems={['Mobile bed for Resuscitation', 'Crash Cart (specialized cart for resuscitation)', 'Hard Cervical Collar', 'Oxygen Cylinder/Central Oxygen Supply', 'Suction Machine', 'Multipara Monitor (To monitor Heart rate, BP, SPO2[Essential] ECG, Respiration Rate [Desirable] etc)', 'Defibrillator with or without external pacer', 'Toothed Forceps, Kocher Forceps, Magill\'s forceps, Artery forceps', 'AMBU Bag for adult and Paediatric', 'Basic airway equipment like oropharyngeal nasopharyngeal airway, LMA for adult and pediatric', 'Advanced laryngoscope and endotracheal tube or other similar device', 'Tourniquet', 'Pelvic binder or bed sheets with clips', 'Laryngoscope with all sized blades', 'Endotracheal Tubes of all sizes', 'Laryngeal Mask Airway (LMA)', 'Chest Tubes with Water seal drain', 'ECG Machine', 'Nebulizer', 'Fluid Warmer', 'Infusion pump and Syringe Drivers', 'Spine board with sling and scotch tapes', 'Splints for all types of fracture', 'Non-invasive Ventilators', 'Invasive Ventilators', 'Incubators']
                    } name={"H2D2"} setFunction={setForm2D2} StateValue={form2D2} array={form2D2.H2D2} />

                    <Buttons formName={"form2d2"} formData={form2D2} prev="/logistics-2" next="/emergencycareservices-2" />
                </div>
            </div>
        </section>
        </div>
    )
}

export default Form2D2