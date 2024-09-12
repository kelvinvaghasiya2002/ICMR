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
import Table from "../child-comp/Table.jsx";
import DropDown from "../child-comp/DropDown.jsx";
import Table1 from "../child-comp/Table1.jsx";

function FormA15() {
  var forma3 = getLocalStorage("forma3");
  var forma3 = getLocalStorage("forma3");
  var forma15 = setLocalStorage("forma15", {
    AC15_1: "",
    AC15_2: "",
    AC15_4: [""],
  });
  const [formA15, setFormA15] = useState(JSON.parse(forma15));
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
    if (formA15.AC15_1 === "No") {
      setFormA15({ ...formA15, AC15_2: "", AC15_4: [""] });
      localStorage.removeItem("forma15_table");
    }
  }, [formA15.AC15_1]);
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
            <SidePanel id={"13"} />
            <div className="grayedover" onClick={toggleSidebar}></div>
          </>
        )}
        <div className="siteInfo">
          <div className="formhdr">
            <div>
              <h2>A Socio-demographic Characteristics</h2>
            </div>
            <div>
              <h3>Death</h3>
            </div>
          </div>

          <div className="formcontent cont_extra fbox">
            <div className="fbox1">
              <Radio
                name="AC15_1"
                h3="AC.15.1  In the last one year, did any member in your household lose his/her life due to any health emergency condition?"
                CheckbobItems={["Yes", "No"]}
                onClick={handleChange(setFormA15)}
                byDefault={formA15.AC15_1}
              />

              {formA15.AC15_1 === "Yes" && formA15.AC15_1 && (
                <>
                  <InputField
                    h3="AC.15.2  If yes, how many members in your household lost his/her life due to any health emergency condition (Specify)"
                    placeholder="Type here"
                    name="AC15_2"
                    onChange={handleChange(setFormA15)}
                    value={formA15.AC15_2}
                  />

                  <h3>
                    AC.15.3 If yes, could you please tell about the deceased
                    persons?
                  </h3>

                  {/* <Table tableName={"forma15_table"} /> */}
                  <Table1 tableName={"forma15_table"} />

                  <Checkbox
                    name="AC15_4"
                    h3="AC.15.4 What were the symptoms the deceased complained about? (optional)"
                    CheckbobItems={[
                      "Trauma: Suffered from sudden injury in Road Traffic Accident/fracture/severe fall/drowning/stabbing/gunshot/any other assault/any attempt to self-harm/domestic violence/homicidal etc.?",
                      "STEMI: Suffered from severe/minor burns etc. that required medical attention?",
                      "Stroke: Brain stroke or symptoms like sudden onset of weakness, especially one side of the body/loss of consciousness/altered sensorium/imbalance/blurred vision/facial deviation/drooping of eyelid/speech abnormality with numbness and tingling sensation, or difficulty in speaking or understanding speech (aphasia), or sudden severe headache with no known cause of one's life (haemorrhagic strokes)?",
                      "Acute Respiratory Illness: Breathlessness with or without sudden onset of fever/cough with expectoration/chest pain (pleuritic)/fast breathing/not able to speak complete sentences/loss of consciousness/or chest tightness leading to suspicion of pneumonia?",
                      "Postpartum Haemorrhage & Pre-Eclampsia: Vaginal bleeding that required blood transfusion or sudden increase in blood pressure or decreased urine output or loss of fetal movements or loss of consciousness or seizure or fits etc., before/during/after delivery",
                      "Neonatal Emergency: The newborn cry/cry late/unable to breathe/have breathing difficulty that requires hospitalization or admission to SNCU/appear cold or warm (fever) to touch/refuse to breastfeed/become nonresponsive to touch/have distended abdomen or minimal or abnormal limb movements/develop bluish discoloration or jaundice/pass loose stools/or develop any other condition that requires admission/hospitalization or needs any medical attention within the first month of life?",
                      "Snake bite",
                      "Poisoning: Accidental/intentional ingestion of poison/ingestion or exposure to pesticides/insecticides/ingestion of rat poison/poisonous seed/phenyl any hazardous substance/chemical substance or any other substance that could have required any sort of medical attention or treatment?",
                    ]}
                    other={true}
                    setFunction={setFormA15}
                    StateValue={formA15}
                    array={formA15.AC15_4}
                  />
                </>
              )}
            </div>

            <Buttons
              prev={
                forma3.AC5 == "No"
                  ? "/linelistingofhouseholdmembers-4"
                  : "/others"
              }
              next={
                forma3.AC5 == "No" && formA15.AC15_1 == "No"
                  ? "/household-schedule"
                  : "/socio-demographicprofileofthepatientinthehhwithemergencycondition"
              }
              prevText="Previous"
              nextText="Save & Next"
              formName="forma15"
              formData={formA15}
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default FormA15;
