import React, { useEffect, useMemo, useState } from 'react'
import { handleChange, turnOffbutton } from '../helpers'
import SidePanel from './SidePanelCST.jsx';
import DropDown from '../child-comp/DropDown';
import Radio from "../child-comp/Radio.jsx"
import "../Form.css"
import Buttons from '../child-comp/Buttons';
import InputField from '../child-comp/InputField';
import setLocalStorage, { getLocalStorage } from '../setLocalStorage.js';
import Heading from '../../Heading/Heading.jsx';
import LocationButton from '../child-comp/Location.jsx';
import CSTLastButton from '../child-comp/CSTLastButton.jsx';
import ShortUniqueId from "short-unique-id"
import LastButton from '../child-comp/LastButton.jsx';
import { GJBRC, MPBHS, ORPUR, PBLDH, PYPDY } from "../BlockItem/blockList.js";

const uid = new ShortUniqueId({ length: 10 });
console.log(uid.rnd());

function FormA2() {
    var forma2 = setLocalStorage("forma2", { AB1: "", AB2: "", AB3: "", AB4: {}, AB5: "", AB6: "" })
    let CSTuniqueCode = getLocalStorage("CSTuniqueCode") ?? "";
    let formA1 = getLocalStorage("forma1");
    
    const [formA2, setFormA2] = useState(JSON.parse(forma2))
    // const [dropdownItems, setDropdownItems] = useState(["em"]);

    turnOffbutton();

    const dropdownItems = useMemo(() => {
        switch (formA1.AA2) {
          case "GJBRC_CS":
            return GJBRC;
          case "ORPUR_CS":
            return ORPUR;
          case "MPBHS_CS":
            return MPBHS;
          case "PBLDH_CS":
            return PBLDH;
          case "PYPDY_CS":
            return PYPDY;
          default:
            return [];
        }
      }, [formA1.AA2]);
    
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
        dropdownItems
        setFormA2((prevValue) => {
            return (formA2.AB5 === "") ? (
                {
                    ...prevValue,
                    AB5: `${CSTuniqueCode.Household_ID}`
                }
            ) : (
                {
                    ...prevValue,
                }
            )
        })
        
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
                    <SidePanel id={"2"} />
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
                                Cluster Information
                            </h3>
                        </div>
                    </div>

                    <div className="formcontent cont_extra">
                    {/* <div className="formcontent cont_extra fbox"> */}
                        {/* <div className="fbox1"> */}

                            <DropDown className='dropdown' onClick={handleChange(setFormA2)} name={"AB1"} h3="AB.1 Block :" byDefault={formA2.AB1} 
                            dropdownItems={dropdownItems}
                            />


                            <Radio h3="AB.2 Type of PSU :" CheckbobItems={["Rural", "Urban"]} name="AB2" onClick={handleChange(setFormA2)} byDefault={formA2.AB2} />

                            <InputField h3="AB.3  Name of PSU (Town/Village) :" placeholder="Type here" name="AB3" onChange={handleChange(setFormA2)} value={formA2.AB3} />

                            <LocationButton
                                setter={setFormA2}
                                Name="AB4"
                                heading={"AB.4  GPS Co-ordinates"}
                            />

                            <div className='block'>
                                <h3 className='h3block'>AB.5 Household ID Number :</h3>
                                <input
                                    className='blockinput'
                                    value={formA2.AB5}
                                    name="AB5"
                                    readOnly
                                />
                            </div>

                            <Radio h3="AB.6 For how long have you been living in this city/ village with your family?" CheckbobItems={["< 1 year", "> 1 year"]} name="AB6" byDefault={formA2.AB6} onClick={handleChange(setFormA2)} />
                        {/* </div> */}

                            {
                                (formA2.AB6 === "< 1 year")
                                    ?
                                    <CSTLastButton previous="/siteinformation" formName={"forma2"} formData={formA2} />
                                    :
                                    <>
                                        <h4><i>I would like to ask few questions pertaining to people staying in the same household including both family and non-family members for the last 1 year like servants included but paying guests not included.</i></h4>

                                        <Buttons formName={"forma2"} formData={formA2} prev="/siteinformation" next="/linelistingofhouseholdmembers-1" prevText="Previous" nextText="Save & Next" />
                                    </>
                            }
                        
                    </div>
                </div>
            </section>
        </div>
    )
}

export default FormA2