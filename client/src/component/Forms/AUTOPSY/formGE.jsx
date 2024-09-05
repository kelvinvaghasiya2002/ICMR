import React, { useState, useEffect } from "react";
import AOS from "aos";
import { handleChange, turnOffbutton } from "../helpers";
import setLocalStorage, { getLocalStorage } from "../setLocalStorage";
import Heading from "../../Heading/Heading";
import SidePanelCST from "../CST/SidePanelCST";
import InputField from "../child-comp/InputField";
import SidePanelAutopsy from "./sideBarAutopsy";
import Checkbox from "../child-comp/Checkbox";
import Radio from "../child-comp/Radio";
import Buttons from "../child-comp/Buttons";
import OverlayCard from "../OverlayCard";
import { validateNumber, validateRequired } from "../fv";
import useFormValidation from "../../../utils/custom_validation_hook";

function FormGE() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  turnOffbutton();
  var formge = setLocalStorage("formge", {
    GE1: "",
    GE2: "",
    GE3: "",
    GE4: "",
    GE5: "",
    GE6: "",
    GE7: "",
    GE8: "",
    GE9: "",
    GE10: "",
    GE11: "",
    GE12: "",
    GE13: "",
    GE14: "",
    GE15: "",
    GE16: "",
    GE17: "",
    GE18: "",
    GE19: "",
    GE20: "",
    GE21: "",
    GE22: "",
    GE23: "",
    GE24: "",
    GE25: "",
    GE26: "",
    GE27: "",
    GE28: "",
    GE29: "",
    GE30: "",
    GE31: "",
    GE32: "",
    GE33: "",
    GE34: "",
    GE35: [],
    GE36: "",
    GE37: "",
    GE38: "",
    GE39: "",
  });
  const [formGE, setFormGE] = useState(JSON.parse(formge));
  // const [errors, setErrors] = useState({});
  // for validation
  const { isValid, errors, setErrors } = useFormValidation(formGE, [
    "GE1",
    "GE2",
    ...(formGE.GE2 !== "No" ? ["GE3", "GE4"] : []),
    "GE5",
    "GE6",
    "GE7",
    "GE8",
    ...(formGE.GE9 !== "No" ? ["GE10", "GE11", "GE12"] : []),
    "GE13",
    ...(formGE.GE13 !== "No" ? ["GE14", "GE15"] : []),
    "GE16",
    ...(formGE.GE16 !== "No" ? ["GE17", "GE18", "GE19", "GE20", "GE21"] : []),
    "GE22",
    ...(formGE.GE22 !== "No" ? ["GE23"] : []),
    "GE24",
    "GE25",
    ...(formGE.GE25 !== "No" ? ["GE26"] : []),
    "GE27",
    "GE28",
    ...(formGE.GE28 !== "No" ? ["GE29", "GE30"] : []),
    "GE31",
    "GE32",
    "GE33",
    ...(formGE.GE33 !== "No" ? ["GE34", "GE35"] : []),
    "GE36",
    ...(formGE.GE36 !== "No" ? ["GE37", "GE38", "GE39"] : []),
  ]);

  // useEffect(() => {
  //   if (formFE.FE1 === "No") {
  //     setFormFE({ ...formFE, FE2: "" });
  //   }
  //   if (formFE.FE7 === "No") {
  //     setFormFE({ ...formFE, FE8: [] });
  //   }
  // }, [formFE.FE1,formFE.FE7]);

  useEffect(() => {
    if (formGE.GE2 === "No") {
      setFormGE({ ...formGE, GE3: "", GE4: "" });
    }
  }, [formGE.GE2]);

  useEffect(() => {
    if (formGE.GE9 === "No") {
      setFormGE({ ...formGE, GE10: "", GE11: "", GE12: "" });
    }
  }, [formGE.GE9]);

  useEffect(() => {
    if (formGE.GE13 === "No") {
      setFormGE({ ...formGE, GE14: "", GE15: "" });
    }
  }, [formGE.GE13]);

  useEffect(() => {
    if (formGE.GE16 === "No") {
      setFormGE({
        ...formGE,
        GE17: "",
        GE18: "",
        GE19: "",
        GE20: "",
        GE21: "",
      });
    }
  }, [formGE.GE16]);

  useEffect(() => {
    if (formGE.GE22 === "No") {
      setFormGE({ ...formGE, GE23: "" });
    }
  }, [formGE.GE22]);

  useEffect(() => {
    if (formGE.GE25 === "No") {
      setFormGE({ ...formGE, GE26: "" });
    }
  }, [formGE.GE25]);

  useEffect(() => {
    if (formGE.GE28 === "No") {
      setFormGE({ ...formGE, GE29: "", GE30: "" });
    }
  }, [formGE.GE28]);

  useEffect(() => {
    if (formGE.GE33 === "No") {
      setFormGE({ ...formGE, GE34: "", GE35: "" });
    }
  }, [formGE.GE33]);

  const [showOverlay, setShowOverlay] = useState(false);

  // --toggle--
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
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleChangeWithValidation = (e) => {
    const { name, value } = e.target;
    let validatedValue = value;
    let error = "";

    switch (name) {
      case "GE1":
      case "GE3":
      case "GE10":
      case "GE14":
      case "GE17":
      case "GE26":
      case "GE34":
        error = validateNumber(value);
        if (!error) {
          validatedValue = value;
        } else {
          validatedValue = formGE[name];
        }
        break;
      default:
        break;
    }

    setFormGE((prevValue) => ({ ...prevValue, [name]: validatedValue }));

    // Perform additional required validation
    switch (name) {
      case "GE1":
      case "GE2":
      case "GE3":
      case "GE4":
      case "GE5":
      case "GE6":
      case "GE7":
      case "GE8":
      case "GE9":
      case "GE10":
      case "GE11":
      case "GE12":
      case "GE13":
      case "GE14":
      case "GE15":
      case "GE16":
      case "GE17":
      case "GE18":
      case "GE19":
      case "GE20":
      case "GE21":
      case "GE22":
      case "GE23":
      case "GE24":
      case "GE25":
      case "GE26":
      case "GE27":
      case "GE28":
      case "GE29":
      case "GE30":
      case "GE31":
      case "GE32":
      case "GE33":
      case "GE34":
      case "GE35":
      case "GE36":
      case "GE37":
      case "GE38":
      case "GE39":
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
        <Heading h2="Verbal Autopsy Tools"></Heading>
      </div>
      <section className="form-main">
        {isSidebarVisible && (
          <>
            {/* <SidePanelCST id={"1"} /> */}
            <SidePanelAutopsy id={"11"} />
            <div className="grayedover" onClick={toggleSidebar}></div>
          </>
        )}
        {/* <SidePanel id={"1"} /> */}
        <div className="siteInfo" data-aos="fade-left">
          <div className="formhdr">
            <div>
              <h3>GE. Details of sickness</h3>
            </div>
          </div>
          <div className="formcontent">
            {/* GE.1 For how many days was he/she sick before death?  */}
            <InputField
              name="GE1"
              h3="GE.1 For how many days was he/she sick before death?"
              value={formGE.GE1}
              onChange={handleChangeWithValidation}
              required
              error={errors.GE1}
            />
            {/* 
            GE.2Did he/she have fever?  - Yes, No ,Unknown
            GE.3 If yes, how many days did the fever last?
            GE.4 Was the fever accompanied by chills /rigors? - Yes, No, Unknown
            */}
            <Radio
              name="GE2"
              h3="GE.2 Did he/she have fever?"
              CheckbobItems={["Yes", "No", "Unknown"]}
              byDefault={formGE.GE2}
              onClick={handleChange(setFormGE)}
              error={errors.GE2}
            />
            {formGE.GE2 !== "No" && formGE.GE2 && (
              <>
                <InputField
                  name="GE3"
                  h3="GE.3 If yes, how many days did the fever last?"
                  value={formGE.GE3}
                  onChange={handleChangeWithValidation}
                  required
                  error={errors.GE3}
                />
                <Radio
                  name="GE4"
                  h3="GE.4 Was the fever accompanied by chills /rigors?"
                  CheckbobItems={["Yes", "No", "Unknown"]}
                  byDefault={formGE.GE4}
                  onClick={handleChange(setFormGE)}
                  error={errors.GE4}
                />
              </>
            )}
            {/* 
            GE.5
Did he/she have convulsions or fits?
⬜ Yes
⬜ No
⬜ Unknown
GE.6
Was he/she unconscious during the illness that led to death?
⬜ Yes
⬜ No
⬜ Unknown
GE.7
Did he/she develop stiffness of the whole body?
⬜ Yes
⬜ No
⬜ Unknown
GE.8
Did he/she have a stiff neck? (demonstrate)
⬜ Yes
⬜ No
⬜ Unknown


            */}

            <Radio
              name="GE5"
              h3="GE.5 Did he/she have convulsions or fits?"
              CheckbobItems={["Yes", "No", "Unknown"]}
              byDefault={formGE.GE5}
              onClick={handleChange(setFormGE)}
              error={errors.GE5}
            />
            <Radio
              name="GE6"
              h3="GE.6 Was he/she unconscious during the illness that led to death?"
              CheckbobItems={["Yes", "No", "Unknown"]}
              byDefault={formGE.GE6}
              onClick={handleChange(setFormGE)}
              error={errors.GE6}
            />
            <Radio
              name="GE7"
              h3="GE.7 Did he/she develop stiffness of the whole body?"
              CheckbobItems={["Yes", "No", "Unknown"]}
              byDefault={formGE.GE7}
              onClick={handleChange(setFormGE)}
              error={errors.GE7}
            />
            <Radio
              name="GE8"
              h3="GE.8 Did he/she have a stiff neck? (demonstrate)"
              CheckbobItems={["Yes", "No", "Unknown"]}
              byDefault={formGE.GE8}
              onClick={handleChange(setFormGE)}
              error={errors.GE8}
            />

            {/* 
            GE.9
Did he/she have diarrhoea (more frequent or more liquid stools)?
⬜ Yes
⬜ No
⬜ Unknown
GE.10
If yes, for how many days?


GE.11
Was there visible blood in the stools?
⬜ Yes
⬜ No
⬜ Unknown
GE.12
If he/she had diarrhoea, was he/she given any fluids such as (local term for oral rehydration treatment)?
⬜ Yes
⬜ No
⬜ Unknown

            
            */}
            <Radio
              name="GE9"
              h3="GE.9 Did he/she have diarrhoea (more frequent or more liquid stools)?"
              CheckbobItems={["Yes", "No", "Unknown"]}
              byDefault={formGE.GE9}
              onClick={handleChange(setFormGE)}
              error={errors.GE9}
            />
            {formGE.GE9 !== "No" && formGE.GE9 && (
              <>
                <InputField
                  name="GE10"
                  h3="GE.10 If yes, for how many days?"
                  value={formGE.GE10}
                  onChange={handleChangeWithValidation}
                  required
                  error={errors.GE10}
                />
                <Radio
                  name="GE11"
                  h3="GE.11 Was there visible blood in the stools?"
                  CheckbobItems={["Yes", "No", "Unknown"]}
                  byDefault={formGE.GE11}
                  onClick={handleChange(setFormGE)}
                  error={errors.GE11}
                />
                <Radio
                  name="GE12"
                  h3="GE.12 If he/she had diarrhoea, was he/she given any fluids such as (local term for oral rehydration treatment)?"
                  CheckbobItems={["Yes", "No", "Unknown"]}
                  byDefault={formGE.GE12}
                  onClick={handleChange(setFormGE)}
                  error={errors.GE12}
                />
              </>
            )}

            {/* 
            GE.13
Did he/she have a cough?
⬜ Yes
⬜ No
⬜ Unknown
GE.14
If yes, for how many days?


GE.15
Was it…..?
⬜ Dry
⬜ Productive
⬜ With blood
⬜ Unknown


            */}
            <Radio
              name="GE13"
              h3="GE.13 Did he/she have a cough?"
              CheckbobItems={["Yes", "No", "Unknown"]}
              byDefault={formGE.GE13}
              onClick={handleChange(setFormGE)}
              error={errors.GE13}
            />
            {formGE.GE13 !== "No" && formGE.GE13 && (
              <>
                <InputField
                  name="GE14"
                  h3="GE.14 If yes, for how many days?"
                  value={formGE.GE14}
                  onChange={handleChangeWithValidation}
                  required
                  error={errors.GE14}
                />
                <Radio
                  name="GE15"
                  h3="GE.15 Was it…..?"
                  CheckbobItems={["Dry", "Productive", "With blood", "Unknown"]}
                  byDefault={formGE.GE15}
                  onClick={handleChange(setFormGE)}
                  error={errors.GE15}
                />
              </>
            )}

            {/* 
            GE.16
Did he/she have breathing difficulties?
⬜ Yes
⬜ No
⬜ Unknown
GE.17
If yes how many days?


GE.18
Did he/she have fast breathing?
⬜ Yes
⬜ No
⬜ Unknown
GE.19
Did he/she have in-drawing of chest?
⬜ Yes
⬜ No
⬜ Unknown
GE.20
Did he/she have wheezing? (demonstrate sound)
⬜ Yes
⬜ No
⬜ Unknown
GE.21
During the breathing problems, did he/she receive any antibiotics?
⬜ Yes
⬜ No
⬜ Unknown


            */}
            <Radio
              name="GE16"
              h3="GE.16 Did he/she have breathing difficulties?"
              CheckbobItems={["Yes", "No", "Unknown"]}
              byDefault={formGE.GE16}
              onClick={handleChange(setFormGE)}
              error={errors.GE16}
            />
            {formGE.GE16 !== "No" && formGE.GE16 && (
              <>
                <InputField
                  name="GE17"
                  h3="GE.17 If yes how many days?"
                  value={formGE.GE17}
                  onChange={handleChangeWithValidation}
                  required
                  error={errors.GE17}
                />
                <Radio
                  name="GE18"
                  h3="GE.18 Did he/she have fast breathing?"
                  CheckbobItems={["Yes", "No", "Unknown"]}
                  byDefault={formGE.GE18}
                  onClick={handleChange(setFormGE)}
                  error={errors.GE18}
                />
                <Radio
                  name="GE19"
                  h3="GE.19 Did he/she have in-drawing of chest?"
                  CheckbobItems={["Yes", "No", "Unknown"]}
                  byDefault={formGE.GE19}
                  onClick={handleChange(setFormGE)}
                  error={errors.GE19}
                />
                <Radio
                  name="GE20"
                  h3="GE.20 Did he/she have wheezing? (demonstrate sound)"
                  CheckbobItems={["Yes", "No", "Unknown"]}
                  byDefault={formGE.GE20}
                  onClick={handleChange(setFormGE)}
                  error={errors.GE20}
                />
                <Radio
                  name="GE21"
                  h3="GE.21 During the breathing problems, did he/she receive any antibiotics?"
                  CheckbobItems={["Yes", "No", "Unknown"]}
                  byDefault={formGE.GE21}
                  onClick={handleChange(setFormGE)}
                  error={errors.GE21}
                />
              </>
            )}

            {/* 
            GE.22
During the illness, did he/she have abdominal pain?
⬜ Yes
⬜ No
⬜ Unknown
[01]
[02]
[03]
If no skip to GE.24
GE.23
If yes, was the pain in..?
⬜ All over abdomen
⬜ Upper
⬜ Lower
⬜ Unknown 
[01]
[02]
[03]


GE.24
Did he/she have abdominal distention?
⬜ Yes
⬜ No
⬜ Unknown
[01]
[02]
[03]




            */}
            <Radio
              name="GE22"
              h3="GE.22 During the illness, did he/she have abdominal pain?"
              CheckbobItems={["Yes", "No", "Unknown"]}
              byDefault={formGE.GE22}
              onClick={handleChange(setFormGE)}
              error={errors.GE22}
            />
            {formGE.GE22 !== "No" && formGE.GE22 && (
              <>
                <Radio
                  name="GE23"
                  h3="GE.23 If yes, was the pain in..?"
                  CheckbobItems={[
                    "All over abdomen",
                    "Upper",
                    "Lower",
                    "Unknown",
                  ]}
                  byDefault={formGE.GE23}
                  onClick={handleChange(setFormGE)}
                  error={errors.GE23}
                />
              </>
            )}
            <Radio
              name="GE24"
              h3="GE.24 Did he/she have abdominal distention?"
              CheckbobItems={["Yes", "No", "Unknown"]}
              byDefault={formGE.GE24}
              onClick={handleChange(setFormGE)}
              error={errors.GE24}
            />
            {/* 
            GE.25
Did he/she vomit?
⬜ Yes
⬜ No
⬜ Unknown
[01]
[02]
[03]
If no skip to GE.27
GE.26
If yes, for how many days?






GE.27
Did the eye/skin colour change to yellow?
⬜ Yes
⬜ No
⬜ Unknown
[01]
[02]
[03]


GE.28
Did he/she have any skin disease or rash?
⬜ Yes
⬜ No
⬜ Unknown
[01]
[02]
[03]
If no skip to GE.31
GE.29
Was the rash…..?
⬜ All over the body
⬜ Only on face
⬜ unknown
[01]
[02]
[03]


GE.30
Was this measles (use local term)?
⬜ Yes
⬜ No
⬜ Unknown
[01]
[02]
[03]


GE.31
During the illness that led to death, did he/she become very thin?
⬜ Yes
⬜ No
⬜ Unknown
[01]
[02]
[03]


GE.32
During the weeks preceding death, did he/she suffer from lack of blood or appear pale?
⬜ Yes
⬜ No
⬜ Unknown
[01]
[02]
[03]




            */}
            <Radio
              name="GE25"
              h3="GE.25 Did he/she vomit?"
              CheckbobItems={["Yes", "No", "Unknown"]}
              byDefault={formGE.GE25}
              onClick={handleChange(setFormGE)}
              error={errors.GE25}
            />
            {formGE.GE25 !== "No" && formGE.GE25 && (
              <>
                <InputField
                  name="GE26"
                  h3="GE.26 If yes, for how many days?"
                  value={formGE.GE26}
                  onChange={handleChangeWithValidation}
                  required
                  error={errors.GE26}
                />
              </>
            )}
            <Radio
              name="GE27"
              h3="GE.27 Did the eye/skin colour change to yellow?"
              CheckbobItems={["Yes", "No", "Unknown"]}
              byDefault={formGE.GE27}
              onClick={handleChange(setFormGE)}
              error={errors.GE27}
            />
            <Radio
              name="GE28"
              h3="GE.28 Did he/she have any skin disease or rash?"
              CheckbobItems={["Yes", "No", "Unknown"]}
              byDefault={formGE.GE28}
              onClick={handleChange(setFormGE)}
              error={errors.GE28}
            />
            {formGE.GE28 !== "No" && formGE.GE28 && (
              <>
                <Radio
                  name="GE29"
                  h3="GE.29 Was the rash…..?"
                  CheckbobItems={[
                    "All over the body",
                    "Only on face",
                    "unknown",
                  ]}
                  byDefault={formGE.GE29}
                  onClick={handleChange(setFormGE)}
                  error={errors.GE29}
                />
                <Radio
                  name="GE30"
                  h3="GE.30 Was this measles (use local term)?"
                  CheckbobItems={["Yes", "No", "Unknown"]}
                  byDefault={formGE.GE30}
                  onClick={handleChange(setFormGE)}
                  error={errors.GE30}
                />
              </>
            )}
            <Radio
              name="GE31"
              h3="GE.31 During the illness that led to death, did he/she become very thin?"
              CheckbobItems={["Yes", "No", "Unknown"]}
              byDefault={formGE.GE31}
              onClick={handleChange(setFormGE)}
              error={errors.GE31}
            />
            <Radio
              name="GE32"
              h3="GE.32 During the weeks preceding death, did he/she suffer from lack of blood or appear pale?"
              CheckbobItems={["Yes", "No", "Unknown"]}
              byDefault={formGE.GE32}
              onClick={handleChange(setFormGE)}
              error={errors.GE32}
            />
            {/* 
            GE.33
Did he/she have repeated illness?
⬜ Yes
⬜ No
⬜ Unknown
[01]
[02]
[03]
If no skip to GE.36
GE.34
If yes, how many illnesses in the past six months?






GE.35
If yes, what were the common associated symptoms with the illness? (check all that apply)
⬜ Cough
⬜ Diarrhoea
⬜ Ear discharge
⬜ Chills
⬜ Other
⬜ Unknown
[01]
[02]
[03]


GE.36
Was he/she immunized?
⬜ Yes
⬜ No
⬜ Unknown
[01]
[02]
[03]
If no skip to GF
GE.37
If yes, did he/she receive BCG injection?
⬜ Yes
⬜ No
⬜ Unknown
[01]
[02]
[03]


GE.38
If yes, did he/she receive polio drops in the mouth?
⬜ Yes
⬜ No
⬜ Unknown
[01]
[02]
[03]


GE.39
If yes, did he/she receive an injection for measles (use local term)?
⬜ Yes
⬜ No
⬜ Unknown
[01]
[02]
[03]




            */}
            <Radio
              name="GE33"
              h3="GE.33 Did he/she have repeated illness?"
              CheckbobItems={["Yes", "No", "Unknown"]}
              byDefault={formGE.GE33}
              onClick={handleChange(setFormGE)}
              error={errors.GE33}
            />
            {formGE.GE33 !== "No" && formGE.GE33 && (
              <>
                <InputField
                  name="GE34"
                  h3="GE.34 If yes, how many illnesses in the past six months?"
                  value={formGE.GE34}
                  onChange={handleChangeWithValidation}
                  error={errors.GE34}
                />
                <Checkbox
                  name="GE35"
                  h3="GE.35 If yes, what were the common associated symptoms with the illness? (check all that apply)"
                  CheckbobItems={[
                    "Cough",
                    "Diarrhoea",
                    "Ear discharge",
                    "Chills",
                    "Other",
                    "Unknown",
                  ]}
                  setFunction={setFormGE}
                  StateValue={formGE}
                  array={formGE.GE35}
                  error={errors.GE35}
                />
              </>
            )}
            <Radio
              name="GE36"
              h3="GE.36 Was he/she immunized?"
              CheckbobItems={["Yes", "No", "Unknown"]}
              byDefault={formGE.GE36}
              onClick={handleChange(setFormGE)}
              error={errors.GE36}
            />
            {formGE.GE36 !== "No" && formGE.GE36 && (
              <>
                <Radio
                  name="GE37"
                  h3="GE.37 If yes, did he/she receive BCG injection?"
                  CheckbobItems={["Yes", "No", "Unknown"]}
                  byDefault={formGE.GE37}
                  onClick={handleChange(setFormGE)}
                  error={errors.GE37}
                />
                <Radio
                  name="GE38"
                  h3="GE.38 If yes, did he/she receive polio drops in the mouth?"
                  CheckbobItems={["Yes", "No", "Unknown"]}
                  byDefault={formGE.GE38}
                  onClick={handleChange(setFormGE)}
                  error={errors.GE38}
                />
                <Radio
                  name="GE39"
                  h3="GE.39 If yes, did he/she receive an injection for measles (use local term)?"
                  CheckbobItems={["Yes", "No", "Unknown"]}
                  byDefault={formGE.GE39}
                  onClick={handleChange(setFormGE)}
                  error={errors.GE39}
                />
              </>
            )}

            <div className="button-container">
              <Buttons
                formName="formge"
                formData={formGE}
                prevText="Previous"
                nextText="Save & Next"
                prev="/formGB"
                next="/formGF"
                // validateForm={validateForm}
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

export default FormGE;
