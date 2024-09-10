import React, { useState, useEffect } from 'react'
import SidePanel from './SidePanelHFAT3';
import Buttons from '../child-comp/Buttons';
import setLocalStorage from '../setLocalStorage';
import Checkbox from '../child-comp/Checkbox';
import Heading from '../../Heading/Heading.jsx';
import { turnOffbutton } from '../helpers.js';
import OverlayCard from '../OverlayCard.jsx';
import { validateCheckBox, validateRequired } from '../fv.js';


function FormD2() {
    turnOffbutton();
    var form3d2 = setLocalStorage("form3d2", { H3D2: [] });
    const [form3D2, setForm3D2] = useState(JSON.parse(form3d2));
    const [errors, setErrors] = useState({});
    const [showOverlay, setShowOverlay] = useState(false);

    const [isSidebarVisible, setSidebarVisible] = useState(
        window.innerWidth > 1024
      );
    
      const toggleSidebar = () => {
        setSidebarVisible(!isSidebarVisible);
      };
      const handleResize = () => {
        if (window.innerWidth >= 1025) {
          setSidebarVisible(true);
        }
      };
    
      useEffect(() => {
        window.addEventListener("resize", handleResize);
        // AOS.init({ duration: 2000 });
        
        return () => {
          window.removeEventListener("resize", handleResize);
        };
      }, []);

    useEffect(() => {
        const { isValid, missingFields } = isFormValid();
        setShowOverlay(!isValid);
        if (!isValid) {
            const newErrors = {};
            missingFields.forEach(field => {
                console.log(field + "field");
                if (Array.isArray(form3D2[field])) {
                    console.log(form3D2[field]);
                    newErrors[field] = validateCheckBox(form3D2[field]);
                } else {
                    newErrors[field] = validateRequired(form3D2[field]);
                }
            });
            setErrors(newErrors);
        } else {
            setErrors({});
        }
    }, [form3D2]);

    const isFormValid = () => {
        const requiredFields = ['H3D2'];
        const missingFields = requiredFields.filter(field => {
            if (Array.isArray(form3D2[field])) {
                return form3D2[field].every(item => item === '' || (typeof item === 'string' && item.trim() === ''));
            } else {
                return !form3D2[field] || (typeof form3D2[field] === 'string' && form3D2[field].trim() === '');
            }
        });
        return { isValid: missingFields.length === 0, missingFields };
    };

    useEffect(() => {
        const { isValid, missingFields } = isFormValid();
        setShowOverlay(!isValid);
        if (!isValid) {
            const newErrors = {};
            missingFields.forEach(field => {
                newErrors[field] = 'This field is required';
            });
            setErrors(newErrors);
        } else {
            setErrors({});
        }
    }, [form3D2]);


    return (
        <div>
            <div className="header">
                <div className="burger-menu" onClick={toggleSidebar}>
                &#9776;
                </div>
                <Heading h2="Health Facility Assessment Tool 3: Primary Health Centre"></Heading>
            </div>
            <section className="form-main">
                {isSidebarVisible && (
                <>
                    <SidePanel id={"4"} />
                    <div className="grayedover" onClick={toggleSidebar}></div>
                </>
                )}
                <div className="siteInfo">

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

                        <div className="button-container">

                            <Buttons formName={"form3d2"} formData={form3D2} prevText="Previous" nextText="Save & Next" prev="/logistics-3" next="/emergencycareservices-3" />
                            <OverlayCard
                                isVisible={showOverlay}
                                message="(Please fill all required fields to proceed)"
                            />
                        </div>

                    </div>
                </div>
            </section>
        </div>
    )
}

export default FormD2