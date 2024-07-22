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
import ShortUniqueId from "short-unique-id"

const uid = new ShortUniqueId({ length: 10 });
console.log(uid.rnd());

function FormA1() {
  var forma1 = setLocalStorage("forma1", { AA1: "", AA2: "", AA3: "", AA4: "" })
  turnOffbutton();

  const date = new Date();
  const [formA1, setFormA1] = useState(JSON.parse(forma1))

  useEffect(() => {
    setFormA1((prevValue) => {
      return (formA1.AA4 === "") ? (
        {
          ...prevValue,
          AA1 : (formA1.AA1==="") ? `${date.toDateString()}  ${date.getHours()}:${date.getMinutes()}` : formA1.AA1,
          AA4: uid.rnd()
        }
      ) : (
        {
          ...prevValue,
          AA1 : (formA1.AA1==="") ? `${date.toDateString()}  ${date.getHours()}:${date.getMinutes()}` : formA1.AA1
        }
      )
    })
  }, [])

  return (
    <div>
      <Heading h2="Community Survey Tool"></Heading>
      <section id='site-info'>
        <SidePanel id={"1"} />
        <div className='siteInfo'>
          <div className="formhdr">
            <div>
              <h2>A Socio-demographic Characteristics</h2>
            </div>
            <div>
              <h3>
                Site Information
              </h3>
            </div>
          </div>

          <div className="formcontent cont_extra">
            <div>
              <p className='datetime'>AA.1  Date & Time : {formA1.AA1}</p>
            </div>


            <Radio h3="AA.2 Site :" CheckbobItems={["GJBRC_CS", "ORPUR_CS", "MPBHS_CS", "PBLDH_CS", "PYPDY_CS"]} name="AA2" onClick={handleChange(setFormA1)} byDefault={formA1.AA2} />

            <InputField h3="AA.3 Name Of the Data Collector :" placeholder="Type here" name="AA3" value={formA1.AA3} onChange={handleChange(setFormA1)} />

            <div className='block'>
              <h3 className='h3block'>AA.4 Respondent ID: </h3>
              <input
                className='blockinput'
                value={formA1.AA4}
                name="AA4"
                readOnly
              />
            </div>

            <Buttons formName="forma1" formData={formA1} prevText="" nextText="Save & Next" next="/clusterinformation" />
          </div>
        </div>
      </section>
    </div>
  )
}

export default FormA1