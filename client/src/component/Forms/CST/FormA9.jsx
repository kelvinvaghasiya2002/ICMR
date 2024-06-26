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


function FormA9() {
  var forma9 = setLocalStorage("forma9", { AC9_1: "",AC9_1_if:"", AC9_2: "" })
  const [formA9, setFormA9] = useState(JSON.parse(forma9))
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
                Stroke
              </h3>
            </div>
          </div>

          <div className="formcontent cont_extra">
            <Radio
              name="AC9_1"
              h3="AC.9.1 In the past one year, did you or any member of this household suffer with brain stroke or symptoms like sudden onset of weakness, especially one side of the body/loss of consciousness/altered sensorium/imbalance/blurred vision/facial deviation/drooping of eyelid/speech abnormality with numbness and tingling sensation, or difficulty in speaking or understanding speech (aphasia), or sudden severe headache with no known cause of one's life (haemorrhagic strokes)?"
              CheckbobItems={["Yes", "No"]}
              onClick={handleChange(setFormA9)}
            />
            <InputField h3="If Yes, What were the symptoms of emergency conditions and first course of action?" placeholder="Type here" name="AC9_1_if" />
            <DropDown h3="AC.9.2  If yes, could you please tell who all from your Household suffered with this condition?" dropdownItems={["< 1 year", "> 1 year"]} name="AC9_2" onClick={handleChange(setFormA9)} />
            <Buttons prev="/stemi" next="/acuterespiratoryillness" prevText="Previous" nextText="Save & Next" />
          </div>
        </div>
      </section>
    </div>
  )
}

export default FormA9