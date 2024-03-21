import './Navbar.css'
import ICMRIcon from "../../assets/ICMR_Icon.png"
import ICMRLogo from "../../assets/ICMR_Logo.png";
import PUIcon from "../../assets/PU_Icon.png";

export default function Navbar() {
    return (
        <div className='navbar'>
            <div className='ICMRIcon'>
                <img src={ICMRIcon}></img>
            </div>
            <div className='ICMRLogo'>
                <img src={ICMRLogo} className=''></img>
            </div>
            <div className='PUIcon'>
                <img src={PUIcon} className='ICMRIcon'></img>
            </div>
        </div>
    )
}