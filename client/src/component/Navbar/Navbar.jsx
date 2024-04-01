import './Navbar.css'
import ICMRIcon from "../../assets/ICMR_Icon.png"
import ICMRLogo from "../../assets/ICMR_Logo.png";
import PUIcon from "../../assets/PU_Icon.png";
import { useUserInfo } from '../../contexts/User';
import { Link } from 'react-router-dom';

export default function Navbar() {
    const { user, setUser, loggedIn, setloggedIn } = useUserInfo();
    var targetElm = document.querySelector('#aim-section'),  // reference to scroll target
    button = document.getElementById('but');        // button that triggers the scroll
    console.log(button);
    button?.addEventListener('click', function () {
        targetElm.scrollIntoView()
    })

    return (
        <>
            <div style={!loggedIn ? { boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px" } : { boxShadow: 'none' }} className='navbar'>
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
                                <p>SITE : <span style={{ fontWeight: "400" }}>Vadodara,gujarat</span></p>
                            </div>
                        </> :
                        <img src={PUIcon} className='ICMRIcon'></img>
                    }
                </div>
            </div>
            {loggedIn && <div className='buttons-grid'>
                <button id='but'><p style={{ margin: "0px", padding: "0px" }}>AIM</p></button>
                <button><p style={{ margin: "0px", padding: "0px" }}>Objective</p></button>
                <button><p style={{ margin: "0px", padding: "0px" }}>Outcome</p></button>
                <button><p style={{ margin: "0px", padding: "0px" }}>Methodology</p></button>
                <button><p style={{ margin: "0px", padding: "0px" }}>Workflow</p></button>
                <button><p style={{ margin: "0px", padding: "0px" }}>Goals</p></button>
                <button><p style={{ margin: "0px", padding: "0px" }}>Facilities</p></button>
                <button><p style={{ margin: "0px", padding: "0px" }}>Research Team</p></button>
                <button><p style={{ margin: "0px", padding: "0px" }}>What's New?</p></button>
            </div>}
        </>
    )
}