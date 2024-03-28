import { Link } from 'react-router-dom'
import './FirstPage.css'

export default function FirstPage() {

    return (
        <div className='fpage_main'>
            <div className='fpage_navbar'>
                <div>
                    <h1>Welcome</h1>
                </div>
                <div className='in_Up'>
                    <button><Link to="/sign-up">Sign Up</Link></button>
                    <button><Link to="/sign-in">Sign In</Link></button>
                </div>
            </div>
            <div className='morepage'>
                <div>
                    <a href='#'><button>Home</button></a>
                </div>
                <Link to='/aboutus'><button>About Project</button></Link>
                <Link href='#'><button>Project Sites</button></Link>
                <Link href='#'><button>Research Team</button></Link>
                <Link href='#'><button>What's New ?</button></Link>
            </div>
            <div className='fpage_content'>
                <h3>
                    An implementation research study<br /> on developing a High-quality patient centric integrated model <br />for emergency care systems in selected districts of India
                </h3>
            </div>
            <div className='fpage_study'>
                <h4>AN ICMR TASK FORCE STUDY</h4    >
            </div>
            <div className='fpage_footer'>
                <h5>Content Managed By ICMR-New Delhi</h5>
                <h5>Design & Developed By Parul University</h5>
            </div>
        </div>
    )
}