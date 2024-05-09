import './Navbar.css'
import ICMRIcon from "../../assets/ICMR_Icon.png"
import ICMRLogo from "../../assets/ICMR_Logo.png";
import PUIcon from "../../assets/PU_Icon.png";
import { useUserInfo } from '../../contexts/User';
import { Link } from 'react-router-dom';

export default function Navbar() {
    const { user, setUser, loggedIn, setloggedIn } = useUserInfo();

    return (
        <>
            <div id='navigation' style={!loggedIn ? { boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px" } : { boxShadow: 'none' }} className='navbar'>
                <div className='ICMRIcon  nav-img'>
                    <Link to="/"><img src={ICMRIcon}></img></Link>
                </div>
                <div className='ICMRLogo nav-img'>
                    <img src={ICMRLogo} className=''></img>
                </div>
                <div className={loggedIn ? 'PUIcon nav-img nav-flex' : 'PUIcon nav-img'}>
                    {loggedIn ?
                        <>
                            <div><img src={PUIcon} className='ICMRIcon'></img></div>
                            <div>
                                <p>Welcome <span style={{ color: "#3177FF" }}>{user.name}</span></p>
                                <p>SITE : <span style={{ fontWeight: "400" }}>{user.sitename}</span></p>
                            </div>
                        </> :
                        <img src={PUIcon} className='ICMRIcon'></img>
                    }
                </div>
            </div>
            {loggedIn && <div id='nav-buttons' className='buttons-grid'>
                <button id='but'><p>AIM</p></button>
                <button><p>Objective</p></button>
                <button><p>Outcome</p></button>
                <button><p>Methodology</p></button>
                <button><p>Workflow</p></button>
                <button><p>Goals</p></button>
                <button><p>Facilities</p></button>
                <button><p>Research Team</p></button>
                <button><p>What's New?</p></button>
                <button><Link to="/forms"><p>Fill Form</p></Link></button>
            </div>}
        </>
    )
}