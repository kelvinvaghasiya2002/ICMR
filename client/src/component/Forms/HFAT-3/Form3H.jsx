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


function Form3H() {
  turnOffbutton();

  var form3h = setLocalStorage("form3h",
    { H3H1: "", H3H2: "", H3H3: "", H3H4: "", H3H5: "", H3H6: "", H3H7: "", H3H8: [""], H3H9: "" })

  const [form3H, setForm3H] = useState(JSON.parse(form3h));
  const [errors, setErrors] = useState({});
  const [showOverlay, setShowOverlay] = useState(false);

  useEffect(() => {
    if (form3H.H3H4 === "No") {
      setForm3H((prevValue) => {
        return { ...prevValue, H3H5: "" };
      });
    }
    if (form3H.H3H6 === "No") {
      setForm3H((prevValue) => {
        return { ...prevValue, H3H7: "", H3H8: [""], H3H9: "" }
      })
    }
  }, [form3H.H3H6, form3H.H3H4])

  const validateForm = () => {
    const newErrors = {};

    if (form3H.H3H4 === 'Yes' && !form3H.H3H5 && !form3H.H3H6) {
      newErrors.H3H5 = validateNumber(form3H.H3H5) || validateRequired(form3H.H3H5);
      newErrors.H3H5 = "Required to fill frequently does this committee meet in a year";

      newErrors.H3H6 = "Required to check regular audits related to emergency care in hospital";
    }

    if (form3H.H3H6 === 'Yes' && !form3H.H3H7 && !form3H.H3H9) {
      newErrors.H3H7 = validateRequired(form3H.H3H7);
      newErrors.H3H7 = "Required to fill frequently audits are conducted in a year?";

      newErrors.H3H9 = validateRequired(form3H.H3H9);
      newErrors.H3H9 = "Required to fill the audit report in the last one year";
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
        newErrors[field] = validateRequired(form3H[field]);
      });
      setErrors(newErrors);
    } else {
      setErrors({});
    }
  }, [form3H]);

  const isFormValid = () => {
    const requiredFields = ['H3H1', 'H3H2', 'H3H3', 'H3H4', 'H3H6'];
    if (form3H.H3H4 === "Yes") {
      requiredFields.push('H3H5');
    }
    if (form3H.H3H6 === "Yes") {
      requiredFields.push('H3H7');
      requiredFields.push('H3H9');
    }
    const missingFields = requiredFields.filter(field => !form3H[field] || (typeof form3H[field] === 'string' && form3H[field].trim() === ''));
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
  }, [form3H]);

  const handleChangeWithValidation = (e) => {
    const { name, value } = e.target;
    let validatedValue = value;
    let error = '';

    switch (name) {
      case 'H3H5':   //5,7,9
        error = validateNumber(value) || validateRequired(value);
        if (!error) {
          validatedValue = value;
        } else {
          validatedValue = form3H[name];
          e.preventDefault(); // Prevent default behavior if the input was invalid
        }
        break;
      case 'H3H7':
        error = validateRequired(value);
        if (!error) {
          validatedValue = value;
        }
        else {
          validatedValue = form3H[name];
          e.preventDefault();
        }
        break;
      case 'H3H9':
        error = validateRequired(value);
        if (!error) {
          validatedValue = value;
        }
        else {
          validatedValue = form3H[name];
          e.preventDefault();
        }
        break;
      default:
        break;
    }

    setForm3H(prevValue => ({ ...prevValue, [name]: validatedValue }));

    // Perform additional required validation
    switch (name) {
      case 'H3H5':
        error = error || validateRequired(validatedValue) || validateNumber(validatedValue);
        break;
      case 'H3H7':
        error = error || validateRequired(validatedValue)
        break;
      case 'H3H9':
        error = error || validateRequired(validatedValue)
        break;
      default:
        break;
    }

    setErrors(prevErrors => ({ ...prevErrors, [name]: error }));
  };




  return (
    <div>
      <Heading h2="Health Facility Assessment Tool 3: Primary Health Centre"></Heading>
      <section>
        <SidePanel id={"8"} />
        <div className="siteInfo">

          <div className="formhdr">
            <div>
              <h3>
                3H. Leadership and Governance
              </h3>
            </div>
          </div>

          <div className="formcontent">

            <h3 style={{ color: "#3177FF" }}>Disaster management plan :</h3>

            <Radio byDefault={form3H.H3H1} onClick={handleChange(setForm3H)} name="H3H1" h3="3H.1.1 : Do you have any disaster management plans if any catastrophe takes place at PHC (fire, building collapse, earthquake, etc. affecting the PHC)?" CheckbobItems={["Yes", "No"]} />

            <Radio byDefault={form3H.H3H2} onClick={handleChange(setForm3H)} name="H3H2" h3="3H.1.2 : Do you have a redistribution plan (management plan in case human resource/ logistics scarcity)?" CheckbobItems={["Yes", "No"]} />

            <Radio byDefault={form3H.H3H3} onClick={handleChange(setForm3H)} name="H3H3" h3="3H.1.3 : Do you have any evacuation plan?" CheckbobItems={["Yes", "No"]} />

            <h3 style={{ color: "#3177FF" }}>Quality Improvement Plan :</h3>


            <Radio byDefault={form3H.H3H4} onClick={handleChange(setForm3H)} name="H3H4" h3="3H.2.1 : Do you have a Quality Improvement Committee? (if yes, collect detail of Committee)" otherArray={[1, 0]} CheckbobItems={["Yes", "No"]} />

            {form3H.H3H4 !== 'No' &&
              <>
                <InputField value={form3H.H3H5} onChange={handleChangeWithValidation} name="H3H5" h3="3H.2.2 : How frequently does this committee meet in a year?" placeholder="Type here" errorMsg={errors.H1H5} />
              </>
            }



            <Radio byDefault={form3H.H3H6} onClick={handleChange(setForm3H)} name="H3H6" h3="3H.2.3 : Do you have regular audits related to emergency care in hospital?" CheckbobItems={["Yes", "No"]} />

            {
              (form3H.H3H6 === 'Yes') &&
              <>
                <InputField value={form3H.H3H7} onChange={handleChangeWithValidation} name="H3H7" h3="3H.2.4 : How frequently audits are conducted in a year?" placeholder="Type here" errorMsg={errors.H1H7} />


                <Checkbox setFunction={setForm3H} StateValue={form3H} array={form3H.H3H8} name="H3H8" h3="3H.2.5 : Types of audits conducted?" CheckbobItems={["Mortality Audit", "Morbidity Audit"]} other={true} />


                <Radio onClick={handleChange(setForm3H)} name="H3H9" h3="3H.2.6 : Any action being taken on Audit report in the last one year?" byDefault={form3H.H3H9} CheckbobItems={["Yes", "No"]} />
              </>
            }

            <div className="button-container">
              <Buttons formData={form3H} formName="form3h" prevText="Previous" nextText="Save & Next" prev="/finance-3" next="/processpoliciessops-3" />

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

export default Form3H