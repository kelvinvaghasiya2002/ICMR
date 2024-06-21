import React from 'react'
import SidePanel from './SidePanelHFAT1';
import Buttons from '../child-comp/Buttons';
import Checkbox from '../child-comp/Checkbox';
import { useState } from 'react';
import setLocalStorage from '../setLocalStorage';
import { turnOffbutton } from '../helpers';
import Heading from '../../Heading/Heading';


function FormD2() {
    turnOffbutton();
    var formd1 = setLocalStorage("formd1",
        { H1D2: [] })

    const [formD1, setFormD1] = useState(JSON.parse(formd1));

    return (
        <div>
            <Heading h2="Health Facility Assessment Tool 1: District Hospital/Tertiary Care (Public or Private)"></Heading>
        <section>
            <SidePanel id={"4"} />
            <div className="siteInfo">

                <div className="formhdr">
                    <div>
                        <h3>
                            1D. Logistics (Drugs/ Consumables/ Equipment)
                        </h3>
                    </div>
                </div>

                <div className="formcontent">
                    <h3>1D.2 : Which of the following essential emergency equipment is available at the DH/ Tertiary Care Hospital?
                        (Multiple answers possible)</h3>

                    <h3>24x7 availability of (with numbers and availability and functionality):</h3>

                    <Checkbox setFunction={setFormD1} StateValue={formD1} array={formD1.H1D2} name="H1D2" CheckbobItems={["Mobile Bed for Resuscitation", "Crash Cart (specialized cart for resuscitation)", "Hard Cervical Collar", "Oxygen Cylinder/Central Oxygen Supply", "Suction Machine", "Multipara Monitor (To monitor Heart rate, BP, SPO2[Essential] ECG, Respiration Rate [Desirable] etc)", "Defibrillator with or without external Pacer", "Toothed Forceps, Kocher Forceps, Magill\'s forceps, Artery forceps", "AMBU Bag for Adult and Paediatric", "Basic airway equipment like oropharyngeal nasopharyngeal airway, LMA for Adult and Pediatric", "Advanced laryngoscope and endotracheal tube or other similar device", "Tourniquet", "Pelvic binder or bed sheets with clips", "Laryngoscope with all sized Blades", "Endotracheal Tubes of all Sizes", "Laryngeal Mask Airway (LMA)", "Chest Tubes with Water Seal Drain", "ECG Machine", "Nebulizer", "Fluid Warmer", "Infusion Pump and Syringe Drivers", "Spine Board with Sling and Scotch Tapes", "Splints for all types of Fracture", "Non-invasive Ventilators", "Invasive Ventilators", "Incubators"]} />
                    
                    <Buttons formData={formD1} formName="formd1" prevText="Previous" nextText="Next" prev="/logisticsdrugsconsumablesequipment-1" next="/emergencycareservices" />
                </div>
            </div>
        </section>
        </div>
    )
}

export default FormD2