import axios from "axios"
const serevr = import.meta.env.VITE_SERVER;

const OnSubmitForm = async (completeform , table1 , table2 , table3 , table4 , MainForm)=>{
    try {
        const response = await axios.post(`${serevr}/${MainForm}`,{
            completeform , table1 , table2 , table3 , table4
        })
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

export default OnSubmitForm;