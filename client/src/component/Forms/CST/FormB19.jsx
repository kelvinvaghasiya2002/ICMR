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
import CSTButton from '../child-comp/CSTButton.jsx';


function formB16() {
  var formb16 = setLocalStorage("formb16", { B0: "", B1: "", B2: "", B3: "", B4: [], B5_dt: "", B6: "", B7: "", B8: "", B9: "", B10: "", B11_if: "", B12: "", B13: "", B14: "", B15: "", B16: "", B17_1: "", B17_2: "", B18: "", B19: "", B20: "", B21: "", B22_1: "", B22_2: "", B23_1: "", B23_2: "", B24: "", B25: "", B26: [], B27: "", B28: "", B29: "", B30: "", B31: "", B32: "", B33: "", B34: "" })
  const [formB16, setFormB16] = useState(JSON.parse(formb16))
  turnOffbutton();

  useEffect(() => {
    if (formB16.B19 !== "Government ambulance") {
      setFormB16((prevValue) => {
        return ({
          ...prevValue,
          B20: ""
        })
      })
    }

    if (formB16.B30 !== "Yes") {
      setFormB16((prevValue) => {
        return ({
          ...prevValue,
          B31: ""
        })
      })
    }


  }, [formB16.B19 , formB16.B30])

  return (
    <div>
      <Heading h2="Community Survey Tool"></Heading>
      <section id='site-info'>
        <SidePanel id={"19"} />
        <div className='siteInfo'>
          <div className="formhdr">
            <div>
              <h2>A Socio-demographic Characteristics</h2>
            </div>
            <div>
              <h3>
                Initial Healthcare Seeking Pathway
              </h3>
            </div>
          </div>

          <div className="formcontent cont_extra">

            <Radio onClick={handleChange(setFormB16)} h3="B.16  Who suggested you visit the healthcare facility for emergency care? " CheckbobItems={["Self/ Family members", "Neighbour", "FLHW (ASHA/ AWW/ ANM/ CHO)", "Doctor", "Other"]} name="B16" otherArray={[0, 0, 0, 0, 1]} byDefault={formB16.B16} />

            <h3>B.17  How much time did it take to decide to seek care or call an ambulance or any transport after recognizing the symptom? (In Min/Hour)</h3>

            <InputField onChange={handleChange(setFormB16)} h3="Hour" placeholder="Type here" name="B17_1" value={formB16.B17_1} />

            <InputField onChange={handleChange(setFormB16)} h3="Minutes" placeholder="Type here" name="B17_2" value={formB16.B17_2} />


            <Radio onClick={handleChange(setFormB16)} h3="B.18  How did you or the patient reach the first health care facility? " CheckbobItems={["Own vehicle", "Hired vehicle ", "Ambulance", "Neighbour’s Vehicle", "Passer-by’s Vehicle", "Others (Specify)"]} name="B18" otherArray={[0, 0, 0, 0, 0, 1]} byDefault={formB16.B18} />

            <Radio onClick={handleChange(setFormB16)} h3="B.19  What type of transport was used to reach the first health care facility? " CheckbobItems={["Government ambulance", "Private ambulance", "Two-Wheeler (Bicycle)", "Two-Wheeler (Motorcycle)", "Three-Wheeler (Manual Rickshaw, etc.)", "Three-Wheeler (Auto Rickshaw/ E-rickshaw, etc.)", "Four-Wheeler (Car/Jeep/ etc.)", "Agricultural Vehicle (Tractor)", "Others (Specify)"]} name="B19" otherArray={[0, 0, 0, 0, 0, 0, 0, 0, 1]} byDefault={formB16.B19} />

            {
              formB16.B19 === "Government ambulance" &&
              <Radio onClick={handleChange(setFormB16)} h3="B.20  If Govt. Ambulance, Which ambulance service you opted for? " CheckbobItems={["102", "108", "Others (Specify)", "Don't know"]} name="B20" otherArray={[0, 0, 1, 0]} byDefault={formB16.B20} />
            }

            <Radio onClick={handleChange(setFormB16)} h3="B.21  Were there any problems in arranging for transport of the patient?  (Describe) " CheckbobItems={["Yes (Specify)", "No"]} name="B21" otherArray={[1, 0]} byDefault={formB16.B21} />

            <h3>B.22  How much time the ambulance/ any transport took to reach the point of incident? (In Min/Hour)</h3>

            <InputField onChange={handleChange(setFormB16)} h3="Hour" placeholder="Type here" name="B22_1" value={formB16.B22_1} />

            <InputField onChange={handleChange(setFormB16)} h3="Minutes" placeholder="Type here" name="B22_2" value={formB16.B22_2} />

            <h3>B.23  How much time the ambulance/ any transport took to reach the first facility from the point of incident? (in minutes/ hours)</h3>

            <InputField onChange={handleChange(setFormB16)} h3="Hour" placeholder="Type here" name="B23_1" value={formB16.B23_1} />

            <InputField onChange={handleChange(setFormB16)} h3="Minutes" placeholder="Type here" name="B23_2" value={formB16.B23_2} />



            <Radio onClick={handleChange(setFormB16)} h3="B.24  Which type of facility did you visit first? " CheckbobItems={["SC/HWC", "PHC", "CHC", "District Headquarter Hospital ", "Medical College", "Private hospital", "Private clinic", "ESI/railway/other Govt. Hospital", "Others(Specify)"]} name="B24" otherArray={[0, 0, 0, 0, 0, 0, 0, 0, 1]} byDefault={formB16.B24} />

            <InputField onChange={handleChange(setFormB16)} h3="B.25  What was the name of the facility?" placeholder="Type here" name="B25" value={formB16.B25} />

            <Checkbox
              h3="B.26  Who suggested you the above-mentioned facility for emergency care?"
              CheckbobItems={[
                "Self",
                "Family members",
                "Neighbour",
                "ASHA/AWW",
                "ANM",
                "CHO"
                // other specify baaki 6
              ]}
              name="B26" setFunction={setFormB16} StateValue={formB16} array={formB16.B26}
            />

            <Radio onClick={handleChange(setFormB16)} h3="B.27  How long after reaching the first HCF (in emergency) was the patient attended? " CheckbobItems={["Immediately", "5-10 minutes", "10-30 minutes", ">30 minutes", "Do not know"]} name="B27" byDefault={formB16.B27} />

            <Radio onClick={handleChange(setFormB16)} h3="B.28  Who attended the patient at the first HCF? " CheckbobItems={["Health worker", "Nurse", "Doctor", "Do not know"]} name="B28" byDefault={formB16.B28} />

            <Radio onClick={handleChange(setFormB16)} h3="B.29  Was any treatment started at the HCF?" CheckbobItems={["Yes", "No", "Do not know"]} name="B29" byDefault={formB16.B29} />

            <Radio onClick={handleChange(setFormB16)} h3="B.30  Were any laboratory &/or radiology investigations done at the HCF? " CheckbobItems={["Yes", "No", "Do not know"]} name="B30" byDefault={formB16.B30} />

            {
              formB16.B30 === "Yes" &&
              <Radio onClick={handleChange(setFormB16)} h3="B.31  How much time was spent in investigations? " CheckbobItems={["Less than 30 minutes", "30 minutes to 1 hour", "More than 1 hour", "Do not Know"]} name="B31" byDefault={formB16.B31} />
            }

            <Radio onClick={handleChange(setFormB16)} h3="B.32 Was the patient shifted to ICU/ CCU/ HDU at HCF? " CheckbobItems={["Yes", "No"]} name="B32" byDefault={formB16.B32} />

            <CSTButton formName="formb16" formData={formB16} prev="/initialhealthcareseekingpathway-1" next="/initialhealthcareseekingpathway-4" prevText="Previous" nextText="Save & Next" />
          </div>
        </div>
      </section>
    </div>
  )
}

export default formB16
