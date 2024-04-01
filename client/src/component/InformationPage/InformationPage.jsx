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
    document.title = "About Project"
    const [src, setSrc] = useState(firstImg)
    function handleClick(event) {
        console.log(event.target.classList[0]);
        document.querySelector(`.${event.target.classList[0]}`).classList.add("active")

        const arr = document.querySelectorAll(`h3`);

        for(let i=0 ; i<7 ; i++){
            if(arr[i].classList[0]!=event.target.classList[0] && arr[i].classList.length==2){
                arr[i].classList.remove("active")
            }
        }

        switch (event.target.classList[0]) {
            case 'first':
                setSrc(firstImg)
                break;

            case 'second':
                setSrc(secondImg)
                break;

            case 'third':
                setSrc(thirdImg)
                break;

            case 'forth':
                setSrc(firstImg)
                break;

            case 'fifth':
                setSrc(fifthImg)
                break;

            case 'sixth':
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
                        <h3 className="first active"  onClick={handleClick} >Trauma and Burns</h3>
                        <h3 className="second"  onClick={handleClick} >ST-Elevated Myocardial Infarction (STEMI)</h3>
                        <h3 className="third"  onClick={handleClick} >Stroke</h3>
                        <h3 className="forth"  onClick={handleClick} >Acute Respiratory Illness</h3>
                        <h3 className="fifth"  onClick={handleClick} >Postpartum Hemorrhage and Preeclampsia</h3>
                        <h3 className="sixth"  onClick={handleClick} >Neonatal Emergencies</h3>
                        <h3 className="seventh"  onClick={handleClick} >Snake Bite and Poisoning.</h3>
                    </div>
                </div>
                <div className='img-section'>
                    <img src={src} />
                </div>
            </section>
        </>
    )
}