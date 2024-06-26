import SidePanel from './SidePanelCST.jsx';
import Checkbox from '../child-comp/Checkbox.jsx';
import Radio from '../child-comp/Radio.jsx';
import { Link } from 'react-router-dom';
import "../Form.css"
import React, { useEffect, useState } from 'react'
import Buttons from '../child-comp/Buttons.jsx';
import InputField from '../child-comp/InputField.jsx';
import { turnOffbutton, handleChange } from '../helpers.js';
import setLocalStorage from '../setLocalStorage.js';
import Heading from '../../Heading/Heading';
import Table from '../child-comp/Table.jsx'
import DropDown from '../child-comp/DropDown.jsx';
import Table1 from '../child-comp/Table1.jsx';

function FormA15() {
  var forma15 = setLocalStorage("forma15", { AC15_1: "", })
  const [formA15, setFormA15] = useState(JSON.parse(forma15))
  turnOffbutton();
  return (
    <div>
      <Heading h2="Community Survey Tool"></Heading>
      <section id='site-info'>
        <SidePanel id={"4"} />
        <div className='siteInfo'>
          <div className="formhdr">
            <div>
              <h2>A Socio-demographic Characteristics</h2>
            </div>
            <div>
              <h3>
                Death
              </h3>
            </div>
          </div>

          <div className="formcontent cont_extra">
            <Radio
              name="AC15_1"
              h3="AC.15.1  In the last one year, did any member in your household lose his/her life due to any health emergency condition?"
              CheckbobItems={["Yes", "No"]}
              onClick={handleChange(setFormA15)}
            />
            <InputField h3="AC.15.2  If yes, how many members in your household lost his/her life due to any health emergency condition (Specify)" placeholder="Type here" name="AC11_1_if" />
            <h3>AC.15.3  If yes, could you please tell about the deceased persons?</h3>
            {/* <Table1 tableName={"forma15"} /> */}
            {/* <Checkbox
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
                "Others (Specify)"
              ]}
              other={true}
              setFunction={handleChange(setFormA15)}
            /> */}
            <InputField h3="What were the symptoms reported by the deceased and first course of action?" placeholder="Type here" name="AC11_1_if" />
            <Buttons prev="/others" next="/" prevText="Previous" nextText="Save & Next" />
          </div>
        </div>
      </section>
    </div>
  )
}

export default FormA15