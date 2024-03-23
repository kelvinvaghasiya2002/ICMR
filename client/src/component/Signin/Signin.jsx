import { useState } from 'react'
import './Signin.css'
import GoogleImg from '../../assets/Google_Icon.png'
import FaceBookImg from '../../assets/FaceBook_Icon.png'
import AppleImg from '../../assets/Apple_Icon.png'
import SignIn_Img from '../../assets/SignIn_Img.png'

export default function SignIn() {

    let [SigninData, setSigninData] = useState({
        Email: "",
        Password: "",
    })

    let handleSignin = ((Event) => {
        console.log(SigninData);
        setSigninData((crrdata) => {
            return { ...crrdata, [Event.target.name]: Event.target.value }
        })

    })

    let SubmitData = ((Event) => {
        console.log("Submited");
        console.log(SigninData)
        Event.preventDefault();
        setSigninData({
            Email: "",
            Password: "",
        })
    })
    return (
        <div className='sigin_main'>
            <div className='sigin_con'>
                <div className='sigin_content'>
                    <div className='signintitle'>
                        <h4>WELCOME BACK!</h4>
                    </div>
                    <div className='singup_way'>
                        <p>Don't have a account, <a href='#'>Sign up</a></p>
                    </div>

                    <div className='email'>

                        <div className='email_label'>
                            <label htmlFor='username'>Username</label>
                        </div>
                        
                        <div>
                            <input
                                className='email_input'
                                placeholder='hello@paruluniversity.ac.in'
                                type='text'
                                id='username'
                                name='Email'
                                value={SigninData.Email}
                                onChange={handleSignin}
                                spellCheck={false}
                            />
                        </div>
                    </div>
                    <div>
                        <div className='password_label'>
                            <label htmlFor='password'>Password</label>
                        </div>
                        <div>
                            <input
                                className='password_input'
                                type='password'
                                id='password'
                                name='Password'
                                value={SigninData.Password}
                                onChange={handleSignin}
                            />
                        </div>
                    </div>

                    <div className='forgetpass_con'>
                        <div className='radio'>
                            <input
                                type="radio"
                            />
                            <label>Remember me</label>
                        </div>
                        <div className='forgetpass'>
                            <p><a href='#'>forget password?</a></p>
                        </div>
                    </div>

                    <div className='signin_button'>
                        <button onClick={SubmitData}>Sign In</button>
                    </div>

                    <div className='footer_con'>
                        <span>or continue with</span>
                    </div>
                    <div className='webimg_con'>
                        <div className='webimg'>
                            <img src={GoogleImg} alt="Google" />
                        </div>
                        <div className='webimg'>
                            <img src={FaceBookImg} alt="FaceBook" />
                        </div>
                        <div className='webimg'>
                            <img src={AppleImg} alt="Apple" />
                        </div>
                    </div>
                </div>
            </div>
            <div className='signin_img'>
                <div>
                    <img src={SignIn_Img} alt="SignInImg" />
                </div>
            </div>
        </div>
    )
}