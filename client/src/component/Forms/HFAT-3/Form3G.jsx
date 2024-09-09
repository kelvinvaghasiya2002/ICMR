import React, { useEffect, useState } from 'react'
import Checkbox from '../child-comp/Checkbox';
import SidePanel from './SidePanelHFAT3';
import Buttons from '../child-comp/Buttons';
import Radio from '../child-comp/Radio';
import InputField from '../child-comp/InputField';
import { handleChange, turnOffbutton } from '../helpers';
import setLocalStorage from '../setLocalStorage';
import Heading from '../../Heading/Heading.jsx';
import { validateName, validateNumber, validateRequired, validateEmail } from '../fv.js';
import OverlayCard from '../OverlayCard.jsx';

function Form3G() {
  turnOffbutton();
  var form3g = setLocalStorage("form3g",
    { H3G1: "", H3G2: "", H3G3: "", H3G4: "", H3G5: "", H3G6: "" })

  const [form3G, setForm3G] = useState(JSON.parse(form3g));
  const [errors, setErrors] = useState({});
  const [showOverlay, setShowOverlay] = useState(false);

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
    if (form3G.H3G1 === "No") {
      setForm3G((prevValue) => {
        return { ...prevValue, H3G2: "" }
      })
    }

    if (form3G.H3G3 === "No") {
      setForm3G((prevValue) => {
        return { ...prevValue, H3G4: "", H3G5: "" }
      })
    }
  }, [form3G.H3G3, form3G.H3G1])

  const validateForm = () => {
    const newErrors = {};

    if (form3G.H3G1 === 'Yes' && !form3G.H3G2) newErrors.H3G2 = 'Required to check whether this fund is utilized for providing emergency care services'
    if (form3G.H3G3 === 'Yes' && !form3G.H3G4 && !form3G.H3G5) {
        newErrors.H3G4 = 'Required to fill which health protection schemes are covering your emergency care system'
        newErrors.H3G5 = 'Required to how many were provided services under PMJAY scheme/ any other insurance scheme'
        newErrors.H3G5 = validateRequired(form3G.H3G5) || validateNumber(form3G.H3G5);
    }


    setErrors(newErrors);
    setShowOverlay(Object.keys(newErrors).some(key => newErrors[key] !== undefined));
};

useEffect(() => {
    const { isValid, missingFields } = isFormValid();
    setShowOverlay(!isValid);
    if (!isValid) {
        const newErrors = {};
        missingFields.forEach(field => {
            newErrors[field] = validateRequired(form3G[field]);
        });
        setErrors(newErrors);
    } else {
        setErrors({});
    }
}, [form3G]);

const isFormValid = () => {
    const requiredFields = ['H3G1', 'H3G3', 'H3G6'];
    if (form3G.H3G1 === "Yes") {
        requiredFields.push('H3G2');
    }
    if (form3G.H3G3 === "Yes") {
        requiredFields.push('H3G4');
        requiredFields.push('H3G5');
    }
    const missingFields = requiredFields.filter(field => !form3G[field] || (typeof form3G[field] === 'string' && form3G[field].trim() === ''));
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
}, [form3G]);

const handleChangeWithValidation = (e) => {
    const { name, value } = e.target;
    let validatedValue = value;
    let error = '';

    switch (name) {
        case 'H3G5':
            error = validateNumber(value);
            if (!error) {
                validatedValue = value;
            } else {
                validatedValue = form3G[name];
                e.preventDefault(); // Prevent default behavior if the input was invalid
            }
            break;
        default:
            break;
    }

    setForm3G(prevValue => ({ ...prevValue, [name]: validatedValue }));

    // Perform additional required validation
    switch (name) {
        case 'H3G5':
            error = error || validateRequired(validatedValue);
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
                <Heading h2="Health Facility Assessment Tool 3: Primary Health Centre"></Heading>
      </div>
      <section className="form-main">
                {isSidebarVisible && (
                <>
                    <SidePanel id={"7"} />
                    <div className="grayedover" onClick={toggleSidebar}></div>
                </>
                )}

        <div className="siteInfo">

          <div className="formhdr">
            <div>
              <h3>
                3G. Finance
              </h3>
            </div>
          </div>

          <div className="formcontent cont_extra fbox">
            <div className="fbox1">

              <Radio byDefault={form3G.H3G1} onClick={handleChange(setForm3G)} name="H3G1" h3="3G.1 : Whether any untied fund is available at your hospital?" CheckbobItems={["Yes", "No"]} />

              {
                (form3G.H3G1 === 'Yes') &&
                <>
                  <Radio byDefault={form3G.H3G2} onClick={handleChange(setForm3G)} name="H3G2" h3="3G.2 : If yes, whether this fund is utilized for providing emergency care services?" CheckbobItems={["Yes", "No"]} />
                </>
              }

              <Radio byDefault={form3G.H3G3} onClick={handleChange(setForm3G)} name="H3G3" h3="3G.3 : Whether any fund is available for emergency care?" CheckbobItems={["Yes", "No"]} />

              {
                (form3G.H3G3 === 'Yes') &&
                <>
                  <Radio byDefault={form3G.H3G4} onClick={handleChange(setForm3G)} name="H3G4" h3="3G.4 : If funds are available, which health protection schemes are covering your emergency care system?" CheckbobItems={["PMJAY", "RKS", "Others (Specify)"]} otherArray={[0, 0, 1]} setter={setForm3G} other={true} />

                  <InputField value={form3G.H3G5} onChange={handleChangeWithValidation} name="H3G5" h3="3G.5 : Out of total patients being provided emergency care, how many were provided services under PMJAY scheme/ any other insurance scheme." placeholder="Type family member" />
                </>
              }

              <Radio byDefault={form3G.H3G6} onClick={handleChange(setForm3G)} name="H3G6" h3="3G.6 : Is the facility providing free emergency services to pregnant women, mothers, and neonates as per prevalent government schemes?" CheckbobItems={["Yes", "No"]} />
            </div>

            <div className="button-container">
            <Buttons formName="form3g" formData={form3G} prevText="Previous" nextText="Save & Next" prev="/informationsystem-3" next="/leadershipandgovernance-3" />

                            <OverlayCard
                                isVisible={showOverlay}
                                message="Please fill all required fields to proceed."
                            />
                        </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Form3G