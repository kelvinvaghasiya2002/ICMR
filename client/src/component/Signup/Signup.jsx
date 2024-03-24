import { useState } from 'react';
import './Signup.css';
// import GoogleImg from '../../assets/Google_Icon.png';
// import FaceBookImg from '../../assets/FaceBook_Icon.png';
// import AppleImg from '../../assets/Apple_Icon.png';
import SignUpImg from '../../assets/SignUp_Img.png';
import Google from './Google';
import Facebook from './Facebook';
import Apple from './Apple';






export default function SignUp() {

    let [SignupData, setSignupData] = useState({
        Name:"",
        Username: "",
        Password: "",
    })

    let handleSignup = ((Event) => {
        console.log(SignupData);
        setSignupData((crrdata) => {
            return { ...crrdata, [Event.target.name]: Event.target.value }
        })

    })

    let SubmitsignupData = ((Event) => {
        console.log("Submited");
        console.log(SignupData)
        Event.preventDefault();
        setSignupData({
            Name:"",
            Username: "",
            Password: "",
        })
    })

    return (
        <div className='signup_main'>
            <div className='signup_con'>
                <div className='signup_content'>
                    <div className='signuptitle'>
                        <h4>Sign Up</h4>
                    </div>
                    <div className='webimgsignup_con'>
                        <Google />
                        <Facebook />
                        <Apple />
                    </div>
                    <div>
                        <hr />
                    </div>
                    <div className='signup_form_con'>
                        <form>
                            <div className='signup_D'>
                                <div className='singup_label'>
                                    <label htmlFor='name'>Name</label>
                                </div>
                                <div>
                                    <input
                                        className='singup_input'
                                        type='text'
                                        id='name'
                                        name='Name'
                                        value={SignupData.Name}
                                        onChange={handleSignup}
                                        spellCheck={false}
                                    />
                                </div>
                            </div>
                            <div className='signup_D'>
                                <div className='singup_label'>
                                    <label htmlFor='username'>UserName</label>
                                </div>
                                <div>
                                    <input
                                        className='singup_input'
                                        placeholder='hello@paruluniversity.ac.in'
                                        type='email'
                                        id='username'
                                        name='Username'
                                        value={SignupData.Username}
                                        onChange={handleSignup}
                                        spellCheck={false}
                                    />
                                </div>
                            </div>
                            <div className='signup_D'>
                                <div className='singup_label'>
                                    <label htmlFor='password'>Password</label>
                                </div>
                                <div>
                                    <input
                                        className='singup_input'
                                        type='password'
                                        id='password'
                                        name='Password'
                                        value={SignupData.Password}
                                        onChange={handleSignup}
                                    />
                                </div>
                            </div>
                        </form>
                    </div>
                    <div>
                        <hr />
                        {/* <span> OR </span> */}
                    </div>
                    <div className='condition_con'>
                        <div>
                            <input
                                type='checkbox'
                            />
                        </div>
                        <div>
                            <p> I agree with <a href='#'>Terms</a> and <a href='#'>Privacy</a> </p>
                        </div>
                    </div>
                    <div className='signup_button' onClick={SubmitsignupData}>
                        <button>Sign Up</button>
                    </div>
                    <div>
                        <hr />
                    </div>
                    <div className='signup_footer'>
                        <p>Already have an account?</p>
                        <p><a href='#'>Log in</a></p>
                    </div>

                </div>
            </div>
            <div className='signup_img'>
                <div>
                    <img src={SignUpImg} alt="SignUp" />
                </div>
            </div>
        </div>
    )
}