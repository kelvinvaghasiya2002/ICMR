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

function Form2H() {
    useEffect(() => {
        AOS.init({ duration: 2000 });
    }, []);

    var form2h = setLocalStorage("form2h", { H2H1: "", H2H2: "", H2H3: "", H2H4: "", H2H5: "", H2H6: "", H2H7: "", H2H8: [""], H2H9: "" });

    const [form2H, setForm2H] = useState(JSON.parse(form2h));
    const [errors, setErrors] = useState({});

    useEffect(() => {
        if (form2H.H2H4 === "No") {
            setForm2H((prevValue) => {
                return { ...prevValue, H2H5: "" };
            });
        }

        if (form2H.H2H6 === "No") {
            setForm2H((prevValue) => {
                return { ...prevValue, H2H7: "", H2H8: [], H2H9: "" };
            });
        }
    }, [form2H.H2H6, form2H.H2H4]);

    const validateForm = () => {
        let errors = {};
        let isValid = true;

        // Validate disaster management plan
        if (form2H.H2H1 === "") {
            errors.H2H1 = "Disaster management plan is required.";
            isValid = false;
        }
        if (form2H.H2H2 === "") {
            errors.H2H2 = "Redistribution plan is required.";
            isValid = false;
        }
        if (form2H.H2H3 === "") {
            errors.H2H3 = "Evacuation plan is required.";
            isValid = false;
        }

        // Validate Quality Improvement Plan
        if (form2H.H2H4 === "") {
            errors.H2H4 = "Quality Improvement Committee information is required.";
            isValid = false;
        } else if (form2H.H2H4 !== "No" && form2H.H2H5 === "") {
            errors.H2H5 = "Frequency of committee meetings is required.";
            isValid = false;
        }

        if (form2H.H2H6 === "") {
            errors.H2H6 = "Audit information is required.";
            isValid = false;
        } else if (form2H.H2H6 === "Yes") {
            if (form2H.H2H7 === "") {
                errors.H2H7 = "Frequency of audits is required.";
                isValid = false;
            }
            if (form2H.H2H8.length === 0) {
                errors.H2H8 = "Types of audits conducted is required.";
                isValid = false;
            }
            if (form2H.H2H9 === "") {
                errors.H2H9 = "Action taken on audit report is required.";
                isValid = false;
            }
        }

        setErrors(errors);
        return isValid;
    };

    return (
        <div>
            <Heading h2="Health Facility Assessment Tool 2: Community Health Centre" />
            <section>
                <SidePanel id={"8"} />
                <div className="siteInfo" data-aos="fade-left">

                    <div className="formhdr">
                        <div>
                            <h3>2H. Leadership and Governance</h3>
                        </div>
                    </div>

                    <div className="formcontent">

                        <h3 style={{ color: "#3177FF" }}>Disaster management plan :</h3>

                        <Radio h3="2H.1.1 : Do you have any disaster management plan?" CheckbobItems={["Yes", "No"]} name="H2H1" onClick={handleChange(setForm2H)} byDefault={form2H.H2H1} />
                        {errors.H2H1 && <div className="error-msg">{errors.H2H1}</div>}

                        <Radio h3="2H.1.2 : Do you have a redistribution plan?" CheckbobItems={["Yes", "No"]} name="H2H2" onClick={handleChange(setForm2H)} byDefault={form2H.H2H2} />
                        {errors.H2H2 && <div className="error-msg">{errors.H2H2}</div>}

                        <Radio h3="2H.1.3 : Do you have any evacuation plan?" CheckbobItems={["Yes", "No"]} name="H2H3" onClick={handleChange(setForm2H)} byDefault={form2H.H2H3} />
                        {errors.H2H3 && <div className="error-msg">{errors.H2H3}</div>}

                        <h3 style={{ color: "#3177FF" }}>Quality Improvement Plan :</h3>

                        <Radio h3="2H.2.1 : Do you have a Quality Improvement Committee? (if yes, collect detail of Committee)" CheckbobItems={["Yes", "No"]} otherArray={[1, 0]} setter={setForm2H} name="H2H4" onClick={handleChange(setForm2H)} byDefault={form2H.H2H4} other={true} />
                        {errors.H2H4 && <div className="error-msg">{errors.H2H4}</div>}

                        {/* if yes show textbox */}
                        {form2H.H2H4 !== "No" &&
                            <>
                                <InputField h3="2H.2.2 : How frequently does this committee meet in a year?" placeholder="Type here" name="H2H5" onChange={handleChange(setForm2H)} value={form2H.H2H5} />
                                {errors.H2H5 && <div className="error-msg">{errors.H2H5}</div>}
                            </>
                        }

                        <Radio h3="2H.2.3 : Do you have regular audits related to emergency care in hospital?" CheckbobItems={["Yes", "No"]} name="H2H6" onClick={handleChange(setForm2H)} byDefault={form2H.H2H6} />
                        {errors.H2H6 && <div className="error-msg">{errors.H2H6}</div>}

                        {form2H.H2H6 === "Yes" &&
                            <>
                                <InputField h3="2H.2.4 : How frequently audits are conducted in a year?" placeholder="Type here" name="H2H7" onChange={handleChange(setForm2H)} value={form2H.H2H7} />
                                {errors.H2H7 && <div className="error-msg">{errors.H2H7}</div>}

                                <Checkbox h3="2H.2.5 : Types of audits conducted?" CheckbobItems={["Mortality Audit", "Morbidity Audit"]} other={true} name="H2H8" setFunction={setForm2H} StateValue={form2H} array={form2H.H2H8} />
                                {errors.H2H8 && <div className="error-msg">{errors.H2H8}</div>}

                                <Radio h3="2H.2.6 : Any action being taken on Audit report in the last one year?" placeholder="Type here" name="H2H9" onClick={handleChange(setForm2H)} CheckbobItems={["Yes", "No"]} byDefault={form2H.H2H9} />
                                {errors.H2H9 && <div className="error-msg">{errors.H2H9}</div>}
                            </>
                        }

                        <Buttons
                            formName={"form2h"}
                            formData={form2H}
                            prevText="Previous"
                            nextText="Save & Next"
                            prev="/finance-2"
                            next="/processpoliciessops-2"
                            validateForm={validateForm}
                        />
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Form2H;
