import React from 'react'
import SidePanel from './child-comp/SidePanel'
import Table from './child-comp/Table.jsx'
import { turnOffbutton } from './helpers.js'
import { Link } from 'react-router-dom'
import Buttons from './child-comp/Buttons.jsx'

function FormAC4() {
    turnOffbutton();
    return (
        <section id='relationship-with-head'>
            <SidePanel id={"4"} />
            <div className='siteInfo'>
            <div>
                <Table />
            </div>
            
            <Buttons prev="/formsac-householdschedule" next="/formsac-trauma&burns" />
            </div>
        </section>
    )
}

export default FormAC4