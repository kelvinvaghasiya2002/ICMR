import { useState } from 'react'
import './Signin.css'
import SignIn_Img from '../../assets/SignIn_Img.png'
import { Link, Navigate } from 'react-router-dom'
import GoogleSI from './GoogleSI'
import AppleSI from "./AppleSI"
import FacebookSI from './FacebookSI'
import { useUserInfo } from '../../contexts/User'
import axios from 'axios'
import Navbar from '../Navbar/Navbar'
const url = "http://localhost:3000"

export default function SignIn() {
    const { user, setUser, loggedIn, setloggedIn } = useUserInfo();
    const [signIn, setsignIn] = useState(false);
    let [SigninData, setSigninData] = useState({
        Email: "",
        Password: "",
    })

    let handleSignin = ((Event) => {
        // console.log(SigninData);
        setSigninData((crrdata) => {
            return { ...crrdata, [Event.target.name]: Event.target.value }
        })

    })

    let SubmitData = (async (Event) => {
        Event.preventDefault();

        function ValidateEmail(input) {
            var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
            if (input.match(validRegex)) {
                return true;
            } else {
                return false;
            }
        }

        var ValidateEmail = ValidateEmail(SigninData.Email);


        if (ValidateEmail) {
            try {
                const { data } = await axios.get(`${url}/signin`, {
                    headers: {
                        username: SigninData.Email,
                        password: SigninData.Password
                    }
                })
                console.log(data);
                setUser(data.user);
                setloggedIn(true);
                setsignIn(true);
                localStorage.setItem("token", data.token);

                setSigninData({
                    Email: "",
                    Password: "",
                })
            } catch (error) {
                alert(error.response.data.error);
            }
        } else if (!ValidateEmail) {
            alert("Invalid Email!")
        }
    })
    document.title="Sign In ICMR"
    return (
        
        // <div className='sigin_main'>
        //     <div className='sigin_con'>
        //         <div className='sigin_content'>
        //             <div className='signintitle'>
        //                 <h4>WELCOME BACK!</h4>
        //             </div>
        //             <div className='singup_way'>
        //                 <p>Don't have a account, <Link to="/sign-up">Sign Up</Link></p>
        //             </div>

        //             <div className='email'>

        //                 <div className='email_label'>
        //                     <label htmlFor='username'>Email</label>
        //                 </div>

        //                 <div>
        //                     <input
        //                         className='email_input'
        //                         // placeholder='hello@paruluniversity.ac.in'
        //                         type='text'
        //                         id='username'
        //                         name='Email'
        //                         value={SigninData.Email}
        //                         onChange={handleSignin}
        //                         spellCheck={false}
        //                     />
        //                 </div>
        //             </div>
        //             <div>
        //                 <div className='password_label'>
        //                     <label htmlFor='password'>Password</label>
        //                 </div>
        //                 <div>
        //                     <input
        //                         className='password_input'
        //                         type='password'
        //                         id='password'
        //                         name='Password'
        //                         value={SigninData.Password}
        //                         onChange={handleSignin}
        //                     />
        //                 </div>
        //             </div>

        //             <div className='forgetpass_con'>
        //                 <div className='radio'>
        //                     <input
        //                         type="radio"
        //                     />
        //                     <label>Remember me</label>
        //                 </div>
        //                 <div className='forgetpass'>
        //                     <p><a href='#'>forget password?</a></p>
        //                 </div>
        //             </div>

        //             <div className='signin_button'>
        //                 <button onClick={SubmitData}>Sign In</button>
        //             </div>

        //             <div className='footer_con'>
        //                 <span>or continue with</span>
        //             </div>
        //             <div className='webimg_con'>
        //                 <GoogleSI />
        //                 <FacebookSI />
        //                 <AppleSI />

        //             </div>
        //         </div>
        //     </div>
        //     <div className='signin_img'>
        //         <div>
        //             <img src={SignIn_Img} alt="SignInImg" />
        //         </div>
        //     </div>
        //     {
        //         signIn && <Navigate to="/" replace={true} />
        //     }
        // </div>
        <>
            {/* <Navbar /> */}
            <div className='main-signin-div'>
                <section id='signin-form'>
                    <form>
                        <div className='welcome-back'>
                            <h2>WELCOME BACK!</h2>
                            <p>Don’t have an account, <Link to="/sign-up">Sign up</Link></p>
                        </div>


                        <div className='parent-username-field form-signin-inputs'>
                            <div>
                                <label htmlFor='username'>Username</label>
                            </div>
                            <div>
                                <input
                                    type='email'
                                    id='username'
                                    name='Email'
                                    value={SigninData.Email}
                                    onChange={handleSignin}
                                    spellCheck={false}
                                />
                            </div>
                        </div>


                        <div className='parent-password-field form-signin-inputs'>
                            <div>
                                <label htmlFor='password'>Password</label>
                            </div>
                            <div>
                                <input
                                    type='password'
                                    id='password'
                                    name='Password'
                                    value={SigninData.Password}
                                    onChange={handleSignin}
                                />
                            </div>
                        </div>


                        <div className='remember-me'>
                            <div className='radio-btn'>
                                <input type='radio'></input>
                                <p>Remember me</p>
                            </div>
                            <div>
                                <p><Link to="#">Forget password?</Link></p>
                            </div>
                        </div>


                        <div className='signin-button'>
                            <button onClick={SubmitData}>Sign In</button>
                        </div>


                        {/* <div className='continue-with'>
                        <hr />
                        <p>or continue with</p>
                        <hr />
                    </div> */}

                        <div className='continue-with'>
                            <div class="separator">
                                <p> or continue with </p>
                            </div>
                        </div>

                        <div className='parent-o-auth'>
                            <div className='o-auth-icons'>
                                <GoogleSI />
                                <FacebookSI />
                                <AppleSI />
                            </div>
                        </div>
                    </form>
                </section>
                <section id="signin-rightside-img">
                    <div>
                        <img src={SignIn_Img} alt="SignUp" />
                    </div>
                </section>
                {
                    signIn && <Navigate to="/" replace={true} />
                }
            </div>
        </>
    )
}