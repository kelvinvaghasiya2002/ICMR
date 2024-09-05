import React, { useMemo, useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import SidePanel from "./SidePanelHFAT1";
import Buttons from "../child-comp/Buttons";
import Radio from "../child-comp/Radio";
import InputField from "../child-comp/InputField";
import { handleChange, turnOffbutton } from "../helpers";
import setLocalStorage from "../setLocalStorage";
import Heading from "../../Heading/Heading";
import DropDown from "../child-comp/DropDown.jsx";
import { GJBRC, MPBHS, ORPUR, PBLDH, PYPDY } from "../BlockItem/blockList.js";
import LocationButton from "../child-comp/Location.jsx";
import {
  validateName,
  validateNumber,
  validateRequired,
  validateEmail,
} from "../fv.js";
import OverlayCard from "../OverlayCard.jsx";

function FormA() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  turnOffbutton();
  var forma = setLocalStorage("forma", {
    A1: "",
    A2: "",
    A3: "",
    A4: "",
    A5: "",
    A6: "",
    A7: "",
    A8: "",
    A9: "",
    A10: {},
    A11: "",
    A12: "",
  });
  const [formA, setFormA] = useState(JSON.parse(forma));
  const [errors, setErrors] = useState({});
  const [showOverlay, setShowOverlay] = useState(false);
  const date = new Date();

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
    setFormA((prevValue) => {
      return {
        ...prevValue,
        A2:
          prevValue.A2 === ""
            ? `${date.toDateString()}  ${date.getHours()}:${date.getMinutes()}`
            : prevValue.A2,
      };
    });
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const validateForm = () => {
    const newErrors = {};
    newErrors.A1 = validateName(formA.A1) || validateRequired(formA.A1);
    newErrors.A5 = validateRequired(formA.A5);
    newErrors.A6 = validateRequired(formA.A6);
    newErrors.A7 = validateRequired(formA.A7) || validateName(formA.A7);
    newErrors.A8 = validateNumber(formA.A8) || validateRequired(formA.A8);
    newErrors.A9 = validateEmail(formA.A9) || validateRequired(formA.A9);

    if (!formA.A3) newErrors.A3 = "Code is required";
    if (!formA.A11) newErrors.A11 = "Type of Health Care Facility is required";
    if (formA.A11 === "Tertiary care center" && !formA.A12)
      newErrors.A12 = "Appropriate tertiary care center is required";

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
        newErrors[field] = validateRequired(formA[field]);
      });
      setErrors(newErrors);
    } else {
      setErrors({});
    }
  }, [formA]);

  useEffect(() => {
    if (formA.A11 === "District Hospital (DH)") {
      setFormA((prevValue) => {
        return {
          ...prevValue,
          A12: "",
        };
      });
    }
  }, [formA.A11]);

  const dropdownItems = useMemo(() => {
    switch (formA.A3) {
      case "GJBRC_DH":
        return GJBRC;
      case "ORPUR_DH":
        return ORPUR;
      case "MPBHS_DH":
        return MPBHS;
      case "PBLDH_DH":
        return PBLDH;
      case "PYPDY_DH":
        return PYPDY;
      default:
        return [];
    }
  }, [formA.A3]);

  const isFormValid = () => {
    const requiredFields = [
      "A1",
      "A3",
      "A4",
      "A5",
      "A6",
      "A7",
      "A8",
      "A9",
      "A11",
    ];
    if (formA.A11 === "Tertiary care center") {
      requiredFields.push("A12");
    }
    const missingFields = requiredFields.filter(
      (field) => !formA[field] || formA[field].trim() === ""
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
  }, [formA]);

  const handleChangeWithValidation = (e) => {
    const { name, value } = e.target;
    let validatedValue = value;
    let error = "";

    switch (name) {
      case "A1":
      case "A5":
      // case 'A6':   // Should be allowed to type digits and special characters
      case "A7":
        error = validateName(value);
        if (!error) {
          validatedValue = value;
        } else {
          validatedValue = formA[name];
          e.preventDefault(); // Prevent default behavior if the input was invalid
        }
        break;
      case "A8":
        error = validateNumber(value);
        if (!error) {
          validatedValue = value;
        } else {
          validatedValue = formA[name];
          e.preventDefault();
        }
        break;
      case "A9":
        // For email, we'll allow typing and validate on blur or submit
        validatedValue = value;
        break;
      default:
        break;
    }

    setFormA((prevValue) => ({ ...prevValue, [name]: validatedValue }));

    // Perform additional required validation
    switch (name) {
      case "A1":
      case "A5":
      case "A6":
      case "A7":
      case "A8":
        error = error || validateRequired(validatedValue);
        break;
      case "A4":
        handleChange(setFormA);
        error = error || validateRequired(validatedValue);
        break;
      case "A9":
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
      <div className="header">
        <div className="burger-menu" onClick={toggleSidebar}>
          &#9776;
        </div>
        <Heading h2="Health Facility Assessment Tool 1: District Hospital/Tertiary Care (Public or Private)"></Heading>
      </div>
      <section className="form-main">
        {isSidebarVisible && (
          <>
            <SidePanel id={"1"} />
            <div className="grayedover" onClick={toggleSidebar}></div>
          </>
        )}
        {/* <SidePanel id={"1"} /> */}
        <div className="siteInfo" data-aos="fade-left">
          <div className="formhdr">
            <div>
              <h3>1A. Health Facility Information</h3>
            </div>
          </div>
          <div className="formcontent">
            <InputField
              name="A1"
              h3="1A.1 : Assessor's Name: "
              onChange={handleChangeWithValidation}
              value={formA.A1}
              // regex={/^[A-Za-z ]+$/}
              placeholder="Type here"
              required
              error={errors.A1}
            />

            <div>
              <p className="datetime">
                1A.2 : Date & Time :{" "}
                <span className="datetime_current">{formA.A2}</span>
              </p>
            </div>

            <Radio
              h3="1A.3 : Code :"
              onClick={handleChange(setFormA)}
              byDefault={formA.A3}
              CheckbobItems={[
                "GJBRC_DH",
                "ORPUR_DH",
                "MPBHS_DH",
                "PBLDH_DH",
                "PYPDY_DH",
              ]}
              name="A3"
              // required
              errorMsg={errors.A3}
            />

            <DropDown
              name="A4"
              h3="1A.4 : Block Name:"
              byDefault={formA.A4}
              onClick={handleChangeWithValidation}
              // onClick={handleChange(setFormA)}
              dropdownItems={dropdownItems}
              error={errors.A4}
              errorMsg={errors.A4}
            />

            <InputField
              name="A5"
              value={formA.A5}
              // regex={/^[A-Za-z ]+$/}
              onChange={handleChangeWithValidation}
              h3="1A.5 : Healthcare Facility Name:  "
              placeholder="Type here"
              required
              error={errors.A5}
            />
            <InputField
              name="A6"
              value={formA.A6}
              // regex={/^[A-Za-z0-9_.-]+$/}
              onChange={handleChangeWithValidation}
              h3="1A.6 : Healthcare Facility Address:  "
              placeholder="Type here"
              required
              error={errors.A6}
            />
            <InputField
              name="A7"
              value={formA.A7}
              onChange={handleChangeWithValidation}
              h3="1A.7 : Name of the hospital Superintendent:"
              placeholder="Type here"
              required
              error={errors.A7}
            />
            <InputField
              name="A8"
              value={formA.A8}
              onChange={handleChangeWithValidation}
              h3="1A.8 : Contact Number of the hospital Superintendent:"
              placeholder="Type here"
              required
              // regex={/^[0-9]{10,10}$/}
              maxLength={10}
              errorMsg="Contact number must be 10 digits"
              error={errors.A8}
            />
            <InputField
              name="A9"
              value={formA.A9}
              onChange={handleChangeWithValidation}
              h3="1A.9 : Email ID:"
              placeholder="Type here"
              required
              // regex={/^\S+@\S+\.\S+$/}
              errorMsg="Invalid email format"
              error={errors.A9}
            />

            <LocationButton
              setter={setFormA}
              // name={"A10"}
              heading={"1A.10"}
              // error={errors.A10}
              setForm={setFormA}
              form={formA}
              placeHolder1="Latitude"
              placeHolder2="Longitude"
              label1="Lat"
              label2="Lng"
              Name="A10"
            />

            <Radio
              h3="1A.11 : Type of Health Care Facility?"
              CheckbobItems={["District Hospital (DH)", "Tertiary care center"]}
              name="A11"
              onClick={handleChange(setFormA)}
              byDefault={formA.A11}
            />

            {formA.A11 === "Tertiary care center" && (
              <Radio
                style={{ display: "flex", flexDirection: "column" }}
                h3="1A.12 : If Tertiary care center, select the appropriate one."
                onClick={handleChange(setFormA)}
                CheckbobItems={[
                  "Public: ESI Hospital/ Railway Hospital/Trust Hospital/ Medical College",
                  "Semi govt. hospital",
                  "Private: Medical College/ Corporate hospital/NGO Hospital",
                ]}
                name="A12"
                byDefault={formA.A12}
              />
            )}

            <div className="button-container">
              <Buttons
                formName="forma"
                formData={formA}
                prevText=""
                nextText="Save & Next"
                prev=""
                next="/infrastructure"
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
  );
}

export default FormA;
