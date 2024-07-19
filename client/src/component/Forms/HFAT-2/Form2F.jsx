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

function Form2F() {
    useEffect(() => {
        AOS.init({ duration: 2000 });
    }, []);

    turnOffbutton();
    var form2f = setLocalStorage("form2f", {
        H2F1: "", H2F2: "", H2F3: "", H2F4: [], H2F5: "", H2F6: [], H2F7: "", H2F8: "", H2F9: ""
    });

    const [form2F, setForm2F] = useState(JSON.parse(form2f));
    const [formError, setFormError] = useState("");

    useEffect(() => {
        if (form2F.H2F1 === "No") {
            setForm2F((prevValue) => {
                return { ...prevValue, H2F2: "", H2F3: "", H2F4: [""], H2F5: "" };
            });
        }
    }, [form2F.H2F1]);

    const validateForm = () => {
        // Basic validation for required fields
        if (form2F.H2F1 === "") {
            setFormError("Field 2F.1 is required.");
            return false;
        }

        if (form2F.H2F1 === "Yes") {
            if (form2F.H2F2 === "") {
                setFormError("Field 2F.2 is required.");
                return false;
            }
            if (form2F.H2F3 === "") {
                setFormError("Field 2F.3 is required.");
                return false;
            }
            if (form2F.H2F4.length === 0) {
                setFormError("Field 2F.4 is required.");
                return false;
            }
            if (form2F.H2F5 === "") {
                setFormError("Field 2F.5 is required.");
                return false;
            }
        }

        if (form2F.H2F6.length === 0) {
            setFormError("Field 2F.6 is required.");
            return false;
        }

        if (form2F.H2F7 === "") {
            setFormError("Field 2F.7 is required.");
            return false;
        }

        if (form2F.H2F8 === "") {
            setFormError("Field 2F.8 is required.");
            return false;
        }

        if (form2F.H2F9 === "") {
            setFormError("Field 2F.9 is required.");
            return false;
        }

        setFormError("");
        return true;
    };

    return (
        <div>
            <Heading h2="Health Facility Assessment Tool 2: Community Health Centre" />
            <section>
                <SidePanel id={"6"} />
                <div className="siteInfo" data-aos="fade-left">

                    <div className="formhdr">
                        <div>
                            <h3>
                                2F. Information System
                            </h3>
                        </div>
                    </div>

                    <div className="formcontent">
                        <Radio
                            h3="2F.1 : Does the facility have a Hospital Management Information System (HMIS)"
                            CheckbobItems={["Yes", "No"]}
                            name="H2F1"
                            byDefault={form2F.H2F1}
                            onClick={handleChange(setForm2F)}
                        />

                        {
                            (form2F.H2F1 === 'Yes') &&
                            <>
                                <Radio
                                    h3="2F.2 : Does this facility do complete reporting of indicators on emergency care in HMIS?"
                                    CheckbobItems={["Yes", "No"]}
                                    name="H2F2"
                                    byDefault={form2F.H2F2}
                                    onClick={handleChange(setForm2F)}
                                />

                                <InputField
                                    h3="2F.3 : How many personnel are available for managing information system?"
                                    placeholder="Type here"
                                    name="H2F3"
                                    value={form2F.H2F3}
                                    onChange={handleChange(setForm2F)}
                                />

                                <Checkbox
                                    h3="2F.4 : What key indicators are generated from the emergency management information system?"
                                    CheckbobItems={[
                                        "Numbers by type of emergencies",
                                        "Length of hospital stay",
                                        "Turnaround time",
                                        "Disposal time",
                                        "Number of deaths",
                                        "Number of Referrals"
                                    ]}
                                    name="H2F4"
                                    setFunction={setForm2F} StateValue={form2F} array={form2F.H2F4}
                                />

                                <Radio
                                    h3="2F.5 : Whether time bound management of common emergencies is captured in MIS."
                                    CheckbobItems={["Yes", "No"]}
                                    name="H2F5"
                                    byDefault={form2F.H2F5}
                                    onClick={handleChange(setForm2F)}
                                />
                            </>
                        }

                        <Checkbox
                            h3="2F.6 : Which of the following alert systems does your facility have?"
                            CheckbobItems={[
                                "Code blue alert system.",
                                "NSTEMI alert system",
                                "Stroke alert system.",
                                "Trauma alert system"
                            ]}
                            name="H2F6"
                            setFunction={setForm2F} StateValue={form2F} array={form2F.H2F6}
                        />

                        <Radio
                            h3="2F.7 : Whether Medical Officer In charge (MO/IC) uses or reviews the data for quality improvement"
                            CheckbobItems={["Yes", "No"]}
                            name="H2F7"
                            byDefault={form2F.H2F7}
                            onClick={handleChange(setForm2F)}
                        />

                        <Radio
                            h3="2F.8 : Do you get Pre-Hospital Notification during an emergency?"
                            CheckbobItems={["Yes", "No"]}
                            name="H2F8"
                            byDefault={form2F.H2F8}
                            onClick={handleChange(setForm2F)}
                        />

                        <Radio
                            h3="2F.9 : Infrastructure for receiving external communication?"
                            CheckbobItems={["Yes", "No"]}
                            name="H2F9"
                            byDefault={form2F.H2F9}
                            onClick={handleChange(setForm2F)}
                        />

                        {formError && <div className="error-msg">{formError}</div>}

                        <Buttons
                            formName="form2f"
                            formData={form2F}
                            prevText="Previous"
                            nextText="Save & Next"
                            prev="/emergencycareservices-2"
                            next="/finance-2"
                            validateForm={validateForm}
                        />
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Form2F;
