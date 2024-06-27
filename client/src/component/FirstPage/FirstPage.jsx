import { Link } from 'react-router-dom'
import heroImg from "../../assets/cuate.png";
import './FirstPage.css'

export default function FirstPage() {

    return (
        <div className='fpage_main'>

            <div className='fpage_navbar'>

                <div className='morepage'>
                <Link to='/'><button className='morepage-buttons'>Home</button></Link>
                <Link to='/aboutus'><button className='morepage-buttons'>About Project</button></Link>
                <Link to="/project-sites"><button className='morepage-buttons'>Project Sites</button></Link>
                <Link to=""><button className='morepage-buttons'>Research Team</button></Link>
                <Link to=""><button className='morepage-buttons'>What's New ?</button></Link>
                </div>

                <div className='signin-up'>
                    <Link to="/sign-in"><button className='signin-up-buttons'>Sign In</button></Link>
                    <Link to="/sign-up"><button className='signin-up-buttons xyz'>Sign Up</button></Link>
                </div>
            </div>


            <div className='main_section'>
                <div className='fpage_content'>
                    <h2>
                        An implementation research study
                    </h2>
                    <p>A High-quality patient centric integrated model for<br />emergency care systems in selected districts of India</p>
                    <div className='fpage_study'>
                        <h3>AN ICMR TASK FORCE STUDY</h3>
                    </div>
                </div>

                <div className='hero'>
                    <img src={heroImg} alt="hero_image" />
                </div>
            </div>
           
            <div className='fpage_footer'>
                <p>Content Managed By <span>ICMR-New Delhi</span></p>
                <p style={{marginTop : "0px"}}>Design & Developed By <span>Parul <span style={{color : "red"}}>University</span></span></p>
            </div>
        </div>
    )
}