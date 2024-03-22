import { useState } from 'react';
import './Queries.css'
import ContactImg from '../../../assets/contact_us.png'

export default function Queries() {
    let [QueriesForm, setQueriesForm] = useState({
        Name: "",
        Email: "",
        Phone: "",
        Message: "",
    })

    let handleQuerieForm = ((Event) => {
        // console.log(QueriesForm)
        setQueriesForm((crrdata) => {
            return { ...crrdata, [Event.target.name]: Event.target.value}
        })
    })

    let SubmitQuerieForm = ((Event) => {
        Event.preventDefault();
        console.log(QueriesForm);
        setQueriesForm({
            Name: "",
            Email: "",
            Phone_Num: "",
            Message: ""
        })
    })

    return (
        <div className='contactus_first_page'>
            <div className='contactus_img'>
                <div>
                    <img src={ContactImg} alt="ContactUs" />
                </div>
            </div>
            <div className="contactus_content">
                <div className='con_title'>
                    <h6>contact us</h6>
                </div>
                <div className='con_querise'>
                    <h2>LET'S ANSWER YOUR QUERIES</h2>
                </div>
                <div>
                    <div className='contextus_form'>
                        <form>
                            <div>
                                <div>
                                    <label htmlFor='your name'>Your name</label>
                                </div>
                                <div>
                                    <input
                                        type='text'
                                        placeholder='Your Full Name'
                                        id='your name'
                                        onChange={handleQuerieForm}
                                        // defaultValue={QueriesForm.Name}
                                        value={QueriesForm.Name}
                                        name='Name'
                                        
                                    />
                                </div>
                            </div>
                            <div>
                                <div>
                                    <label htmlFor='your email'>Your Email</label>
                                </div>
                                <div>
                                    <input
                                        type='email'
                                        placeholder='Your email'
                                        id='your email'
                                        onChange={handleQuerieForm}
                                        defaultValue={QueriesForm.Email}
                                        // value={QueriesForm.Email}
                                        name='Email'
                                        
                                    />
                                </div>
                            </div>
                            <div>
                                <div>
                                    <label htmlFor='your phonenum'>Your Phone Number</label>
                                </div>
                                <div>
                                    <input
                                        type='number'
                                        placeholder='your phone Number'
                                        id='your phonenum'
                                        onChange={handleQuerieForm}
                                        defaultValue={QueriesForm.Phone}
                                        // value={QueriesForm.Phone}
                                        name='Phone'
                                        
                                    />
                                </div>
                            </div>
                            <div>
                                <div>
                                    <label htmlFor='your Messages'>Messages</label>
                                </div>
                                <div>
                                    <textarea
                                        id='your Messages'
                                        placeholder='About What do you want to Talk?'
                                        rows={8}
                                        defaultValue={QueriesForm.Message}
                                        // value={QueriesForm.Message}
                                        name='Message'
                                        onChange={handleQuerieForm}
                                    />
                                </div>
                            </div>
                            <div className='con_button'>
                                <button onClick={SubmitQuerieForm}>send the Message</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}