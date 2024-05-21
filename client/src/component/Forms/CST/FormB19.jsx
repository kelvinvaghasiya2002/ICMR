import React, { useState } from 'react'
import Checkbox from '../child-comp/Checkbox';
import SidePanel from './SidePanel';
import Buttons from '../child-comp/Buttons';
import InputField from '../child-comp/InputField';

function FormB19() {
  return (
    <section>
            <SidePanel id={"19"}/>
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
            <InputField h3="How much time did it take to decide to seek care or call an ambulance or any transport after recognizing the symptom? (In Min/Hour)" placeholder="Type here" />
          
                    <Checkbox h3="What transport was used to reach the first health care facility?" CheckbobItems={["Own vehicle", "Two-Wheeler (Bicycle)","Two-Wheeler (Motorcycle)","Three-Wheeler (Manual Rickshaw, etc.)","Three-Wheeler (Auto Rickshaw/ E-rickshaw, etc.)","Four-Wheeler (Car/Jeep/ etc.)","Agricultural Vehicle (Tractor)","Government ambulance","Private ambulance","Others (Specify)"]} name={"B-15"} />
                
           
                    <Checkbox h3="Were there any problems in arranging for transport of the patient?  (Describe)" CheckbobItems={["Yes (Specify):","No"]} name={"B-16"} />
                
    
                    <Checkbox h3="If Govt. Ambulance, Which ambulance service you opted for?" CheckbobItems={["102","108","Others: (Specify)","Don’t know"]} name={"B-17"} />
               

                <InputField h3="How much time the ambulance/ any transport took to reach the point of incident? (In Min/Hour)" placeholder="Type here" />

                <InputField h3="How much time the ambulance/ any transport took to reach the first facility from the point of incident? (in minutes/ hours)" placeholder="Type here" />

               
                    <Checkbox h3="Which type of facility did you visit first?" CheckbobItems={["SC/HWC"," PHC","CHC","District Headquarter Hospital","Medical College","Private hospital","Private clinic","ESI/railway/other Govt. Hospital","Others: (Specify)"]} name={"B-20"} />
               

                <InputField h3="What was the name of the facility?" placeholder="Type here" />

               
                    <Checkbox h3="Who suggested you the above-mentioned facility for emergency care?" CheckbobItems={["Self","Family members","Neighbour","ASHA/AWW","ANM","CHO","Others"]} name={"B-22"} />
               

                    <Checkbox h3="How long after reaching the first HCF (in emergency) was the patient attended?" CheckbobItems={[" Immediately","5-10 minutes","10-30 minutes",">30 minutes","Do not know"]} name={"B-23"} />
                
                    <Checkbox h3="Who attended the patient at the first HCF? " CheckbobItems={["Health worker","Nurse","Doctor","Do not know"]} name={"B-24"} />
                
                    <Checkbox h3="Was any treatment started at the HCF?" CheckbobItems={["Yes","No","Do not know"]} name={"B-25"} />
              

                    <Checkbox h3="Were any laboratory &/or radiology investigations done at the HCF?" CheckbobItems={["Yes","No","Do not know"]} name={"B-26"} />
  
                    <Checkbox h3="How much time was spent in investigations?" CheckbobItems={["Less than 30 minutes","30 minutes to 1 hour","More than 1 hour","Do not know"]} name={"B-27"} />
   
                    <Checkbox h3="Was the patient shifted to ICU/ CCU/ HDU at HCF?" CheckbobItems={["Yes","No"]} name={"B-28"} />
              
                    <Checkbox h3="What was the final outcome of visiting the first facility?" CheckbobItems={["Referred to higher facility","Discharged to home","Fully Recovered","Recovered with disability","Death"]} name={"B-29"} />
                

                <InputField h3="What was the final diagnosis on consultation with the doctor or mentioned in the final discharge summary?" placeholder="IMAGE" />

                <Buttons prev="/formsb-initialhealthcareseekingpathway1" next="/formsc-referralfacility" />

            </div>
            
           </div>

        </section>
  )
}

export default FormB19