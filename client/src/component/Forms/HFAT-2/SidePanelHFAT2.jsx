import React, { useEffect } from 'react'
import "../Form.css"
import { Link } from 'react-router-dom';

function SidePanelHFAT2({id}) {
  // console.log(id);
  useEffect(()=>{
    const link = document.getElementById(id)
    if(link) link.style.color="#3177FF" 
    console.log(link);
  })
  return (
    <div className='sidePanel'>
      <div className='innerdiv'>
        <Link id='1' to='/facilityinformation-2'><p>2A. Health Facility Information</p></Link>
        <Link id='2' to='/infrastructure-2'><p>2B. Infrastructure</p></Link>
        <Link id='3' to='/humanresources-2'><p>2C. Human Resources</p></Link>
        <Link id='4' to='/logistics-2'><p>2D. Logistics (Drugs/ Consumables/ Equipment)</p></Link>
        <Link id='5' to='/emergencycareservices-2'><p>2E. Emergency Care Services</p></Link>
        <Link id='6' to='/informationsystem-2'><p>2F. Information System</p></Link>
        <Link id='7' to='/finance-2'><p>2G. Finance</p></Link>
        <Link id='8' to='/leadershipandgovernance-2'><p>2H. Leadership and Governance</p></Link>
        <Link id='9' to='/processpoliciessops-2'><p>2I. Process/ Policies/SOPs</p></Link>
        <Link id='10' to='/referrallinkages-2'><p>2J. Referral Linkages</p></Link>
      </div>
    </div>
  )
}

export default SidePanelHFAT2