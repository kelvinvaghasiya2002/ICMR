import React, { useState, useEffect } from 'react';
import Checkbox from '../child-comp/Checkbox';
import SidePanel from './SidePanelHFAT2';
import Buttons from '../child-comp/Buttons';
import Radio from '../child-comp/Radio';
import InputField from '../child-comp/InputField';
import { handleChange, turnOffbutton } from '../helpers';
import setLocalStorage from '../setLocalStorage';
import Heading from '../../Heading/Heading.jsx';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { validateName, validateNumber, validateRequired, validateEmail } from '../fv.js';
import OverlayCard from '../OverlayCard.jsx';

function Form2G() {
    useEffect(() => {
        AOS.init({ duration: 2000 });
    }, []);

    turnOffbutton();
    var form2g = setLocalStorage("form2g", {
        H2G1: "", H2G2: "", H2G3: "", H2G4: "", H2G5: "", H2G6: ""
    });

    const [form2G, setForm2G] = useState(JSON.parse(form2g));
    const [errors, setErrors] = useState({});
    const [showOverlay, setShowOverlay] = useState(false);

    useEffect(() => {
        if (form2G.H2G1 === "No") {
            setForm2G((prevValue) => {
                return { ...prevValue, H2G2: "" }
            });
        }

        if (form2G.H2G3 === "No") {
            setForm2G((prevValue) => {
                return { ...prevValue, H2G4: "", H2G5: "" }
            });
        }
    }, [form2G.H2G1, form2G.H2G3]);

    const validateForm = () => {
        const newErrors = {};

        if (form2G.H2G1 === 'Yes' && !form2G.H2G2) newErrors.H2G2 = 'Required to check whether this fund is utilized for providing emergency care services'
        if (form2G.H2G3 === 'Yes' && !form2G.H2G4 && !form2G.H2G5) {
            newErrors.H2G4 = 'Required to fill which health protection schemes are covering your emergency care system'
            newErrors.H2G5 = 'Required to how many were provided services under PMJAY scheme/ any other insurance scheme'
            newErrors.H2G5 = validateRequired(form2G.H2G5) || validateNumber(form2G.H2G5);
        }

        // let isValid = true;

        // if (form2G.H2G1 === "") {
        //     errors.H2G1 = "Field 2G.1 is required.";
        //     isValid = false;
        // }

        // if (form2G.H2G1 === "Yes" && form2G.H2G2 === "") {
        //     errors.H2G2 = "Field 2G.2 is required.";
        //     isValid = false;
        // }

        // if (form2G.H2G3 === "") {
        //     errors.H2G3 = "Field 2G.3 is required.";
        //     isValid = false;
        // }

        // if (form2G.H2G3 === "Yes") {
        //     if (form2G.H2G4 === "") {
        //         errors.H2G4 = "Field 2G.4 is required.";
        //         isValid = false;
        //     }
        //     if (form2G.H2G5 === "") {
        //         errors.H2G5 = "Field 2G.5 is required.";
        //         isValid = false;
        //     }
        // }

        // if (form2G.H2G6 === "") {
        //     errors.H2G6 = "Field 2G.6 is required.";
        //     isValid = false;
        // }

        // setErrors(errors);
        // return isValid;

        setErrors(newErrors);
        setShowOverlay(Object.keys(newErrors).some(key => newErrors[key] !== undefined));
    };

    useEffect(() => {
        const { isValid, missingFields } = isFormValid();
        setShowOverlay(!isValid);
        if (!isValid) {
            const newErrors = {};
            missingFields.forEach(field => {
                newErrors[field] = validateRequired(form2G[field]);
            });
            setErrors(newErrors);
        } else {
            setErrors({});
        }
    }, [form2G]);

    const isFormValid = () => {
        const requiredFields = ['H2G1', 'H2G3', 'H2G6'];
        if (form2G.H2G1 === "Yes") {
            requiredFields.push('H1G2');
        }
        if (form2G.H2G3 === "Yes") {
            requiredFields.push('H2G4');
            requiredFields.push('H2G5');
        }
        const missingFields = requiredFields.filter(field => !form2G[field] || (typeof form2G[field] === 'string' && form2G[field].trim() === ''));
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
    }, [form2G]);

    const handleChangeWithValidation = (e) => {
        const { name, value } = e.target;
        let validatedValue = value;
        let error = '';

        switch (name) {
            case 'H2G5':
                error = validateNumber(value);
                if (!error) {
                    validatedValue = value;
                } else {
                    validatedValue = form2G[name];
                    e.preventDefault(); // Prevent default behavior if the input was invalid
                }
                break;
            default:
                break;
        }

        setForm2G(prevValue => ({ ...prevValue, [name]: validatedValue }));

        // Perform additional required validation
        switch (name) {
            case 'H2G5':
                error = error || validateRequired(validatedValue);
                break;
            default:
                break;
        }

        setErrors(prevErrors => ({ ...prevErrors, [name]: error }));
    };
    return (
        <div>
            <Heading h2="Health Facility Assessment Tool 2: Community Health Centre"></Heading>
            <section>
                <SidePanel id={"7"} />
                <div className="siteInfo" data-aos="fade-left">

                    <div className="formhdr">
                        <div>
                            <h3>
                                2G. Finance
                            </h3>
                        </div>
                    </div>

                    <div className="formcontent">

                        <Radio
                            byDefault={form2G.H2G1}
                            onClick={handleChange(setForm2G)}
                            h3="2G.1 : Whether any untied fund is available at your hospital?"
                            CheckbobItems={["Yes", "No"]}
                            name="H2G1"
                        />


                        {form2G.H2G1 === "Yes" &&
                            <>
                                <Radio
                                    byDefault={form2G.H2G2}
                                    onClick={handleChange(setForm2G)}
                                    h3="2G.2 : If Yes, Whether this fund is utilized for providing emergency care services?"
                                    CheckbobItems={["Yes", "No"]}
                                    name="H2G2"
                                />

                            </>
                        }

                        <Radio
                            byDefault={form2G.H2G3}
                            onClick={handleChange(setForm2G)}
                            h3="2G.3 : Whether any fund is available for emergency care?"
                            CheckbobItems={["Yes", "No"]}
                            name="H2G3"
                        />


                        {form2G.H2G3 === "Yes" &&
                            <>
                                <Radio
                                    byDefault={form2G.H2G4}
                                    onClick={handleChange(setForm2G)}
                                    h3="2G.4 : If funds are available, which health protection schemes are covering your emergency care system?"
                                    CheckbobItems={["PMJAY", "RKS", "Other (Specify)"]}
                                    otherArray={[0, 0, 1]}
                                    name="H2G4"
                                />


                                <InputField
                                    value={form2G.H2G5}
                                    onChange={handleChangeWithValidation}
                                    h3="2G.5 : Out of total patients being provided emergency care, how many were provided services under PMJAY scheme/ any other insurance scheme."
                                    placeholder="Type here"
                                    name="H2G5"
                                />
                            </>
                        }

                        <Radio
                            byDefault={form2G.H2G6}
                            onClick={handleChange(setForm2G)}
                            h3="2G.6 : Is the facility providing free emergency services to pregnant women, mothers, and neonates as per prevalent government schemes?"
                            CheckbobItems={["Yes", "No"]}
                            name="H2G6"
                        />


                        <div className="button-container">
                            <Buttons
                                formData={form2G}
                                formName="form2g"
                                prevText="Previous"
                                nextText="Save & Next"
                                prev="/informationsystem-2"
                                next="/leadershipandgovernance-2"
                            // validateForm={validateForm}
                            />

                            <OverlayCard
                                isVisible={showOverlay}
                                message="Please fill all required fields to proceed."
                            />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Form2G;
