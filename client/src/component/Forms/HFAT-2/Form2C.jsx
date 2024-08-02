import React, { useState, useEffect } from "react";
import Checkbox from "../child-comp/Checkbox";
import SidePanel from "./SidePanelHFAT2";
import Buttons from "../child-comp/Buttons";
import Radio from "../child-comp/Radio";
import InputField from "../child-comp/InputField";
import C1 from "../Tables/C1";
import setLocalStorage from "../setLocalStorage";
import { handleChange, turnOffbutton } from "../helpers";
import Heading from "../../Heading/Heading.jsx";
import AOS from "aos";
import "aos/dist/aos.css";
import { validateName, validateNumber, validateRequired, validateEmail } from '../fv.js';
import OverlayCard from '../OverlayCard.jsx';

function Form2C() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  turnOffbutton();

  var form2c = setLocalStorage("form2c", {
    H2C2: "",
    H2C3: [""],
    H2C4: "",
    H2C5: "",
  });
  const [form2C, setForm2C] = useState(JSON.parse(form2c));
  const [errors, setErrors] = useState({});
  const [showOverlay, setShowOverlay] = useState(false);

  const columns = [
    { key: "Manpower", label: "Manpower", type: "text" },
    { key: "Number", label: "Number", type: "input" },
    {
      key: "Availability",
      label: "24/7 Availability",
      type: "radio",
      options: ["Yes", "No"],
    },
    {
      key: "OnSite",
      label: "24/7 On-site Availability",
      type: "radio",
      options: ["Yes", "No"],
    },
    {
      key: "OnCall",
      label: "24/7 On-call Availability",
      type: "radio",
      options: ["Yes", "No"],
    },
  ];

  const labels = [
    "Physician/Family Medicine Specialist",
    "Surgeon",
    "Obstetrician & Gynecologist",
    "Pediatrician",
    "Anesthesiologist",
    "Ophthalmologist",
    "Orthopaedician",
    "ENT",
    "Microbiologist/Pathologist/Biochemist",
    "GDMO",
    "Nurses",
    "Data entry operator",
    "ECG technician",
    "MLT",
    "Pharmacist",
    "Radiology technician",
    "Other",
  ];

  // const initialRows = [
  //   { Manpower: '', Number: '', Availability: '', OnSite: '', OnCall: '' },
  //   { Manpower: '', Number: '', Availability: '', OnSite: '', OnCall: '' },
  //   { Manpower: '', Number: '', Availability: '', OnSite: '', OnCall: '' },
  //   { Manpower: '', Number: '', Availability: '', OnSite: '', OnCall: '' },
  //   { Manpower: '', Number: '', Availability: '', OnSite: '', OnCall: '' },
  //   { Manpower: '', Number: '', Availability: '', OnSite: '', OnCall: '' },
  //   { Manpower: '', Number: '', Availability: '', OnSite: '', OnCall: '' },
  //   { Manpower: '', Number: '', Availability: '', OnSite: '', OnCall: '' },
  //   { Manpower: '', Number: '', Availability: '', OnSite: '', OnCall: '' },
  //   { Manpower: '', Number: '', Availability: '', OnSite: '', OnCall: '' },
  //   { Manpower: '', Number: '', Availability: '', OnSite: '', OnCall: '' },
  //   { Manpower: '', Number: '', Availability: '', OnSite: '', OnCall: '' },
  //   { Manpower: '', Number: '', Availability: '', OnSite: '', OnCall: '' },
  //   { Manpower: '', Number: '', Availability: '', OnSite: '', OnCall: '' },
  //   { Manpower: '', Number: '', Availability: '', OnSite: '', OnCall: '' },
  //   { Manpower: '', Number: '', Availability: '', OnSite: '', OnCall: '' },
  //   { Manpower: '', Number: '', Availability: '', OnSite: '', OnCall: '' },
  // ];
  const initialRows = labels.map((label) => {
    if (label === "Other") {
      return {
        Manpower: "",
        otherSpecify: "",
        Number: "",
        availability: "",
        onSite: "",
        onCall: "",
      };
    } else {
      return {
        Manpower: "",
        Number: "",
        Availability: "",
        OnSite: "",
        OnCall: "",
      };
    }
  });

  useEffect(() => {
    if (form2C.H2C2 === "No") {
      setForm2C((prevValue) => {
        return { ...prevValue, H2C3: [""], H2C4: "", H2C5: "" };
      });
    }
  }, [form2C.H2C2]);

  const validateForm = () => {
    const newErrors = {};

    if (!form2C.H2C2) newErrors.C2 = ' Whether training for emergency care management is being conducted for the staff in the institution is required'

    if (form2C.H2C2 === "Yes" && !form2C.H2C4 && !form2C.H2C5) {
      newErrors.H2C4 = validateRequired(form2C.H2C4);
      newErrors.H2C4 = 'Frequency of training on emergency care in a year is required';
      newErrors.H2C5 = validateRequired(form2C.H2C5);
      newErrors.H2C5 = 'Required to fill last training conducted';

    }

    setErrors(newErrors);
    setShowOverlay(Object.keys(newErrors).some(key => newErrors[key] !== undefined));
    // if (!form2C.H2C2) newErrors.H2C2 = "This field is required";
    // if (form2C.H2C2 === "Yes") {
    //   if (form2C.H2C3.length === 0) newErrors.H2C3 = "This field is required";
    //   if (!form2C.H2C4) newErrors.H2C4 = "This field is required";
    //   if (!form2C.H2C5) newErrors.H2C5 = "This field is required";
    // }
    // setErrors(newErrors);
    // return Object.keys(newErrors).length === 0;
  };

  useEffect(() => {
    const { isValid, missingFields } = isFormValid();
    setShowOverlay(!isValid);
    if (!isValid) {
      const newErrors = {};
      missingFields.forEach(field => {
        newErrors[field] = validateRequired(form2C[field]);
      });
      setErrors(newErrors);
    } else {
      setErrors({});
    }
  }, [form2C]);

  const isFormValid = () => {
    const requiredFields = ['H2C2'];
    if (form2C.H2C2 === "Yes") {
      requiredFields.push('H2C4');
      requiredFields.push('H2C5');
    }

    const missingFields = requiredFields.filter(field => !form2C[field] || (typeof form2C[field] === 'string' && form2C[field].trim() === ''));
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
  }, [form2C]);

  const handleChangeWithValidation = (e) => {
    const { name, value } = e.target;
    let validatedValue = value;
    let error = '';

    switch (name) {
      case 'H2C5':
        error = validateName(value);
        if (!error) {
          validatedValue = value;
        } else {
          validatedValue = form2C[name];
          e.preventDefault(); // Prevent default behavior if the input was invalid
        }
        break;
      default:
        break;
    }

    setForm2C(prevValue => ({ ...prevValue, [name]: validatedValue }));

    // Perform additional required validation
    switch (name) {
      case 'H2C5':
        error = error || validateRequired(validatedValue);
        break;
      default:
        break;
    }

    setErrors(prevErrors => ({ ...prevErrors, [name]: error }));
  };

  return (
    <div>
      <Heading h2="Health Facility Assessment Tool 2: Community Health Centre"></Heading>
      <section>
        <SidePanel id={"3"} />
        <div className="siteInfo" data-aos="fade-left">
          <div className="formhdr">
            <div>
              <h3>2C. Human Resources</h3>
            </div>
          </div>

          <div className="formcontent">
            <h3>
              2C.1 : Which of the following manpower is available at the CHC?
              (Multiple answers possible also mention the number)
            </h3>
            <C1
              columns={columns}
              initialRows={initialRows}
              tableName="H2C1"
              labels={labels}
            />

            <Radio
              h3="2C.2 : Whether training for emergency care management is being conducted for the staff in the institution?"
              CheckbobItems={["Yes", "No"]}
              name="H2C2"
              onClick={handleChange(setForm2C)}
              byDefault={form2C.H2C2}
              errorMsg={errors.H2C2}
              required
            />

            {form2C.H2C2 === "Yes" && (
              <>
                <Checkbox
                  h3="2C.3 : If Yes to 2C.2, Which of the following emergency care trainings you have undergone?"
                  CheckbobItems={[
                    "Trauma & Accidental Injuries",
                    "Burns",
                    "Cardiac emergencies: acute chest pain, acute coronary syndrome (ACS)/ STEMI, Heart failure, Cardiac Arrest",
                    "Stroke",
                    "Acute Breathlessness",
                    "Seizures",
                    "Bites (Animal bite/snake bite/scorpion sting)",
                    "Choking/foreign body ingestion",
                    "Poisoning",
                    "PPH",
                    "Pre-Eclampsia",
                    "Neonatal emergencies",
                  ]}
                  other={true}
                  name="H2C3"
                  setFunction={setForm2C}
                  StateValue={form2C}
                  array={form2C.H2C3}
                  errorMsg={errors.H2C3}
                />

                <Radio
                  h3="2C.4 : If Yes, Frequency of training on emergency care in a year?"
                  CheckbobItems={[
                    "Every Month",
                    "Quarterly",
                    "Half Yearly",
                    "Annually",
                    "Other (Specify)",
                  ]}
                  other={true}
                  otherArray={[0, 0, 0, 0, 1]}
                  name="H2C4"
                  onClick={handleChange(setForm2C)}
                  // setter={setForm2C}
                  byDefault={form2C.H2C4}
                  errorMsg={errors.H2C4}
                />

                <InputField
                  h3="2C.5 : When was the last training conducted?"
                  placeholder="Type here"
                  name="H2C5"
                  value={form2C.H2C5}
                  onChange={handleChangeWithValidation}
                  errorMsg={errors.H2C5}
                />
              </>
            )}



            <div className="button-container">
              <Buttons
                formName={"form2c"}
                formData={form2C}
                prevText="Previous"
                nextText="Save & Next"
                prev="/infrastructure-2"
                next="/logistics-2"
                // validateForm={validateForm}
              />
              <OverlayCard
                isVisible={showOverlay}
                message="Please fill all required fields to proceed."
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Form2C;
