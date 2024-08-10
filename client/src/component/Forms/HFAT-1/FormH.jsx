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
import { validateName, validateNumber, validateRequired, validateEmail } from '../fv.js';
import OverlayCard from '../OverlayCard.jsx';

function FormH() {

    // --toggle--
    const [isSidebarVisible, setSidebarVisible] = useState(window.innerWidth > 1024);
    const toggleSidebar = () => {
      setSidebarVisible(!isSidebarVisible);
    };
    const handleResize = () => {
      if (window.innerWidth >= 1025) {
        setSidebarVisible(true);
      }
    };
  
    // useEffect(() => {
    //   window.addEventListener('resize', handleResize);
    //   return () => {
    //     window.removeEventListener('resize', handleResize);
    //   };
    // }, []);
    // --toggle end--

  var formh = setLocalStorage("formh",
    { H1H1: "", H1H2: "", H1H3: "", H1H4: "", H1H5: "", H1H6: "", H1H7: "", H1H8: [""], H1H9: "" })

  const [formH, setFormH] = useState(JSON.parse(formh));
  const [errors, setErrors] = useState({});
  const [showOverlay, setShowOverlay] = useState(false);
  console.log(formH.H1H4);

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    AOS.init({ duration: 2000 })
    return () => {
      window.removeEventListener('resize', handleResize);
    };
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

    if (formH.H1H4 === 'Yes' && !formH.H1H5 && !formH.H1H6) {
      newErrors.H1H5 = validateNumber(formH.H1H5) || validateRequired(formH.H1H5);
      newErrors.H1H5 = "Required to fill frequently does this committee meet in a year";

      newErrors.H1H6 = "Required to check regular audits related to emergency care in hospital";
    }

    if (formH.H1H6 === 'Yes' && !formH.H1H7 && !formH.H1H9) {
      newErrors.H1H7 = validateRequired(formH.H1H7);
      newErrors.H1H7 = "Required to fill frequently audits are conducted in a year?";

      newErrors.H1H9 = validateRequired(formH.H1H9);
      newErrors.H1H9 = "Required to fill the audit report in the last one year";
    }
    //   // Validate H1H1
    //   if (!formH.H1H1) {
    //     newErrors.H1H1 = "This field is required";
    // }

    // // Validate H1H2
    // if (!formH.H1H2) {
    //     newErrors.H1H2 = "This field is required";
    // }

    // // Validate H1H3
    // if (!formH.H1H3) {
    //     newErrors.H1H3 = "This field is required";
    // }

    // // Validate H1H4 and conditional fields
    // if (!formH.H1H4) {
    //     newErrors.H1H4 = "This field is required";
    // } else {
    //     if (formH.H1H4 !== "No") {
    //         if (!formH.H1H5) {
    //             newErrors.H1H5 = "This field is required";
    //         }
    //         if (!formH.H1H6) {
    //             newErrors.H1H6 = "This field is required";
    //         } else if (formH.H1H6 === "Yes") {
    //             if (!formH.H1H7) {
    //                 newErrors.H1H7 = "This field is required";
    //             }
    //             if (formH.H1H8.length === 0) {
    //                 newErrors.H1H8 = "Select at least one option";
    //             }
    //             if (!formH.H1H9) {
    //                 newErrors.H1H9 = "This field is required";
    //             }
    //         }
    //     }
    // }

    //   setErrors(newErrors);
    //   return Object.keys(newErrors).length === 0;

    setErrors(newErrors);
    setShowOverlay(Object.keys(newErrors).some(key => newErrors[key] !== undefined));
  };

  useEffect(() => {
    const { isValid, missingFields } = isFormValid();
    setShowOverlay(!isValid);
    if (!isValid) {
      const newErrors = {};
      missingFields.forEach(field => {
        newErrors[field] = validateRequired(formH[field]);
      });
      setErrors(newErrors);
    } else {
      setErrors({});
    }
  }, [formH]);

  const isFormValid = () => {
    const requiredFields = ['H1H1', 'H1H2', 'H1H3', 'H1H4'];
    if (formH.H1H4 === "Yes") {
      requiredFields.push('H1H5');
      requiredFields.push('H1H6');
    }
    if (formH.H1H6 === "Yes") {
      requiredFields.push('H1H7');
      requiredFields.push('H1H9');
    }
    const missingFields = requiredFields.filter(field => !formH[field] || (typeof formH[field] === 'string' && formH[field].trim() === ''));
    return { isValid: missingFields.length === 0, missingFields };
  };

  useEffect(() => {
    const { isValid, missingFields } = isFormValid();
    setShowOverlay(!isValid);
    if (!isValid) {
      const newErrors = {};
      missingFields.forEach(field => {
        newErrors[field] = 'This field is required';
      });
      setErrors(newErrors);
    } else {
      setErrors({});
    }
  }, [formH]);

  const handleChangeWithValidation = (e) => {
    const { name, value } = e.target;
    let validatedValue = value;
    let error = '';

    switch (name) {
      case 'H1H5':   //5,7,9
        error = validateNumber(value) || validateRequired(value);
        if (!error) {
          validatedValue = value;
        } else {
          validatedValue = formH[name];
          e.preventDefault(); // Prevent default behavior if the input was invalid
        }
        break;
      case 'H1H7':
        error = validateRequired(value);
        if (!error) {
          validatedValue = value;
        }
        else {
          validatedValue = formH[name];
          e.preventDefault();
        }
        break;
      case 'H1H9':
        error = validateRequired(value);
        if (!error) {
          validatedValue = value;
        }
        else {
          validatedValue = formH[name];
          e.preventDefault();
        }
        break;
      default:
        break;
    }

    setFormH(prevValue => ({ ...prevValue, [name]: validatedValue }));

    // Perform additional required validation
    switch (name) {
      case 'H1H5':
        error = error || validateRequired(validatedValue) || validateNumber(validatedValue);
        break;
      case 'H1H7':
        error = error || validateRequired(validatedValue)
        break;
      case 'H1H9':
        error = error || validateRequired(validatedValue)
        break;
      default:
        break;
    }

    setErrors(prevErrors => ({ ...prevErrors, [name]: error }));
  };

  return (
    <div>
      <div className="header">
        <div className="burger-menu" onClick={toggleSidebar}>
          &#9776;
        </div>
        <Heading h2="Health Facility Assessment Tool 1: District Hospital/Tertiary Care (Public or Private)"></Heading>
      </div>
      <section className="form-main">
        {isSidebarVisible && (
          <>
            <SidePanel id={"8"} />
            <div className="grayedover" onClick={toggleSidebar}></div>
          </>
        )}
        {/* <SidePanel id={"8"} /> */}
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
            />

            <Radio byDefault={formH.H1H2} onClick={handleChange(setFormH)} name="H1H2" h3="1H.1.2 : Do you have a redistribution plan?" CheckbobItems={["Yes", "No"]} errorMsg={errors.H1H2}
            />

            <Radio byDefault={formH.H1H3} onClick={handleChange(setFormH)} name="H1H3" h3="1H.1.3 : Do you have any evacuation plan?" CheckbobItems={["Yes", "No"]} errorMsg={errors.H1H3}
            />

            <h3 style={{ color: "#3177FF" }}>Quality Improvement Plan :</h3>


            <Radio CheckbobItems={["Yes", "No"]} name="H1H4" h3="1H.2.1 : Do you have a Quality Improvement Committee? (if yes, collect detail of Committee)" onClick={handleChange(setFormH)} byDefault={formH.H1H4} otherArray={[1, 0]} setter={setFormH} st={{ borderTop: 'none', borderLeft: 'none', borderRight: 'none', borderBottom: '1px solid black', borderRadius: "0" }} errorMsg={errors.H1H4}
            />



            {
              (formH.H1H4 !== "No" && formH.H1H4 !== "") &&

              <>

                <InputField value={formH.H1H5} onChange={handleChangeWithValidation} name="H1H5" h3="1H.2.2 : How frequently does this committee meet in a year?" placeholder="Type here" errorMsg={errors.H1H5}
                  required={true} />


                <Radio byDefault={formH.H1H6} onClick={handleChange(setFormH)} name="H1H6" h3="1H.2.3 : Do you have regular audits related to emergency care in hospital?" CheckbobItems={["Yes", "No"]} errorMsg={errors.H1H6}
                />

                {
                  (formH.H1H6 === "Yes") &&
                  <>
                    <InputField value={formH.H1H7} onChange={handleChangeWithValidation} name="H1H7" h3="1H.2.4 : How frequently audits are conducted in a year?" placeholder="Type here" errorMsg={errors.H1H7}
                      required={true} />

                    <Checkbox setFunction={setFormH} array={formH.H1H8} StateValue={formH} name="H1H8" h3="1H.2.5 : Types of audits conducted?" CheckbobItems={["Mortality Audit", "Morbidity Audit"]} other={true} errorMsg={errors.H1H8}
                      required={true} />

                    <InputField value={formH.H1H9} onChange={handleChangeWithValidation} name="H1H9" h3="1H.2.6 : Any action being taken on Audit report in the last one year?" placeholder="Type here" errorMsg={errors.H1H9}
                      required={true} />
                  </>
                }
              </>
            }


            <div className="button-container">
              <Buttons
                formName="formh"
                formData={formH}
                prevText="Previous"
                nextText="Save & Next"
                prev="/finance"
                next="/processpoliciessops"
                // validateForm={validateForm}
              />

              <OverlayCard
                isVisible={showOverlay}
                message="(Please fill all required fields to proceed)"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default FormH