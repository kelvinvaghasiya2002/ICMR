import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import CreateEmergenciesTable from '../../../utils/CreateEmergenciesTable';

function Buttons({ prevText, prev, nextText, next, formName, formData, validateForm, onClick, formType }) {
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = React.useState(false);

    const handleSubmit = async (e) => {
        setIsLoading(true);
        if (validateForm && !validateForm()) {
            e.preventDefault();
            setIsLoading(false);
            return;
        }
        if (onClick) {
            await onClick();
        }

        if (next === "/death") {
            CreateEmergenciesTable();
        }

        // let targetFormType = localStorage.getItem("CompleteForm");
        let targetFormType;

        // switch (formType) {
        //     case "hfat1":
        //         targetFormType = localStorage.getItem("completeFormHfat1");
        //         break;
        //     case "hfat2":
        //         targetFormType = localStorage.getItem("completeFormHfat2");
        //         break;
        //     case "hfat3":
        //         targetFormType = localStorage.getItem("completeFormHfat3");
        //         break;
        //     case "cst":
        //         targetFormType = localStorage.getItem("completeFormCST");
        //         break;
        //     case "autopsy":
        //         targetFormType = localStorage.getItem("completeFormAutopsy");
        //         break;
        //     default:
        //         targetFormType = localStorage.getItem("CompleteForm")
        //         break;
        // }

        switch (formType) {
            case "hfat1":
                targetFormType = "completeFormHfat1";
                break;
            case "hfat2":
                targetFormType = "completeFormHfat2";
                break;
            case "hfat3":
                targetFormType = "completeFormHfat3";
                break;
            case "cst":
                targetFormType = "completeFormCST";
                break;
            case "autopsy":
                targetFormType = "completeFormAutopsy";
                break;
            default:
                targetFormType = "letsee";
        }

        
        // if (formName === "formac4") {
        //     var formac4 = localStorage.getItem("formac4");
        //     formac4 = JSON.parse(formac4);

        //     if (targetFormType) {
        //         targetFormType = JSON.parse(targetFormType);
        //         const data = { ...targetFormType, ...formac4 };
        //         localStorage.setItem(targetFormType, JSON.stringify(data));
        //     } else {
        //         localStorage.setItem(targetFormType, JSON.stringify(formac4));
        //     }
        // } else {
        //     if (targetFormType) {
        //         targetFormType = JSON.parse(targetFormType);
        //         const data = { ...targetFormType, ...formData };
        //         localStorage.setItem(targetFormType, JSON.stringify(data));
        //     } else {
        //         localStorage.setItem(targetFormType, JSON.stringify(formData));
        //     }
        //     localStorage.setItem(formName, JSON.stringify(formData));
        // }


        
        if (formName === "formac4") {
            let formac4 = localStorage.getItem("formac4");
            formac4 = formac4 ? JSON.parse(formac4) : {};

            let storedData = localStorage.getItem(targetFormType);
            storedData = storedData ? JSON.parse(storedData) : {};

            const data = { ...storedData, ...formac4 };
            localStorage.setItem(targetFormType, JSON.stringify(data));
        } else {
            let storedData = localStorage.getItem(targetFormType);
            storedData = storedData ? JSON.parse(storedData) : {};

            const data = { ...storedData, ...formData };
            localStorage.setItem(targetFormType, JSON.stringify(data));
            localStorage.setItem(formName, JSON.stringify(formData));
        }

      
        setIsLoading(false);

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
