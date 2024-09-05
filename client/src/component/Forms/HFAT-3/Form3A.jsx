import React, { useEffect, useMemo, useState } from "react";
import Checkbox from "../child-comp/Checkbox";
import SidePanel from "./SidePanelHFAT3";
import Buttons from "../child-comp/Buttons";
import Radio from "../child-comp/Radio";
import InputField from "../child-comp/InputField";
import { handleChange, turnOffbutton } from "../helpers";
import setLocalStorage from "../setLocalStorage";
import Heading from "../../Heading/Heading.jsx";
import LocationButton from "../child-comp/Location.jsx";
import DropDown from "../child-comp/DropDown.jsx";
import { GJBRC, MPBHS, ORPUR, PBLDH, PYPDY } from "../BlockItem/blockList.js";
import {
  validateName,
  validateNumber,
  validateRequired,
  validateEmail,
} from "../fv.js";
import OverlayCard from "../OverlayCard.jsx";

function Form3A() {
  turnOffbutton();

  var form3a = setLocalStorage("form3a", {
    H3A1: "",
    H3A2: "",
    H3A3: "",
    H3A4: "",
    H3A5: "",
    H3A6: "",
    H3A7: "",
    H3A8: "",
    H3A9: "",
    H3A10: "",
    H3A11: "",
    HFAT3_DATE: "",
  });

  const [form3A, setForm3A] = useState(JSON.parse(form3a));
  const [errors, setErrors] = useState({});
  const [showOverlay, setShowOverlay] = useState(false);

  const date = new Date();

  useEffect(() => {
    setForm3A((prevValue) => {
      return {
        ...prevValue,
        HFAT3_DATE:
          form3A.HFAT3_DATE == ""
            ? `${date.toDateString()}  ${date.getHours()}:${date.getMinutes()}`
            : form3A.HFAT3_DATE,
      };
    });
  }, []);

  const dropdownItems = useMemo(() => {
    switch (form3A.H3A2) {
      case "GJBRC_PHC":
        return GJBRC;
      case "ORPUR_PHC":
        return ORPUR;
      case "MPBHS_PHC":
        return MPBHS;
      case "PBLDH_PHC":
        return PBLDH;
      case "PYPDY_PHC":
        return PYPDY;
      default:
        return [];
    }
  }, [form3A.H3A2]);

  const validateForm = () => {
    const newErrors = {};

    newErrors.H3A1 = validateName(form3A.H3A1) || validateRequired(form3A.H3A1);
    newErrors.H3A4 = validateName(form3A.H3A4) || validateRequired(form3A.H3A4);
    newErrors.H3A5 = validateName(form3A.H3A5) || validateRequired(form3A.H3A5);
    newErrors.H3A6 = validateName(form3A.H3A6) || validateRequired(form3A.H3A6);
    newErrors.H3A7 =
      validateNumber(form3A.H3A7) || validateRequired(form3A.H3A7);
    newErrors.H3A8 =
      validateEmail(form3A.H3A8) || validateRequired(form3A.H3A8);

    if (!form3A.H3A2) newErrors.H3A2 = "Code is Required";

    setErrors(newErrors);
    setShowOverlay(
      Object.keys(newErrors).some((key) => newErrors[key] !== undefined)
    );
  };

  useEffect(() => {
    const { isValid, missingFields } = isFormValid();
    setShowOverlay(!isValid);
    if (!isValid) {
      const newErrors = {};
      missingFields.forEach((field) => {
        newErrors[field] = validateRequired(form3A[field]);
      });
      setErrors(newErrors);
    } else {
      setErrors({});
    }
  }, [form3A]);

  const isFormValid = () => {
    const requiredFields = [
      "H3A1",
      "H3A2",
      "H3A3",
      "H3A4",
      "H3A5",
      "H3A6",
      "H3A7",
      "H3A8",
      "H3A9",
      "H3A10",
      "H3A11",
    ];

    const missingFields = requiredFields.filter(
      (field) =>
        !form3A[field] ||
        (typeof form3A[field] === "string" && form3A[field].trim() === "")
    );

    return { isValid: missingFields.length === 0, missingFields };
  };

  useEffect(() => {
    const { isValid, missingFields } = isFormValid();
    setShowOverlay(!isValid);
    if (!isValid) {
      const newErrors = {};
      missingFields.forEach((field) => {
        newErrors[field] = "This field is required";
      });
      setErrors(newErrors);
    } else {
      setErrors({});
    }
  }, [form3A]);

  const handleChangeWithValidation = (e) => {
    const { name, value } = e.target;
    let validatedValue = value;
    let error = "";

    switch (name) {
      case "H3A1":
      case "H3A4":
      // case 'H3A5':
      case "H3A6":
        error = validateName(value);
        if (!error) {
          validatedValue = value;
        } else {
          validatedValue = form3A[name];
          e.preventDefault(); // Prevent default behavior if the input was invalid
        }
        break;
      case "H3A7":
        error = validateNumber(value);
        if (!error) {
          validatedValue = value;
        } else {
          validatedValue = formA[name];
          e.preventDefault();
        }
        break;
      case "H3A8":
        // For email, we'll allow typing and validate on blur or submit
        validatedValue = value;
        break;
      default:
        break;
    }

    setForm3A((prevValue) => ({ ...prevValue, [name]: validatedValue }));

    // Perform additional required validation
    switch (name) {
      case "H3A1":
      case "H3A4":
      case "H3A5":
      case "H3A6":
      case "H3A7":
        error = error || validateRequired(validatedValue);
        break;
      case "H3A3":
        handleChange(setFormA);
        error = error || validateRequired(validatedValue);
        break;
      case "H3A8":
        error =
          validateEmail(validatedValue) || validateRequired(validatedValue);
        break;
      default:
        break;
    }

    setErrors((prevErrors) => ({ ...prevErrors, [name]: error }));
  };
  return (
    <div>
      <Heading h2="Health Facility Assessment Tool 3: Primary Health Centre"></Heading>
      <section>
        <SidePanel id={"1"} />
        <div className="siteInfo">
          <div className="formhdr">
            <div>
              <h3>3A. Facility Information</h3>
            </div>
          </div>

          <div className="formcontent">
            <InputField
              value={form3A.H3A1}
              onChange={handleChangeWithValidation}
              name="H3A1"
              h3="3A.1 : Assessor’s Name:"
              placeholder="Type here"
              required
              errorMsg={errors.H3A1}
            />

            <div>
              <p className="datetime">{form3A.HFAT3_DATE}</p>
            </div>

            <Radio
              byDefault={form3A.H3A2}
              onClick={handleChange(setForm3A)}
              name="H3A2"
              h3="3A.2 : State :"
              CheckbobItems={[
                "GJBRC_PHC",
                "ORPUR_PHC",
                "MPBHS_PHC",
                "PBLDH_PHC",
                "PYPDY_PHC",
              ]}
              // required
              errorMsg={errors.H3A2}
            />

            {/* <InputField value={form3A.H3A3} onChange={handleChange(setForm3A)} name="H3A3" h3="3A.3 : Block Name :" placeholder="Type here" /> */}
            <DropDown
              dropdownItems={dropdownItems}
              name="H3A3"
              h3="3A.3 : Block Name :"
              onClick={handleChange(setForm3A)}
              byDefault={form3A.H3A3}
              error={errors.H3A3}
            />

            <InputField
              value={form3A.H3A4}
              onChange={handleChangeWithValidation}
              name="H3A4"
              h3="3A.4 : Healthcare Facility Name :"
              placeholder="Type here"
              error={errors.H3A4}
            />

            <InputField
              value={form3A.H3A5}
              onChange={handleChangeWithValidation}
              name="H3A5"
              h3="3A.5 : Healthcare Facility Address :"
              placeholder="Type here"
              required
              errorMsg={errors.H3A5}
            />

            <InputField
              value={form3A.H3A6}
              onChange={handleChangeWithValidation}
              name="H3A6"
              h3="3A.6 : Name of the Medical Officer :"
              placeholder="Type here"
              required
              errorMsg={errors.H3A6}
            />

            <InputField
              value={form3A.H3A7}
              onChange={handleChangeWithValidation}
              name="H3A7"
              h3="3A.7 : Contact Number of Medical Officer :"
              placeholder="Type here"
              maxLength={10}
              required
              errorMsg="Contact number must be 10 digits"
            />

            <InputField
              value={form3A.H3A8}
              onChange={handleChangeWithValidation}
              name="H3A8"
              h3="3A.8 : Email ID :"
              placeholder="Type here"
              required
              errorMsg="Invalid email format"
            />

            {/* <InputField value={form3A.H3A9} onChange={handleChange(setForm3A)} name="H3A9" h3="3A.9 : GPS Coordinates :" placeholder="Type here" /> */}
            <LocationButton
              setter={setForm3A}
              Name="H3A9"
              heading={"3A.9"}
              required
              errorMsg={errors.H3A9}
            />

            <Radio
              byDefault={form3A.H3A10}
              onClick={handleChange(setForm3A)}
              name="H3A10"
              h3="3A.10 : What type of Health care facility is this?"
              CheckbobItems={[
                "HWC-PHC",
                " Urban HWC-PHC",
                "Specialist UPHC/Polyclinic",
              ]}
            />

            <Radio
              byDefault={form3A.H3A11}
              onClick={handleChange(setForm3A)}
              name="H3A11"
              h3="3A.11 : The facility is coming under : "
              CheckbobItems={["Urban", "Rural"]}
            />

            <div className="button-container">
              <Buttons
                formName="form3a"
                formData={form3A}
                prevText=""
                nextText="Save & Next"
                prev=""
                next="/infrastructure-3"
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

export default Form3A;
