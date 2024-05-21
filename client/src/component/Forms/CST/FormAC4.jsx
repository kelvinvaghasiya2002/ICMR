import React, { useState } from 'react'
import SidePanel from './SidePanel.jsx'
import Table from '../child-comp/Table.jsx'
import { turnOffbutton } from '../helpers.js'
import { Link } from 'react-router-dom'
import Buttons from '../child-comp/Buttons.jsx'

function FormAC4() {
    turnOffbutton();
    return (
        <section id='relationship-with-head'>
            <SidePanel id={"4"} />
            <div className='siteInfo'>
                <div className='formhdr'>
                    <div>
                        <h2>A Socio-demographic Characteristics</h2>
                    </div>

                    <div>
                        <h3>
                            Relationship with Head of the Household
                        </h3>
                    </div>
                </div>
                <div>
                    <Table />
                </div>

                <Buttons prev="/formsac-householdschedule" next="/formsac-trauma&burns" />
            </div>
        </section>
    )
}

export default FormAC4