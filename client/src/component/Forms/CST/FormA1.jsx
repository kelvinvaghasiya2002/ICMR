import SidePanel from "./SidePanelCST.jsx";
import Checkbox from "../child-comp/Checkbox.jsx";
import Radio from "../child-comp/Radio.jsx";
import { Link } from "react-router-dom";
import "../Form.css";
import React, { useEffect, useState } from "react";
import Buttons from "../child-comp/Buttons.jsx";
import InputField from "../child-comp/InputField.jsx";
import { turnOffbutton, handleChange } from "../helpers.js";
import setLocalStorage, { getLocalStorage } from "../setLocalStorage.js";
import Heading from "../../Heading/Heading";
import OverlayCard from "../OverlayCard";
import useFormValidation from "../../../utils/custom_validation_hook.js";
import axios from "axios";

const server = import.meta.env.VITE_SERVER;

function FormA1() {
  var forma1 = setLocalStorage("forma1", {
    AA1: "",
    AA2: "",
    AA3: "",
    AA4: "",
  });
  turnOffbutton();

  const date = new Date();
  const [formA1, setFormA1] = useState(JSON.parse(forma1));

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
    setFormA1((prevValue) => {
      return {
        ...prevValue,
        AA1: 
          formA1.AA1 === ""
            ? `${date.toDateString()}  ${date.getHours()}:${date.getMinutes()}`
            : formA1.AA1,
        AA4: getLocalStorage("CSTuniqueCode").Respondent_ID ?? "",
      };
    });
    
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);


  const { isValid, errors, setErrors } = useFormValidation(formA1, [
    "AA1",
    "AA2",
    "AA3",
    // "AA4",
  ]);

  const handleSaveAndNext = async () => {
    try {
      if (
        localStorage.getItem("CSTuniqueCode") === null 
        // || localStorage.getItem("CSTuniqueCode").AA2 !== formA1.AA2
      ) {
        const { data } = await axios.post(`${server}/cstuniquecodegenrate`, {
          code: formA1.AA2,
        });
        const { uniqueCode } = data;
        // localStorage.removeItem("CSTuniqueCode");
        setLocalStorage("CSTuniqueCode", uniqueCode);

        // update setFormA1 only if the unique code is generated successfully otherwise create a new one
        setFormA1((prevValue) => ({
          ...prevValue,
          AA4: uniqueCode.Respondent_ID,
        }));

        // setFormA1((prevValue) => ({
        //   ...prevValue,
        //   AA4: uniqueCode.Respondent_ID,
        // }));
      }
    } catch (error) {
      console.error("Error generating unique code", error);
    }
  };

  const handleChangeWithValidation = (e) => {
    const { name, value } = e.target;
    let validatedValue = value;
    let error = "";

    switch (name) {
      case "A3":
        error = validateName(value);
        if (!error) {
          validatedValue = value;
        } else {
          validatedValue = formA1[name];
          e.preventDefault(); // Prevent default behavior if the input was invalid
        }
        break;
      default:
        break;
    }

    setFormA1((prevValue) => ({ ...prevValue, [name]: validatedValue }));

    // Perform additional required validation
    switch (name) {
      case "A2":
      case "A3":
        error = error || validateRequired(validatedValue);
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
                <Heading h2="Community Survey Tool"></Heading>
            </div>
      <section id="site-info" className="form-main">
                {isSidebarVisible && (
                <>
                    <SidePanel id={"1"} />
                    <div className="grayedover" onClick={toggleSidebar}></div>
                </>
                )}
        <div className="siteInfo">
          <div className="formhdr">
            <div>
              <h2>A Socio-demographic Characteristics</h2>
            </div>
            <div>
              <h3>Site Information</h3>
            </div>
          </div>

          <div className="formcontent cont_extra fbox">
            <div className="fbox1">

              <div>
                <p className="datetime">AA.1 Date & Time : {formA1.AA1}</p>
              </div>

              <Radio
                h3="AA.2 Site :"
                CheckbobItems={[
                  "GJBRC_CS",
                  "ORPUR_CS",
                  "MPBHS_CS",
                  "PBLDH_CS",
                  "PYPDY_CS",
                ]}
                name="AA2"
                onClick={handleChange(setFormA1)}
                byDefault={formA1.AA2}
              />

              <InputField
                h3="AA.3 Name Of the Data Collector :"
                placeholder="Type here"
                name="AA3"
                value={formA1.AA3}
                onChange={handleChangeWithValidation}
              />

              <div className="block">
                <h3 className="h3block">AA.4 Respondent ID: </h3>
                <input
                  className="blockinput"
                  value={formA1.AA4}
                  name="AA4"
                  readOnly
                />
              </div>
            </div>

            <div className="button-container">
              <Buttons
                formName="forma1"
                formData={formA1}
                prevText=""
                nextText="Save & Next"
                next="/clusterinformation"
                onClick={handleSaveAndNext}
              />
              <OverlayCard
                isVisible={!isValid}
                message="(Please fill all required fields to proceed)"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default FormA1;
