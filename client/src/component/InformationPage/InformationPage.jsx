import Navbar from '../Navbar/Navbar'
import firstImg from "../../assets/InfoPageImages/trauma&burns.png"
import secondImg from "../../assets/InfoPageImages/St-elevated.png"
import thirdImg from "../../assets/InfoPageImages/stroke.png"
import fifthImg from "../../assets/InfoPageImages/postpartum.png"
import sixthImg from "../../assets/InfoPageImages/sanke bites1.png"
import seventhImg from "../../assets/InfoPageImages/Poisnoning.png"

import './InformationPage.css'
import { useState } from 'react'
export default function InformationPage() {
    const [src, setSrc] = useState(firstImg)

    function handleClick(event) {
        // console.log(event.target.className);

        switch (event.target.className) {
            case '1':
                setSrc(firstImg)
                break;

            case '2':
                setSrc(secondImg)
                break;

            case '3':
                setSrc(thirdImg)
                break;

            case '4':
                setSrc(firstImg)
                break;

            case '5':
                setSrc(fifthImg)
                break;

            case '6':
                setSrc(sixthImg)
                break;

            default:
                setSrc(seventhImg)
        }
    }


    return (
        <>
            <Navbar />
            <section id="InfoPage" className='main_info'>
                <div className='firstParagraph'>
                    <p>
                        This will be a muti-district implementation research conducted along with the State health department with a concurrent mixed methods design. The study will be conducted to develop and implement a high-quality emergency care system with a focus on following time-sensitive emergencies:
                    </p>
                </div>
                <div className='second-section'>
                    <div className='info-h3'>
                        <h3 className='1' onClick={handleClick}>Trauma and Burns</h3>
                        <h3 className='2' onClick={handleClick}>ST-Elevated Myocardial Infarction (STEMI)</h3>
                        <h3 className='3' onClick={handleClick}>Stroke</h3>
                        <h3 className='4' onClick={handleClick}>Acute Respiratory Illness</h3>
                        <h3 className='5' onClick={handleClick}>Postpartum Hemorrhage and Preeclampsia</h3>
                        <h3 className='6' onClick={handleClick}>Neonatal Emergencies</h3>
                        <h3 className='7' onClick={handleClick}>Snake Bite and Poisoning.</h3>
                    </div>
                </div>
                <div className='img-section'>
                    <img src={src} />
                </div>
            </section>
        </>
    )
}