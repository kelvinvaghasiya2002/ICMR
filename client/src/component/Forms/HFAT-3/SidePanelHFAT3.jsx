import React, { useEffect } from 'react'
import "../Form.css"
import { Link } from 'react-router-dom';

function SidePanelHFAT3({id}) {
  // console.log(id);
  useEffect(()=>{
    const link = document.getElementById(id)
    if(link) link.style.color="#3177FF" 
    // console.log(link);
  })
  return (
    <div className='sidePanel'>
      <div className='innerdiv'>
        <Link id='1' to='/facilityinformation-3'><p>Health Facility Information</p></Link>
        <Link id='2' to='/infrastructure-3'><p>Infrastructure</p></Link>
        <Link id='3' to='/humanresources-3'><p>Human Resources</p></Link>
        <Link id='4' to='/logistics-3'><p>Logistics (Drugs/ Consumables/ Equipment)</p></Link>
        <Link id='5' to='/emergencycareservices-3'><p>Emergency Care Services</p></Link>
        <Link id='6' to='/informationsystem-3'><p>Information System</p></Link>
        <Link id='7' to='/finance-3'><p>Finance</p></Link>
        <Link id='8' to='/leadershipandgovernance-3'><p>Leadership and Governance</p></Link>
        <Link id='9' to='/processpoliciessops-3'><p>Process/ Policies/SOPs</p></Link>
        <Link id='10' to='/referrallinkages-3'><p>Referral Linkages</p></Link>
      </div>
    </div>
  )
}

export default SidePanelHFAT3