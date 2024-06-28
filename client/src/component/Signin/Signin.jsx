import { useState } from 'react'
import './Signin.css'
import SignIn_Img from '../../assets/SignIn_Img.png'
import { Link, Navigate } from 'react-router-dom'
import GoogleSI from './GoogleSI'
import AppleSI from "./AppleSI"
import FacebookSI from './FacebookSI'
import { useUserInfo } from '../../contexts/User'
import axios from 'axios'
import { Loader } from 'lucide-react'
import React, {useEffect} from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Navbar from '../Navbar/Navbar'
const url = import.meta.env.VITE_SERVER;

export default function SignIn() {
    useEffect(()=> {
        AOS.init({duration:2000})
    }, []);
    const { user, setUser, loggedIn, setloggedIn } = useUserInfo();
    const [signIn, setsignIn] = useState(false);
    const [loader, setLoader] = useState(false);
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
        setLoader(true)

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
            finally {
                setLoader(false);
            }
        } else if (!ValidateEmail) {
            alert("Invalid Email!")
            setLoader(false)
        }
    })
    document.title="Sign In ICMR"
    return (
        <>
            {/* <Navbar /> */}
            <div className='main-signin-div'>
                <section id='signin-form' data-aos="fade-right">
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

                    {/* {loader ? ( <Loa)} */}
                        <div className='signin-button'>
                        <button onClick={SubmitData} disabled={loader}>
                                {loader ? <Loader size={30} className="loader-icon" /> : 'Sign In'}
                            </button>
                        </div>


                        {/* <div className='continue-with'>
                        <hr />
                        <p>or continue with</p>
                        <hr />
                    </div> */}

                        <div className='continue-with'>
                            <div className="separator">
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
                <section id="signin-rightside-img" data-aos="fade-left">
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