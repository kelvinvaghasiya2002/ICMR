import React, { useEffect } from 'react'
import "../Form.css"
import { Link } from 'react-router-dom';

function SidePanelCST({id}) {
  // console.log(id);
  useEffect(()=>{
    const link = document.getElementById(id);
    if(link) link.style.color="#3177FF"
  })
  return (
    <div className='sidePanel'>
      <p>A Socio-demographic Characteristics</p>
      <div className='innerdiv'>
        <Link id='1' to='/formsaa'><p>Site Information</p></Link>
        <Link id='2' to='/formsab'><p>Cluster Information</p></Link>
        <Link id='3' to='/formsac-householdschedule'><p>Household Schedule</p></Link>
        <Link id='4' to='/formsac-relationshipwithheadofhousehold'><p>Relationship with Head of the Household</p></Link>
        <Link ><p>Household Schedule 2 </p></Link>
        <Link id='5' to='/formsac-trauma&burns'><p style={{marginLeft : "2vw"}}>- Trauma & Burns</p></Link>
        <Link id='6' to='/formsac-stemi'><p style={{marginLeft : "2vw"}}>- STEMI</p></Link>
        <Link id='7' to='/formsac-stroke'><p style={{marginLeft : "2vw"}}>- Stroke</p></Link>
        <Link id='8' to='/formsac-acuterespiratoryillness'><p style={{marginLeft : "2vw"}}>- Acute Respiratory Illness</p></Link>
        <Link id='9' to='/formsac-postpartumhaemorrhage'><p style={{marginLeft : "2vw"}}>- Postpartum Haemorrhage </p></Link>
        <Link id='10' to='/formsac-neonatalemergencies'><p style={{marginLeft : "2vw"}}>- Neonatal Emergencies</p></Link>
        <Link id='11' to='/formsac-snakebite'><p style={{marginLeft : "2vw"}}>- Snakebite</p></Link>
        <Link id='12' to='/formsac-poisoning'><p style={{marginLeft : "2vw"}}>- Poisoning</p></Link>
        <Link id='13' to='/formsac-others'><p style={{marginLeft : "2vw"}}>- Others</p></Link>
        <Link id='14' to='/formsac-verbal&socialautopsyquestionnaire'><p>Verbal & Social Autopsy Questionnaire</p></Link>
        <Link id='15' to='/formsac-verbal&socialautopsyquestionnaire-2'><p>Verbal & Social Autopsy Questionnaire 2</p></Link>
        <Link id='16' to='/formsac-verbal&socialautopsyquestionnaire-3'><p>Verbal & Social Autopsy Questionnaire 3</p></Link>
        <Link id='17' to='/formsb-sociodemographicprofile'><p>Socio-demographic profile of the patient in the HH with Emergency Condition</p></Link>
        <Link id='18' to='/formsb-initialhealthcareseekingpathway1'><p style={{marginLeft : "2vw"}}>Initial Healthcare Seeking Pathway - 1</p></Link>
        <Link id='19' to='/formsb-initialhealthcareseekingpathway2'><p style={{marginLeft : "2vw"}}>Initial Healthcare Seeking Pathway - 2</p></Link>
        <Link id='20' to='/formsc-referralfacility'><p>Referral Facility</p></Link>
        <Link id='21' to='/formsd-barriersandfacilitatorsinseekingcare'><p>Barriers and facilitators in seeking care</p></Link>
        <Link id='22' to='/formse-costing'><p>Costing (Complete event of seeking care)</p></Link>
      </div>
    </div>
  )
}

export default SidePanelCST