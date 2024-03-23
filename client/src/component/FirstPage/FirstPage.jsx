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
                    <button><a href='#'>Sign In</a></button>
                </div>
            </div>
        </div>
    )
}