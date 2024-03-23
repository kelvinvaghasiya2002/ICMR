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
<<<<<<< HEAD
                    <button><Link to="/sign-up">Sign Up</Link></button>
                    <button><a href='#'>Sign In</a></button>
=======
                    <a href='#'><button>Sign Up</button></a>
                    <a href='#'><button>Sign In</button></a>
>>>>>>> 8a92eff0800f8f12d62a5252dc996a0609b68912
                </div>
            </div>
            <div className='morepage'>
                <div>
                    <a href='#'><button>Home</button></a>
                </div>
                <a href='#'><button>About Project</button></a>
                <a href='#'><button>Project Sites</button></a>
                <a href='#'><button>Research Team</button></a>
                <a href='#'><button>What's New ?</button></a>
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