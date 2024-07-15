import axios from "axios";
const serevr = import.meta.env.VITE_SERVER;

export const OnSubmitForm = async (
  completeform,
  table1,
  table2,
  table3,
  table4,
  MainForm
) => {
  try {
    const response = await axios.post(`${serevr}/${MainForm}`, {
      completeform,
      table1,
      table2,
      table3,
      table4,
    });
    console.log(response);
    if (response.data.result.B14 == "Yes") {
      localStorage.setItem(
        "Unique Code",
        `${MainForm} : ${JSON.stringify(response.data.result.uniqueCode)}`
      );
    }
  } catch (error) {
    console.log(error);
  }
};

export const OnAMBSubmitForm = async (
  completeform,
  table1,
  table2,
  MainForm
) => {
  try {
    const uniqueCode = localStorage.getItem("Unique Code");
    const response = await axios.post(`${serevr}/${MainForm}`, {
      completeform,
      table1,
      table2,
      uniqueCode,
    });
    console.log(response);
  } catch (error) {
    console.log(error);
  }
};

// export default {OnSubmitForm};
