import './Navbar.css'
import ICMRLogo from "../../assets/ICMR_Logo.png";
import PUIcon from "../../assets/PU_Icon.png";
import secondLogo from "../../assets/secondLogo.png"
import thirdLogo from "../../assets/thirdLogo.png"
import fourthLogo from "../../assets/fourthLogo.png"
import fifthLogo from "../../assets/fifthLogo.png"
import { useUserInfo } from '../../contexts/User';
import { Link, NavLink } from 'react-router-dom';
const VITE_SERVER = import.meta.env.VITE_SERVER;
import axios from "axios"
import { useRef, useState } from 'react';
import FillFormMenu from './FillFormMenu';
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'

export default function Navbar() {

    const [menuState, setMenuState] = useState(false);

    const handleClick = () => {
        setMenuState(!menuState)
    }

    const { user, loggedIn } = useUserInfo();

    const handleLogOut = async () => {
        localStorage.setItem("token", null);
        try {
            const response = await axios.get(`${VITE_SERVER}/logout`)
            console.log(response);
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(()=> {
        AOS.init({duration: 2000});
    },[]);
    return (
        <>
            <div id='navigation' style={!loggedIn ? { boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px" } : { boxShadow: 'none' }} className='navbar'>

                <div className='ICMRLogo  nav-img'>
                    <Link to="/"><img src={ICMRLogo}></img></Link>
                </div>

                <div className='secondLogo nav-img'>
                    <img src={secondLogo}></img>
                </div>

                <div className='secondLogo nav-img'>
                    <img src={thirdLogo}></img>
                </div>

                <div className='secondLogo nav-img'>
                    <img src={fourthLogo}></img>
                </div>

                <div className='secondLogo nav-img'>
                    <img src={fifthLogo}></img>
                </div>

                <div className={'PUIcon nav-img'}>
                    <img src={PUIcon} className='ICMRIcon'></img>
                </div>

            </div>
            {loggedIn && <>  <div id='nav-buttons' className='buttons-grid'>
                <button id='but'><p>AIM</p></button>
                <button><p>Objective</p></button>
                <button><p>Outcome</p></button>
                <button><p>Methodology</p></button>
                <button><p>Facilities</p></button>
                <button><p>Workflow</p></button>
                <button onClick={handleClick}><p>Data Collection</p></button>
                </div>
                <div>
                <button className='logout'><p>Logout</p></button>
                </div>
            </div>


                <FillFormMenu menuState={menuState} setMenuState={setMenuState} />

            </>

            }
            {/* <button onClick={handleLogOut}>logout</button> */}
        </>
    )
}
