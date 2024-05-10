import React from 'react'
import "./Form.css"

function SidePanel() {
  return (
    <div className='sidePanel'>
      <p>A Socio-demographic Characteristics</p>
      <div className='innerdiv'>
        <p className='siteInfoText'>Site Information</p>
        <p>Cluster Information</p>
        <p>Household Schedule</p>
        <p>Relationship with Head of the Household</p>
        <p>Household Schedule 2 </p>
      </div>
    </div>
  )
}

export default SidePanel