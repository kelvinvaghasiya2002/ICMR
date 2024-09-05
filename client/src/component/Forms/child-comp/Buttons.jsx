import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import CreateEmergenciesTable from '../../../utils/CreateEmergenciesTable';

function Buttons({ prevText, prev, nextText, next, formName, formData, validateForm,onClick }) {
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = React.useState(false);

    const handleSubmit = async (e) => {
        setIsLoading(true);
        if (validateForm && !validateForm()) {
            e.preventDefault();
            setIsLoading(false);
            return;
        }
        if(onClick){
            await onClick();
        }

        if(next === "/death"){
            CreateEmergenciesTable();   
        }
        
        var CompleteForm = localStorage.getItem("CompleteForm");
        if (formName === "formac4") {
            var formac4 = localStorage.getItem("formac4");
            formac4 = JSON.parse(formac4);

            if (CompleteForm) {
                CompleteForm = JSON.parse(CompleteForm);
                const data = { ...CompleteForm, ...formac4 };
                localStorage.setItem("CompleteForm", JSON.stringify(data));
            } else {
                localStorage.setItem("CompleteForm", JSON.stringify(formac4));
            }
        } else {
            if (CompleteForm) {
                CompleteForm = JSON.parse(CompleteForm);
                const data = { ...CompleteForm, ...formData };
                localStorage.setItem("CompleteForm", JSON.stringify(data));
            } else {
                localStorage.setItem("CompleteForm", JSON.stringify(formData));
            }
            localStorage.setItem(formName, JSON.stringify(formData));
        }

        navigate(next); // navigate is a function that navigates to the next page
    }

    return (
        <div className='buttons'>
            <button className='prevbtn'><Link to={prev}>{prevText}</Link></button>
            {/* <Link to={next} onClick={handleSubmit} className='nextbtn'>{nextText}</Link> */}
            <button onClick={handleSubmit} className='nextbtn' disabled={isLoading} >{isLoading ? "Loading..." : nextText}</button>
        </div>
    )
}

export default Buttons
