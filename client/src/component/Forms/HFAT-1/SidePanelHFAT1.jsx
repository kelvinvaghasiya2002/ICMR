import React, { useEffect } from 'react'
import "../Form.css"
import { Link } from 'react-router-dom';

function SidePanelHFAT1({id}) {
  // console.log(id);
  useEffect(()=>{
    const link = document.getElementById(id)
    if(link) link.style.color="#3177FF" 
    console.log(link);
  })
  return (
    <div className='sidePanel'>
      <div className='innerdiv'>

        <Link id='1' to='/healthfacilityinformation'><p>Health Facility Information</p></Link>
        <Link id='2' to='/infrastructure'><p>Infrastructure</p></Link>
        <Link id='3' to='/humanresources'><p>Human Resources</p></Link>
        <Link id='4' to='/logisticsdrugsconsumablesequipment'><p>Logistics (Drugs/ Consumables/ Equipment)</p></Link>


        <Link id='5' to='/emergencycareservices'><p>Emergency Care Services</p></Link>
        <Link id='6' to='/informationsystem'><p>Information System</p></Link>
        <Link id='7' to='/finance'><p>Finance</p></Link>
        <Link id='8' to='/leadershipandgovernance'><p>Leadership and Governance</p></Link>
        <Link id='9' to='/processpoliciessops'><p>Process/ Policies/SOPs</p></Link>
        <Link id='10' to='/referrallinkages'><p>Referral Linkages</p></Link>
      </div>
    </div>
  )
}

export default SidePanelHFAT1