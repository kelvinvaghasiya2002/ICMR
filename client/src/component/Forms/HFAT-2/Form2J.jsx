import React, { useState, useEffect } from 'react';
import SidePanel from './SidePanelHFAT2';
import Buttons from '../child-comp/Buttons';
import Radio from '../child-comp/Radio';
import { handleChange, turnOffbutton } from '../helpers';
import setLocalStorage from '../setLocalStorage';
import Heading from '../../Heading/Heading.jsx';
import LastButton from '../child-comp/LastButton.jsx';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { validateName, validateNumber, validateRequired, validateEmail } from '../fv.js';
import OverlayCard from '../OverlayCard.jsx';

function Form2J() {

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

    var form2j = setLocalStorage("form2j", { H2J1: "", H2J2: "" });
    const [form2J, setForm2J] = useState(JSON.parse(form2j));
    const [errors, setErrors] = useState({});
    const [showOverlay, setShowOverlay] = useState(false);

    turnOffbutton();

    const validateForm = () => {
        const newErrors = {};

        setErrors(newErrors);
        setShowOverlay(Object.keys(newErrors).some(key => newErrors[key] !== undefined));
        // let errors = {};
        // let isValid = true;

        // // Validate radio buttons
        // if (form2J.H2J1 === "") {
        //     errors.H2J1 = "This field is required.";
        //     isValid = false;
        // }
        // if (form2J.H2J2 === "") {
        //     errors.H2J2 = "This field is required.";
        //     isValid = false;
        // }

        // setErrors(errors);
        // return isValid;
    };


    useEffect(() => {
        const { isValid, missingFields } = isFormValid();
        setShowOverlay(!isValid);
        if (!isValid) {
            const newErrors = {};
            missingFields.forEach(field => {
                newErrors[field] = validateRequired(form2J[field]);
            });
            setErrors(newErrors);
        } else {
            setErrors({});
        }
    }, [form2J]);

    const isFormValid = () => {
        const requiredFields = ['H2J1', 'H2J2'];
        const missingFields = requiredFields.filter(field => !form2J[field] || (typeof form2J[field] === 'string' && form2J[field].trim() === ''));
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
    }, [form2J]);

    const handleChangeWithValidation = (e) => {
        const { name, value } = e.target;
        let validatedValue = value;
        let error = '';

        switch (name) {
            default:
                break;
        }

        setForm2J(prevValue => ({ ...prevValue, [name]: validatedValue }));

        // Perform additional required validation
        switch (name) {
            default:
                break;
        }

        setErrors(prevErrors => ({ ...prevErrors, [name]: error }));
    };


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
                    <SidePanel id={"10"} />
                    <div className="grayedover" onClick={toggleSidebar}></div>
                </>
                )}
                <div className="siteInfo" data-aos="fade-left">

                    <div className="formhdr">
                        <div>
                            <h3>2J. Referral Linkages</h3>
                        </div>
                    </div>

                    <div className="formcontent cont_extra fbox">
                        <div className="fbox1">

                            <Radio
                                h3="2J.1 : Does this facility have policies and procedures which guide the referral of patients from other hospitals?"
                                CheckbobItems={["Yes", "No"]}
                                name={"H2J1"}
                                onClick={handleChange(setForm2J)}
                                byDefault={form2J.H2J1}
                            />

                            <Radio
                                h3="2J.2 : Does this facility have any policies and procedures which guide the transfer-out/referral of stable and unstable patients after stabilization to another facility with documentation?"
                                CheckbobItems={["Yes", "No"]}
                                name={"H2J2"}
                                onClick={handleChange(setForm2J)}
                                byDefault={form2J.H2J2}
                            />
                        </div>


                        <div className="button-container">
                            <LastButton
                                prev="/processpoliciessops-2"
                                formName="form2j"
                                formData={form2J}
                                MainForm={"HFAT-2"}
                                // validateForm={validateForm}
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

export default Form2J;
