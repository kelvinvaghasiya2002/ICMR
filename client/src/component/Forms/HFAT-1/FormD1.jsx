import React, { useEffect, useState } from 'react';
import SidePanel from './SidePanelHFAT1';
import Buttons from '../child-comp/Buttons';
import Checkbox from '../child-comp/Checkbox';
import setLocalStorage from '../setLocalStorage';
import { turnOffbutton } from '../helpers';
import Heading from '../../Heading/Heading';
import AOS from 'aos';
import 'aos/dist/aos.css';
import OverlayCard from '../OverlayCard.jsx';
import { validateCheckBox } from '../fv.js';

function FormD2() {
    // --toggle--
    const [isSidebarVisible, setSidebarVisible] = useState(window.innerWidth > 1024);
    const toggleSidebar = () => {
        setSidebarVisible(!isSidebarVisible);
    };
    const handleResize = () => {
        if (window.innerWidth >= 1025) {
            setSidebarVisible(true);
        }
    };

    // useEffect(() => {
    //   window.addEventListener('resize', handleResize);
    //   return () => {
    //     window.removeEventListener('resize', handleResize);
    //   };
    // }, []);
    // --toggle end--

    useEffect(() => {
        window.addEventListener('resize', handleResize);
        AOS.init({ duration: 2000 })
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    turnOffbutton();

    var formd1 = setLocalStorage("formd1", { H1D2: [""] });

    const [formD1, setFormD1] = useState(JSON.parse(formd1));
    const [errors, setErrors] = useState({});
    const [showOverlay, setShowOverlay] = useState(false);


    useEffect(() => {
        const { isValid, missingFields } = isFormValid();
        setShowOverlay(!isValid);
        if (!isValid) {
            const newErrors = {};
            missingFields.forEach(field => {
                console.log(field + "field");
                if (Array.isArray(formD1[field])) {
                    console.log(formD1[field]);
                    newErrors[field] = validateCheckBox(formD1[field]);
                } else {
                    newErrors[field] = validateRequired(formD1[field]);
                }
            });
            setErrors(newErrors);
        } else {
            setErrors({});
        }
    }, [formD1]);

    const isFormValid = () => {
        const requiredFields = ['H1D2'];

        const missingFields = requiredFields.filter(field => {
            if (Array.isArray(formD1[field])) {
                return formD1[field].every(item => item === '' || (typeof item === 'string' && item.trim() === ''));
            } else {
                return !formD1[field] || (typeof formD1[field] === 'string' && formD1[field].trim() === '');
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
    }, [formD1]);


    return (
        <div>
            <div className="header">
                <div className="burger-menu" onClick={toggleSidebar}>
                    &#9776;
                </div>
                <Heading h2="Health Facility Assessment Tool 1: District Hospital/Tertiary Care (Public or Private)"></Heading>
            </div>
            <section className="form-main">
                {isSidebarVisible && (
                    <>
                        <SidePanel id={"4"} />
                        <div className="grayedover" onClick={toggleSidebar}></div>
                    </>
                )}
                {/* <SidePanel id={"4"} /> */}
                <div className="siteInfo" data-aos="fade-left">
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

                        <Checkbox
                            setFunction={setFormD1}
                            StateValue={formD1}
                            array={formD1.H1D2}
                            name="H1D2"
                            CheckbobItems={["Mobile Bed for Resuscitation", "Crash Cart (specialized cart for resuscitation)", "Hard Cervical Collar", "Oxygen Cylinder/Central Oxygen Supply", "Suction Machine", "Multipara Monitor (To monitor Heart rate, BP, SPO2[Essential] ECG, Respiration Rate [Desirable] etc)", "Defibrillator with or without external Pacer", "Toothed Forceps, Kocher Forceps, Magill's forceps, Artery forceps", "AMBU Bag for Adult and Paediatric", "Basic airway equipment like oropharyngeal nasopharyngeal airway, LMA for Adult and Pediatric", "Advanced laryngoscope and endotracheal tube or other similar device", "Tourniquet", "Pelvic binder or bed sheets with clips", "Laryngoscope with all sized Blades", "Endotracheal Tubes of all Sizes", "Laryngeal Mask Airway (LMA)", "Chest Tubes with Water Seal Drain", "ECG Machine", "Nebulizer", "Fluid Warmer", "Infusion Pump and Syringe Drivers", "Spine Board with Sling and Scotch Tapes", "Splints for all types of Fracture", "Non-invasive Ventilators", "Invasive Ventilators", "Incubators"]}
                            required={true}
                            errorMsg="Select at least one equipment"
                            other={true}
                        />

                        <div className="button-container">
                            <Buttons
                                formName="formd1"
                                formData={formD1}
                                prevText="Previous"
                                nextText="Save & Next"
                                prev="/logisticsdrugsconsumablesequipment-1"
                                next="/emergencycareservices"
                                formType="hfat1"
                            />

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

export default FormD2;
