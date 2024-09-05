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
import CSTLastButton from "../child-comp/CSTLastButton.jsx";

function FormF27() {
  var formf27 = setLocalStorage("formf27", {
    F1: "",
    F2: "",
    F3: "",
    F4: "",
    F5: "",
    F6: "",
    F7: "",
    F8: "",
    F9: "",
    F10: "",
    F11: "",
    F12: [],
    F13: "",
    F14: "",
    F15: "",
    F16: "",
    F17: "",
    F18: "",
  });
  const [formF27, setFormF27] = useState(JSON.parse(formf27));
  turnOffbutton();

  return (
    <div>
      <Heading h2="Community Survey Tool"></Heading>
      <section id="site-info">
        <SidePanel id={"13"} />
        <div className="siteInfo">
          <div className="formhdr">
            <div>
              <h2>A Socio-demographic Characteristics</h2>
            </div>
            <div>
              <h3>Household Schedule:</h3>
            </div>
          </div>

          <div className="formcontent cont_extra">
            <InputField
              name="F1"
              h3="F.1 Name of the Head of the Household:"
              value={formF27.F1}
              onChange={handleChange(setFormF27)}
            />
            <InputField
              name="F2"
              h3="F.2 Age (in Years):"
              value={formF27.F2}
              onChange={handleChange(setFormF27)}
            />
            <Radio
              name="F3"
              h3="F.3 Sex:"
              CheckbobItems={["Male", "Female", "Others"]}
              otherArray={[0, 0, 1]}
              byDefault={formF27.F3}
              onClick={handleChange(setFormF27)}
            />
            <Radio
              name="F4"
              h3="F.4 Religion:"
              CheckbobItems={[
                "Hindu",
                "Muslim",
                "Sikh",
                "Christian",
                "Buddhist/ Neo-Buddhist",
                "Jain",
                "Jewish",
                "Parsi/ Zoroastrian",
                "No Religion",
                "Other",
                "Prefer not to disclose/ Refuse",
              ]}
              value={formF27.F4}
              onChange={handleChange(setFormF27)}
            />

            <Radio
              name="F5"
              h3="F.5 Caste:"
              CheckbobItems={[
                "General/ Unreserved (UR)",
                "Scheduled Caste (SC)",
                "Schedules Tribe (ST)",
                "Other Backward Class (OBC)",
                "None of the above",
                "Don’t Know",
                "Prefer not to disclose/ Refuse",
              ]}
              byDefault={formF27.F5}
              onClick={handleChange(setFormF27)}
            />

            <Radio
              name="F6"
              h3="F.6 Marital status:"
              CheckbobItems={[
                "Never married",
                "Currently Married",
                "Separated",
                "Divorced",
                "Widow/Widower",
                "Cohabitating",
                "Prefer not to disclose/ Refuse",
              ]}
              byDefault={formF27.F6}
              onClick={handleChange(setFormF27)}
            />
            <Radio
              name="F7"
              h3="F.7 Level of education:"
              CheckbobItems={[
                "Illiterate",
                "Primary School Certificate",
                "Middle School Certificate",
                "High School Certificate",
                "Intermediate/ Diploma",
                "Graduate",
                "Professional or Honours",
                "Prefer not to disclose/ Refuse",
              ]}
              byDefault={formF27.F7}
              onClick={handleChange(setFormF27)}
            />
            <Radio
              name="F8"
              h3="F.8 Occupation:"
              CheckbobItems={[
                "Unemployed",
                "Housewife/ Homemaker",
                "Elementary Occupation",
                "Plant & Machine Operators and Assemblers",
                "Craft & Related Trade Workers",
                "Skilled Agricultural Fishery Workers",
                "Skilled Workers and Shop & Market Sales Workers",
                "Clerks",
                "Technicians & Associate Professionals",
                "Professionals",
                "Legislators, Senior Officers & Managers",
                "Prefer not to disclose/ Refuse",
              ]}
              byDefault={formF27.F8}
              onClick={handleChange(setFormF27)}
            />
            <Radio
              name="F9"
              h3="F.9 Total family Income per Month (in INR):"
              CheckbobItems={["INR", "Prefer not to disclose/ Refuse"]}
              otherArray={[1, 0]}
              byDefault={formF27.F9}
              onClick={handleChange(setFormF27)}
            />
            <Radio
              name="F10"
              h3="F.10 What type of Transport facility available at home:"
              CheckbobItems={[
                "None",
                "Two-Wheeler (Bicycle)",
                "Two-Wheeler (Motorcycle)",
                "Three-Wheeler (Manual Rickshaw, Auto rickshaw etc.)",
                "Four-Wheeler (Car/Jeep/ etc.)",
                "Agricultural Vehicle (Tractor)",
                "Others",
              ]}
              otherArray={[0, 0, 0, 0, 0, 0, 1]}
              byDefault={formF27.F10}
              onClick={handleChange(setFormF27)}
            />
            <Radio
              name="F11"
              h3="F.11 Do you have any medical insurance?"
              CheckbobItems={["Yes", "No", "Not aware"]}
              byDefault={formF27.F11}
              onClick={handleChange(setFormF27)}
            />
            <Checkbox
              name="F12"
              h3="F.12 If Yes, which of the following Household Medical Insurance coverage do you have?"
              CheckbobItems={[
                "Private Insurance",
                "Central Health Insurance Scheme (Ayushmaan Bharat)",
                "State Health Insurance Scheme",
                "Co-payment",
                "Community Health Insurance Programme",
                "Employee based Insurance (ESI / CGHS/others)",
              ]}
              setFunction={setFormF27}
              StateValue={formF27}
              array={formF27.F12}
            />
            <Radio
              name="F13"
              h3="F.13 Are all your family members enrolled with the same Health Insurance coverage?"
              CheckbobItems={["Yes", "No"]}
              byDefault={formF27.F13}
              onClick={handleChange(setFormF27)}
            />
            <InputField
              name="F14"
              h3="F.14 How many of you or your family members have an individual medical/ health insurance scheme?"
              value={formF27.F14}
              onChange={handleChange(setFormF27)}
            />
            <Radio
              name="F15"
              h3="F.15 Do you have a BPL card?"
              p="Request to show the related cards/document if any."
              CheckbobItems={["Yes", "No"]}
              byDefault={formF27.F15}
              onClick={handleChange(setFormF27)}
            />
            <Radio
              name="F16"
              h3="F.16 Do you have an ABHA ID?"
              p="Request to show the related cards/document if any."
              CheckbobItems={["Yes", "No"]}
              byDefault={formF27.F16}
              onClick={handleChange(setFormF27)}
            />
            <InputField
              name="F17"
              h3="F.17 How many of your family members are enrolled with ABHA id?"
              value={formF27.F17}
              onChange={handleChange(setFormF27)}
            />
            <Radio
              name="F18"
              h3="F.18 Type of Family"
              CheckbobItems={["Nuclear", "Joint", "Living alone/Single"]}
              byDefault={formF27.F18}
              onClick={handleChange(setFormF27)}
            />
            <CSTLastButton
              prev="/costing"
              formName="formf27"
              formData={formF27}
              MainForm={"CST"}
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default FormF27;
