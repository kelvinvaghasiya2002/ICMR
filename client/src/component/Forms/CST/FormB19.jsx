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
import AOS from 'aos'
import 'aos/dist/aos.css'


function FormB19() {

  useEffect(()=> {
    AOS.init({duration:2000})
}, []);

    var formb19 = setLocalStorage("formb19", { B16: "", B17_1: "",B17_2:"",B18:"", B19: "", B20: "", B21: "", B22_1: "",B22_2:"", B23_1: "",B23_2:"", B24: "", B25: "", B26: "", B27: "", B28: "", B29: "", B30: "", B31: "", B32: "", B33: "", B34: "" })

    const [formB19, setFormB19] = useState(JSON.parse(formb19))
    turnOffbutton();
    return (
      <div>
      <Heading h2="Community Survey Tool"></Heading>
        <section id='site-info'>
            <SidePanel id={"19"} />
            <div className='siteInfo' data-aos="fade-left" >
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

                <Radio onClick={handleChange(setFormB19)} h3="B.16  Who suggested you visit the healthcare facility for emergency care? " CheckbobItems={["Self/ Family members", "Neighbour","FLHW (ASHA/ AWW/ ANM/ CHO)", "Doctor","Other"]} name="B16" otherArray={[0,0,0,0,1]} byDefault={formB19.B16}/>

                <h3>B.17  How much time did it take to decide to seek care or call an ambulance or any transport after recognizing the symptom? (In Min/Hour)</h3>

                <InputField onChange={handleChange(setFormB19)} h3="Hour" placeholder="Type here" name="B17_1"  value={formB19.B17_1}/>

                <InputField onChange={handleChange(setFormB19)} h3="Minutes" placeholder="Type here" name="B17_2"  value={formB19.B17_2}/>


                <Radio onClick={handleChange(setFormB19)} h3="B.18  How did you or the patient reach the first health care facility? " CheckbobItems={["Own vehicle", "Hired vehicle ","Ambulance", "Neighbour’s Vehicle","Passer-by’s Vehicle","Others (Specify)"]} name="B18" otherArray={[0,0,0,0,0,1]} byDefault={formB19.B18}/>

                <Radio onClick={handleChange(setFormB19)} h3="B.19  What type of transport was used to reach the first health care facility? " CheckbobItems={["Government ambulance", "Private ambulance","Two-Wheeler (Bicycle)", "Two-Wheeler (Motorcycle)","Three-Wheeler (Manual Rickshaw, etc.)","Three-Wheeler (Auto Rickshaw/ E-rickshaw, etc.)","Four-Wheeler (Car/Jeep/ etc.)","Agricultural Vehicle (Tractor)","Others (Specify)"]} name="B19" otherArray={[0,0,0,0,0,0,0,0,1]} byDefault={formB19.B19}/>

                <Radio onClick={handleChange(setFormB19)} h3="B.20  If Govt. Ambulance, Which ambulance service you opted for? " CheckbobItems={["102", "108","Others (Specify)", "Don't know"]} name="B20" otherArray={[0,0,1,0]} byDefault={formB19.B20}/>

                <Radio onClick={handleChange(setFormB19)} h3="B.21  Were there any problems in arranging for transport of the patient?  (Describe) " CheckbobItems={["Yes (Specify)", "No"]} name="B21" otherArray={[1,0]} byDefault={formB19.B21}/>

                <h3>B.22  How much time the ambulance/ any transport took to reach the point of incident? (In Min/Hour)</h3>

                <InputField onChange={handleChange(setFormB19)} h3="Hour" placeholder="Type here" name="B22_1"  value={formB19.B22_1}/>

                <InputField onChange={handleChange(setFormB19)} h3="Minutes" placeholder="Type here" name="B22_2"  value={formB19.B22_2}/>

                <h3>B.23  How much time the ambulance/ any transport took to reach the first facility from the point of incident? (in minutes/ hours)</h3>

                <InputField onChange={handleChange(setFormB19)} h3="Hour" placeholder="Type here" name="B23_1"  value={formB19.B23_1}/>

                <InputField onChange={handleChange(setFormB19)} h3="Minutes" placeholder="Type here" name="B23_2"  value={formB19.B23_2}/>







                <Radio onClick={handleChange(setFormB19)} h3="B.24  Which type of facility did you visit first? " CheckbobItems={["SC/HWC", "PHC","CHC","District Headquarter Hospital ","Medical College","Private hospital","Private clinic","ESI/railway/other Govt. Hospital","Others(Specify)"]} name="B24" otherArray={[0,0,0,0,0,0,0,0,1]} byDefault={formB19.B24}/>

                <InputField onChange={handleChange(setFormB19)} h3="B.25  What was the name of the facility?" placeholder="Type here" name="B25"  value={formB19.B25}/>

                <Checkbox
            h3="B.26  Who suggested you the above-mentioned facility for emergency care?"
            CheckbobItems={[
              "Self",
              "Family members",
              "Neighbour",
              "ASHA/AWW",
              "ANM",
              "CHO"
            ]}
            name="B26" setFunction={setFormB19} StateValue={formB19} array={formB19.B26} other={{}}
          />

<Radio onClick={handleChange(setFormB19)} h3="B.27  How long after reaching the first HCF (in emergency) was the patient attended? " CheckbobItems={["Immediately", "5-10 minutes","10-30 minutes",">30 minutes","Do not know"]} name="B27"  byDefault={formB19.B27}/>

<Radio onClick={handleChange(setFormB19)} h3="B.28  Who attended the patient at the first HCF? " CheckbobItems={["Health worker", "Nurse","Doctor","Do not know"]} name="B28" byDefault={formB19.B28}/>

<Radio onClick={handleChange(setFormB19)} h3="B.29  Was any treatment started at the HCF?" CheckbobItems={["Yes","No","Do not know"]} name="B29" byDefault={formB19.B29}/>

<Radio onClick={handleChange(setFormB19)} h3="B.30  Were any laboratory &/or radiology investigations done at the HCF? " CheckbobItems={["Yes","No","Do not know"]} name="B30" byDefault={formB19.B30}/>

<Radio onClick={handleChange(setFormB19)} h3="B.31  How much time was spent in investigations? " CheckbobItems={["Less than 30 minutes", "30 minutes to 1 hour","More than 1 hour","Do not Know"]} name="B31" byDefault={formB19.B31}/>

<Radio onClick={handleChange(setFormB19)} h3="B.32 Was the patient shifted to ICU/ CCU/ HDU at HCF? " CheckbobItems={["Yes","No"]} name="B32" byDefault={formB19.B32}/>

<Radio onClick={handleChange(setFormB19)} h3="B.33 What was the final outcome of visiting the first facility or home visit by Doctor? " CheckbobItems={["Referred to higher facility", "Went against medical advice to different facility","Partially recovered & discharged","Fully Recovered & discharged","Recovered with disability & discharged","Self-Discharged","Admitted in Hospital","Death"]} name="B33" byDefault={formB19.B33}/>
  
                    <Buttons prev="/initialhealthcareseekingpathway-2" next="" prevText="Previous" nextText="Save & Next"/>
                </div>
            </div>
        </section>
        </div>
    )
  }

export default FormB19
