import React, { useState, useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import SidePanel from './SidePanelHFAT1';
import Buttons from '../child-comp/Buttons';
import Radio from '../child-comp/Radio';
import InputField from '../child-comp/InputField';
import { handleChange, turnOffbutton } from '../helpers';
import setLocalStorage from '../setLocalStorage';
import Heading from '../../Heading/Heading';

function FormG() {

  var formg = setLocalStorage("formg",
    { H1G1: "", H1G2: "", H1G3: "", H1G4: "", H1G5: "" })

  const [formG, setFormG] = useState(JSON.parse(formg));

  useEffect(() => {
    AOS.init({ duration: 2000 })
  }, []);

  useEffect(() => {
    if (formG.H1G1 === "No") {
      setFormG((prevValue) => {
        return {
          ...prevValue,
          H1G2: "",
        }
      })
    }

    if (formG.H1G3 === "No") {
      setFormG((prevValue) => {
        return {
          ...prevValue,
          H1G4: ""
        }
      }
      )
    }
  }, [formG.H1G1, formG.H1G3])

  turnOffbutton();

  return (
    <div>
      <Heading h2="Health Facility Assessment Tool 1: District Hospital/Tertiary Care (Public or Private)"></Heading>
      <section>
        <SidePanel id={"7"} />
        <div className="siteInfo" data-aos="fade-left">

          <div className="formhdr">
            <div>
              <h3>
                1G. Finance </h3>
            </div>
          </div>

          <div className="formcontent cont_extra">

            <Radio byDefault={formG.H1G1} onClick={handleChange(setFormG)} name="H1G1" h3="1G.1 : Whether any untied fund is available at your hospital?" CheckbobItems={["Yes", "No"]} />

            {
              (formG.H1G1 === "Yes") &&
              <Radio byDefault={formG.H1G2} onClick={handleChange(setFormG)} name="H1G2" h3="1G.2 : If yes, whether this fund is utilized for providing emergency care services?" CheckbobItems={["Yes", "No"]} />
            }

            <Radio byDefault={formG.H1G3} onClick={handleChange(setFormG)} name="H1G3" h3="1G.3 : Whether any fund is available for emergency care?" CheckbobItems={["Yes", "No"]} />

            {
              (formG.H1G3 === "Yes") &&
              <InputField value={formG.H1G4} onChange={handleChange(setFormG)} name="H1G4" h3="1G.4 : If yes, which health schemes are covering your emergency care system?" placeholder="Type here" />
            }

            <InputField value={formG.H1G5} onChange={handleChange(setFormG)} name="H1G5" h3="1G.5 : Out of total patients being provided emergency care, how many were provided services under PMJAY scheme/ any other insurance scheme." placeholder="Type here" />

            <Buttons formName="formg" formData={formG} prevText="Previous" nextText="Save & Next" prev="/informationsystem" next="/leadershipandgovernance" />
          </div>
        </div>
      </section>
    </div>
  )
}

export default FormG