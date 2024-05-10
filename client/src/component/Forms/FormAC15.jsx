import React from 'react'
import { turnOffbutton } from './helpers'
import DropDown from './child-comp/DropDown';
import Checkbox from './child-comp/Checkbox';
import SidePanel from './child-comp/SidePanel';
import { Link } from 'react-router-dom';

function FormAC15() {
    turnOffbutton();
    return (
        <section id='Verbal-Social-Autopsy-Questionnaire-2'>
            <SidePanel />
            <div className="siteInfo">
                <div>
                    <h2>A Socio-demographic Characteristics</h2>
                </div>

                <div>
                    <h3>
                        Verbal & Social Autopsy Questionnaire
                    </h3>
                </div>

                <div className='block'>
                    <h3 className='h3block'>Name of the deceased :</h3>
                    <input className='blockinput' placeholder='Type here' />
                </div>

                <div className='block'>
                    <h3 className='h3block'>Age (in Years) :</h3>
                    <input className='blockinput' placeholder='Type here' />
                </div>

                <div className='block'>
                    <h3 className='h3block'>Sex :</h3>
                    <Checkbox CheckbobItems={["Male", "Female", "Other"]} name={"ac-33-3-3"} />
                </div>

                <div className='block'>
                    <h3 className='h3block'>Relationship with Head of the Household :</h3>
                    <Checkbox CheckbobItems={["Head ", "Wife/Husband", "Son/Daughter", "Sister/Brother", "Sister-in Law/Brother in-law", "Niece/Nephew", "Other Relative", "Adopted/Foster/Stepchild", "Domestic servant", "Others not related", "Don’t know"]} name={"ac-33-3-4"} />
                </div>

                <div className='block'>
                    <h3 className='h3block'>Date of death :</h3>
                    <input type='date' className='blockinput' placeholder='Type here' />
                </div>

                <div className='block'>
                    <h3 className='h3block'>Place of death :</h3>
                    <Checkbox CheckbobItems={["Hospital", "Home", "Workplace","In transit to seek care"]} name={"ac-33-3-6"} />
                </div>

                <div className='block'>
                    <h3 className='h3block'>If death in hospital, Name & Address of the Hospital :</h3>
                    <input className='blockinput' placeholder='Type here' />
                </div>

                <div className='block'>
                    <h3 className='h3block'>Type of   Hospital :</h3>
                    <Checkbox CheckbobItems={["Public", "Private"]} name={"ac-33-3-8"} />
                </div>

                <div className='block'>
                    <h3 className='h3block'>What were the symptoms the deceased complained about? ( optional )</h3>
                    <Checkbox
                     CheckbobItems=
                     {["STEMI : Acute chest pain, heaviness or constriction, or radiation to left arms or necks or back or breathlessness, or upper abdominal pain, or palpitation, or giddiness, which might have been accompanied by profuse sweating, and easily reproduced with post-meal exertion.",
                      "Trauma & Burn : sudden injury in Road Traffic Accident/ severe fall/ drowning/ stabbing/ gunshot/ any other assault/ suicidal attempt/ burns/ domestic violence/ homicidal/ suicidal etc.",
                       "Stroke: sudden onset of weakness, especially one side of the body/ loss of consciousness/ altered sensorium/ Imbalance/ blurred vision/ facial deviation/ drooping of eyelid/ speech abnormality with numbness and tingling sensation, or difficulty in speaking or understanding speech (aphasia), or sudden severe headache with no known cause of one's life (haemorrhagic strokes).",
                       "Acute Respiratory Illness: sudden onset of fever, or cough with expectoration, or chest pain (pleuritic) , or fast breathing, or bluish colouration of tongue or lip (cyanosis), or speaks in short sentences, or altered mentation, chest tightness or pressure, indicating a lack of oxygen.", 
                       "Postpartum Haemorrhage & Pre-Eclampsia: excessive bleeding or suddenly increased blood pressure or deterioration of sensorium or generalized seizure or fits etc after delivery.",
                       "Neonatal Emergency: fever, or hypothermia, or convulsion, or any difficulty in feeding, or lethargy, or dusky colour, or cyanosis, or excessive diarrhoea, or jaundice, etc.",
                       "Snake bite",
                       "Poisoning: poisoning that leads to nausea, or vomiting, or diarrhoea, or drooling of saliva, or foaming at the mouth, or difficulty in breathing, or dilated or constricted pupils, or suddenly got faint, or seizure."]} 
                     name={"ac-33-3-9"} />
                </div>

                <button className='nextbtn'><Link style={{ color: "white" }} to="/formsac-verbal&socialautopsyquestionnaire">Next</Link></button>
            </div>
        </section>
    )
}

export default FormAC15