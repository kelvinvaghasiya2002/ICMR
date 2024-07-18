import React, { useState, useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Checkbox from '../child-comp/Checkbox';
import SidePanel from './SidePanelHFAT1';
import Buttons from '../child-comp/Buttons';
import Radio from '../child-comp/Radio';
import InputField from '../child-comp/InputField';
import { handleChange, turnOffbutton } from '../helpers';
import setLocalStorage from '../setLocalStorage';
import Heading from '../../Heading/Heading';

function FormH() {

  var formh = setLocalStorage("formh",
    { H1H1: "", H1H2: "", H1H3: "", H1H4: "", H1H5: "", H1H6: "", H1H7: "", H1H8: [""], H1H9: "" })

  const [formH, setFormH] = useState(JSON.parse(formh));
  const [errors, setErrors] = useState({});
  console.log(formH.H1H4);

  useEffect(() => {
    AOS.init({ duration: 2000 })
  }, []);

  useEffect(() => {
    if (formH.H1H4 === "No") {
      setFormH((prevValue) => {
        return {
          ...prevValue,
          H1H5: "", H1H6: "", H1H7: "", H1H8: [""], H1H9: ""
        }
      })
    }

    if (formH.H1H6 === "No") {
      setFormH((prevValue) => {
        return {
          ...prevValue,
          H1H7: "", H1H8: [""], H1H9: ""
        }
      })
    }
  }, [formH.H1H4, formH.H1H6])

  turnOffbutton();

  const validateForm = () => {
    const newErrors = {};

    // Validate H1H1
    if (!formH.H1H1) {
      newErrors.H1H1 = "This field is required";
  }

  // Validate H1H2
  if (!formH.H1H2) {
      newErrors.H1H2 = "This field is required";
  }

  // Validate H1H3
  if (!formH.H1H3) {
      newErrors.H1H3 = "This field is required";
  }

  // Validate H1H4 and conditional fields
  if (!formH.H1H4) {
      newErrors.H1H4 = "This field is required";
  } else {
      if (formH.H1H4 !== "No") {
          if (!formH.H1H5) {
              newErrors.H1H5 = "This field is required";
          }
          if (!formH.H1H6) {
              newErrors.H1H6 = "This field is required";
          } else if (formH.H1H6 === "Yes") {
              if (!formH.H1H7) {
                  newErrors.H1H7 = "This field is required";
              }
              if (formH.H1H8.length === 0) {
                  newErrors.H1H8 = "Select at least one option";
              }
              if (!formH.H1H9) {
                  newErrors.H1H9 = "This field is required";
              }
          }
      }
  }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  return (
    <div>
      <Heading h2="Health Facility Assessment Tool 1: District Hospital/Tertiary Care (Public or Private)"></Heading>
      <section>
        <SidePanel id={"8"} />
        <div className="siteInfo" data-aos="fade-left">

          <div className="formhdr">
            <div>
              <h3>
                1H. Leadership and Governance
              </h3>
            </div>
          </div>

          <div className="formcontent">

            <h3 style={{ color: "#3177FF" }}>Disaster management plan :</h3>

            <Radio byDefault={formH.H1H1} onClick={handleChange(setFormH)} name="H1H1" h3="1H.1.1 : Do you have any disaster management plan?" CheckbobItems={["Yes", "No"]} errorMsg={errors.H1H1}
              required={true} />

            <Radio byDefault={formH.H1H2} onClick={handleChange(setFormH)} name="H1H2" h3="1H.1.2 : Do you have a redistribution plan?" CheckbobItems={["Yes", "No"]} errorMsg={errors.H1H2}
              required={true} />

            <Radio byDefault={formH.H1H3} onClick={handleChange(setFormH)} name="H1H3" h3="1H.1.3 : Do you have any evacuation plan?" CheckbobItems={["Yes", "No"]} errorMsg={errors.H1H3}
              required={true} />

            <h3 style={{ color: "#3177FF" }}>Quality Improvement Plan :</h3>


            <Radio CheckbobItems={["Yes", "No"]} name="H1H4" h3="1H.2.1 : Do you have a Quality Improvement Committee? (if yes, collect detail of Committee)" onClick={handleChange(setFormH)} byDefault={formH.H1H4} otherArray={[1, 0]} setter={setFormH} st={{ borderTop: 'none', borderLeft: 'none', borderRight: 'none', borderBottom: '1px solid black', borderRadius: "0" }} errorMsg={errors.H1H4}
              required={true} />



            {
              (formH.H1H4 !== "No" && formH.H1H4 !== "") &&

              <>

                <InputField value={formH.H1H5} onChange={handleChange(setFormH)} name="H1H5" h3="1H.2.2 : How frequently does this committee meet in a year?" placeholder="Type here" errorMsg={errors.H1H5}
                  required={true} />


                <Radio byDefault={formH.H1H6} onClick={handleChange(setFormH)} name="H1H6" h3="1H.2.3 : Do you have regular audits related to emergency care in hospital?" CheckbobItems={["Yes", "No"]} errorMsg={errors.H1H6}
                  required={true} />

                {
                  (formH.H1H6 === "Yes") &&
                  <>
                    <InputField value={formH.H1H7} onChange={handleChange(setFormH)} name="H1H7" h3="1H.2.4 : How frequently audits are conducted in a year?" placeholder="Type here" errorMsg={errors.H1H7}
                      required={true} />

                    <Checkbox setFunction={setFormH} array={formH.H1H8} StateValue={formH} name="H1H8" h3="1H.2.5 : Types of audits conducted?" CheckbobItems={["Mortality Audit", "Morbidity Audit"]} other={true} errorMsg={errors.H1H8}
                      required={true} />

                    <InputField value={formH.H1H9} onChange={handleChange(setFormH)} name="H1H9" h3="1H.2.6 : Any action being taken on Audit report in the last one year?" placeholder="Type here" errorMsg={errors.H1H9}
                      required={true} />
                  </>
                }
              </>
            }

            <Buttons
              formName="formh"
              formData={formH}
              prevText="Previous"
              nextText="Save & Next"
              prev="/finance"
              next="/processpoliciessops"
              validateForm={validateForm}
            />

            {Object.keys(errors).length > 0 && (
              <div className="error-msg">
                Please fill out all required fields before proceeding.
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  )
}

export default FormH