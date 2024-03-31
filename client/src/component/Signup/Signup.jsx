import { useState } from 'react';
import './Signup.css';
import SignUpImg from '../../assets/SignUp_Img.png';
import Google from './Google';
import Facebook from './Facebook';
import Apple from './Apple';
import { useUserInfo } from '../../contexts/User.jsx';
import axios from 'axios';
import { Navigate, Link } from 'react-router-dom';
import Navbar from "../Navbar/Navbar.jsx"
const url = "http://localhost:3000"





export default function SignUp() {
    document.title = "Sign Up ICMR"
    const [getOTP, setgetOTP] = useState(false);
    const [verifyOTP, setverifyOTP] = useState(false);
    const [signUp, setsignUp] = useState(false)
    const { user, setUser, loggedIn, setloggedIn } = useUserInfo();
    let [SignupData, setSignupData] = useState({
        Name: "",
        Username: "",
        Password: "",
        confirmPassword: ""
    })
    const [otp, setotp] = useState("");

    let handleSignup = ((Event) => {
        setSignupData((crrdata) => {
            return { ...crrdata, [Event.target.name]: Event.target.value }
        })

    })

    let SubmitsignupData = (async (Event) => {
        Event.preventDefault();
        if (SignupData.Password !== SignupData.confirmPassword) {
            alert("Password & Confirm Password does not match");

        } else {
            try {
                const response = await axios.post(`${url}/register`, {}, {
                    headers: {
                        "Username": SignupData.Username,
                        "Name": SignupData.Name,
                        "Password": SignupData.Password
                    }
                })
                if (response.data.error) {
                    alert(response.data.error)
                    setgetOTP(false);
                    setverifyOTP(false)
                }
                console.log(response.data);
                if (response.data.success) {
                    setsignUp(true);
                    setUser(response.data.user)
                    setloggedIn(true)
                }

                localStorage.setItem("token", response.data.token);

            } catch (error) {
                console.log(error);
            }
            setSignupData({
                Name: "",
                Username: "",
                Password: "",
                confirmPassword: ""
            })
        }
    })

    const handleGetOTP = (async (event) => {
        event.preventDefault();

        function ValidateName(name) {
            if (!name) {
                return false;
            }

            for (var i = 0; i < name.length; i++) {     // to check if name is alphabetic or not.
                var charCode = name.charCodeAt(i);
                if (!(charCode > 64 && charCode < 91) && !(charCode > 96 && charCode < 123)) {
                    return false;
                }
            }
            return true;
        }

        function ValidateEmail(input) {
            var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
            if (input.match(validRegex)) {
                return true;
            } else {
                return false;
            }
        }

        var ValidateEmail = ValidateEmail(SignupData.Username);
        var ValidateName = ValidateName(SignupData.Name)


        if (!getOTP && ValidateEmail && ValidateName) {
            console.log("clicked");
            try {
                const response = await axios.get(`${url}/getotp?email=${SignupData.Username}`);
                console.log(response.data);
                if (response.data.success) {
                    alert("otp sent successfully")
                    setgetOTP(true);
                } else {
                    alert(response.data.error)
                }
            } catch (error) {
                console.log(error);
            }

        } else if (!ValidateEmail) {
            alert("Invalid email address!");
        } else if (!ValidateName) {
            alert("Invalid Name!");
        }
    })

    const handleOTPchange = ((event) => {
        setotp(event.target.value);
    })

    const submitOTP = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post(`${url}/submitotp?otp=${otp}&email=${SignupData.Username}`);
            // console.log(response.data.error);
            if (response.data.success) {
                setverifyOTP(true)
                alert(response.data.success)
            } else if (response.data.error) {
                setverifyOTP(false);
                setgetOTP(false)
                alert(response.data.error)
            }
        } catch (error) {
            console.log(error);
        }

    }

    return (
        <>
            <Navbar />

            {
                /* <div className='signup_main'>
            <div className='signup_con'>
                <div className='signup_content'>
                    <div className='signuptitle'>
                        <h2>Sign Up</h2>
                    </div>
                    <div className='webimgsignup_con'>
                        <Google setsignUp={setsignUp}  signUp={signUp} />
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
                                        pattern="[A-Za-z]{1,32}"
                                        name='Name'
                                        value={SignupData.Name}
                                        onChange={handleSignup}
                                        spellCheck={false}
                                    />
                                </div>
                            </div>
                            <div className='signup_D'>
                                <div className='singup_label'>
                                    <label htmlFor='username'>Email</label>
                                </div>
                                <div>
                                    <input
                                        className='singup_input'
                                        type='email'
                                        id='username'
                                        name='Username'
                                        value={SignupData.Username}
                                        onChange={handleSignup}
                                        spellCheck={false}
                                    />
                                </div>
                            </div>

                            {!getOTP && <div className='signup_button'>
                                <button onClick={handleGetOTP} style={{ cursor: "pointer" }}>Get OTP</button>
                            </div>}



                            {(!verifyOTP && getOTP) && <div className='signup_D'>
                                <div className='singup_label'>
                                    <label htmlFor='username'>Enter OTP</label>
                                </div>
                                <div>
                                    <input
                                        className='singup_input'
                                        type='text'
                                        id='otp'
                                        name='otp'
                                        value={otp}
                                        onChange={handleOTPchange}
                                        maxLength={6}
                                        spellCheck={false}
                                    />
                                </div>
                                <div style={{ marginTop: "30px" }} className='signup_button' onClick={submitOTP}>
                                    <button>Submit OTP</button>
                                </div>
                            </div>}





                            {verifyOTP && <>
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

                                <div className='signup_D'>
                                    <div className='singup_label'>
                                        <label htmlFor='password'>Confirm Password</label>
                                    </div>
                                    <div>
                                        <input
                                            className='singup_input'
                                            type='password'
                                            id='confirmPassword'
                                            name='confirmPassword'
                                            value={SignupData.confirmPassword}
                                            onChange={handleSignup}
                                        />
                                    </div>
                                </div>

                            </>}
                        </form>
                    </div>
                    {verifyOTP &&
                        <>
                            <div>
                                <hr />
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
                        </>}
                    <div>
                        <hr />
                    </div>
                    <div className='signup_footer'>
                        <p>Already have an account?</p>
                        <p><Link to="/sign-in">Sign In</Link></p>
                    </div>

                </div>
            </div>
            <div className='signup_img'>
                <div>
                    <img src={SignUpImg} alt="SignUp" />
                </div>
            </div>
            
            
        </div> */}



            <div className='main-signup-div'>
                <section id='signup-form'>
                    <form>

                        <div className='heading-signup'>
                            <h2>Sign up</h2>
                        </div>


                        <div className='oauth-div'>
                            <Google setsignUp={setsignUp} signUp={signUp} />
                            <Facebook />
                            <Apple />
                        </div>


                        <div className='hr-signup'>
                            <hr />
                        </div>


                        <div className='parent-name-field  form-inputs'>
                            <div>
                                <label htmlFor='name'>Name</label>
                            </div>
                            <div>
                                <input
                                    type='text'
                                    id='name'
                                    pattern="[A-Za-z]{1,32}"
                                    name='Name'
                                    value={SignupData.Name}
                                    onChange={handleSignup}
                                    spellCheck={false}
                                />
                            </div>
                        </div>


                        <div className='parent-username-field form-inputs'>
                            <div>
                                <label htmlFor='username'>Username</label>
                            </div>
                            <div>
                                <input
                                    type='email'
                                    id='username'
                                    name='Username'
                                    value={SignupData.Username}
                                    onChange={handleSignup}
                                    spellCheck={false}
                                />
                            </div>
                        </div>


                        {!getOTP && <div className='get-otp-btn sign-up-btns'>
                            <button onClick={handleGetOTP}>Get OTP</button>
                        </div>}


                        {(!verifyOTP && getOTP) &&
                            <>
                                <div className='parent-otp-field form-inputs'>
                                    <div>
                                        <label htmlFor='username'>Enter OTP</label>
                                    </div>
                                    <div>
                                        <input
                                            type='text'
                                            id='otp'
                                            name='otp'
                                            value={otp}
                                            onChange={handleOTPchange}
                                            maxLength={6}
                                            spellCheck={false}
                                        />
                                    </div>
                                </div>


                                <div className='submit-otp-btn sign-up-btns'>
                                    <button onClick={submitOTP}>Submit OTP</button>
                                </div>
                            </>
                        }



                        {verifyOTP &&
                            <>
                                <div className='parent-password-field form-inputs'>
                                    <div>
                                        <label htmlFor='password'>Password</label>
                                    </div>
                                    <div>
                                        <input
                                            type='password'
                                            id='password'
                                            name='Password'
                                            value={SignupData.Password}
                                            onChange={handleSignup}
                                        />
                                    </div>
                                </div>


                                <div className='parent-confirmPassword-field form-inputs'>
                                    <div>
                                        <label htmlFor='password'>Confirm Password</label>
                                    </div>
                                    <div>
                                        <input
                                            type='password'
                                            id='confirmPassword'
                                            name='confirmPassword'
                                            value={SignupData.confirmPassword}
                                            onChange={handleSignup}
                                        />
                                    </div>
                                </div>


                                <div className='terms-conditions-field'>
                                    <div>
                                        <input type='checkbox' />
                                    </div>
                                    <div>
                                        <p> I agree with <a href='#'>Terms</a> and <a href='#'>Privacy</a> </p>
                                    </div>
                                </div>


                                <div className='signup-btn  sign-up-btns' onClick={SubmitsignupData}>
                                    <button>Sign Up</button>
                                </div>
                            </>
                        }

                        <div className='hr-signup'>
                            <hr />
                        </div>

                        <div className='sign-in-link'>
                            <div><p>Already have an account?</p></div>
                            <div><p><Link to="/sign-in">Log In</Link></p></div>
                        </div>

                    </form>
                </section>
                <section id='signup-rightside-img'>
                    <div>
                        <img src={SignUpImg} alt="SignUp" />
                    </div>
                </section>
            </div>

            {
                signUp && <Navigate to="/" replace={true} />
            }
        </>
    )
}