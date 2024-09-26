import React, { useState, useEffect } from 'react'
import { fetchCstTableDetail, handleChange, turnOffbutton } from '../helpers'
import SidePanel from './SidePanelCST.jsx';
import DropDown from '../child-comp/DropDown';
import Radio from "../child-comp/Radio.jsx"
import "../Form.css"
import Buttons from '../child-comp/Buttons';
import InputField from '../child-comp/InputField';
import setLocalStorage from '../setLocalStorage.js';
import Heading from '../../Heading/Heading.jsx';
import Checkbox from '../child-comp/Checkbox.jsx';
import OverlayCard from '../OverlayCard.jsx';
import useFormValidation from '../../../utils/custom_validation_hook.js';
import { validateName, validateRequired } from '../fv.js';

function FormA6() {
    var forma3 = setLocalStorage("forma3", { AC1: "", AC2_1: "", AC3: "", AC4: "", AC5: "", AC6_1: "", AC6_1_if: "", AC6_2: "", AC7_1: "", AC7_1_if: "", AC7_2: "", AC8_1: "", AC8_1_if: "", AC8_2: "", AC9_1: "", AC9_1_if: "", AC9_2: "", AC10_1: "", AC10_1_if: "", AC10_2: "", AC11_1: "", AC11_1_if: "", AC11_2: "", AC11_2_if: "", AC11_3: [], AC11_4: "", AC11_4_if: "", AC11_5: [], AC12_1: "", AC12_1_if: "", AC12_2: "", AC13_1: "", AC13_1_if: "", AC13_2: "", AC14_1: "", AC14_1_if: "", AC14_2: "", AC15_1: "", AC15_2: "", AC15_4: "" })

    const [formA3, setFormA3] = useState(JSON.parse(forma3))

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
        if (formA3.AC6_1 === "No") {
            setFormA3((prevValue) => {
                return { ...prevValue, AC6_1_if: "", AC6_2: "" }
            })
        }
    }, [formA3])
    turnOffbutton();

    const { isValid, errors, setErrors } = useFormValidation(formA3, [
        "AC6_1",
        ...(formA3.AC6_1 === "Yes" ? ["AC6_1_if", "AC6_2"] : [])
    ]);

    const handleChangeWithValidation = (e) => {
        const { name, value } = e.target;
        let validatedValue = value;
        let error = "";
    
        switch (name) {
          case "A6_1_if":
            error = validateName(value);
            if (!error) {
              validatedValue = value;
            } else {
              validatedValue = formA3[name];
              e.preventDefault(); // Prevent default behavior if the input was invalid
            }
            break;
          default:
            break;
        }
    
        setFormA3((prevValue) => ({ ...prevValue, [name]: validatedValue }));
    
        // Perform additional required validation
        switch (name) {
          case "AC6_1":
          case "AC6_1_if":
          case "AC6_2":
            error = error || validateRequired(validatedValue);
            break;
          default:
            break;
        }
    
        setErrors((prevErrors) => ({ ...prevErrors, [name]: error }));
      };


    return (
        <div>
            <div className="header">
                <div className="burger-menu" onClick={toggleSidebar}>
                    &#9776;
                </div>
                <Heading h2="Community Survey Tool"></Heading>
            </div>
            <section id='site-info' className="form-main">
                {isSidebarVisible && (
                    <>
                        <SidePanel id={"4"} />
                        <div className="grayedover" onClick={toggleSidebar}></div>
                    </>
                )}
                <div className='siteInfo'>
                    <div className="formhdr">
                        <div>
                            <h2>A Socio-demographic Characteristics</h2>
                        </div>
                        <div>
                            <h3>
                                Trauma
                            </h3>
                        </div>
                    </div>

                    <div className="formcontent cont_extra">


                        <Radio onClick={handleChange(setFormA3)} h3="AC.6.1   In the past one year, did you or any member of this household suffered from sudden injury in Road Traffic Accident/ fracture/ severe fall/ drowning/ stabbing/ gunshot/ any other assault/ any attempt to self-harm/ domestic violence/ homicidal etc.?" CheckbobItems={["Yes", "No"]} name="AC6_1" byDefault={formA3.AC6_1} />

                        {
                            (formA3.AC6_1 === 'Yes') &&
                            <>
                                <InputField onChange={handleChangeWithValidation} h3="If Yes, What were the symptoms of emergency conditions and first course of action?" placeholder="Type here" name="AC6_1_if" value={formA3.AC6_1_if} />

                                <Radio onClick={handleChange(setFormA3)} CheckbobItems={fetchCstTableDetail()} name="AC6_2" h3="AC6.2   If yes, could you please tell who all from your Household suffered with this condition?" byDefault={formA3.AC6_2} />

                            </>
                        }
                        <div className="button-container">
                            <Buttons formName={"forma3"} formData={formA3} prev="/linelistingofhouseholdmembers-4" next="/burn" prevText="Previous" nextText="Save & Next" />
                            <OverlayCard
                                isVisible={!isValid}
                                message="(Please fill all required fields to proceed)"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default FormA6