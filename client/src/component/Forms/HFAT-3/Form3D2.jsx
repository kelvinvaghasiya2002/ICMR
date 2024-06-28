import React, { useState,useEffect } from 'react'
import SidePanel from './SidePanelHFAT3';
import Buttons from '../child-comp/Buttons';
import setLocalStorage from '../setLocalStorage';
import Checkbox from '../child-comp/Checkbox';
import Heading from '../../Heading/Heading.jsx';
import { turnOffbutton } from '../helpers.js';
import AOS from 'aos'
import 'aos/dist/aos.css'

function FormD2() {
    useEffect(()=> {
        AOS.init({duration:2000})
    }, []);
    turnOffbutton();
    var form3d2 = setLocalStorage("form3d2", { H3D2: [] });
    const [form3D2, setForm3D2] = useState(JSON.parse(form3d2));

    return (
        <div>
            <Heading h2="Health Facility Assessment Tool 3: Primary Health Centre"></Heading>
        <section>
            <SidePanel id={"4"} />
            <div className="siteInfo" data-aos="fade-left">

                <div className="formhdr">
                    <div>
                        <h3>
                        3D. Logistics (Drugs/ Consumables/ Equipment)
                        </h3>
                    </div>
                </div>

                <div className="formcontent">
                    <h3>3D.2 : Which of the following emergency equipment is available at the PHC? (Multiple answers possible)</h3>

                    <Checkbox name={"H3D2"} setFunction={setForm3D2} StateValue={form3D2} array={form3D2.H3D2} CheckbobItems={[
                        "Mobile bed for Resuscitation",
                        "Crash Cart (Specialized Cart for Resuscitation)",
                        "Hard Cervical Collar",
                        "Oxygen Cylinder/Central Oxygen Supply",
                        "Suction Machine",
                        "Multipara Monitor (To monitor Heart rate, BP, SPO2[Essential] ECG, Respiration Rate [Desirable] etc)",
                        "Defibrillator with or without External Pacer",
                        "Toothed Forceps, Kocher Forceps, Magill's forceps, Artery forceps",
                        "AMBU Bag for Adult and Paediatric",
                        "Basic airway equipment like oropharyngeal nasopharyngeal airway, LMA for adult and pediatric",
                        "Advanced Laryngoscope and Endotracheal Tube or Other Similar Device",
                        "Tourniquet",
                        "Pelvic Binder or Bed Sheets with Clips",
                        "Laryngoscope with all sized Blades",
                        "Endotracheal Tubes of all sizes",
                        "Laryngeal Mask Airway (LMA)",
                        "Chest Tubes with Water seal drain",
                        "ECG Machine",
                        "Nebulizer",
                        "Fluid Warmer",
                        "Infusion Pump and Syringe Drivers",
                        "Spine Board with Sling and Scotch Tapes",
                        "Splints for all types of Fracture",
                        "Non-invasive Ventilators",
                        "Invasive Ventilators",
                        "Incubators"
                    ]
                    } />

                    <Buttons formName={"form3d2"} formData={form3D2} prevText="Previous" nextText="Save & Next" prev="/logistics-3" next="/emergencycareservices-3" />

                </div>
            </div>
        </section>
        </div>
    )
}

export default FormD2