import React, { useState } from 'react'
import Checkbox from '../child-comp/Checkbox';
import SidePanel from './SidePanelHFAT1';
import Buttons from '../child-comp/Buttons';
import Radio from '../child-comp/Radio';
import InputField from '../child-comp/InputField';

function FormI() {
  return (
    <section>
      <SidePanel id={"9"} />
      <div className="siteInfo">

        <div className="formhdr">
          <div>
            <h3>
              Process/ Policies/SOPs
            </h3>
          </div>
        </div>

        <div className="formcontent">

          <Checkbox h3="Indicate whether your hospital has the following documented protocols and systems (Select all that apply):" CheckbobItems={["Procedure for registration and admission of new emergency patients", "Procedure/Policy for receiving of referral patients", "Emergency Manual at the point of care", "Triage guidelines and protocol.", "Discharge summaries for all patients.", "Policy on handling cases of death (outside and inside hospital).", "Disaster management plan", "Triage policy/system at your emergency department.", "Alert system: Code Blue.", "Alert system: Trauma.", "Alert system: Chest Pain", "Alert system: Sepsis.", "Alert system: Stroke", "Alert system: Maternal Emergencies", "Alert system: Neonatal Emergencies", "Alert system: Acute Respiratory Emergencies", "Alert system: Snake bite and Poisoning"]} name="1I-1" />

          <div>

              <h3>Whether having Emergency condition specific SOP/STW for emergency care? </h3>

        


          <table>
            <tr>
              <th>Emergency Condition</th>
              <th>Have Specific SOP/STW</th>
              <th>Follows SOP</th>
            </tr>
            <tr>
            <td>Acute Respiratory Illness</td>
              <td>
               <label><input type="radio" name="1" value="3"></input>Yes</label>
               <label><input type="radio" name="1" value="3"></input>No</label>
               </td>
              <td><label><input type="radio" name="2" value="3"></input>Yes</label>
              <label><input type="radio" name="2" value="3"></input>No</label>
              </td>
            </tr>
            <tr>
            <td>MI</td>
              <td><label><input type="radio" name="3" value="3"></input>Yes</label>
              <label><input type="radio" name="3" value="3"></input>No</label>
               </td>
              <td><label><input type="radio" name="4" value="3"></input>Yes</label>
              <label> <input type="radio" name="4" value="3"></input>No</label>
              </td>
            </tr>
            <tr>
            <td>Stroke</td>
              <td><label><input type="radio" name="5" value="3"></input>Yes</label>
              <label><input type="radio" name="5" value="3"></input>No</label>
               </td>
              <td><label><input type="radio" name="6" value="3"></input>Yes</label>
              <label><input type="radio" name="6" value="3"></input>No</label>
              </td>
            </tr>
            <tr>
            <td>Trauma & Burns</td>
              <td><label><input type="radio" name="7" value="3"></input>Yes</label>
              <label> <input type="radio" name="7" value="3"></input>No</label>
               </td>
              <td><label><input type="radio" name="8" value="3"></input>Yes</label>
              <label><input type="radio" name="8" value="3"></input>No</label>
              </td>
            </tr>
            <tr>
            <td>Poisoning</td>
              <td><label><input type="radio" name="9" value="3"></input>Yes</label>
              <label><input type="radio" name="9" value="3"></input>No</label>
               </td>
              <td><label><input type="radio" name="10" value="3"></input>Yes</label>
              <label><input type="radio" name="10" value="3"></input>No</label>
              </td>
            </tr>
            <tr>
            <td>Snake Bite</td>
              <td><label><input type="radio" name="11" value="3"></input>Yes</label>
              <label><input type="radio" name="11" value="3"></input>No</label>
               </td>
              <td><label><input type="radio" name="12" value="3"></input>Yes</label>
              <label><input type="radio" name="12" value="3"></input>No</label>
              </td>
            </tr>
            <tr>
            <td>Maternal Emergencies-PPH</td>
              <td><label><input type="radio" name="13" value="3"></input>Yes</label>
              <label><input type="radio" name="13" value="3"></input>No</label>
               </td>
              <td><label><input type="radio" name="14" value="3"></input>Yes</label>
              <label><input type="radio" name="14" value="3"></input>No</label>
              </td>
            </tr>
            <tr>
            <td>Maternal Emergencies- Eclampsia</td>
              <td><label><input type="radio" name="15" value="3"></input>Yes</label>
              <label> <input type="radio" name="15" value="3"></input>No</label>
               </td>
              <td><label><input type="radio" name="16" value="3"></input>Yes</label>
              <label><input type="radio" name="16" value="3"></input>No</label>
              </td>
              </tr>
            <tr>
              <td>Acute Respiratory Illness</td>
              <td><label><input type="radio" name="17" value="3"></input>Yes</label>
              <label><input type="radio" name="17" value="3"></input>No</label>
               </td>
              <td><label><input type="radio" name="18" value="3"></input>Yes</label>
              <label><input type="radio" name="19" value="3"></input>No</label>
              </td>
            </tr>
          </table>

          </div>

          <Buttons prev="/leadershipandgovernance" next="/referrallinkages" />
        </div>
      </div>
    </section>
  )
}

export default FormI