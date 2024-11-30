import React, { useState, useEffect } from 'react';
import Checkbox from '../child-comp/Checkbox';
import SidePanel from './SidePanelHFAT2';
import Buttons from '../child-comp/Buttons';
import E1 from '../Tables/E1';
import E2 from '../Tables/E2';
import setLocalStorage from '../setLocalStorage';
import { turnOffbutton } from '../helpers';
import Heading from '../../Heading/Heading.jsx';
import AOS from 'aos';
import 'aos/dist/aos.css';
import OverlayCard from '../OverlayCard.jsx';
import { validateCheckBox } from '../fv.js';

function Form2E() {

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
        AOS.init({ duration: 2000 });
        
        return () => {
          window.removeEventListener("resize", handleResize);
        };
      }, []);

    // useEffect(() => {
    //     AOS.init({ duration: 2000 });
    // }, []);

    var form2e = setLocalStorage("form2e", { H2E3: [] });
    const [form2E, setForm2E] = useState(JSON.parse(form2e));
    const [errors, setErrors] = useState({});
    const [showOverlay, setShowOverlay] = useState(false);

    turnOffbutton();

    const columns2 = [
        { key: 'Type', label: 'Type', type: 'text' },
        { key: 'Attended', label: 'Attended (NA: data unavailable)', type: 'input' },
        { key: 'Death', label: 'Death (NA: data unavailable)', type: 'input' },
    ];

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

    useEffect(() => {
        const { isValid, missingFields } = isFormValid();
        setShowOverlay(!isValid);
        if (!isValid) {
            const newErrors = {};
            missingFields.forEach(field => {
                console.log(field + "field");
                if (Array.isArray(form2E[field])) {
                    console.log(form2E[field]);
                    newErrors[field] = validateCheckBox(form2E[field]);
                } else {
                    newErrors[field] = validateRequired(form2E[field]);
                }
            });
            setErrors(newErrors);
        } else {
            setErrors({});
        }
    }, [form2E]);

    const isFormValid = () => {
        const requiredFields = ['H2E3'];
        const missingFields = requiredFields.filter(field => {
            if (Array.isArray(form2E[field])) {
                return form2E[field].every(item => item === '' || (typeof item === 'string' && item.trim() === ''));
            } else {
                return !form2E[field] || (typeof form2E[field] === 'string' && form2E[field].trim() === '');
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
    }, [form2E]);


    return (
        <div>
            <div className="header">
                <div className="burger-menu" onClick={toggleSidebar}>
                &#9776;
                </div>
                <Heading h2="Health Facility Assessment Tool 2: Community Health Centre"></Heading>
            </div>
            <section className="form-main">
                {isSidebarVisible && (
                <>
                    <SidePanel id={"5"} />
                    <div className="grayedover" onClick={toggleSidebar}></div>
                </>
                )}

                <div className="siteInfo" data-aos="fade-left">

                    <div className="formhdr">
                        <div>
                            <h3>
                                2E. Emergency Care Services
                            </h3>
                        </div>
                    </div>

                    <div className="formcontent">

                        <h3>2E.1 : Numbers of Patients who Visited ED in Last One Month</h3>

                        <E1 tableName={"H2E1"} />

                        <h3>2E.2 : Numbers of Patients Attended in ED and Deaths in Last One Year (Jan - Dec 2023)</h3>

                        <E2 columns={columns2} initialRows={initialRows2} tableName={"H2E2"} />

                        <Checkbox
                            h3="2E.3 : Which of the following emergency services are delivered at the CHC? "
                            CheckbobItems={["Triage", "Resuscitation", "Medico Legal Reporting"]}
                            name={"H2E3"}
                            setFunction={setForm2E}
                            StateValue={form2E}
                            array={form2E.H2E3}
                        />

                        <div className="button-container">
                            <Buttons
                                formName={"form2e"}
                                formData={form2E}
                                prevText="Previous"
                                nextText="Save & Next"
                                prev="/logistics-2-1"
                                next="/informationsystem-2"
                                formType="hfat2"
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
    );
}

export default Form2E;
