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

function FormC20() {
    var formc20 = setLocalStorage("formc20", { C1: "", C2: [], C3: "", C4: ""})
    const [formC20, setFormC20] = useState(JSON.parse(formc20))
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
        if (formC20.C1 !== "Medical team") {
          setFormC20({ ...formC20, C2: [], C3: "", C4: "" })
        }
      }, [formC20.C1])

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
                    <SidePanel id={"20"} />
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
                            Referral Facility
                            </h3>
                        </div>
                    </div>

                    <div className="formcontent cont_extra">

                        <Radio onClick={handleChange(setFormC20)} h3="C.1  Who took the decision to refer/ shift the patient to another facility?  " CheckbobItems={["Medical team", "Self/family","Other"]} name="C1" otherArray={[0, 0,1]} setter={setFormC20} byDefault={formC20.C1} />

                        {
                            (formC20.C1 === "Medical team") &&
                            <>
                             <Checkbox
                            h3="C.2  If referral was suggested by the medical team, what was the reason given for referral? "
                            CheckbobItems={[
                                "Serious illness requiring higher centre",
                                "Unavailability of doctor",
                                "Unavailability of specialist",
                                "Medicines unavailable",
                                "Admission facility unavailable",
                                "Unavailability of bed",
                                "Inappropriate staff behaviour",
                                "Others"
                                // other specify baaki 6
                            ]}
                            name="C2" setFunction={setFormC20} StateValue={formC20} array={formC20.C2} 
                        />

                        <Radio onClick={handleChange(setFormC20)} h3="C.3  Which facility were you referred? " CheckbobItems={["SC/HWC/(Ayushman Arogya Mandir)", "PHC", "CHC", "District Headquarter Hospital/ Equivalent Facility", "Medical College","Private hospital","Private clinic"]} name="C3" byDefault={formC20.C3} />

                        <Radio onClick={handleChange(setFormC20)} h3="C.4  If referred by a health facility, was a referral slip given?" CheckbobItems={["Yes", "No", "Don’t know"]} name="C4" byDefault={formC20.C4} />

                            </>
                        }

                        <CSTButton formName="formc20" formData={formC20} prev="/initialhealthcareseekingpathway-3" next="/referral-facility2" prevText="Previous" nextText="Save & Next" />
                    </div>
                </div>
            </section>
        </div>
    )

}

export default FormC20