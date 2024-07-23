import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from "axios"
const server = import.meta.env.VITE_SERVER;

function CSTLastButton({ previous, from, lastForm }) {

    const navigate = useNavigate();
    const handleSubmit = async () => {
        if (from === "FormA2") {
            var CompleteForm = JSON.parse(localStorage.getItem("CompleteForm"));
            CompleteForm = { ...CompleteForm, ...lastForm };

            try {
                const response = await axios.post(`${server}/cstdata`, {
                    CompleteForm: CompleteForm
                })
                console.log(response.data)
                navigate("/")
            } catch (error) {
                console.log(error);
            }

            const localstorage = { ...localStorage };
            for (var key in localstorage) {
                if (key === "token") {
                    continue;
                } else {
                    // console.log(localstorage[key]);
                    localStorage.removeItem(key);
                }
            }

        }
    }

    return (
        <div className="buttons">

            <button className="prevbtn">
                <Link to={previous}>Previous</Link>
            </button>

            <button
                onClick={handleSubmit}
                style={{ cursor: "pointer" }}
                className="nextbtn"
            >
                Submit
            </button>
        </div>
    )
}

export default CSTLastButton