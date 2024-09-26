import SidePanel from "./SidePanelCST.jsx";
import Checkbox from "../child-comp/Checkbox.jsx";
import Radio from "../child-comp/Radio.jsx";
import { Link } from "react-router-dom";
import "../Form.css";
import React, { useEffect, useState } from "react";
import Buttons from "../child-comp/Buttons.jsx";
import InputField from "../child-comp/InputField.jsx";
import { turnOffbutton, handleChange } from "../helpers.js";
import setLocalStorage from "../setLocalStorage.js";
import Heading from "../../Heading/Heading";
import Table from "../child-comp/Table.jsx";
import DropDown from "../child-comp/DropDown.jsx";
import Table1 from "../child-comp/Table1.jsx";
import CSTButton from "../child-comp/CSTButton.jsx";
import useFormValidation from "../../../utils/custom_validation_hook.js";
import { validateName, validateNumber, validateRequired } from "../fv.js";
import OverlayCard from "../OverlayCard.jsx";

function FormB19() {
  var formb16 = setLocalStorage("formb16", {
    B0: "",
    B1: "",
    B2: "",
    B3: "",
    B4: [],
    B5_dt: "",
    B6: "",
    B7: "",
    B8: "",
    B9: "",
    B10: "",
    B11_if: "",
    B12: "",
    B13: "",
    B14: "",
    B15: "",
    B16: "",
    B17: "",
    B18_1: "",
    B18_2: "",
    B19: "",
    B20: "",
    B21: "",
    B22: "",
    B23_1: "",
    B23_2: "",
    B24_1: "",
    B24_2: "",
    B25: "",
    B26: "",
    B27: [],
    B28: "",
    B29: "",
    B30: "",
    B31: "",
    B32: "",
    B33: "",
    B34: "",
    B35: "",
  });
  const [formB16, setFormB16] = useState(JSON.parse(formb16));
  turnOffbutton();

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
    if (formB16.B20 !== "Government ambulance") {
      setFormB16((prevValue) => {
        return {
          ...prevValue,
          B21: "",
        };
      });
    }

    if (formB16.B31 !== "Yes") {
      setFormB16((prevValue) => {
        return {
          ...prevValue,
          B31: "",
        };
      });
    }
  }, [formB16.B19, formB16.B30]);

  const { isValid, errors, setErrors } = useFormValidation(formB16, [
    "B17",
    "B18_1",
    "B18_2",
    "B19",
    "B20",
    "B21",
    "B22",
    "B23_1",
    "B23_2",
    "B24_1",
    "B24_2",
    "B25",
    "B26",
    "B27",
    "B28",
    "B29",
    "B30",
    "B31",
    ...(formB16.B31 === "Yes" ? ["B32"] : []),
    "B33",
  ]);

  const handleChangeWithValidation = (e) => {
    const { name, value } = e.target;
    let validatedValue = value;
    let error = "";

    switch (name) {
      case "B18_1":
      case "B18_2":
      case "B23_1":
      case "B23_2":
      case "B24_1":
      case "B24_2":
        error = validateNumber(value);
        if (!error) {
          validatedValue = value;
        } else {
          validatedValue = formB16[name];
          e.preventDefault(); // Prevent default behavior if the input was invalid
        }
        break;
      case "B26":
        error = validateName(value);
        if (!error) {
          validatedValue = value;
        } else {
          validatedValue = formB16[name];
          e.preventDefault(); // Prevent default behavior if the input was invalid
        }
        break;
      default:
        break;
    }

    setFormB16((prevValue) => ({ ...prevValue, [name]: validatedValue }));

    // Perform additional required validation
    switch (name) {
      case "B17":
      case "B18_1":
      case "B18_2":
      case "B19":
      case "B20":
      case "B21":
      case "B22":
      case "B23_1":
      case "B23_2":
      case "B24_1":
      case "B24_2":
      case "B25":
      case "B26":
      case "B27":
      case "B28":
      case "B29":
      case "B30":
      case "B31":
      case "B32":
      case "B33":
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
      <section id='site-info' className="form-main">
        {isSidebarVisible && (
          <>
            <SidePanel id={"19"} />
            <div className="grayedover" onClick={toggleSidebar}></div>
          </>
        )}
        <div className="siteInfo">
          <div className="formhdr">
            <div>
              <h2>A Socio-demographic Characteristics</h2>
            </div>
            <div>
              <h3>Initial Healthcare Seeking Pathway</h3>
            </div>
          </div>

          <div className="formcontent cont_extra fbox">
            <div className="fbox1">
              <Radio
                onClick={handleChange(setFormB16)}
                h3="B.17  Who suggested you visit the healthcare facility for emergency care? "
                CheckbobItems={[
                  "Self/ Family members",
                  "Neighbour",
                  "FLHW (ASHA/ AWW/ ANM/ CHO)",
                  "Doctor",
                  "Other",
                ]}
                name="B17"
                otherArray={[0, 0, 0, 0, 1]}
                setter={setFormB16}
                byDefault={formB16.B17}
              />

              <h3>
                B.18 How much time did it take to decide to seek care or call an
                ambulance or any transport after recognizing the symptom? (In
                Min/Hour)
              </h3>

              <InputField
                onChange={handleChangeWithValidation}
                h3="Hour"
                placeholder="Type here"
                name="B18_1"
                value={formB16.B18_1}
              />

              <InputField
                onChange={handleChangeWithValidation}
                h3="Minutes"
                placeholder="Type here"
                name="B18_2"
                value={formB16.B18_2}
              />

              <Radio
                onClick={handleChange(setFormB16)}
                h3="B.19  How did you or the patient reach the first health care facility? "
                CheckbobItems={[
                  "Own vehicle",
                  "Hired vehicle ",
                  "Ambulance",
                  "Neighbour’s Vehicle",
                  "Passer-by’s Vehicle",
                  "Others (Specify)",
                ]}
                name="B19"
                otherArray={[0, 0, 0, 0, 0, 1]}
                setter={setFormB16}
                byDefault={formB16.B19}
              />

              <Radio
                onClick={handleChange(setFormB16)}
                h3="B.20  What type of transport was used to reach the first health care facility? "
                CheckbobItems={[
                  "Government ambulance",
                  "Private ambulance",
                  "Ambulance service provided by NGO",
                  "Two - Wheeler(Bicycle)",
                  "Two - Wheeler(Motorcycle)",
                  "Three - Wheeler(Manual Rickshaw, etc.)",
                  "Three - Wheeler(Auto Rickshaw / E - rickshaw, etc.)",
                  "Four - Wheeler(Car / Jeep / etc.)",
                  "Agricultural Vehicle(Tractor)",
                  "Others(Specify)",
                ]}
                name="B20"
                otherArray={[0, 0, 0, 0, 0, 0, 0, 0, 1]}
                setter={setFormB16}
                byDefault={formB16.B20}
              />

              {formB16.B20 === "Government ambulance" && (
                <Radio
                  onClick={handleChange(setFormB16)}
                  h3="B.21  If Govt. Ambulance, Which ambulance service you opted for? "
                  CheckbobItems={["102", "108", "Others (Specify)", "Don't know"]}
                  name="B21"
                  otherArray={[0, 0, 1, 0]}
                  setter={setFormB16}
                  byDefault={formB16.B21}
                />
              )}

              <Radio
                onClick={handleChange(setFormB16)}
                h3="B.22  Were there any problems in arranging for transport of the patient?  (Describe) "
                CheckbobItems={["Yes (Specify)", "No"]}
                name="B22"
                otherArray={[1, 0]}
                setter={setFormB16}
                byDefault={formB16.B22}
              />

              <h3>
                B.23 How much time the ambulance/ any transport took to reach the
                point of incident? (In Min/Hour)
              </h3>

              <InputField
                onChange={handleChangeWithValidation}
                h3="Hour"
                placeholder="Type here"
                name="B23_1"
                value={formB16.B23_1}
              />

              <InputField
                onChange={handleChangeWithValidation}
                h3="Minutes"
                placeholder="Type here"
                name="B23_2"
                value={formB16.B23_2}
              />

              <h3>
                B.24 How much time the ambulance/ any transport took to reach the
                first facility from the point of incident? (in minutes/ hours)
              </h3>

              <InputField
                onChange={handleChangeWithValidation}
                h3="Hour"
                placeholder="Type here"
                name="B24_1"
                value={formB16.B24_1}
              />

              <InputField
                onChange={handleChangeWithValidation}
                h3="Minutes"
                placeholder="Type here"
                name="B24_2"
                value={formB16.B24_2}
              />

              <Radio
                onClick={handleChange(setFormB16)}
                h3="B.25  Which type of facility did you visit first? "
                CheckbobItems={[
                  "SC/HWC/AAM (Ayushman Arogya Mandir)",
                  "PHC",
                  "CHC",
                  "District Headquarter Hospital ",
                  "Medical College",
                  "Private hospital",
                  "Private clinic",
                  "ESI/railway/other Govt. Hospital",
                  "Others(Specify)",
                ]}
                name="B25"
                otherArray={[0, 0, 0, 0, 0, 0, 0, 0, 1]}
                setter={setFormB16}
                byDefault={formB16.B25}
              />

              <InputField
                onChange={handleChangeWithValidation}
                h3="B.26  What was the name of the facility?"
                placeholder="Type here"
                name="B26"
                value={formB16.B26}
              />

              <Checkbox
                h3="B.27  Who suggested you the above-mentioned facility for emergency care?"
                CheckbobItems={[
                  "Self",
                  "Family members",
                  "Neighbour",
                  "ASHA/AWW",
                  "ANM",
                  "CHO",
                  // other specify baaki 6
                ]}
                name="B27"
                setFunction={setFormB16}
                StateValue={formB16}
                array={formB16.B27}
              />

              <Radio
                onClick={handleChange(setFormB16)}
                h3="B.28  How long after reaching the first HCF (in emergency) was the patient attended? "
                CheckbobItems={[
                  "Immediately",
                  "5-10 minutes",
                  "10-30 minutes",
                  ">30 minutes",
                  "Do not know",
                ]}
                name="B28"
                byDefault={formB16.B28}
              />

              <Radio
                onClick={handleChange(setFormB16)}
                h3="B.29  Who attended the patient at the first HCF? "
                CheckbobItems={[
                  "Health worker",
                  "Nurse",
                  "Doctor",
                  "Do not know",
                ]}
                name="B29"
                byDefault={formB16.B29}
              />

              <Radio
                onClick={handleChange(setFormB16)}
                h3="B.30  Was any treatment started at the HCF?"
                CheckbobItems={["Yes", "No", "Do not know"]}
                name="B30"
                byDefault={formB16.B30}
              />

              <Radio
                onClick={handleChange(setFormB16)}
                h3="B.31  Were any laboratory &/or radiology investigations done at the HCF? "
                CheckbobItems={["Yes", "No", "Do not know"]}
                name="B31"
                byDefault={formB16.B31}
              />

              {formB16.B31 === "Yes" && (
                <Radio
                  onClick={handleChange(setFormB16)}
                  h3="B.32  How much time was spent in investigations? "
                  CheckbobItems={[
                    "Less than 30 minutes",
                    "30 minutes to 1 hour",
                    "More than 1 hour",
                    "Do not Know",
                  ]}
                  name="B32"
                  byDefault={formB16.B32}
                />
              )}

              <Radio
                onClick={handleChange(setFormB16)}
                h3="B.33 Was the patient shifted to ICU/ CCU/ HDU at HCF? "
                CheckbobItems={["Yes", "No"]}
                name="B33"
                byDefault={formB16.B33}
              />

            </div>

            <div className="button-container">
            <CSTButton
              formName="formb16"
              formData={formB16}
              prev="/initialhealthcareseekingpathway-1"
              next="/initialhealthcareseekingpathway-4"
              prevText="Previous"
              nextText="Save & Next"
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

export default FormB19;
