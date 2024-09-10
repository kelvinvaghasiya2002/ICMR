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

function FormE26() {
    var forme26 = setLocalStorage("forme26", { E1: "", E2: [], E3_a: "", E3_b: "", E3_c: "", E3_d: "", E3_e: "", E3_f: "", E4: "", E5_a: "", E5_b: "", E5_c: "", E5_d: "", E5_e: "", E6: "", E7: "", E8: "", E9_a: "", E9_b: "", E9_c: "", E9_d: "", E9_e: "", E9_f: "", E9_g: "", E9_h: "", E9_i: "", E9_j: "", E10: "" })
    const [formE26, setFormE26] = useState(JSON.parse(forme26))
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
                    <SidePanel id={"26"} />
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
                                Costing (Complete event of seeking care)
                            </h3>
                        </div>
                    </div>

                    <div className="formcontent ">

                        <Radio h3="E.1	Was the patient covered by any insurance?" CheckbobItems={['Yes', 'No']} name="E1"
                            byDefault={formE26.E1}
                            onClick={handleChange(setFormE26)} />

                        <Checkbox
                            h3="E.2 If yes, which of the following Health Insurance coverage patient had?"
                            CheckbobItems={[
                                "Private cashless",
                                "Private reimbursement",
                                "Central Health Insurance Scheme (Ayushmaan Bharat/ CGHS / etc.)",
                                "State Health Insurance Scheme",
                                "Co-Payment",
                                "Community Health Insurance Programme",
                                "None"
                            ]}
                            name="E2"
                            setFunction={setFormE26} StateValue={formE26} array={formE26.E2}
                        />

                        <h3>
                            E.3 : How much amount was spent on the following while availing the emergency care service?
                            Direct Medical Cost
                        </h3>
                        <Radio CheckbobItems={["INR :", "Can't Recall"]} name="E3_a" h3="a. Drugs" onClick={handleChange(setFormE26)} byDefault={formE26.E3_a}  otherArray={[1, 0]} setter={setFormE26} />

                        <Radio CheckbobItems={["INR :", "Can't Recall"]} name="E3_b" h3="b. Consultation" onClick={handleChange(setFormE26)} byDefault={formE26.E3_b}  otherArray={[1, 0]} setter={setFormE26} />

                        <Radio CheckbobItems={["INR :", "Can't Recall"]} name="E3_c" h3="c. Diagnostics" onClick={handleChange(setFormE26)} byDefault={formE26.E3_c}  otherArray={[1, 0]} setter={setFormE26} />

                        <Radio CheckbobItems={["INR :", "Can't Recall"]} name="E3_d" h3="d. Implants and devices etc." onClick={handleChange(setFormE26)} byDefault={formE26.E3_d}  otherArray={[1, 0]} setter={setFormE26} />

                        <Radio CheckbobItems={["INR :", "Can't Recall"]} name="E3_e" h3="e. Hospital stay" onClick={handleChange(setFormE26)} byDefault={formE26.E3_e}  otherArray={[1, 0]} setter={setFormE26} />

                        <Radio CheckbobItems={["INR :", "Can't Recall"]} name="E3_f" h3="f. Other (Specify):" onClick={handleChange(setFormE26)} byDefault={formE26.E3_f}  otherArray={[1, 0]} setter={setFormE26} />




                        <InputField h3="E.4	What was the approximate overall money spent on the availing the emergency care service? Direct Medical Cost" placeholder="Type here" name="E4" value={formE26.E4} onChange={handleChange(setFormE26)} />


                        <h3>
                            E.5 : How much extra amount was spent on the following while availing the emergency care service?
                            Direct Non-Medical Cost
                        </h3>
                        <Radio CheckbobItems={["INR :", "Can't Recall"]} name="E5_a" h3="a. Transportation" onClick={handleChange(setFormE26)} byDefault={formE26.E5_a}  otherArray={[1, 0]} setter={setFormE26} />

                        <Radio CheckbobItems={["INR :", "Can't Recall"]} name="E5_b" h3="b. Boarding/ lodging" onClick={handleChange(setFormE26)} byDefault={formE26.E5_b}  otherArray={[1, 0]} setter={setFormE26} />

                        <Radio CheckbobItems={["INR :", "Can't Recall"]} name="E5_c" h3="c. Nursing attendant" onClick={handleChange(setFormE26)} byDefault={formE26.E5_c}  otherArray={[1, 0]} setter={setFormE26} />

                        <Radio CheckbobItems={["INR :", "Can't Recall"]} name="E5_d" h3="d. Food" onClick={handleChange(setFormE26)} byDefault={formE26.E5_d}  otherArray={[1, 0]} setter={setFormE26} />

                        <Radio CheckbobItems={["INR :", "Can't Recall"]} name="E5_e" h3="e. Other (Specify)" onClick={handleChange(setFormE26)} byDefault={formE26.E5_e}  otherArray={[1, 0]} setter={setFormE26} />

                        <InputField h3="E.6	What was the approximate overall money spent on the availing the emergency care service? Direct Non-Medical Cost" placeholder="Insert Number " name="E6" value={formE26.E6} onChange={handleChange(setFormE26)} />

                        <InputField h3="E.7	What is the cost of lost productivity due to missed workdays for patients and their family caregivers while accessing emergency care services? (In-Direct Cost) 
                        Cost of lost productivity due to missed workdays= Patients missed workdays + patient’s family’s missed work days)*Average daily wage rate" placeholder="Type here" name="E7" value={formE26.E7} onChange={handleChange(setFormE26)} />

                        <InputField h3="E.8	What is the cost of lost productivity due to premature death on the availing the emergency care service? (In-Direct Cost)
                        
                        Cost of lost productivity due to premature death= {Retirement age (60)- age of premature death}*Average annual income}" placeholder="Type here" name="E8" value={formE26.E8} onChange={handleChange(setFormE26)} />

                        <h3>
                            E.9 : What were the sources through which you met the expenses for emergency care and what is the amount covered?
                        </h3>

                        <InputField h3="a. Personal Income" placeholder="Amount in Rs." name="E9_a" value={formE26.E9_a} onChange={handleChange(setFormE26)} />

                        <InputField h3="b. Household income excluding personal income" placeholder="Amount in Rs." name="E9_b" value={formE26.E9_b} onChange={handleChange(setFormE26)} />

                        <InputField h3="c. Savings" placeholder="Amount in Rs." name="E9_c" value={formE26.E9_c} onChange={handleChange(setFormE26)} />

                        <InputField h3="d. Loan from Bank" placeholder="Amount in Rs." name="E9_d" value={formE26.E9_d} onChange={handleChange(setFormE26)} />

                        <InputField h3="e. Borrowed from friends/relatives" placeholder="Amount in Rs." name="E9_e" value={formE26.E9_e} onChange={handleChange(setFormE26)} />

                        <InputField h3="f. Contribution from friends/relatives" placeholder="Amount in Rs." name="E9_f" value={formE26.E9_f} onChange={handleChange(setFormE26)} />

                        <InputField h3="g. Selling assets/property/jewellery" placeholder="Amount in Rs." name="E9_g" value={formE26.E9_g} onChange={handleChange(setFormE26)} />

                        <InputField h3="h. Insurance coverage" placeholder="Amount in Rs." name="E9_h" value={formE26.E9_h} onChange={handleChange(setFormE26)} />

                        <InputField h3="i. Reimbursement from employer" placeholder="Amount in Rs." name="E9_i" value={formE26.E9_i} onChange={handleChange(setFormE26)} />

                        <InputField h3="j. Other (Specify)" placeholder="Amount in Rs." name="E9_j" value={formE26.E9_j} onChange={handleChange(setFormE26)} />

                        <InputField h3="E.10 Based on your experience what suggestion would you like to make to the government to improve the emergency services in your district? " placeholder="Type here" name="E10" value={formE26.E10} onChange={handleChange(setFormE26)} />


                        <CSTButton formName="forme26" formData={formE26} prev="/barriers-and-facilitators2" next="/verbal-&-social-autopsy1" prevText="Previous" nextText="Save & Next" />
                    </div>
                </div>
            </section>
        </div>
    )
}

export default FormE26