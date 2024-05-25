import React, { useEffect } from 'react'
import "../Form.css"
import { Link } from 'react-router-dom';

function SidePanelAmbulance({id}) {
  // console.log(id);
  useEffect(()=>{
    const link = document.getElementById(id)
    if(link) link.style.color="#3177FF" 
    console.log(link);
  })
  return (
    <div className='sidePanel'>
      <div className='innerdiv'>
        <Link id='1' to='/facilityinformation'><p>Facility Information</p></Link>
      </div>
    </div>
  )
}

export default SidePanelAmbulance