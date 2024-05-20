import React, { useState } from 'react'
import Checkbox from '../child-comp/Checkbox';
import SidePanel from '../child-comp/SidePanel';
import Buttons from '../child-comp/Buttons';

export default function FormB17() {
    return (
        <section>
            <SidePanel id={"17"}/>
           <div className='siteInfo'>
           <div className="formhdr">
               <div>
                    <h2>Socio-demographic profile of the patient in the HH with Emergency Condition</h2>
                </div>
            </div> 
            <div className="formcontent">
                
                    <Checkbox h3="Marital Status:" CheckbobItems={["Never married ", "Currently Married", "Separated  ", "Divorced  ", "Widow", "Cohabitating", "Prefer not to disclose/ Refuse"]} name={"B-1"} />
                

                
                    <Checkbox h3="Level of education:" CheckbobItems={["Illiterate", "Primary School ","Middle School","High School","Intermediate/ Diploma","Graduate","Professional Degree","Prefer not to disclose/ Refuse"]} name={"B-2"} />
               

                
                    <Checkbox h3="Occupation:" CheckbobItems={["Unemployed", "Unskilled Worker", "Semi-Skilled Worker", "Skilled Worker", "Clerical/ Shop/ Farm", "Semi Profession", "Professional", "Prefer not to disclose/ Refuse"]} name={"B-3"} />
                
            
                    <Checkbox h3="Which of the following Insurance coverage you or the person with emergency condition or the deceased had?" CheckbobItems={["Private cashless", "Private reimbursement","Central Health Insurance Scheme (Ayushman Bharat/ CGHS / etc.)","State Health Insurance Scheme","Community Health Insurance Programme","None","Prefer not to disclose/ Refuse","Don’t Know"]} name={"B-4"} />
                
                <Buttons prev="/formsac-verbal&socialautopsyquestionnaire-3" next="/formsb-initialhealthcareseekingpathway1" />
            </div>
            
           </div>

        </section>

        
    )
    
}