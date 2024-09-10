import SidePanel from './SidePanelCST.jsx';
import Checkbox from '../child-comp/Checkbox.jsx';
import Radio from '../child-comp/Radio.jsx';
import { Link } from 'react-router-dom';
import "../Form.css"
import React, { useEffect, useState } from 'react'
import Buttons from '../child-comp/Buttons.jsx';
import InputField from '../child-comp/InputField.jsx';
import { turnOffbutton, handleChange } from '../helpers.js';
import setLocalStorage from '../setLocalStorage.js';
import Heading from '../../Heading/Heading';
import Table from '../child-comp/Table.jsx'
import DropDown from '../child-comp/DropDown.jsx';
import Table1 from '../child-comp/Table1.jsx';
import CSTButton from '../child-comp/CSTButton.jsx';

function FormH30() {
    var formh30 = setLocalStorage("formh30", { H1:"",H2:"",H3:"",H4:"",H5:"",H6:"",H7:"",H8:"",H9:"",H10:[],H11:"",H12:[],H13:"",H14:"",H15:"",H16:"",H17:""})
    const [formH30, setFormH30] = useState(JSON.parse(formh30))
    turnOffbutton();

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
        if (formH30.H16 !== "Yes") {
          setFormH30({ ...formH30, H17:"" })
        }
    
      }, [formH30.H16])
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
                    <SidePanel id={"30"} />
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
                                Household Schedule:
                            </h3>
                        </div>
                    </div>

                    <div className="formcontent cont_extra">
                        {/* 1 to 17 */}
                        <InputField h3="H.1	Name of the Head of the Household: " name="H1" placeholder="Type here"  value={formH30.H1} onChange={handleChange(setFormH30)}  />
                        <InputField h3="H.2	Age (in Years): " name="H2" placeholder="Type here" value={formH30.H2} onChange={handleChange(setFormH30)} />
                        <Radio
                            h3="H.3 Sex:"
                            CheckbobItems={[
                                "Male",
                                "Female",
                                "Others"
                            ]}
                            otherArray={[0, 0, 1]}
                            name="H3"
                            byDefault={formH30.H3}
                            onClick={handleChange(setFormH30)}
                        />

                        <Radio
                            h3="H.4 Religion"
                            CheckbobItems={[
                                "Hindu",
                                "Muslim",
                                "Sikh",
                                "Christian",
                                "Buddhist/ Neo-Buddhist",
                                "Jain",
                                "Jewish",
                                "Parsi/ Zoroastrian",
                                "No Religion",
                                "Prefer not to disclose/ Refuse",
                                "Other"
                            ]}
                            otherArray={[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1]}
                            name="H4"
                            byDefault={formH30.H4}
                            onClick={handleChange(setFormH30)}
                        />

                        <Radio
                            h3="H.5 Caste"
                            CheckbobItems={[
                                "General/ Unreserved (UR)",
                                "Scheduled Caste (SC)",
                                "Scheduled Tribe (ST)",
                                "Other Backward Class (OBC)",
                                "None of the above",
                                "Don’t Know",
                                "Prefer not to disclose/ Refuse"
                            ]}
                            name="H5"
                            byDefault={formH30.H5}
                            onClick={handleChange(setFormH30)}
                        />

                        <Radio
                            h3="H.6 Marital status: (Select the appropriate response)"
                            CheckbobItems={[
                                "Never married",
                                "Currently Married",
                                "Separated",
                                "Divorced",
                                "Widow",
                                "Cohabitating",
                                "Prefer not to disclose/ Refuse"
                            ]}
                            name="H6"
                            byDefault={formH30.H6}
                            onClick={handleChange(setFormH30)}
                        />

                        <Radio
                            h3="H.7 Level of education (Select the appropriate response)"
                            CheckbobItems={[
                                "Illiterate",
                                "Primary School Certificate",
                                "Middle School Certificate",
                                "High School Certificate",
                                "Intermediate/ Diploma",
                                "Graduate",
                                "Professional or Honours",
                                "Prefer not to disclose/ Refuse"
                            ]}
                            name="H7"
                            byDefault={formH30.H7}
                            onClick={handleChange(setFormH30)}
                        />

                        <Radio
                            h3="H.8 Occupation"
                            CheckbobItems={[
                                "Unemployed",
                                "Housewife/ Homemaker",
                                "Elementary Occupation",
                                "Plant & Machine Operators and Assemblers",
                                "Craft & Related Trade Workers",
                                "Skilled Agricultural Fishery Workers",
                                "Skilled Workers and Shop & Market Sales Workers",
                                "Clerks",
                                "Technicians & Associate Professionals",
                                "Professionals",
                                "Legislators, Senior Officers & Managers",
                                "Prefer not to disclose/ Refuse"
                            ]}
                            name="H8"
                            byDefault={formH30.H8}
                            onClick={handleChange(setFormH30)}
                        />

                        <Radio
                            h3="H.9 Total family Income per Month (in INR)"
                            CheckbobItems={[
                                "INR",
                                "Prefer not to disclose/ Refuse"
                            ]}
                            otherArray={[1, 0]}
                            name="H9"
                            byDefault={formH30.H9}
                            onClick={handleChange(setFormH30)}
                        />

                        <Checkbox
                            h3="H.10 What type of Transport facility available at home:"
                            CheckbobItems={[
                                "None",
                                "Two-Wheeler (Bicycle)",
                                "Two-Wheeler (Motorcycle)",
                                "Three-Wheeler (Manual Rickshaw, Auto rickshaw etc.)",
                                "Four-Wheeler (Car/Jeep/ etc.)",
                                "Agricultural Vehicle (Tractor)",
                                "Others Specify)_____________"
                            ]}
                            otherArray={[0, 0, 0, 0, 0, 0, 1]}
                            name="H10"
                            setFunction={setFormH30} StateValue={formH30} array={formH30.H10}
                        />

                        <Radio
                            h3="H.11 Do you have any medical insurance?"
                            CheckbobItems={[
                                "Yes",
                                "No",
                                "Not aware"
                            ]}
                            name="H11"
                            byDefault={formH30.H11}
                            onClick={handleChange(setFormH30)}
                        />

                        <Checkbox
                            h3="H.12 If Yes, which of the following Household Medical Insurance coverage do you have?"
                            CheckbobItems={[
                                "Private Insurance",
                                "Central Health Insurance Scheme (Ayushmaan Bharat)",
                                "State Health Insurance Scheme",
                                "Community Health Insurance Programme",
                                "Employee based Insurance (ESI / CGHS/others)"
                            ]}
                            name="H12"
                            setFunction={setFormH30} StateValue={formH30} array={formH30.H12}
                        />

                        <Radio
                            h3="H.13 Are all your family members enrolled with the same Health Insurance coverage?"
                            CheckbobItems={[
                                "Yes",
                                "No"
                            ]}
                            name="H13"
                            byDefault={formH30.H13}
                            onClick={handleChange(setFormH30)}
                        />

                        <InputField h3="H.14 How many of you or your family members have an individual medical/ health insurance scheme?" name="H14" placeholder="Type here" value={formH30.H14} onChange={handleChange(setFormH30)}/>

                        <Radio
                            h3="H.15 Do you have a BPL card? Note: Request to show the related cards/document if any."
                            CheckbobItems={[
                                "Yes",
                                "No"
                            ]}
                            name="H15"
                            byDefault={formH30.H15}
                            onClick={handleChange(setFormH30)}
                        />

                        <Radio
                            h3="H.16 Do you have an ABHA ID? Note: Request to show the related cards/document if any."
                            CheckbobItems={[
                                "Yes",
                                "No"
                            ]}
                            name="H16"
                            byDefault={formH30.H16}
                            onClick={handleChange(setFormH30)}
                        />

                        {
                            (formH30.H16==="Yes") &&
                            <>
                            <InputField h3="H.17 How many of your family members are enrolled with ABHA id?" name="H17" placeholder="Type here" value={formH30.H17} onChange={handleChange(setFormH30)}/>
                            </>
                        }

                        

                        <CSTButton formName="formh30" formData={formH30} prev="/improve-emergency-services" next="/household-schedule2" prevText="Previous" nextText="Save & Next" />
                    </div>
                </div>
            </section>
        </div>
    )
}

export default FormH30