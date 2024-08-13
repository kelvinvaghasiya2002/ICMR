import React, { useState, useEffect } from 'react';
import Checkbox from '../child-comp/Checkbox';
import SidePanel from './SidePanelHFAT2';
import Buttons from '../child-comp/Buttons';
import Radio from '../child-comp/Radio';
import { handleChange, turnOffbutton } from '../helpers';
import I1 from "../Tables/I1.jsx";
import setLocalStorage from '../setLocalStorage.js';
import Heading from '../../Heading/Heading.jsx';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { validateName, validateNumber, validateRequired, validateEmail, validateCheckBox } from '../fv.js';
import OverlayCard from '../OverlayCard.jsx';

function Form2I() {
    useEffect(() => {
        AOS.init({ duration: 2000 });
    }, []);

    var form2i = setLocalStorage("form2i", { H2I1: [""], H2I2: [], H2I4: "" });
    const [form2I, setForm2I] = useState(JSON.parse(form2i));
    const [errors, setErrors] = useState({});
    const [showOverlay, setShowOverlay] = useState(false);

    turnOffbutton();

    const columns = [
        { key: 'EmergencyCondition', label: 'Emergency Condition', type: 'text' },
        { key: 'SOP', label: 'Have Specific SOP/STW', type: 'radio', options: ['Yes', 'No'] },
        { key: 'FollowsSOP', label: 'Follows SOP', type: 'radio', options: ['Yes', 'No'] },
    ];

    // Define the initial rows
    const initialRows = [
        { EmergencyCondition: 'MI', SOP: '', FollowsSOP: '' },
        { EmergencyCondition: 'Stroke', SOP: '', FollowsSOP: '' },
        { EmergencyCondition: 'Trauma & Burns', SOP: '', FollowsSOP: '' },
        { EmergencyCondition: 'Poisoning', SOP: '', FollowsSOP: '' },
        { EmergencyCondition: 'Snake Bite', SOP: '', FollowsSOP: '' },
        { EmergencyCondition: 'Maternal Emergencies-PPH', SOP: '', FollowsSOP: '' },
        { EmergencyCondition: 'Maternal Emergencies- Eclampsia', SOP: '', FollowsSOP: '' },
        { EmergencyCondition: 'Neonatal Emergencies', SOP: '', FollowsSOP: '' },
        { EmergencyCondition: 'Acute Respiratory Illness', SOP: '', FollowsSOP: '' },
    ];

    const validateForm = () => {
        const newErrors = {};

        setErrors(newErrors);
        setShowOverlay(Object.keys(newErrors).some(key => newErrors[key] !== undefined));
        // let errors = {};
        // let isValid = true;

        // // Validate checkboxes
        // if (form2I.H2I1.length === 0 || form2I.H2I1.every(item => item === "")) {
        //     errors.H2I1 = "At least one register must be selected.";
        //     isValid = false;
        // }
        // if (form2I.H2I2.length === 0 || form2I.H2I2.every(item => item === "")) {
        //     errors.H2I2 = "At least one SOP must be selected.";
        //     isValid = false;
        // }

        // // Validate radio button
        // if (form2I.H2I4 === "") {
        //     errors.H2I4 = "Emergency condition procedure information is required.";
        //     isValid = false;
        // }

        // // Table validation: Ensure at least one SOP and Follows SOP are selected for each row
        // const invalidRows = initialRows.some(row => {
        //     return row.SOP === "" || row.FollowsSOP === "";
        // });

        // if (invalidRows) {
        //     errors.H2I3 = "All rows must have SOP and Follows SOP values.";
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
                console.log(field + "field");
                if(Array.isArray(form2I[field])){
                  console.log(form2I[field]);
                  newErrors[field] = validateCheckBox(form2I[field]);
                }else{
                  newErrors[field] = validateRequired(form2I[field]);
                }
              });
            setErrors(newErrors);
        } else {
            setErrors({});
        }
    }, [form2I]);

    const isFormValid = () => {
        const requiredFields = ['H2I1' ,'H2I2','H2I4'];

        const missingFields = requiredFields.filter(field => {
            if (Array.isArray(form2I[field])) {
            return form2I[field].every(item => item === '' || (typeof item === 'string' && item.trim() === ''));
            } else {
            return !form2I[field] || (typeof form2I[field] === 'string' && form2I[field].trim() === '');
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
    }, [form2I]);

    const handleChangeWithValidation = (e) => {
        const { name, value } = e.target;
        let validatedValue = value;
        let error = '';

        switch (name) {
            case 'H2I4':
                error = validateRequired(value);
                if (!error) {
                    validatedValue = value;
                } else {
                    validatedValue = form2A[name];
                    e.preventDefault(); // Prevent default behavior if the input was invalid
                }
                break;
            default:
                break;
        }

        setForm2A(prevValue => ({ ...prevValue, [name]: validatedValue }));

        // Perform additional required validation
        switch (name) {
            case 'H2I4':
                error = error || validateRequired(validatedValue);
                break;
            default:
                break;
        }

        setErrors(prevErrors => ({ ...prevErrors, [name]: error }));
    };

    return (
        <div>
            <Heading h2="Health Facility Assessment Tool 2: Community Health Centre" />
            <section>
                <SidePanel id={"9"} />
                <div className="siteInfo" data-aos="fade-left">

                    <div className="formhdr">
                        <div>
                            <h3>2I. Process/ Policies/SOPs</h3>
                        </div>
                    </div>

                    <div className="formcontent">

                        <Checkbox
                            h3="2I.1 : What types of registers are maintained at the CHC?"
                            CheckbobItems={["Emergency/OPD/Treatment Register", "Inventory Register", "Procedure register", "Referral Register", "Record for handing over and taking over of critical care equipment", "Medico-legal register", "Death Register", "Patient/Community feedback register"]}
                            other={true}
                            name="H2I1"
                            setFunction={setForm2I}
                            StateValue={form2I}
                            array={form2I.H2I1}
                        />

                        <Checkbox
                            h3="2I.2 : Which of the following SOPs for the management of common medical emergencies are followed at your CHC?"
                            CheckbobItems={["Documented triage guidelines and protocols", "Standard treatment protocols for emergencies", "Transfer policies and procedures", "Disaster Management Plan", "Policies for handling cases of death"]}
                            name="H2I2"
                            setFunction={setForm2I}
                            StateValue={form2I}
                            array={form2I.H2I2}
                        />

                        <h3>Whether having Emergency condition specific SOP/STW for emergency care?</h3>

                        <I1
                            columns={columns}
                            initialRows={initialRows}
                            tableName="H2I3"
                        />

                        <Radio
                            h3="2I.4 : Does the facility have defined and established procedure for informing patients about their medical condition, involving them in treatment planning and facilitating informed decision making?"
                            CheckbobItems={["Yes", "No"]}
                            name="H2I4"
                            onClick={handleChange(setForm2I)}
                            byDefault={form2I.H2I4}
                        />



                        <div className="button-container">
                            <Buttons
                                formName={"form2i"}
                                formData={form2I}
                                prevText="Previous"
                                nextText="Save & Next"
                                prev="/leadershipandgovernance-2"
                                next="/referrallinkages-2"
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

export default Form2I;
