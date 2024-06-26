import { Link } from 'react-router-dom'
import './FirstPage.css'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'

export default function FirstPage() {
    useEffect(()=> {
        AOS.init({duration: 2000});
    },[]);
    return (
        <div className='fpage_main'>

            <div className='fpage_navbar'>
                <div>
                    <h1>Welcome</h1>
                </div>
                <div className='signin-up'>
                    <Link to="/sign-up"><button className='signin-up-buttons xyz'>Sign Up</button></Link>
                    <Link to="/sign-in"><button className='signin-up-buttons'>Sign In</button></Link>
                </div>
            </div>

            <div className='morepage'>

                <Link to='/'><button className='morepage-buttons'>Home</button></Link>
                <Link to='/aboutus'><button className='morepage-buttons'>About Project</button></Link>
                <Link to="/project-sites"><button className='morepage-buttons'>Project Sites</button></Link>
                <Link to=""><button className='morepage-buttons'>Research Team</button></Link>
                <Link to=""><button className='morepage-buttons'>What's New ?</button></Link>
            </div>

            <div className='fpage_content' data-aos="fade-right">
                <h3>
                    An implementation research study<br /> on developing a High-quality patient centric integrated model <br />for emergency care systems in selected districts of India
                </h3>
            </div>
            <div className='fpage_study'>
                <h3>AN ICMR TASK FORCE STUDY</h3>
            </div>
            <div className='fpage_footer'>
                <p>Content Managed By <span>ICMR-New Delhi</span></p>
                <p style={{marginTop : "0px"}}>Design & Developed By <span>Parul <span style={{color : "red"}}>University</span></span></p>
            </div>
        </div>
    )
}