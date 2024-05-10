import React from 'react'
import SidePanel from './child-comp/SidePanel';
import { Link } from 'react-router-dom';
import DropDown from './child-comp/DropDown';
import Checkbox from './child-comp/Checkbox';
import { turnOffbutton } from './helpers';
import Buttons from './child-comp/Buttons';

function FormAC7() {
    turnOffbutton();
    return (
        <section id='stroke'>
            <SidePanel id={"7"} />
            <div className='siteInfo'>
                <div>
                    <h2>A Socio-demographic Characteristics</h2>
                </div>

                <div>
                    <h3>
                        Stroke
                    </h3>
                </div>

                <div className='block'>
                    <h3 className='h3block'>In the past year, did you or any member of this household suffered with sudden onset of weakness, especially one side of the body/ loss of consciousness/ altered sensorium/ Imbalance/ blurred vision/ facial deviation/ drooping of eyelid/ speech abnormality with numbness and tingling sensation, or difficulty in speaking or understanding speech (aphasia), or sudden severe headache with no known cause of one's life (haemorrhagic strokes) that required immediate medical service?</h3>
                    <Checkbox CheckbobItems={["Yes", "No"]} name={"ac-26-1"} />
                </div>

                <div className='block'>
                    <h3 className='h3block'>could you please tell who all from your Household suffered with this condition?</h3>
                    <DropDown dropdownItems={["Kelvin", "Prince", "Jeel"]} name={"ac-26-2"} />
                </div>
                
                <Buttons prev="/formsac-stemi" next="/formsac-acuterespiratoryillness" />
            </div>
        </section>
    )
}

export default FormAC7