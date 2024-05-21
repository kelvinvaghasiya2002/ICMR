import React, { useState } from 'react'
import Radio from '../child-comp/Radio.jsx';
import SidePanel from './SidePanelCST.jsx';
import Buttons from '../child-comp/Buttons';
import InputField from '../child-comp/InputField';
import setLocalStorage from '../setLocalStorage';
import { handleChange } from '../helpers.js';

function FormB19() {
    var formb19 = setLocalStorage("formb19", { B14: "", B15: "", B16: "", B17: "", B18: "", B19: "", B20: "", B21: "", B22: "", B23: "", B24: "", B25: "", B26: "", B27: "", B28: "", B29: "", B30: "" })
    const [formB19, setFormB19] = useState(JSON.parse(formb19));
    return (
        <section>
            <SidePanel id={"19"} />
            <div className='siteInfo'>
                <div className="formhdr">
                    <div>
                        <h2>Socio-demographic profile of the patient in the HH with Emergency Condition</h2>
                    </div>
                    <div>
                        <h3>
                            Initial Healthcare Seeking Pathway
                        </h3>
                    </div>
                </div>
                <div className="formcontent">
                    <InputField h3="How much time did it take to decide to seek care or call an ambulance or any transport after recognizing the symptom? (In Min/Hour)" placeholder="Type here" value={formB19.B14} name={"B14"} onChange={handleChange(setFormB19)} />

                    <Radio h3="What transport was used to reach the first health care facility?" CheckbobItems={["Own vehicle", "Two-Wheeler (Bicycle)", "Two-Wheeler (Motorcycle)", "Three-Wheeler (Manual Rickshaw, etc.)", "Three-Wheeler (Auto Rickshaw/ E-rickshaw, etc.)", "Four-Wheeler (Car/Jeep/ etc.)", "Agricultural Vehicle (Tractor)", "Government ambulance", "Private ambulance", "Others (Specify)"]} name={"B15"} onClick={handleChange(setFormB19)} byDefault={formB19.B15} />


                    <Radio h3="Were there any problems in arranging for transport of the patient?  (Describe)" CheckbobItems={["Yes (Specify):", "No"]} name={"B16"} onClick={handleChange(setFormB19)} byDefault={formB19.B16} />


                    <Radio h3="If Govt. Ambulance, Which ambulance service you opted for?" CheckbobItems={["102", "108", "Others: (Specify)", "Don’t know"]} name={"B17"} onClick={handleChange(setFormB19)} byDefault={formB19.B17} />


                    <InputField value={formB19.B18} name={"B18"} onChange={handleChange(setFormB19)} h3="How much time the ambulance/ any transport took to reach the point of incident? (In Min/Hour)" placeholder="Type here" />

                    <InputField value={formB19.B19} name={"B19"} onChange={handleChange(setFormB19)} h3="How much time the ambulance/ any transport took to reach the first facility from the point of incident? (in minutes/ hours)" placeholder="Type here" />


                    <Radio h3="Which type of facility did you visit first?" CheckbobItems={["SC/HWC", " PHC", "CHC", "District Headquarter Hospital", "Medical College", "Private hospital", "Private clinic", "ESI/railway/other Govt. Hospital", "Others: (Specify)"]} name={"B20"} onClick={handleChange(setFormB19)} byDefault={formB19.B20} />


                    <InputField value={formB19.B21} name={"B21"} onChange={handleChange(setFormB19)} h3="What was the name of the facility?" placeholder="Type here" />


                    <Radio onClick={handleChange(setFormB19)} byDefault={formB19.B22} h3="Who suggested you the above-mentioned facility for emergency care?" CheckbobItems={["Self", "Family members", "Neighbour", "ASHA/AWW", "ANM", "CHO", "Others"]} name={"B22"} />


                    <Radio onClick={handleChange(setFormB19)} byDefault={formB19.B23} h3="How long after reaching the first HCF (in emergency) was the patient attended?" CheckbobItems={[" Immediately", "5-10 minutes", "10-30 minutes", ">30 minutes", "Do not know"]} name={"B23"} />

                    <Radio onClick={handleChange(setFormB19)} byDefault={formB19.B24} h3="Who attended the patient at the first HCF? " CheckbobItems={["Health worker", "Nurse", "Doctor", "Do not know"]} name={"B24"} />

                    <Radio onClick={handleChange(setFormB19)} byDefault={formB19.B25} h3="Was any treatment started at the HCF?" CheckbobItems={["Yes", "No", "Do not know"]} name={"B25"} />


                    <Radio onClick={handleChange(setFormB19)} byDefault={formB19.B26} h3="Were any laboratory &/or radiology investigations done at the HCF?" CheckbobItems={["Yes", "No", "Do not know"]} name={"B26"} />

                    <Radio onClick={handleChange(setFormB19)} byDefault={formB19.B27} h3="How much time was spent in investigations?" CheckbobItems={["Less than 30 minutes", "30 minutes to 1 hour", "More than 1 hour", "Do not know"]} name={"B27"} />

                    <Radio onClick={handleChange(setFormB19)} byDefault={formB19.B28} h3="Was the patient shifted to ICU/ CCU/ HDU at HCF?" CheckbobItems={["Yes", "No"]} name={"B28"} />

                    <Radio onClick={handleChange(setFormB19)} byDefault={formB19.B29} h3="What was the final outcome of visiting the first facility?" CheckbobItems={["Referred to higher facility", "Discharged to home", "Fully Recovered", "Recovered with disability", "Death"]} name={"B29"} />


                    <InputField value={formB19.B30} name={"B30"} onChange={handleChange(setFormB19)} h3="What was the final diagnosis on consultation with the doctor or mentioned in the final discharge summary?" placeholder="IMAGE" />

                    <Buttons formName={"formb19"} formData={formB19} prev="/formsb-initialhealthcareseekingpathway1" next="/formsc-referralfacility" />

                </div>

            </div>

        </section>
    )
}

export default FormB19