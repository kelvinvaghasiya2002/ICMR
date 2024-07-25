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

function FormH30() {
    var formh30 = setLocalStorage("formh30", { B0: "", B0_d: "", B1: "", B2: "", B3: "", B4: "", B5_dt: "", B6: "", B7: "", B8: "", B9: "", B10: "", B11_if: "", B12: "", B13: "", B14: "", B15: "", B16: "", B17_1: "", B17_2: "", B18: "", B19: "", B20: "", B21: "", B22_1: "", B22_2: "", B23_1: "", B23_2: "", B24: "", B25: "", B26: "", B27: "", B28: "", B29: "", B30: "", B31: "", B32: "", B33: "", B34: "" })
    const [formH30, setFormH30] = useState(JSON.parse(formh30))
    turnOffbutton();
    return (
        <div>
            <Heading h2="Community Survey Tool"></Heading>
            <section id='site-info'>
                <SidePanel id={"30"} />
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
                        <InputField h3="H.1	Name of the Head of the Household: " name="H1" placeholder="Type here" />
                        <InputField h3="H.2	Age (in Years): " name="H2" placeholder="Type here" />
                        <Radio
                            h3="H.3 Sex:"
                            CheckbobItems={[
                                "Male",
                                "Female",
                                "Others"
                            ]}
                            otherArray={[0, 0, 1]}
                            name="H3"
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
                        />

                        <Radio
                            h3="H.9 Total family Income per Month (in INR)"
                            CheckbobItems={[
                                "INR",
                                "Prefer not to disclose/ Refuse"
                            ]}
                            otherArray={[1, 0]}
                            name="H9"
                        />

                        {/* <Checkbox
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
                        /> */}

                        <Radio
                            h3="H.11 Do you have any medical insurance?"
                            CheckbobItems={[
                                "Yes",
                                "No",
                                "Not aware"
                            ]}
                            name="H11"
                        />

                        {/* <Checkbox
                            h3="H.12 If Yes, which of the following Household Medical Insurance coverage do you have?"
                            CheckbobItems={[
                                "Private Insurance",
                                "Central Health Insurance Scheme (Ayushmaan Bharat)",
                                "State Health Insurance Scheme",
                                "Community Health Insurance Programme",
                                "Employee based Insurance (ESI / CGHS/others)"
                            ]}
                            name="H12"
                        /> */}

                        <Radio
                            h3="H.13 Are all your family members enrolled with the same Health Insurance coverage?"
                            CheckbobItems={[
                                "Yes",
                                "No"
                            ]}
                            name="H13"
                        />

                        <InputField h3="H.14 How many of you or your family members have an individual medical/ health insurance scheme?" name="H14" placeholder="Type here" />

                        <Radio
                            h3="H.15 Do you have a BPL card? Note: Request to show the related cards/document if any."
                            CheckbobItems={[
                                "Yes",
                                "No"
                            ]}
                            name="H15"
                        />

                        <Radio
                            h3="H.16 Do you have an ABHA ID? Note: Request to show the related cards/document if any."
                            CheckbobItems={[
                                "Yes",
                                "No"
                            ]}
                            name="H16"
                        />

                        <InputField h3="H.17 How many of your family members are enrolled with ABHA id?" name="H17" placeholder="Type here" />

                        <Buttons formName="formh30" formData={formh30} prev="/improve-emergency-services" next="/household-schedule2" prevText="Previous" nextText="Save & Next" />
                    </div>
                </div>
            </section>
        </div>
    )
}

export default FormH30